import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

// True pixel-by-pixel Gaussian radial glow texture (zero hard ring or circle edge)
function createGaussianGlowTexture() {
  const size = 256;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");
  const imgData = ctx.createImageData(size, size);
  const data = imgData.data;
  const half = size / 2;

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const dx = (x - half) / half;
      const dy = (y - half) / half;
      const r2 = dx * dx + dy * dy;
      const idx = (y * size + x) * 4;
      if (r2 >= 1.0) {
        data[idx] = 255;
        data[idx + 1] = 255;
        data[idx + 2] = 255;
        data[idx + 3] = 0;
      } else {
        // Smooth Gaussian falloff + windowing to 0 at r=1
        const windowFade = Math.pow(1.0 - r2, 2.2);
        const gaussian = Math.exp(-r2 * 4.2) * windowFade;
        data[idx] = 255;
        data[idx + 1] = 255;
        data[idx + 2] = 255;
        data[idx + 3] = Math.round(255 * gaussian);
      }
    }
  }

  ctx.putImageData(imgData, 0, 0);
  const tex = new THREE.CanvasTexture(canvas);
  tex.needsUpdate = true;
  return tex;
}

// 3D oblique gyroscopic tilts matching the reference video (thumb_1080p.jpg)
const SHELL_TILTS = [
  new THREE.Euler(0.96, 0.72, -0.45),
  new THREE.Euler(-1.05, 0.68, 0.42),
  new THREE.Euler(1.26, -0.16, -0.18),
  new THREE.Euler(-1.14, -0.58, 0.55),
  new THREE.Euler(1.02, -0.78, -0.36),
  new THREE.Euler(-1.22, 0.44, -0.62),
  new THREE.Euler(1.18, 0.52, 0.28),
];

export class AtomScene {
  constructor(container) {
    this.container = container;
    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(
      34,
      container.clientWidth / Math.max(1, container.clientHeight),
      0.1,
      100
    );

    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(container.clientWidth, container.clientHeight);
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.22;
    container.appendChild(this.renderer.domElement);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.06;
    this.controls.enablePan = false;
    this.controls.minDistance = 8.5;
    this.controls.maxDistance = 22.0;
    this.controls.target.set(0, 0.08, 0);

    this.glowTexture = createGaussianGlowTexture();

    // Master atom root group positioned in the clear vertical center band
    this.atomRoot = new THREE.Group();
    this.atomRoot.position.set(0, 0.08, 0);
    this.scene.add(this.atomRoot);

    this.nucleusGroup = new THREE.Group();
    this.orbitalGroup = new THREE.Group();
    this.shellsGroup = new THREE.Group();
    this.atomRoot.add(this.nucleusGroup);
    this.atomRoot.add(this.orbitalGroup);
    this.atomRoot.add(this.shellsGroup);

    // 1. Wide volumetric backlight glow behind the 3D atom
    const backGlowMat = new THREE.SpriteMaterial({
      map: this.glowTexture,
      color: 0x26d0ce,
      transparent: true,
      opacity: 0.62,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      depthTest: false,
    });
    this.backGlowSprite = new THREE.Sprite(backGlowMat);
    this.backGlowSprite.position.set(0, 0, -1.0);
    this.backGlowSprite.scale.set(6.8, 6.8, 1);
    this.backGlowSprite.renderOrder = -2;
    this.atomRoot.add(this.backGlowSprite);

    // 2. Intense inner core glow right behind the nucleus & orbitals
    const coreSpriteMat = new THREE.SpriteMaterial({
      map: this.glowTexture,
      color: 0xffffff,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      depthTest: false,
    });
    this.coreGlowSprite = new THREE.Sprite(coreSpriteMat);
    this.coreGlowSprite.position.set(0, 0, -0.3);
    this.coreGlowSprite.scale.set(3.1, 3.1, 1);
    this.coreGlowSprite.renderOrder = -1;
    this.atomRoot.add(this.coreGlowSprite);

    // Lighting setup
    this.ambientLight = new THREE.AmbientLight(0xffffff, 0.78);
    this.scene.add(this.ambientLight);

    this.keyLight = new THREE.DirectionalLight(0xffffff, 2.6);
    this.keyLight.position.set(6, 9, 8);
    this.scene.add(this.keyLight);

    this.rimLight = new THREE.PointLight(0x26d0ce, 5.5, 22);
    this.rimLight.position.set(-5, -4, 6);
    this.scene.add(this.rimLight);

    this.coreLight = new THREE.PointLight(0x26d0ce, 4.4, 14);
    this.coreLight.position.set(0, 0.08, 0);
    this.scene.add(this.coreLight);

    this.nucleonGeo = new THREE.SphereGeometry(0.155, 18, 18);
    this.electronGeo = new THREE.SphereGeometry(0.092, 18, 18);

    this.currentColor = new THREE.Color(0x26d0ce);
    this.targetColor = new THREE.Color(0x26d0ce);

    // Base scale calibrated so the 3D atom fits comfortably between the hero header and periodic table dock
    this.baseScale = 0.66;
    this.transitionScale = 1.0;
    this.transitionVelocity = 0.0;

    this.shellData = [];
    this.clock = new THREE.Clock();

    this._onResize = this.onResize.bind(this);
    window.addEventListener("resize", this._onResize);
    this.onResize();
  }

