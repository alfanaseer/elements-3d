// Frame-accurate synchronization timeline for Tom Lehrer's "The Elements"
// Includes both the Full 118-Element Edition (1959 + Tom Lehrer's official 2020 7th Stanza)
// and the Original 1959 Edition (102 Elements).

export const SONG_EVENTS_102 = [
  // Stanza 1 (Lines 1–4)
  { order: 1, symbol: "Sb", z: 51, time: 8.96, lineIdx: 0, word: "antimony," },
  { order: 2, symbol: "As", z: 33, time: 9.42, lineIdx: 0, word: "arsenic," },
  { order: 3, symbol: "Al", z: 13, time: 9.80, lineIdx: 0, word: "aluminum," },
  { order: 4, symbol: "Se", z: 34, time: 10.26, lineIdx: 0, word: "selenium," },

  { order: 5, symbol: "H", z: 1, time: 10.90, lineIdx: 1, word: "hydrogen" },
  { order: 6, symbol: "O", z: 8, time: 11.38, lineIdx: 1, word: "oxygen" },
  { order: 7, symbol: "N", z: 7, time: 11.90, lineIdx: 1, word: "nitrogen" },
  { order: 8, symbol: "Re", z: 75, time: 12.40, lineIdx: 1, word: "rhenium," },

  { order: 9, symbol: "Ni", z: 28, time: 12.90, lineIdx: 2, word: "nickel," },
  { order: 10, symbol: "Nd", z: 60, time: 13.18, lineIdx: 2, word: "neodymium," },
  { order: 11, symbol: "Np", z: 93, time: 13.84, lineIdx: 2, word: "neptunium," },
  { order: 12, symbol: "Ge", z: 32, time: 14.32, lineIdx: 2, word: "germanium," },

  { order: 13, symbol: "Fe", z: 26, time: 14.90, lineIdx: 3, word: "iron," },
  { order: 14, symbol: "Am", z: 95, time: 15.24, lineIdx: 3, word: "americium," },
  { order: 15, symbol: "Ru", z: 44, time: 15.84, lineIdx: 3, word: "ruthenium," },
  { order: 16, symbol: "U", z: 92, time: 16.44, lineIdx: 3, word: "uranium," },

  // Stanza 2 (Lines 5–8)
  { order: 17, symbol: "Eu", z: 63, time: 16.90, lineIdx: 4, word: "Europium," },
  { order: 18, symbol: "Zr", z: 40, time: 17.42, lineIdx: 4, word: "zirconium," },
  { order: 19, symbol: "Lu", z: 71, time: 17.96, lineIdx: 4, word: "lutetium," },
  { order: 20, symbol: "V", z: 23, time: 18.48, lineIdx: 4, word: "vanadium," },

  { order: 21, symbol: "La", z: 57, time: 19.04, lineIdx: 5, word: "lanthanum" },
  { order: 22, symbol: "Os", z: 76, time: 19.54, lineIdx: 5, word: "osmium" },
  { order: 23, symbol: "At", z: 85, time: 20.08, lineIdx: 5, word: "astatine" },
  { order: 24, symbol: "Ra", z: 88, time: 20.68, lineIdx: 5, word: "radium," },

  { order: 25, symbol: "Au", z: 79, time: 21.18, lineIdx: 6, word: "gold" },
  { order: 26, symbol: "Pa", z: 91, time: 21.32, lineIdx: 6, word: "protactinium" },
  { order: 27, symbol: "In", z: 49, time: 22.16, lineIdx: 6, word: "indium" },
  { order: 28, symbol: "Ga", z: 31, time: 22.66, lineIdx: 6, word: "gallium," },

  { order: 29, symbol: "I", z: 53, time: 24.10, lineIdx: 7, word: "iodine" },
  { order: 30, symbol: "Th", z: 90, time: 24.80, lineIdx: 7, word: "thorium" },
  { order: 31, symbol: "Tm", z: 69, time: 25.32, lineIdx: 7, word: "thulium" },
  { order: 32, symbol: "Tl", z: 81, time: 25.90, lineIdx: 7, word: "thallium." },

  // Stanza 3 (Lines 9–12)
  { order: 33, symbol: "Y", z: 39, time: 28.46, lineIdx: 8, word: "yttrium," },
  { order: 34, symbol: "Yb", z: 70, time: 28.86, lineIdx: 8, word: "ytterbium," },
  { order: 35, symbol: "Ac", z: 89, time: 29.36, lineIdx: 8, word: "actinium," },
  { order: 36, symbol: "Rb", z: 37, time: 29.92, lineIdx: 8, word: "rubidium," },

  { order: 37, symbol: "B", z: 5, time: 30.52, lineIdx: 9, word: "boron," },
  { order: 38, symbol: "Gd", z: 64, time: 30.84, lineIdx: 9, word: "gadolinium," },
  { order: 39, symbol: "Nb", z: 41, time: 31.40, lineIdx: 9, word: "niobium," },
  { order: 40, symbol: "Ir", z: 77, time: 31.94, lineIdx: 9, word: "iridium," },

  { order: 41, symbol: "Sr", z: 38, time: 32.42, lineIdx: 10, word: "strontium" },
  { order: 42, symbol: "Si", z: 14, time: 33.00, lineIdx: 10, word: "silicon" },
  { order: 43, symbol: "Ag", z: 47, time: 33.50, lineIdx: 10, word: "silver" },
  { order: 44, symbol: "Sm", z: 62, time: 33.96, lineIdx: 10, word: "samarium," },

  { order: 45, symbol: "Bi", z: 83, time: 34.72, lineIdx: 11, word: "bismuth," },
  { order: 46, symbol: "Br", z: 35, time: 35.00, lineIdx: 11, word: "bromine," },
  { order: 47, symbol: "Li", z: 3, time: 35.26, lineIdx: 11, word: "lithium," },
  { order: 48, symbol: "Be", z: 4, time: 35.64, lineIdx: 11, word: "beryllium," },
  { order: 49, symbol: "Ba", z: 56, time: 36.28, lineIdx: 11, word: "barium." },

  // Stanza 4 (Lines 13–16)
  { order: 50, symbol: "Ho", z: 67, time: 43.20, lineIdx: 12, word: "holmium" },
  { order: 51, symbol: "He", z: 2, time: 43.62, lineIdx: 12, word: "helium" },
  { order: 52, symbol: "Hf", z: 72, time: 44.14, lineIdx: 12, word: "hafnium" },
  { order: 53, symbol: "Er", z: 68, time: 44.64, lineIdx: 12, word: "erbium," },

  { order: 54, symbol: "P", z: 15, time: 45.18, lineIdx: 13, word: "phosphorus" },
  { order: 55, symbol: "Fr", z: 87, time: 45.78, lineIdx: 13, word: "francium" },
  { order: 56, symbol: "F", z: 9, time: 46.22, lineIdx: 13, word: "fluorine" },
  { order: 57, symbol: "Tb", z: 65, time: 46.70, lineIdx: 13, word: "terbium," },

  { order: 58, symbol: "Mn", z: 25, time: 47.18, lineIdx: 14, word: "manganese" },
  { order: 59, symbol: "Hg", z: 80, time: 47.70, lineIdx: 14, word: "mercury," },
  { order: 60, symbol: "Mo", z: 42, time: 48.24, lineIdx: 14, word: "molybdenum," },
  { order: 61, symbol: "Mg", z: 12, time: 48.60, lineIdx: 14, word: "magnesium," },

  { order: 62, symbol: "Dy", z: 66, time: 49.10, lineIdx: 15, word: "Dysprosium" },
  { order: 63, symbol: "Sc", z: 21, time: 49.70, lineIdx: 15, word: "scandium" },
  { order: 64, symbol: "Ce", z: 58, time: 50.28, lineIdx: 15, word: "cerium" },
  { order: 65, symbol: "Cs", z: 55, time: 50.80, lineIdx: 15, word: "cesium." },

  // Stanza 5 (Lines 17–20)
  { order: 66, symbol: "Pb", z: 82, time: 51.34, lineIdx: 16, word: "lead," },
  { order: 67, symbol: "Pr", z: 59, time: 51.56, lineIdx: 16, word: "praseodymium," },
  { order: 68, symbol: "Pt", z: 78, time: 52.40, lineIdx: 16, word: "platinum," },
  { order: 69, symbol: "Pu", z: 94, time: 52.80, lineIdx: 16, word: "plutonium," },

  { order: 70, symbol: "Pd", z: 46, time: 53.34, lineIdx: 17, word: "Palladium," },
  { order: 71, symbol: "Pm", z: 61, time: 53.84, lineIdx: 17, word: "promethium," },
  { order: 72, symbol: "K", z: 19, time: 54.30, lineIdx: 17, word: "potassium," },
  { order: 73, symbol: "Po", z: 84, time: 54.82, lineIdx: 17, word: "polonium," },

  { order: 74, symbol: "Ta", z: 73, time: 55.38, lineIdx: 18, word: "tantalum," },
  { order: 75, symbol: "Tc", z: 43, time: 55.80, lineIdx: 18, word: "technetium," },
  { order: 76, symbol: "Ti", z: 22, time: 56.30, lineIdx: 18, word: "titanium," },
  { order: 77, symbol: "Te", z: 52, time: 56.80, lineIdx: 18, word: "tellurium," },

  { order: 78, symbol: "Cd", z: 48, time: 58.86, lineIdx: 19, word: "cadmium" },
  { order: 79, symbol: "Ca", z: 20, time: 59.36, lineIdx: 19, word: "calcium" },
  { order: 80, symbol: "Cr", z: 24, time: 59.90, lineIdx: 19, word: "chromium" },
  { order: 81, symbol: "Cm", z: 96, time: 60.56, lineIdx: 19, word: "curium." },

  // Stanza 6 (Lines 21–24)
  { order: 82, symbol: "S", z: 16, time: 63.18, lineIdx: 20, word: "sulfur," },
  { order: 83, symbol: "Cf", z: 98, time: 63.40, lineIdx: 20, word: "californium," },
  { order: 84, symbol: "Fm", z: 100, time: 64.22, lineIdx: 20, word: "fermium," },
  { order: 85, symbol: "Bk", z: 97, time: 64.64, lineIdx: 20, word: "berkelium," },

  { order: 86, symbol: "Md", z: 101, time: 65.58, lineIdx: 21, word: "mendelevium," },
  { order: 87, symbol: "Es", z: 99, time: 66.18, lineIdx: 21, word: "einsteinium," },
  { order: 88, symbol: "No", z: 102, time: 66.76, lineIdx: 21, word: "nobelium," },

  { order: 89, symbol: "Ar", z: 18, time: 67.30, lineIdx: 22, word: "argon," },
  { order: 90, symbol: "Kr", z: 36, time: 67.60, lineIdx: 22, word: "krypton," },
  { order: 91, symbol: "Ne", z: 10, time: 67.90, lineIdx: 22, word: "neon," },
  { order: 92, symbol: "Rn", z: 86, time: 68.14, lineIdx: 22, word: "radon," },
  { order: 93, symbol: "Xe", z: 54, time: 68.42, lineIdx: 22, word: "xenon," },
  { order: 94, symbol: "Zn", z: 30, time: 68.68, lineIdx: 22, word: "zinc," },
  { order: 95, symbol: "Rh", z: 45, time: 69.00, lineIdx: 22, word: "rhodium," },

  { order: 96, symbol: "Cl", z: 17, time: 69.42, lineIdx: 23, word: "chlorine," },
  { order: 97, symbol: "C", z: 6, time: 69.72, lineIdx: 23, word: "carbon," },
  { order: 98, symbol: "Co", z: 27, time: 70.00, lineIdx: 23, word: "cobalt," },
  { order: 99, symbol: "Cu", z: 29, time: 70.30, lineIdx: 23, word: "copper," },
  { order: 100, symbol: "W", z: 74, time: 70.56, lineIdx: 23, word: "tungsten," },
  { order: 101, symbol: "Sn", z: 50, time: 70.90, lineIdx: 23, word: "tin," },
  { order: 102, symbol: "Na", z: 11, time: 71.12, lineIdx: 23, word: "sodium." },
];

