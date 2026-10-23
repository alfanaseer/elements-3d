import { ELEMENTS, ELEMENTS_BY_Z, ELEMENTS_BY_SYMBOL } from "./elementsData.js";
import { SONG_EVENTS_102, LYRIC_LINES_102 } from "./songTimeline.js";
import { AtomScene } from "./atomScene.js";

// Physical wavelength (380..750 nm) to visible RGB hex/css color
function wavelengthToCssColor(nm) {
  let r = 0,
    g = 0,
    b = 0;
  if (nm >= 380 && nm < 440) {
    r = -(nm - 440) / (440 - 380);
    g = 0.0;
    b = 1.0;
  } else if (nm >= 440 && nm < 490) {
    r = 0.0;
    g = (nm - 440) / (490 - 440);
    b = 1.0;
  } else if (nm >= 490 && nm < 510) {
    r = 0.0;
    g = 1.0;
    b = -(nm - 510) / (510 - 490);
  } else if (nm >= 510 && nm < 580) {
    r = (nm - 510) / (580 - 510);
    g = 1.0;
    b = 0.0;
  } else if (nm >= 580 && nm < 645) {
    r = 1.0;
    g = -(nm - 645) / (645 - 580);
    b = 0.0;
  } else if (nm >= 645 && nm <= 760) {
    r = 1.0;
    g = 0.0;
    b = 0.0;
  }

  let factor = 1.0;
  if (nm >= 380 && nm < 420) {
    factor = 0.45 + (0.55 * (nm - 380)) / (420 - 380);
  } else if (nm > 700 && nm <= 760) {
    factor = 0.45 + (0.55 * (760 - nm)) / (760 - 700);
  }

  const R = Math.round(255 * Math.pow(r * factor, 0.8));
  const G = Math.round(255 * Math.pow(g * factor, 0.8));
  const B = Math.round(255 * Math.pow(b * factor, 0.8));
  return `rgb(${R}, ${G}, ${B})`;
}

function formatTime(sec) {
  const s = Math.max(0, sec);
  const mins = Math.floor(s / 60);
  const rem = s - mins * 60;
  const wholeSec = Math.floor(rem);
  const centi = Math.floor((rem - wholeSec) * 100);
  return `${String(mins).padStart(2, "0")}:${String(wholeSec).padStart(2, "0")}.${String(centi).padStart(2, "0")}`;
}

// Application state — Original 1959 Tom Lehrer Song
const currentEvents = SONG_EVENTS_102;
const currentLyricLines = LYRIC_LINES_102;
const totalDuration = 85.47;

let activeElement = ELEMENTS_BY_Z[18]; // Argon (Z=18) default hero element, matching Google DeepMind video
let lastSyncedEventOrder = -1;
let lastRenderedLyricSignature = "";
let activeCategoryFilter = null;

// Audio setup
const audio = new Audio(`${import.meta.env.BASE_URL}elements-1959.m4a`);
audio.preload = "auto";

// DOM references
const canvasContainer = document.getElementById("canvas-container");
const ambientGlow = document.getElementById("ambient-glow");
const playBtn = document.getElementById("play-btn");
const playIcon = document.getElementById("play-icon");
const playLabel = document.getElementById("play-label");
const resetBtn = document.getElementById("reset-btn");
const resetLabel = document.getElementById("reset-label");
const miniWaveform = document.getElementById("mini-waveform");
const songScrubber = document.getElementById("song-scrubber");
const timeReadout = document.getElementById("time-readout");
const lyricLineEl = document.getElementById("lyric-line");

// Hero & HUD DOM
const heroDot = document.getElementById("hero-dot");
const heroNumber = document.getElementById("hero-number");
const heroSymbol = document.getElementById("hero-symbol");
const heroName = document.getElementById("hero-name");
const heroCategory = document.getElementById("hero-category");
const heroSungInfo = document.getElementById("hero-sung-info");
const heroMetaBtn = document.getElementById("hero-meta");

const hudBlock = document.getElementById("hud-block");
const hudProtons = document.getElementById("hud-protons");
const hudValence = document.getElementById("hud-valence");
const hudShells = document.getElementById("hud-shells");
const hudOrbital = document.getElementById("hud-orbital");
const hudWeight = document.getElementById("hud-weight");
const hudPeriodGroup = document.getElementById("hud-period-group");
const hudBlurb = document.getElementById("hud-blurb");
const hudUses = document.getElementById("hud-uses");
const spectraLines = document.getElementById("spectra-lines");
const spectraPeaks = document.getElementById("spectra-peaks");
const periodicGrid = document.getElementById("periodic-grid");
const dockLegend = document.getElementById("dock-legend");