  onResize() {
    if (!this.container) return;
    const w = this.container.clientWidth;
    const h = Math.max(1, this.container.clientHeight);
    this.camera.aspect = w / h;
    // Scale camera distance on shorter screens so the 3D atom never touches the top or bottom text
    const heightFactor = Math.max(1.0, 880 / Math.max(560, h));
    this.camera.position.set(0, 0.08, 14.2 * heightFactor);
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(w, h);
  }

  clearGroup(group) {
    while (group.children.length > 0) {
      const child = group.children[0];
      group.remove(child);
      if (
        child.geometry &&
        child.geometry !== this.nucleonGeo &&
        child.geometry !== this.electronGeo
      ) {
        child.geometry.dispose();
      }
      if (child.material) {
        if (Array.isArray(child.material)) {
          child.material.forEach((m) => m.dispose());
        } else {
          child.material.dispose();
        }
      }
    }
  }

  setElement(element) {
    this.targetColor.set(element.color);

    this.transitionScale = 0.86;
    this.transitionVelocity = 2.2;

    this.buildNucleus(element);
    this.buildOrbitals(element);
    this.buildShells(element);
  }

  buildNucleus(element) {
    this.clearGroup(this.nucleusGroup);
    const col = new THREE.Color(element.color);
    const whiteCol = new THREE.Color(0xeef6ff).lerp(col, 0.25);

    const protonMat = new THREE.MeshPhysicalMaterial({
      color: col,
      emissive: col,
      emissiveIntensity: 0.68,
      roughness: 0.18,
      metalness: 0.1,
      clearcoat: 1.0,
    });

    const neutronMat = new THREE.MeshPhysicalMaterial({
      color: whiteCol,
      emissive: col,
      emissiveIntensity: 0.24,
      roughness: 0.15,
      metalness: 0.15,
      clearcoat: 1.0,
    });

    const count = Math.min(34, Math.max(4, Math.round(Math.pow(element.z, 0.65) * 2.0)));
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));

    for (let i = 0; i < count; i++) {
      const mesh = new THREE.Mesh(
        this.nucleonGeo,
        i % 2 === 0 ? protonMat : neutronMat
      );
      if (count === 1) {
        mesh.position.set(0, 0, 0);
      } else {
        const y = 1 - (i / (count - 1)) * 2;
        const radiusAtY = Math.sqrt(Math.max(0, 1 - y * y));
        const theta = goldenAngle * i;
        const shellR = (0.14 + Math.cbrt(count) * 0.1) * (0.65 + 0.35 * ((i % 3) / 2));
        mesh.position.set(
          Math.cos(theta) * radiusAtY * shellR,
          y * shellR,
          Math.sin(theta) * radiusAtY * shellR
        );
      }
      this.nucleusGroup.add(mesh);
    }
  }

  buildOrbitals(element) {
    this.clearGroup(this.orbitalGroup);
    const col = new THREE.Color(element.color);
    const blockType = element.block.toLowerCase();

    const outerLobeMat = new THREE.MeshPhysicalMaterial({
      color: col.clone().lerp(new THREE.Color(0xffffff), 0.3),
      emissive: col,
      emissiveIntensity: 0.3,
      transparent: true,
      opacity: 0.38,
      roughness: 0.08,
      metalness: 0.05,
      clearcoat: 1.0,
      clearcoatRoughness: 0.06,
      side: THREE.DoubleSide,
      depthWrite: false,
    });

    const innerCoreMat = new THREE.MeshBasicMaterial({
      color: col.clone().lerp(new THREE.Color(0xffffff), 0.6),
      transparent: true,
      opacity: 0.28,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    if (blockType.includes("s-block")) {
      const sRadius = element.z <= 2 ? 1.12 : 1.4;
      const outerSphere = new THREE.Mesh(
        new THREE.SphereGeometry(sRadius, 42, 42),
        outerLobeMat
      );
      const innerSphere = new THREE.Mesh(
        new THREE.SphereGeometry(sRadius * 0.58, 32, 32),
        innerCoreMat
      );
      this.orbitalGroup.add(outerSphere, innerSphere);
    } else if (blockType.includes("p-block")) {
      const capsuleOuterGeo = new THREE.CapsuleGeometry(0.45, 2.2, 24, 36);
      const capsuleInnerGeo = new THREE.CapsuleGeometry(0.18, 1.85, 16, 24);

      const axes = [
        new THREE.Euler(0, 0, 0),
        new THREE.Euler(0, 0, Math.PI / 2),
        new THREE.Euler(Math.PI / 2, 0, 0),
      ];

      axes.forEach((rot) => {
        const lobeWrap = new THREE.Group();
        lobeWrap.rotation.copy(rot);
        const outerMesh = new THREE.Mesh(capsuleOuterGeo, outerLobeMat);
        const innerMesh = new THREE.Mesh(capsuleInnerGeo, innerCoreMat);
        lobeWrap.add(outerMesh, innerMesh);
        this.orbitalGroup.add(lobeWrap);
      });
      this.orbitalGroup.rotation.set(0.42, -0.48, 0.32);
    } else if (blockType.includes("d-block")) {
      const capsuleOuterGeo = new THREE.CapsuleGeometry(0.38, 1.95, 20, 32);
      const capsuleInnerGeo = new THREE.CapsuleGeometry(0.16, 1.65, 14, 20);

      const dAngles = [
        new THREE.Euler(0, 0, Math.PI / 4),
        new THREE.Euler(0, 0, -Math.PI / 4),
        new THREE.Euler(Math.PI / 4, 0, 0),
        new THREE.Euler(-Math.PI / 4, 0, 0),
      ];
      dAngles.forEach((rot) => {
        const wrap = new THREE.Group();
        wrap.rotation.copy(rot);
        wrap.add(
          new THREE.Mesh(capsuleOuterGeo, outerLobeMat),
          new THREE.Mesh(capsuleInnerGeo, innerCoreMat)
        );
        this.orbitalGroup.add(wrap);
      });

      const collarGeo = new THREE.TorusGeometry(0.92, 0.19, 20, 48);
      const collarMesh = new THREE.Mesh(collarGeo, outerLobeMat);
      collarMesh.rotation.x = Math.PI / 2;
      this.orbitalGroup.add(collarMesh);
      this.orbitalGroup.rotation.set(0.35, 0.45, -0.22);
    } else {
      const capsuleOuterGeo = new THREE.CapsuleGeometry(0.34, 2.0, 18, 28);
      const capsuleInnerGeo = new THREE.CapsuleGeometry(0.15, 1.68, 12, 18);

      const fRotations = [
        new THREE.Euler(0.62, 0.0, 0.62),
        new THREE.Euler(-0.62, 0.0, 0.62),
        new THREE.Euler(0.62, 0.0, -0.62),
        new THREE.Euler(-0.62, 0.0, -0.62),
        new THREE.Euler(0.0, 0.62, Math.PI / 2),
      ];
      fRotations.forEach((rot) => {
        const wrap = new THREE.Group();
        wrap.rotation.copy(rot);
        wrap.add(
          new THREE.Mesh(capsuleOuterGeo, outerLobeMat),
          new THREE.Mesh(capsuleInnerGeo, innerCoreMat)
        );
        this.orbitalGroup.add(wrap);
      });
      this.orbitalGroup.rotation.set(0.42, -0.35, 0.25);
    }
  }

  buildShells(element) {
    this.clearGroup(this.shellsGroup);
    this.shellData = [];

    const shells = element.shells;
    const numShells = shells.length;
    const col = new THREE.Color(element.color);
    const electronCoreColor = new THREE.Color(0xffffff).lerp(col, 0.22);

    const ringMat = new THREE.MeshPhysicalMaterial({
      color: col.clone().lerp(new THREE.Color(0xffffff), 0.18),
      emissive: col,
      emissiveIntensity: 0.48,
      transparent: true,
      opacity: 0.78,
      roughness: 0.2,
      metalness: 0.1,
    });

    const electronMat = new THREE.MeshPhysicalMaterial({
      color: electronCoreColor,
      emissive: col.clone().lerp(new THREE.Color(0xffffff), 0.6),
      emissiveIntensity: 0.95,
      roughness: 0.1,
      clearcoat: 1.0,
    });

    const minR = 1.02;
    const maxR = Math.min(2.35, 1.25 + numShells * 0.19);
    const stepR = numShells > 1 ? (maxR - minR) / (numShells - 1) : 0;

    for (let sIdx = 0; sIdx < numShells; sIdx++) {
      const radius = numShells === 1 ? 1.5 : minR + sIdx * stepR;
      const eCount = shells[sIdx];
      const tubeRadius = sIdx === numShells - 1 ? 0.028 : 0.021;

      const shellPivot = new THREE.Group();
      const baseTilt = SHELL_TILTS[sIdx % SHELL_TILTS.length];
      shellPivot.rotation.copy(baseTilt);

      const torusGeo = new THREE.TorusGeometry(radius, tubeRadius, 16, 96);
      const torusMesh = new THREE.Mesh(torusGeo, ringMat);
      shellPivot.add(torusMesh);

      const carrier = new THREE.Group();
      for (let e = 0; e < eCount; e++) {
        const angle = (e / eCount) * Math.PI * 2;
        const eMesh = new THREE.Mesh(this.electronGeo, electronMat);
        eMesh.position.set(Math.cos(angle) * radius, Math.sin(angle) * radius, 0);

        const spriteMat = new THREE.SpriteMaterial({
          map: this.glowTexture,
          color: col.clone().lerp(new THREE.Color(0xffffff), 0.45),
          transparent: true,
          opacity: 0.75,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
        });
        const halo = new THREE.Sprite(spriteMat);
        halo.scale.set(0.42, 0.42, 1);
        eMesh.add(halo);

        carrier.add(eMesh);
      }

      shellPivot.add(carrier);
      this.shellsGroup.add(shellPivot);

      const direction = sIdx % 2 === 0 ? 1 : -1;
      const angularSpeed = direction * (1.15 - sIdx * 0.11);
      this.shellData.push({
        pivot: shellPivot,
        carrier,
        baseTilt: baseTilt.clone(),
        angularSpeed,
        phaseOffset: sIdx * 1.1,
      });
    }
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    const dt = Math.min(0.05, this.clock.getDelta());
    const elapsed = this.clock.getElapsedTime();

    this.currentColor.lerp(this.targetColor, Math.min(1, dt * 8));
    this.rimLight.color.copy(this.currentColor);
    this.coreLight.color.copy(this.currentColor);
    this.backGlowSprite.material.color.copy(this.currentColor);
    this.coreGlowSprite.material.color
      .copy(this.currentColor)
      .lerp(new THREE.Color(0xffffff), 0.38);

    const stiffness = 140;
    const damping = 14;
    const force = (1.0 - this.transitionScale) * stiffness;
    this.transitionVelocity += force * dt;
    this.transitionVelocity *= Math.exp(-damping * dt);
    this.transitionScale += this.transitionVelocity * dt;
    this.atomRoot.scale.setScalar(this.baseScale * this.transitionScale);

    this.nucleusGroup.rotation.y = elapsed * 0.55;
    this.nucleusGroup.rotation.x = Math.sin(elapsed * 0.4) * 0.25;

    this.orbitalGroup.rotation.y += dt * 0.22;
    this.orbitalGroup.rotation.z += dt * 0.06;

    for (let i = 0; i < this.shellData.length; i++) {
      const sd = this.shellData[i];
      sd.carrier.rotation.z += sd.angularSpeed * dt;
      sd.pivot.rotation.x =
        sd.baseTilt.x + Math.sin(elapsed * 0.45 + sd.phaseOffset) * 0.06;
      sd.pivot.rotation.y =
        sd.baseTilt.y + Math.cos(elapsed * 0.38 + sd.phaseOffset) * 0.06;
    }

    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  }
}
