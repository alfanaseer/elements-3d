// Complete 118-Element Scientific Dataset (Hydrogen Z=1 through Oganesson Z=118)
export const CATEGORY_META = {
  "alkali": "#ff6b4a",
  "alk-earth": "#f5b041",
  "transition": "#5b8def",
  "post-trans": "#45e3b0",
  "metalloid": "#a569ff",
  "nonmetal": "#3ae374",
  "halogen": "#ff4da6",
  "noble-gas": "#26d0ce",
  "lanthanide": "#ff9f68",
  "actinide": "#ff6392"
};

export const ELEMENTS = [
  {
    "z": 1,
    "symbol": "H",
    "name": "Hydrogen",
    "category": "nonmetal",
    "categoryLabel": "REACTIVE NONMETAL",
    "color": "#3ae374",
    "weight": "1.008",
    "shells": [
      1
    ],
    "orbitalConfig": "1s\u00b9",
    "block": "1s-Block",
    "valence": 1,
    "period": 1,
    "groupLabel": "Group 1",
    "col": 1,
    "row": 1,
    "blurb": "The most abundant element in the cosmos, forged in the first three minutes after the Big Bang and fueling the nuclear fusion heart of every star.",
    "uses": [
      "Deep-space rocket propulsion (LH2/LOX)",
      "Haber-Bosch ammonia fertilizer synthesis",
      "Proton-exchange membrane (PEM) fuel cells",
      "Hydrogenation of unsaturated fats & oils"
    ],
    "spectra": [
      397.0,
      410.2,
      434.0,
      486.1,
      656.3
    ]
  },
  {
    "z": 2,
    "symbol": "He",
    "name": "Helium",
    "category": "noble-gas",
    "categoryLabel": "NOBLE GAS",
    "color": "#26d0ce",
    "weight": "4.0026",
    "shells": [
      2
    ],
    "orbitalConfig": "1s\u00b2",
    "block": "1s-Block",
    "valence": 2,
    "period": 1,
    "groupLabel": "Group 18",
    "col": 18,
    "row": 1,
    "blurb": "First detected as a bright yellow spectral line in sunlight during an 1868 eclipse before ever being found on Earth; refuses to freeze at standard pressure.",
    "uses": [
      "Cryogenic cooling for hospital MRI magnets",
      "Deep-sea heliox breathing mixtures",
      "LHC superconducting particle collider cooling",
      "Inert purge gas for orbital rocket tanks"
    ],
    "spectra": [
      388.9,
      447.1,
      471.3,
      501.6,
      587.6,
      667.8,
      706.5
    ]
  },
  {
    "z": 3,
    "symbol": "Li",
    "name": "Lithium",
    "category": "alkali",
    "categoryLabel": "ALKALI METAL",
    "color": "#ff6b4a",
    "weight": "6.94",
    "shells": [
      2,
      1
    ],
    "orbitalConfig": "[He] 2s\u00b9",
    "block": "2s-Block",
    "valence": 1,
    "period": 2,
    "groupLabel": "Group 1",
    "col": 1,
    "row": 2,
    "blurb": "The lightest of all solid elements\u2014it floats effortlessly on water while reacting vigorously to release hydrogen gas and a crimson flame.",
    "uses": [
      "High-density EV & grid-scale Li-ion batteries",
      "Low-expansion astronomical telescope mirrors",
      "Aerospace aluminum-lithium airframe alloys",
      "Mood-stabilizing neuropharmacology"
    ],
    "spectra": [
      413.3,
      460.3,
      610.4,
      670.8
    ]
  },
  {
    "z": 4,
    "symbol": "Be",
    "name": "Beryllium",
    "category": "alk-earth",
    "categoryLabel": "ALKALINE EARTH METAL",
    "color": "#f5b041",
    "weight": "9.0122",
    "shells": [
      2,
      2
    ],
    "orbitalConfig": "[He] 2s\u00b2",
    "block": "2s-Block",
    "valence": 2,
    "period": 2,
    "groupLabel": "Group 2",
    "col": 2,
    "row": 2,
    "blurb": "Six times stiffer than steel by weight and nearly transparent to X-rays, giving emeralds and aquamarines their crystalline structure.",
    "uses": [
      "James Webb Space Telescope gold-coated mirrors",
      "X-ray tube radiation transmission windows",
      "Non-sparking copper-beryllium safety tools",
      "Nuclear reactor neutron reflectors"
    ],
    "spectra": [
      381.3,
      457.3,
      467.3,
      527.1
    ]
  },
  {
    "z": 5,
    "symbol": "B",
    "name": "Boron",
    "category": "metalloid",
    "categoryLabel": "METALLOID",
    "color": "#a569ff",
    "weight": "10.81",
    "shells": [
      2,
      3
    ],
    "orbitalConfig": "[He] 2s\u00b2 2p\u00b9",
    "block": "2p-Block",
    "valence": 3,
    "period": 2,
    "groupLabel": "Group 13",
    "col": 13,
    "row": 2,
    "blurb": "A rare cosmic product of cosmic-ray spallation rather than stellar fusion, forming covalent networks nearly as hard as diamond.",
    "uses": [
      "Thermal-shock resistant borosilicate labware",
      "Neodymium-iron-boron permanent supermagnets",
      "Fighter-jet & tank boron carbide armor plates",
      "P-type silicon semiconductor doping"
    ],
    "spectra": [
      412.2,
      447.2,
      494.0,
      518.0,
      548.0,
      608.0
    ]
  },
  {
    "z": 6,
    "symbol": "C",
    "name": "Carbon",
    "category": "nonmetal",
    "categoryLabel": "REACTIVE NONMETAL",
    "color": "#3ae374",
    "weight": "12.011",
    "shells": [
      2,
      4
    ],
    "orbitalConfig": "[He] 2s\u00b2 2p\u00b2",
    "block": "2p-Block",
    "valence": 4,
    "period": 2,
    "groupLabel": "Group 14",
    "col": 14,
    "row": 2,
    "blurb": "The tetravalent backbone of all known organic life, capable of transforming from ultrasoft lubricating graphite into brilliant diamond and graphene.",
    "uses": [
      "Aerospace carbon-fiber composite airframes",
      "Radiocarbon-14 archaeological dating",
      "Industrial diamond cutting & drilling tools",
      "Graphene & carbon nanotube nanoelectronics"
    ],
    "spectra": [
      426.7,
      477.2,
      505.2,
      538.0,
      657.8,
      711.5
    ]
  },
  {
    "z": 7,
    "symbol": "N",
    "name": "Nitrogen",
    "category": "nonmetal",
    "categoryLabel": "REACTIVE NONMETAL",
    "color": "#3ae374",
    "weight": "14.007",
    "shells": [
      2,
      5
    ],
    "orbitalConfig": "[He] 2s\u00b2 2p\u00b3",
    "block": "2p-Block",
    "valence": 5,
    "period": 2,
    "groupLabel": "Group 15",
    "col": 15,
    "row": 2,
    "blurb": "Bound by one of nature's strongest triple covalent bonds, making up 78% of Earth's atmosphere while encoding every base pair of DNA.",
    "uses": [
      "Cryogenic liquid nitrogen biological preservation",
      "Agricultural ammonia & nitrate fertilizers",
      "Inert food & semiconductor packaging blanket",
      "Automotive airbag rapid gas inflation"
    ],
    "spectra": [
      399.5,
      463.1,
      500.5,
      568.0,
      648.2,
      746.8
    ]
  },
  {
    "z": 8,
    "symbol": "O",
    "name": "Oxygen",
    "category": "nonmetal",
    "categoryLabel": "REACTIVE NONMETAL",
    "color": "#3ae374",
    "weight": "15.999",
    "shells": [
      2,
      6
    ],
    "orbitalConfig": "[He] 2s\u00b2 2p\u2074",
    "block": "2p-Block",
    "valence": 6,
    "period": 2,
    "groupLabel": "Group 16",
    "col": 16,
    "row": 2,
    "blurb": "Accumulated in Earth's sky 2.4 billion years ago via cyanobacterial photosynthesis, powering complex aerobic metabolism and stratospheric ozone.",
    "uses": [
      "Cellular respiration & hospital life support",
      "Liquid oxygen (LOX) orbital rocket oxidizer",
      "Basic oxygen steelmaking furnaces",
      "Stratospheric ozone (O\u2083) UV radiation shield"
    ],
    "spectra": [
      394.7,
      436.8,
      533.0,
      615.8,
      645.6,
      700.2
    ]
  },
  {
    "z": 9,
    "symbol": "F",
    "name": "Fluorine",
    "category": "halogen",
    "categoryLabel": "HALOGEN",
    "color": "#ff4da6",
    "weight": "18.998",
    "shells": [
      2,
      7
    ],
    "orbitalConfig": "[He] 2s\u00b2 2p\u2075",
    "block": "2p-Block",
    "valence": 7,
    "period": 2,
    "groupLabel": "Group 17",
    "col": 17,
    "row": 2,
    "blurb": "The most electronegative and chemically reactive element in the universe\u2014capable of igniting glass, water, asbestos, and even noble gases.",
    "uses": [
      "PTFE (Teflon) low-friction fluoropolymers",
      "Silicon wafer plasma etching in chip fabs",
      "UF\u2086 uranium isotope gaseous enrichment",
      "Tooth enamel fluorapatite strengthening"
    ],
    "spectra": [
      623.9,
      634.9,
      641.4,
      685.6,
      690.2,
      703.7,
      739.9
    ]
  },
  {
    "z": 10,
    "symbol": "Ne",
    "name": "Neon",
    "category": "noble-gas",
    "categoryLabel": "NOBLE GAS",
    "color": "#26d0ce",
    "weight": "20.180",
    "shells": [
      2,
      8
    ],
    "orbitalConfig": "[He] 2s\u00b2 2p\u2076",
    "block": "2p-Block",
    "valence": 8,
    "period": 2,
    "groupLabel": "Group 18",
    "col": 18,
    "row": 2,
    "blurb": "Though fifth in cosmic abundance, it is exceedingly rare in Earth's air because it is lighter than nitrogen and forms zero chemical compounds.",
    "uses": [
      "Iconic crimson-orange high-voltage neon signs",
      "632.8 nm Helium-Neon metrology lasers",
      "High-voltage lightning arrestors & indicators",
      "Deep-cryogenic infrared detector refrigerant"
    ],
    "spectra": [
      540.1,
      585.2,
      588.2,
      607.4,
      614.3,
      640.2,
      650.7,
      703.2
    ]
  },
  {
    "z": 11,
    "symbol": "Na",
    "name": "Sodium",
    "category": "alkali",
    "categoryLabel": "ALKALI METAL",
    "color": "#ff6b4a",
    "weight": "22.990",
    "shells": [
      2,
      8,
      1
    ],
    "orbitalConfig": "[Ne] 3s\u00b9",
    "block": "3s-Block",
    "valence": 1,
    "period": 3,
    "groupLabel": "Group 1",
    "col": 1,
    "row": 3,
    "blurb": "Soft enough to slice with a butter knife; violently reactive as a pure metal yet essential as a biological ion paired with chlorine to become table salt.",
    "uses": [
      "Neural action-potential signaling in biology",
      "Liquid-sodium fast-breeder nuclear coolant",
      "Molten-salt concentrated solar thermal storage",
      "Monochromatic 589 nm street & fog lighting"
    ],
    "spectra": [
      466.9,
      498.3,
      568.8,
      589.0,
      589.6,
      616.1
    ]
  },
  {
    "z": 12,
    "symbol": "Mg",
    "name": "Magnesium",
    "category": "alk-earth",
    "categoryLabel": "ALKALINE EARTH METAL",
    "color": "#f5b041",
    "weight": "24.305",
    "shells": [
      2,
      8,
      2
    ],
    "orbitalConfig": "[Ne] 3s\u00b2",
    "block": "3s-Block",
    "valence": 2,
    "period": 3,
    "groupLabel": "Group 2",
    "col": 2,
    "row": 3,
    "blurb": "Sits at the heart of every chlorophyll molecule on Earth, capturing solar photons while also stabilizing ATP energy transfer in human cells.",
    "uses": [
      "Ultra-lightweight aerospace & camera bodies",
      "Central porphyrin ion in plant chlorophyll",
      "Brilliant white marine & aviation distress flares",
      "Refractory furnace bricks for steelmaking"
    ],
    "spectra": [
      383.8,
      448.1,
      470.3,
      516.7,
      517.3,
      518.4,
      552.8
    ]
  },
  {
    "z": 13,
    "symbol": "Al",
    "name": "Aluminum",
    "category": "post-trans",
    "categoryLabel": "POST-TRANSITION METAL",
    "color": "#45e3b0",
    "weight": "26.982",
    "shells": [
      2,
      8,
      3
    ],
    "orbitalConfig": "[Ne] 3s\u00b2 3p\u00b9",
    "block": "3p-Block",
    "valence": 3,
    "period": 3,
    "groupLabel": "Group 13",
    "col": 13,
    "row": 3,
    "blurb": "Once more precious than gold until the 1886 Hall-H\u00e9roult electrolytic process unlocked Earth's most abundant crustal metal.",
    "uses": [
      "Commercial jet airframes & spacecraft hulls",
      "High-voltage long-distance power grid lines",
      "100% infinitely recyclable beverage cans",
      "Evaporated telescope & solar reflector coatings"
    ],
    "spectra": [
      394.4,
      396.2,
      466.3,
      559.3,
      624.3,
      704.2
    ]
  },
  {
    "z": 14,
    "symbol": "Si",
    "name": "Silicon",
    "category": "metalloid",
    "categoryLabel": "METALLOID",
    "color": "#a569ff",
    "weight": "28.085",
    "shells": [
      2,
      8,
      4
    ],
    "orbitalConfig": "[Ne] 3s\u00b2 3p\u00b2",
    "block": "3p-Block",
    "valence": 4,
    "period": 3,
    "groupLabel": "Group 14",
    "col": 14,
    "row": 3,
    "blurb": "Forms over 27% of Earth's crust as silicate rock and quartz, refined to 99.9999999% purity to form the foundation of modern computing.",
    "uses": [
      "Nanometer-scale CPU, GPU & memory microchips",
      "Monocrystalline photovoltaic solar panels",
      "Ultra-pure optical fiber telecommunications",
      "Medical-grade silicone elastomers & seals"
    ],
    "spectra": [
      390.6,
      412.8,
      505.6,
      567.0,
      597.9,
      634.7,
      637.1
    ]
  },
  {
    "z": 15,
    "symbol": "P",
    "name": "Phosphorus",
    "category": "nonmetal",
    "categoryLabel": "REACTIVE NONMETAL",
    "color": "#3ae374",
    "weight": "30.974",
    "shells": [
      2,
      8,
      5
    ],
    "orbitalConfig": "[Ne] 3s\u00b2 3p\u00b3",
    "block": "3p-Block",
    "valence": 5,
    "period": 3,
    "groupLabel": "Group 15",
    "col": 15,
    "row": 3,
    "blurb": "Isolated by alchemist Hennig Brand in 1669 from boiled urine, glowing with eerie green chemiluminescence in the dark.",
    "uses": [
      "DNA/RNA sugar-phosphate genetic backbone",
      "ATP cellular energy currency",
      "Strike-anywhere safety match heads (red P)",
      "LiFePO\u2084 (LFP) electric vehicle battery cathodes"
    ],
    "spectra": [
      458.8,
      525.4,
      542.6,
      602.4,
      604.3,
      646.0
    ]
  },
  {
    "z": 16,
    "symbol": "S",
    "name": "Sulfur",
    "category": "nonmetal",
    "categoryLabel": "REACTIVE NONMETAL",
    "color": "#3ae374",
    "weight": "32.06",
    "shells": [
      2,
      8,
      6
    ],
    "orbitalConfig": "[Ne] 3s\u00b2 3p\u2074",
    "block": "3p-Block",
    "valence": 6,
    "period": 3,
    "groupLabel": "Group 16",
    "col": 16,
    "row": 3,
    "blurb": "Knownsince antiquity as brimstone around volcanic vents; its disulfide bridges fold proteins into their functional 3D shapes.",
    "uses": [
      "Vulcanization of natural rubber into tires",
      "Sulfuric acid\u2014world's #1 industrial chemical",
      "Disulfide bonds stabilizing protein structures",
      "Lithium-sulfur next-gen aviation batteries"
    ],
    "spectra": [
      416.3,
      452.5,
      469.4,
      520.1,
      545.4,
      560.6,
      675.7
    ]
  },
  {
    "z": 17,
    "symbol": "Cl",
    "name": "Chlorine",
    "category": "halogen",
    "categoryLabel": "HALOGEN",
    "color": "#ff4da6",
    "weight": "35.45",
    "shells": [
      2,
      8,
      7
    ],
    "orbitalConfig": "[Ne] 3s\u00b2 3p\u2075",
    "block": "3p-Block",
    "valence": 7,
    "period": 3,
    "groupLabel": "Group 17",
    "col": 17,
    "row": 3,
    "blurb": "A choking yellow-green halogen gas that revolutionized public health by eradicating waterborne cholera and typhoid worldwide.",
    "uses": [
      "Municipal drinking water sanitization",
      "PVC architectural pipes & cable insulation",
      "Synthesis of 85% of modern pharmaceuticals",
      "Gastric hydrochloric acid (HCl) digestion"
    ],
    "spectra": [
      413.2,
      479.5,
      481.0,
      489.7,
      521.8,
      542.3,
      725.7
    ]
  },
  {
    "z": 18,
    "symbol": "Ar",
    "name": "Argon",
    "category": "noble-gas",
    "categoryLabel": "NOBLE GAS",
    "color": "#26d0ce",
    "weight": "39.948",
    "shells": [
      2,
      8,
      8
    ],
    "orbitalConfig": "[Ne] 3s\u00b2 3p\u2076",
    "block": "3p-Block",
    "valence": 8,
    "period": 3,
    "groupLabel": "Group 18",
    "col": 18,
    "row": 3,
    "blurb": "Makes up nearly 1% of the air you breathe, almost all of it created by the slow radioactive decay of Potassium-40 deep within Earth's crust.",
    "uses": [
      "TIG & MIG arc welding shielding atmosphere",
      "Double-pane thermal window insulation",
      "Historical museum document preservation",
      "Blue-green argon-ion surgical lasers"
    ],
    "spectra": [
      415.9,
      420.1,
      451.1,
      696.5,
      706.7,
      738.4
    ]
  },
  {
    "z": 19,
    "symbol": "K",
    "name": "Potassium",
    "category": "alkali",
    "categoryLabel": "ALKALI METAL",
    "color": "#ff6b4a",
    "weight": "39.098",
    "shells": [
      2,
      8,
      8,
      1
    ],
    "orbitalConfig": "[Ar] 4s\u00b9",
    "block": "4s-Block",
    "valence": 1,
    "period": 4,
    "groupLabel": "Group 1",
    "col": 1,
    "row": 4,
    "blurb": "First isolated by Humphry Davy in 1807 via electrolysis of potash; explodes on contact with water in a lilac-violet flame.",
    "uses": [
      "Cardiac & neuronal Na\u207a/K\u207a-ATPase ion pumps",
      "Global NPK agricultural crop fertilizers",
      "Potassium-Argon (K-Ar) geological rock dating",
      "Chemically toughened Gorilla Glass screens"
    ],
    "spectra": [
      404.4,
      404.7,
      534.0,
      580.2,
      691.1,
      693.9
    ]
  },
  {
    "z": 20,
    "symbol": "Ca",
    "name": "Calcium",
    "category": "alk-earth",
    "categoryLabel": "ALKALINE EARTH METAL",
    "color": "#f5b041",
    "weight": "40.078",
    "shells": [
      2,
      8,
      8,
      2
    ],
    "orbitalConfig": "[Ar] 4s\u00b2",
    "block": "4s-Block",
    "valence": 2,
    "period": 4,
    "groupLabel": "Group 2",
    "col": 2,
    "row": 4,
    "blurb": "Mineralized by marine organisms into vast limestone reefs and compressed over eons into marble, while forming every bone and tooth.",
    "uses": [
      "Vertebrate bone & tooth hydroxyapatite matrix",
      "Portland cement, concrete & limestone mortar",
      "Synaptic neurotransmitter release trigger",
      "Steel deoxidizer & desulfurizer"
    ],
    "spectra": [
      393.4,
      396.8,
      422.7,
      445.5,
      558.9,
      616.2,
      643.9
    ]
  },
  {
    "z": 21,
    "symbol": "Sc",
    "name": "Scandium",
    "category": "transition",
    "categoryLabel": "TRANSITION METAL",
    "color": "#5b8def",
    "weight": "44.956",
    "shells": [
      2,
      8,
      9,
      2
    ],
    "orbitalConfig": "[Ar] 3d\u00b9 4s\u00b2",
    "block": "3d-Block",
    "valence": 3,
    "period": 4,
    "groupLabel": "Group 3",
    "col": 3,
    "row": 4,
    "blurb": "Predicted by Mendeleev as 'eka-boron' eight years before Lars Nilson discovered it in Scandinavian minerals.",
    "uses": [
      "High-strength Al-Sc aerospace & bike alloys",
      "Stadium daylight-spectrum metal-halide lamps",
      "Solid-oxide fuel cell (SOFC) electrolytes",
      "Piezoelectric 5G RF acoustic wave filters"
    ],
    "spectra": [
      391.2,
      402.4,
      424.7,
      431.4,
      508.2,
      567.2,
      630.6
    ]
  },
  {
    "z": 22,
    "symbol": "Ti",
    "name": "Titanium",
    "category": "transition",
    "categoryLabel": "TRANSITION METAL",
    "color": "#5b8def",
    "weight": "47.867",
    "shells": [
      2,
      8,
      10,
      2
    ],
    "orbitalConfig": "[Ar] 3d\u00b2 4s\u00b2",
    "block": "3d-Block",
    "valence": 4,
    "period": 4,
    "groupLabel": "Group 4",
    "col": 4,
    "row": 4,
    "blurb": "The highest strength-to-density ratio of any metallic element and uniquely osseointegrative\u2014living bone bonds directly to its oxide surface.",
    "uses": [
      "SR-71 Blackbird & supersonic jet airframes",
      "Biocompatible orthopedic hip & dental implants",
      "Brilliant white TiO\u2082 paint & sunscreen pigment",
      "Deep-ocean submersible pressure hulls"
    ],
    "spectra": [
      399.9,
      430.6,
      453.3,
      498.2,
      501.4,
      521.0
    ]
  },
  {
    "z": 23,
    "symbol": "V",
    "name": "Vanadium",
    "category": "transition",
    "categoryLabel": "TRANSITION METAL",
    "color": "#5b8def",
    "weight": "50.942",
    "shells": [
      2,
      8,
      11,
      2
    ],
    "orbitalConfig": "[Ar] 3d\u00b3 4s\u00b2",
    "block": "3d-Block",
    "valence": 5,
    "period": 4,
    "groupLabel": "Group 5",
    "col": 5,
    "row": 4,
    "blurb": "Named after Vanad\u00eds, the Norse goddess of beauty, because its four oxidation states create solutions in lilac, green, blue, and gold.",
    "uses": [
      "Grid-scale vanadium redox flow batteries",
      "Chrome-vanadium high-torque hand tools",
      "Jet-engine titanium-aluminum-vanadium blades",
      "Sulfuric acid contact-process catalysts"
    ],
    "spectra": [
      411.2,
      437.9,
      440.8,
      459.4,
      488.2,
      609.0
    ]
  },
  {
    "z": 24,
    "symbol": "Cr",
    "name": "Chromium",
    "category": "transition",
    "categoryLabel": "TRANSITION METAL",
    "color": "#5b8def",
    "weight": "51.996",
    "shells": [
      2,
      8,
      13,
      1
    ],
    "orbitalConfig": "[Ar] 3d\u2075 4s\u00b9",
    "block": "3d-Block",
    "valence": 6,
    "period": 4,
    "groupLabel": "Group 6",
    "col": 6,
    "row": 4,
    "blurb": "Forms a self-healing, three-atom-thick passive oxide shield that makes stainless steel impervious to rust and turns corundum into red ruby.",
    "uses": [
      "Passivating shield in all stainless steels",
      "Mirror-finish decorative chrome electroplating",
      "Ruby laser crystals & emerald coloration",
      "High-temperature nichrome heating elements"
    ],
    "spectra": [
      425.4,
      427.5,
      429.0,
      520.5,
      520.8,
      541.0
    ]
  },
  {
    "z": 25,
    "symbol": "Mn",
    "name": "Manganese",
    "category": "transition",
    "categoryLabel": "TRANSITION METAL",
    "color": "#5b8def",
    "weight": "54.938",
    "shells": [
      2,
      8,
      13,
      2
    ],
    "orbitalConfig": "[Ar] 3d\u2075 4s\u00b2",
    "block": "3d-Block",
    "valence": 7,
    "period": 4,
    "groupLabel": "Group 7",
    "col": 7,
    "row": 4,
    "blurb": "A cluster of four manganese atoms in Photosystem II splits water molecules in every green leaf on Earth, generating all atmospheric oxygen.",
    "uses": [
      "Impact-hardening Hadfield steel railway frogs",
      "Oxygen-evolving complex in plant photosynthesis",
      "Alkaline & NMC lithium-ion battery cathodes",
      "Prehistoric Lascaux cave black pigments"
    ],
    "spectra": [
      403.1,
      403.3,
      403.4,
      475.4,
      478.3,
      482.4,
      601.7
    ]
  },
  {
    "z": 26,
    "symbol": "Fe",
    "name": "Iron",
    "category": "transition",
    "categoryLabel": "TRANSITION METAL",
    "color": "#5b8def",
    "weight": "55.845",
    "shells": [
      2,
      8,
      14,
      2
    ],
    "orbitalConfig": "[Ar] 3d\u2076 4s\u00b2",
    "block": "3d-Block",
    "valence": 8,
    "period": 4,
    "groupLabel": "Group 8",
    "col": 8,
    "row": 4,
    "blurb": "The heaviest element forged exothermically inside massive stars; its swirling liquid core generates Earth's protective magnetosphere.",
    "uses": [
      "Structural carbon & alloy steels for civilization",
      "Oxygen-carrying heme center in hemoglobin",
      "Planetary core dynamo magnetic field",
      "Transformer cores & electromagnetic motors"
    ],
    "spectra": [
      404.6,
      438.4,
      440.5,
      495.8,
      516.7,
      527.0,
      532.8
    ]
  },
  {
    "z": 27,
    "symbol": "Co",
    "name": "Cobalt",
    "category": "transition",
    "categoryLabel": "TRANSITION METAL",
    "color": "#5b8def",
    "weight": "58.933",
    "shells": [
      2,
      8,
      15,
      2
    ],
    "orbitalConfig": "[Ar] 3d\u2077 4s\u00b2",
    "block": "3d-Block",
    "valence": 9,
    "period": 4,
    "groupLabel": "Group 9",
    "col": 9,
    "row": 4,
    "blurb": "Prized for millennia for intense cobalt-blue ceramics and glass; sits at the active corrin ring center of Vitamin B\u2081\u2082.",
    "uses": [
      "High-energy lithium-ion EV battery cathodes",
      "Jet turbine single-crystal superalloys",
      "Cobalt-60 gamma-ray cancer radiotherapy",
      "Active cobalamin core of Vitamin B\u2081\u2082"
    ],
    "spectra": [
      384.5,
      389.4,
      399.5,
      412.1,
      453.1,
      548.3
    ]
  },
  {
    "z": 28,
    "symbol": "Ni",
    "name": "Nickel",
    "category": "transition",
    "categoryLabel": "TRANSITION METAL",
    "color": "#5b8def",
    "weight": "58.693",
    "shells": [
      2,
      8,
      16,
      2
    ],
    "orbitalConfig": "[Ar] 3d\u2078 4s\u00b2",
    "block": "3d-Block",
    "valence": 10,
    "period": 4,
    "groupLabel": "Group 10",
    "col": 10,
    "row": 4,
    "blurb": "Delivered to Earth in vast quantities by iron-nickel meteorites and alloyed into Inconel to survive rocket engine exhaust.",
    "uses": [
      "Inconel rocket nozzle & turbine superalloys",
      "Austenitic corrosion-proof stainless steels",
      "High-nickel NCA/NMC electric vehicle batteries",
      "Hydrogenation catalysts & coinage alloys"
    ],
    "spectra": [
      385.8,
      440.2,
      471.4,
      508.1,
      547.7,
      676.8
    ]
  },
  {
    "z": 29,
    "symbol": "Cu",
    "name": "Copper",
    "category": "transition",
    "categoryLabel": "TRANSITION METAL",
    "color": "#5b8def",
    "weight": "63.546",
    "shells": [
      2,
      8,
      18,
      1
    ],
    "orbitalConfig": "[Ar] 3d\u00b9\u2070 4s\u00b9",
    "block": "3d-Block",
    "valence": 11,
    "period": 4,
    "groupLabel": "Group 11",
    "col": 11,
    "row": 4,
    "blurb": "Humanity's first smelted metal over 10,000 years ago; one of only two non-silvery metals, owing its warm reddish glow to d-band transitions.",
    "uses": [
      "Global electrical wiring, motors & transformers",
      "Sub-nanometer microchip interconnects",
      "Antimicrobial hospital touch surfaces",
      "Bronze & brass architectural & marine alloys"
    ],
    "spectra": [
      402.3,
      406.3,
      510.6,
      515.3,
      521.8,
      578.2
    ]
  },
  {
    "z": 30,
    "symbol": "Zn",
    "name": "Zinc",
    "category": "transition",
    "categoryLabel": "TRANSITION METAL",
    "color": "#5b8def",
    "weight": "65.38",
    "shells": [
      2,
      8,
      18,
      2
    ],
    "orbitalConfig": "[Ar] 3d\u00b9\u2070 4s\u00b2",
    "block": "3d-Block",
    "valence": 12,
    "period": 4,
    "groupLabel": "Group 12",
    "col": 12,
    "row": 4,
    "blurb": "Sacrifices its own electrons to protect steel from rust while folding 'zinc-finger' transcription factors that read human DNA.",
    "uses": [
      "Hot-dip galvanizing corrosion armor for steel",
      "Zinc-finger DNA transcription & carbonic anhydrase",
      "Brass musical instruments & marine hardware",
      "Sacrificial anodes on ships & offshore rigs"
    ],
    "spectra": [
      468.0,
      472.2,
      481.1,
      518.2,
      636.2
    ]
  },
  {
    "z": 31,
    "symbol": "Ga",
    "name": "Gallium",
    "category": "post-trans",
    "categoryLabel": "POST-TRANSITION METAL",
    "color": "#45e3b0",
    "weight": "69.723",
    "shells": [
      2,
      8,
      18,
      3
    ],
    "orbitalConfig": "[Ar] 3d\u00b9\u2070 4s\u00b2 4p\u00b9",
    "block": "4p-Block",
    "valence": 3,
    "period": 4,
    "groupLabel": "Group 13",
    "col": 13,
    "row": 4,
    "blurb": "Melts at 29.76 \u00b0C\u2014solid on a desk, yet it liquefies in the warmth of your bare hand while expanding as it freezes like water.",
    "uses": [
      "Gallium nitride (GaN) fast chargers & 5G radar",
      "Blue & violet Blu-ray laser diodes (InGaN)",
      "Spacecraft triple-junction GaAs solar arrays",
      "Safe non-toxic liquid-metal thermometers"
    ],
    "spectra": [
      403.3,
      417.2,
      535.4,
      639.7,
      641.4
    ]
  },
  {
    "z": 32,
    "symbol": "Ge",
    "name": "Germanium",
    "category": "metalloid",
    "categoryLabel": "METALLOID",
    "color": "#a569ff",
    "weight": "72.630",
    "shells": [
      2,
      8,
      18,
      4
    ],
    "orbitalConfig": "[Ar] 3d\u00b9\u2070 4s\u00b2 4p\u00b2",
    "block": "4p-Block",
    "valence": 4,
    "period": 4,
    "groupLabel": "Group 14",
    "col": 14,
    "row": 4,
    "blurb": "Opaque to visible light yet crystal-clear to thermal infrared, and the element used in the world's very first working transistor in 1947.",
    "uses": [
      "Thermal-imaging night-vision camera lenses",
      "High-speed SiGe heterojunction transistors",
      "Fiber-optic refractive-index core dopant",
      "The 1947 Bell Labs point-contact transistor"
    ],
    "spectra": [
      422.7,
      468.6,
      474.2,
      589.3,
      602.1
    ]
  },
  {
    "z": 33,
    "symbol": "As",
    "name": "Arsenic",
    "category": "metalloid",
    "categoryLabel": "METALLOID",
    "color": "#a569ff",
    "weight": "74.922",
    "shells": [
      2,
      8,
      18,
      5
    ],
    "orbitalConfig": "[Ar] 3d\u00b9\u2070 4s\u00b2 4p\u00b3",
    "block": "4p-Block",
    "valence": 5,
    "period": 4,
    "groupLabel": "Group 15",
    "col": 15,
    "row": 4,
    "blurb": "Infamous in Renaissance court intrigue as 'inheritance powder,' yet today indispensable in high-speed gallium arsenide optoelectronics.",
    "uses": [
      "Gallium arsenide (GaAs) 5G & iPhone RF amplifiers",
      "Arsenic trioxide therapy for acute PML leukemia",
      "Historical Victorian 'Scheele's Green' pigment",
      "N-type ultra-high-speed semiconductor doping"
    ],
    "spectra": [
      400.6,
      421.2,
      449.4,
      510.5,
      555.8,
      617.0
    ]
  },
  {
    "z": 34,
    "symbol": "Se",
    "name": "Selenium",
    "category": "nonmetal",
    "categoryLabel": "REACTIVE NONMETAL",
    "color": "#3ae374",
    "weight": "78.971",
    "shells": [
      2,
      8,
      18,
      6
    ],
    "orbitalConfig": "[Ar] 3d\u00b9\u2070 4s\u00b2 4p\u2074",
    "block": "4p-Block",
    "valence": 6,
    "period": 4,
    "groupLabel": "Group 16",
    "col": 16,
    "row": 4,
    "blurb": "Its electrical conductivity surges 1,000-fold when struck by light, enabling the first solar cells, light meters, and xerographic copiers.",
    "uses": [
      "Photoconductive drums in xerographic laser printers",
      "Thin-film CIGS flexible solar photovoltaics",
      "Decolorizing green iron tints in architectural glass",
      "Essential human glutathione peroxidase enzymes"
    ],
    "spectra": [
      473.1,
      473.9,
      474.2,
      522.8,
      537.4
    ]
  },
  {
    "z": 35,
    "symbol": "Br",
    "name": "Bromine",
    "category": "halogen",
    "categoryLabel": "HALOGEN",
    "color": "#ff4da6",
    "weight": "79.904",
    "shells": [
      2,
      8,
      18,
      7
    ],
    "orbitalConfig": "[Ar] 3d\u00b9\u2070 4s\u00b2 4p\u2075",
    "block": "4p-Block",
    "valence": 7,
    "period": 4,
    "groupLabel": "Group 17",
    "col": 17,
    "row": 4,
    "blurb": "One of only two elements liquid at room temperature\u2014a dense, fuming reddish-brown halogen extracted from ancient Dead Sea brines.",
    "uses": [
      "FR-4 flame-retardant printed circuit boards",
      "Silver bromide classic photographic film",
      "Deep-well oil & gas high-density completion brines",
      "Zinc-bromine grid-scale flow batteries"
    ],
    "spectra": [
      447.8,
      470.5,
      478.6,
      481.7,
      615.0,
      635.1,
      656.0
    ]
  },
  {
    "z": 36,
    "symbol": "Kr",
    "name": "Krypton",
    "category": "noble-gas",
    "categoryLabel": "NOBLE GAS",
    "color": "#26d0ce",
    "weight": "83.798",
    "shells": [
      2,
      8,
      18,
      8
    ],
    "orbitalConfig": "[Ar] 3d\u00b9\u2070 4s\u00b2 4p\u2076",
    "block": "4p-Block",
    "valence": 8,
    "period": 4,
    "groupLabel": "Group 18",
    "col": 18,
    "row": 4,
    "blurb": "From 1960 to 1983, the international meter was officially defined as 1,650,763.73 wavelengths of Krypton-86's orange-red spectral line.",
    "uses": [
      "248 nm KrF excimer lasers for microchip lithography",
      "Hall-effect satellite ion thruster propellant",
      "Airport runway approach strobe lighting",
      "Triple-pane architectural window insulation"
    ],
    "spectra": [
      427.4,
      432.0,
      557.0,
      587.1,
      605.6,
      758.7
    ]
  },
  {
    "z": 37,
    "symbol": "Rb",
    "name": "Rubidium",
    "category": "alkali",
    "categoryLabel": "ALKALI METAL",
    "color": "#ff6b4a",
    "weight": "85.468",
    "shells": [
      2,
      8,
      18,
      8,
      1
    ],
    "orbitalConfig": "[Kr] 5s\u00b9",
    "block": "5s-Block",
    "valence": 1,
    "period": 5,
    "groupLabel": "Group 1",
    "col": 1,
    "row": 5,
    "blurb": "Named for its two deep ruby-red spectral lines; melts just above body temperature and ignites spontaneously in open air.",
    "uses": [
      "Chip-scale GPS & telecom rubidium atomic clocks",
      "Bose-Einstein condensate quantum physics",
      "Rubidium-82 myocardial perfusion PET scans",
      "Laser-cooled atomic magnetometers"
    ],
    "spectra": [
      420.2,
      421.6,
      620.6,
      629.8,
      740.8
    ]
  },
  {
    "z": 38,
    "symbol": "Sr",
    "name": "Strontium",
    "category": "alk-earth",
    "categoryLabel": "ALKALINE EARTH METAL",
    "color": "#f5b041",
    "weight": "87.62",
    "shells": [
      2,
      8,
      18,
      8,
      2
    ],
    "orbitalConfig": "[Kr] 5s\u00b2",
    "block": "5s-Block",
    "valence": 2,
    "period": 5,
    "groupLabel": "Group 2",
    "col": 2,
    "row": 5,
    "blurb": "Optical lattice clocks using Strontium-87 atoms are so precise they would neither gain nor lose a single second in 15 billion years.",
    "uses": [
      "Optical lattice clocks accurate to 1s in 15B years",
      "Brilliant crimson-red fireworks & highway flares",
      "Strontium-aluminate long-afterglow phosphors",
      "Archaeological migration tracking in tooth enamel"
    ],
    "spectra": [
      407.8,
      421.6,
      460.7,
      640.8,
      650.4,
      687.8,
      707.0
    ]
  },
  {
    "z": 39,
    "symbol": "Y",
    "name": "Yttrium",
    "category": "transition",
    "categoryLabel": "TRANSITION METAL",
    "color": "#5b8def",
    "weight": "88.906",
    "shells": [
      2,
      8,
      18,
      9,
      2
    ],
    "orbitalConfig": "[Kr] 4d\u00b9 5s\u00b2",
    "block": "4d-Block",
    "valence": 3,
    "period": 5,
    "groupLabel": "Group 3",
    "col": 3,
    "row": 5,
    "blurb": "Discovered in a single quarry in Ytterby, Sweden\u2014a tiny village that remarkably gave its name to four different periodic table elements.",
    "uses": [
      "Nd:YAG surgical, industrial & rangefinding lasers",
      "YBCO high-temperature superconducting cables",
      "YAG:Ce yellow phosphor inside white LEDs",
      "Jet-engine thermal barrier ceramic coatings"
    ],
    "spectra": [
      398.3,
      410.2,
      412.8,
      437.5,
      464.4,
      546.6,
      619.2
    ]
  },
  {
    "z": 40,
    "symbol": "Zr",
    "name": "Zirconium",
    "category": "transition",
    "categoryLabel": "TRANSITION METAL",
    "color": "#5b8def",
    "weight": "91.224",
    "shells": [
      2,
      8,
      18,
      10,
      2
    ],
    "orbitalConfig": "[Kr] 4d\u00b2 5s\u00b2",
    "block": "4d-Block",
    "valence": 4,
    "period": 5,
    "groupLabel": "Group 4",
    "col": 4,
    "row": 5,
    "blurb": "Tiny zircon crystals from Western Australia dated to 4.4 billion years ago are the oldest surviving mineral fragments of early Earth.",
    "uses": [
      "Nuclear reactor Zircaloy fuel-rod cladding",
      "4.4-billion-year-old Hadean zircon geochronology",
      "Cubic zirconia (ZrO\u2082) diamond simulants",
      "Ultra-tough monolithic zirconia dental crowns"
    ],
    "spectra": [
      389.0,
      407.3,
      422.8,
      468.8,
      471.0,
      473.9,
      614.3
    ]
  },
  {
    "z": 41,
    "symbol": "Nb",
    "name": "Niobium",
    "category": "transition",
    "categoryLabel": "TRANSITION METAL",
    "color": "#5b8def",
    "weight": "92.906",
    "shells": [
      2,
      8,
      18,
      12,
      1
    ],
    "orbitalConfig": "[Kr] 4d\u2074 5s\u00b9",
    "block": "4d-Block",
    "valence": 5,
    "period": 5,
    "groupLabel": "Group 5",
    "col": 5,
    "row": 5,
    "blurb": "Has the deepest magnetic penetration depth of any pure superconducting element, powering both CERN's LHC and quantum computers.",
    "uses": [
      "Superconducting RF cavities in CERN's LHC",
      "Transmon superconducting quantum processor qubits",
      "Apollo Lunar Module & Falcon 9 rocket nozzles",
      "Hypoallergenic anodized iridescent jewelry"
    ],
    "spectra": [
      405.9,
      408.0,
      410.1,
      412.4,
      457.3,
      534.4
    ]
  },
  {
    "z": 42,
    "symbol": "Mo",
    "name": "Molybdenum",
    "category": "transition",
    "categoryLabel": "TRANSITION METAL",
    "color": "#5b8def",
    "weight": "95.95",
    "shells": [
      2,
      8,
      18,
      13,
      1
    ],
    "orbitalConfig": "[Kr] 4d\u2075 5s\u00b9",
    "block": "4d-Block",
    "valence": 6,
    "period": 5,
    "groupLabel": "Group 6",
    "col": 6,
    "row": 5,
    "blurb": "Every nitrogen-fixing bacterium on Earth relies on a molybdenum cofactor enzyme to crack atmospheric N\u2082 into life-sustaining ammonia.",
    "uses": [
      "Nitrogenase enzyme for biological nitrogen fixation",
      "MoS\u2082 dry lubricant for spacecraft mechanisms",
      "Ultra-high-strength chromoly aircraft & bike tubing",
      "Technetium-99m radioisotope generators (Mo-99)"
    ],
    "spectra": [
      386.4,
      390.3,
      550.6,
      553.3,
      557.0,
      603.1
    ]
  },
  {
    "z": 43,
    "symbol": "Tc",
    "name": "Technetium",
    "category": "transition",
    "categoryLabel": "TRANSITION METAL",
    "color": "#5b8def",
    "weight": "(98)",
    "shells": [
      2,
      8,
      18,
      13,
      2
    ],
    "orbitalConfig": "[Kr] 4d\u2075 5s\u00b2",
    "block": "4d-Block",
    "valence": 7,
    "period": 5,
    "groupLabel": "Group 7",
    "col": 7,
    "row": 5,
    "blurb": "The lightest element with zero stable isotopes and the very first artificial element synthesized by humanity in 1937.",
    "uses": [
      "Tc-99m SPECT nuclear medicine imaging (40M/yr)",
      "Confirming ongoing nucleosynthesis in red giants",
      "Nanoscale corrosion inhibition in closed loops",
      "Beta-ray calibration standards"
    ],
    "spectra": [
      403.2,
      423.8,
      426.2,
      429.7,
      485.4
    ]
  },
  {
    "z": 44,
    "symbol": "Ru",
    "name": "Ruthenium",
    "category": "transition",
    "categoryLabel": "TRANSITION METAL",
    "color": "#5b8def",
    "weight": "101.07",
    "shells": [
      2,
      8,
      18,
      15,
      1
    ],
    "orbitalConfig": "[Kr] 4d\u2077 5s\u00b9",
    "block": "4d-Block",
    "valence": 8,
    "period": 5,
    "groupLabel": "Group 8",
    "col": 8,
    "row": 5,
    "blurb": "A rare platinum-group catalyst whose Grubbs olefin metathesis complexes won the 2005 Nobel Prize in Chemistry.",
    "uses": [
      "Grubbs Nobel-winning olefin metathesis catalysts",
      "Perpendicular magnetic recording on hard drives",
      "Thick-film chip resistors & reed switch contacts",
      "Single-crystal jet turbine blade stabilization"
    ],
    "spectra": [
      392.6,
      408.1,
      419.9,
      455.5,
      517.1,
      563.6
    ]
  },
  {
    "z": 45,
    "symbol": "Rh",
    "name": "Rhodium",
    "category": "transition",
    "categoryLabel": "TRANSITION METAL",
    "color": "#5b8def",
    "weight": "102.91",
    "shells": [
      2,
      8,
      18,
      16,
      1
    ],
    "orbitalConfig": "[Kr] 4d\u2078 5s\u00b9",
    "block": "4d-Block",
    "valence": 9,
    "period": 5,
    "groupLabel": "Group 9",
    "col": 9,
    "row": 5,
    "blurb": "Often the world's most expensive precious metal\u2014mirror-bright, impervious to tarnish, and unmatched at neutralizing toxic NO\u2093 exhaust.",
    "uses": [
      "Three-way automotive catalytic converters (NO\u2093)",
      "Monsanto acetic acid carbonylation catalysis",
      "Tarnish-proof mirror finish on white gold jewelry",
      "High-flux mammography X-ray tube anodes"
    ],
    "spectra": [
      385.7,
      395.9,
      421.1,
      437.5,
      559.9
    ]
  },
  {
    "z": 46,
    "symbol": "Pd",
    "name": "Palladium",
    "category": "transition",
    "categoryLabel": "TRANSITION METAL",
    "color": "#5b8def",
    "weight": "106.42",
    "shells": [
      2,
      8,
      18,
      18
    ],
    "orbitalConfig": "[Kr] 4d\u00b9\u2070",
    "block": "4d-Block",
    "valence": 10,
    "period": 5,
    "groupLabel": "Group 10",
    "col": 10,
    "row": 5,
    "blurb": "Soaks up 900 times its own volume of hydrogen gas like a metallic sponge and uniquely has zero outer 5s electrons in its ground state.",
    "uses": [
      "Ultra-pure hydrogen gas diffusion membranes",
      "Suzuki & Heck Nobel-winning pharmaceutical catalysis",
      "Low-emission catalytic converters",
      "White-gold alloys & multilayer ceramic capacitors"
    ],
    "spectra": [
      389.4,
      421.3,
      447.3,
      516.4,
      529.6,
      554.7
    ]
  },
  {
    "z": 47,
    "symbol": "Ag",
    "name": "Silver",
    "category": "transition",
    "categoryLabel": "TRANSITION METAL",
    "color": "#5b8def",
    "weight": "107.87",
    "shells": [
      2,
      8,
      18,
      18,
      1
    ],
    "orbitalConfig": "[Kr] 4d\u00b9\u2070 5s\u00b9",
    "block": "4d-Block",
    "valence": 11,
    "period": 5,
    "groupLabel": "Group 11",
    "col": 11,
    "row": 5,
    "blurb": "Possesses the highest electrical conductivity, highest thermal conductivity, and highest optical reflectivity of any metal known.",
    "uses": [
      "Solar cell conductive front-grid screen pastes",
      "Astronomical & laser mirrors (99% reflectivity)",
      "Antimicrobial wound dressings & surgical coatings",
      "High-frequency RF waveguides & electronics"
    ],
    "spectra": [
      405.5,
      421.1,
      466.8,
      520.9,
      546.5,
      547.2
    ]
  },
  {
    "z": 48,
    "symbol": "Cd",
    "name": "Cadmium",
    "category": "transition",
    "categoryLabel": "TRANSITION METAL",
    "color": "#5b8def",
    "weight": "112.41",
    "shells": [
      2,
      8,
      18,
      18,
      2
    ],
    "orbitalConfig": "[Kr] 4d\u00b9\u2070 5s\u00b2",
    "block": "4d-Block",
    "valence": 12,
    "period": 5,
    "groupLabel": "Group 12",
    "col": 12,
    "row": 5,
    "blurb": "Its CdSe quantum dots glow across the entire rainbow purely by tuning crystal diameter from 2 to 6 nanometers.",
    "uses": [
      "QLED television quantum-dot display phosphors",
      "Utility-scale CdTe thin-film solar farms",
      "Thermal-neutron absorbing reactor control rods",
      "Monet's & Van Gogh's brilliant cadmium yellows"
    ],
    "spectra": [
      467.8,
      480.0,
      508.6,
      643.8
    ]
  },
  {
    "z": 49,
    "symbol": "In",
    "name": "Indium",
    "category": "post-trans",
    "categoryLabel": "POST-TRANSITION METAL",
    "color": "#45e3b0",
    "weight": "114.82",
    "shells": [
      2,
      8,
      18,
      18,
      3
    ],
    "orbitalConfig": "[Kr] 4d\u00b9\u2070 5s\u00b2 5p\u00b9",
    "block": "5p-Block",
    "valence": 3,
    "period": 5,
    "groupLabel": "Group 13",
    "col": 13,
    "row": 5,
    "blurb": "When you bend a bar of pure indium, its crystal twinning emits a high-pitched 'indium cry' just like tin\u2014and it wets clean glass.",
    "uses": [
      "Indium Tin Oxide (ITO) transparent touchscreen electrodes",
      "Cryogenic vacuum seals that stay malleable at 1 K",
      "InGaAs fiber-optic telecommunications photodetectors",
      "Low-melting fire-sprinkler fusible alloys"
    ],
    "spectra": [
      410.2,
      451.1,
      524.9,
      609.7,
      689.1
    ]
  },
  {
    "z": 50,
    "symbol": "Sn",
    "name": "Tin",
    "category": "post-trans",
    "categoryLabel": "POST-TRANSITION METAL",
    "color": "#45e3b0",
    "weight": "118.71",
    "shells": [
      2,
      8,
      18,
      18,
      4
    ],
    "orbitalConfig": "[Kr] 4d\u00b9\u2070 5s\u00b2 5p\u00b2",
    "block": "5p-Block",
    "valence": 4,
    "period": 5,
    "groupLabel": "Group 14",
    "col": 14,
    "row": 5,
    "blurb": "Alloyed with copper to launch the Bronze Age; has 10 stable isotopes\u2014more than any other element on the periodic table.",
    "uses": [
      "Lead-free SAC305 electronics circuit board solder",
      "Pilkington float-glass molten tin bath production",
      "Laser-pulsed tin droplets for EUV chip lithography",
      "Nb\u2083Sn superconducting high-field magnets"
    ],
    "spectra": [
      380.1,
      452.5,
      556.2,
      579.9,
      645.4
    ]
  },
  {
    "z": 51,
    "symbol": "Sb",
    "name": "Antimony",
    "category": "metalloid",
    "categoryLabel": "METALLOID",
    "color": "#a569ff",
    "weight": "121.76",
    "shells": [
      2,
      8,
      18,
      18,
      5
    ],
    "orbitalConfig": "[Kr] 4d\u00b9\u2070 5s\u00b2 5p\u00b3",
    "block": "5p-Block",
    "valence": 5,
    "period": 5,
    "groupLabel": "Group 15",
    "col": 15,
    "row": 5,
    "blurb": "The very first element sung by Tom Lehrer! Used since 3100 BCE in Ancient Egypt as kohl eyeliner and expands as it solidifies.",
    "uses": [
      "Flame-retardant synergist in textiles & plastics",
      "Grid hardening in automotive lead-acid batteries",
      "Infrared InSb missile & astronomy thermal sensors",
      "Precision movable-type printing metal alloys"
    ],
    "spectra": [
      403.4,
      556.8,
      563.2,
      600.5,
      607.9,
      613.0
    ]
  },
  {
    "z": 52,
    "symbol": "Te",
    "name": "Tellurium",
    "category": "metalloid",
    "categoryLabel": "METALLOID",
    "color": "#a569ff",
    "weight": "127.60",
    "shells": [
      2,
      8,
      18,
      18,
      6
    ],
    "orbitalConfig": "[Kr] 4d\u00b9\u2070 5s\u00b2 5p\u2074",
    "block": "5p-Block",
    "valence": 6,
    "period": 5,
    "groupLabel": "Group 16",
    "col": 16,
    "row": 5,
    "blurb": "Rarer in Earth's crust than platinum because volatile hydrogen telluride escaped into space during Earth's molten accretion.",
    "uses": [
      "CdTe utility-scale solar photovoltaic panels",
      "Thermoelectric Peltier solid-state coolers (Bi\u2082Te\u2083)",
      "Rewritable phase-change optical discs & PRAM",
      "Free-machining stainless steel additive"
    ],
    "spectra": [
      400.7,
      508.3,
      557.6,
      570.8,
      643.8
    ]
  },
  {
    "z": 53,
    "symbol": "I",
    "name": "Iodine",
    "category": "halogen",
    "categoryLabel": "HALOGEN",
    "color": "#ff4da6",
    "weight": "126.90",
    "shells": [
      2,
      8,
      18,
      18,
      7
    ],
    "orbitalConfig": "[Kr] 4d\u00b9\u2070 5s\u00b2 5p\u2075",
    "block": "5p-Block",
    "valence": 7,
    "period": 5,
    "groupLabel": "Group 17",
    "col": 17,
    "row": 5,
    "blurb": "Glittering violet-black crystals that sublime directly into purple vapor; the heaviest element required by all vertebrate life.",
    "uses": [
      "Thyroid hormone (T\u2083 / T\u2084) metabolic regulation",
      "Radiopaque CT angiography imaging contrast",
      "Surgical povidone-iodine antiseptics",
      "NEXT spacecraft grid ion thruster propellant"
    ],
    "spectra": [
      511.9,
      516.1,
      533.8,
      546.5,
      576.4,
      608.2,
      629.4
    ]
  },
  {
    "z": 54,
    "symbol": "Xe",
    "name": "Xenon",
    "category": "noble-gas",
    "categoryLabel": "NOBLE GAS",
    "color": "#26d0ce",
    "weight": "131.29",
    "shells": [
      2,
      8,
      18,
      18,
      8
    ],
    "orbitalConfig": "[Kr] 4d\u00b9\u2070 5s\u00b2 5p\u2076",
    "block": "5p-Block",
    "valence": 8,
    "period": 5,
    "groupLabel": "Group 18",
    "col": 18,
    "row": 5,
    "blurb": "Shattered the myth of noble gas inertness in 1962 when Neil Bartlett synthesized xenon hexafluoroplatinate.",
    "uses": [
      "Deep-space NASA Dawn & Psyche ion thrusters",
      "Underground liquid-xenon dark matter detectors",
      "IMAX cinema projector arc lamps & strobes",
      "Hyperpolarized Xe-129 lung MRI imaging"
    ],
    "spectra": [
      450.1,
      462.4,
      467.1,
      473.4,
      480.7,
      687.2,
      712.0
    ]
  },
  {
    "z": 55,
    "symbol": "Cs",
    "name": "Cesium",
    "category": "alkali",
    "categoryLabel": "ALKALI METAL",
    "color": "#ff6b4a",
    "weight": "132.91",
    "shells": [
      2,
      8,
      18,
      18,
      8,
      1
    ],
    "orbitalConfig": "[Xe] 6s\u00b9",
    "block": "6s-Block",
    "valence": 1,
    "period": 6,
    "groupLabel": "Group 1",
    "col": 1,
    "row": 6,
    "blurb": "Defines humanity's official unit of time: 1 second equals exactly 9,192,631,770 hyperfine microwave transitions of a Cesium-133 atom.",
    "uses": [
      "SI definition of the second (Cs-133 atomic clocks)",
      "High-density cesium formate deep-drilling fluids",
      "Photoelectric cells & vacuum tube getters",
      "Field-emission electric spacecraft thrusters"
    ],
    "spectra": [
      455.5,
      459.3,
      584.5,
      601.0,
      621.3,
      672.3,
      697.3
    ]
  },
  {
    "z": 56,
    "symbol": "Ba",
    "name": "Barium",
    "category": "alk-earth",
    "categoryLabel": "ALKALINE EARTH METAL",
    "color": "#f5b041",
    "weight": "137.33",
    "shells": [
      2,
      8,
      18,
      18,
      8,
      2
    ],
    "orbitalConfig": "[Xe] 6s\u00b2",
    "block": "6s-Block",
    "valence": 2,
    "period": 6,
    "groupLabel": "Group 2",
    "col": 2,
    "row": 6,
    "blurb": "Because Ba\u00b2\u207a has 54 electrons, insoluble barium sulfate blocks X-rays completely while passing safely through the human digestive tract.",
    "uses": [
      "Barium-meal X-ray gastrointestinal fluoroscopy",
      "Apple-green fireworks & pyrotechnic displays",
      "YBa\u2082Cu\u2083O\u2087 high-temperature superconductors",
      "Vacuum-tube 'getter' scavenging residual gases"
    ],
    "spectra": [
      413.1,
      455.4,
      493.4,
      553.5,
      585.4,
      614.2,
      649.7
    ]
  },
  {
    "z": 57,
    "symbol": "La",
    "name": "Lanthanum",
    "category": "lanthanide",
    "categoryLabel": "LANTHANIDE",
    "color": "#ff9f68",
    "weight": "138.91",
    "shells": [
      2,
      8,
      18,
      18,
      9,
      2
    ],
    "orbitalConfig": "[Xe] 5d\u00b9 6s\u00b2",
    "block": "5d-Block",
    "valence": 3,
    "period": 6,
    "groupLabel": "Lanthanide",
    "col": 3,
    "row": 8,
    "blurb": "Named from the Greek 'lanthanein' (to lie hidden) after Carl Mosander extracted it from cerium nitrate in 1839.",
    "uses": [
      "High-refractive-index cinema & camera lenses",
      "Fluid catalytic cracking (FCC) of petroleum",
      "NiMH hybrid-vehicle battery anodes (LaNi\u2085)",
      "Carbon-arc studio lighting & pool phosphate removers"
    ],
    "spectra": [
      394.9,
      408.7,
      433.4,
      490.0,
      518.4,
      625.0
    ]
  },
  {
    "z": 58,
    "symbol": "Ce",
    "name": "Cerium",
    "category": "lanthanide",
    "categoryLabel": "LANTHANIDE",
    "color": "#ff9f68",
    "weight": "140.12",
    "shells": [
      2,
      8,
      18,
      19,
      9,
      2
    ],
    "orbitalConfig": "[Xe] 4f\u00b9 5d\u00b9 6s\u00b2",
    "block": "4f-Block",
    "valence": 4,
    "period": 6,
    "groupLabel": "Lanthanide",
    "col": 4,
    "row": 8,
    "blurb": "Named after the dwarf planet Ceres; more abundant in Earth's crust than copper and sparks at only 150 \u00b0C.",
    "uses": [
      "Precision optical lens & silicon wafer polishing",
      "Ferrocerium camp & survival fire-starter flints",
      "Self-cleaning oven catalytic walls",
      "Diesel particulate filter regeneration catalysts"
    ],
    "spectra": [
      401.2,
      413.8,
      418.7,
      446.0,
      456.2,
      518.7
    ]
  },
  {
    "z": 59,
    "symbol": "Pr",
    "name": "Praseodymium",
    "category": "lanthanide",
    "categoryLabel": "LANTHANIDE",
    "color": "#ff9f68",
    "weight": "140.91",
    "shells": [
      2,
      8,
      18,
      21,
      8,
      2
    ],
    "orbitalConfig": "[Xe] 4f\u00b3 6s\u00b2",
    "block": "4f-Block",
    "valence": 3,
    "period": 6,
    "groupLabel": "Lanthanide",
    "col": 5,
    "row": 8,
    "blurb": "Paired with neodymium in 'didymium' glass, filtering out the blinding yellow 589 nm sodium glare for glassblowers and welders.",
    "uses": [
      "Didymium safety goggles for glassblowers & welders",
      "High-strength aircraft magnesium engine alloys",
      "EV traction motor Nd-Pr-Fe-B permanent magnets",
      "Perovskite ceramic yellow-green glazes"
    ],
    "spectra": [
      410.1,
      417.9,
      422.5,
      449.6,
      511.1,
      522.0
    ]
  },
  {
    "z": 60,
    "symbol": "Nd",
    "name": "Neodymium",
    "category": "lanthanide",
    "categoryLabel": "LANTHANIDE",
    "color": "#ff9f68",
    "weight": "144.24",
    "shells": [
      2,
      8,
      18,
      22,
      8,
      2
    ],
    "orbitalConfig": "[Xe] 4f\u2074 6s\u00b2",
    "block": "4f-Block",
    "valence": 3,
    "period": 6,
    "groupLabel": "Lanthanide",
    "col": 6,
    "row": 8,
    "blurb": "Creates the strongest permanent magnets known to science\u2014capable of lifting 1,000 times their own weight.",
    "uses": [
      "Nd\u2082Fe\u2081\u2084B supermagnets in EV motors, headphones & wind turbines",
      "Petawatt inertial-confinement fusion laser glass",
      "Chameleon alexandrite-like color-shifting art glass",
      "Hard disk drive voice-coil actuators"
    ],
    "spectra": [
      401.2,
      406.1,
      415.6,
      430.4,
      492.5,
      562.1
    ]
  },
  {
    "z": 61,
    "symbol": "Pm",
    "name": "Promethium",
    "category": "lanthanide",
    "categoryLabel": "LANTHANIDE",
    "color": "#ff9f68",
    "weight": "(145)",
    "shells": [
      2,
      8,
      18,
      23,
      8,
      2
    ],
    "orbitalConfig": "[Xe] 4f\u2075 6s\u00b2",
    "block": "4f-Block",
    "valence": 3,
    "period": 6,
    "groupLabel": "Lanthanide",
    "col": 7,
    "row": 8,
    "blurb": "Named after Prometheus who stole fire from the gods; the only lanthanide with zero stable isotopes on Earth.",
    "uses": [
      "Long-life betavoltaic nuclear microbatteries",
      "Apollo lunar module self-luminous instrument dials",
      "Non-contact industrial sheet thickness gauges",
      "Detected in the spectrum of Andromeda's star GY And"
    ],
    "spectra": [
      391.0,
      395.8,
      408.6,
      441.8,
      495.9,
      543.2
    ]
  },
  {
    "z": 62,
    "symbol": "Sm",
    "name": "Samarium",
    "category": "lanthanide",
    "categoryLabel": "LANTHANIDE",
    "color": "#ff9f68",
    "weight": "150.36",
    "shells": [
      2,
      8,
      18,
      24,
      8,
      2
    ],
    "orbitalConfig": "[Xe] 4f\u2076 6s\u00b2",
    "block": "4f-Block",
    "valence": 3,
    "period": 6,
    "groupLabel": "Lanthanide",
    "col": 8,
    "row": 8,
    "blurb": "Samarium-cobalt magnets keep their full magnetic field even when heated to glowing red heat above 500 \u00b0C.",
    "uses": [
      "SmCo\u2085 magnets that stay magnetized at red-hot 500 \u00b0C",
      "Fender Stratocaster guitar 'Samarium Cobalt' pickups",
      "Samarium-153 bone cancer pain relief therapy",
      "Infrared-absorbing laser cavity filter glass"
    ],
    "spectra": [
      428.1,
      442.4,
      446.7,
      476.0,
      520.1,
      656.9
    ]
  },
  {
    "z": 63,
    "symbol": "Eu",
    "name": "Europium",
    "category": "lanthanide",
    "categoryLabel": "LANTHANIDE",
    "color": "#ff9f68",
    "weight": "151.96",
    "shells": [
      2,
      8,
      18,
      25,
      8,
      2
    ],
    "orbitalConfig": "[Xe] 4f\u2077 6s\u00b2",
    "block": "4f-Block",
    "valence": 3,
    "period": 6,
    "groupLabel": "Lanthanide",
    "col": 9,
    "row": 8,
    "blurb": "Euro banknotes are printed with microscopic europium complexes that glow vivid red and blue under UV anti-counterfeiting scanners.",
    "uses": [
      "Euro banknote UV anti-counterfeiting security ink",
      "Brilliant red & blue display phosphors",
      "Apollo lunar anorthosite 'Europium anomaly' tracer",
      "High-cross-section nuclear control rod absorbers"
    ],
    "spectra": [
      382.0,
      412.9,
      420.5,
      459.4,
      462.7,
      601.8,
      664.5
    ]
  },
  {
    "z": 64,
    "symbol": "Gd",
    "name": "Gadolinium",
    "category": "lanthanide",
    "categoryLabel": "LANTHANIDE",
    "color": "#ff9f68",
    "weight": "157.25",
    "shells": [
      2,
      8,
      18,
      25,
      9,
      2
    ],
    "orbitalConfig": "[Xe] 4f\u2077 5d\u00b9 6s\u00b2",
    "block": "4f-Block",
    "valence": 3,
    "period": 6,
    "groupLabel": "Lanthanide",
    "col": 10,
    "row": 8,
    "blurb": "Seven unpaired 4f electrons give it unmatched paramagnetism and the highest thermal-neutron capture cross-section of any stable element.",
    "uses": [
      "Chelated MRI paramagnetic vascular contrast agents",
      "CANDU & PWR nuclear reactor emergency shutoff",
      "Magnetocaloric solid-state magnetic refrigeration",
      "GGG substrates for magneto-optical isolators"
    ],
    "spectra": [
      385.1,
      405.0,
      407.9,
      422.6,
      501.5,
      515.6
    ]
  },
  {
    "z": 65,
    "symbol": "Tb",
    "name": "Terbium",
    "category": "lanthanide",
    "categoryLabel": "LANTHANIDE",
    "color": "#ff9f68",
    "weight": "158.93",
    "shells": [
      2,
      8,
      18,
      27,
      8,
      2
    ],
    "orbitalConfig": "[Xe] 4f\u2079 6s\u00b2",
    "block": "4f-Block",
    "valence": 3,
    "period": 6,
    "groupLabel": "Lanthanide",
    "col": 11,
    "row": 8,
    "blurb": "In Terfenol-D alloy, terbium changes its physical dimensions inside a magnetic field\u2014turning any solid tabletop into a loudspeaker.",
    "uses": [
      "Terfenol-D giant magnetostrictive sonar actuators",
      "Pure green trichromatic LED & display phosphors",
      "Solid-state fuel cell zirconia stabilizers",
      "High-temperature NdFeB magnet coercivity booster"
    ],
    "spectra": [
      384.9,
      400.6,
      427.9,
      432.6,
      475.2,
      544.5
    ]
  },
  {
    "z": 66,
    "symbol": "Dy",
    "name": "Dysprosium",
    "category": "lanthanide",
    "categoryLabel": "LANTHANIDE",
    "color": "#ff9f68",
    "weight": "162.50",
    "shells": [
      2,
      8,
      18,
      28,
      8,
      2
    ],
    "orbitalConfig": "[Xe] 4f\u00b9\u2070 6s\u00b2",
    "block": "4f-Block",
    "valence": 3,
    "period": 6,
    "groupLabel": "Lanthanide",
    "col": 12,
    "row": 8,
    "blurb": "Named from the Greek 'dysprositos' (hard to get at); prevents electric vehicle motor magnets from demagnetizing under extreme heat.",
    "uses": [
      "High-temperature EV drivetrain motor magnet stabilizer",
      "Dosimeter radiation-measuring crystals (CaSO\u2084:Dy)",
      "High-intensity cinema film studio metal-halide lamps",
      "Adiabatic demagnetization ultra-low cooling"
    ],
    "spectra": [
      400.0,
      404.6,
      418.7,
      421.2,
      458.9,
      597.4
    ]
  },
  {
    "z": 67,
    "symbol": "Ho",
    "name": "Holmium",
    "category": "lanthanide",
    "categoryLabel": "LANTHANIDE",
    "color": "#ff9f68",
    "weight": "164.93",
    "shells": [
      2,
      8,
      18,
      29,
      8,
      2
    ],
    "orbitalConfig": "[Xe] 4f\u00b9\u00b9 6s\u00b2",
    "block": "4f-Block",
    "valence": 3,
    "period": 6,
    "groupLabel": "Lanthanide",
    "col": 13,
    "row": 8,
    "blurb": "Possesses the highest magnetic moment (10.6 Bohr magnetons) of any naturally occurring element; a single holmium atom can store 1 bit of data.",
    "uses": [
      "Single-atom magnetic memory bits (IBM research)",
      "Ho:YAG 2.1 \u03bcm lithotripsy kidney-stone lasers",
      "Extreme-field MRI magnetic flux concentrator pole pieces",
      "Spectrophotometer optical wavelength calibration standards"
    ],
    "spectra": [
      389.1,
      404.5,
      410.4,
      416.3,
      452.1,
      598.3
    ]
  },
  {
    "z": 68,
    "symbol": "Er",
    "name": "Erbium",
    "category": "lanthanide",
    "categoryLabel": "LANTHANIDE",
    "color": "#ff9f68",
    "weight": "167.26",
    "shells": [
      2,
      8,
      18,
      30,
      8,
      2
    ],
    "orbitalConfig": "[Xe] 4f\u00b9\u00b2 6s\u00b2",
    "block": "4f-Block",
    "valence": 3,
    "period": 6,
    "groupLabel": "Lanthanide",
    "col": 14,
    "row": 8,
    "blurb": "Erbium-doped optical amplifiers boost light signals at 1550 nm every 80 km across undersea cables without converting light back to electricity.",
    "uses": [
      "EDFA undersea fiber-optic internet light amplifiers",
      "Er:YAG 2940 nm dermatological & dental lasers",
      "Natural rose-pink coloration for fine crystal & sunglasses",
      "Vanadium alloy ductility improver"
    ],
    "spectra": [
      386.3,
      390.6,
      400.8,
      415.1,
      460.7,
      582.7
    ]
  },
  {
    "z": 69,
    "symbol": "Tm",
    "name": "Thulium",
    "category": "lanthanide",
    "categoryLabel": "LANTHANIDE",
    "color": "#ff9f68",
    "weight": "168.93",
    "shells": [
      2,
      8,
      18,
      31,
      8,
      2
    ],
    "orbitalConfig": "[Xe] 4f\u00b9\u00b3 6s\u00b2",
    "block": "4f-Block",
    "valence": 3,
    "period": 6,
    "groupLabel": "Lanthanide",
    "col": 15,
    "row": 8,
    "blurb": "The least abundant naturally stable lanthanide; irradiated in a reactor, it becomes a self-powered portable X-ray source requiring no electricity.",
    "uses": [
      "Battery-free portable X-ray diagnostics (Tm-170)",
      "1940 nm thulium fiber surgical lasers",
      "Blue-fluorescing Euro banknote verification",
      "High-efficiency ceramic laser host crystals"
    ],
    "spectra": [
      384.8,
      409.4,
      410.6,
      418.8,
      436.0,
      567.6
    ]
  },
  {
    "z": 70,
    "symbol": "Yb",
    "name": "Ytterbium",
    "category": "lanthanide",
    "categoryLabel": "LANTHANIDE",
    "color": "#ff9f68",
    "weight": "173.05",
    "shells": [
      2,
      8,
      18,
      32,
      8,
      2
    ],
    "orbitalConfig": "[Xe] 4f\u00b9\u2074 6s\u00b2",
    "block": "4f-Block",
    "valence": 3,
    "period": 6,
    "groupLabel": "Lanthanide",
    "col": 16,
    "row": 8,
    "blurb": "Has a completely filled 4f\u00b9\u2074 shell and powers both NIST's record-breaking optical atomic clocks and trapped-ion quantum computers.",
    "uses": [
      "Trapped-ion quantum computers (Yb-171 qubits)",
      "NIST optical atomic clocks (1 part in 10\u00b9\u2078 precision)",
      "Kilowatt industrial fiber laser cutting & welding",
      "Piezoresistive earthquake & blast stress gauges"
    ],
    "spectra": [
      398.8,
      535.3,
      555.6,
      648.9,
      679.9
    ]
  },
  {
    "z": 71,
    "symbol": "Lu",
    "name": "Lutetium",
    "category": "lanthanide",
    "categoryLabel": "LANTHANIDE",
    "color": "#ff9f68",
    "weight": "174.97",
    "shells": [
      2,
      8,
      18,
      32,
      9,
      2
    ],
    "orbitalConfig": "[Xe] 4f\u00b9\u2074 5d\u00b9 6s\u00b2",
    "block": "5d-Block",
    "valence": 3,
    "period": 6,
    "groupLabel": "Lanthanide",
    "col": 17,
    "row": 8,
    "blurb": "The heaviest and hardest lanthanide, named after Lutetia (ancient Roman Paris) and prized for fast hospital PET-scan crystals.",
    "uses": [
      "LSO/LYSO scintillator crystals in hospital PET scanners",
      "Lu-177 targeted radioligand prostate cancer therapy",
      "Lu-Hf meteorite & planetary core age dating",
      "High-index immersion lithography lenses"
    ],
    "spectra": [
      387.7,
      451.9,
      513.5,
      540.3,
      600.4,
      622.2
    ]
  },
  {
    "z": 72,
    "symbol": "Hf",
    "name": "Hafnium",
    "category": "transition",
    "categoryLabel": "TRANSITION METAL",
    "color": "#5b8def",
    "weight": "178.49",
    "shells": [
      2,
      8,
      18,
      32,
      10,
      2
    ],
    "orbitalConfig": "[Xe] 4f\u00b9\u2074 5d\u00b2 6s\u00b2",
    "block": "5d-Block",
    "valence": 4,
    "period": 6,
    "groupLabel": "Group 4",
    "col": 4,
    "row": 6,
    "blurb": "In 2007, replacing silicon dioxide with hafnium oxide (HfO\u2082) stopped quantum-tunneling current leakage in sub-45nm computer chips.",
    "uses": [
      "High-\u03ba dielectric gate insulator in every modern CPU/GPU",
      "Tantalum-hafnium carbide (Ta\u2084HfC\u2085) ultra-refractory ceramics",
      "Naval nuclear submarine reactor control rods",
      "Plasma arc torch cutting electrodes"
    ],
    "spectra": [
      382.1,
      409.3,
      417.4,
      531.2,
      555.2,
      618.5
    ]
  },
  {
    "z": 73,
    "symbol": "Ta",
    "name": "Tantalum",
    "category": "transition",
    "categoryLabel": "TRANSITION METAL",
    "color": "#5b8def",
    "weight": "180.95",
    "shells": [
      2,
      8,
      18,
      32,
      11,
      2
    ],
    "orbitalConfig": "[Xe] 4f\u00b9\u2074 5d\u00b3 6s\u00b2",
    "block": "5d-Block",
    "valence": 5,
    "period": 6,
    "groupLabel": "Group 5",
    "col": 5,
    "row": 6,
    "blurb": "Completely immune to boiling aqua regia below 150 \u00b0C; a thin pinhead of sintered tantalum powder packs huge capacitance into smartphones.",
    "uses": [
      "Ultra-compact smartphone & aerospace tantalum capacitors",
      "Biocompatible cranial plates & porous bone implants",
      "Single-crystal jet turbine blade superalloys",
      "Chemical plant acid-proof heat exchangers"
    ],
    "spectra": [
      406.1,
      420.6,
      451.1,
      481.3,
      540.3,
      645.0
    ]
  },
  {
    "z": 74,
    "symbol": "W",
    "name": "Tungsten",
    "category": "transition",
    "categoryLabel": "TRANSITION METAL",
    "color": "#5b8def",
    "weight": "183.84",
    "shells": [
      2,
      8,
      18,
      32,
      12,
      2
    ],
    "orbitalConfig": "[Xe] 4f\u00b9\u2074 5d\u2074 6s\u00b2",
    "block": "5d-Block",
    "valence": 6,
    "period": 6,
    "groupLabel": "Group 6",
    "col": 6,
    "row": 6,
    "blurb": "Boasts the highest melting point (3,422 \u00b0C) and highest tensile strength of any pure metal on the periodic table.",
    "uses": [
      "ITER & SPARC nuclear fusion tokamak plasma-facing tiles",
      "Scanning electron microscope field-emission tips",
      "Tungsten carbide (WC) diamond-hard drill bits",
      "High-efficiency X-ray radiation shields & kinetic penetrators"
    ],
    "spectra": [
      400.9,
      407.4,
      429.5,
      466.0,
      505.3,
      522.5
    ]
  },
  {
    "z": 75,
    "symbol": "Re",
    "name": "Rhenium",
    "category": "transition",
    "categoryLabel": "TRANSITION METAL",
    "color": "#5b8def",
    "weight": "186.21",
    "shells": [
      2,
      8,
      18,
      32,
      13,
      2
    ],
    "orbitalConfig": "[Xe] 4f\u00b9\u2074 5d\u2075 6s\u00b2",
    "block": "5d-Block",
    "valence": 7,
    "period": 6,
    "groupLabel": "Group 7",
    "col": 7,
    "row": 6,
    "blurb": "One of the rarest elements in Earth's crust (1 ppb) and the last stable natural element discovered (1925); resists creep at 2,000 \u00b0C.",
    "uses": [
      "Single-crystal jet fighter & airliner turbine blades",
      "Lead-free high-octane gasoline Pt-Re reforming catalysts",
      "Mass spectrometer ion-gauge filaments",
      "Rhenium-osmium geological ore deposit dating"
    ],
    "spectra": [
      451.3,
      488.9,
      527.1,
      527.6,
      583.4
    ]
  },
  {
    "z": 76,
    "symbol": "Os",
    "name": "Osmium",
    "category": "transition",
    "categoryLabel": "TRANSITION METAL",
    "color": "#5b8def",
    "weight": "190.23",
    "shells": [
      2,
      8,
      18,
      32,
      14,
      2
    ],
    "orbitalConfig": "[Xe] 4f\u00b9\u2074 5d\u2076 6s\u00b2",
    "block": "5d-Block",
    "valence": 8,
    "period": 6,
    "groupLabel": "Group 8",
    "col": 8,
    "row": 6,
    "blurb": "The densest naturally occurring element in the universe (22.59 g/cm\u00b3)\u2014a basketball-sized sphere of osmium weighs over 360 pounds.",
    "uses": [
      "Luxury fountain pen tips & precision compass pivots",
      "Sharpless Nobel-winning asymmetric dihydroxylation",
      "Electron microscopy cell membrane staining",
      "Deep-mantle planetary geochemistry tracers"
    ],
    "spectra": [
      413.6,
      426.1,
      442.0,
      455.0,
      479.4
    ]
  },
  {
    "z": 77,
    "symbol": "Ir",
    "name": "Iridium",
    "category": "transition",
    "categoryLabel": "TRANSITION METAL",
    "color": "#5b8def",
    "weight": "192.22",
    "shells": [
      2,
      8,
      18,
      32,
      15,
      2
    ],
    "orbitalConfig": "[Xe] 4f\u00b9\u2074 5d\u2077 6s\u00b2",
    "block": "5d-Block",
    "valence": 9,
    "period": 6,
    "groupLabel": "Group 9",
    "col": 9,
    "row": 6,
    "blurb": "A worldwide clay layer enriched 100-fold in iridium revealed the 66-million-year-old Chicxulub asteroid impact that ended the dinosaurs.",
    "uses": [
      "K-Pg boundary dinosaur-extinction impact marker",
      "Voyager & Cassini plutonium RTG heat shields",
      "OLED smartphone display phosphorescent emitters",
      "Ultra-long-life laser-welded spark plug tips"
    ],
    "spectra": [
      380.0,
      399.2,
      439.9,
      501.5,
      536.4,
      545.0
    ]
  },
  {
    "z": 78,
    "symbol": "Pt",
    "name": "Platinum",
    "category": "transition",
    "categoryLabel": "TRANSITION METAL",
    "color": "#5b8def",
    "weight": "195.08",
    "shells": [
      2,
      8,
      18,
      32,
      17,
      1
    ],
    "orbitalConfig": "[Xe] 4f\u00b9\u2074 5d\u2079 6s\u00b9",
    "block": "5d-Block",
    "valence": 10,
    "period": 6,
    "groupLabel": "Group 10",
    "col": 10,
    "row": 6,
    "blurb": "An unreactive noble metal whose catalytic mastery powers hydrogen fuel cells and whose cisplatin complex cures testicular cancer.",
    "uses": [
      "Hydrogen PEM fuel-cell & electrolyzer catalysts",
      "Cisplatin & carboplatin life-saving chemotherapies",
      "Cardiac pacemaker & cochlear implant electrodes",
      "Heirloom fine jewelry & glass-fiber bushings"
    ],
    "spectra": [
      392.3,
      411.9,
      444.2,
      505.9,
      530.1,
      547.6
    ]
  },
  {
    "z": 79,
    "symbol": "Au",
    "name": "Gold",
    "category": "transition",
    "categoryLabel": "TRANSITION METAL",
    "color": "#5b8def",
    "weight": "196.97",
    "shells": [
      2,
      8,
      18,
      32,
      18,
      1
    ],
    "orbitalConfig": "[Xe] 4f\u00b9\u2074 5d\u00b9\u2070 6s\u00b9",
    "block": "5d-Block",
    "valence": 11,
    "period": 6,
    "groupLabel": "Group 11",
    "col": 11,
    "row": 6,
    "blurb": "Forged in neutron-star collisions; its inner electrons move at 58% the speed of light, causing relativistic contraction that creates its yellow luster.",
    "uses": [
      "Corrosion-free microchip wire bonding & connectors",
      "Astronaut helmet visors & JWST infrared shields",
      "Rapid lateral-flow diagnostic test nanoparticles",
      "Global monetary reserves & heirloom jewelry"
    ],
    "spectra": [
      406.5,
      479.3,
      506.5,
      523.0,
      583.7,
      627.8
    ]
  },
  {
    "z": 80,
    "symbol": "Hg",
    "name": "Mercury",
    "category": "transition",
    "categoryLabel": "TRANSITION METAL",
    "color": "#5b8def",
    "weight": "200.59",
    "shells": [
      2,
      8,
      18,
      32,
      18,
      2
    ],
    "orbitalConfig": "[Xe] 4f\u00b9\u2074 5d\u00b9\u2070 6s\u00b2",
    "block": "5d-Block",
    "valence": 12,
    "period": 6,
    "groupLabel": "Group 12",
    "col": 12,
    "row": 6,
    "blurb": "Relativistic contraction of its 6s\u00b2 orbital weakens interatomic bonding so severely that mercury remains liquid down to -38.83 \u00b0C.",
    "uses": [
      "NIST mercury-ion deep-space atomic clocks",
      "Liquid-mirror zenith astronomical telescopes",
      "UV germicidal water-purification arc lamps",
      "Historical Torricelli barometers & thermometers"
    ],
    "spectra": [
      404.7,
      435.8,
      546.1,
      577.0,
      579.1
    ]
  },
  {
    "z": 81,
    "symbol": "Tl",
    "name": "Thallium",
    "category": "post-trans",
    "categoryLabel": "POST-TRANSITION METAL",
    "color": "#45e3b0",
    "weight": "204.38",
    "shells": [
      2,
      8,
      18,
      32,
      18,
      3
    ],
    "orbitalConfig": "[Xe] 4f\u00b9\u2074 5d\u00b9\u2070 6s\u00b2 6p\u00b9",
    "block": "6p-Block",
    "valence": 3,
    "period": 6,
    "groupLabel": "Group 13",
    "col": 13,
    "row": 6,
    "blurb": "Discovered by William Crookes via a brilliant emerald-green spectral line; its NaI(Tl) crystals detect gamma rays in physics labs.",
    "uses": [
      "NaI(Tl) gamma-ray scintillation detectors in physics",
      "Ultra-low-temperature mercury-thallium thermometers (-60 \u00b0C)",
      "KRS-5 infrared optical prisms & windows",
      "High-temperature Tl-Ba-Ca-Cu-O superconductors"
    ],
    "spectra": [
      377.6,
      535.0,
      655.0,
      671.4
    ]
  },
  {
    "z": 82,
    "symbol": "Pb",
    "name": "Lead",
    "category": "post-trans",
    "categoryLabel": "POST-TRANSITION METAL",
    "color": "#45e3b0",
    "weight": "207.2",
    "shells": [
      2,
      8,
      18,
      32,
      18,
      4
    ],
    "orbitalConfig": "[Xe] 4f\u00b9\u2074 5d\u00b9\u2070 6s\u00b2 6p\u00b2",
    "block": "6p-Block",
    "valence": 4,
    "period": 6,
    "groupLabel": "Group 14",
    "col": 14,
    "row": 6,
    "blurb": "With a 'magic number' of 82 protons, Lead-208 is the heaviest doubly-magic nucleus and the final stable endpoint of uranium and thorium decay.",
    "uses": [
      "X-ray & gamma-ray medical radiation shielding",
      "Automotive & backup UPS lead-acid batteries",
      "Uranium-lead radiometric dating of Earth's 4.54B-year age",
      "Perovskite next-gen solar cell research"
    ],
    "spectra": [
      405.8,
      424.5,
      500.5,
      520.1,
      560.9,
      600.2
    ]
  },
  {
    "z": 83,
    "symbol": "Bi",
    "name": "Bismuth",
    "category": "post-trans",
    "categoryLabel": "POST-TRANSITION METAL",
    "color": "#45e3b0",
    "weight": "208.98",
    "shells": [
      2,
      8,
      18,
      32,
      18,
      5
    ],
    "orbitalConfig": "[Xe] 4f\u00b9\u2074 5d\u00b9\u2070 6s\u00b2 6p\u00b3",
    "block": "6p-Block",
    "valence": 5,
    "period": 6,
    "groupLabel": "Group 15",
    "col": 15,
    "row": 6,
    "blurb": "Forms mesmerizing rainbow-iridescent hopper crystals and has a half-life of 2 \u00d7 10\u00b9\u2079 years\u2014over a billion times the age of the universe.",
    "uses": [
      "Non-toxic Pepto-Bismol gastrointestinal medicine",
      "Iridescent geometric hopper crystals & pearlescent pigments",
      "Bi\u2082Se\u2083 3D topological insulator quantum physics",
      "Lead-free plumbing solder & fire-sprinkler alloys"
    ],
    "spectra": [
      412.2,
      472.2,
      514.4,
      520.9,
      555.2
    ]
  },
  {
    "z": 84,
    "symbol": "Po",
    "name": "Polonium",
    "category": "metalloid",
    "categoryLabel": "METALLOID",
    "color": "#a569ff",
    "weight": "(209)",
    "shells": [
      2,
      8,
      18,
      32,
      18,
      6
    ],
    "orbitalConfig": "[Xe] 4f\u00b9\u2074 5d\u00b9\u2070 6s\u00b2 6p\u2074",
    "block": "6p-Block",
    "valence": 6,
    "period": 6,
    "groupLabel": "Group 16",
    "col": 16,
    "row": 6,
    "blurb": "Discovered by Marie and Pierre Curie in 1898 and named for Poland; uniquely crystallizes in a simple cubic lattice.",
    "uses": [
      "Lunokhod Soviet lunar rover radioisotope heaters",
      "Industrial anti-static brushes for cleanrooms",
      "Polonium-beryllium neutron startup sources",
      "Historical Curie radioactivity physics research"
    ],
    "spectra": [
      391.3,
      417.1,
      449.3,
      560.5
    ]
  },
  {
    "z": 85,
    "symbol": "At",
    "name": "Astatine",
    "category": "halogen",
    "categoryLabel": "HALOGEN",
    "color": "#ff4da6",
    "weight": "(210)",
    "shells": [
      2,
      8,
      18,
      32,
      18,
      7
    ],
    "orbitalConfig": "[Xe] 4f\u00b9\u2074 5d\u00b9\u2070 6s\u00b2 6p\u2075",
    "block": "6p-Block",
    "valence": 7,
    "period": 6,
    "groupLabel": "Group 17",
    "col": 17,
    "row": 6,
    "blurb": "The rarest naturally occurring element in Earth's crust\u2014fewer than 1 gram exists across the entire planet at any instant.",
    "uses": [
      "Targeted alpha-particle cancer radioimmunotherapy (At-211)",
      "Short-range micrometastasis tumor eradication",
      "Relativistic heavy-halogen quantum chemistry studies",
      "Cyclotron nuclear physics research"
    ],
    "spectra": [
      404.0,
      445.0,
      520.0,
      610.0
    ]
  },
  {
    "z": 86,
    "symbol": "Rn",
    "name": "Radon",
    "category": "noble-gas",
    "categoryLabel": "NOBLE GAS",
    "color": "#26d0ce",
    "weight": "(222)",
    "shells": [
      2,
      8,
      18,
      32,
      18,
      8
    ],
    "orbitalConfig": "[Xe] 4f\u00b9\u2074 5d\u00b9\u2070 6s\u00b2 6p\u2076",
    "block": "6p-Block",
    "valence": 8,
    "period": 6,
    "groupLabel": "Group 18",
    "col": 18,
    "row": 6,
    "blurb": "A dense, colorless radioactive noble gas formed continuously by radium decay in granite bedrock.",
    "uses": [
      "Seismic fault-line & volcanic eruption precursor monitoring",
      "Hydrological groundwater-surface water tracing",
      "Environmental home basement safety mitigation",
      "Historical implantable gold-seed brachytherapy"
    ],
    "spectra": [
      420.3,
      430.8,
      435.0,
      705.5,
      745.0
    ]
  },
  {
    "z": 87,
    "symbol": "Fr",
    "name": "Francium",
    "category": "alkali",
    "categoryLabel": "ALKALI METAL",
    "color": "#ff6b4a",
    "weight": "(223)",
    "shells": [
      2,
      8,
      18,
      32,
      18,
      8,
      1
    ],
    "orbitalConfig": "[Rn] 7s\u00b9",
    "block": "7s-Block",
    "valence": 1,
    "period": 7,
    "groupLabel": "Group 1",
    "col": 1,
    "row": 7,
    "blurb": "Discovered by Marguerite Perey at the Curie Institute in 1939; has a 22-minute half-life and is magneto-optically trapped a few thousand atoms at a time.",
    "uses": [
      "Magneto-optical trap (MOT) atomic parity violation tests",
      "Testing the Standard Model weak nuclear force",
      "Relativistic quantum electrodynamics benchmarks",
      "Actinide decay-chain radiochemistry"
    ],
    "spectra": [
      422.6,
      510.0,
      605.0,
      718.0
    ]
  },
  {
    "z": 88,
    "symbol": "Ra",
    "name": "Radium",
    "category": "alk-earth",
    "categoryLabel": "ALKALINE EARTH METAL",
    "color": "#f5b041",
    "weight": "(226)",
    "shells": [
      2,
      8,
      18,
      32,
      18,
      8,
      2
    ],
    "orbitalConfig": "[Rn] 7s\u00b2",
    "block": "7s-Block",
    "valence": 2,
    "period": 7,
    "groupLabel": "Group 2",
    "col": 2,
    "row": 7,
    "blurb": "Isolated by Marie and Pierre Curie from tons of pitchblende ore; glows faint blue in the dark by exciting surrounding nitrogen.",
    "uses": [
      "Targeted alpha therapy for bone metastases (Ra-223)",
      "Rutherford's gold-foil experiment alpha source",
      "Production of Actinium-225 medical isotopes",
      "Historical radioluminescent instrument dials"
    ],
    "spectra": [
      381.4,
      434.1,
      468.2,
      482.6,
      644.6
    ]
  },
  {
    "z": 89,
    "symbol": "Ac",
    "name": "Actinium",
    "category": "actinide",
    "categoryLabel": "ACTINIDE",
    "color": "#ff6392",
    "weight": "(227)",
    "shells": [
      2,
      8,
      18,
      32,
      18,
      9,
      2
    ],
    "orbitalConfig": "[Rn] 6d\u00b9 7s\u00b2",
    "block": "6d-Block",
    "valence": 3,
    "period": 7,
    "groupLabel": "Actinide",
    "col": 3,
    "row": 9,
    "blurb": "Gives its name to the entire actinide series; Actinium-225 is today dubbed the 'most sought-after isotope on Earth' for targeted cancer therapy.",
    "uses": [
      "Ac-225 antibody-conjugated 'targeted alpha' cancer therapy",
      "High-flux beryllium neutron source (Ac-227)",
      "Deep-ocean circulation geochemical tracer",
      "Compact space probe thermionic research"
    ],
    "spectra": [
      408.8,
      418.0,
      438.6,
      450.7,
      556.0
    ]
  },
  {
    "z": 90,
    "symbol": "Th",
    "name": "Thorium",
    "category": "actinide",
    "categoryLabel": "ACTINIDE",
    "color": "#ff6392",
    "weight": "232.04",
    "shells": [
      2,
      8,
      18,
      32,
      18,
      10,
      2
    ],
    "orbitalConfig": "[Rn] 6d\u00b2 7s\u00b2",
    "block": "6d-Block",
    "valence": 4,
    "period": 7,
    "groupLabel": "Actinide",
    "col": 4,
    "row": 9,
    "blurb": "Thorium-229 possesses the lowest-energy nuclear isomer excitation known (8.35 eV), enabling the world's first solid-state 'nuclear clock.'",
    "uses": [
      "Th-229 vacuum-UV laser nuclear clock metrology",
      "Molten-salt breeder nuclear reactor fuel cycles",
      "High-refractive-index Leica vintage camera lenses",
      "Uranium-thorium dating of coral reefs & cave speleothems"
    ],
    "spectra": [
      401.9,
      438.2,
      439.1,
      486.3,
      576.1,
      640.9
    ]
  },
  {
    "z": 91,
    "symbol": "Pa",
    "name": "Protactinium",
    "category": "actinide",
    "categoryLabel": "ACTINIDE",
    "color": "#ff6392",
    "weight": "231.04",
    "shells": [
      2,
      8,
      18,
      32,
      20,
      9,
      2
    ],
    "orbitalConfig": "[Rn] 5f\u00b2 6d\u00b9 7s\u00b2",
    "block": "5f-Block",
    "valence": 5,
    "period": 7,
    "groupLabel": "Actinide",
    "col": 5,
    "row": 9,
    "blurb": "Co-discovered by Lise Meitner and Otto Hahn in 1917; literally means 'parent of actinium' and becomes a superconductor below 1.4 K.",
    "uses": [
      "\u00b2\u00b3\u00b9Pa/\u00b2\u00b3\u2070Th paleoceanography Atlantic overturning tracer",
      "Radiometric dating of 100,000-year marine sediments",
      "5f-6d orbital hybridization physics benchmarks",
      "Low-temperature actinide superconductivity"
    ],
    "spectra": [
      395.8,
      405.6,
      421.7,
      486.0,
      616.2
    ]
  },
  {
    "z": 92,
    "symbol": "U",
    "name": "Uranium",
    "category": "actinide",
    "categoryLabel": "ACTINIDE",
    "color": "#ff6392",
    "weight": "238.03",
    "shells": [
      2,
      8,
      18,
      32,
      21,
      9,
      2
    ],
    "orbitalConfig": "[Rn] 5f\u00b3 6d\u00b9 7s\u00b2",
    "block": "5f-Block",
    "valence": 6,
    "period": 7,
    "groupLabel": "Actinide",
    "col": 6,
    "row": 9,
    "blurb": "A single fingernail-sized uranium oxide pellet releases as much carbon-free energy via nuclear fission as 1,780 pounds of coal.",
    "uses": [
      "Zero-carbon nuclear power station fission fuel (U-235)",
      "Uranium-lead zircon dating of solar system age",
      "UV-fluorescent lime-green 'vaseline' art glass",
      "Naval nuclear propulsion reactors"
    ],
    "spectra": [
      386.0,
      409.0,
      424.2,
      549.3,
      591.5,
      682.7
    ]
  },
  {
    "z": 93,
    "symbol": "Np",
    "name": "Neptunium",
    "category": "actinide",
    "categoryLabel": "ACTINIDE",
    "color": "#ff6392",
    "weight": "(237)",
    "shells": [
      2,
      8,
      18,
      32,
      22,
      9,
      2
    ],
    "orbitalConfig": "[Rn] 5f\u2074 6d\u00b9 7s\u00b2",
    "block": "5f-Block",
    "valence": 7,
    "period": 7,
    "groupLabel": "Actinide",
    "col": 7,
    "row": 9,
    "blurb": "The first synthetic transuranium element (1940), possessing the widest liquid temperature range of any element on the periodic table (1,632 K).",
    "uses": [
      "Precursor target for producing spacecraft Pu-238 fuel",
      "Fast-neutron high-energy flux detectors",
      "Seven-oxidation-state actinide coordination chemistry",
      "Heavy-fermion superconductor NpPd\u2085Al\u2082"
    ],
    "spectra": [
      399.0,
      415.5,
      429.1,
      504.5,
      587.8
    ]
  },
  {
    "z": 94,
    "symbol": "Pu",
    "name": "Plutonium",
    "category": "actinide",
    "categoryLabel": "ACTINIDE",
    "color": "#ff6392",
    "weight": "(244)",
    "shells": [
      2,
      8,
      18,
      32,
      24,
      8,
      2
    ],
    "orbitalConfig": "[Rn] 5f\u2076 7s\u00b2",
    "block": "5f-Block",
    "valence": 8,
    "period": 7,
    "groupLabel": "Actinide",
    "col": 8,
    "row": 9,
    "blurb": "Exhibits six distinct solid crystal allotropes and powers NASA's Voyager, Curiosity, Perseverance, and New Horizons probes across deep space.",
    "uses": [
      "Pu-238 RTG power for Voyager, Perseverance & Dragonfly",
      "Mixed-oxide (MOX) nuclear reactor fuel recycling",
      "Historical 1970s decade-life cardiac pacemakers",
      "5f electron localization quantum physics"
    ],
    "spectra": [
      398.5,
      420.6,
      449.4,
      476.7,
      586.5
    ]
  },
  {
    "z": 95,
    "symbol": "Am",
    "name": "Americium",
    "category": "actinide",
    "categoryLabel": "ACTINIDE",
    "color": "#ff6392",
    "weight": "(243)",
    "shells": [
      2,
      8,
      18,
      32,
      25,
      8,
      2
    ],
    "orbitalConfig": "[Rn] 5f\u2077 7s\u00b2",
    "block": "5f-Block",
    "valence": 9,
    "period": 7,
    "groupLabel": "Actinide",
    "col": 9,
    "row": 9,
    "blurb": "The only synthetic transuranium element inside millions of homes\u20140.29 micrograms of Americium-241 ionizes air inside smoke detectors.",
    "uses": [
      "Household ionization smoke detectors (Am-241)",
      "European Space Agency long-duration space RTGs",
      "Industrial glass thickness & fluid level gauges",
      "Starting material for synthesizing Californium"
    ],
    "spectra": [
      392.6,
      408.9,
      428.9,
      466.3,
      605.5
    ]
  },
  {
    "z": 96,
    "symbol": "Cm",
    "name": "Curium",
    "category": "actinide",
    "categoryLabel": "ACTINIDE",
    "color": "#ff6392",
    "weight": "(247)",
    "shells": [
      2,
      8,
      18,
      32,
      25,
      9,
      2
    ],
    "orbitalConfig": "[Rn] 5f\u2077 6d\u00b9 7s\u00b2",
    "block": "5f-Block",
    "valence": 10,
    "period": 7,
    "groupLabel": "Actinide",
    "col": 10,
    "row": 9,
    "blurb": "Named in honor of Marie and Pierre Curie; Curium-244 alpha sources aboard Mars rovers bombard Martian rocks to reveal their elemental composition.",
    "uses": [
      "Mars rover (Sojourner, Spirit, Opportunity, Curiosity) APXS rock analyzers",
      "Rosetta Philae comet lander alpha-particle spectrometer",
      "Synthesizing superheavy elements (Lv, Ts)",
      "High-specific-power space radionuclide research"
    ],
    "spectra": [
      390.8,
      402.5,
      420.7,
      445.8,
      590.2
    ]
  },
  {
    "z": 97,
    "symbol": "Bk",
    "name": "Berkelium",
    "category": "actinide",
    "categoryLabel": "ACTINIDE",
    "color": "#ff6392",
    "weight": "(247)",
    "shells": [
      2,
      8,
      18,
      32,
      27,
      8,
      2
    ],
    "orbitalConfig": "[Rn] 5f\u2079 7s\u00b2",
    "block": "5f-Block",
    "valence": 11,
    "period": 7,
    "groupLabel": "Actinide",
    "col": 11,
    "row": 9,
    "blurb": "Synthesized in December 1949 at UC Berkeley; 22 milligrams produced at Oak Ridge served as the indispensable target to discover Tennessine (117).",
    "uses": [
      "Essential target for discovering Tennessine (Z=117)",
      "Synthesizing Moscovium & Nihonium decay chains",
      "High-pressure 5f delocalization X-ray diffraction",
      "Actinide-lanthanide homology calibration"
    ],
    "spectra": [
      396.5,
      412.2,
      435.0,
      520.4,
      610.0
    ]
  },
  {
    "z": 98,
    "symbol": "Cf",
    "name": "Californium",
    "category": "actinide",
    "categoryLabel": "ACTINIDE",
    "color": "#ff6392",
    "weight": "(251)",
    "shells": [
      2,
      8,
      18,
      32,
      28,
      8,
      2
    ],
    "orbitalConfig": "[Rn] 5f\u00b9\u2070 7s\u00b2",
    "block": "5f-Block",
    "valence": 12,
    "period": 7,
    "groupLabel": "Actinide",
    "col": 12,
    "row": 9,
    "blurb": "One microgram of Californium-252 emits 2.3 million neutrons per second\u2014serving as a pocket-sized neutron source for reactor startup.",
    "uses": [
      "Nuclear reactor startup neutron sources (Cf-252)",
      "Neutron prompt gamma activation analysis of coal & cement",
      "Airport luggage & unexploded ordnance neutron scanners",
      "Target used to synthesize Oganesson (Z=118)"
    ],
    "spectra": [
      389.0,
      405.1,
      428.4,
      495.0,
      620.5
    ]
  },
  {
    "z": 99,
    "symbol": "Es",
    "name": "Einsteinium",
    "category": "actinide",
    "categoryLabel": "ACTINIDE",
    "color": "#ff6392",
    "weight": "(252)",
    "shells": [
      2,
      8,
      18,
      32,
      29,
      8,
      2
    ],
    "orbitalConfig": "[Rn] 5f\u00b9\u00b9 7s\u00b2",
    "block": "5f-Block",
    "valence": 13,
    "period": 7,
    "groupLabel": "Actinide",
    "col": 13,
    "row": 9,
    "blurb": "First discovered in the coral debris of the 1952 'Ivy Mike' thermonuclear test in the Pacific and named in honor of Albert Einstein.",
    "uses": [
      "Target for discovering Mendelevium (Z=101)",
      "Probing extreme radiation self-damage in crystal lattices",
      "Surveyor 5 lunar lander alpha-scattering calibration",
      "High-Z relativistic coordination spectroscopy"
    ],
    "spectra": [
      393.8,
      415.0,
      442.1,
      515.8,
      635.0
    ]
  },
  {
    "z": 100,
    "symbol": "Fm",
    "name": "Fermium",
    "category": "actinide",
    "categoryLabel": "ACTINIDE",
    "color": "#ff6392",
    "weight": "(257)",
    "shells": [
      2,
      8,
      18,
      32,
      30,
      8,
      2
    ],
    "orbitalConfig": "[Rn] 5f\u00b9\u00b2 7s\u00b2",
    "block": "5f-Block",
    "valence": 14,
    "period": 7,
    "groupLabel": "Actinide",
    "col": 14,
    "row": 9,
    "blurb": "Named after nuclear pioneer Enrico Fermi; element 100 is the heaviest element that can be formed by neutron bombardment in a reactor.",
    "uses": [
      "Laser resonance ionization atomic spectroscopy",
      "Studying spontaneous fission mass-asymmetry transitions",
      "Limit benchmark of neutron-capture nucleosynthesis",
      "Relativistic atomic ionization potential tests"
    ],
    "spectra": [
      398.0,
      422.0,
      456.0,
      505.0,
      612.0
    ]
  },
  {
    "z": 101,
    "symbol": "Md",
    "name": "Mendelevium",
    "category": "actinide",
    "categoryLabel": "ACTINIDE",
    "color": "#ff6392",
    "weight": "(258)",
    "shells": [
      2,
      8,
      18,
      32,
      31,
      8,
      2
    ],
    "orbitalConfig": "[Rn] 5f\u00b9\u00b3 7s\u00b2",
    "block": "5f-Block",
    "valence": 15,
    "period": 7,
    "groupLabel": "Actinide",
    "col": 15,
    "row": 9,
    "blurb": "Synthesized one atom at a time (17 atoms total) in 1955 by bombarding Einsteinium with alpha particles, honoring Dmitri Mendeleev.",
    "uses": [
      "Pioneering single-atom-at-a-time recoil chemistry",
      "Establishing unexpected +2 oxidation stability in late actinides",
      "Alpha-decay spectroscopy of deformed heavy nuclei",
      "Testing periodic law at Z > 100"
    ],
    "spectra": [
      402.0,
      430.0,
      470.0,
      535.0
    ]
  },
  {
    "z": 102,
    "symbol": "No",
    "name": "Nobelium",
    "category": "actinide",
    "categoryLabel": "ACTINIDE",
    "color": "#ff6392",
    "weight": "(259)",
    "shells": [
      2,
      8,
      18,
      32,
      32,
      8,
      2
    ],
    "orbitalConfig": "[Rn] 5f\u00b9\u2074 7s\u00b2",
    "block": "5f-Block",
    "valence": 16,
    "period": 7,
    "groupLabel": "Actinide",
    "col": 16,
    "row": 9,
    "blurb": "The 102nd element and final element of Tom Lehrer's original 1959 recording; its filled 5f\u00b9\u2074 shell makes No\u00b2\u207a remarkably stable in water.",
    "uses": [
      "Laser spectroscopy of K-isomer deformed nuclei",
      "Direct measurement of first ionization potential at Z=102",
      "Aqueous divalent (+2) actinide coordination benchmarks",
      "Final element of Lehrer's 1959 original song"
    ],
    "spectra": [
      395.0,
      418.0,
      462.0,
      548.0,
      628.0
    ]
  },
  {
    "z": 103,
    "symbol": "Lr",
    "name": "Lawrencium",
    "category": "actinide",
    "categoryLabel": "ACTINIDE",
    "color": "#ff6392",
    "weight": "(266)",
    "shells": [
      2,
      8,
      18,
      32,
      32,
      8,
      3
    ],
    "orbitalConfig": "[Rn] 5f\u00b9\u2074 7s\u00b2 7p\u00b9",
    "block": "7p-Block",
    "valence": 3,
    "period": 7,
    "groupLabel": "Actinide",
    "col": 17,
    "row": 9,
    "blurb": "Completes the actinide series; relativistic stabilization pulls its outer electron into a 7p\u2081/\u2082 orbital rather than the expected 6d\u2081 orbital.",
    "uses": [
      "Featured in Tom Lehrer's 2020 7th stanza (#112 sung)",
      "Surface-ionization measurement of relativistic 7p\u2081/\u2082 binding",
      "Gas-phase volatility chromatography on gold surfaces",
      "Completing the 5f actinide series boundary"
    ],
    "spectra": [
      404.0,
      432.0,
      488.0,
      562.0
    ]
  },
  {
    "z": 104,
    "symbol": "Rf",
    "name": "Rutherfordium",
    "category": "transition",
    "categoryLabel": "TRANSITION METAL",
    "color": "#5b8def",
    "weight": "(267)",
    "shells": [
      2,
      8,
      18,
      32,
      32,
      10,
      2
    ],
    "orbitalConfig": "[Rn] 5f\u00b9\u2074 6d\u00b2 7s\u00b2",
    "block": "6d-Block",
    "valence": 4,
    "period": 7,
    "groupLabel": "Group 4",
    "col": 4,
    "row": 7,
    "blurb": "Named after Ernest Rutherford, father of nuclear physics; opens the transactinide 6d series and forms volatile tetrachloride like zirconium.",
    "uses": [
      "Featured in Tom Lehrer's 2020 7th stanza (#107 sung)",
      "One-atom-at-a-time gas-solid chloride chromatography",
      "Fluoride complexation in aqueous hydrofluoric acid",
      "Confirming Group 4 transition-metal periodicity"
    ],
    "spectra": [
      410.0,
      444.0,
      496.0,
      575.0
    ]
  },
  {
    "z": 105,
    "symbol": "Db",
    "name": "Dubnium",
    "category": "transition",
    "categoryLabel": "TRANSITION METAL",
    "color": "#5b8def",
    "weight": "(268)",
    "shells": [
      2,
      8,
      18,
      32,
      32,
      11,
      2
    ],
    "orbitalConfig": "[Rn] 5f\u00b9\u2074 6d\u00b3 7s\u00b2",
    "block": "6d-Block",
    "valence": 5,
    "period": 7,
    "groupLabel": "Group 5",
    "col": 5,
    "row": 7,
    "blurb": "Named after Dubna, home of the Joint Institute for Nuclear Research (JINR); its longest-lived isotope Db-268 has a 16-hour half-life.",
    "uses": [
      "Featured in Tom Lehrer's 2020 7th stanza (#117 sung)",
      "Automated ARCA liquid-chromatography of oxyhalides",
      "Endpoint of Tennessine & Moscovium alpha-decay chains",
      "Relativistic Group 5 pentahalide volatility studies"
    ],
    "spectra": [
      408.0,
      452.0,
      512.0,
      588.0
    ]
  },
  {
    "z": 106,
    "symbol": "Sg",
    "name": "Seaborgium",
    "category": "transition",
    "categoryLabel": "TRANSITION METAL",
    "color": "#5b8def",
    "weight": "(269)",
    "shells": [
      2,
      8,
      18,
      32,
      32,
      12,
      2
    ],
    "orbitalConfig": "[Rn] 5f\u00b9\u2074 6d\u2074 7s\u00b2",
    "block": "6d-Block",
    "valence": 6,
    "period": 7,
    "groupLabel": "Group 6",
    "col": 6,
    "row": 7,
    "blurb": "The only element ever named after a living person at the time (Glenn T. Seaborg, co-discoverer of 10 transuranium elements).",
    "uses": [
      "Featured in Tom Lehrer's 2020 7th stanza (#108 sung)",
      "First transactinide organometallic hexacarbonyl Sg(CO)\u2086",
      "Volatile oxychloride SgO\u2082Cl\u2082 gas-phase thermochromatography",
      "Group 6 tungsten-homolog relativistic chemistry"
    ],
    "spectra": [
      416.0,
      460.0,
      524.0,
      602.0
    ]
  },
  {
    "z": 107,
    "symbol": "Bh",
    "name": "Bohrium",
    "category": "transition",
    "categoryLabel": "TRANSITION METAL",
    "color": "#5b8def",
    "weight": "(270)",
    "shells": [
      2,
      8,
      18,
      32,
      32,
      13,
      2
    ],
    "orbitalConfig": "[Rn] 5f\u00b9\u2074 6d\u2075 7s\u00b2",
    "block": "6d-Block",
    "valence": 7,
    "period": 7,
    "groupLabel": "Group 7",
    "col": 7,
    "row": 7,
    "blurb": "Synthesized at GSI Darmstadt in 1981 via cold fusion of Bismuth-209 and Chromium-54, honoring quantum pioneer Niels Bohr.",
    "uses": [
      "Final element sung in Tom Lehrer's 2020 7th stanza (#118)",
      "Volatile BhO\u2083Cl oxychloride gas adsorption experiments",
      "Confirming Group 7 rhenium-like heptavalent state",
      "Deformed shell-stabilized nucleus Z=107, N=162 studies"
    ],
    "spectra": [
      422.0,
      468.0,
      536.0,
      615.0
    ]
  },
  {
    "z": 108,
    "symbol": "Hs",
    "name": "Hassium",
    "category": "transition",
    "categoryLabel": "TRANSITION METAL",
    "color": "#5b8def",
    "weight": "(277)",
    "shells": [
      2,
      8,
      18,
      32,
      32,
      14,
      2
    ],
    "orbitalConfig": "[Rn] 5f\u00b9\u2074 6d\u2076 7s\u00b2",
    "block": "6d-Block",
    "valence": 8,
    "period": 7,
    "groupLabel": "Group 8",
    "col": 8,
    "row": 7,
    "blurb": "Named after the German state of Hesse; forms a volatile, tetrahedral tetroxide (HsO\u2084) just like its Group 8 sibling osmium.",
    "uses": [
      "Featured in Tom Lehrer's 2020 7th stanza (#116 sung)",
      "Cryo-thermochromatography of volatile HsO\u2084 tetroxide",
      "Benchmarking doubly-magic deformed shell at N=162",
      "Group 8 octavalent relativistic bonding verification"
    ],
    "spectra": [
      412.0,
      458.0,
      518.0,
      608.0
    ]
  },
  {
    "z": 109,
    "symbol": "Mt",
    "name": "Meitnerium",
    "category": "transition",
    "categoryLabel": "TRANSITION METAL",
    "color": "#5b8def",
    "weight": "(278)",
    "shells": [
      2,
      8,
      18,
      32,
      32,
      15,
      2
    ],
    "orbitalConfig": "[Rn] 5f\u00b9\u2074 6d\u2077 7s\u00b2",
    "block": "6d-Block",
    "valence": 9,
    "period": 7,
    "groupLabel": "Group 9",
    "col": 9,
    "row": 7,
    "blurb": "Honors physicist Lise Meitner, who first explained nuclear fission in 1939; synthesized by fusing Bismuth-209 with Iron-58.",
    "uses": [
      "Featured in Tom Lehrer's 2020 7th stanza (#104 sung)",
      "Recoil-separator alpha-decay chain identification",
      "Relativistic Dirac-Fock calculations of Group 9 d-orbitals",
      "Daughter nucleus in Nihonium & Tennessine chains"
    ],
    "spectra": [
      418.0,
      464.0,
      528.0,
      622.0
    ]
  },
  {
    "z": 110,
    "symbol": "Ds",
    "name": "Darmstadtium",
    "category": "transition",
    "categoryLabel": "TRANSITION METAL",
    "color": "#5b8def",
    "weight": "(281)",
    "shells": [
      2,
      8,
      18,
      32,
      32,
      17,
      1
    ],
    "orbitalConfig": "[Rn] 5f\u00b9\u2074 6d\u2079 7s\u00b9",
    "block": "6d-Block",
    "valence": 10,
    "period": 7,
    "groupLabel": "Group 10",
    "col": 10,
    "row": 7,
    "blurb": "Named after Darmstadt, Germany; relativistic stabilization of its 7s\u00b2 shell makes it even nobler than platinum and gold.",
    "uses": [
      "Featured in Tom Lehrer's 2020 7th stanza (#111 sung)",
      "SHIP velocity-filter heavy-ion fusion kinematics",
      "Studying spontaneous fission half-lives near N=172",
      "Relativistic noble-metal d-band structure modeling"
    ],
    "spectra": [
      424.0,
      472.0,
      540.0,
      632.0
    ]
  },
  {
    "z": 111,
    "symbol": "Rg",
    "name": "Roentgenium",
    "category": "transition",
    "categoryLabel": "TRANSITION METAL",
    "color": "#5b8def",
    "weight": "(282)",
    "shells": [
      2,
      8,
      18,
      32,
      32,
      18,
      1
    ],
    "orbitalConfig": "[Rn] 5f\u00b9\u2074 6d\u2079 7s\u00b2",
    "block": "6d-Block",
    "valence": 11,
    "period": 7,
    "groupLabel": "Group 11",
    "col": 11,
    "row": 7,
    "blurb": "Honors Wilhelm Conrad R\u00f6ntgen, discoverer of X-rays; extreme relativistic contraction flips its ground state to 6d\u2079 7s\u00b2 instead of 6d\u00b9\u2070 7s\u00b9.",
    "uses": [
      "Featured in Tom Lehrer's 2020 7th stanza (#109 sung)",
      "Relativistic gold-homolog auride-like anion predictions",
      "Alpha-decay spectroscopy in Nihonium chains",
      "Probing relativistic 7s orbital contraction limits"
    ],
    "spectra": [
      430.0,
      480.0,
      552.0,
      640.0
    ]
  },
  {
    "z": 112,
    "symbol": "Cn",
    "name": "Copernicium",
    "category": "transition",
    "categoryLabel": "TRANSITION METAL",
    "color": "#5b8def",
    "weight": "(285)",
    "shells": [
      2,
      8,
      18,
      32,
      32,
      18,
      2
    ],
    "orbitalConfig": "[Rn] 5f\u00b9\u2074 6d\u00b9\u2070 7s\u00b2",
    "block": "6d-Block",
    "valence": 12,
    "period": 7,
    "groupLabel": "Group 12",
    "col": 12,
    "row": 7,
    "blurb": "Opens Tom Lehrer's 2020 seventh stanza! Named after Nicolaus Copernicus; so volatile from relativistic 7s\u00b2 contraction it behaves like a noble gas at room temperature.",
    "uses": [
      "First element of Tom Lehrer's 2020 7th stanza (#103 sung)",
      "Gold-surface cryo-adsorption proving extreme volatility",
      "Bridging transition metals and noble gases relativistically",
      "Flerovium & Livermorium alpha-decay daughter analysis"
    ],
    "spectra": [
      406.0,
      448.0,
      508.0,
      592.0
    ]
  },
  {
    "z": 113,
    "symbol": "Nh",
    "name": "Nihonium",
    "category": "post-trans",
    "categoryLabel": "POST-TRANSITION METAL",
    "color": "#45e3b0",
    "weight": "(286)",
    "shells": [
      2,
      8,
      18,
      32,
      32,
      18,
      3
    ],
    "orbitalConfig": "[Rn] 5f\u00b9\u2074 6d\u00b9\u2070 7s\u00b2 7p\u00b9",
    "block": "7p-Block",
    "valence": 3,
    "period": 7,
    "groupLabel": "Group 13",
    "col": 13,
    "row": 7,
    "blurb": "Synthesized at RIKEN in Japan ('Nihon' = Land of the Rising Sun)\u2014the first element discovered in Asia, after 9 years of continuous beam bombardment.",
    "uses": [
      "Featured in Tom Lehrer's 2020 7th stanza (#105 sung)",
      "GARIS gas-filled recoil separator single-atom physics",
      "Adsorption enthalpy studies of NhOH on gold/quartz",
      "Probing spin-orbit splitting of the 7p\u2081/\u2082 shell"
    ],
    "spectra": [
      414.0,
      456.0,
      522.0,
      610.0
    ]
  },
  {
    "z": 114,
    "symbol": "Fl",
    "name": "Flerovium",
    "category": "post-trans",
    "categoryLabel": "POST-TRANSITION METAL",
    "color": "#45e3b0",
    "weight": "(289)",
    "shells": [
      2,
      8,
      18,
      32,
      32,
      18,
      4
    ],
    "orbitalConfig": "[Rn] 5f\u00b9\u2074 6d\u00b9\u2070 7s\u00b2 7p\u00b2",
    "block": "7p-Block",
    "valence": 4,
    "period": 7,
    "groupLabel": "Group 14",
    "col": 14,
    "row": 7,
    "blurb": "Sits at the threshold of the nuclear 'Island of Stability' (Z=114, N=184); closed-shell 7s\u00b2 7p\u2081/\u2082\u00b2 spin-orbit splitting makes it a volatile noble metal.",
    "uses": [
      "Featured in Tom Lehrer's 2020 7th stanza (#110 sung)",
      "Probing the Z=114, N=184 nuclear Island of Stability",
      "Cryo-chromatography confirming quasi-noble-gas volatility",
      "Calcium-48 + Plutonium-244 hot-fusion benchmarks"
    ],
    "spectra": [
      420.0,
      466.0,
      534.0,
      624.0
    ]
  },
  {
    "z": 115,
    "symbol": "Mc",
    "name": "Moscovium",
    "category": "post-trans",
    "categoryLabel": "POST-TRANSITION METAL",
    "color": "#45e3b0",
    "weight": "(290)",
    "shells": [
      2,
      8,
      18,
      32,
      32,
      18,
      5
    ],
    "orbitalConfig": "[Rn] 5f\u00b9\u2074 6d\u00b9\u2070 7s\u00b2 7p\u00b3",
    "block": "7p-Block",
    "valence": 5,
    "period": 7,
    "groupLabel": "Group 15",
    "col": 15,
    "row": 7,
    "blurb": "Synthesized by bombarding Americium-243 with Calcium-48 ions, decaying into Nihonium in 0.65 seconds via alpha emission.",
    "uses": [
      "Featured in Tom Lehrer's 2020 7th stanza (#106 sung)",
      "Direct mass-number measurement via FIONA trap",
      "Synthesizing Nihonium-286 for chemical studies",
      "Relativistic 7p\u2083/\u2082 monovalent (+1) chemistry modeling"
    ],
    "spectra": [
      428.0,
      474.0,
      546.0,
      636.0
    ]
  },
  {
    "z": 116,
    "symbol": "Lv",
    "name": "Livermorium",
    "category": "post-trans",
    "categoryLabel": "POST-TRANSITION METAL",
    "color": "#45e3b0",
    "weight": "(293)",
    "shells": [
      2,
      8,
      18,
      32,
      32,
      18,
      6
    ],
    "orbitalConfig": "[Rn] 5f\u00b9\u2074 6d\u00b9\u2070 7s\u00b2 7p\u2074",
    "block": "7p-Block",
    "valence": 6,
    "period": 7,
    "groupLabel": "Group 16",
    "col": 16,
    "row": 7,
    "blurb": "Honors Lawrence Livermore National Laboratory; synthesized by fusing Curium-245 and Calcium-48 nuclei in a cyclotron.",
    "uses": [
      "Featured in Tom Lehrer's 2020 7th stanza (#114 sung)",
      " titanium-50 & chromium-54 beam synthesis towards Z=120",
      "Alpha-decay chain mapping of superheavy nuclei",
      "Spin-orbit destabilized 7p\u2083/\u2082 polonium-homolog studies"
    ],
    "spectra": [
      434.0,
      482.0,
      558.0,
      648.0
    ]
  },
  {
    "z": 117,
    "symbol": "Ts",
    "name": "Tennessine",
    "category": "halogen",
    "categoryLabel": "HALOGEN",
    "color": "#ff4da6",
    "weight": "(294)",
    "shells": [
      2,
      8,
      18,
      32,
      32,
      18,
      7
    ],
    "orbitalConfig": "[Rn] 5f\u00b9\u2074 6d\u00b9\u2070 7s\u00b2 7p\u2075",
    "block": "7p-Block",
    "valence": 7,
    "period": 7,
    "groupLabel": "Group 17",
    "col": 17,
    "row": 7,
    "blurb": "Honors Oak Ridge, Vanderbilt, and the University of Tennessee; relativistic effects turn this superheavy 'halogen' into a volatile semimetal.",
    "uses": [
      "Featured in Tom Lehrer's 2020 7th stanza (#115 sung)",
      "Cross-bombardment of 22 mg Berkelium-249 with Calcium-48",
      "Extending alpha-decay lifetimes via odd-Z hindrance",
      "Relativistic breakdown of halogen electronegativity"
    ],
    "spectra": [
      440.0,
      490.0,
      570.0,
      660.0
    ]
  },
  {
    "z": 118,
    "symbol": "Og",
    "name": "Oganesson",
    "category": "noble-gas",
    "categoryLabel": "NOBLE GAS",
    "color": "#26d0ce",
    "weight": "(294)",
    "shells": [
      2,
      8,
      18,
      32,
      32,
      18,
      8
    ],
    "orbitalConfig": "[Rn] 5f\u00b9\u2074 6d\u00b9\u2070 7s\u00b2 7p\u2076",
    "block": "7p-Block",
    "valence": 8,
    "period": 7,
    "groupLabel": "Group 18",
    "col": 18,
    "row": 7,
    "blurb": "The heaviest element on the periodic table (Z=118), honoring physicist Yuri Oganessian; relativistic effects smear its electron shells into a Fermi gas and make this 'noble gas' a solid semiconductor at 20 \u00b0C!",
    "uses": [
      "Featured in Tom Lehrer's 2020 7th stanza (#113 sung)",
      "Completing Period 7 of the Periodic Table (Z=118)",
      "Relativistic electron Fermi-gas shell smearing physics",
      "Predicted solid-state semiconductor noble element"
    ],
    "spectra": [
      415.0,
      462.0,
      528.0,
      618.0,
      695.0
    ]
  }
];

export const ELEMENTS_BY_Z = Object.fromEntries(ELEMENTS.map(el => [el.z, el]));
export const ELEMENTS_BY_SYMBOL = Object.fromEntries(ELEMENTS.map(el => [el.symbol, el]));
