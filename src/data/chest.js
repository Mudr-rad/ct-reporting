export const CHEST_TEMPLATES = [
  {
    id: "pe",
    category: "chest",
    en: {
      label: "Pulmonary Embolism",
      evidence: "ESC PE Guidelines 2019; PIOPED II (Stein et al. NEJM 2006); RV/LV ratio — Quiroz 2004; Qanadli obstruction index",
      criticalFindings: ["Saddle embolus", "RV strain (RV/LV >1)", "Right heart thrombus", "Pulmonary infarction"],
      searchEvidence: "Stein PIOPED II 2006 — CT-PA accuracy; Quiroz 2004 RV/LV mortality prediction; ESC 2019 imaging algorithm",
      searchMismatch: "Most radiologists report PE then incidentals. Critical error: RV/LV ratio must be assessed IMMEDIATELY after PE confirmation — determines high/intermediate/low risk and thrombolysis decision.",
      searchPattern: [
        { step: 1, priority: "critical", title: "Pulmonary Arteries — Systematic", detail: "Main PA → right/left PA → lobar → segmental → subsegmental. Filling defect: complete vs partial. Note most proximal level. Saddle = highest risk.", time: "60s" },
        { step: 2, priority: "critical", title: "RV Strain — Immediately After PE Confirmed", detail: "Four-chamber axial: RV/LV ratio at widest point. >1.0 = dilation. >1.5 = severe. IVS bowing left = elevated RV pressure. Right heart thrombus. IVC/hepatic reflux.", time: "30s" },
        { step: 3, priority: "critical", title: "Qanadli Obstruction Index", detail: "Obstructed vessels out of 40 (2 pts complete, 1 pt partial). >40% correlates with haemodynamic compromise.", time: "20s" },
        { step: 4, priority: "high", title: "Pulmonary Infarction", detail: "Hampton's hump (peripheral wedge consolidation). Ipsilateral pleural effusion.", time: "20s" },
        { step: 5, priority: "high", title: "DVT Signs", detail: "IVC, iliac veins for thrombus. Main PA diameter >29mm = chronic PH.", time: "15s" },
        { step: 6, priority: "normal", title: "Lung Parenchyma + Mediastinum", detail: "Incidental nodules (apply Fleischner), consolidation, mass.", time: "30s" },
      ],
      template: `CT PULMONARY ANGIOGRAPHY — PULMONARY EMBOLISM
Indication: [suspected PE, Wells ___, D-dimer ___]
Technique: CT-PA (bolus tracking)

PULMONARY EMBOLISM
PE confirmed: No / Yes
  Main PA: No / Yes — R / L / Saddle [CRITICAL]
  Lobar: No / Yes — R upper / R middle / R lower / L upper / L lower
  Segmental: No / Yes — ___
  Subsegmental: No / Yes — ___
Most proximal level: Main PA / Lobar / Segmental / Subsegmental
Acute (central) / Chronic (eccentric, wall-adherent, webs)

QANADLI: ___ /40 = ___ %

RV STRAIN [assess immediately after PE confirmed]
RV: ___ mm  LV: ___ mm  RV/LV ratio: ___
  (<1.0 normal; >1.0 dilation; >1.5 severe)
IVS bowing left: No / Yes
Right heart thrombus: No / Yes — location ___
IVC/hepatic reflux: No / Yes
Main PA: ___ mm (>29mm = chronic PH)

ESC 2019 RISK
High: Haemodynamic instability + any PE
Intermediate-high: RV dysfunction (CT) + biomarkers +
Intermediate-low: RV dysfunction OR biomarkers (not both)
Low: None
→ CT-based risk: ___

PULMONARY INFARCTION
Hampton's hump: No / Yes — location ___
Pleural effusion: No / Yes — R / L — volume ___

LUNG PARENCHYMA
Consolidation: No / Yes  Nodules: No / Yes → [Fleischner]
Pleural: No / R / L / Bilateral

IMPRESSION
[Acute / Chronic / No] PE. Level: [most proximal]
Bilateral: Yes / No  Saddle: Yes / No
RV/LV: ___  RV strain: Absent / Present
ESC risk (CT): [High / Intermediate / Low]`,
    },
    cs: {
      label: "Plicní embolie",
      evidence: "Guidelines ESC pro PE 2019; PIOPED II (Stein et al. NEJM 2006); RV/LV ratio — Quiroz 2004; Qanadliho obstrukční index",
      criticalFindings: ["Sedlová embolie", "Přetížení pravé komory (RV/LV >1)", "Trombus v pravostranných srdečních oddílech", "Plicní infarkt"],
      searchEvidence: "Stein PIOPED II 2006 — přesnost CT-PA; predikce mortality RV/LV ratio Quiroz 2004; zobrazovací algoritmus ESC 2019",
      searchMismatch: "Většina radiologů popíše PE a pak přejde na vedlejší nálezy. Kritická chyba: poměr RV/LV musí být hodnocen OKAMŽITĚ po potvrzení PE — určuje vysoké/střední/nízké riziko a rozhodnutí o trombolýze.",
      searchPattern: [
        { step: 1, priority: "critical", title: "Plicní tepny — systematicky", detail: "Hlavní plicní tepna → pravostranné/levostranné → lobární → segmentární → subsegmentární. Výplňový defekt: kompletní vs. parciální. Zaznamejte nejproximalnejší úroveň. Sedlová embolie = nejvyšší riziko.", time: "60s" },
        { step: 2, priority: "critical", title: "Přetížení PK — okamžitě po potvrzení PE", detail: "Axiální čtyřdutinová projekce: poměr PK/LK v nejširším místě. >1,0 = dilatace. >1,5 = závažné přetížení. Vybočení septa vlevo = zvýšený tlak v PK. Trombus v pravých srdečních oddílech. Reflux kontrastu do DDŽ/jaterních žil.", time: "30s" },
        { step: 3, priority: "critical", title: "Qanadliho obstrukční index", detail: "Počet obstruovaných cév z 40 (2 body za kompletní, 1 bod za parciální). >40 % koreluje s hemodynamickým kompromisem.", time: "20s" },
        { step: 4, priority: "high", title: "Plicní infarkt", detail: "Hamptonův hrb (periferní klínovitá konsolidace). Ipsilaterální pleurální výpotek.", time: "20s" },
        { step: 5, priority: "high", title: "Příznaky HŽT", detail: "DDŽ, ilické žíly — trombus. Průměr hlavní plicní tepny >29 mm = chronická plicní hypertenze.", time: "15s" },
        { step: 6, priority: "normal", title: "Plicní parenchym + mediastinum", detail: "Incidentální uzliny (aplikovat Fleischnerova doporučení), konsolidace, masa.", time: "30s" },
      ],
      template: `CT PULMONÁLNÍ ANGIOGRAFIE — PLICNÍ EMBOLIE
Indikace: [podezření na PE, Wellsovo skóre ___, D-dimery ___]
Technika: CT-PA (bolus tracking)

NÁLEZ

Plicní embolie
PE potvrzena: Ne / Ano
  Hlavní plicní tepna: Ne / Ano — vpravo / vlevo / Sedlová [KRITICKÝ NÁLEZ]
  Lobární větve: Ne / Ano — pravý horní / pravý střední / pravý dolní / levý horní / levý dolní
  Segmentární větve: Ne / Ano — ___
  Subsegmentární větve: Ne / Ano — ___
Nejproximalnejší úroveň: Hlavní tepna / Lobární / Segmentární / Subsegmentární
Akutní (centrální výplňový defekt) / Chronická (excentrická, adherující ke stěně, septa)

Qanadliho index: ___ /40 = ___ %

Přetížení pravé komory [hodnotit okamžitě po potvrzení PE]
Průměr PK: ___ mm  Průměr LK: ___ mm  Poměr PK/LK: ___
  (<1,0 normální; >1,0 dilatace; >1,5 závažné přetížení)
Vybočení mezikomorového septa vlevo: Ne / Ano
Trombus v pravostranných srdečních oddílech: Ne / Ano — lokalizace ___
Reflux kontrastu do DDŽ/jaterních žil: Ne / Ano
Hlavní plicní tepna: ___ mm (>29 mm = chronická plicní hypertenze)

Stratifikace rizika dle ESC 2019
Vysoké: Hemodynamická nestabilita + jakákoli PE
Středně vysoké: Dysfunkce PK (CT) + pozitivní biomarkery
Středně nízké: Dysfunkce PK NEBO biomarkery (nikoli obojí)
Nízké: Žádné z výše uvedeného
→ CT příspěvek ke stratifikaci rizika: ___

Plicní infarkt
Hamptonův hrb: Ne / Ano — lokalizace ___
Pleurální výpotek: Ne / Ano — vpravo / vlevo — množství ___

Plicní parenchym
Konsolidace: Ne / Ano  Uzliny: Ne / Ano → [Fleischnerova doporučení]
Pleurální nález: Ne / Vpravo / Vlevo / Oboustranně

ZÁVĚR
[Akutní / Chronická / Bez průkazu] plicní embolie.
Nejproximalnejší úroveň: [___]  Oboustranná: Ano / Ne  Sedlová: Ano / Ne
Poměr PK/LK: ___  Přetížení PK: Nepřítomno / Přítomno
Stratifikace rizika (CT): [Vysoké / Střední / Nízké]`,
    },
  },

  {
    id: "aorta",
    category: "chest",
    en: {
      label: "Aortic Emergency",
      evidence: "Stanford/DeBakey classification; ESC Aortic Guidelines 2023; Penn Classification (Lombardi 2009); ADD-RS",
      criticalFindings: ["Type A dissection", "Malperfusion", "Rupture / tamponade", "Haemothorax"],
      searchEvidence: "Lombardi 2009 Penn classification; ESC 2014 search sequence; Clough 2012 malperfusion CT signs",
      searchMismatch: "CRITICAL: searching chest then abdomen. Correct: classify Type A vs B FIRST, then trace extent, THEN malperfusion. Malperfusion drives mortality — most missed finding.",
      searchPattern: [
        { step: 1, priority: "critical", title: "Type A vs B — Immediate", detail: "Does flap involve ascending aorta (proximal to innominate)? Any involvement = Type A = emergency surgery. Binary decision in first 30 seconds.", time: "20s" },
        { step: 2, priority: "critical", title: "Rupture / Tamponade Signs", detail: "Haemopericardium. Haemothorax. Periaortic haematoma. Mediastinal haematoma. Any = impending rupture = immediate surgical notification.", time: "20s" },
        { step: 3, priority: "critical", title: "Trace Dissection Extent", detail: "Where does flap begin/end? True lumen (smaller, anterolateral, higher density). Which major vessels from true vs false lumen?", time: "60s" },
        { step: 4, priority: "critical", title: "Malperfusion — Most Missed", detail: "Brain (ICA), spinal cord (intercostal), mesenteric (SMA/coeliac), renal (asymmetric nephrogram), limb (iliac). Low-density bowel, renal cortical defects.", time: "45s" },
        { step: 5, priority: "high", title: "Aortic Measurements", detail: "Sinuses of Valsalva, sinotubular junction, mid-ascending, arch, descending T4/T8/T12, abdominal.", time: "30s" },
        { step: 6, priority: "normal", title: "Cardiac + Other", detail: "Coronary ostia (Type A). Aortic valve. Incidentals.", time: "20s" },
      ],
      template: `CTA CHEST/ABDOMEN — AORTIC EMERGENCY
Indication: [tearing pain / suspected dissection]
Technique: Non-contrast + arterial (ECG-gated if available) + portal venous

CLASSIFICATION
Stanford: A (ascending — surgical emergency) / B (descending only)
DeBakey: I / II / III
Type: Classic dissection / IMH / PAU

RUPTURE SIGNS [before detailed analysis]
Haemopericardium: No / Yes — volume ___
Haemothorax: No / Yes — R / L
Periaortic haematoma: No / Yes
Mediastinal haematoma: No / Yes

PENN CLASS [Lombardi 2009]
A: No malperfusion  B: Peripheral malperfusion
C: Visceral malperfusion  BC: Both
→ Class: ___

DISSECTION
Intimal flap: Identified / Not identified
Entry tear: Location ___, size ___ mm
IMH: No / Yes — max thickness ___ mm
PAU: No / Yes — location ___, depth ___

TRUE / FALSE LUMEN
True: [anterolateral / compressed / higher density]
False lumen thrombosis: Complete / Partial / Patent

EXTENT
Proximal: ___  Distal: ___
Major vessels — T (true) or F (false):
  Innominate: T/F  LCCA: T/F  LSC: T/F
  Coeliac: T/F  SMA: T/F  R renal: T/F  L renal: T/F
  R iliac: T/F  L iliac: T/F

MALPERFUSION [highest priority after classification]
Brain: No / Yes — ___  Spinal cord: No / Yes — ___
Mesenteric: No / Yes — ___  Renal: No / Yes — ___
Limb: No / Yes — ___

MEASUREMENTS
Sinuses: ___ mm  STJ: ___ mm  Mid-ascending: ___ mm
Arch: ___ mm  Desc T4: ___ mm  At diaphragm: ___ mm
Max: ___ mm at ___

IMPRESSION
Stanford Type [A/B] [dissection/IMH/PAU].
Rupture signs: [specify]  Penn: ___
Malperfusion: None / [specify]
Entry tear: ___  Extent: ___
Urgency: EMERGENCY TYPE A / URGENT TYPE B`,
    },
    cs: {
      label: "Akutní onemocnění aorty",
      evidence: "Stanfordská/DeBakeyho klasifikace; guidelines ESC pro aortu 2023; Pennova klasifikace (Lombardi 2009); ADD-RS",
      criticalFindings: ["Disekce typu A", "Malperúze orgánů", "Ruptura / tamponáda", "Hemotorax"],
      searchEvidence: "Pennova klasifikace Lombardi 2009; systematika ESC 2014; CT příznaky malperúze Clough 2012",
      searchMismatch: "KRITICKÉ: hodnocení hrudníku a pak břicha. Správně: nejdříve klasifikace typ A vs. B, pak rozsah, a POTÉ malperúze. Malperúze orgánů je hlavní determinantou mortality — nejčastěji přehlížený nález.",
      searchPattern: [
        { step: 1, priority: "critical", title: "Typ A vs. B — okamžitě", detail: "Zasahuje intimální chlopeň vzestupnou aortu (proximálně od truncus brachiocephalicus)? Jakékoli postižení = typ A = emergentní kardiochirurgie. Binární rozhodnutí do 30 sekund.", time: "20s" },
        { step: 2, priority: "critical", title: "Příznaky ruptury / tamponády", detail: "Hemoperikard. Hemotorax. Periortální hematom. Mediastinální hematom. Cokoli z toho = hrozící ruptura = okamžitá notifikace chirurga.", time: "20s" },
        { step: 3, priority: "critical", title: "Sledování rozsahu disekce", detail: "Kde intimální chlopeň začíná/končí? Pravé lumen (menší, anterolaterální, vyšší denzita). Které velké cévy odstupují z pravého vs. falešného lumenu?", time: "60s" },
        { step: 4, priority: "critical", title: "Malperúze orgánů — nejčastěji přehlížený nález", detail: "Mozek (ICA), mícha (mezižeberní tepny), mezenterium (AMS/truncus coeliacus), ledviny (asymetrická nefrogramová fáze), dolní končetiny (ilické tepny). Hypodenzní střevo, kortikální defekty ledvin.", time: "45s" },
        { step: 5, priority: "high", title: "Měření aorty", detail: "Sinus aorty, sinotubulární přechod, vzestupná aorta, oblouk, sestupná aorta na úrovni Th4/Th8/Th12, abdominální úsek.", time: "30s" },
        { step: 6, priority: "normal", title: "Srdce + doplňkový nález", detail: "Koronární odstupy (typ A). Aortální chlopeň. Incidentální nálezy.", time: "20s" },
      ],
      template: `CTA HRUDNÍKU/BŘICHA — AKUTNÍ ONEMOCNĚNÍ AORTY
Indikace: [trhavá bolest / podezření na disekci aorty]
Technika: Nativní + arteriální fáze (EKG-gated pokud dostupné) + portální fáze

NÁLEZ

Klasifikace
Stanford: A (vzestupná aorta — emergentní kardiochirurgie) / B (pouze sestupná)
DeBakey: I / II / III
Typ: Klasická disekce / Intramurální hematom (IMH) / Penetrující aortální vřed (PAV)

Příznaky ruptury [hodnotit před detailní analýzou]
Hemoperikard: Ne / Ano — množství ___
Hemotorax: Ne / Ano — vpravo / vlevo
Periortální hematom: Ne / Ano
Mediastinální hematom: Ne / Ano

Pennova klasifikace [Lombardi 2009]
A: Bez malperúze  B: Periferní malperúze (končetiny/ledviny/mezenterium)
C: Viscerální malperúze (mozek/srdce/mícha)  BC: Obojí
→ Třída: ___

Disekce / IMH / PAV
Intimální chlopeň: Identifikována / Neidentifikována
Vstupní trhlina: Lokalizace ___, velikost ___ mm
IMH: Ne / Ano — maximální tloušťka ___ mm
PAV: Ne / Ano — lokalizace ___, hloubka ___

Pravé a falešné lumen
Pravé lumen: [anterolaterální / komprimované / vyšší denzita]
Trombóza falešného lumenu: Kompletní / Parciální / Průchodné

Rozsah
Proximálně: ___  Distálně: ___
Velké cévy — pravé (P) nebo falešné (F) lumen:
  Tr. brachiocephalicus: P/F  L. karotida: P/F  L. subklavia: P/F
  Truncus coeliacus: P/F  AMS: P/F  Pravá renální: P/F  Levá renální: P/F
  Pravá ilická: P/F  Levá ilická: P/F

Malperúze orgánů [nejvyšší priorita po klasifikaci]
Mozek: Ne / Ano — ___  Mícha: Ne / Ano — ___
Mezenterium: Ne / Ano — ___  Ledviny: Ne / Ano — ___
Dolní končetiny: Ne / Ano — ___

Měření aorty
Sinus aorty: ___ mm  Sinotubulární přechod: ___ mm  Vzestupná aorta: ___ mm
Oblouk: ___ mm  Sestupná na Th4: ___ mm  Na bránici: ___ mm
Maximum: ___ mm v oblasti ___

ZÁVĚR
Stanfordský typ [A/B] [disekce/IMH/PAV].
Příznaky ruptury: [specifikovat]  Pennova třída: ___
Malperúze: Žádná / [specifikovat orgány]
Vstupní trhlina: ___  Rozsah: ___
Naléhavost: EMERGENTNÍ TYP A — kardiochirurgie / URGENTNÍ TYP B — vaskulární chirurgie/IR`,
    },
  },

  {
    id: "pneumonia",
    category: "chest",
    en: {
      label: "Pneumonia / Infection",
      evidence: "ATS/IDSA CAP Guidelines 2019; Hansell 2008 HRCT nomenclature; Fleischner OP guidelines 2014",
      criticalFindings: ["Lung abscess", "Empyema", "Necrotising pneumonia", "Septic emboli"],
      searchEvidence: "Hansell 2008 — HRCT nomenclature; ATS/IDSA 2019 CT role in CAP; Tarver 1996 systematic HRCT search",
      searchMismatch: "Most describe consolidation then read the rest. Correct: characterise DISTRIBUTION first — lobar/segmental vs bilateral GGO vs centrilobular nodules — because this drives the aetiological differential.",
      searchPattern: [
        { step: 1, priority: "critical", title: "Complications First — Empyema + Abscess", detail: "Pleural fluid lenticular/loculated = empyema. Lung abscess (cavity with air-fluid level). Necrotising pneumonia (non-enhancing areas). Changes management to drainage/surgery.", time: "20s" },
        { step: 2, priority: "critical", title: "Distribution Pattern — Drives Differential", detail: "Lobar/segmental = bacterial. Bilateral GGO = atypical/viral/PCP. Centrilobular + tree-in-bud = endobronchial (TB, NTM). Peribronchovascular/subpleural = OP.", time: "30s" },
        { step: 3, priority: "high", title: "Systematic Lobar Survey", detail: "Upper, middle/lingula, lower. GGO, consolidation, nodules, tree-in-bud, cavitation. Don't miss posterior lower lobes.", time: "45s" },
        { step: 4, priority: "high", title: "Pleural Assessment", detail: "Effusion character: simple vs complex vs split pleura sign (empyema). Pneumothorax.", time: "20s" },
        { step: 5, priority: "high", title: "Airways", detail: "Endobronchial lesion (post-obstructive). Bronchiectasis. Mucus plugging.", time: "20s" },
        { step: 6, priority: "normal", title: "Mediastinum + Nodes", detail: "Lymphadenopathy (lymphoma, sarcoid, TB). Hilar nodes.", time: "15s" },
      ],
      template: `CT CHEST — PNEUMONIA / PULMONARY INFECTION
Indication: [fever / cough / consolidation on CXR / immunocompromised]
Technique: Portal venous / HRCT

DISTRIBUTION [primary differential driver]
Lobar/segmental: RUL / RML / RLL / LUL / Lingula / LLL
Bilateral GGO: No / Yes [atypical/viral/PCP]
Centrilobular + tree-in-bud: No / Yes [TB/NTM/aspiration]
Peribronchovascular + subpleural: No / Yes [OP]
Random nodules: No / Yes [haematogenous/septic emboli]

CONSOLIDATION
Location: ___  Air bronchograms: No / Yes
Enhancement: Homogeneous / Heterogeneous [heterogeneous = necrotising]

COMPLICATIONS
Lung abscess: No / Yes — ___ mm, air-fluid level ___
Necrotising: No / Yes — location ___
Empyema:
  Effusion: No / Yes — R / L
  Character: Simple / Loculated / Split pleura sign [= empyema]
  Volume: ___  Drainage: Consider / Yes
Pneumothorax: No / Yes — R / L

GGO PATTERN [if present]
Crazy paving: No / Yes [PCP / oedema]
Halo sign: No / Yes [angioinvasive aspergillus]
Reversed halo: No / Yes [OP]

AIRWAYS
Endobronchial lesion: No / Yes — ___
Bronchiectasis: No / Yes  Tree-in-bud: No / Yes

MEDIASTINUM
Lymphadenopathy: No / Yes — ___ mm  Hilar: Normal / R / L

IMPRESSION
[Type] pneumonia / infection.
Distribution: [pattern]  Complications: [specify]
Aetiology: [Typical bacterial / Atypical / Viral / PCP / TB / OP / Other]
Follow-up: CT at 6-8 weeks if consolidation in smoker >40y or persistent`,
    },
    cs: {
      label: "Pneumonie / Plicní infekce",
      evidence: "Guidelines ATS/IDSA pro komunitní pneumonii 2019; nomenklatura HRCT Hansell 2008; Fleischnerova doporučení pro OP 2014",
      criticalFindings: ["Plicní absces", "Empyém", "Nekrotizující pneumonie", "Septická embolie"],
      searchEvidence: "Hansell 2008 — nomenklatura HRCT; role CT v komunitní pneumonii ATS/IDSA 2019; systematika HRCT Tarver 1996",
      searchMismatch: "Většina radiologů popíše konsolidaci a pak přejde na zbytek. Správně: nejdříve charakterizujte DISTRIBUCI — lobární/segmentární vs. oboustranné GGO vs. centrilolbulární uzliny — protože to řídí etiologickou diferenciální diagnózu.",
      searchPattern: [
        { step: 1, priority: "critical", title: "Komplikace jako první — empyém + absces", detail: "Pleurální tekutina čočkovitého tvaru/lokalizovaná = empyém. Plicní absces (dutina s hladinkou). Nekrotizující pneumonie (nesycené oblasti). Mění management na drenáž/operaci.", time: "20s" },
        { step: 2, priority: "critical", title: "Distribuční vzorec — řídí diferenciální diagnózu", detail: "Lobární/segmentární = bakteriální. Oboustranné GGO = atypická/virová/PCP. Centrilobulárně + tree-in-bud = endobronchiální šíření (TBC, NTM). Peribronkovaskulárně/subpleurálně = OP.", time: "30s" },
        { step: 3, priority: "high", title: "Systematický přehled laloků", detail: "Horní, střední/lingula, dolní. GGO, konsolidace, uzliny, tree-in-bud, kavitace. Nezapomínat na zadní dolní laloky.", time: "45s" },
        { step: 4, priority: "high", title: "Hodnocení pleury", detail: "Charakter výpotku: prostý vs. komplexní vs. příznak split pleura (empyém). Pneumotorax.", time: "20s" },
        { step: 5, priority: "high", title: "Dýchací cesty", detail: "Endobronchiální léze (postobstrukční pneumonie). Bronchiektázie. Hlenové zátky.", time: "20s" },
        { step: 6, priority: "normal", title: "Mediastinum + uzliny", detail: "Lymfadenopatie (lymfom, sarkoidóza, TBC). Hilové uzliny.", time: "15s" },
      ],
      template: `CT HRUDNÍKU — PNEUMONIE / PLICNÍ INFEKCE
Indikace: [horečka / kašel / konsolidace na RTG / imunodeficience]
Technika: Portální fáze / HRCT

NÁLEZ

Distribuční vzorec [primárně určuje diferenciální diagnózu]
Lobární/segmentární: Pravý horní / Pravý střední / Pravý dolní / Levý horní / Lingula / Levý dolní
Oboustranné GGO: Ne / Ano [atypická/virová/PCP]
Centrilobulárně + tree-in-bud: Ne / Ano [TBC/NTM/aspirace]
Peribronkovaskulárně + subpleurálně: Ne / Ano [organizující se pneumonie]
Náhodné uzliny: Ne / Ano [hematogenní/septická embolie]

Konsolidace
Lokalizace: ___  Vzdušné bronchogramy: Ne / Ano
Sycení: Homogenní / Heterogenní [heterogenní = nekrotizující]

Komplikace
Plicní absces: Ne / Ano — ___ mm, hladinka ___
Nekrotizující pneumonie: Ne / Ano — lokalizace ___
Empyém:
  Pleurální výpotek: Ne / Ano — vpravo / vlevo
  Charakter: Prostý / Lokalizovaný / Příznak split pleura [= empyém]
  Množství: ___  Drenáž: Zvážit / Indikována
Pneumotorax: Ne / Ano — vpravo / vlevo

Vzorec GGO [pokud přítomno]
Crazy paving (GGO + ztluštění interlobulárních sept): Ne / Ano [PCP / edém]
Příznak halo: Ne / Ano [angioinvazivní aspergilóza]
Obrácený příznak halo (atoll sign): Ne / Ano [organizující se pneumonie]

Dýchací cesty
Endobronchiální léze: Ne / Ano — ___
Bronchiektázie: Ne / Ano  Tree-in-bud: Ne / Ano

Mediastinum
Lymfadenopatie: Ne / Ano — ___ mm  Hilové uzliny: Normální / Zvětšené vpravo/vlevo

ZÁVĚR
[Typ] pneumonie / plicní infekce.
Distribuce: [vzorec]  Komplikace: [specifikovat]
Etiologie: [Typická bakteriální / Atypická / Virová / PCP / TBC / OP / Jiná]
Kontrola: CT hrudníku za 6–8 týdnů po léčbě při konsolidaci u kuřáka >40 let nebo přetrvávání nálezu`,
    },
  },

  {
    id: "nodule",
    category: "chest",
    en: {
      label: "Lung Nodule / Mass",
      evidence: "Fleischner 2017 (MacMahon et al. Radiology 2017); Lung-RADS 2022 (ACR); BTS 2015; NLST/NELSON screening data",
      criticalFindings: ["Lung-RADS 4X", "Mediastinal invasion", "Malignant effusion", "N3 disease"],
      searchEvidence: "MacMahon 2017 Fleischner validation; Lung-RADS 2022 validation; NLST/NELSON CT screening trials",
      searchMismatch: "Nodule found → measure → recommend. Missing: (1) classify solid/subsolid FIRST — different tables. (2) For mass: full staging before biopsy recommendation.",
      searchPattern: [
        { step: 1, priority: "critical", title: "Classify: Solid / Part-Solid / Pure GGN", detail: "Determines Fleischner table. Solid = entirely soft tissue. Part-solid = both GGO and solid — measure BOTH. Pure GGN = entirely ground-glass.", time: "15s" },
        { step: 2, priority: "critical", title: "Measure Correctly", detail: "Fleischner 2017: average of long + short axis. Part-solid: total size AND solid component separately. Use lung windows for GGO.", time: "20s" },
        { step: 3, priority: "critical", title: "Mass (>3cm): Staging Survey First", detail: "Mediastinal nodes (SA >10mm). Pleural effusion. Adrenal. Bone. Liver. Staging may obviate biopsy site choice.", time: "45s" },
        { step: 4, priority: "high", title: "Morphology — Malignancy Risk", detail: "Spiculated (high), lobulated, smooth (lower). Pleural tethering. Upper lobe. Cavitation. Calcification: popcorn/central/diffuse = benign; eccentric/amorphous = malignant.", time: "20s" },
        { step: 5, priority: "high", title: "Apply Fleischner / Lung-RADS", detail: "Fleischner for incidental. Lung-RADS for screening. Do not mix. State recommendation explicitly.", time: "15s" },
        { step: 6, priority: "normal", title: "Background Lung + Mediastinum", detail: "Emphysema (increases lung cancer risk). Bronchiectasis. Mediastinal shift.", time: "15s" },
      ],
      template: `CT CHEST — LUNG NODULE / MASS
Indication: [incidental / screening / known malignancy]
Technique: HRCT / Low-dose CT

CLASSIFICATION [determines Fleischner table]
Type: Solid / Part-solid / Pure GGN
Number: Single / Multiple — ___
Location: RUL / RML / RLL / LUL / Lingula / LLL
Segment: ___  Central / Peripheral / Subpleural

MEASUREMENTS [Fleischner 2017]
Total: ___ × ___ mm → Average: ___ mm
[Part-solid] Solid component: ___ × ___ mm → Average: ___ mm

MORPHOLOGY
Margins: Smooth / Lobulated / Spiculated / Irregular
Pleural tethering: No / Yes
Calcification: No / Yes — Benign (popcorn/central/diffuse) / Suspicious (eccentric/amorphous)
Cavitation: No / Yes — wall ___ mm (<4 benign, >15 malignant)
Upper lobe: No / Yes [higher risk]

FLEISCHNER 2017 [incidental — MacMahon 2017]
Risk: Low / High
Solid:
  <6mm: No f/u (low) / Optional 12m (high)
  6-8mm: 6-12m then 18-24m (low) / 3-6m then 18-24m (high)
  >8mm: 3m CT or PET or biopsy
Subsolid:
  Pure GGN <6mm: No f/u  ≥6mm: 6-12m, then 2y, 4y
  Part-solid <6mm: No f/u  ≥6mm: 3-6m, if persistent annual ×5y
→ Recommendation: ___

LUNG-RADS 2022 [screening only]
Category: 1 / 2 / 3 / 4A / 4B / 4X / 0
→ Lung-RADS: ___  Action: ___

STAGING [masses >3cm]
Mediastinal nodes: No / Yes — station ___, SA ___ mm
Hilar: Normal / R / L  Pleural: No / Yes  Adrenal: Normal / ___
Liver: Normal  Bone: Normal / ___
Invasion: Chest wall: No / Yes  Mediastinum: No / Yes
T descriptor: T1a/b/c / T2a/b / T3 / T4

BACKGROUND LUNG
Emphysema: None / Mild / Moderate / Severe
Bronchiectasis: No / Yes  Other nodules: No / Yes ___

IMPRESSION
[Solid/part-solid/GGN] [nodule/mass], [location], [size].
Morphology: [risk]
[Fleischner OR Lung-RADS recommendation]`,
    },
    cs: {
      label: "Plicní uzlina / masa",
      evidence: "Fleischnerova doporučení 2017 (MacMahon et al. Radiology 2017); Lung-RADS 2022 (ACR); BTS 2015; data screeningových studií NLST/NELSON",
      criticalFindings: ["Lung-RADS 4X", "Invaze mediastina", "Maligní výpotek", "Postižení N3"],
      searchEvidence: "Validace Fleischnera 2017 MacMahon; validace Lung-RADS 2022; screeningové studie NLST/NELSON",
      searchMismatch: "Uzlina nalezena → změření → doporučení. Chybí: (1) klasifikace solidní/subsolidní NEJDŘÍVE — různé tabulky. (2) U mas: staging před doporučením biopsie.",
      searchPattern: [
        { step: 1, priority: "critical", title: "Klasifikace: Solidní / Částečně solidní / Čistě GGO", detail: "Určuje Fleischnerovu tabulku. Solidní = zcela měkkotkáňová denzita. Částečně solidní = GGO i solidní složka — měřte OBOJÍ. Čistě GGO = zcela mléčné sklo.", time: "15s" },
        { step: 2, priority: "critical", title: "Správné měření", detail: "Fleischner 2017: průměr z dlouhé + krátké osy. Částečně solidní: celková velikost A velikost solidní složky zvlášť. Pro GGO používejte plicní okna.", time: "20s" },
        { step: 3, priority: "critical", title: "Masa (>3 cm): nejdříve staging", detail: "Mediastinální uzliny (krátká osa >10 mm). Pleurální výpotek. Nadledviny. Kosti. Játra. Staging může ovlivnit výběr místa biopsie.", time: "45s" },
        { step: 4, priority: "high", title: "Morfologie — riziko malignity", detail: "Spikulace (vysoké riziko), lobulace, hladký okraj (nižší riziko). Pleurální tah. Horní lalok. Kavitace. Kalcifikace: popcorn/centrální/difuzní = benigní; excentrická/amorfní = maligní.", time: "20s" },
        { step: 5, priority: "high", title: "Fleischner / Lung-RADS doporučení", detail: "Fleischner pro incidentální nálezy. Lung-RADS pro screeningovou populaci. Nemixujte. Doporučení uveďte explicitně.", time: "15s" },
        { step: 6, priority: "normal", title: "Plicní parenchym + mediastinum", detail: "Emfyzém (zvyšuje riziko karcinomu plic). Bronchiektázie. Deviace mediastina.", time: "15s" },
      ],
      template: `CT HRUDNÍKU — PLICNÍ UZLINA / MASA
Indikace: [incidentální nález / screening / onkologická anamnéza]
Technika: HRCT / Low-dose CT

NÁLEZ

Klasifikace [určuje Fleischnerovu tabulku]
Typ: Solidní / Částečně solidní / Čistě GGO (mléčné sklo)
Počet: Solitární / Mnohočetné — ___
Lokalizace: Pravý horní / Pravý střední / Pravý dolní / Levý horní / Lingula / Levý dolní
Segment: ___  Centrální / Periferní / Subpleurální

Měření [metoda Fleischner 2017]
Celková velikost: ___ × ___ mm → Průměrný průměr: ___ mm
[Částečně solidní] Solidní složka: ___ × ___ mm → Průměr: ___ mm

Morfologie
Ohraničení: Hladké / Lobulované / Spikulované / Nepravidelné
Pleurální tah: Ne / Ano
Kalcifikace: Ne / Ano — Benigní (popcorn/centrální/difuzní) / Suspektní (excentrická/amorfní)
Kavitace: Ne / Ano — tloušťka stěny ___ mm (<4 mm benigní, >15 mm maligní)
Horní lalok: Ne / Ano [vyšší riziko]

Fleischnerova doporučení 2017 [incidentální uzliny — MacMahon 2017]
Riziková skupina: Nízké riziko / Vysoké riziko
Solidní uzliny:
  <6 mm: Bez sledování (nízké) / Volitelně CT za 12 měs. (vysoké)
  6–8 mm: CT za 6–12 měs., poté za 18–24 měs. (nízké) / CT za 3–6 měs., poté za 18–24 měs. (vysoké)
  >8 mm: CT za 3 měs. nebo PET-CT nebo biopsie
Subsolidní uzliny:
  Čistě GGO <6 mm: Bez sledování  ≥6 mm: CT za 6–12 měs., poté za 2 a 4 roky
  Částečně solidní <6 mm: Bez sledování  ≥6 mm: CT za 3–6 měs., při perzistenci ročně ×5 let
→ Doporučení: ___

Lung-RADS 2022 [pouze pro screeningovou populaci]
Kategorie: 1 / 2 / 3 / 4A / 4B / 4X / 0 (neúplné)
→ Lung-RADS: ___  Postup: ___

Staging [u mas >3 cm]
Mediastinální uzliny: Ne / Ano — stanice ___, krátká osa ___ mm
Hilové uzliny: Normální / Zvětšené vpravo/vlevo
Pleurální výpotek: Ne / Ano  Nadledviny: Normální / ___
Játra: Normální  Kosti: Normální / ___
Invaze: Hrudní stěna: Ne / Ano  Mediastinum: Ne / Ano
T deskriptor: T1a/b/c / T2a/b / T3 / T4

Plicní parenchym
Emfyzém: Bez / Mírný / Střední / Těžký
Bronchiektázie: Ne / Ano  Ostatní uzliny: Ne / Ano ___

ZÁVĚR
[Solidní/částečně solidní/GGO] [uzlina/masa], [lokalizace], [velikost].
Morfologie: [rizikové znaky]
[Doporučení dle Fleischnera nebo Lung-RADS]`,
    },
  },

  {
    id: "ild",
    category: "chest",
    en: {
      label: "ILD / Diffuse Lung",
      evidence: "Fleischner ILD guidelines 2018 (Lynch et al.); ATS/ERS UIP criteria 2022; Hansell 2008 HRCT nomenclature",
      criticalFindings: ["UIP pattern (IPF)", "Acute exacerbation", "Honeycombing", "Traction bronchiectasis"],
      searchEvidence: "Lynch 2018 Fleischner; Raghu 2022 ATS/ERS UIP update; Travis 2013 multidisciplinary classification; Hansell 2008",
      searchMismatch: "Most describe findings then pattern-match. Correct HRCT search: characterise each finding type separately (GGO, reticulation, honeycombing, traction bronchiectasis), then distribution, THEN pattern assignment.",
      searchPattern: [
        { step: 1, priority: "critical", title: "Honeycombing vs Traction Bronchiectasis", detail: "Most critical ILD distinction. True honeycombing (clustered cysts, shared walls, subpleural, basal) vs traction bronchiectasis. Honeycombing = probable UIP. Drives IPF diagnosis.", time: "30s" },
        { step: 2, priority: "critical", title: "Distribution — Upper/Lower, Central/Peripheral", detail: "Basal + subpleural = UIP/NSIP. Upper lobe = HP, sarcoid, smoking. Peribronchovascular = sarcoid, HP.", time: "20s" },
        { step: 3, priority: "critical", title: "Acute Exacerbation Signs", detail: "In known ILD: new bilateral GGO on chronic fibrosis = AE-IPF until proven otherwise.", time: "15s" },
        { step: 4, priority: "high", title: "Systematic Characterisation", detail: "GGO / Reticulation / Honeycombing / Traction bronchiectasis / Consolidation / Centrilobular nodules / Cysts / Mosaic.", time: "45s" },
        { step: 5, priority: "high", title: "UIP Pattern (ATS/ERS 2022)", detail: "Typical: honeycombing, basal/subpleural ± traction bronchiectasis. Features against: upper/mid predominance, peribronchovascular, extensive GGO, profuse micronodules.", time: "20s" },
        { step: 6, priority: "normal", title: "Complications", detail: "PA diameter >29mm (PH). Lung cancer (IPF risk). Pleural effusion (against UIP).", time: "20s" },
      ],
      template: `HRCT CHEST — ILD / DIFFUSE LUNG DISEASE
Indication: [breathlessness / ILD follow-up / suspected fibrosis]
Technique: HRCT (1mm, inspiratory ± expiratory)

SYSTEMATIC FINDINGS [characterise each before pattern assignment]
GGO: Absent / Present — distribution ___ — extent ___ %
Reticulation: Absent / Present — distribution ___
Honeycombing: Absent / Present — subpleural/basal/upper — layers: single/multiple
Traction bronchiectasis: Absent / Present / Severe — ___
Consolidation: Absent / Present — ___
Centrilobular nodules: Absent / Present — ___
Cysts: Absent / Present — size ___, walls [thin=LAM/LCH]
Mosaic / Air trapping: Absent / Present

DISTRIBUTION
Predominance: Upper / Mid / Lower / Diffuse
Axial: Central / Peripheral (subpleural) / Diffuse
Gradient: Basal / Diffuse / Apical

ATS/ERS 2022 UIP ASSESSMENT
Typical UIP: Honeycombing, basal+subpleural, ± traction: Yes / No
Probable UIP: Reticular + traction, basal+subpleural, no honeycombing: Yes / No
Features AGAINST UIP:
  Upper/mid predominance: No/Yes  Peribronchovascular: No/Yes
  Extensive GGO: No/Yes  Profuse micronodules: No/Yes
  Cysts away from honeycombing: No/Yes  Diffuse mosaic: No/Yes
→ UIP Pattern: Typical / Probable / Indeterminate / Alternative

PATTERN DIFFERENTIAL
Typical UIP → IPF (clinical-radiological-pathological correlation required)
Probable UIP → IPF possible
NSIP (GGO+reticulation, lower, subpleural sparing) → CTD-ILD
HP (upper, centrilobular, mosaic) → Hypersensitivity pneumonitis
Sarcoid (perilymphatic, peribronchovascular, upper) → Sarcoidosis
→ Working pattern: ___

COMPLICATIONS
PA: ___ mm  Ao: ___ mm  PA:Ao: ___ (>1 = PH)
RV enlargement: No / Yes  Lung cancer: No / Suspected ___
Pleural effusion: No / Yes [against UIP]

IMPRESSION
HRCT pattern: [Typical UIP / Probable UIP / Indeterminate / Alternative ___]
Working diagnosis: ___
AE signs: No / Yes
Recommendation: Multidisciplinary ILD team discussion`,
    },
    cs: {
      label: "ILD / Difuzní postižení plic",
      evidence: "Fleischnerova doporučení pro HRCT ILD 2018 (Lynch et al.); kritéria UIP ATS/ERS 2022; nomenklatura HRCT Hansell 2008",
      criticalFindings: ["Vzorec UIP (IPF)", "Akutní exacerbace", "Honeycombing", "Trakční bronchiektázie"],
      searchEvidence: "Fleischner Lynch 2018; aktualizace UIP ATS/ERS Raghu 2022; multidisciplinární klasifikace Travis 2013; Hansell 2008",
      searchMismatch: "Většina radiologů popisuje nálezy a pak přiřazuje vzorec. Správná HRCT systematika: nejdříve charakterizujte každý typ nálezu zvlášť (GGO, retikulace, honeycombing, trakční bronchiektázie), pak distribuci, POTÉ přiřazení vzorce.",
      searchPattern: [
        { step: 1, priority: "critical", title: "Honeycombing vs. trakční bronchiektázie", detail: "Nejkritičtější rozlišení v ILD. Pravý honeycombing (seskupené cysty se sdílenými stěnami, subpleurálně, bazálně) vs. trakční bronchiektázie. Honeycombing = pravděpodobný UIP. Řídí diagnózu IPF.", time: "30s" },
        { step: 2, priority: "critical", title: "Distribuce — horní/dolní, centrální/periferní", detail: "Bazálně + subpleurálně = UIP/NSIP. Horní laloky = HP, sarkoidóza, kuřácká plicní nemoc. Peribronkovaskulárně = sarkoidóza, HP.", time: "20s" },
        { step: 3, priority: "critical", title: "Příznaky akutní exacerbace", detail: "Při známém ILD: nové oboustranné GGO na podkladě chronické fibrózy = akutní exacerbace IPF dokud není prokázán opak.", time: "15s" },
        { step: 4, priority: "high", title: "Systematická charakterizace", detail: "GGO / Retikulace / Honeycombing / Trakční bronchiektázie / Konsolidace / Centrilobulární uzliny / Cysty / Mozaikovitá denzita.", time: "45s" },
        { step: 5, priority: "high", title: "Hodnocení vzorce UIP (ATS/ERS 2022)", detail: "Typický: honeycombing, bazálně+subpleurálně ± trakční bronchiektázie. Znaky proti UIP: predominance horních/středních laloků, peribronkovaskulárně, rozsáhlé GGO, profuzní mikronoduly.", time: "20s" },
        { step: 6, priority: "normal", title: "Komplikace", detail: "Průměr plicnice >29 mm (plicní hypertenze). Karcinom plic (zvýšené riziko u IPF). Pleurální výpotek (svědčí proti UIP).", time: "20s" },
      ],
      template: `HRCT HRUDNÍKU — ILD / DIFUZNÍ POSTIŽENÍ PLIC
Indikace: [dušnost / sledování ILD / podezření na fibrózu]
Technika: HRCT (1 mm řezy, nádech ± výdech)

NÁLEZ

Systematická charakterizace [každý typ nálezu zvlášť — před přiřazením vzorce]
GGO (mléčné sklo): Nepřítomno / Přítomno — distribuce ___ — rozsah ___ %
Retikulace: Nepřítomna / Přítomna — distribuce ___
Honeycombing: Nepřítomen / Přítomen — subpleurálně/bazálně/horní — vrstvy: jednoduchá/mnohočetné
Trakční bronchiektázie: Nepřítomna / Přítomna / Výrazná — ___
Konsolidace: Nepřítomna / Přítomna — ___
Centrilobulární uzliny: Nepřítomny / Přítomny — ___
Cysty: Nepřítomny / Přítomny — velikost ___, stěny [tenká = LAM/LCH]
Mozaikovitá denzita / vzduchová past: Nepřítomna / Přítomna

Distribuce
Predominance: Horní laloky / Střední / Dolní / Difuzní (bez predominance)
Axiálně: Centrální (peribronkovaskulárně) / Periferní (subpleurálně) / Difuzní
Gradient: Bazální / Difuzní / Apikální

Hodnocení vzorce UIP (ATS/ERS 2022)
Typický UIP: Honeycombing, bazálně+subpleurálně, ± trakční bronchiektázie: Ano / Ne
Pravděpodobný UIP: Retikulace + trakční bronchiektázie, bazálně+subpleurálně, bez honeycombing: Ano / Ne
Znaky PROTI UIP:
  Predominance horních/středních laloků: Ne/Ano  Peribronkovaskulárně: Ne/Ano
  Rozsáhlé GGO: Ne/Ano  Profuzní mikronoduly: Ne/Ano
  Cysty mimo honeycombing: Ne/Ano  Difuzní mozaikovitá denzita: Ne/Ano
→ Vzorec UIP: Typický / Pravděpodobný / Neurčitý / Alternativní diagnóza

Diferenciální diagnóza vzorce
Typický UIP → IPF (nutná klinicko-radiologicko-patologická korelace)
Pravděpodobný UIP → IPF možný
NSIP (GGO+retikulace, dolní laloky, ušetření subpleurálně) → CTD-ILD
HP (horní laloky, centrilobulárně, mozaikovitá denzita) → Hypersenzitivní pneumonitida
Sarkoidóza (perilymfaticky, peribronkovaskulárně, horní laloky) → Sarkoidóza
→ Pracovní vzorec: ___

Komplikace
Plicnice: ___ mm  Aorta: ___ mm  Poměr: ___ (>1 = plicní hypertenze)
Dilatace PK: Ne / Ano  Karcinom plic: Ne / Suspektní ___
Pleurální výpotek: Ne / Ano [svědčí proti vzorci UIP]

ZÁVĚR
Vzorec HRCT: [Typický UIP / Pravděpodobný UIP / Neurčitý / Alternativní — ___]
Pracovní diagnóza: ___
Příznaky akutní exacerbace: Ne / Ano
Doporučení: Multidisciplinární tým pro ILD`,
    },
  },

  {
    id: "chesttrauma",
    category: "chest",
    en: {
      label: "Chest Trauma",
      evidence: "WSES chest trauma 2017; EAST blunt cardiac guidelines; AAST thoracic aorta classification; Mayberry 2004 rib management",
      criticalFindings: ["Aortic injury", "Tension pneumothorax", "Tracheobronchial injury", "Haemopericardium"],
      searchEvidence: "Dreizin 2020 systematic CT trauma search; WSES 2017 priority assessment; Gavelli 2004 blunt aortic injury CTA",
      searchMismatch: "Ribs found and counted first. Critical error: aortic injury and pneumothorax are life-threatening and must be first. Also: mediastinal haematoma on non-contrast must precede CTA review.",
      searchPattern: [
        { step: 1, priority: "critical", title: "Pneumothorax — Lung Windows", detail: "Anterior PTX on supine — look at anterior pleural space. Tension signs: mediastinal shift, depressed diaphragm.", time: "15s" },
        { step: 2, priority: "critical", title: "Aorta — Non-Contrast Then CTA", detail: "Non-contrast: mediastinal haematoma, periaortic fat stranding. CTA: wall irregularity, pseudoaneurysm, intimal flap. Isthmus most common site.", time: "30s" },
        { step: 3, priority: "critical", title: "Tracheobronchial Injury", detail: "Pneumomediastinum. Fallen lung sign (bronchial transection). Persistent PTX despite drainage.", time: "15s" },
        { step: 4, priority: "critical", title: "Haemothorax", detail: "Density >35HU = haemothorax. Volume estimate. Clotted = heterogeneous high density.", time: "15s" },
        { step: 5, priority: "high", title: "Pulmonary Contusion / Laceration", detail: "Contusion: GGO not conforming to lobe. Laceration: round lucency, AAST types 1-4. Worsen 24-48h.", time: "20s" },
        { step: 6, priority: "high", title: "Cardiac + Diaphragm", detail: "Haemopericardium. Pneumopericardium. Trace entire diaphragm on coronals.", time: "15s" },
        { step: 7, priority: "normal", title: "Ribs + Bones", detail: "Bone windows: count fractures, flail segment (3+ consecutive ribs, 2+ sites). Sternum. Thoracic spine.", time: "30s" },
      ],
      template: `CT CHEST — THORACIC TRAUMA
Mechanism: [blunt/penetrating]  Haemodynamics: [stable/unstable]
Technique: Non-contrast + CTA

⚠ CRITICAL [assess first]
Aortic injury: No / Yes  Tension PTX: No / Yes
Tracheobronchial: No / Yes  Haemopericardium: No / Yes

PNEUMOTHORAX
R: No / Yes — depth ___ mm  L: No / Yes — depth ___ mm
Tension: No / Yes — mediastinal shift, depressed diaphragm

HAEMOTHORAX
R: No / Yes — ___ HU, volume ___  L: No / Yes — ___

AORTIC INJURY
Non-contrast: Periaortic haematoma: No/Yes  Mediastinal: No/Yes
CTA: Normal / Intimal irregularity / Pseudoaneurysm / Flap
Location: Isthmus / Ascending / Arch / Descending
AAST Grade: I / II / III / IV

TRACHEOBRONCHIAL
Trachea: Normal / Injury  Bronchi: Normal / Injury R/L
Pneumomediastinum: No / Yes  Fallen lung: No / Yes

PULMONARY
Contusion: No / Yes — location ___, extent ___
Laceration: No / Yes — size ___  AAST: ___

CARDIAC
Haemopericardium: No / Yes — ___  Pneumopericardium: No / Yes

DIAPHRAGM [coronals]
R: Intact / Defect ___  L: Intact / Defect ___

RIBS [bone windows]
Right: ___  Left: ___
Consecutive: No / Yes — ribs ___ to ___
Flail segment: No / Yes — location ___

STERNAL / THORACIC SPINE
Sternum: Intact / Fracture ___  Spine: Intact / Fracture ___

IMPRESSION
[Findings in severity order]
Aortic: No / AAST ___  PTX: No / Yes [tension]
Flail: No / Yes
Urgency: [per findings]`,
    },
    cs: {
      label: "Trauma hrudníku",
      evidence: "WSES trauma hrudníku 2017; guidelines EAST pro tupé poranění srdce; AAST klasifikace poranění hrudní aorty; Mayberry 2004 management zlomenin žeber",
      criticalFindings: ["Poranění aorty", "Tenzní pneumotorax", "Poranění tracheobronchiálního stromu", "Hemoperikard"],
      searchEvidence: "Systematická CT traumatická systematika Dreizin 2020; prioritní hodnocení WSES 2017; CTA při tupém poranění aorty Gavelli 2004",
      searchMismatch: "Zlomeniny žeber jsou hledány a počítány jako první. Kritická chyba: poranění aorty a pneumotorax jsou život ohrožující a musí být hodnoceny jako první. Mediastinální hematom na nativním CT musí předcházet CTA.",
      searchPattern: [
        { step: 1, priority: "critical", title: "Pneumotorax — plicní okna", detail: "Anteriorní pneumotorax na CT v leže — pohled na přední pleurální prostor, ne na apex. Tenzní příznaky: deviace mediastina, deprese bránice.", time: "15s" },
        { step: 2, priority: "critical", title: "Aorta — nejdříve nativní, pak CTA", detail: "Nativní CT: mediastinální hematom, infiltrace periortálního tuku. CTA: nepravidelnost stěny, pseudoaneuryzma, intimální chlopeň. Nejčastější místo: isthmus (lig. arteriosum).", time: "30s" },
        { step: 3, priority: "critical", title: "Poranění tracheobronchiálního stromu", detail: "Pneumomediastinum. Příznak padajícího plíce (tracheobronchiální transekce). Přetrvávající pneumotorax navzdory drenáži.", time: "15s" },
        { step: 4, priority: "critical", title: "Hemotorax", detail: "Denzita pleurální tekutiny >35 HU = hemotorax. Odhad množství. Zkrvácení = heterogenní vysoká denzita.", time: "15s" },
        { step: 5, priority: "high", title: "Plicní kontuze / lacerace", detail: "Kontuze: GGO nerespektující lalok. Lacerace: kulatá lucence, typy 1–4 (AAST). Zhoršení za 24–48 h.", time: "20s" },
        { step: 6, priority: "high", title: "Srdce + bránice", detail: "Hemoperikard. Pneumoperikard. Sledujte celou bránici na koronálních rekonstrukcích.", time: "15s" },
        { step: 7, priority: "normal", title: "Žebra + kosti", detail: "Kostní okna: počet zlomenin, vlající hrudník (3+ sousední žebra, 2+ místa zlomeniny). Sternum. Hrudní páteř.", time: "30s" },
      ],
      template: `CT HRUDNÍKU — TRAUMA HRUDNÍKU
Mechanismus: [tupé/penetrující]  Hemodynamika: [stabilní/nestabilní]
Technika: Nativní + CTA

NÁLEZ

⚠ KRITICKÉ NÁLEZY [hodnotit jako první]
Poranění aorty: Ne / Ano  Tenzní pneumotorax: Ne / Ano
Poranění tracheobronchiálního stromu: Ne / Ano  Hemoperikard: Ne / Ano

Pneumotorax
Vpravo: Ne / Ano — hloubka ___ mm  Vlevo: Ne / Ano — hloubka ___ mm
Tenzní příznaky: Ne / Ano — deviace mediastina, deprese bránice

Hemotorax
Vpravo: Ne / Ano — ___ HU, množství ___  Vlevo: Ne / Ano — ___

Poranění aorty
Nativní CT: Periortální hematom: Ne/Ano  Mediastinální hematom: Ne/Ano
CTA: Normální / Nepravidelnost intimy / Pseudoaneuryzma / Intimální chlopeň
Lokalizace: Isthmus / Vzestupná aorta / Oblouk / Sestupná aorta
Stupeň AAST: I / II / III / IV

Tracheobronchiální strom
Trachea: Normální / Poranění  Bronchy: Normální / Poranění vpravo/vlevo
Pneumomediastinum: Ne / Ano  Příznak padajícího plíce: Ne / Ano

Plicní parenchym
Kontuze: Ne / Ano — lokalizace ___, rozsah ___
Lacerace: Ne / Ano — velikost ___  Stupeň AAST: ___

Srdce a osrdečník
Hemoperikard: Ne / Ano — množství ___  Pneumoperikard: Ne / Ano

Bránice [koronální rekonstrukce]
Vpravo: Intaktní / Defekt ___  Vlevo: Intaktní / Defekt ___

Žebra [kostní okna]
Vpravo: ___  Vlevo: ___
Sousední: Ne / Ano — žebra ___ až ___
Vlající hrudník: Ne / Ano — lokalizace ___

Sternum / Hrudní páteř
Sternum: Intaktní / Zlomenina ___  Páteř: Intaktní / Zlomenina ___

ZÁVĚR
[Poranění seřazena dle závažnosti]
Aorta: Bez poranění / Stupeň AAST ___  Pneumotorax: Ne / Ano [tenzní]
Vlající hrudník: Ne / Ano
Naléhavost: [dle nálezu — specifikovat chirurgické/IR/konzervativní]`,
    },
  },

  {
    id: "mediastinum",
    category: "chest",
    en: {
      label: "Mediastinal Mass",
      evidence: "ITMIG compartment classification 2014 (Carter); WHO thymoma classification; ACR Appropriateness Criteria; Duwe 2005 mediastinal mass review",
      criticalFindings: ["Airway compression", "SVC syndrome", "Cardiac invasion", "Malignant effusion"],
      searchEvidence: "Carter 2014 ITMIG validation; Duwe 2005 differential by compartment; compartment-based differential reduces unnecessary biopsy",
      searchMismatch: "Most describe mass then list differential. Correct: determine COMPARTMENT FIRST (ITMIG 2014) — narrows differential from 100+ to 3-4. Most common mediastinal reporting error.",
      searchPattern: [
        { step: 1, priority: "critical", title: "Airway + Vascular Compression", detail: "Tracheal deviation/compression? SVC compression (collaterals)? Cardiac compression? These determine urgency — same mass, different treatment speed.", time: "15s" },
        { step: 2, priority: "critical", title: "ITMIG Compartment — Determines Differential", detail: "Prevascular: thymoma/GCT/lymphoma/thyroid. Visceral (middle): pericardial cyst/lymphoma/oesophageal/foregut cyst. Paravertebral: neurogenic tumour.", time: "20s" },
        { step: 3, priority: "high", title: "Characterise Mass", detail: "Solid/cystic/fat/mixed. Calcification. Enhancement. Encapsulation. Fat planes (invasion vs displacement).", time: "30s" },
        { step: 4, priority: "high", title: "Invasion Assessment", detail: "Pericardial. Great vessel encasement (>180° = invasion). Pleural. Chest wall. Spine.", time: "20s" },
        { step: 5, priority: "high", title: "Nodes + Staging", detail: "Mediastinal, hilar, supraclavicular. Pleural/pericardial effusion.", time: "20s" },
        { step: 6, priority: "normal", title: "Full Lung Survey", detail: "Pulmonary metastases. Sternal/rib erosion.", time: "15s" },
      ],
      template: `CT CHEST — MEDIASTINAL MASS
Indication: [incidental / symptoms / known malignancy]
Technique: CECT chest

COMPARTMENT [ITMIG 2014 — determines differential]
Prevascular (anterior): Yes/No → Thymoma / GCT / Lymphoma / Thyroid
Visceral (middle): Yes/No → Lymphoma / Pericardial cyst / Oesophageal / Foregut cyst
Paravertebral (posterior): Yes/No → Neurogenic / Meningocele

MASS
Location: ___ compartment, region ___
Size: ___ × ___ × ___ mm
Density: Solid / Cystic / Fat / Mixed / Calcified — HU ___
Fat content: No / Yes [teratoma/lipoma]
Enhancement: No / Homogeneous / Heterogeneous / Rim
Encapsulation: Well-defined / Ill-defined

INVASION
Pericardium: Fat plane preserved / Effusion / Invasion
Aorta: No contact / <180° / >180° encasement
SVC: Patent / Compressed / Invaded — collaterals: No / Yes
Chest wall: Preserved / Invaded  Spine: Preserved / Foraminal ___
Pleura: Normal / Thickening / Nodules / Effusion

LYMPH NODES
Prevascular / Paratracheal / Hilar / Lower mediastinal: Normal / Enlarged ___
Supraclavicular: Normal / Enlarged

PLEURAL / PERICARDIAL
Pericardial effusion: No / Yes  Pleural effusion: No / Yes

ITMIG DIFFERENTIAL
Prevascular: Thymoma / Thymic Ca / GCT / Lymphoma / Thyroid / Parathyroid
Visceral: Lymphoma / Pericardial cyst / Bronchogenic cyst / Oesophageal
Paravertebral: Schwannoma / Neurofibroma / Ganglioneuroma / Meningocele
→ Working differential: 1.___ 2.___ 3.___

COMPLICATIONS
Tracheal lumen: ___ mm  SVC syndrome: No / Yes

IMPRESSION
[Compartment] mediastinal mass, [size], [characteristics].
Working differential: ___
Invasion: No / [specify]
Recommendation: [Biopsy / Surgical / PET-CT / MDT]`,
    },
    cs: {
      label: "Mediastinální masa",
      evidence: "ITMIG klasifikace mediastina 2014 (Carter); WHO klasifikace thymomů; ACR Appropriateness Criteria; přehled mediastinálních mas Duwe 2005",
      criticalFindings: ["Komprese dýchacích cest", "Syndrom horní duté žíly", "Invaze srdce", "Maligní výpotek"],
      searchEvidence: "Validace ITMIG Carter 2014; diferenciální diagnóza dle kompartmentu Duwe 2005; kompartmentová diferenciální diagnóza snižuje počet zbytečných biopsií",
      searchMismatch: "Většina radiologů popíše masu a pak uvede diferenciální diagnózu. Správně: nejdříve určete KOMPARTMENT (ITMIG 2014) — zužuje diferenciální diagnózu ze 100+ na 3–4. Nejčastější chyba při hlášení mediastinálních mas.",
      searchPattern: [
        { step: 1, priority: "critical", title: "Komprese dýchacích cest + cév", detail: "Deviace/komprese trachey? Komprese HDŽ (kolaterální oběh)? Komprese srdce? To určuje naléhavost — stejná masa, jiná rychlost léčby.", time: "15s" },
        { step: 2, priority: "critical", title: "ITMIG kompartment — určuje diferenciální diagnózu", detail: "Prevaskulární: tymom/GCT/lymfom/štítná žláza. Viscerální (střední): perikardiální cysta/lymfom/jícnová patologie/bronchocelární cysta. Paravertebrální: neurogenní tumor.", time: "20s" },
        { step: 3, priority: "high", title: "Charakterizace masy", detail: "Solidní/cystická/tukový obsah/smíšená. Kalcifikace. Sycení. Pouzdro. Tukové vrstvy (invaze vs. dislokace).", time: "30s" },
        { step: 4, priority: "high", title: "Hodnocení invaze", detail: "Perikard. Obalení velkých cév (>180° = invaze). Pleura. Hrudní stěna. Páteř.", time: "20s" },
        { step: 5, priority: "high", title: "Uzliny + staging", detail: "Mediastinální, hilové, supraklavikulární uzliny. Pleurální/perikardiální výpotek.", time: "20s" },
        { step: 6, priority: "normal", title: "Celkový přehled plic", detail: "Plicní metastázy. Eroze sterna/žeber.", time: "15s" },
      ],
      template: `CT HRUDNÍKU — MEDIASTINÁLNÍ MASA
Indikace: [incidentální nález / příznaky / onkologická anamnéza]
Technika: CECT hrudníku

NÁLEZ

Mediastinální kompartment [ITMIG 2014 — určuje diferenciální diagnózu]
Prevaskulární (přední): Ano/Ne → Tymom / GCT / Lymfom / Štítná žláza
Viscerální (střední): Ano/Ne → Lymfom / Perikardiální cysta / Jícnová patologie / Bronchocelární cysta
Paravertebrální (zadní): Ano/Ne → Neurogenní tumor / Laterální meningokéla

Masa
Lokalizace: ___ kompartment, oblast ___
Velikost: ___ × ___ × ___ mm
Denzita: Solidní / Cystická / Tukový obsah / Smíšená / Kalcifikace — HU ___
Tuk: Ne / Ano [teratom/lipom/tymolipom]
Sycení: Bez / Homogenní / Heterogenní / Prstencové
Ohraničení: Dobře ohraničená / Špatně ohraničená

Hodnocení invaze
Perikard: Tukové vrstvy zachovány / Výpotek / Přímá invaze
Aorta: Bez kontaktu / <180° / >180° obalení
HDŽ: Průchodná / Komprimovaná / Infilrovaná — kolaterály: Ne / Ano
Hrudní stěna: Zachovány tukové vrstvy / Invaze  Páteř: Zachovány / Foraminální šíření ___
Pleura: Normální / Ztluštění / Uzlíky / Výpotek

Uzliny
Prevaskulární / Paratracheální / Hilové / Dolní mediastinum: Normální / Zvětšené ___
Supraklavikulární: Normální / Zvětšené

Pleurální / perikardiální nález
Perikardiální výpotek: Ne / Ano  Pleurální výpotek: Ne / Ano

Diferenciální diagnóza dle ITMIG
Prevaskulární: Tymom / Thymic Ca / GCT / Lymfom / Struma / Příštítné tělísko
Viscerální: Lymfom / Perikardiální cysta / Bronchocelární cysta / Jícnová patologie
Paravertebrální: Schwannom / Neurofibrom / Ganglioneuromsarkoid / Meningokéla
→ Pracovní diferenciální diagnóza: 1.___ 2.___ 3.___

Komplikace
Průsvit trachey: ___ mm  Syndrom HDŽ: Ne / Ano

ZÁVĚR
Mediastinální masa [kompartment], [velikost], [charakteristiky].
Pracovní diferenciální diagnóza: ___
Invaze: Ne / [specifikovat]
Doporučení: [CT-biopsie / Chirurgická resekce / PET-CT / Multidisciplinární tým]`,
    },
  },

  {
    id: "thoracicaorta",
    category: "chest",
    en: {
      label: "Thoracic Aorta Follow-up",
      evidence: "ESC Aortic Guidelines 2023; Hiratzka 2010 ACCF/AHA thoracic aorta guidelines; Davies 2006 growth rate data; Erbel 2014 measurement standardisation",
      criticalFindings: ["Rapid growth >5mm/year", "Diameter at threshold", "New dissection/IMH", "Haemopericardium"],
      searchEvidence: "ESC 2023 ECG-gated measurement standards; Davies 2006 natural history; Erbel 2014 standardised positions; Booher 2011 IRAD reproducibility",
      searchMismatch: "Critical errors: (1) measurements at non-standardised landmarks — comparing different levels between studies is meaningless. (2) ECG-gating required for ascending — pulsation artefact causes 2-4mm overestimation. (3) Growth rate must use precise time interval.",
      searchPattern: [
        { step: 1, priority: "critical", title: "New Complication — Dissection / IMH / Rupture", detail: "New intimal flap, new crescentic density (IMH), haemopericardium, haemothorax, periaortic haematoma. New Type A on surveillance = emergency regardless of prior diameter.", time: "20s" },
        { step: 2, priority: "critical", title: "Six Standardised Measurement Positions", detail: "(1) Sinuses of Valsalva, (2) sinotubular junction, (3) mid-ascending (at PA), (4) arch, (5) proximal descending, (6) mid-descending (T8). Perpendicular to centreline. Same positions every study.", time: "60s" },
        { step: 3, priority: "critical", title: "Growth Rate Calculation", detail: "Growth = (current - prior) / months × 12. >5mm/year = rapid = referral. >3mm/year = accelerated = shorten interval.", time: "20s" },
        { step: 4, priority: "critical", title: "Surgical Threshold", detail: "ESC 2023: ascending ≥5.5cm general; ≥5.0cm with bicuspid AV/Marfan/family history/rapid growth. Descending ≥6.0cm (≥5.5cm CTD).", time: "15s" },
        { step: 5, priority: "high", title: "Aortic Valve", detail: "Bicuspid AV: fusion pattern, lower intervention thresholds, different growth pattern.", time: "15s" },
        { step: 6, priority: "high", title: "Periaortic + Pericardium", detail: "Pericardial effusion (haemopericardium). Periaortic stranding. Pleural effusion.", time: "15s" },
        { step: 7, priority: "normal", title: "Branch Vessels + Incidentals", detail: "Coronary ostia (root aneurysm). Great vessel origins. Lung incidentals.", time: "15s" },
      ],
      template: `CTA CHEST — THORACIC AORTA SURVEILLANCE
Indication: [known TAA / post-dissection / connective tissue disorder]
Technique: ECG-gated CTA (mandatory for ascending)
Aetiology: Degenerative / Bicuspid AV / Marfan / Loeys-Dietz / Post-dissection / ___

NEW COMPLICATIONS [before measurements]
New intimal flap: No / Yes [EMERGENCY if Type A]
New IMH: No / Yes — location ___
Haemopericardium: No / Yes  Haemothorax: No / Yes

STANDARDISED MEASUREMENTS [perpendicular to centreline, outer-to-outer — ESC 2023]
                            Current | Prior | Date | Growth/yr
Sinuses of Valsalva:        ___ mm  | ___   | ___  | ___ mm/yr
Sinotubular junction:       ___ mm  | ___   | ___  | ___ mm/yr
Mid-ascending (at PA):      ___ mm  | ___   | ___  | ___ mm/yr
Proximal arch:              ___ mm  | ___   | ___  | ___ mm/yr
Proximal descending:        ___ mm  | ___   | ___  | ___ mm/yr
Mid-descending (T8):        ___ mm  | ___   | ___  | ___ mm/yr
Maximum overall: ___ mm at ___

GROWTH
Fastest segment: ___ — ___ mm/year
Stable (<3mm/yr): Yes / No
Accelerated (3-5mm/yr): No / Yes — [segment]
Rapid (>5mm/yr): No / Yes — SURGICAL REFERRAL

ESC 2023 THRESHOLDS
Ascending — General: ≥55mm → Current: ___ → Reached: No/Yes
Ascending — Risk factors (bicuspid/Marfan/family history/rapid growth): ≥50mm → Reached: No/Yes
Descending: ≥60mm (≥55mm CTD) → Reached: No/Yes
→ SUMMARY: Below / Approaching (<5mm) / Reached — refer

POST-DISSECTION [if applicable]
False lumen: Thrombosed / Partial / Patent
Sac change: Stable / Enlarging / Regressing

AORTIC VALVE
Trileaflet / Bicuspid (fusion: R-L / R-N / L-N) / Prosthetic

PERICARDIUM / PLEURA
Pericardial effusion: No / Yes  Pleural: No / Yes

IMPRESSION
TAA, max ___ mm at [location].
Growth: [Stable / Accelerated / Rapid] — [fastest, rate]
ESC threshold: Below / Approaching / Reached
New complication: No / Yes — [specify]
Next CT: [stable <45mm: 2-3y / 45-50mm: 1-2y / >50mm: annual / rapid: 6-monthly]`,
    },
    cs: {
      label: "Sledování hrudní aorty",
      evidence: "Guidelines ESC pro aortu 2023; guidelines ACCF/AHA pro hrudní aortu Hiratzka 2010; data o rychlosti růstu Davies 2006; standardizace měření Erbel 2014",
      criticalFindings: ["Rychlý růst >5 mm/rok", "Dosažení operačního prahu", "Nová disekce/IMH", "Hemoperikard"],
      searchEvidence: "Standardy EKG-gated měření ESC 2023; přirozený průběh Davies 2006; standardizované polohy měření Erbel 2014; reprodukovatelnost IRAD Booher 2011",
      searchMismatch: "Kritické chyby: (1) měření na nestandardizovaných anatomických landmarcích — porovnávání různých úrovní mezi studiemi je bezcenné; (2) EKG-gating je povinné pro vzestupnou aortu — artefakt pulsace způsobuje nadhodnocení o 2–4 mm; (3) rychlost růstu musí respektovat přesný časový interval.",
      searchPattern: [
        { step: 1, priority: "critical", title: "Nové komplikace — disekce / IMH / ruptura", detail: "Nová intimální chlopeň, nová srpovitá denzita (IMH), hemoperikard, hemotorax, periortální hematom. Nový typ A při sledovací studii = emergentní situace bez ohledu na předchozí průměr.", time: "20s" },
        { step: 2, priority: "critical", title: "Šest standardizovaných měřicích poloh", detail: "(1) Sinus aorty, (2) sinotubulární přechod, (3) vzestupná aorta (úroveň plicnice), (4) oblouk, (5) proximální sestupná aorta, (6) střední sestupná aorta (Th8). Kolmo na osu. Stejné polohy při každém vyšetření.", time: "60s" },
        { step: 3, priority: "critical", title: "Výpočet rychlosti růstu", detail: "Růst = (aktuální − předchozí) / počet měsíců × 12. >5 mm/rok = rychlý růst = indikace k operaci. >3 mm/rok = akcelerovaný = zkrátit interval sledování.", time: "20s" },
        { step: 4, priority: "critical", title: "Operační práh", detail: "ESC 2023: vzestupná aorta ≥5,5 cm obecně; ≥5,0 cm u bikuspidální AK/Marfanův syndrom/rodinná anamnéza/rychlý růst. Sestupná ≥6,0 cm (≥5,5 cm při CTD).", time: "15s" },
        { step: 5, priority: "high", title: "Aortální chlopeň", detail: "Bikuspidální AK: typ fúze, nižší operační prahy, odlišný vzorec růstu.", time: "15s" },
        { step: 6, priority: "high", title: "Periortální tkáň + perikard", detail: "Perikardiální výpotek (hemoperikard). Infiltrace periortálního tuku. Pleurální výpotek.", time: "15s" },
        { step: 7, priority: "normal", title: "Větevní cévy + doplňkové nálezy", detail: "Koronární odstupy (při aneuryzmatu kořene). Odstupy velkých cév. Incidentální plicní nálezy.", time: "15s" },
      ],
      template: `CTA HRUDNÍKU — SLEDOVÁNÍ HRUDNÍ AORTY
Indikace: [známé TAA / po disekci / pojivová tkáňová choroba]
Technika: EKG-gated CTA (povinné pro vzestupnou aortu)
Etiologie: Degenerativní / Bikuspidální AK / Marfanův syndrom / Loeys-Dietz / Po disekci / ___

NÁLEZ

Nové komplikace [hodnotit před měřením]
Nová intimální chlopeň: Ne / Ano [EMERGENTNÍ SITUACE při typu A]
Nový IMH: Ne / Ano — lokalizace ___
Hemoperikard: Ne / Ano  Hemotorax: Ne / Ano

Standardizovaná měření [kolmo na osu, zevní stěna k zevní stěně — ESC 2023]
                               Aktuálně | Dříve  | Datum | Růst/rok
Sinus aorty:                   ___ mm   | ___    | ___   | ___ mm/rok
Sinotubulární přechod:         ___ mm   | ___    | ___   | ___ mm/rok
Vzestupná aorta (úr. plicnice): ___ mm  | ___    | ___   | ___ mm/rok
Proximální oblouk:             ___ mm   | ___    | ___   | ___ mm/rok
Proximální sestupná aorta:     ___ mm   | ___    | ___   | ___ mm/rok
Střední sestupná aorta (Th8):  ___ mm   | ___    | ___   | ___ mm/rok
Maximum celkově: ___ mm v oblasti ___

Dynamika růstu
Nejrychleji rostoucí segment: ___ — ___ mm/rok
Stabilní (<3 mm/rok): Ano / Ne
Akcelerovaný (3–5 mm/rok): Ne / Ano — [segment] — zkrátit interval sledování
Rychlý (>5 mm/rok): Ne / Ano — INDIKACE K OPERACI

Operační prahy dle ESC 2023
Vzestupná aorta — obecná populace: ≥55 mm → Aktuálně: ___ → Dosaženo: Ne/Ano
Vzestupná aorta — rizikoví pacienti (bikuspidální AK / Marfan / rod. anamnéza / rychlý růst): ≥50 mm → Dosaženo: Ne/Ano
Sestupná aorta: ≥60 mm (≥55 mm při CTD) → Dosaženo: Ne/Ano
→ SOUHRN: Pod prahem / Blíží se (<5 mm) / Práh dosažen — indikace k operaci

Po disekci [pokud relevantní]
Falešné lumen: Trombózované / Parciálně trombózované / Průchodné
Změna vaku: Stabilní / Zvětšující se / Regredující

Aortální chlopeň
Trikuspidální / Bikuspidální (fúze: P-L / P-N / L-N) / Protéza

Perikard / Pleura
Perikardiální výpotek: Ne / Ano  Pleurální výpotek: Ne / Ano

ZÁVĚR
TAA, maximum ___ mm v oblasti [lokalizace].
Dynamika: [Stabilní / Akcelerovaný / Rychlý růst] — [nejrychlejší segment, rychlost]
Operační práh ESC: Pod prahem / Blíží se / Dosažen
Nová komplikace: Ne / Ano — [specifikovat]
Příští CT: [stabilní <45 mm: za 2–3 roky / 45–50 mm: za 1–2 roky / >50 mm: ročně / rychlý růst: za 6 měsíců]`,
    },
  },
];