// Initialize 3D Atom Scene
const atomScene = new AtomScene(canvasContainer);
atomScene.animate();

function getSongEventForZ(z) {
  return currentEvents.find((ev) => ev.z === z) || null;
}

// Build the 118-element Periodic Table Grid
const cellElementsByZ = new Map();

function buildPeriodicGrid() {
  periodicGrid.innerHTML = "";
  cellElementsByZ.clear();

  const byCoord = new Map();
  for (const el of ELEMENTS) {
    byCoord.set(`${el.col},${el.row}`, el);
  }

  for (let row = 1; row <= 9; row++) {
    for (let col = 1; col <= 18; col++) {
      if (col === 3 && row === 6) {
        const marker = document.createElement("div");
        marker.className = "pt-range-marker";
        marker.style.gridColumn = String(col);
        marker.style.gridRow = String(row);
        marker.textContent = "57–71";
        periodicGrid.appendChild(marker);
        continue;
      }
      if (col === 3 && row === 7) {
        const marker = document.createElement("div");
        marker.className = "pt-range-marker";
        marker.style.gridColumn = String(col);
        marker.style.gridRow = String(row);
        marker.textContent = "89–103";
        periodicGrid.appendChild(marker);
        continue;
      }

      const el = byCoord.get(`${col},${row}`);
      if (!el) continue;

      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "pt-cell";
      btn.dataset.z = String(el.z);
      btn.dataset.cat = el.category;
      btn.style.gridColumn = String(col);
      btn.style.gridRow = String(row);
      btn.style.setProperty("--el-color", el.color);

      const ev = getSongEventForZ(el.z);
      btn.title = ev
        ? `${el.z} ${el.name} (${el.symbol}) — Sung #${String(ev.order).padStart(3, "0")} @ ${formatTime(ev.time)} (Click to inspect, Shift+Click to seek song)`
        : `${el.z} ${el.name} (${el.symbol}) — Click to inspect`;

      btn.innerHTML = `
        <span class="pt-z">${el.z}</span>
        <span class="pt-sym">${el.symbol}</span>
      `;

      btn.addEventListener("click", (e) => {
        selectElement(el, true);
        if (e.shiftKey) {
          seekToElementInSong(el);
        }
      });

      btn.addEventListener("dblclick", () => {
        selectElement(el, true);
        seekToElementInSong(el);
      });

      periodicGrid.appendChild(btn);
      cellElementsByZ.set(el.z, btn);
    }
  }
}

function seekToElementInSong(el) {
  const ev = getSongEventForZ(el.z);
  if (ev) {
    audio.currentTime = Math.max(0, ev.time - 0.02);
    if (audio.paused) {
      audio.play().catch(() => {});
    }
    updatePlaybackUI();
  }
}