// Tom Lehrer's official 2020 Seventh Stanza covering Elements 103–118
export const STANZA_7_EVENTS_2020 = [
  { order: 103, symbol: "Cn", z: 112, time: 73.72, lineIdx: 24, word: "Copernicium," },
  { order: 104, symbol: "Mt", z: 109, time: 74.22, lineIdx: 24, word: "meitnerium," },
  { order: 105, symbol: "Nh", z: 113, time: 74.72, lineIdx: 24, word: "nihonium," },
  { order: 106, symbol: "Mc", z: 115, time: 75.22, lineIdx: 24, word: "moscovium," },

  { order: 107, symbol: "Rf", z: 104, time: 75.74, lineIdx: 25, word: "Rutherfordium," },
  { order: 108, symbol: "Sg", z: 106, time: 76.24, lineIdx: 25, word: "seaborgium," },
  { order: 109, symbol: "Rg", z: 111, time: 76.74, lineIdx: 25, word: "roentgenium," },
  { order: 110, symbol: "Fl", z: 114, time: 77.24, lineIdx: 25, word: "flerovium," },

  { order: 111, symbol: "Ds", z: 110, time: 77.76, lineIdx: 26, word: "Darmstadtium," },
  { order: 112, symbol: "Lr", z: 103, time: 78.26, lineIdx: 26, word: "lawrencium," },
  { order: 113, symbol: "Og", z: 118, time: 78.76, lineIdx: 26, word: "oganesson," },
  { order: 114, symbol: "Lv", z: 116, time: 79.26, lineIdx: 26, word: "livermorium," },

  { order: 115, symbol: "Ts", z: 117, time: 79.78, lineIdx: 27, word: "tennessine" },
  { order: 116, symbol: "Hs", z: 108, time: 80.28, lineIdx: 27, word: "hassium" },
  { order: 117, symbol: "Db", z: 105, time: 80.78, lineIdx: 27, word: "dubnium" },
  { order: 118, symbol: "Bh", z: 107, time: 81.28, lineIdx: 27, word: "bohrium." },
];

