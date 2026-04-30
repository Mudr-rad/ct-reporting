// Oncology templates part 2: HCC, melanoma, gastric, ovarian

export const ONCOLOGY_PART2 = [
  {
    id: "hcc",
    validExtents: ["ap", "cap"],
    en: {
      label: "HCC",
      staging: {
        evidence: "LI-RADS v2018 (ACR); BCLC 2022 (Reig et al. J Hepatol 2022); TNM 8th; EASL HCC guidelines 2022",
        criticalFindings: ["Portal vein tumour thrombus (PVTT)", "LI-RADS 5 features", "Extrahepatic spread", "Background liver disease severity"],
        searchEvidence: "LI-RADS v2018 ACR; Reig 2022 BCLC update; EASL 2022 CT staging; Forner 2010 diagnostic criteria without biopsy",
        searchMismatch: "Common error: applying standard tumour staging. HCC staging is inseparable from liver disease (Child-Pugh, MELD). CT must report: (1) tumour features (LI-RADS), (2) portal vein, (3) extrahepatic, (4) background liver — all four required.",
        classification: "LI-RADS v2018; BCLC 2022; TNM 8th",
        searchPattern: [
          { step: 1, priority: "critical", title: "Portal Vein — PVTT Changes BCLC Immediately", detail: "Main PV, right/left branches. Bland thrombus (no enhancement) vs tumour thrombus (enhancing, expanded vein). PVTT = BCLC C minimum.", time: "20s" },
          { step: 2, priority: "critical", title: "LI-RADS Per Lesion ≥10mm", detail: "Major features: APHE, washout appearance (PVP/delayed hypoenhancement), enhancing capsule, growth ≥50%/6mo. LI-RADS 5 = HCC in cirrhosis/HBV. LI-RADS M = malignant uncertain type.", time: "60s" },
          { step: 3, priority: "critical", title: "Extrahepatic Disease", detail: "Portocaval, coeliac, para-aortic nodes. Lung (hepatic vein route). Bone. Adrenal.", time: "20s" },
          { step: 4, priority: "high", title: "Background Liver — Operability Context", detail: "Cirrhosis morphology (nodular surface, caudate hypertrophy). Portal hypertension (splenomegaly, varices, ascites). Same tumour in Child-A vs C = completely different management.", time: "20s" },
          { step: 5, priority: "high", title: "Hepatic Vein + FLR", detail: "HV proximity to tumour. FLR estimate for resection. Variant arterial anatomy for TACE planning.", time: "20s" },
          { step: 6, priority: "normal", title: "Chest (C+A+P)", detail: "Pulmonary metastases. Pleural effusion (hydrothorax vs metastatic).", time: "15s" },
        ],
        template: {
          tumorSpecific: `PORTAL VEIN [assess first — PVTT changes BCLC immediately]
Main PV: Patent / Thrombus — bland (no enhancement) / Tumour thrombus (enhancing, expanded)
Right PV: Patent / Thrombus ___  Left PV: Patent / Thrombus ___
→ PVTT: Absent / Present [BCLC C minimum]

LESION(S) — LI-RADS v2018
Lesion 1: Segment ___, ___ mm
  APHE: No / Yes  Washout (PVP/delayed hypo): No / Yes
  Enhancing capsule: No / Yes  Growth ≥50%/6mo: No / Yes / Unknown
  LI-RADS: 1 / 2 / 3 / 4 / 5 / M / TIV
Lesion 2: Segment ___, ___ mm  LI-RADS: ___
Total: Solitary / 2-3 / >3 lesions  Max: ___ mm

HEPATIC VEINS
Proximity to tumour: >10mm / 5-10mm / <5mm — vessel ___
MHV/LHV/RHV involvement: No / Yes — ___

BACKGROUND LIVER
Surface: Smooth / Nodular [cirrhosis]  Caudate hypertrophy: No / Yes
Splenomegaly: No / Yes — ___ cm  Varices: Absent / GEJ / Other ___
Ascites: No / Yes — volume ___  → Cirrhosis: No / Possible / Probable / Definite`,
          abdomen: `EXTRAHEPATIC
Portocaval: Normal / ___ mm  Coeliac/para-aortic: Normal / ___
Adrenal: Normal / ___  Peritoneum: Clear / Deposits ___

BCLC [Reig 2022 — correlate with PS and Child-Pugh]
0 (Very early): Single <2cm, PS 0, Child-A  A (Early): ≤3 lesions ≤3cm, Child-A/B
B (Intermediate): Multinodular, PS 0, Child-A/B  C (Advanced): PVTT or extrahepatic, PS 1-2
D (Terminal): PS 3-4, Child-C
→ CT-based BCLC: ___ [definitive requires PS + Child-Pugh]`,
          chest: `CHEST
Pulmonary mets: No / Yes ___  Pleural: No / Yes [hydrothorax vs metastatic]`,
          impression: `IMPRESSION — HCC STAGING
Tumour: ___ lesion(s), max ___ mm, LI-RADS ___
Portal vein: No PVTT / PVTT [bland / tumour thrombus]
Extrahepatic: Absent / Present — ___
Background liver: [cirrhosis severity]
→ CT-based BCLC: ___  [Definitive needs PS + Child-Pugh]
Note: [resection / TACE / systemic / transplant — correlate with liver function]`,
        },
      },
      response: {
        evidence: "mRECIST (Lencioni & Llovet 2010 — validated for HCC); NOT RECIST 1.1; LI-RADS Treatment Response v2018 (LR-TR)",
        criticalFindings: ["Viable tumour (APHE) in treated lesion", "New HCC lesions", "PVTT development", "Liver decompensation"],
        searchEvidence: "Lencioni 2010 mRECIST validation; LI-RADS TRA v2018; RECIST 1.1 overestimates failure by measuring necrotic tissue",
        searchMismatch: "RECIST 1.1 NOT appropriate for HCC. mRECIST measures only VIABLE (enhancing) portion on arterial phase. Post-TACE necrosis = treatment success. Using RECIST calls treated necrosis 'stable disease' instead of 'complete response'.",
        criteria: "mRECIST (Lencioni & Llovet 2010); LI-RADS Treatment Response v2018",
        searchPattern: [
          { step: 1, priority: "critical", title: "Viable Tumour — APHE Only", detail: "For each treated lesion: residual APHE? Only enhancing viable component is the mRECIST target. Non-enhancing = necrosis = response.", time: "45s" },
          { step: 2, priority: "critical", title: "New HCC Lesions", detail: "New APHE + washout = new HCC = PD. Check ALL segments.", time: "30s" },
          { step: 3, priority: "critical", title: "PVTT Status", detail: "New or extension = major progression.", time: "15s" },
          { step: 4, priority: "high", title: "LR-TR Classification", detail: "LR-TR Nonviable: no APHE. LR-TR Equivocal: intermediate. LR-TR Viable: definite APHE in treated zone.", time: "30s" },
          { step: 5, priority: "high", title: "Liver Decompensation", detail: "Ascites change. Splenomegaly. New varices.", time: "20s" },
          { step: 6, priority: "normal", title: "Chest", detail: "Pulmonary mets. New pleural effusion.", time: "15s" },
        ],
        template: {
          tumorSpecific: `mRECIST [Lencioni & Llovet 2010 — viable tumour only]
Lesion 1: Segment ___, treatment: [TACE/ablation/SBRT/systemic]
  APHE: Absent [necrosis/response] / Present — ___ mm
  LR-TR: Nonviable / Equivocal / Viable
  Total: ___ mm  Viable: ___ mm
Lesion 2: ___  LR-TR: ___  Viable: ___ mm

mRECIST viable sum: ___ mm (prior ___) Change: ___ %

NEW HCC [APHE + washout = new HCC = PD]
None / Yes — LI-RADS ___, segment ___, ___ mm

PVTT: Prior ___ → Current: Unchanged / New / Extended / Resolved

mRECIST CATEGORIES
CR: No viable tumour (no APHE all lesions)  PR: ≥30% decrease viable sum
SD: Neither  PD: ≥20% increase OR new HCC OR PVTT
→ mRECIST: ___`,
          abdomen: `LIVER DISEASE
Ascites: Prior ___ → Current ___ [increase = decompensation]
Spleen: Prior ___ cm → Current ___  Varices: Unchanged / New ___
Extrahepatic: Nodes: Stable / New ___  Peritoneum: Clear / Deposits ___`,
          chest: `CHEST [C+A+P]
Pulmonary mets: No new / New ___  Pleural: Unchanged / New ___`,
          impression: `IMPRESSION — HCC RESPONSE
Treatment: [TACE/ablation/sorafenib/immunotherapy]
mRECIST: [CR/PR/SD/PD]  Viable sum: ___ mm (prior ___; ___ %)
LR-TR: Lesion 1: [Nonviable/Equivocal/Viable]
New HCC: None / Yes [PD]  PVTT: Absent / Present [new/unchanged/resolved]
Liver decompensation: No / Signs — ___`,
        },
      },
    },
    cs: {
      label: "Hepatocelulární karcinom (HCC)",
      staging: {
        evidence: "LI-RADS v2018 (ACR); BCLC 2022 (Reig et al. J Hepatol 2022); TNM 8. vydání; guidelines EASL 2022",
        criticalFindings: ["PVTT", "Znaky LI-RADS 5", "Extrahepatální šíření", "Závažnost základního jaterního onemocnění"],
        searchEvidence: "LI-RADS v2018; aktualizace BCLC Reig 2022; EASL 2022; Forner 2010 diagnostická kritéria bez biopsie",
        searchMismatch: "Časté: aplikace standardního stagingového přístupu. Staging HCC je neoddělitelný od jaterního onemocnění. CT musí hlásit: LI-RADS, vrátnicová žíla, extrahepatální, základní jaterní — všechny čtyři.",
        classification: "LI-RADS v2018; BCLC 2022; TNM 8. vydání",
        searchPattern: [
          { step: 1, priority: "critical", title: "Vrátnicová žíla — PVTT okamžitě mění BCLC", detail: "Kmen, pravá/levá větev. Blandní (bez sycení) vs. nádorový trombus (sycení, rozšíření). PVTT = minimálně BCLC C.", time: "20s" },
          { step: 2, priority: "critical", title: "LI-RADS pro každou lézi ≥10 mm", detail: "Hlavní znaky: APHE, washout, sycené pouzdro, růst ≥50 %/6 měs. LI-RADS 5 = HCC u cirhózy/HBV. LI-RADS M = malignita, nejasný typ.", time: "60s" },
          { step: 3, priority: "critical", title: "Extrahepatální postižení", detail: "Portokavální, celiakální, paraaortální uzliny. Plíce. Kosti. Nadledviny.", time: "20s" },
          { step: 4, priority: "high", title: "Základní jaterní onemocnění — kontext operability", detail: "Morfologie cirhózy (nodulární povrch, hypertrofie kaudátu). Portální hypertenze. Stejný tumor u Child-A vs. C = zcela jiný management.", time: "20s" },
          { step: 5, priority: "high", title: "Jaterní žíly + FLR", detail: "Vztah jaterních žil k tumoru. Budoucí jaterní zbytek. Variantní cévní anatomie pro TACE.", time: "20s" },
          { step: 6, priority: "normal", title: "Hrudník (H+B+P)", detail: "Plicní metastázy. Pleurální výpotek (hepatální hydrotorax vs. metastatický).", time: "15s" },
        ],
        template: {
          tumorSpecific: `VRÁTNICOVÁ ŽÍLA [hodnotit jako první — PVTT okamžitě mění BCLC]
Kmen VP: Průchodný / Trombus — blandní / Nádorový (sycení, rozšíření)
Pravá VP: Průchodná / Trombus ___  Levá VP: Průchodná / Trombus ___
→ PVTT: Nepřítomen / Přítomen [minimálně BCLC C]

LÉZE — LI-RADS v2018
Léze 1: Segment ___, ___ mm
  APHE: Ne / Ano  Washout: Ne / Ano  Sycené pouzdro: Ne / Ano  Růst ≥50 %: Ne/Ano/Neznámo
  LI-RADS: 1 / 2 / 3 / 4 / 5 / M / TIV
Léze 2: Segment ___, ___ mm  LI-RADS: ___
Celkem: Solitární / 2–3 / >3 lézí  Maximum: ___ mm

JATERNÍ ŽÍLY
Vzdálenost od tumoru: >10 mm / 5–10 mm / <5 mm — žíla ___
Postižení SJŽ/LJŽ/PJŽ: Ne / Ano — ___

ZÁKLADNÍ JATERNÍ ONEMOCNĚNÍ
Povrch: Hladký / Nodulární [cirhóza]  Hypertrofie kaudátu: Ne / Ano
Splenomegalie: Ne / Ano — ___ cm  Varixy: Nepřítomny / GEJ / Jiné ___
Ascites: Ne / Ano  → Cirhóza: Ne / Možná / Pravděpodobná / Jednoznačná`,
          abdomen: `EXTRAHEPATÁLNÍ
Portokavální: Norm. / ___ mm  Celiakální/paraaortální: Norm. / ___
Nadledviny: Norm. / ___  Peritoneum: Volné / Depozita ___

BCLC [Reig 2022 — korelovat s PS a Child-Pughem]
0: Solitární <2 cm, PS 0, Child-A  A: ≤3 léze ≤3 cm, Child-A/B
B: Multinodulární, PS 0  C: PVTT nebo extrahepatální, PS 1–2  D: PS 3–4, Child-C
→ CT-based BCLC: ___ [definitivní vyžaduje PS + Child-Pugh]`,
          chest: `HRUDNÍK
Plicní mets: Ne / Ano ___  Pleura: Ne / Ano [hepatální hydrotorax vs. metastatický]`,
          impression: `ZÁVĚR — STAGING HCC
Tumor: ___ léze/í, max. ___ mm, LI-RADS ___
Vrátnicová žíla: Bez PVTT / PVTT [blandní / nádorový trombus]
Extrahepatální: Nepřítomno / Přítomno — ___
Základní jaterní: [závažnost cirhózy]
→ CT-based BCLC: ___  [Definitivní vyžaduje PS + Child-Pugh]
Poznámka: [resekce / TACE / systémová / transplantace — korelovat s funkcí jater]`,
        },
      },
      response: {
        evidence: "mRECIST (Lencioni & Llovet 2010); NE RECIST 1.1; LI-RADS Léčebná odpověď v2018 (LR-TR)",
        criticalFindings: ["Viabilní tumor (APHE) v léčené lézi", "Nové léze HCC", "Vznik PVTT", "Dekompenzace jater"],
        searchEvidence: "Validace mRECIST Lencioni 2010; LI-RADS TRA v2018; RECIST 1.1 nadhodnocuje selhání měřením nekrotické tkáně",
        searchMismatch: "RECIST 1.1 NENÍ vhodný pro HCC. mRECIST měří pouze VIABILNÍ (enhancující) část v arteriální fázi. Nekróza po TACE = léčebná odpověď. RECIST by označil nekrózu za 'stabilní onemocnění'.",
        criteria: "mRECIST (Lencioni & Llovet 2010); LI-RADS Léčebná odpověď v2018",
        searchPattern: [
          { step: 1, priority: "critical", title: "Viabilní tumor — pouze APHE", detail: "Pro každou léčenou lézi: reziduální APHE? Pouze enhancující viabilní komponenta = cíl mRECIST. Bez sycení = nekróza = odpověď.", time: "45s" },
          { step: 2, priority: "critical", title: "Nové léze HCC", detail: "Nové APHE + washout = nové HCC = PD. Zkontrolujte VŠECHNY segmenty.", time: "30s" },
          { step: 3, priority: "critical", title: "Stav vrátnicové žíly", detail: "Nový nebo rozšiřující se = zásadní progrese.", time: "15s" },
          { step: 4, priority: "high", title: "LR-TR klasifikace", detail: "LR-TR Nonviable: bez APHE. LR-TR Equivocal: přechodné. LR-TR Viable: jednoznačný APHE.", time: "30s" },
          { step: 5, priority: "high", title: "Dekompenzace jater", detail: "Změna ascitu. Splenomegalie. Nové varixy.", time: "20s" },
          { step: 6, priority: "normal", title: "Hrudník", detail: "Plicní mets. Nový pleurální výpotek.", time: "15s" },
        ],
        template: {
          tumorSpecific: `mRECIST [Lencioni & Llovet 2010 — pouze viabilní tumor]
Léze 1: Segment ___, léčba: [TACE/ablace/SBRT/systémová]
  APHE: Nepřítomen [nekróza/odpověď] / Přítomen — ___ mm
  LR-TR: Nonviable / Equivocal / Viable
  Celkem: ___ mm  Viabilní: ___ mm
Léze 2: ___  LR-TR: ___  Viabilní: ___ mm

Součet viabilní (mRECIST): ___ mm (dříve ___) Změna: ___ %

NOVÉ LÉZE HCC [APHE + washout = nové HCC = PD]
Žádné / Ano — LI-RADS ___, segment ___, ___ mm

VP: Dříve ___ → Aktuálně: Nezměněno / Nový / Rozšíření / Ustoupil

KATEGORIE mRECIST
CR: Bez viabilního tumoru  PR: ≥30 % pokles viabilního součtu
SD: Ani jedno  PD: ≥20 % nárůst NEBO nové HCC NEBO PVTT
→ mRECIST: ___`,
          abdomen: `JATERNÍ ONEMOCNĚNÍ
Ascites: Dříve ___ → Aktuálně ___ [nárůst = dekompenzace]
Slezina: Dříve ___ cm → Aktuálně ___  Varixy: Nezměněno / Nové ___
Extrahepatální: Uzliny: Stabilní / Nové ___  Peritoneum: Volné / Depozita ___`,
          chest: `HRUDNÍK [H+B+P]
Plicní mets: Žádné nové / Nové ___  Pleura: Nezměněno / Nový výpotek ___`,
          impression: `ZÁVĚR — ODPOVĚĎ HCC
Léčba: [TACE/ablace/sorafenib/imunoterapie]
mRECIST: [CR/PR/SD/PD]  Viabilní součet: ___ mm (dříve ___; ___ %)
LR-TR: Léze 1: [Nonviable/Equivocal/Viable]
Nové HCC: Žádné / Ano [PD]  PVTT: Nepřítomen / Přítomen [nový/nezměněný/ustoupil]
Dekompenzace: Ne / Příznaky — ___`,
        },
      },
    },
  },

  {
    id: "melanoma",
    validExtents: ["ap", "cap", "ncap"],
    en: {
      label: "Melanoma",
      staging: {
        evidence: "TNM 8th AJCC Melanoma (Gershenwald 2017); ESMO melanoma guidelines 2023",
        criticalFindings: ["Brain mets (CT insensitive — MRI required)", "In-transit metastases", "Cardiac involvement", "Bilateral adrenal"],
        searchEvidence: "Gershenwald 2017 AJCC 8th; ESMO 2023; melanoma metastasises to any organ including unusual sites",
        searchMismatch: "Standard templates miss: (1) in-transit metastases (subcutaneous between primary and nodes), (2) unusual sites (heart, bowel wall, spleen), (3) brain — CT cannot exclude brain mets. Must search every tissue compartment.",
        classification: "TNM 8th AJCC Melanoma (Gershenwald 2017)",
        searchPattern: [
          { step: 1, priority: "critical", title: "Brain — Flag CT Limitation", detail: "CT insensitive for small melanoma brain mets. Always flag in impression that MRI brain is recommended.", time: "10s" },
          { step: 2, priority: "critical", title: "Wide Field — Every Compartment", detail: "Subcutaneous (in-transit/satellite), ALL nodal territories, solid organs (liver, spleen, adrenal, kidney), bowel wall, cardiac, lung, bone.", time: "90s" },
          { step: 3, priority: "critical", title: "In-Transit + Satellite Lesions", detail: "Subcutaneous nodules ≥3mm between primary and first nodal basin = Stage III. Review skin/subcut layer on bone windows.", time: "30s" },
          { step: 4, priority: "high", title: "All Nodal Territories", detail: "Regional (depends on primary). Non-regional = M1a. Pay attention to unusual: mesenteric, retrocrural, diaphragmatic.", time: "20s" },
          { step: 5, priority: "high", title: "Visceral Metastases", detail: "Liver, lung, adrenal (very common in melanoma), spleen (common — unusual in other tumours), bowel wall, cardiac, renal.", time: "30s" },
          { step: 6, priority: "normal", title: "Neck (N+C+A+P)", detail: "Cervical levels. Parotid. Soft tissue.", time: "20s" },
        ],
        template: {
          tumorSpecific: `BRAIN
CT brain: Not performed / Performed — No mets / Suspicious ___
→ MRI brain: Recommended [CT insensitive for melanoma brain mets]

IN-TRANSIT / SATELLITE [Stage III if present]
Subcutaneous nodules between primary and nodal basin: No / Yes — ___, ___
→ In-transit: Absent / Present [Stage III]

UNUSUAL SITES [actively check in melanoma]
Cardiac: Normal / Pericardial effusion / Intracardiac mass ___
Bowel wall: Normal / Nodular thickening ___ [bleed risk]
Spleen: Normal / Hypodense nodules ___
Adrenal R/L: Normal / Nodule ___ mm [very common]
Renal: Normal / Lesion ___`,
          abdomen: `ABDOMINAL NODES [all territories]
Retroperitoneal: No / Yes — ___ mm  Mesenteric: No / Yes — ___ mm
Para-aortic/iliac: No / Yes ___  Inguinal: No / Yes — R ___ / L ___ mm

SOLID ORGANS
Liver: No / Yes — ___  Spleen: Normal / Nodules ___
Peritoneal: No / Yes  Ascites: No / Yes  Bone (lytic): No / Yes — ___`,
          chest: `CHEST NODES
Mediastinal: No / Yes — ___, ___  Hilar: No / Yes  Axillary: No / Yes — R ___ / L ___ mm

LUNG: Nodules: No / Yes — ___, distribution ___  Pleural: No / Yes

CARDIAC
Pericardial effusion: No / Yes  Cardiac mass: No / Yes — ___`,
          neck: `NECK [N+C+A+P]
Levels I-VI: No / Yes — level ___, ___ mm  Parotid: Normal / Nodule ___
Posterior triangle: No / Yes  Soft tissue: Normal / Nodule ___`,
          impression: `IMPRESSION — MELANOMA STAGING
In-transit/satellite: Absent / Present [Stage III]
Nodal: [regional = N; non-regional = M1a]
Visceral: M0/M1a(skin/SQ/distant nodes)/M1b(lung only)/M1c(non-CNS visceral)/M1d(brain)
Adrenal: Normal / Involved [common site]
→ AJCC 8th Stage: ___
Note: MRI brain required for complete staging (CT insensitive)`,
        },
      },
      response: {
        evidence: "RECIST 1.1 (non-immunotherapy); iRECIST 2017 (immunotherapy); ESMO 2023; pseudo-progression ~10% with immunotherapy",
        criticalFindings: ["Pseudo-progression vs true progression", "New brain mets", "Bilateral adrenal insufficiency risk", "Immunotherapy complications"],
        searchEvidence: "Seymour 2017 iRECIST; Wolchok 2009 immune-related criteria; bilateral adrenal = insufficiency risk",
        searchMismatch: "Melanoma + immunotherapy = highest pseudo-progression rate. Enlargement in first 12 weeks may be pseudo-progression. Confirm at 4-week follow-up (iUPD). Bilateral adrenal enlargement = adrenal insufficiency — flag clinically.",
        criteria: "RECIST 1.1 (non-immuno); iRECIST 2017 (immunotherapy — confirm PD at 4 weeks)",
        searchPattern: [
          { step: 1, priority: "critical", title: "Immunotherapy? — Criteria Change", detail: "PD-1/CTLA-4: use iRECIST. Enlargement ≤12 weeks = possible pseudo-progression. New lesions ≠ automatic PD. Non-immuno: RECIST 1.1.", time: "10s" },
          { step: 2, priority: "critical", title: "New Brain Mets", detail: "Changes treatment significantly. CT inadequate — MRI brain if new symptoms or prior brain disease.", time: "10s" },
          { step: 3, priority: "critical", title: "Bilateral Adrenal — Insufficiency Risk", detail: "Both enlarging = adrenal function at risk. Flag in report.", time: "15s" },
          { step: 4, priority: "high", title: "Wide Field — Same Compartments", detail: "Subcutaneous, cardiac, bowel wall, spleen. Do not use abbreviated survey.", time: "60s" },
          { step: 5, priority: "high", title: "Immunotherapy Complications", detail: "Colitis (colon wall thickening, loss of haustra). Pneumonitis (GGO). Hepatitis (periportal oedema). Nephritis (bilateral cortical). Sarcoid reaction (mediastinal nodes).", time: "30s" },
          { step: 6, priority: "normal", title: "RECIST / iRECIST", detail: "Targets, sum, response. iRECIST: enlargement → iUPD, confirm at next scan.", time: "30s" },
        ],
        template: {
          tumorSpecific: `TREATMENT CONTEXT
Therapy: [Immunotherapy PD-1/CTLA-4 / BRAF+MEK / Other ___]
Criteria: RECIST 1.1 / iRECIST [immunotherapy]
Pseudo-progression consideration: No / Yes [new/enlarging ≤12 weeks on immunotherapy]

BRAIN: No new / Cannot exclude — MRI brain recommended
Bilateral adrenal: R ___ mm  L ___ mm  Both enlarged: No / Yes [adrenal insufficiency risk]

IN-TRANSIT / SOFT TISSUE RESPONSE
Prior deposits: ___  Current: Resolved / Decreased / Stable / Increased / New ___

CARDIAC / BOWEL
Pericardial: Unchanged / New effusion  Bowel wall: Normal / New thickening ___`,
          abdomen: `RECIST 1.1 / iRECIST
1. ___ current ___ mm (prior ___) Δ ___ %
2. ___ current ___ mm (prior ___) Δ ___ %
Sum: ___ mm (prior ___)  Change: ___ %  Response: CR/PR/SD/PD
[iRECIST: enlargement → iUPD — confirm at 4 weeks]

SOLID ORGANS
Liver: Stable/PR/PD ___  New: No/Yes ___  Spleen nodules: Stable/New ___

IMMUNOTHERAPY COMPLICATIONS
Colitis: No / Yes — ___, wall ___, haustra loss: No/Yes
Hepatitis: No / Yes — periportal oedema ___  Nephritis: No / Yes — bilateral cortical ___
Sarcoid reaction: No / Yes — mediastinal/hilar LAP ___`,
          chest: `CHEST
Pulmonary: Stable/PR/PD  New: No/Yes ___
Pneumonitis: No / Yes — GGO/consolidation, distribution ___
Axillary/mediastinal: Stable / New [may be sarcoid reaction] ___`,
          neck: `NECK [N+C+A+P]
Cervical: Stable/PR/PD — ___  New: No/Yes ___`,
          impression: `IMPRESSION — MELANOMA RESPONSE
Therapy: [immunotherapy/targeted]  Criteria: [RECIST 1.1 / iRECIST]
RECIST: [CR/PR/SD/PD/iUPD]  Sum: ___ mm (prior ___; ___ %)
New sites: None / [specify — brain: CT inadequate, MRI recommended]
Bilateral adrenal: No / Yes — adrenal function check warranted
Immunotherapy complications: None / [colitis/pneumonitis/hepatitis/nephritis/sarcoid]
[iRECIST: if iUPD — confirm at 4-week follow-up]`,
        },
      },
    },
    cs: {
      label: "Melanom",
      staging: {
        evidence: "TNM 8. vydání AJCC Melanom (Gershenwald 2017); guidelines ESMO 2023",
        criticalFindings: ["Mozkové mets (CT necitlivé — nutné MRI)", "In-transit metastázy", "Postižení srdce", "Bilaterální nadledviny"],
        searchEvidence: "Gershenwald 2017 AJCC 8.; ESMO 2023; melanom metastazuje do jakéhokoli orgánu",
        searchMismatch: "Standardní šablony přehlíží: (1) in-transit metastázy, (2) neobvyklá místa (srdce, stěna střeva, slezina), (3) mozek — CT nevylučuje mozkové mets. Nutno prohledat každý tkáňový kompartment.",
        classification: "TNM 8. vydání AJCC Melanom (Gershenwald 2017)",
        searchPattern: [
          { step: 1, priority: "critical", title: "Mozek — upozornit na omezení CT", detail: "CT je málo citlivé pro mozkové mets melanomu. Vždy doporučte MRI mozku v závěru.", time: "10s" },
          { step: 2, priority: "critical", title: "Přehled širokého pole — každý kompartment", detail: "Subkutánně (in-transit/satelitní), VŠECHNA uzlinová teritoria, parenchymatózní orgány (játra, slezina, nadledviny, ledviny), stěna střeva, srdce, plíce, kosti.", time: "90s" },
          { step: 3, priority: "critical", title: "In-transit + satelitní léze", detail: "Subkutánní uzlíky ≥3 mm mezi primárním nádorem a uzlinovým bazénem = stadium III. Revizia kůže/subkutánní vrstvy v kostním okně.", time: "30s" },
          { step: 4, priority: "high", title: "Všechna uzlinová teritoria", detail: "Regionální (závisí na lokalizaci primáru). Neregionální = M1a. Pozor na neobvyklé: mezenteriální, retrocrurální, diafragmatické.", time: "20s" },
          { step: 5, priority: "high", title: "Viscerální metastázy", detail: "Játra, plíce, nadledviny (velmi časté), slezina (časté), stěna střeva, srdce, ledviny.", time: "30s" },
          { step: 6, priority: "normal", title: "Krk (K+H+B+P)", detail: "Cervikální úrovně. Příušnice. Měkké tkáně.", time: "20s" },
        ],
        template: {
          tumorSpecific: `MOZEK
CT mozku: Neprovedeno / Provedeno — Bez mets / Suspektní ___
→ MRI mozku: Doporučeno [CT necitlivé pro mozkové mets melanomu]

IN-TRANSIT / SATELITNÍ [stadium III při přítomnosti]
Subkutánní uzlíky mezi primárním a uzlinovým bazénem: Ne / Ano — ___, ___
→ In-transit: Nepřítomny / Přítomny [stadium III]

NEOBVYKLÁ MÍSTA [u melanomu aktivně hledat]
Srdce: Normální / Perikardiální výpotek / Intrakardiální masa ___
Stěna střeva: Normální / Nodulární ztluštění ___ [riziko krvácení]
Slezina: Normální / Hypodenzní uzlíky ___
Nadledviny P/L: Normální / Uzel ___ mm [velmi časté]
Ledviny: Normální / Léze ___`,
          abdomen: `BŘIŠNÍ UZLINY [všechna teritoria]
Retroperitoneální: Ne / Ano — ___ mm  Mezenteriální: Ne / Ano — ___ mm
Paraaortální/ilické: Ne / Ano ___  Inguinální: Ne / Ano — P ___ / L ___ mm

PARENCHYMATÓZNÍ ORGÁNY
Játra: Ne / Ano — ___  Slezina: Normální / Uzlíky ___
Peritoneum: Ne / Ano  Ascites: Ne / Ano  Kosti (lytické): Ne / Ano — ___`,
          chest: `HRUDNÍ UZLINY
Mediastinální: Ne / Ano — ___, ___  Hilové: Ne / Ano  Axilární: Ne / Ano — P ___ / L ___ mm

PLÍCE: Uzlíky: Ne / Ano — ___, distribuce ___  Pleura: Ne / Ano

SRDCE
Perikardiální výpotek: Ne / Ano  Intrakardiální masa: Ne / Ano — ___`,
          neck: `KRK [K+H+B+P]
Úrovně I–VI: Ne / Ano — úroveň ___, ___ mm  Příušnice: Normální / Uzel ___
Zadní trojúhelník: Ne / Ano  Měkké tkáně: Normální / Uzel ___`,
          impression: `ZÁVĚR — STAGING MELANOMU
In-transit/satelitní: Nepřítomny / Přítomny [stadium III]
Uzliny: [regionální = N; neregionální = M1a]
Viscerální: M0/M1a/M1b(pouze plíce)/M1c(viscerální bez CNS)/M1d(mozek)
Nadledviny: Normální / Postiženy [časté místo]
→ Stadium AJCC 8.: ___
Poznámka: MRI mozku nutné pro kompletní staging (CT necitlivé)`,
        },
      },
      response: {
        evidence: "RECIST 1.1 (non-imunoterapie); iRECIST 2017 (imunoterapie); ESMO 2023; pseudoprogrese ~10 % při imunoterapii",
        criticalFindings: ["Pseudoprogrese vs. skutečná progrese", "Nové mozkové mets", "Riziko adrenální insuficience", "Komplikace imunoterapie"],
        searchEvidence: "Seymour 2017 iRECIST; bilaterální nadledviny = riziko insuficience",
        searchMismatch: "Melanom + imunoterapie = nejvyšší míra pseudoprogrese. Zvětšení v prvních 12 týdnech = možná pseudoprogrese. Potvrdit za 4 týdny (iUPD). Bilaterální nadledvinné postižení = upozornit klinicky.",
        criteria: "RECIST 1.1 (non-imunoterapie); iRECIST 2017 (potvrdit PD za 4 týdny)",
        searchPattern: [
          { step: 1, priority: "critical", title: "Imunoterapie? — mění kritéria", detail: "PD-1/CTLA-4: použijte iRECIST. Zvětšení ≤12 týdnů = možná pseudoprogrese. Nové léze ≠ automatická PD. Non-imunoterapie: RECIST 1.1.", time: "10s" },
          { step: 2, priority: "critical", title: "Nové mozkové mets", detail: "Výrazně mění léčbu. CT nedostatečné — MRI při nových příznacích nebo předchozím postižením mozku.", time: "10s" },
          { step: 3, priority: "critical", title: "Bilaterální nadledviny — riziko insuficience", detail: "Obě zvětšující se = riziko funkce nadledvin. Upozornit v protokolu.", time: "15s" },
          { step: 4, priority: "high", title: "Přehled širokého pole — stejné kompartmenty", detail: "Subkutánně, srdce, stěna střeva, slezina. Nezkracujte přehled.", time: "60s" },
          { step: 5, priority: "high", title: "Komplikace imunoterapie", detail: "Kolitida (ztluštění stěny tlustého střeva, ztráta haustr). Pneumonitida (GGO). Hepatitida (periportální edém). Nefritida (oboustranně kortikálně). Sarkoidní reakce (mediastinální uzliny).", time: "30s" },
          { step: 6, priority: "normal", title: "RECIST / iRECIST", detail: "Cíle, součet, odpověď. iRECIST: zvětšení → iUPD, potvrdit na dalším snímku.", time: "30s" },
        ],
        template: {
          tumorSpecific: `KONTEXT LÉČBY
Léčba: [Imunoterapie PD-1/CTLA-4 / BRAF+MEK / Jiná ___]
Kritéria: RECIST 1.1 / iRECIST [imunoterapie]
Pseudoprogrese: Ne / Ano [nová/zvětšující ≤12 týdnů na imunoterapii]

MOZEK: Žádné nové / Na CT nelze vyloučit — doporučujeme MRI mozku
Bilaterální nadledviny: P ___ mm  L ___ mm  Obě zvětšeny: Ne / Ano [riziko insuficience]

IN-TRANSIT / MĚKKÉ TKÁNĚ
Dříve: ___  Aktuálně: Ustoupily / Zmenšily / Stabilní / Zvětšily / Nové ___

SRDCE / STŘEVO
Perikard: Nezměněno / Nový výpotek  Stěna střeva: Normální / Nové ztluštění ___`,
          abdomen: `RECIST 1.1 / iRECIST
1. ___ aktuálně ___ mm (dříve ___) Δ ___ %
2. ___ aktuálně ___ mm (dříve ___) Δ ___ %
Součet: ___ mm (dříve ___)  Změna: ___ %  Odpověď: CR/PR/SD/PD
[iRECIST: zvětšení → iUPD — potvrdit za 4 týdny]

PARENCHYMATÓZNÍ ORGÁNY
Játra: Stabilní/PR/PD ___  Nové: Ne/Ano ___  Slezina: Stabilní/Nové uzlíky ___

KOMPLIKACE IMUNOTERAPIE
Kolitida: Ne / Ano — ___, stěna ___, haustra: Ne/Ano
Hepatitida: Ne / Ano — periportální edém ___  Nefritida: Ne / Ano — obostr. kortikálně ___
Sarkoidní reakce: Ne / Ano — mediastinální/hilová LAP ___`,
          chest: `HRUDNÍK
Plicní: Stabilní/PR/PD  Nové: Ne/Ano ___
Pneumonitida: Ne / Ano — GGO/konsolidace, distribuce ___
Axilární/mediastinální: Stabilní / Nové [může být sarkoidní reakce] ___`,
          neck: `KRK [K+H+B+P]
Cervikální: Stabilní/PR/PD — ___  Nové: Ne/Ano ___`,
          impression: `ZÁVĚR — ODPOVĚĎ MELANOMU
Léčba: [imunoterapie/cílená]  Kritéria: [RECIST 1.1 / iRECIST]
RECIST: [CR/PR/SD/PD/iUPD]  Součet: ___ mm (dříve ___; ___ %)
Nová místa: Žádná / [specifikovat — mozek: CT nedostatečné, doporučit MRI]
Bilaterální nadledviny: Ne / Ano — indikováno vyšetření funkce
Komplikace imunoterapie: Žádné / [kolitida/pneumonitida/hepatitida/nefritida/sarkoidní]
[iRECIST: při iUPD — potvrdit za 4 týdny]`,
        },
      },
    },
  },

  {
    id: "gastric",
    validExtents: ["ap", "cap"],
    en: {
      label: "Gastric",
      staging: {
        evidence: "TNM 8th (AJCC/UICC 2017); ESMO gastric guidelines 2022; Borrmann classification",
        criticalFindings: ["Peritoneal metastases (CT sensitivity 30-50%)", "Pancreatic invasion T4b", "Coeliac nodes", "Liver metastases"],
        searchEvidence: "ESMO 2022 CT staging gastric; Borrmann CT correlation; Sano 2017 peritoneal staging",
        searchMismatch: "Peritoneal disease is the most important finding and most commonly missed. Omentum, mesentery, pelvic peritoneum must be reviewed before nodal assessment. T stage on CT unreliable without EUS — always note this.",
        classification: "TNM 8th (AJCC/UICC 2017); Borrmann classification",
        searchPattern: [
          { step: 1, priority: "critical", title: "Peritoneal Disease — Most Important, Most Missed", detail: "Omentum, mesentery, Douglas pouch, right subphrenic, pelvic peritoneum. CT sensitivity only 30-50% — flag. Ascites without obvious cause = peritoneal until proven otherwise.", time: "30s" },
          { step: 2, priority: "critical", title: "Primary — T Stage Limitation", detail: "T4b signs: loss of fat plane with pancreas, colon, liver. Borrmann type. EUS more accurate for T1-T3.", time: "30s" },
          { step: 3, priority: "critical", title: "Liver Metastases", detail: "Hypovascular on PVP. Bilobar.", time: "15s" },
          { step: 4, priority: "high", title: "Lymph Node Stations", detail: "Perigastric N1, coeliac/hepatoduodenal N2, para-aortic M1.", time: "20s" },
          { step: 5, priority: "high", title: "T4b Adjacent Organs", detail: "Pancreas (posterior), colon, spleen hilum, liver left lobe. Each = T4b.", time: "20s" },
          { step: 6, priority: "normal", title: "Chest (C+A+P)", detail: "Pulmonary mets. Lower mediastinal nodes.", time: "15s" },
        ],
        template: {
          tumorSpecific: `PRIMARY TUMOUR
Location: Cardia (GEJ) / Fundus / Body / Antrum / Pylorus / Whole stomach
Borrmann: I (polypoid) / II (fungating) / III (ulcerated infiltrating) / IV (linitis plastica)
Wall thickening: ___ mm  Length: ___ cm  Lumen: Normal / Partial / Severe compromise

T STAGE ON CT [EUS superior for T1-T3]
T3: Through serosa into pericolonic fat — stranding: No / Yes
T4a: Visceral peritoneum: No / Yes
T4b: Pancreas fat plane: Preserved / Lost [T4b]  Colon: Preserved / Lost [T4b]
      Spleen hilum: No / Yes [T4b]  Liver LLoL: No / Yes [T4b]
→ CT T: ___ (EUS more accurate for T1-T3)

PERITONEAL [most critical — CT sensitivity 30-50%]
Omental: No / Yes ___  Mesenteric nodules: No / Yes ___
Douglas pouch: No / Yes  Pelvic: Clear / Deposits ___  Ascites: No / Yes ___
→ CT peritoneal: Absent / Suspected / Present
Note: Staging laparoscopy recommended if peritoneal suspected`,
          abdomen: `LYMPH NODES
Perigastric N1: No / Yes — ___ mm  Coeliac/hepatoduodenal N2: No / Yes — ___ mm
Para-aortic [M1]: No / Yes — ___ mm  Portocaval: No / Yes ___

LIVER: No mets / Mets — ___, ___ mm, bilobar: No/Yes  Enhancement: Hypovascular

STAGE: CT T: ___  CT N: N0/N1/N2/N3  CT M: M0/M1
Note: CT understages 30-50% — particularly peritoneal and early nodal`,
          chest: `CHEST
Pulmonary: No / Yes ___  Lower mediastinal: Normal / Enlarged ___`,
          impression: `IMPRESSION — GASTRIC STAGING
Primary: [location], Borrmann [type], T4b: No / Yes [organ]
Peritoneum: Absent on CT / Suspected / Present [CT sensitivity 30-50%]
Liver: No / Mets ___  Nodes: N___ [coeliac/para-aortic]
→ T___ N___ M___  [Resectable / Borderline / Unresectable]
Recommendation: [resection / neoadjuvant / staging laparoscopy / palliative]`,
        },
      },
      response: {
        evidence: "RECIST 1.1; ESMO 2022; peritoneal response not reliably assessable on CT",
        criticalFindings: ["New peritoneal deposits", "Liver progression", "Obstruction", "Treatment complications"],
        searchEvidence: "ESMO 2022; CT limitation for peritoneal response",
        searchMismatch: "Peritoneal response essentially unassessable on CT. Most important response indicators: measurable liver mets and nodes. Primary tumour wall reduction is a surrogate, not a RECIST target.",
        criteria: "RECIST 1.1; note peritoneal limitation",
        searchPattern: [
          { step: 1, priority: "critical", title: "New Peritoneal Disease", detail: "New deposits or ascites increase = progression.", time: "20s" },
          { step: 2, priority: "critical", title: "Prior Report + Targets", detail: "Primarily liver mets and nodes as RECIST targets.", time: "60s" },
          { step: 3, priority: "high", title: "Liver + Nodal Response", detail: "RECIST measurement.", time: "45s" },
          { step: 4, priority: "high", title: "Primary Response", detail: "Wall thickening reduction. Obstruction.", time: "20s" },
          { step: 5, priority: "high", title: "Treatment Complications", detail: "Immunotherapy colitis/hepatitis. Surgical complications.", time: "20s" },
          { step: 6, priority: "normal", title: "Chest", detail: "Pulmonary response.", time: "10s" },
        ],
        template: {
          tumorSpecific: `PERITONEAL [critical — ascites increase = possible progression]
Omentum: Clear / Stable / New ___  Ascites: Prior ___ → Current ___
Pelvic: Clear / Stable / New ___
Note: CT cannot reliably assess peritoneal response

PRIMARY RESPONSE
Wall: Prior ___ mm → Current ___ mm  Lumen: Improved / Unchanged / Obstructed`,
          abdomen: `RECIST 1.1
1. ___ current ___ mm (prior ___) Δ ___ %
2. ___ current ___ mm (prior ___) Δ ___ %
Sum: ___ mm (prior ___)  Response: CR/PR/SD/PD

NODES: Coeliac/perigastric: Stable/Decreased/Increased/New ___
LIVER: Stable/PR/PD ___  New: No/Yes ___

COMPLICATIONS
Immunotherapy: Colitis/Hepatitis ___  Surgical: Normal / Collection / Anastomosis ___`,
          chest: `CHEST
Pulmonary: Stable / New ___  Mediastinal: Stable / New ___`,
          impression: `IMPRESSION — GASTRIC RESPONSE
RECIST 1.1: [CR/PR/SD/PD]  Sum: ___ mm ([±]___ %)
Peritoneal: Unchanged / Progressed [new deposits / ascites increase]
Note: Peritoneal response not assessable on CT
Complications: None / [specify]`,
        },
      },
    },
    cs: {
      label: "Karcinom žaludku",
      staging: {
        evidence: "TNM 8. vydání; guidelines ESMO 2022; Borrmannova klasifikace",
        criticalFindings: ["Peritoneální mets (citlivost CT 30–50 %)", "Invaze do pankreatu T4b", "Celiakální uzliny", "Jaterní mets"],
        searchEvidence: "ESMO 2022 CT staging žaludek; Borrmann CT korelace; Sano 2017 peritoneální staging",
        searchMismatch: "Peritoneální postižení = nejdůležitější a nejčastěji přehlídané. Omentum, mezenterium, pánevní peritoneum nutno hodnotit před uzlinami. T stadium na CT nespolehlivé bez EUS — vždy uvést.",
        classification: "TNM 8. vydání; Borrmannova klasifikace",
        searchPattern: [
          { step: 1, priority: "critical", title: "Peritoneální postižení — nejdůležitější, nejčastěji přehlídané", detail: "Omentum, mezenterium, Douglasův prostor, pravý subdiafragmatický prostor, pánevní peritoneum. Citlivost CT pouze 30–50 % — uvést. Ascites bez zjevné příčiny = peritoneální postižení.", time: "30s" },
          { step: 2, priority: "critical", title: "Primář — omezení T stadia", detail: "Příznaky T4b: ztráta tukové vrstvy s pankreatem, tračníkem, játry. Borrmannův typ. EUS přesnější pro T1–T3.", time: "30s" },
          { step: 3, priority: "critical", title: "Jaterní metastázy", detail: "Hypovaskulární v portální fázi. Bilaterální.", time: "15s" },
          { step: 4, priority: "high", title: "Uzlinové stanice", detail: "Perigastrické N1, celiakální/hepatoduodenální N2, paraaortální M1.", time: "20s" },
          { step: 5, priority: "high", title: "T4b sousední orgány", detail: "Pankreas (zadní), tračník, hilus sleziny, levý jaterní lalok. Každé = T4b.", time: "20s" },
          { step: 6, priority: "normal", title: "Hrudník (H+B+P)", detail: "Plicní mets. Dolní mediastinální uzliny.", time: "15s" },
        ],
        template: {
          tumorSpecific: `PRIMÁRNÍ TUMOR
Lokalizace: Kardie (GEJ) / Fundus / Tělo / Antrum / Pylorus / Celý žaludek
Borrmann: I (polypoidní) / II (fungující) / III (ulcerující infiltrativní) / IV (linitis plastica)
Ztluštění: ___ mm  Délka: ___ cm  Lumen: Normální / Parciálně / Závažně zúžen

T STADIUM NA CT [EUS superiornější pro T1–T3]
T3: Přes sérózu do tuku — infiltrace: Ne / Ano  T4a: Viscerální peritoneum: Ne / Ano
T4b: Pankreas: Zachovány / Ztraceny [T4b]  Tračník: Zachovány / Ztraceny [T4b]
      Hilus sleziny: Ne / Ano [T4b]  Levý jaterní lalok: Ne / Ano [T4b]
→ CT T: ___ (EUS přesnější pro T1–T3)

PERITONEUM [nejkritičtější — citlivost CT 30–50 %]
Omentum: Ne / Ano ___  Mezenteriální: Ne / Ano ___
Douglasův prostor: Ne / Ano  Pánevní: Volné / Depozita ___  Ascites: Ne / Ano ___
→ CT peritoneum: Nepřítomno / Suspektní / Přítomno
Poznámka: Doporučujeme stagingovou laparoskopii při podezření`,
          abdomen: `MÍZNÍ UZLINY
Perigastrické N1: Ne / Ano — ___ mm  Celiakální/hepatoduodenální N2: Ne / Ano — ___ mm
Paraaortální [M1]: Ne / Ano — ___ mm  Portokavální: Ne / Ano ___

JÁTRA: Bez mets / Mets — ___, ___ mm, bilat.: Ne/Ano  Sycení: Hypovaskulární

STADIUM: CT T: ___  CT N: N0/N1/N2/N3  CT M: M0/M1
Poznámka: CT podhodnocuje 30–50 % — zejm. peritoneální a časné uzlinové`,
          chest: `HRUDNÍK
Plicní: Ne / Ano ___  Dolní mediastinální: Normální / Zvětšené ___`,
          impression: `ZÁVĚR — STAGING KARCINOMU ŽALUDKU
Primář: [lokalizace], Borrmann [typ], T4b: Ne / Ano [orgán]
Peritoneum: Nepřítomno na CT / Suspektní / Přítomno [citlivost 30–50 %]
Játra: Ne / Mets ___  Uzliny: N___ [celiakální/paraaortální]
→ T___ N___ M___  [Resekabilní / Hraničně / Neresekabilní]
Doporučení: [resekce / neoadjuvantní / stagingová laparoskopie / paliativní]`,
        },
      },
      response: {
        evidence: "RECIST 1.1; ESMO 2022; peritoneální odpověď na CT nespolehlivě hodnotitelná",
        criticalFindings: ["Nová peritoneální depozita", "Progrese jater", "Obstrukce", "Komplikace léčby"],
        searchEvidence: "ESMO 2022; omezení CT pro peritoneální odpověď",
        searchMismatch: "Peritoneální odpověď na CT prakticky nehodnotitelná. Nejdůležitější ukazatele: měřitelné jaterní mets a uzliny. Primární tumor není cílem RECIST.",
        criteria: "RECIST 1.1; poznámka k peritoneálnímu omezení",
        searchPattern: [
          { step: 1, priority: "critical", title: "Nové peritoneální postižení", detail: "Nová depozita nebo nárůst ascitu = progrese.", time: "20s" },
          { step: 2, priority: "critical", title: "Starý protokol + cíle", detail: "Primárně jaterní mets a uzliny jako cíle RECIST.", time: "60s" },
          { step: 3, priority: "high", title: "Odpověď jater + uzlin", detail: "Měření RECIST.", time: "45s" },
          { step: 4, priority: "high", title: "Odpověď primárního tumoru", detail: "Ztluštění stěny. Obstrukce.", time: "20s" },
          { step: 5, priority: "high", title: "Komplikace léčby", detail: "Kolitida/hepatitida při imunoterapii. Chirurgické komplikace.", time: "20s" },
          { step: 6, priority: "normal", title: "Hrudník", detail: "Plicní odpověď.", time: "10s" },
        ],
        template: {
          tumorSpecific: `PERITONEUM [kritické — nárůst ascitu = možná progrese]
Omentum: Volné / Stabilní / Nové ___  Ascites: Dříve ___ → Aktuálně ___
Pánevní: Volné / Stabilní / Nové ___
Poznámka: CT nedokáže spolehlivě hodnotit peritoneální odpověď

ODPOVĚĎ PRIMÁRNÍHO TUMORU
Ztluštění: Dříve ___ mm → Aktuálně ___ mm  Lumen: Zlepšen / Nezměněn / Obturován`,
          abdomen: `RECIST 1.1
1. ___ aktuálně ___ mm (dříve ___) Δ ___ %
2. ___ aktuálně ___ mm (dříve ___) Δ ___ %
Součet: ___ mm (dříve ___)  Odpověď: CR/PR/SD/PD

UZLINY: Celiakální/perigastrické: Stabilní/Zmenšení/Nárůst/Nové ___
JÁTRA: Stabilní/PR/PD ___  Nové: Ne/Ano ___

KOMPLIKACE
Imunoterapie: Kolitida/Hepatitida ___  Chirurgické: Normální/Kolekce/Anastomóza ___`,
          chest: `HRUDNÍK
Plicní: Stabilní / Nové ___  Mediastinální: Stabilní / Nové ___`,
          impression: `ZÁVĚR — ODPOVĚĎ KARCINOMU ŽALUDKU
RECIST 1.1: [CR/PR/SD/PD]  Součet: ___ mm ([±]___ %)
Peritoneum: Nezměněno / Progredovalo [nová depozita / nárůst ascitu]
Poznámka: Peritoneální odpověď na CT nehodnotitelná
Komplikace: Žádné / [specifikovat]`,
        },
      },
    },
  },

  {
    id: "ovarian",
    validExtents: ["ap", "cap"],
    en: {
      label: "Ovarian",
      staging: {
        evidence: "FIGO 2014 (Prat 2015); ESGO/ESMO 2023; Chi peritoneal mapping; Bristow resectability criteria",
        criticalFindings: ["Diaphragm involvement >2cm", "Small bowel mesentery", "Porta hepatis deposits", "Spleen surface"],
        searchEvidence: "Prat 2015 FIGO 2014; ESGO/ESMO 2023; Bristow 2002 CT prediction optimal cytoreduction; Chi 2012 peritoneal mapping",
        searchMismatch: "Standard approach misses the key surgical question: CAN THIS PATIENT BE OPTIMALLY CYTOREDUCED? Depends on peritoneal distribution, not just presence. Diaphragm, spleen surface, small bowel mesentery root, porta hepatis predict surgical outcome.",
        classification: "FIGO 2014 staging; TNM 8th",
        searchPattern: [
          { step: 1, priority: "critical", title: "Diaphragm — Bilateral, Most Important Predictor", detail: "Right subphrenic: liver-diaphragm space. Left: spleen-diaphragm. Coronals. >2cm implants = high risk suboptimal cytoreduction.", time: "20s" },
          { step: 2, priority: "critical", title: "Spleen Surface + Hilum", detail: "Surface implants = FIGO IIIC. Hilar involvement requires splenectomy. Parenchymal = FIGO IV.", time: "15s" },
          { step: 3, priority: "critical", title: "Small Bowel Mesentery Root", detail: "Strongest predictor of suboptimal cytoreduction. Nodular thickening, retraction, spoked wheel. Multiple SB serosal implants.", time: "20s" },
          { step: 4, priority: "critical", title: "Porta Hepatis + Coeliac", detail: "Deposits >2cm = high cytoreduction risk. Gastrohepatic ligament.", time: "15s" },
          { step: 5, priority: "high", title: "Primary Tumour + Pelvis", detail: "Adnexal mass. Uterus/bladder/rectum. Pelvic side wall. Douglas pouch.", time: "20s" },
          { step: 6, priority: "high", title: "Omentum + Peritoneal Survey", detail: "Greater omentum caking. Paracolic gutters. Morrison's pouch. Parietal peritoneum.", time: "20s" },
        ],
        template: {
          tumorSpecific: `PRIMARY TUMOUR
R adnexa: Normal / Mass — ___ mm, solid/cystic/mixed
L adnexa: Normal / Mass — ___ mm, solid/cystic
Uterus: Normal / Involved  Bladder: Clear / Involved
Rectosigmoid: Clear / Involved — length ___  Pelvic side wall: Clear / R / L
Douglas pouch: Clear / Deposits ___

DIAPHRAGM [most important cytoreduction predictor]
R subphrenic (liver-diaphragm): Clear / Deposits — ___ mm
  Diaphragm implants: None / <2cm / >2cm [>2cm = high suboptimal risk]
L subphrenic (spleen-diaphragm): Clear / Deposits ___

SPLEEN
Surface implants: None / Yes — ___, ___ mm [FIGO IIIC]
Hilar: No / Yes [splenectomy required]  Parenchymal: No / Yes [FIGO IV]

SMALL BOWEL MESENTERY [strong cytoreduction predictor]
Root: Clear / Nodular thickening / Retraction / Spoked wheel
SB serosal: None / <3 sites / Multiple — extent ___

PORTA HEPATIS / COELIAC
Porta hepatis: Clear / Deposits — ___ mm [>2cm = difficult resection]
Coeliac: Normal / ___  Gastrohepatic ligament: Clear / Involved`,
          abdomen: `OMENTUM
Greater omentum: Normal / Caking — extent ___, thickness ___
Lesser omentum: Normal / Involved

PERITONEAL MAPPING
R paracolic: Clear / Deposits ___  L paracolic: Clear / Deposits ___
Morrison's (hepatorenal): Clear / Deposits ___
Anterior parietal: Clear / Deposits ___  Pelvic parietal: Clear / Deposits ___
Ascites: No / Yes — volume ___, character ___

LYMPH NODES
Pelvic (iliac/obturator): No / Yes — ___ mm
Para-aortic: No / Yes — ___ mm [FIGO IIIC if regional]
Mediastinal/supraclavicular: No / Yes [FIGO IVB]

LIVER
Capsular deposits: No / Yes — ___ mm [FIGO IIIC]
Parenchymal: No / Yes [FIGO IV]

FIGO 2014
I: Confined to ovaries/tubes  II: Pelvic extension
IIIA: Microscopic peritoneal or retroperitoneal nodes
IIIB: Peritoneal implants ≤2cm ± retroperitoneal nodes
IIIC: Peritoneal >2cm ± nodes (including liver/spleen surface)
IVA: Pleural effusion positive cytology  IVB: Parenchymal mets / extra-abdominal nodes
→ CT FIGO stage: ___`,
          chest: `CHEST
Pleural effusion: No / Yes — R/L [cytology required for FIGO IVA]
Pulmonary mets: No / Yes [FIGO IVB]  Mediastinal: Normal / Enlarged [FIGO IVB]`,
          impression: `IMPRESSION — OVARIAN STAGING
Primary: [bilateral/unilateral], solid/cystic, ___
Diaphragm: None / <2cm / >2cm [cytoreduction predictor]
Spleen: Surface [IIIC] / Parenchymal [IV]
SB mesentery: Clear / Involved [cytoreduction predictor]
Porta hepatis: Clear / >2cm deposits
→ CT FIGO Stage: ___
Cytoreduction likelihood: Favourable / Borderline / Unlikely
Recommendation: [upfront surgery / neoadjuvant + interval / laparoscopy]`,
        },
      },
      response: {
        evidence: "RECIST 1.1 (Eisenhauer 2009); GCIG CA-125 criteria (Rustin 2011); ESGO/ESMO 2023; CT peritoneal sensitivity limitations",
        criticalFindings: ["New peritoneal deposits", "Bowel obstruction", "Diaphragm/spleen recurrence", "Pelvic recurrence"],
        searchEvidence: "Eisenhauer 2009; Rustin 2011 GCIG CA-125; CT very insensitive for small implants (<5mm)",
        searchMismatch: "CT very insensitive for small peritoneal implants. Response must combine CT + CA-125 + symptoms. Do not over-call CT CR — most cases have residual microscopic disease.",
        criteria: "RECIST 1.1 for measurable; GCIG CA-125 criteria; note CT peritoneal limitation",
        searchPattern: [
          { step: 1, priority: "critical", title: "Bowel Obstruction Signs", detail: "SBO/LBO from recurrent disease = immediate communication.", time: "15s" },
          { step: 2, priority: "critical", title: "Prior Report + Targets", detail: "Liver mets, lymph nodes, large measurable deposits (>10mm).", time: "60s" },
          { step: 3, priority: "critical", title: "Peritoneal Survey", detail: "Same sites as staging. New = progression. Ascites change.", time: "30s" },
          { step: 4, priority: "high", title: "Diaphragm + Spleen Response", detail: "Most sensitive recurrence sites post-cytoreduction.", time: "15s" },
          { step: 5, priority: "high", title: "Pelvic Recurrence", detail: "Anastomotic recurrence. Pelvic side wall. Vaginal vault.", time: "20s" },
          { step: 6, priority: "normal", title: "RECIST + CA-125", detail: "Discordant RECIST SD / CA-125 PD = progressive by GCIG.", time: "15s" },
        ],
        template: {
          tumorSpecific: `PERITONEAL RESPONSE [CT insensitive — note limitation]
Omental: Resolved / Decreased / Stable / Increased / New ___
Diaphragm: Resolved / Decreased / Stable / Increased / New ___
Pelvic: Resolved / Decreased / Stable / Increased / New ___
Ascites: Prior ___ → Current ___
Note: CT CR for peritoneal unreliable — residual microscopic disease possible

PELVIC / SURGICAL BED
Vaginal vault: Normal / Recurrence ___  Anastomosis: Normal / Recurrence ___
Pelvic side wall: Clear / Recurrence ___`,
          abdomen: `RECIST 1.1
1. ___ current ___ mm (prior ___) Δ ___ %
2. ___ current ___ mm (prior ___) Δ ___ %
Sum: ___ mm (prior ___)  Response: CR/PR/SD/PD

LIVER: Capsular: Resolved/Stable/Progressed ___  Parenchymal: ___
NODES: Para-aortic: Stable/Decreased/Increased/New ___

BOWEL [obstruction risk]
Obstruction: No / Partial / Complete — location ___
SB tethering: No / Yes — partial obstruction risk

COMPLICATIONS
Bevacizumab: Bowel: Normal / Perforation risk / Fistula
Surgical: Normal / Anastomotic / Lymphocele ___ / Hernia ___`,
          chest: `CHEST
Pleural: No / R / L — change ___  Pulmonary: Stable / New ___`,
          impression: `IMPRESSION — OVARIAN RESPONSE
RECIST 1.1: [CR/PR/SD/PD]  Sum: ___ mm ([±]___ %)
Peritoneal: Responding / Stable / Progressing [CT limited — CA-125 correlation required]
Diaphragm: Resolved / Stable / Progressed
Obstruction: No / Yes — [location, urgency]
Note: GCIG criteria: CA-125 ≥2× nadir = PD regardless of RECIST`,
        },
      },
    },
    cs: {
      label: "Ovariální karcinom",
      staging: {
        evidence: "FIGO 2014 (Prat 2015); ESGO/ESMO 2023; peritoneální mapování Chi; kritéria resekability Bristow",
        criticalFindings: ["Postižení bránice >2 cm", "Mezenterium TT", "Depozita v porta hepatis", "Povrch sleziny"],
        searchEvidence: "Prat 2015 FIGO 2014; ESGO/ESMO 2023; Bristow 2002 CT predikce; Chi 2012 mapování peritonea",
        searchMismatch: "Standardní přístup přehlíží klíčovou chirurgickou otázku: MŮŽE BÝT OPTIMÁLNĚ CYTOREDUKOVATELNÁ? Závisí na distribuci peritoneálního postižení. Bránice, povrch sleziny, kořen mezenteria TT, porta hepatis predikují chirurgický výsledek.",
        classification: "FIGO 2014; TNM 8. vydání",
        searchPattern: [
          { step: 1, priority: "critical", title: "Bránice — oboustranně, nejdůležitější prediktor", detail: "Pravý subdiafragmatický prostor: játra–bránice. Levý: slezina–bránice. Koronální rekonstrukce. Implantáty >2 cm = vysoké riziko suboptimální cytoredukce.", time: "20s" },
          { step: 2, priority: "critical", title: "Povrch sleziny + hilus", detail: "Implantáty = FIGO IIIC. Postižení hilu = nutná splenektomie. Parenchymatózní = FIGO IV.", time: "15s" },
          { step: 3, priority: "critical", title: "Kořen mezenteria TT", detail: "Nejsilnější prediktor suboptimální cytoredukce. Nodulární ztluštění, retrakce, spoked wheel. Mnohočetné serosal implantáty.", time: "20s" },
          { step: 4, priority: "critical", title: "Porta hepatis + celiakální oblast", detail: "Depozita >2 cm = vysoké cytoreduktivní riziko. Hepatogastrické ligamentum.", time: "15s" },
          { step: 5, priority: "high", title: "Primární tumor + pánev", detail: "Adnexální masa. Děloha/měchýř/rektum. Pánevní stěna. Douglasův prostor.", time: "20s" },
          { step: 6, priority: "high", title: "Omentum + přehled peritonea", detail: "Omentální cake. Parakolické žlábky. Morrisonova kapsa. Parietální peritoneum.", time: "20s" },
        ],
        template: {
          tumorSpecific: `PRIMÁRNÍ TUMOR
P adnex: Normální / Masa — ___ mm, solidní/cystická/smíšená
L adnex: Normální / Masa — ___ mm
Děloha: Normální / Postižena  Měchýř: Volný / Postižen
Rektosigma: Volné / Postiženo — délka ___  Pánevní stěna: Volná / P/L
Douglasův prostor: Volný / Depozita ___

BRÁNICE [nejdůležitější prediktor cytoredukce]
P subdiafragmaticky (játra–bránice): Volný / Depozita — ___ mm
  Implantáty bránice: Žádné / <2 cm / >2 cm [>2 cm = vysoké riziko]
L subdiafragmaticky (slezina–bránice): Volný / Depozita ___

SLEZINA
Povrchové implantáty: Žádné / Ano — ___, ___ mm [FIGO IIIC]
Hilus: Ne / Ano [nutná splenektomie]  Parenchymatózní: Ne / Ano [FIGO IV]

MEZENTERIUM TT [silný prediktor cytoredukce]
Kořen: Volný / Nodulární ztluštění / Retrakce / Spoked wheel
Serosal TT: Žádné / <3 místa / Mnohočetné — rozsah ___

PORTA HEPATIS / CELIAKÁLNÍ
Porta hepatis: Volná / Depozita — ___ mm [>2 cm = obtížná resekce]
Celiakální: Normální / ___  Hepatogastrické ligamentum: Volné / Postiženo`,
          abdomen: `OMENTUM
Velké: Normální / Cake — rozsah ___, tloušťka ___  Malé: Normální / Postiženo

MAPOVÁNÍ PERITONEA
P parakolický žlábek: Volný / Depozita ___  L parakolický: Volný / Depozita ___
Morrisonova kapsa: Volná / Depozita ___
Přední parietální peritoneum: Volné / Depozita ___  Pánevní: Volné / Depozita ___
Ascites: Ne / Ano — množství ___, charakter ___

MÍZNÍ UZLINY
Pánevní (ilické/obturátorové): Ne / Ano — ___ mm
Retroperitoneální/paraaortální: Ne / Ano — ___ mm [FIGO IIIC]
Mediastinální/supraklavikulární: Ne / Ano [FIGO IVB]

JÁTRA
Kapsulární depozita: Ne / Ano — ___ mm [FIGO IIIC]  Parenchymatózní: Ne / Ano [FIGO IV]

FIGO 2014
I: Ohraničen na ovaria  II: Pánevní šíření
IIIA: Mikroskopické peritoneální nebo retroperitoneální uzliny
IIIB: Peritoneální implantáty ≤2 cm ± uzliny
IIIC: Peritoneální >2 cm ± uzliny (vč. povrchu jater/sleziny)
IVA: Pleurální výpotek pozitivní cytologie  IVB: Parenchymatózní / extraabdominální uzliny
→ CT FIGO stadium: ___`,
          chest: `HRUDNÍK
Pleurální výpotek: Ne / Ano — P/L [cytologie pro FIGO IVA]
Plicní mets: Ne / Ano [FIGO IVB]  Mediastinální: Normální / Zvětšené [FIGO IVB]`,
          impression: `ZÁVĚR — STAGING OVARIÁLNÍHO KARCINOMU
Primář: [bilat./unilat.], solidní/cystický, ___
Bránice: Bez postižení / <2 cm / >2 cm [prediktor cytoredukce]
Slezina: Povrch [IIIC] / Parenchym [IV]
Mezenterium TT: Volné / Postiženo [prediktor]  Porta hepatis: Volná / >2 cm
→ CT FIGO stadium: ___
Pravděpodobnost optimální cytoredukce: Příznivá / Hraniční / Nepravděpodobná
Doporučení: [primární operace / neoadjuvantní + intervalová / laparoskopie]`,
        },
      },
      response: {
        evidence: "RECIST 1.1; kritéria CA-125 GCIG (Rustin 2011); ESGO/ESMO 2023; CT necitlivé pro malé implantáty",
        criticalFindings: ["Nová peritoneální depozita", "Střevní obstrukce", "Recidiva bránice/sleziny", "Pánevní recidiva"],
        searchEvidence: "Eisenhauer 2009; Rustin 2011 GCIG CA-125; CT velmi necitlivé pro implantáty <5 mm",
        searchMismatch: "CT velmi necitlivé pro malé peritoneální implantáty. Odpověď musí kombinovat CT + CA-125 + příznaky. Nepřehodnoťte CT CR — většina případů má reziduální mikroskopické onemocnění.",
        criteria: "RECIST 1.1 pro měřitelné; kritéria CA-125 GCIG; poznámka k peritoneálnímu omezení",
        searchPattern: [
          { step: 1, priority: "critical", title: "Příznaky střevní obstrukce", detail: "SBO/LBO z recidivujícího onemocnění = okamžité sdělení.", time: "15s" },
          { step: 2, priority: "critical", title: "Starý protokol + cíle", detail: "Jaterní mets, uzliny, velká měřitelná depozita (>10 mm).", time: "60s" },
          { step: 3, priority: "critical", title: "Přehled peritonea", detail: "Stejná místa jako při stagingu. Nová = progrese. Změna ascitu.", time: "30s" },
          { step: 4, priority: "high", title: "Odpověď bránice + sleziny", detail: "Nejcitlivější místa recidivy po cytoredukci.", time: "15s" },
          { step: 5, priority: "high", title: "Pánevní recidiva", detail: "Anastomotická recidiva. Pánevní stěna. Poševní pahýl.", time: "20s" },
          { step: 6, priority: "normal", title: "RECIST + CA-125", detail: "Diskordance RECIST SD / CA-125 PD = progrese dle GCIG.", time: "15s" },
        ],
        template: {
          tumorSpecific: `PERITONEÁLNÍ ODPOVĚĎ [CT necitlivé — poznamenat omezení]
Omentum: Ustoupilo / Zmenšilo / Stabilní / Zvětšilo / Nové ___
Bránice: Ustoupilo / Zmenšilo / Stabilní / Zvětšilo / Nové ___
Pánevní: Ustoupilo / Zmenšilo / Stabilní / Zvětšilo / Nové ___
Ascites: Dříve ___ → Aktuálně ___
Poznámka: CT CR pro peritoneum nespolehlivé — možné reziduální mikroskopické onemocnění

PÁNEVNĚ / CHIR. LŮŽKO
Poševní pahýl: Normální / Recidiva ___  Anastomóza: Normální / Recidiva ___
Pánevní stěna: Volná / Recidiva ___`,
          abdomen: `RECIST 1.1
1. ___ aktuálně ___ mm (dříve ___) Δ ___ %
2. ___ aktuálně ___ mm (dříve ___) Δ ___ %
Součet: ___ mm (dříve ___)  Odpověď: CR/PR/SD/PD

JÁTRA: Kapsulárně: Ustoupilo/Stabilní/Progredovalo ___  Parenchymatózně: ___
UZLINY: Paraaortální: Stabilní/Zmenšení/Nárůst/Nové ___

STŘEVO [riziko obstrukce]
Obstrukce: Ne / Parciální / Kompletní — lokalizace ___
Trakce TT: Ne / Ano — riziko parciální obstrukce

KOMPLIKACE
Bevacizumab: Střevo: Normální / Riziko perforace / Fistula
Chirurgické: Normální / Anastomotické / Lymfokéla ___ / Kýla ___`,
          chest: `HRUDNÍK
Pleura: Ne / P/L — změna ___  Plicní: Stabilní / Nové ___`,
          impression: `ZÁVĚR — ODPOVĚĎ OVARIÁLNÍHO KARCINOMU
RECIST 1.1: [CR/PR/SD/PD]  Součet: ___ mm ([±]___ %)
Peritoneum: Odpovídá / Stabilní / Progreduje [CT omezené — nutná korelace s CA-125]
Bránice: Ustoupila / Stabilní / Progredovala
Obstrukce: Ne / Ano — [lokalizace, naléhavost]
Poznámka: GCIG kritéria: CA-125 ≥2× minimum = PD bez ohledu na RECIST`,
        },
      },
    },
  },
];
