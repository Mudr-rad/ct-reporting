// All UI strings in both languages.
// To add a new language: add a new key here and add a button in App.jsx.

export const UI = {
  en: {
    appTitle: "CT REPORTING",
    appSubtitle: "Search Pattern + Template · Evidence-based",
    evidenceLabel: "Evidence:",
    dontMiss: "Don't miss:",
    searchTab: "Search",
    templateTab: "Template",
    mismatchTitle: "Template vs. Search Mismatch",
    searchEvidenceLabel: "Search evidence:",
    protocolTitle: "Ordered Search Protocol — Execute Before Writing",
    legendCritical: "Critical",
    legendHigh: "High",
    legendStandard: "Standard",
    formatNote: "Delete-down format · pre-populated normals",
    copyButton: "Copy",
    copiedButton: "✓ Copied",
    usageNote: "Normal findings pre-filled — delete what is abnormal and annotate it. Fill only ___ fields.",
    criticalNote: "⚠ findings require immediate clinical communication.",
    guidanceRow1: "ASPECTS · ICH · Fisher · Rotterdam · AAST · Hinchey",
    guidanceRow2: "Fleischner · Lung-RADS · UIP · ITMIG · RECIST · ESC",
  },
  cs: {
    appTitle: "CT REPORTING",
    appSubtitle: "Systematika hodnocení + Šablona · Na důkazech založeno",
    evidenceLabel: "Reference:",
    dontMiss: "Nepřehlédni:",
    searchTab: "Systematika",
    templateTab: "Šablona",
    mismatchTitle: "Nesoulad šablony a systematiky hodnocení",
    searchEvidenceLabel: "Reference k systematice:",
    protocolTitle: "Doporučený postup hodnocení — provést před diktováním",
    legendCritical: "Kritický",
    legendHigh: "Prioritní",
    legendStandard: "Standardní",
    formatNote: "Formát mazání · předvyplněný normální nález",
    copyButton: "Kopírovat",
    copiedButton: "✓ Zkopírováno",
    usageNote: "Normální nález je předvyplněn — smažte vše, co neplatí, a doplňte patologický nález. Vyplňujte pouze pole označená ___.",
    criticalNote: "⚠ nálezy vyžadují okamžité sdělení klinikovi.",
    guidanceRow1: "ASPECTS · ICH skóre · Fisher · Rotterdam · AAST · Hinchey",
    guidanceRow2: "Fleischner · Lung-RADS · UIP · ITMIG · RECIST · ESC",
  },
};

// Module labels
export const MODULE_LABELS = {
  en: { abdomen: "ABDOMEN", head: "HEAD", chest: "CHEST", spine: "SPINE", oncology: "ONCOLOGY" },
  cs: { abdomen: "BŘICHO", head: "HLAVA", chest: "HRUDNÍK", spine: "PÁTEŘ", oncology: "ONKOLOGIE" },
};

// Category labels
export const CATEGORY_LABELS = {
  en: {
    surgical: "Surgical", trauma: "Trauma", oncology: "Oncology",
    urological: "Urological", vascular: "Vascular",
    neuro: "Neuro", chest: "Chest", spine: "Spine",
  },
  cs: {
    surgical: "Chirurgie", trauma: "Trauma", oncology: "Onkologie",
    urological: "Urologie", vascular: "Vaskulární",
    neuro: "Neuro", chest: "Hrudník", spine: "Páteř",
  },
};