export const SONG_EVENTS_118 = [...SONG_EVENTS_102, ...STANZA_7_EVENTS_2020];

// Lyric lines with token-level timing for karaoke highlighting
export const LYRIC_LINES_BASE = [
  {
    start: 0.0,
    end: 10.75,
    tokens: [
      { text: "There's", time: 8.75 },
      { text: "antimony,", time: 8.96, symbol: "Sb" },
      { text: "arsenic,", time: 9.42, symbol: "As" },
      { text: "aluminum,", time: 9.80, symbol: "Al" },
      { text: "selenium,", time: 10.26, symbol: "Se" },
    ],
  },
  {
    start: 10.75,
    end: 12.80,
    tokens: [
      { text: "And", time: 10.78 },
      { text: "hydrogen", time: 10.90, symbol: "H" },
      { text: "and", time: 11.26 },
      { text: "oxygen", time: 11.38, symbol: "O" },
      { text: "and", time: 11.76 },
      { text: "nitrogen", time: 11.90, symbol: "N" },
      { text: "and", time: 12.28 },
      { text: "rhenium,", time: 12.40, symbol: "Re" },
    ],
  },
  {
    start: 12.80,
    end: 14.80,
    tokens: [
      { text: "And", time: 12.82 },
      { text: "nickel,", time: 12.90, symbol: "Ni" },
      { text: "neodymium,", time: 13.18, symbol: "Nd" },
      { text: "neptunium,", time: 13.84, symbol: "Np" },
      { text: "germanium,", time: 14.32, symbol: "Ge" },
    ],
  },
  {
    start: 14.80,
    end: 16.82,
    tokens: [
      { text: "And", time: 14.82 },
      { text: "iron,", time: 14.90, symbol: "Fe" },
      { text: "americium,", time: 15.24, symbol: "Am" },
      { text: "ruthenium,", time: 15.84, symbol: "Ru" },
      { text: "uranium,", time: 16.44, symbol: "U" },
    ],
  },
  {
    start: 16.82,
    end: 18.94,
    tokens: [
      { text: "Europium,", time: 16.90, symbol: "Eu" },
      { text: "zirconium,", time: 17.42, symbol: "Zr" },
      { text: "lutetium,", time: 17.96, symbol: "Lu" },
      { text: "vanadium,", time: 18.48, symbol: "V" },
    ],
  },
  {
    start: 18.94,
    end: 21.08,
    tokens: [
      { text: "And", time: 18.96 },
      { text: "lanthanum", time: 19.04, symbol: "La" },
      { text: "and", time: 19.44 },
      { text: "osmium", time: 19.54, symbol: "Os" },
      { text: "and", time: 19.96 },
      { text: "astatine", time: 20.08, symbol: "At" },
      { text: "and", time: 20.56 },
      { text: "radium,", time: 20.68, symbol: "Ra" },
    ],
  },
  {
    start: 21.08,
    end: 23.85,
    tokens: [
      { text: "And", time: 21.10 },
      { text: "gold", time: 21.18, symbol: "Au" },
      { text: "and", time: 21.26 },
      { text: "protactinium", time: 21.32, symbol: "Pa" },
      { text: "and", time: 22.04 },
      { text: "indium", time: 22.16, symbol: "In" },
      { text: "and", time: 22.54 },
      { text: "gallium,", time: 22.66, symbol: "Ga" },
    ],
  },
  {
    start: 23.85,
    end: 28.20,
    tokens: [
      { text: "And", time: 23.95 },
      { text: "iodine", time: 24.10, symbol: "I" },
      { text: "and", time: 24.65 },
      { text: "thorium", time: 24.80, symbol: "Th" },
      { text: "and", time: 25.20 },
      { text: "thulium", time: 25.32, symbol: "Tm" },
      { text: "and", time: 25.78 },
      { text: "thallium.", time: 25.90, symbol: "Tl" },
    ],
  },
  {
    start: 28.20,
    end: 30.42,
    tokens: [
      { text: "There's", time: 28.32 },
      { text: "yttrium,", time: 28.46, symbol: "Y" },
      { text: "ytterbium,", time: 28.86, symbol: "Yb" },
      { text: "actinium,", time: 29.36, symbol: "Ac" },
      { text: "rubidium,", time: 29.92, symbol: "Rb" },
    ],
  },
  {
    start: 30.42,
    end: 32.34,
    tokens: [
      { text: "And", time: 30.44 },
      { text: "boron,", time: 30.52, symbol: "B" },
      { text: "gadolinium,", time: 30.84, symbol: "Gd" },
      { text: "niobium,", time: 31.40, symbol: "Nb" },
      { text: "iridium,", time: 31.94, symbol: "Ir" },
    ],
  },
  {
    start: 32.34,
    end: 34.60,
    tokens: [
      { text: "And", time: 32.36 },
      { text: "strontium", time: 32.42, symbol: "Sr" },
      { text: "and", time: 32.88 },
      { text: "silicon", time: 33.00, symbol: "Si" },
      { text: "and", time: 33.40 },
      { text: "silver", time: 33.50, symbol: "Ag" },
      { text: "and", time: 33.86 },
      { text: "samarium,", time: 33.96, symbol: "Sm" },
    ],
  },
  {
    start: 34.60,
    end: 42.90,
    tokens: [
      { text: "And", time: 34.62 },
      { text: "bismuth,", time: 34.72, symbol: "Bi" },
      { text: "bromine,", time: 35.00, symbol: "Br" },
      { text: "lithium,", time: 35.26, symbol: "Li" },
      { text: "beryllium,", time: 35.64, symbol: "Be" },
      { text: "and", time: 36.16 },
      { text: "barium.", time: 36.28, symbol: "Ba" },
    ],
  },
  {
    start: 42.90,
    end: 45.08,
    tokens: [
      { text: "There's", time: 43.05 },
      { text: "holmium", time: 43.20, symbol: "Ho" },
      { text: "and", time: 43.52 },
      { text: "helium", time: 43.62, symbol: "He" },
      { text: "and", time: 44.02 },
      { text: "hafnium", time: 44.14, symbol: "Hf" },
      { text: "and", time: 44.52 },
      { text: "erbium,", time: 44.64, symbol: "Er" },
    ],
  },
  {
    start: 45.08,
    end: 47.08,
    tokens: [
      { text: "And", time: 45.10 },
      { text: "phosphorus", time: 45.18, symbol: "P" },
      { text: "and", time: 45.66 },
      { text: "francium", time: 45.78, symbol: "Fr" },
      { text: "and", time: 46.12 },
      { text: "fluorine", time: 46.22, symbol: "F" },
      { text: "and", time: 46.58 },
      { text: "terbium,", time: 46.70, symbol: "Tb" },
    ],
  },
  {
    start: 47.08,
    end: 49.02,
    tokens: [
      { text: "And", time: 47.10 },
      { text: "manganese", time: 47.18, symbol: "Mn" },
      { text: "and", time: 47.58 },
      { text: "mercury,", time: 47.70, symbol: "Hg" },
      { text: "molybdenum,", time: 48.24, symbol: "Mo" },
      { text: "magnesium,", time: 48.60, symbol: "Mg" },
    ],
  },
  {
    start: 49.02,
    end: 51.24,
    tokens: [
      { text: "Dysprosium", time: 49.10, symbol: "Dy" },
      { text: "and", time: 49.58 },
      { text: "scandium", time: 49.70, symbol: "Sc" },
      { text: "and", time: 50.16 },
      { text: "cerium", time: 50.28, symbol: "Ce" },
      { text: "and", time: 50.68 },
      { text: "cesium.", time: 50.80, symbol: "Cs" },
    ],
  },
  {
    start: 51.24,
    end: 53.26,
    tokens: [
      { text: "And", time: 51.26 },
      { text: "lead,", time: 51.34, symbol: "Pb" },
      { text: "praseodymium,", time: 51.56, symbol: "Pr" },
      { text: "and", time: 52.28 },
      { text: "platinum,", time: 52.40, symbol: "Pt" },
      { text: "plutonium,", time: 52.80, symbol: "Pu" },
    ],
  },
  {
    start: 53.26,
    end: 55.28,
    tokens: [
      { text: "Palladium,", time: 53.34, symbol: "Pd" },
      { text: "promethium,", time: 53.84, symbol: "Pm" },
      { text: "potassium,", time: 54.30, symbol: "K" },
      { text: "polonium,", time: 54.82, symbol: "Po" },
    ],
  },
  {
    start: 55.28,
    end: 58.60,
    tokens: [
      { text: "And", time: 55.30 },
      { text: "tantalum,", time: 55.38, symbol: "Ta" },
      { text: "technetium,", time: 55.80, symbol: "Tc" },
      { text: "titanium,", time: 56.30, symbol: "Ti" },
      { text: "tellurium,", time: 56.80, symbol: "Te" },
    ],
  },
  {
    start: 58.60,
    end: 62.95,
    tokens: [
      { text: "And", time: 58.72 },
      { text: "cadmium", time: 58.86, symbol: "Cd" },
      { text: "and", time: 59.24 },
      { text: "calcium", time: 59.36, symbol: "Ca" },
      { text: "and", time: 59.78 },
      { text: "chromium", time: 59.90, symbol: "Cr" },
      { text: "and", time: 60.44 },
      { text: "curium.", time: 60.56, symbol: "Cm" },
    ],
  },
  {
    start: 62.95,
    end: 65.38,
    tokens: [
      { text: "There's", time: 63.05 },
      { text: "sulfur,", time: 63.18, symbol: "S" },
      { text: "californium,", time: 63.40, symbol: "Cf" },
      { text: "and", time: 64.10 },
      { text: "fermium,", time: 64.22, symbol: "Fm" },
      { text: "berkelium,", time: 64.64, symbol: "Bk" },
    ],
  },
  {
    start: 65.38,
    end: 67.22,
    tokens: [
      { text: "And", time: 65.40 },
      { text: "also", time: 65.48 },
      { text: "mendelevium,", time: 65.58, symbol: "Md" },
      { text: "einsteinium,", time: 66.18, symbol: "Es" },
      { text: "nobelium,", time: 66.76, symbol: "No" },
    ],
  },
  {
    start: 67.22,
    end: 69.34,
    tokens: [
      { text: "And", time: 67.24 },
      { text: "argon,", time: 67.30, symbol: "Ar" },
      { text: "krypton,", time: 67.60, symbol: "Kr" },
      { text: "neon,", time: 67.90, symbol: "Ne" },
      { text: "radon,", time: 68.14, symbol: "Rn" },
      { text: "xenon,", time: 68.42, symbol: "Xe" },
      { text: "zinc,", time: 68.68, symbol: "Zn" },
      { text: "and", time: 68.90 },
      { text: "rhodium,", time: 69.00, symbol: "Rh" },
    ],
  },
  {
    start: 69.34,
    end: 73.60,
    tokens: [
      { text: "And", time: 69.36 },
      { text: "chlorine,", time: 69.42, symbol: "Cl" },
      { text: "carbon,", time: 69.72, symbol: "C" },
      { text: "cobalt,", time: 70.00, symbol: "Co" },
      { text: "copper,", time: 70.30, symbol: "Cu" },
      { text: "tungsten,", time: 70.56, symbol: "W" },
      { text: "tin,", time: 70.90, symbol: "Sn" },
      { text: "and", time: 71.02 },
      { text: "sodium.", time: 71.12, symbol: "Na" },
    ],
  },
];

