// Oncology-specific UI strings
// Added separately to keep ui.js clean

export const ONCOLOGY_UI = {
  en: {
    selectTumour: "Select tumour type",
    clinicalQuestion: "Clinical question",
    staging: "Staging",
    response: "Response assessment",
    scanExtent: "Scan extent",
    extents: {
      ap: "Abdomen & Pelvis",
      cap: "Chest + Abdomen + Pelvis",
      ncap: "Neck + Chest + Abdomen + Pelvis",
    },
    classificationLabel: "Classification:",
    criteriaLabel: "Response criteria:",
    stagingNote: "Staging search differs from response — primary tumour assessment first, then nodal and distant disease.",
    responseNote: "Response search: prior report before images, target lesions before new lesion survey.",
    templateSections: {
      tumorSpecific: "TUMOUR-SPECIFIC ASSESSMENT",
      abdomen: "ABDOMEN & PELVIS",
      chest: "CHEST",
      neck: "NECK",
      impression: "IMPRESSION",
    },
  },
  cs: {
    selectTumour: "Vyberte typ nádoru",
    clinicalQuestion: "Klinická otázka",
    staging: "Staging",
    response: "Hodnocení odpovědi",
    scanExtent: "Rozsah vyšetření",
    extents: {
      ap: "Břicho a pánev",
      cap: "Hrudník + břicho + pánev",
      ncap: "Krk + hrudník + břicho + pánev",
    },
    classificationLabel: "Klasifikace:",
    criteriaLabel: "Kritéria odpovědi:",
    stagingNote: "Systematika stagingu se liší od hodnocení odpovědi — nejdříve primární tumor, pak uzlinové a vzdálené postižení.",
    responseNote: "Systematika odpovědi: nejdříve starý protokol, pak cílové léze, pak přehled nových lézí.",
    templateSections: {
      tumorSpecific: "SPECIFICKÉ HODNOCENÍ NÁDORU",
      abdomen: "BŘICHO A PÁNEV",
      chest: "HRUDNÍK",
      neck: "KRK",
      impression: "ZÁVĚR",
    },
  },
};

export const TUMOUR_GRID_LABELS = {
  en: {
    colorectal: "Colorectal",
    pancreatic: "Pancreatic",
    rcc: "Renal Cell Ca.",
    lymphoma: "Lymphoma",
    hcc: "HCC",
    melanoma: "Melanoma",
    gastric: "Gastric",
    ovarian: "Ovarian",
  },
  cs: {
    colorectal: "Kolorektální",
    pancreatic: "Pankreatický",
    rcc: "Karcinom ledviny",
    lymphoma: "Lymfom",
    hcc: "HCC",
    melanoma: "Melanom",
    gastric: "Žaludeční",
    ovarian: "Ovariální",
  },
};