function selectElement(el, forceUpdate = false) {
  if (!forceUpdate && activeElement && activeElement.z === el.z) return;
  activeElement = el;

  // Update CSS root accent variable & multi-layer radial atmospheric backlight
  document.documentElement.style.setProperty("--active-color", el.color);
  ambientGlow.style.background = `
    radial-gradient(circle 220px at 50% 45%, ${el.color}66 0%, ${el.color}30 48%, transparent 100%),
    radial-gradient(ellipse 48% 42% at 50% 45%, ${el.color}3d 0%, ${el.color}18 45%, transparent 78%)
  `;

  // Update Hero Identity
  heroDot.style.backgroundColor = el.color;
  heroDot.style.boxShadow = `0 0 8px ${el.color}`;
  heroNumber.textContent = String(el.z);
  heroSymbol.textContent = el.symbol;
  heroSymbol.style.color = el.color;
  heroSymbol.style.textShadow = `0 0 28px ${el.color}66`;
  heroName.textContent = el.name.toUpperCase();
  heroCategory.textContent = el.categoryLabel;

  const ev = getSongEventForZ(el.z);
  if (ev) {
    heroSungInfo.textContent = `▶ SUNG #${String(ev.order).padStart(3, "0")} @ ${formatTime(ev.time)}`;
  } else {
    heroSungInfo.textContent = `POST-1959 DISCOVERY (Z > 102)`;
  }

  // Update Left HUD: Atomic Essentials
  hudBlock.textContent = el.block.toUpperCase();
  hudProtons.textContent = `${el.z} p⁺ / ${el.z} e⁻`;
  hudValence.textContent = `${el.valence} e⁻ (${el.block})`;
  hudShells.textContent = el.shells.join(" · ");
  hudOrbital.textContent = el.orbitalConfig;
  hudWeight.textContent = `${el.weight} u`;
  hudPeriodGroup.textContent = `Period ${el.period} · ${el.groupLabel}`;
  hudBlurb.textContent = el.blurb;

  // Update Right HUD: Notable Uses
  hudUses.innerHTML = el.uses
    .map(
      (u, idx) =>
        `<li><span class="use-idx">0${idx + 1}</span><span>${u}</span></li>`
    )
    .join("");

  // Update Right HUD: Spectral Fingerprint (380–750 nm)
  spectraLines.innerHTML = "";
  el.spectra.forEach((nm, idx) => {
    const pct = Math.max(1, Math.min(99, ((nm - 380) / (750 - 380)) * 100));
    const col = wavelengthToCssColor(nm);
    const line = document.createElement("span");
    line.className = "spectral-line";
    line.style.left = `${pct.toFixed(2)}%`;
    line.style.backgroundColor = col;
    line.style.boxShadow = `0 0 8px 1px ${col}, 0 0 16px 2px ${col}`;
    line.style.animationDelay = `${idx * 28}ms`;
    line.title = `${nm.toFixed(1)} nm`;
    spectraLines.appendChild(line);
  });
  spectraPeaks.textContent = `λ = ${el.spectra.map((n) => n.toFixed(1)).join(" · ")} nm`;

  // Update Periodic Table active cell highlight
  cellElementsByZ.forEach((btn, z) => {
    btn.classList.toggle("is-active", z === el.z);
  });

  // Update 3D Atom Scene
  atomScene.setElement(el);
}

// Render live karaoke lyric line with word-level color highlights
function updateLyricsDisplay(currentTime) {
  let activeLine = currentLyricLines[0];
  for (let i = 0; i < currentLyricLines.length; i++) {
    const ln = currentLyricLines[i];
    if (currentTime >= ln.start && currentTime < ln.end) {
      activeLine = ln;
      break;
    }
    if (currentTime >= ln.end && i === currentLyricLines.length - 1) {
      activeLine = ln;
    }
  }

  let activeTokenIdx = -1;
  for (let i = 0; i < activeLine.tokens.length; i++) {
    if (currentTime >= activeLine.tokens[i].time) {
      activeTokenIdx = i;
    }
  }

  const sig = `${activeLine.start}_${activeTokenIdx}_${activeElement.symbol}`;
  if (sig === lastRenderedLyricSignature) return;
  lastRenderedLyricSignature = sig;

  lyricLineEl.innerHTML = activeLine.tokens
    .map((tok, idx) => {
      let cls = "lyric-word";
      let style = "";
      if (idx === activeTokenIdx) {
        cls += " is-current";
        const el = tok.symbol ? ELEMENTS_BY_SYMBOL[tok.symbol] : null;
        const highlightColor = el ? el.color : "#ff6b6b";
        style = `style="color: ${highlightColor}; text-shadow: 0 0 14px ${highlightColor}88;"`;
      } else if (idx < activeTokenIdx) {
        cls += " is-sung";
      }
      return `<span class="${cls}" ${style}>${tok.text}</span>`;
    })
    .join(" ");
}

function updateSungCellsProgress(currentTime) {
  for (let i = 0; i < currentEvents.length; i++) {
    const ev = currentEvents[i];
    const btn = cellElementsByZ.get(ev.z);
    if (btn) {
      btn.classList.toggle("was-sung", currentTime >= ev.time);
    }
  }
}

function syncToAudioTime() {
  const t = audio.currentTime;

  songScrubber.value = String(t);
  const pct = Math.min(100, Math.max(0, (t / totalDuration) * 100));
  songScrubber.style.setProperty("--scrubber-pct", `${pct.toFixed(2)}%`);
  timeReadout.textContent = `${formatTime(t)} / ${formatTime(totalDuration)}`;

  let latestEvent = null;
  for (let i = 0; i < currentEvents.length; i++) {
    if (t >= currentEvents[i].time) {
      latestEvent = currentEvents[i];
    } else {
      break;
    }
  }

  if (latestEvent) {
    if (latestEvent.order !== lastSyncedEventOrder) {
      lastSyncedEventOrder = latestEvent.order;
      const el = ELEMENTS_BY_Z[latestEvent.z];
      if (el) {
        selectElement(el);
      }
    }
  } else if (t < 8.90 && lastSyncedEventOrder !== 0 && !audio.paused) {
    lastSyncedEventOrder = 0;
    selectElement(ELEMENTS_BY_Z[18]);
  }

  updateLyricsDisplay(t);
  updateSungCellsProgress(t);
}