export const LYRIC_LINES_STANZA_7 = [
  {
    start: 73.60,
    end: 75.70,
    tokens: [
      { text: "Copernicium,", time: 73.72, symbol: "Cn" },
      { text: "meitnerium,", time: 74.22, symbol: "Mt" },
      { text: "nihonium,", time: 74.72, symbol: "Nh" },
      { text: "moscovium,", time: 75.22, symbol: "Mc" },
    ],
  },
  {
    start: 75.70,
    end: 77.72,
    tokens: [
      { text: "Rutherfordium,", time: 75.74, symbol: "Rf" },
      { text: "seaborgium,", time: 76.24, symbol: "Sg" },
      { text: "roentgenium,", time: 76.74, symbol: "Rg" },
      { text: "flerovium,", time: 77.24, symbol: "Fl" },
    ],
  },
  {
    start: 77.72,
    end: 79.74,
    tokens: [
      { text: "Darmstadtium,", time: 77.76, symbol: "Ds" },
      { text: "lawrencium,", time: 78.26, symbol: "Lr" },
      { text: "oganesson,", time: 78.76, symbol: "Og" },
      { text: "livermorium,", time: 79.26, symbol: "Lv" },
    ],
  },
  {
    start: 79.74,
    end: 83.85,
    tokens: [
      { text: "And", time: 79.75 },
      { text: "tennessine", time: 79.78, symbol: "Ts" },
      { text: "and", time: 80.20 },
      { text: "hassium", time: 80.28, symbol: "Hs" },
      { text: "and", time: 80.70 },
      { text: "dubnium", time: 80.78, symbol: "Db" },
      { text: "and", time: 81.20 },
      { text: "bohrium.", time: 81.28, symbol: "Bh" },
    ],
  },
];

