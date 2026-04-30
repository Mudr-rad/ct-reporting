// Oncology templates part 1: colorectal, pancreatic, RCC, lymphoma
export const ONCOLOGY_PART1 = [
  {
    id: "colorectal",
    validExtents: ["ap", "cap"],
    en: {
      label: "Colorectal",
      staging: {
        evidence: "TNM 8th (AJCC/UICC 2017); ESMO colorectal guidelines 2023; Fong clinical risk score; ESMO liver mets resectability consensus 2016",
        criticalFindings: ["T4 invasion", "Peritoneal deposits", "Liver mets resectability", "Obstructing primary"],
        searchEvidence: "ESMO 2023 — primary first; Fong 1999 liver mets resectability; Adam 2004 future liver remnant",
        searchMismatch: "Most assess liver mets first. Correct: primary tumour T stage FIRST — drives surgical approach. Liver mets resectability second, with structured criteria not just 'multiple bilateral'.",
        classification: "TNM 8th (AJCC/UICC 2017); ESMO liver mets resectability 2023",
        searchPattern: [
          { step: 1, priority: "critical", title: "Primary Tumour — T Stage", detail: "Wall thickening location, circumferential vs partial. T3: through muscularis into pericolorectal fat. T4a: visceral peritoneum (fat nodularity/tethering). T4b: invading adjacent organ. Drives surgical approach.", time: "45s" },
          { step: 2, priority: "critical", title: "Liver Metastases — Resectability", detail: "Per lesion: segment, distance to hepatic veins, PV, bile ducts. FLR ≥20-25% required. Bilobar ≠ automatically unresectable — assess per ESMO.", time: "60s" },
          { step: 3, priority: "critical", title: "Peritoneal Disease", detail: "Omentum, small bowel mesentery, right subphrenic, pelvis. Peritoneal disease = contraindication to liver resection.", time: "30s" },
          { step: 4, priority: "high", title: "Regional Lymph Nodes", detail: "Mesorectal, pericolonic, superior rectal, inferior mesenteric. SA >9mm OR round OR irregular = suspicious.", time: "20s" },
          { step: 5, priority: "high", title: "Distant Disease Survey", detail: "Liver, lung bases, retroperitoneal nodes, adrenal, ovarian, bone.", time: "30s" },
          { step: 6, priority: "normal", title: "Chest (C+A+P)", detail: "Pulmonary metastases. Mediastinal nodes. Simultaneous resectability?", time: "20s" },
        ],
        template: {
          tumorSpecific: `PRIMARY TUMOUR
Location: Caecum / Ascending / Transverse / Descending / Sigmoid / Rectum — ___ cm from anal verge
Wall thickening: ___ mm  Circumferential: No / Yes
Obstruction: No / Partial / Complete

T STAGE
T3: Through muscularis into pericolorectal fat — depth ___ mm
T4a: Visceral peritoneum (fat nodularity/tethering): No / Yes
T4b: Adjacent organ invasion: No / Yes — organ ___
→ CT T stage: T___

MESORECTAL FASCIA [rectal]
MRF: Clear (≥1mm) / Threatened (<1mm) / Involved  Distance: ___ mm
EMVI: No / Yes — vessel ___

LIVER METASTASES [ESMO resectability]
Liver mets: No / Yes — number ___, bilobar: No / Yes
Lesion 1: Segment ___, ___ mm, HV ___ mm, PV ___ mm, BD ___ mm
Lesion 2: Segment ___, ___ mm  Lesion 3: ___
Background: Normal / Steatosis / Cirrhosis
FLR estimate: ___ %  (need ≥20-25%)
→ Resectability: Resectable / Potentially resectable / Unresectable

PERITONEAL [confirm absent for liver resection]
Deposits: No / Yes — location ___  Omental caking: No / Yes
Small bowel mesentery: Clear / Involved  Right subphrenic: Clear / Deposits
→ Peritoneal: Absent / Present`,
          abdomen: `REGIONAL NODES
Pericolonic/mesorectal: Normal / Enlarged — ___ mm SA  N stage: N0/N1/N2
Lateral pelvic [rectal]: Normal / R ___ mm / L ___ mm

DISTANT — ABDOMINAL
Adrenal: Normal / R/L ___  Ovaries: Normal / Mass ___
Retroperitoneal nodes: Normal / ___  Ascites: No / Yes`,
          chest: `CHEST
Pulmonary mets: No / Yes — ___, simultaneous resection: Yes / No / Assess
Mediastinal nodes: Normal / ___  Pleural: No / Yes`,
          impression: `IMPRESSION — COLORECTAL STAGING
Primary: [location], T___, [MRF if rectal]  Nodes: N___
Liver: [resectable/potentially/unresectable] — ___ lesions
Peritoneum: Absent / Present  M: M0/M1a/M1b/M1c
→ Stage: ___  Resectability: Resectable / MDT / Unresectable`,
        },
      },
      response: {
        evidence: "RECIST 1.1 (Eisenhauer 2009); ESMO liver mets response 2023; secondary resectability after downstaging",
        criticalFindings: ["New peritoneal deposits", "New liver lesions", "Progression", "Treatment complications"],
        searchEvidence: "Eisenhauer 2009; ESMO 2023 secondary resectability; structured response reduces variability",
        searchMismatch: "Response stops at RECIST. Critical additional step: reassess liver resectability after RECIST — downstaging to resectability is the therapeutic goal for many patients.",
        criteria: "RECIST 1.1; liver resectability reassessment per ESMO 2023",
        searchPattern: [
          { step: 1, priority: "critical", title: "Prior Report First", detail: "Targets, baseline sum, liver resectability status. Was downstaging the goal?", time: "60s" },
          { step: 2, priority: "critical", title: "New Peritoneal Deposits First", detail: "New peritoneal = immediately unresectable. Check omentum, subphrenic, mesentery before measuring targets.", time: "30s" },
          { step: 3, priority: "critical", title: "Liver — RECIST + Resectability", detail: "Measure targets. Then reassess ESMO resectability: FLR ≥25%? Lesions clear of vessels?", time: "60s" },
          { step: 4, priority: "high", title: "Full RECIST", detail: "All targets. Sum. Change from baseline and nadir.", time: "45s" },
          { step: 5, priority: "high", title: "Primary Response", detail: "Wall thickening reduction. Obstruction improved?", time: "20s" },
          { step: 6, priority: "high", title: "Treatment Complications", detail: "Anti-VEGF perforation risk. Immunotherapy colitis. FOLFOX steatosis.", time: "20s" },
        ],
        template: {
          tumorSpecific: `LIVER RESPONSE + RESECTABILITY REASSESSMENT
FLR now: ___ %  Lesions near vessels: Improved / Unchanged / Worsened
→ Resectability: Now resectable / Borderline MDT / Still unresectable

PERITONEAL [new = unresectable]
Current: No new deposits / New — location ___ [CRITICAL]
Omentum: Clear / Thickening / Nodularity

PRIMARY RESPONSE
Wall thickening: ___ mm (prior ___ mm)  Obstruction: Resolved / Improved / Unchanged`,
          abdomen: `RECIST 1.1 [max 5 targets, ≥10mm; nodes ≥15mm SA]
1. ___ current ___ mm (prior ___ mm, Δ ___ %)
2. ___ current ___ mm (prior ___ mm, Δ ___ %)
3. ___ current ___ mm (prior ___ mm, Δ ___ %)
Sum: ___ mm / Prior ___ mm / Baseline ___ mm  Change: ___ %
Non-targets: CR / Non-CR Non-PD / Progression
New lesions: None / Yes ___
→ RECIST: CR / PR / SD / PD

COMPLICATIONS
Bowel: None / Colitis / Perforation risk  Liver: None / Steatosis
Anti-VEGF: Normal / Pneumatosis / Fistula  Thrombosis: None / ___`,
          chest: `CHEST
Pulmonary: Stable / PR / PD  New: No / Yes ___`,
          impression: `IMPRESSION — COLORECTAL RESPONSE
RECIST 1.1: [CR/PR/SD/PD]  Sum: ___ mm ([±]___ %)
Liver resectability: Now resectable / Borderline MDT / Unresectable
Peritoneum: Clear / New deposits [change plan]
Complications: None / [specify]`,
        },
      },
    },
    cs: {
      label: "Kolorektální karcinom",
      staging: {
        evidence: "TNM 8. vydání (AJCC/UICC 2017); guidelines ESMO 2023; Fongovo skóre; konsensus ESMO pro resekabilní jaterní metastázy 2016",
        criticalFindings: ["Invaze T4", "Peritoneální depozita", "Resekabilita jaterních metastáz", "Obstrukující primární tumor"],
        searchEvidence: "ESMO 2023 — nejdříve primární tumor; Fong 1999 resekabilita jaterních mets; Adam 2004 budoucí jaterní zbytek",
        searchMismatch: "Většina hodnotí nejdříve jaterní metastázy. Správně: T stadium primárního tumoru JAKO PRVNÍ — určuje chirurgický přístup. Resekabilita jaterních mets jako druhá, se strukturovanými kritérii.",
        classification: "TNM 8. vydání (AJCC/UICC 2017); kritéria resekability jaterních mets ESMO 2023",
        searchPattern: [
          { step: 1, priority: "critical", title: "Primární tumor — T stadium", detail: "Lokalizace ztluštění, cirkulární vs. parciální. T3: přes muscularis propria. T4a: viscerální peritoneum. T4b: invaze do sousedního orgánu.", time: "45s" },
          { step: 2, priority: "critical", title: "Jaterní metastázy — resekabilita", detail: "Pro každou lézi: segment, vzdálenost k jaterním žilám, VP, žlučovodům. FLR ≥20–25 %. Bilaterální ≠ automaticky neresekabilní.", time: "60s" },
          { step: 3, priority: "critical", title: "Peritoneální postižení", detail: "Omentum, mezenterium TT, pravý subdiafragmatický prostor, pánev. Peritoneální postižení = kontraindikace resekce jater.", time: "30s" },
          { step: 4, priority: "high", title: "Regionální mízní uzliny", detail: "Mezorektální, perikolické, superirorní rektální, inf. mezenteriální. KO >9 mm nebo kulaté nebo nepravidelné = suspektní.", time: "20s" },
          { step: 5, priority: "high", title: "Přehled vzdálených metastáz", detail: "Játra, baze plic, retroperitoneální uzliny, nadledviny, ovaria, kosti.", time: "30s" },
          { step: 6, priority: "normal", title: "Hrudník (H+B+P)", detail: "Plicní metastázy. Mediastinální uzliny. Simultánní resekabilita?", time: "20s" },
        ],
        template: {
          tumorSpecific: `PRIMÁRNÍ TUMOR
Lokalizace: Cékum / Vzestupný / Příčný / Sestupný tračník / Sigma / Rektum — ___ cm od řitního otvoru
Ztluštění stěny: ___ mm  Cirkulární: Ne / Ano  Obstrukce: Ne / Parciální / Kompletní

T STADIUM
T3: Průnik do perikolického tuku — hloubka ___ mm
T4a: Viscerální peritoneum: Ne / Ano  T4b: Invaze orgán: Ne / Ano — ___
→ CT T stadium: T___

MEZOREKTÁLNÍ FASCIA [rektum]
MRF: Volná (≥1 mm) / Ohrožená (<1 mm) / Postižená  Vzdálenost: ___ mm
EMVI: Ne / Ano — céva ___

JATERNÍ METASTÁZY [ESMO resekabilita]
Mets: Ne / Ano — počet ___, bilaterálně: Ne / Ano
Léze 1: Segment ___, ___ mm, HŽ ___ mm, VP ___ mm  Léze 2: ___ Léze 3: ___
Parenchym: Normální / Steatóza / Cirhóza  FLR: ___ %  (potřeba ≥20–25 %)
→ Resekabilita: Resekabilní / Potenciálně resekabilní / Neresekabilní

PERITONEUM [potvrdit nepřítomnost pro resekci jater]
Depozita: Ne / Ano  Omentální cake: Ne / Ano
Mezenterium TT: Volné / Postiženo  Pravý subdiafragmatický: Volný / Depozita
→ Peritoneum: Nepřítomno / Přítomno`,
          abdomen: `REGIONÁLNÍ UZLINY
Perikolické/mezorektální: Normální / Zvětšené — ___ mm KO  N stadium: N0/N1/N2
Laterální pánevní [rektum]: Normální / Vpravo ___ mm / Vlevo ___ mm

VZDÁLENÉ — BŘICHO
Nadledviny: Norm. / V/L ___  Ovaria: Norm. / Expanze ___
Retroperitoneální uzliny: Norm. / ___  Ascites: Ne / Ano`,
          chest: `HRUDNÍK
Plicní mets: Ne / Ano — ___, simult. resekce: Ano / Ne / Hodnotit
Mediastinální uzliny: Normální / ___  Pleura: Ne / Ano`,
          impression: `ZÁVĚR — STAGING KOLOREKTÁLNÍHO KARCINOMU
Primář: [lokalizace], T___, [MRF u rekta]  Uzliny: N___
Játra: [resekabilní/potenciálně/neresekabilní] — ___ lézí
Peritoneum: Nepřítomno / Přítomno  M: M0/M1a/M1b/M1c
→ Stadium: ___  Resekabilita: Resekabilní / MDT / Neresekabilní`,
        },
      },
      response: {
        evidence: "RECIST 1.1 (Eisenhauer 2009); hodnocení odpovědi jaterních mets ESMO 2023; sekundární resekabilita po downstagingu",
        criticalFindings: ["Nová peritoneální depozita", "Nové jaterní léze", "Progrese", "Komplikace léčby"],
        searchEvidence: "Eisenhauer 2009; sekundární resekabilita ESMO 2023",
        searchMismatch: "Hodnocení se zastaví u RECIST. Kritický krok navíc: přehodnotit resekabilitu jater po RECIST — downstaging do resekability je terapeutickým cílem.",
        criteria: "RECIST 1.1; přehodnocení resekability dle ESMO 2023",
        searchPattern: [
          { step: 1, priority: "critical", title: "Nejdříve starý protokol", detail: "Cíle, výchozí součet, stav resekability jater. Byl cílem downstaging?", time: "60s" },
          { step: 2, priority: "critical", title: "Nejdříve nová peritoneální depozita", detail: "Nová peritoneální = okamžitě neresekabilní. Zkontrolujte omentum, subdiafragmaticky, mezenterium před měřením cílů.", time: "30s" },
          { step: 3, priority: "critical", title: "Játra — RECIST + resekabilita", detail: "Změřte cíle. Pak přehodnoťte ESMO resekabilitu: FLR ≥25 %? Léze volné od cév?", time: "60s" },
          { step: 4, priority: "high", title: "Kompletní RECIST", detail: "Všechny cíle. Součet. Změna od výchozího a minima.", time: "45s" },
          { step: 5, priority: "high", title: "Odpověď primárního tumoru", detail: "Redukce ztluštění stěny. Obstrukce zlepšena?", time: "20s" },
          { step: 6, priority: "high", title: "Komplikace léčby", detail: "Riziko perforace anti-VEGF. Kolitida při imunoterapii. Steatóza FOLFOX.", time: "20s" },
        ],
        template: {
          tumorSpecific: `ODPOVĚĎ JATER + PŘEHODNOCENÍ RESEKABILITY
FLR nyní: ___ %  Léze u cév: Zlepšeno / Nezměněno / Zhoršeno
→ Resekabilita: Nyní resekabilní / Hraniční MDT / Stále neresekabilní

PERITONEUM [nová = neresekabilní]
Aktuálně: Bez nových depozit / Nová — ___ [KRITICKÝ NÁLEZ]
Omentum: Volné / Ztluštění / Nodularita

ODPOVĚĎ PRIMÁRNÍHO TUMORU
Ztluštění: ___ mm (dříve ___ mm)  Obstrukce: Ustoupila / Zlepšena / Nezměněna`,
          abdomen: `RECIST 1.1 [max 5 cílů, ≥10 mm; uzliny ≥15 mm KO]
1. ___ aktuálně ___ mm (dříve ___ mm, Δ ___ %)
2. ___ aktuálně ___ mm (dříve ___ mm, Δ ___ %)
3. ___ aktuálně ___ mm (dříve ___ mm, Δ ___ %)
Součet: ___ mm / Dříve ___ mm / Výchozí ___ mm  Změna: ___ %
Necílové: CR / Neplná remise bez prog. / Progrese  Nové: Žádné / Ano ___
→ RECIST: CR / PR / SD / PD

KOMPLIKACE
Střevo: Žádné / Kolitida / Riziko perf.  Játra: Žádné / Steatóza
Anti-VEGF: Normální / Pneumatosis / Fistula  Trombóza: Žádná / ___`,
          chest: `HRUDNÍK
Plicní: Stabilní / PR / PD  Nové: Ne / Ano ___`,
          impression: `ZÁVĚR — ODPOVĚĎ KOLOREKTÁLNÍHO KARCINOMU
RECIST 1.1: [CR/PR/SD/PD]  Součet: ___ mm ([±]___ %)
Resekabilita jater: Nyní resekabilní / Hraniční MDT / Neresekabilní
Peritoneum: Volné / Nová depozita [změna plánu]
Komplikace: Žádné / [specifikovat]`,
        },
      },
    },
  },

  {
    id: "pancreatic",
    validExtents: ["ap", "cap"],
    en: {
      label: "Pancreatic",
      staging: {
        evidence: "TNM 8th (AJCC/UICC 2017); NCCN Pancreatic 2024; AHPBA/SSO/SSAT borderline consensus 2009; Isaji 2018 international consensus",
        criticalFindings: ["SMA contact >180°", "Coeliac involvement", "Unreconstructable SMV/PV", "Distant metastases"],
        searchEvidence: "NCCN 2024 vascular arc assessment; Isaji 2018 international consensus; Al-Hawary 2014 standardised CT reporting",
        searchMismatch: "CRITICAL: most describe the mass then mention vascular involvement. Correct: systematic five-vessel assessment with arc IN DEGREES is the primary finding. Without arc measurements the report is insufficient for surgical planning. Vessels FIRST.",
        classification: "TNM 8th (AJCC/UICC 2017); NCCN 2024 resectability criteria",
        searchPattern: [
          { step: 1, priority: "critical", title: "Five-Vessel Assessment — Primary Finding", detail: "In order: (1) SMA arc in degrees. (2) Coeliac including CHA. (3) PV/SMV confluence — arc, contour, length. (4) Portal vein. (5) SMV. Do not assess mass until all five vessels are done.", time: "90s" },
          { step: 2, priority: "critical", title: "Apply NCCN Resectability", detail: "Resectable: no arterial contact, SMV/PV ≤180° no contour. Borderline: SMV/PV >180° reconstructable OR SMA ≤180°. Locally advanced: SMA >180°, coeliac >180°, unreconstructable SMV/PV.", time: "20s" },
          { step: 3, priority: "critical", title: "Distant — Liver + Peritoneum", detail: "Liver mets (most common M1). Peritoneal deposits. Both = palliative intent.", time: "30s" },
          { step: 4, priority: "high", title: "Mass Characterisation", detail: "Location, size, duct dilation, double duct sign, parenchymal atrophy.", time: "30s" },
          { step: 5, priority: "high", title: "Lymph Nodes", detail: "Peripancreatic, coeliac, SMA origin, portocaval, para-aortic. Para-aortic = M1.", time: "20s" },
          { step: 6, priority: "normal", title: "Biliary + Chest", detail: "CBD. Stent. Chest if C+A+P.", time: "20s" },
        ],
        template: {
          tumorSpecific: `PANCREATIC MASS
Location: Head / Neck / Body / Tail  Size: ___ × ___ mm
Wirsung duct: Normal / Dilated ___ mm, abrupt cutoff: No / Yes
CBD: Normal / Dilated ___ mm  [Double duct sign: No / Yes]
Parenchymal atrophy: No / Yes

FIVE-VESSEL ASSESSMENT [NCCN 2024 — primary finding]
1. SMA: Contact: No / Arc ___ °  Contour: Normal / Deformed  >180°: No / Yes
2. Coeliac: No / Arc ___ °  CHA: No / Arc ___ °, reconstructable: Yes / No
3. PV/SMV confluence: No / Arc ___ °, length ___ mm  Contour: Normal / Irregular  Reconstructable: Yes / No
4. Portal vein: No / Arc ___ °  Occlusion: No / Yes
5. SMV: No / Arc ___ °  Occlusion: No / Yes

NCCN RESECTABILITY [Isaji 2018]
Resectable: No arterial contact; SMV/PV ≤180°, normal contour
Borderline resectable: SMV/PV >180° reconstructable OR SMA ≤180° OR CHA short segment reconstructable
Locally advanced: SMA >180° OR coeliac >180° OR unreconstructable SMV/PV
→ RESECTABILITY: Resectable / Borderline resectable / Locally advanced`,
          abdomen: `LYMPH NODES
Peripancreatic: Normal / ___ mm  Coeliac/SMA: Normal / ___ mm
Portocaval: Normal / ___  Para-aortic: Normal / ___ mm [M1]

DISTANT
Liver: No mets / Mets — ___, ___ mm [M1]
Peritoneal: No / Yes — ___ [M1]  Ascites: No / Yes

BILIARY
CBD: ___ mm  Stent: No / Yes — position ___  IHBD: No / Yes`,
          chest: `CHEST
Pulmonary mets: No / Yes [M1]  Pleural: No / Yes`,
          impression: `IMPRESSION — PANCREATIC STAGING
Mass: [location], ___ mm  Vascular: SMA ___ °, Coeliac ___ °, CHA ___ °, PV/SMV ___ °
Nodes: Regional N0/N1/N2 / Para-aortic [M1]  M: M0/M1
→ RESECTABILITY: Resectable / Borderline resectable / Locally advanced
T___ N___ M___  Recommendation: [upfront surgery / neoadjuvant / palliative]`,
        },
      },
      response: {
        evidence: "RECIST 1.1 (Eisenhauer 2009); NCCN 2024 restaging after neoadjuvant; Al-Hawary 2014 post-treatment CT",
        criticalFindings: ["Conversion to resectable", "New distant mets", "Vascular response", "Post-treatment pancreatitis"],
        searchEvidence: "Al-Hawary 2014 post-neoadjuvant CT; NCCN 2024 restaging; size unchanged ≠ treatment failure in PDAC",
        searchMismatch: "RECIST alone misleading in PDAC — size may not change with response. Critical question: has resectability changed? Vascular arc may decrease without size change. Always reassess all five vessels.",
        criteria: "RECIST 1.1; vascular restaging per NCCN 2024 — resectability is the primary endpoint",
        searchPattern: [
          { step: 1, priority: "critical", title: "Prior Vascular Status — Read First", detail: "What were the five vessel arcs? What was resectability category? Baseline for restaging.", time: "60s" },
          { step: 2, priority: "critical", title: "Five-Vessel Reassessment", detail: "Arc measurements in degrees for all five. Any decrease? Contour irregularity resolved? Primary endpoint.", time: "90s" },
          { step: 3, priority: "critical", title: "New Distant Disease First", detail: "New liver mets or peritoneal = palliative pivot. Check before mass.", time: "20s" },
          { step: 4, priority: "high", title: "Mass Size — RECIST with Caveats", detail: "Measure but contextualise. Fibrosis without size change is common. Decreased density may = response.", time: "30s" },
          { step: 5, priority: "high", title: "Stent + Biliary", detail: "Stent position/function. IHBD re-dilation.", time: "10s" },
          { step: 6, priority: "normal", title: "Complications", detail: "Post-treatment pancreatitis. Portal/SMV thrombosis.", time: "15s" },
        ],
        template: {
          tumorSpecific: `VASCULAR RESTAGING [primary endpoint — NCCN 2024]
Prior: SMA ___ °, Coeliac ___ °, CHA ___ °, PV/SMV ___ °

FIVE-VESSEL REASSESSMENT
1. SMA: Prior ___ ° → Current ___ °  Change: Decreased/Stable/Increased  Contour: Normal/Deformed
2. Coeliac/CHA: Prior ___ ° → Current ___ °
3. PV/SMV: Prior ___ ° → Current ___ °  Contour: Normal/Improved/Unchanged
4. PV: Prior ___ ° → Current ___ °
5. SMV: Prior ___ ° → Current ___ °

Prior resectability: ___
→ CURRENT RESECTABILITY: Resectable / Borderline resectable / Locally advanced / Unresectable (M1)
Change: Downstaged to resectable / Downstaged to borderline / Unchanged / Progressed

MASS SIZE
Prior ___ × ___ mm → Current ___ × ___ mm
Density: Unchanged / Decreased (possible response) / Heterogeneous
Note: Stable size ≠ treatment failure in PDAC

NEW DISTANT
Liver: No new / New ___  Peritoneal: Clear / New ___`,
          abdomen: `RECIST
Mass: Prior ___ mm → ___ mm (Δ ___ %)
Other targets: 1. ___ mm (prior ___) Δ ___ %
Sum: ___ mm / Prior ___  RECIST: CR/PR/SD/PD [size unreliable in PDAC]
Para-aortic: Absent / Present [M1]
Complications: Post-treatment pancreatitis: No/Yes — CTSI ___  Thrombosis: No/Yes ___`,
          chest: `CHEST [C+A+P]
Pulmonary mets: No new / New ___`,
          impression: `IMPRESSION — PANCREATIC RESTAGING
RECIST: [PR/SD/PD]  Mass: ___ mm ([±]___ %)
Vascular: SMA ___ ° (prior ___), Coeliac ___ ° (prior ___), PV/SMV ___ ° (prior ___)
→ RESECTABILITY: Downstaged — resectable / Borderline / Unchanged / Progressed (M1)
Recommendation: [proceed to surgery / extend neoadjuvant / MDT / palliative]`,
        },
      },
    },
    cs: {
      label: "Karcinom slinivky",
      staging: {
        evidence: "TNM 8. vydání; NCCN 2024; konsensus AHPBA/SSO/SSAT 2009; mezinárodní konsensus Isaji 2018",
        criticalFindings: ["Kontakt AMS >180°", "Postižení truncus coeliacus", "Nerekonstruovatelná VMH/VP", "Vzdálené metastázy"],
        searchEvidence: "NCCN 2024 oblouk kontaktu; mezinárodní konsensus Isaji 2018; standardizované hlášení Al-Hawary 2014",
        searchMismatch: "KRITICKÉ: většina popíše masu a zmíní cévní invazi. Správně: systematické hodnocení pěti cév s obloukem VE STUPNÍCH je primárním nálezem. Bez oblouků je protokol nedostatečný pro chirurgy. Nejdříve cévy.",
        classification: "TNM 8. vydání; kritéria resekability NCCN 2024",
        searchPattern: [
          { step: 1, priority: "critical", title: "Hodnocení pěti cév — primární nález", detail: "V pořadí: (1) oblouk AMS ve stupních. (2) Truncus coeliacus vč. AHC. (3) Konfluens VP/VMH. (4) Vrátnicová žíla. (5) VMH. Nepokračujte u masy, dokud nejsou hodnoceny všechny.", time: "90s" },
          { step: 2, priority: "critical", title: "Klasifikace resekability NCCN", detail: "Resekabilní: bez kontaktu tepen; VMH/VP ≤180° bez deformace. Hraničně: VMH/VP >180° rekonstruovatelné NEBO AMS ≤180°. Lokálně pokročilý: AMS >180°, truncus >180°, nerekonstruovatelné.", time: "20s" },
          { step: 3, priority: "critical", title: "Vzdálené — játra + peritoneum", detail: "Jaterní mets (nejčastější M1). Peritoneální depozita. Obojí = paliativní záměr.", time: "30s" },
          { step: 4, priority: "high", title: "Charakterizace masy", detail: "Lokalizace, velikost, dilatace vývodu, double duct sign, atrofie parenchymu.", time: "30s" },
          { step: 5, priority: "high", title: "Mízní uzliny", detail: "Peripankreatické, celiakální, odstup AMS, portokavální, paraaortální. Paraaortální = M1.", time: "20s" },
          { step: 6, priority: "normal", title: "Biliární systém + hrudník", detail: "DCH. Stent. Hrudník při H+B+P.", time: "20s" },
        ],
        template: {
          tumorSpecific: `MASA SLINIVKY
Lokalizace: Hlava / Krček / Tělo / Ocas  Velikost: ___ × ___ mm
Wirsungův vývod: Normální / Dilatovaný ___ mm, náhlé přerušení: Ne / Ano
DCH: Normální / Dilatovaný ___ mm  [Double duct sign: Ne / Ano]
Atrofie parenchymu: Ne / Ano

HODNOCENÍ PĚTI CÉV [NCCN 2024 — primární nález]
1. AMS: Kontakt: Ne / Oblouk ___ °  Kontura: Normální / Deformovaná  >180°: Ne / Ano
2. Truncus coeliacus: Ne / Oblouk ___ °  AHC: Ne / Oblouk ___ °, rekonstruovatelná: Ano / Ne
3. Konfluens VP/VMH: Ne / Oblouk ___ °, délka ___ mm  Kontura: Norm./Neprav.  Rekonstruovatelné: Ano/Ne
4. Vrátnicová žíla: Ne / Oblouk ___ °  Okluze: Ne / Ano
5. VMH: Ne / Oblouk ___ °  Okluze: Ne / Ano

KLASIFIKACE RESEKABILITY [Isaji 2018]
Resekabilní: Bez kontaktu tepen; VMH/VP ≤180°, normální kontura
Hraničně resekabilní: VMH/VP >180° rekonstruovatelné NEBO AMS ≤180° NEBO AHC krátký segment
Lokálně pokročilý: AMS >180° NEBO truncus >180° NEBO nerekonstruovatelné VMH/VP
→ RESEKABILITA: Resekabilní / Hraničně resekabilní / Lokálně pokročilý`,
          abdomen: `MÍZNÍ UZLINY
Peripankreatické: Norm. / ___ mm  Celiakální/AMS: Norm. / ___ mm
Portokavální: Norm. / ___  Paraaortální: Norm. / ___ mm [M1]

VZDÁLENÉ
Játra: Bez mets / Mets — ___, ___ mm [M1]
Peritoneum: Ne / Ano — ___ [M1]  Ascites: Ne / Ano

BILIÁRNÍ
DCH: ___ mm  Stent: Ne / Ano — poloha ___  IJCH: Ne / Ano`,
          chest: `HRUDNÍK
Plicní mets: Ne / Ano [M1]  Pleura: Ne / Ano`,
          impression: `ZÁVĚR — STAGING KARCINOMU SLINIVKY
Masa: [lokalizace], ___ mm  Cévy: AMS ___ °, truncus ___ °, AHC ___ °, VP/VMH ___ °
Uzliny: Regionální N0/N1/N2 / Paraaortální [M1]  M: M0/M1
→ RESEKABILITA: Resekabilní / Hraničně resekabilní / Lokálně pokročilý
T___ N___ M___  Doporučení: [přímá operace / neoadjuvantní / paliativní]`,
        },
      },
      response: {
        evidence: "RECIST 1.1; NCCN 2024 restaging po neoadjuvantní léčbě; CT po léčbě Al-Hawary 2014",
        criticalFindings: ["Konverze na resekabilní", "Nové vzdálené mets", "Cévní odpověď", "Postléčebná pankreatitida"],
        searchEvidence: "Al-Hawary 2014 CT po neoadjuvantní léčbě; NCCN 2024 restaging; stabilní velikost ≠ selhání u PDAC",
        searchMismatch: "Samotný RECIST je u PDAC zavádějící. Kritická otázka: změnil se status resekability? Oblouk se může zmenšit bez změny velikosti. Vždy přehodnoťte všech pět cév.",
        criteria: "RECIST 1.1; cévní restaging NCCN 2024 — resekabilita je primárním cílem",
        searchPattern: [
          { step: 1, priority: "critical", title: "Předchozí cévní status — nejdříve přečíst", detail: "Jaké byly oblouky pěti cév? Jaká byla resekabilita? Výchozí bod pro restaging.", time: "60s" },
          { step: 2, priority: "critical", title: "Přehodnocení pěti cév", detail: "Oblouky ve stupních pro všechny. Zmenšil se některý? Ustoupila deformace? Primární ukazatel.", time: "90s" },
          { step: 3, priority: "critical", title: "Nejdříve nové vzdálené postižení", detail: "Nové jaterní mets nebo peritoneum = paliativní přechod. Zkontrolujte před masou.", time: "20s" },
          { step: 4, priority: "high", title: "Velikost masy — RECIST s výhradami", detail: "Změřte, ale kontextualizujte. Fibróza bez změny velikosti je běžná. Snížená denzita může = odpověď.", time: "30s" },
          { step: 5, priority: "high", title: "Stent + biliární systém", detail: "Poloha/funkce stentu. Nová dilatace IJCH.", time: "10s" },
          { step: 6, priority: "normal", title: "Komplikace", detail: "Postléčebná pankreatitida. Trombóza VP/VMH.", time: "15s" },
        ],
        template: {
          tumorSpecific: `CÉVNÍ RESTAGING [primární ukazatel — NCCN 2024]
Dříve: AMS ___ °, truncus ___ °, AHC ___ °, VP/VMH ___ °

PŘEHODNOCENÍ PĚTI CÉV
1. AMS: Dříve ___ ° → Aktuálně ___ °  Změna: Zmenšení/Stabilní/Nárůst  Kontura: Norm./Def.
2. Truncus/AHC: Dříve ___ ° → ___ °
3. VP/VMH: Dříve ___ ° → ___ °  Kontura: Norm./Zlepšena/Nezměněna
4. VP: Dříve ___ ° → ___ °   5. VMH: Dříve ___ ° → ___ °

Předchozí resekabilita: ___
→ AKTUÁLNÍ RESEKABILITA: Resekabilní / Hraničně / Lok. pokročilý / Neresekabilní (M1)
Změna: Downstaging na resekabilní / Na hraničně / Nezměněno / Progrese

VELIKOST MASY
Dříve ___ × ___ mm → Aktuálně ___ × ___ mm
Denzita: Nezměněna / Snížena (možná odpověď) / Heterogenní
Poznámka: Stabilní velikost ≠ selhání u PDAC

NOVÉ VZDÁLENÉ POSTIŽENÍ
Játra: Žádné nové / Nové ___  Peritoneum: Volné / Nová ___`,
          abdomen: `RECIST
Masa: Dříve ___ mm → ___ mm (Δ ___ %)
Další cíle: 1. ___ mm (dříve ___) Δ ___ %
Součet: ___ mm / Dříve ___  RECIST: CR/PR/SD/PD [velikost u PDAC nespolehlivá]
Paraaortální: Nepřítomny / Přítomny [M1]
Komplikace: Postléčebná pankreatitida: Ne/Ano — CTSI ___  Trombóza: Ne/Ano ___`,
          chest: `HRUDNÍK [H+B+P]
Plicní mets: Žádné nové / Nové ___`,
          impression: `ZÁVĚR — RESTAGING KARCINOMU SLINIVKY
RECIST: [PR/SD/PD]  Masa: ___ mm ([±]___ %)
Cévy: AMS ___ ° (dříve ___), truncus ___ ° (dříve ___), VP/VMH ___ ° (dříve ___)
→ RESEKABILITA: Downstaging — resekabilní / Hraničně / Nezměněno / Progrese (M1)
Doporučení: [přistoupit k operaci / prodloužit neoadjuvantní / MDT / paliativní]`,
        },
      },
    },
  },

  {
    id: "rcc",
    validExtents: ["ap", "cap"],
    en: {
      label: "Renal Cell Ca.",
      staging: {
        evidence: "TNM 8th (AJCC/UICC 2017); Neves IVC classification 1987 (levels I-IV); RENAL nephrometry score; EAU RCC guidelines 2024",
        criticalFindings: ["IVC thrombus level (Neves)", "Contralateral kidney", "Adrenal involvement", "Extension above diaphragm"],
        searchEvidence: "Neves 1987 IVC classification; EAU 2024 CT staging; Hallscheidt 2005 CT vs surgical IVC level",
        searchMismatch: "Most describe the mass then mention IVC thrombus. Critical error: IVC thrombus LEVEL (Neves I-IV) with precision determines if cardiac bypass is needed. Level IV = cardiothoracic surgeon required. Assess IVC from renal vein to RA before anything else.",
        classification: "TNM 8th (AJCC/UICC 2017); Neves IVC classification",
        searchPattern: [
          { step: 1, priority: "critical", title: "Renal Vein + IVC — Neves Level First", detail: "Invaded renal vein? If yes: trace UP IVC. I: below hepatic veins. II: to hepatic veins below diaphragm. III: above diaphragm below RA. IV: into RA (cardiac surgery). Level determines surgical team.", time: "45s" },
          { step: 2, priority: "critical", title: "Contralateral Kidney", detail: "Normal = safe radical nephrectomy. Absent/non-functioning/masses = nephron-sparing mandatory.", time: "15s" },
          { step: 3, priority: "critical", title: "Adrenal — Direct vs Metastatic", detail: "Direct invasion (contiguous = T4) vs separate nodule (M1). Changes T vs M stage.", time: "15s" },
          { step: 4, priority: "high", title: "Primary Tumour", detail: "Size, location, enhancement. RENAL nephrometry score.", time: "30s" },
          { step: 5, priority: "high", title: "Nodal + Distant", detail: "Retroperitoneal, hilar, para-aortic nodes. Liver. Bone (lytic). Lung bases.", time: "20s" },
          { step: 6, priority: "normal", title: "Chest (C+A+P)", detail: "Pulmonary metastases.", time: "15s" },
        ],
        template: {
          tumorSpecific: `PRIMARY RENAL MASS
Side: R / L  Location: Upper / Mid / Lower pole  Ant / Post / Mesial
Size: ___ × ___ × ___ mm  Enhancement: Homo / Hetero / Solid / Cystic
Bosniak [if cystic]: ___  Renal sinus fat: No / Yes [T3a]
Perinephric fat: No / Yes — ___ mm beyond capsule [T3a]  Gerota's: Intact / Breached [T4]
Adjacent organ: No / Yes — ___ [T4]

IVC THROMBUS [Neves — assess before staging]
Renal vein: Normal / Thrombus — extent ___  IVC: No / Yes
  NEVES: I (below hepatic veins) / II (to hepatic veins, below diaphragm)
         III (above diaphragm, below RA) / IV (in RA — cardiac surgery)
  → NEVES LEVEL: ___
Thrombus enhancement: No [bland] / Yes [tumour thrombus]
Contralateral renal vein: Patent / Thrombus

ADRENAL
Ipsilateral: Normal / Direct invasion [T4] / Separate nodule [M1] — ___ mm
Contralateral: Normal / Lesion ___`,
          abdomen: `LYMPH NODES
Hilar (ipsilateral): Normal / ___ mm  Retroperitoneal: Normal / ___ mm
Para-aortic/caval: Normal / ___

DISTANT
Liver: No / Yes ___  Contralateral kidney: Normal / [pathology — nephron-sparing]
Bone: No / Lytic — ___

T STAGE
T1a ≤4cm / T1b >4-7cm / T2a >7-10cm / T2b >10cm (all limited to kidney)
T3a: Renal vein OR perinephric/sinus fat  T3b: IVC below diaphragm (Neves I-II)
T3c: IVC above diaphragm or RA (Neves III-IV)  T4: Gerota's / ipsilateral adrenal direct
→ T___ N___ M___`,
          chest: `CHEST
Pulmonary mets: No / Yes ___  Mediastinal: Normal / ___`,
          impression: `IMPRESSION — RCC STAGING
Primary: [side, pole], ___ mm  IVC: No involvement / Neves Level ___ [cardiac if III-IV]
Adrenal: Not involved / Direct invasion T4 / Metastasis M1  Nodes: N0/N1
M: M0/M1  → Stage: T___ N___ M___
Contralateral kidney: Normal / [pathology — nephron-sparing required]`,
        },
      },
      response: {
        evidence: "RECIST 1.1; iRECIST 2017 for immunotherapy; EAU 2024; pseudo-progression in immunotherapy",
        criticalFindings: ["New IVC thrombus", "New bone mets (weight-bearing)", "Immunotherapy complications", "Bilateral adrenal"],
        searchEvidence: "Eisenhauer 2009; Seymour 2017 iRECIST; TKI: necrosis without size change is response",
        searchMismatch: "RCC on TKI often shows necrosis without size reduction — RECIST underestimates response. Always note density changes in addition to size. Immunotherapy: pseudo-progression possible.",
        criteria: "RECIST 1.1 (TKI); iRECIST (immunotherapy)",
        searchPattern: [
          { step: 1, priority: "critical", title: "Treatment Context", detail: "TKI (expect necrosis — density change = response), immunotherapy (pseudo-progression possible), mTOR.", time: "10s" },
          { step: 2, priority: "critical", title: "New IVC Thrombus / Level Extension", detail: "New or extended IVC thrombus = highest priority progression finding.", time: "20s" },
          { step: 3, priority: "critical", title: "New Bone Mets — Weight-Bearing", detail: "Femoral neck, vertebral body = impending fracture = orthopaedic urgency.", time: "20s" },
          { step: 4, priority: "high", title: "Target Lesions — Size + Density", detail: "RECIST size. PLUS density change (necrosis on TKI = response even if stable size).", time: "45s" },
          { step: 5, priority: "high", title: "Immunotherapy Complications", detail: "Nephritis (bilateral cortical changes), colitis, adrenalitis, thyroiditis.", time: "20s" },
          { step: 6, priority: "normal", title: "Chest", detail: "Pulmonary response.", time: "15s" },
        ],
        template: {
          tumorSpecific: `PRIMARY / NEPHRECTOMY BED
[Primary in situ]: Size: Prior ___ mm → ___ mm  Density: Unchanged / Increased necrosis [TKI response]
IVC thrombus: Prior level ___ → Current level ___ [extension = progression]
[Post-nephrectomy]: Bed: No recurrence / Recurrence — ___ mm

BONE METS [most common RCC progression site]
New lytic: No / Yes — ___ [weight-bearing: No / Yes — ortho urgency]
Known lesions: Stable / Progressed / Sclerotic response`,
          abdomen: `RECIST 1.1 / iRECIST
1. ___ current ___ mm (prior ___) Δ ___ %  Density: ___ HU (prior ___) Necrosis↑: No/Yes
2. ___ current ___ mm (prior ___) Δ ___ %
Sum: ___ mm / Prior ___  Change: ___ %  Response: CR/PR/SD/PD
[Immunotherapy: enlargement → iUPD, confirm at 4 weeks]

IMMUNOTHERAPY COMPLICATIONS
Nephritis: No / Yes — bilateral cortical change ___  Colitis: No / Yes ___
Adrenalitis: No / Yes — bilateral enlargement  Thyroiditis: No / Yes`,
          chest: `CHEST
Pulmonary: Stable / PR / PD  New: No / Yes ___
Pneumonitis: No / Yes — distribution ___`,
          impression: `IMPRESSION — RCC RESPONSE
Therapy: [TKI / Immunotherapy / Other]  Criteria: [RECIST 1.1 / iRECIST]
RECIST: [CR/PR/SD/PD]  Sum: ___ mm
IVC: Unchanged / Extended to Level ___ [progression]
New bone: No / Yes [weight-bearing: ortho consult]
Immunotherapy complications: None / [specify]
Response note: [necrosis on TKI = possible PR despite stable size]`,
        },
      },
    },
    cs: {
      label: "Karcinom ledviny (RCC)",
      staging: {
        evidence: "TNM 8. vydání; klasifikace trombu DDŽ Neves 1987 (stupně I–IV); RENAL skóre nefrometrie; guidelines EAU 2024",
        criticalFindings: ["Stupeň trombu DDŽ (Neves)", "Kontralaterální ledvina", "Postižení nadledviny", "Propagace nad bránici"],
        searchEvidence: "Klasifikace Neves 1987; staging CT EAU 2024; korelace CT a chirurgické úrovně Hallscheidt 2005",
        searchMismatch: "Většina popíše masu a zmíní trombus DDŽ. Kritická chyba: STUPEŇ trombu DDŽ (Neves I–IV) přesně určuje nutnost kardiálního bypassu. Stupeň IV = kardiochirurg. Hodnoťte DDŽ od renální žíly k pravé síni jako první.",
        classification: "TNM 8. vydání; klasifikace DDŽ dle Nevese",
        searchPattern: [
          { step: 1, priority: "critical", title: "Renální žíla + DDŽ — stupeň Neves jako první", detail: "Invaze renální žíly? Pokud ano: sledujte proximálně v DDŽ. I: pod jaterními žilami. II: k jaterním žilám, pod bránicí. III: nad bránicí pod pravou síní. IV: do pravé síně (kardiochirurgie). Stupeň určuje chirurgický tým.", time: "45s" },
          { step: 2, priority: "critical", title: "Kontralaterální ledvina", detail: "Normální = bezpečná radikální nefrektomie. Chybějící/nefunkční/expanze = nutná nefrony šetřící operace.", time: "15s" },
          { step: 3, priority: "critical", title: "Nadledvina — přímá invaze vs. metastáza", detail: "Přímá invaze (kontaktní = T4) vs. samostatný uzel (M1). Mění T vs. M stadium.", time: "15s" },
          { step: 4, priority: "high", title: "Primární tumor", detail: "Velikost, lokalizace, sycení. RENAL nefrometrické skóre.", time: "30s" },
          { step: 5, priority: "high", title: "Uzliny + vzdálené postižení", detail: "Retroperitoneální, hilové, paraaortální. Játra. Kosti (lytické). Baze plic.", time: "20s" },
          { step: 6, priority: "normal", title: "Hrudník (H+B+P)", detail: "Plicní metastázy.", time: "15s" },
        ],
        template: {
          tumorSpecific: `PRIMÁRNÍ RENÁLNÍ MASA
Strana: P/L  Lokalizace: Horní/Střední/Dolní pól  Přední/Zadní/Mesiální
Velikost: ___ × ___ × ___ mm  Sycení: Homo/Hetero/Solidní/Cystická
Bosniakova klas. [cystická]: ___  Tuk renálního sinu: Ne/Ano [T3a]
Perirenální tuk: Ne/Ano — ___ mm za pouzdrem [T3a]  Gerotova fascie: Intaktní/Porušena [T4]
Sousední orgán: Ne/Ano — ___ [T4]

TROMBUS DDŽ [Neves — hodnotit před stagingem]
Renální žíla: Normální / Trombus — rozsah ___  DDŽ: Ne / Ano
  NEVES: I (pod jaterními žilami) / II (k jaterním žilám, pod bránicí)
         III (nad bránicí, pod PS) / IV (v pravé síni — kardiochirurgie)
  → STUPEŇ NEVES: ___
Sycení trombu: Ne [blandní] / Ano [nádorový]
Kontralaterální renální žíla: Průchodná / Trombus

NADLEDVINY
Ipsilaterální: Normální / Přímá invaze [T4] / Samostatný uzel [M1] — ___ mm
Kontralaterální: Normální / Léze ___`,
          abdomen: `MÍZNÍ UZLINY
Hilové: Norm. / ___ mm  Retroperitoneální: Norm. / ___ mm
Paraaortální/parakaválně: Norm. / ___

VZDÁLENÉ
Játra: Ne / Ano ___  Kontralaterální ledvina: Normální / [patologie — nefrony šetřící]
Kosti: Ne / Lytická — ___

T STADIUM
T1a ≤4 cm / T1b >4–7 cm / T2a >7–10 cm / T2b >10 cm (vše omezeno na ledvinu)
T3a: Renální žíla NEBO perirenální/sinusový tuk  T3b: DDŽ pod bránicí (Neves I–II)
T3c: DDŽ nad bránicí nebo PS (Neves III–IV)  T4: Gerotova fascie / přímá invaze nadledviny
→ T___ N___ M___`,
          chest: `HRUDNÍK
Plicní mets: Ne / Ano ___  Mediastinální: Normální / ___`,
          impression: `ZÁVĚR — STAGING KARCINOMU LEDVINY
Primář: [strana, pól], ___ mm  DDŽ: Bez postižení / Neves stupeň ___ [kardiochirurgie při III–IV]
Nadledvina: Nepostižena / Přímá invaze T4 / Metastáza M1  Uzliny: N0/N1
M: M0/M1  → Stadium: T___ N___ M___
Kontralaterální ledvina: Normální / [patologie — nutná nefrony šetřící operace]`,
        },
      },
      response: {
        evidence: "RECIST 1.1; iRECIST 2017 pro imunoterapii; EAU 2024; pseudoprogrese při imunoterapii",
        criticalFindings: ["Nový trombus DDŽ", "Nové kostní mets (nosná kost)", "Komplikace imunoterapie", "Bilaterální nadledviny"],
        searchEvidence: "Eisenhauer 2009; Seymour 2017 iRECIST; TKI: nekróza bez změny velikosti = odpověď",
        searchMismatch: "RCC na TKI často vykazuje nekrózu bez zmenšení — RECIST podhodnocuje odpověď. Vždy uveďte změny denzity. Imunoterapie: možná pseudoprogrese.",
        criteria: "RECIST 1.1 (TKI); iRECIST (imunoterapie)",
        searchPattern: [
          { step: 1, priority: "critical", title: "Kontext léčby", detail: "TKI (očekávejte nekrózu — změna denzity = odpověď), imunoterapie (možná pseudoprogrese), inhibitor mTOR.", time: "10s" },
          { step: 2, priority: "critical", title: "Nový trombus DDŽ / propagace", detail: "Nový nebo rozšiřující se trombus DDŽ = nejvyšší priorita progrese.", time: "20s" },
          { step: 3, priority: "critical", title: "Nové kostní mets — nosná kost", detail: "Krček femuru, obratlové tělo = hrozící fraktura = ortopedická urgence.", time: "20s" },
          { step: 4, priority: "high", title: "Cílové léze — velikost + denzita", detail: "Velikost RECIST. PLUS změna denzity (nekróza při TKI = odpověď i při stabilní velikosti).", time: "45s" },
          { step: 5, priority: "high", title: "Komplikace imunoterapie", detail: "Nefritida (oboustranné kortikální změny), kolitida, adrenalitida, tyroiditida.", time: "20s" },
          { step: 6, priority: "normal", title: "Hrudník", detail: "Plicní odpověď.", time: "15s" },
        ],
        template: {
          tumorSpecific: `PRIMÁŘ / LŮŽKO PO NEFREKTOMII
[Primář in situ]: Vel.: Dříve ___ mm → ___ mm  Denzita: Nezměněna / Zvýšená nekróza [TKI]
DDŽ: Dříve stupeň ___ → Aktuálně stupeň ___ [propagace = progrese]
[Po nefrektomii]: Lůžko: Bez recidivy / Recidiva — ___ mm

KOSTNÍ METS [nejčastější místo progrese RCC]
Nové lytické: Ne / Ano — ___ [nosná kost: Ne / Ano — ortop. urgence]
Známé: Stabilní / Progredující / Sklerotická odpověď`,
          abdomen: `RECIST 1.1 / iRECIST
1. ___ aktuálně ___ mm (dříve ___) Δ ___ %  Denzita: ___ HU (dříve ___) Nekróza↑: Ne/Ano
2. ___ aktuálně ___ mm (dříve ___) Δ ___ %
Součet: ___ mm / Dříve ___  Změna: ___ %  Odpověď: CR/PR/SD/PD
[Imunoterapie: zvětšení → iUPD, potvrdit za 4 týdny]

KOMPLIKACE IMUNOTERAPIE
Nefritida: Ne / Ano — obostr. kortikální změny ___  Kolitida: Ne / Ano ___
Adrenalitida: Ne / Ano — obostr. zvětšení  Tyroiditida: Ne / Ano`,
          chest: `HRUDNÍK
Plicní: Stabilní / PR / PD  Nové: Ne / Ano ___
Pneumonitida: Ne / Ano — distribuce ___`,
          impression: `ZÁVĚR — ODPOVĚĎ KARCINOMU LEDVINY
Léčba: [TKI / Imunoterapie / Jiná]  Kritéria: [RECIST 1.1 / iRECIST]
RECIST: [CR/PR/SD/PD]  Součet: ___ mm
DDŽ: Nezměněno / Propagace na stupeň ___ [progrese]
Nové kostní mets: Ne / Ano [nosná kost: ortop. konzultace]
Komplikace: Žádné / [specifikovat]`,
        },
      },
    },
  },

  {
    id: "lymphoma",
    validExtents: ["cap", "ncap"],
    en: {
      label: "Lymphoma",
      staging: {
        evidence: "Lugano Classification 2014 (Cheson JCO 2014); Ann Arbor/Cotswolds; ESMO lymphoma guidelines 2023",
        criticalFindings: ["Mediastinal bulk >10cm", "Airway compromise", "Spinal cord compression", "Pericardial involvement"],
        searchEvidence: "Cheson 2014 Lugano CT criteria; Cotswolds Ann Arbor; ESMO 2023 CT protocol; bulk disease definition",
        searchMismatch: "Critical error: applying RECIST to lymphoma. RECIST is NOT used. Correct: Lugano criteria, SPD method, nodal territories. Also: assess ALL territories systematically, not just bulk disease.",
        classification: "Lugano 2014; Ann Arbor/Cotswolds staging",
        searchPattern: [
          { step: 1, priority: "critical", title: "Mediastinal Bulk + Airway", detail: ">10cm = bulk (worse prognosis, different RT). Tracheal compression — measure lumen. SVC compression. Pericardial involvement.", time: "20s" },
          { step: 2, priority: "critical", title: "All Nodal Territories — Systematic", detail: "Waldeyer's (if N+C), cervical, supraclavicular, axillary, mediastinal, hilar, coeliac, portal, splenic, mesenteric, para-aortic, iliac, inguinal. SA >10mm (>15mm mediastinal). Each territory.", time: "90s" },
          { step: 3, priority: "critical", title: "Spleen", detail: "Splenomegaly (>13cm CC). Focal lesions = Stage IV. Homogeneous vs nodular.", time: "15s" },
          { step: 4, priority: "high", title: "Extranodal Sites (E-lesions)", detail: "Bone, liver focal, lung, renal, other. Each = Stage IV.", time: "20s" },
          { step: 5, priority: "high", title: "Bulk Measurement", detail: "Single largest mass ×3 dimensions. >10cm = bulk (HL and DLBCL).", time: "15s" },
          { step: 6, priority: "normal", title: "Neck (N+C+A+P)", detail: "Cervical levels I-VI. Waldeyer's (not visible on CT — flag for PET).", time: "20s" },
        ],
        template: {
          tumorSpecific: `TYPE: ___  [HL / DLBCL / FL / MCL / Other ___]

MEDIASTINUM [assess first]
Mass: No / Yes — ___ × ___ × ___ mm  Bulk (>10cm): No / Yes
Tracheal lumen: ___ mm  SVC: Patent / Compressed — collaterals: No / Yes
Pericardium: No / Yes  Pleura: No / Yes — R/L

SPLEEN
Size (CC): ___ cm (normal ≤13)  Splenomegaly: No / Yes
Focal lesions: No / Yes — ___, ___

EXTRANODAL (E-lesions — each = Stage IV)
Bone: No / Yes — ___  Liver focal: No / Yes — ___
Lung: No / Yes — ___  Renal: No / Yes — ___  Other: ___`,
          abdomen: `ABDOMINAL/PELVIC NODAL TERRITORIES
Coeliac/Porta: No / Yes — ___ mm  Mesenteric: No / Yes — ___ mm
Para-aortic: No / Yes — ___ mm  Iliac: No / Yes — R ___ / L ___ mm
Inguinal: No / Yes — R ___ / L ___ mm

LIVER: Homo enlargement: No / Yes — ___ cm  Focal: No / Yes ___

ANN ARBOR / LUGANO STAGE
I: Single nodal region  II: ≥2 same side diaphragm  III: Both sides ± spleen
IV: Diffuse extranodal  X: Bulk >10cm  E: Contiguous extranodal
→ Stage: ___ [I/II/III/IV] [A/B]`,
          chest: `CHEST TERRITORIES
Mediastinal: [above]  Hilar R/L: No / Yes — ___ mm
Axillary: No / Yes — R ___ / L ___ mm  Internal mammary: No / Yes

LUNG
Nodules: No / Yes — pattern: peribronchial/subpleural/random
Consolidation: No / Yes  Pleural: [above]`,
          neck: `CERVICAL TERRITORIES [N+C+A+P]
Levels Ia/Ib: No/Yes ___  IIa/IIb: No/Yes ___  III: No/Yes ___
IV: No/Yes ___  V: No/Yes ___  VI: No/Yes ___
Supraclavicular: No / Yes ___
Waldeyer's: Not assessable on CT [PET/MRI required]`,
          impression: `IMPRESSION — LYMPHOMA STAGING
Type: ___  Nodal territories: [list]
Mediastinal bulk: No / Yes (___ cm)
Spleen: Normal / Enlarged / Focal  E-sites: None / [specify]
→ Lugano/Ann Arbor: ___ [A/B]  Bulk: Yes / No
Note: PET-CT required for definitive Lugano staging`,
        },
      },
      response: {
        evidence: "Lugano response criteria 2014 (Cheson JCO 2014); NOT RECIST; SPD method; ESMO 2023",
        criticalFindings: ["New disease sites", "Bulky residual mass", "Transformation signs", "Need for PET confirmation"],
        searchEvidence: "Cheson 2014 Lugano response CT; residual mediastinal mass HL = usually fibrosis; PET for definitive CR",
        searchMismatch: "RECIST not used. Lugano SPD for ≤6 nodes. Residual mediastinal mass in HL = usually fibrosis on CT — DO NOT call 'residual disease' without PET. CT cannot distinguish disease from fibrosis.",
        criteria: "Lugano response 2014 (NOT RECIST); SPD method; PET for CR confirmation",
        searchPattern: [
          { step: 1, priority: "critical", title: "Prior Report — Lugano Baseline", detail: "6 target nodes, their SPD, prior stage. Interim or end-of-treatment?", time: "60s" },
          { step: 2, priority: "critical", title: "New Disease Sites", detail: "New nodal territories or new extranodal sites = progression.", time: "30s" },
          { step: 3, priority: "critical", title: "Mediastinal Residual — Do Not Overcall", detail: "Up to 80% of HL have residual CT mass after treatment — usually fibrosis. Cannot distinguish on CT. Flag for PET.", time: "20s" },
          { step: 4, priority: "high", title: "SPD — 6 Target Nodes", detail: "Longest × perpendicular for each. Sum. CR: all <1.5cm AND SPD ≥75% decrease. PR: ≥50% decrease.", time: "60s" },
          { step: 5, priority: "high", title: "Extranodal + Spleen Response", detail: "E-sites resolved/decreased/stable/increased. Spleen size change.", time: "20s" },
          { step: 6, priority: "normal", title: "Treatment Complications", detail: "Post-RT changes. Opportunistic infections.", time: "15s" },
        ],
        template: {
          tumorSpecific: `RESPONSE CONTEXT
Timing: Interim (after ___ cycles) / End of treatment  Prior SPD: ___ mm²

MEDIASTINAL RESIDUAL [do NOT overcall — PET required]
Prior: ___ × ___ mm  Current: ___ × ___ mm
Character: Soft tissue / Likely fibrotic (low density)
→ CT interpretation: Possible residual / Likely fibrosis — PET-CT for definitive CR

SPLEEN: Prior ___ cm → Current ___ cm  Focal: Prior ___ / Current ___

NEW DISEASE: New territories: No / Yes ___  New E-sites: No / Yes ___`,
          abdomen: `LUGANO SPD — 6 TARGET NODES [longest × perpendicular]
1. ___ current ___ × ___ mm = ___ mm² (prior ___)
2. ___ current ___ × ___ mm = ___ mm² (prior ___)
3. ___ current ___ × ___ mm = ___ mm² (prior ___)
4. ___ current ___ × ___ mm = ___ mm² (prior ___)
5. ___ current ___ × ___ mm = ___ mm² (prior ___)
6. ___ current ___ × ___ mm = ___ mm² (prior ___)
SPD: ___ mm² (prior ___)  Change: ___ %  (CR threshold ≥75%; PR ≥50%)

NON-MEASURABLE: Resolved / Decreased / Stable / Increased
EXTRANODAL: Bone: ___  Liver focal: ___  Other: ___

LUGANO CT RESPONSE
CT CR: All nodes <1.5cm AND SPD ≥75% AND no new lesions
CT PR: SPD ≥50% decrease
CT SD: Neither  CT PD: SPD ≥50% increase OR new lesion
→ CT response: ___  Note: definitive CR requires PET (Deauville 1-2)`,
          chest: `CHEST
Mediastinal: [tumour-specific]  Hilar: Resolved / Residual ___
Lung: Cleared / Residual ___  Post-RT: No / Yes ___`,
          neck: `NECK [N+C+A+P]
Cervical: Resolved / Residual — level ___, ___ mm`,
          impression: `IMPRESSION — LYMPHOMA RESPONSE
Timing: [Interim / End of treatment]
SPD: ___ mm² (prior ___, ___ % change)  CT response: [CR/PR/SD/PD]
Residual mediastinal: No / Yes [likely fibrosis / PET required]
New disease: None / [specify]
PET-CT: Recommended for definitive response assessment`,
        },
      },
    },
    cs: {
      label: "Lymfom",
      staging: {
        evidence: "Luganská klasifikace 2014 (Cheson JCO 2014); Ann Arbor/Cotswolds; guidelines ESMO 2023",
        criticalFindings: ["Bulky mediastinum >10 cm", "Kompromitace dýchacích cest", "Komprese míchy", "Postižení perikardu"],
        searchEvidence: "Cheson 2014 Lugano CT kritéria; Cotswolds; ESMO 2023 CT protokol",
        searchMismatch: "Kritická chyba: aplikace RECIST na lymfom. RECIST se NEPOUŽÍVÁ. Správně: Luganská kritéria, metoda SPD, uzlinová teritoria. Systematicky hodnoťte VŠECHNA teritoria.",
        classification: "Lugano 2014; Ann Arbor/Cotswolds",
        searchPattern: [
          { step: 1, priority: "critical", title: "Mediastinální bulky + dýchací cesty", detail: ">10 cm = bulky. Komprese trachey — změřte průsvit. Komprese HDŽ. Postižení perikardu.", time: "20s" },
          { step: 2, priority: "critical", title: "Všechna uzlinová teritoria — systematicky", detail: "Waldeyerův okruh (K+H), cervikální, supraklavikulární, axilární, mediastinální, hilové, celiakální, portální, splenické, mezenteriální, paraaortální, ilické, inguinální. KO >10 mm (>15 mm mediastinálně).", time: "90s" },
          { step: 3, priority: "critical", title: "Slezina", detail: "Splenomegalie (>13 cm KK). Fokální léze = stadium IV. Homogenní vs. nodulární.", time: "15s" },
          { step: 4, priority: "high", title: "Extranodální místa (E-léze)", detail: "Kosti, fokální játra, plíce, ledviny, jiné. Každé = stadium IV.", time: "20s" },
          { step: 5, priority: "high", title: "Měření bulky", detail: "Jedna největší masa ×3 rozměry. >10 cm = bulky (HL a DLBCL).", time: "15s" },
          { step: 6, priority: "normal", title: "Krk (K+H+B+P)", detail: "Cervikální úrovně I–VI. Waldeyerův okruh (na CT neviditelný — upozornit na PET).", time: "20s" },
        ],
        template: {
          tumorSpecific: `TYP: ___  [HL / DLBCL / FL / MCL / Jiný ___]

MEDIASTINUM [hodnotit jako první]
Masa: Ne / Ano — ___ × ___ × ___ mm  Bulky (>10 cm): Ne / Ano
Průsvit trachey: ___ mm  HDŽ: Průchodná / Komprimovaná — kolaterály: Ne / Ano
Perikard: Ne / Ano  Pleura: Ne / Ano — vpravo/vlevo

SLEZINA
Vel. (KK): ___ cm (norma ≤13)  Splenomegalie: Ne / Ano
Fokální léze: Ne / Ano — ___, ___

EXTRANODÁLNÍ (E-léze — každé = stadium IV)
Kosti: Ne / Ano — ___  Fokální játra: Ne / Ano — ___
Plíce: Ne / Ano — ___  Ledviny: Ne / Ano — ___  Jiné: ___`,
          abdomen: `BŘIŠNÍ/PÁNEVNÍ UZLINOVÁ TERITORIA
Celiakální/Porta: Ne / Ano — ___ mm  Mezenteriální: Ne / Ano — ___ mm
Paraaortální: Ne / Ano — ___ mm  Ilické: Ne / Ano — P ___ / L ___ mm
Inguinální: Ne / Ano — P ___ / L ___ mm

JÁTRA: Homog. zvětšení: Ne / Ano — ___ cm  Fokální: Ne / Ano ___

STAGINGOVÁ KLASIFIKACE ANN ARBOR / LUGANO
I: Jedno teritorium  II: ≥2 stejná strana bránice  III: Obě strany ± slezina
IV: Difuzní extranodální  X: Bulky >10 cm  E: Sousedící extranodální
→ Stadium: ___ [I/II/III/IV] [A/B]`,
          chest: `HRUDNÍ TERITORIA
Mediastinální: [výše]  Hilové P/L: Ne / Ano — ___ mm
Axilární: Ne / Ano — P ___ / L ___ mm  Parasternální: Ne / Ano

PLÍCE
Uzlíky: Ne / Ano — vzorec: peribronchiální/subpleurální/náhodný
Konsolidace: Ne / Ano  Pleura: [výše]`,
          neck: `CERVIKÁLNÍ TERITORIA [K+H+B+P]
Úrovně Ia/Ib: Ne/Ano ___  IIa/IIb: Ne/Ano ___  III: Ne/Ano ___
IV: Ne/Ano ___  V: Ne/Ano ___  VI: Ne/Ano ___
Supraklavikulárně: Ne / Ano ___
Waldeyerův okruh: Na CT nehodnotitelný [nutné PET/MRI]`,
          impression: `ZÁVĚR — STAGING LYMFOMU
Typ: ___  Uzlinová teritoria: [seznam]
Mediastinální bulky: Ne / Ano (___ cm)
Slezina: Norm. / Zvětšena / Fokální postižení  E-místa: Žádná / [specifikovat]
→ Lugano/Ann Arbor: ___ [A/B]  Bulky: Ano / Ne
Poznámka: Pro definitivní staging nutné PET-CT`,
        },
      },
      response: {
        evidence: "Luganská kritéria odpovědi 2014 (Cheson JCO 2014); NE RECIST; metoda SPD; ESMO 2023",
        criticalFindings: ["Nová místa onemocnění", "Bulky reziduální masa", "Nutnost PET potvrzení"],
        searchEvidence: "Cheson 2014 Lugano odpověď CT; reziduální masa HL = obvykle fibróza; PET pro definitivní CR",
        searchMismatch: "RECIST se nepoužívá. Lugano SPD pro ≤6 uzlin. Reziduální mediastinální masa u HL = obvykle fibróza — NENAZVĚTE 'reziduální onemocnění' bez PET.",
        criteria: "Luganská kritéria odpovědi 2014 (NE RECIST); metoda SPD; PET pro potvrzení CR",
        searchPattern: [
          { step: 1, priority: "critical", title: "Předchozí protokol — výchozí stav Lugano", detail: "6 cílových uzlin, jejich SPD, předchozí stadium. Interim nebo závěrečné?", time: "60s" },
          { step: 2, priority: "critical", title: "Nová místa onemocnění", detail: "Nová uzlinová teritoria nebo nová extranodální místa = progrese.", time: "30s" },
          { step: 3, priority: "critical", title: "Mediastinální reziduum — nepřehodnoťte", detail: "Až 80 % HL má reziduální CT masu po léčbě — obvykle fibróza. Na CT nelze odlišit. Doporučte PET.", time: "20s" },
          { step: 4, priority: "high", title: "SPD — 6 cílových uzlin", detail: "Nejdelší × kolmý pro každou. Součet. CR: všechny <1,5 cm A SPD ≥75 %. PR: ≥50 %.", time: "60s" },
          { step: 5, priority: "high", title: "Extranodální + slezina", detail: "E-místa ustoupila/zmenšila/stabilní/zvětšila. Změna sleziny.", time: "20s" },
          { step: 6, priority: "normal", title: "Komplikace léčby", detail: "Změny po RT. Oportunní infekce.", time: "15s" },
        ],
        template: {
          tumorSpecific: `KONTEXT ODPOVĚDI
Načasování: Interim (po ___ cyklech) / Závěrečné  Předchozí SPD: ___ mm²

MEDIASTINÁLNÍ REZIDUUM [nepřehodnoťte — nutné PET]
Dříve: ___ × ___ mm  Aktuálně: ___ × ___ mm
Charakter: Měkkotkáňový / Pravděpodobně fibrotický (nízká denzita)
→ CT interpretace: Možné reziduum / Pravděpodobně fibróza — PET-CT pro CR

SLEZINA: Dříve ___ cm → Aktuálně ___ cm  Fokální: Dříve ___ / Aktuálně ___

NOVÁ ONEMOCNĚNÍ: Nová teritoria: Ne / Ano ___  Nová E-místa: Ne / Ano ___`,
          abdomen: `LUGANSKÉ SPD — 6 CÍLOVÝCH UZLIN [nejdelší × kolmý]
1. ___ aktuálně ___ × ___ mm = ___ mm² (dříve ___)
2. ___ aktuálně ___ × ___ mm = ___ mm² (dříve ___)
3. ___ aktuálně ___ × ___ mm = ___ mm² (dříve ___)
4. ___ aktuálně ___ × ___ mm = ___ mm² (dříve ___)
5. ___ aktuálně ___ × ___ mm = ___ mm² (dříve ___)
6. ___ aktuálně ___ × ___ mm = ___ mm² (dříve ___)
SPD: ___ mm² (dříve ___)  Změna: ___ %  (práh CR ≥75 %; PR ≥50 %)

NEMEASURABLE: Ustoupily / Zmenšily / Stabilní / Zvětšily
EXTRANODÁLNÍ: Kosti: ___  Fokální játra: ___  Jiné: ___

LUGANSKÁ CT ODPOVĚĎ
CT CR: Všechny <1,5 cm A SPD ≥75 % A bez nových
CT PR: SPD ≥50 % pokles  CT SD: Ani jedno  CT PD: SPD ≥50 % nárůst NEBO nová léze
→ CT odpověď: ___  Poznámka: definitivní CR vyžaduje PET (Dewauville 1–2)`,
          chest: `HRUDNÍK
Mediastinální: [specifická část]  Hilové: Ustoupily / Reziduální ___
Plíce: Ustoupily / Reziduální ___  Po RT: Ne / Ano ___`,
          neck: `KRK [K+H+B+P]
Cervikální: Ustoupily / Reziduální — úroveň ___, ___ mm`,
          impression: `ZÁVĚR — ODPOVĚĎ LYMFOMU
Načasování: [Interim / Závěrečné]
SPD: ___ mm² (dříve ___, ___ % změna)  CT odpověď: [CR/PR/SD/PD]
Reziduální mediastinum: Ne / Ano [pravděpodobně fibróza / nutné PET]
Nové onemocnění: Žádné / [specifikovat]
PET-CT: Doporučeno pro definitivní hodnocení odpovědi`,
        },
      },
    },
  },
];