function updatePlaybackUI() {
  const playing = !audio.paused && !audio.ended;
  const started = audio.currentTime > 0.05 || playing;
  playBtn.classList.toggle("is-playing", playing);
  playIcon.textContent = playing ? "⏸" : "▶";
  playLabel.textContent = playing ? "PAUSE" : "PLAY";
  resetBtn.classList.toggle("is-hidden", !started);
  resetBtn.classList.toggle("is-playing", playing);
  resetLabel.style.display = playing ? "none" : "inline";
  miniWaveform.style.display = playing ? "inline-flex" : "none";
}

// Event Listeners
playBtn.addEventListener("click", () => {
  if (audio.paused || audio.ended) {
    if (audio.ended) {
      audio.currentTime = 0;
    }
    audio.play().catch((err) => console.warn("Audio play blocked:", err));
  } else {
    audio.pause();
  }
  updatePlaybackUI();
});

resetBtn.addEventListener("click", () => {
  audio.pause();
  audio.currentTime = 0;
  lastSyncedEventOrder = -1;
  selectElement(ELEMENTS_BY_Z[18], true);
  syncToAudioTime();
  updatePlaybackUI();
});

songScrubber.addEventListener("input", () => {
  const targetTime = parseFloat(songScrubber.value);
  audio.currentTime = targetTime;
  lastSyncedEventOrder = -1;
  syncToAudioTime();
  updatePlaybackUI();
});

heroMetaBtn.addEventListener("click", () => {
  if (activeElement) {
    seekToElementInSong(activeElement);
  }
});

audio.addEventListener("play", updatePlaybackUI);
audio.addEventListener("pause", updatePlaybackUI);
audio.addEventListener("ended", () => {
  updatePlaybackUI();
});

window.addEventListener("keydown", (e) => {
  if (e.target && (e.target.tagName === "INPUT" || e.target.tagName === "BUTTON")) {
    if (e.code !== "Space") return;
  }
  if (e.code === "Space") {
    e.preventDefault();
    playBtn.click();
  } else if (e.code === "ArrowRight") {
    e.preventDefault();
    const nextZ = activeElement.z < 118 ? activeElement.z + 1 : 1;
    selectElement(ELEMENTS_BY_Z[nextZ], true);
  } else if (e.code === "ArrowLeft") {
    e.preventDefault();
    const prevZ = activeElement.z > 1 ? activeElement.z - 1 : 118;
    selectElement(ELEMENTS_BY_Z[prevZ], true);
  }
});

// Legend hover/click category filtering
dockLegend.querySelectorAll(".legend-item").forEach((item) => {
  const cat = item.dataset.cat;
  item.addEventListener("mouseenter", () => {
    periodicGrid.dataset.highlightCat = cat;
  });
  item.addEventListener("mouseleave", () => {
    if (!activeCategoryFilter) {
      delete periodicGrid.dataset.highlightCat;
    } else {
      periodicGrid.dataset.highlightCat = activeCategoryFilter;
    }
  });
  item.addEventListener("click", () => {
    if (activeCategoryFilter === cat) {
      activeCategoryFilter = null;
      delete periodicGrid.dataset.highlightCat;
      dockLegend
        .querySelectorAll(".legend-item")
        .forEach((el) => el.classList.remove("is-selected"));
    } else {
      activeCategoryFilter = cat;
      periodicGrid.dataset.highlightCat = cat;
      dockLegend.querySelectorAll(".legend-item").forEach((el) => {
        el.classList.toggle("is-selected", el.dataset.cat === cat);
      });
    }
  });
});

function tick() {
  if (!audio.paused) {
    syncToAudioTime();
  }
  requestAnimationFrame(tick);
}

// Initial boot
buildPeriodicGrid();
selectElement(ELEMENTS_BY_Z[18], true);
syncToAudioTime();
updatePlaybackUI();
requestAnimationFrame(tick);