export function makeClosingLines(offsetSec) {
  return [
    {
      start: 73.60 + offsetSec,
      end: 77.40 + offsetSec,
      tokens: [
        { text: "These", time: 73.85 + offsetSec },
        { text: "are", time: 74.05 + offsetSec },
        { text: "the", time: 74.20 + offsetSec },
        { text: "only", time: 74.38 + offsetSec },
        { text: "ones", time: 74.68 + offsetSec },
        { text: "of", time: 74.88 + offsetSec },
        { text: "which", time: 75.04 + offsetSec },
        { text: "the", time: 75.22 + offsetSec },
        { text: "news", time: 75.40 + offsetSec },
        { text: "has", time: 75.62 + offsetSec },
        { text: "come", time: 75.80 + offsetSec },
        { text: "to", time: 76.00 + offsetSec },
        { text: "Har-vard,", time: 76.18 + offsetSec },
      ],
    },
    {
      start: 77.40 + offsetSec,
      end: 84.00 + offsetSec,
      tokens: [
        { text: "And", time: 77.52 + offsetSec },
        { text: "there", time: 77.66 + offsetSec },
        { text: "may", time: 77.82 + offsetSec },
        { text: "be", time: 78.00 + offsetSec },
        { text: "many", time: 78.18 + offsetSec },
        { text: "others,", time: 78.42 + offsetSec },
        { text: "but", time: 78.72 + offsetSec },
        { text: "they", time: 78.88 + offsetSec },
        { text: "haven't", time: 79.08 + offsetSec },
        { text: "been", time: 79.35 + offsetSec },
        { text: "dis-cov-ered!", time: 79.55 + offsetSec },
      ],
    },
  ];
}

export const LYRIC_LINES_118 = [
  ...LYRIC_LINES_BASE,
  ...LYRIC_LINES_STANZA_7,
  ...makeClosingLines(10.20),
];

export const LYRIC_LINES_102 = [
  ...LYRIC_LINES_BASE,
  ...makeClosingLines(0.0),
];
