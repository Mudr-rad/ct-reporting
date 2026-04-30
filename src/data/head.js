export const HEAD_TEMPLATES = [
  {
    id: "stroke",
    category: "neuro",
    en: {
      label: "Stroke / Ischaemia",
      evidence: "ASPECTS (Barber et al. Lancet 2000); ESO/AHA stroke guidelines 2023; Powers et al. AHA 2019 early ischaemia CT signs",
      criticalFindings: ["Large vessel occlusion", "ASPECTS <6", "Haemorrhagic transformation", "Malignant MCA infarct signs"],
      searchEvidence: "Mair et al. 2015 — early ischaemia CT sign detection; Barber 2000 ASPECTS validation; ESO guidelines mandate ASPECTS before thrombectomy",
      searchMismatch: "Fatal error: reading brain windows only. ASPECTS must be scored BEFORE looking for vessel occlusion — anchoring on the vessel causes under-scoring of infarct extent.",
      searchPattern: [
        { step: 1, priority: "critical", title: "Stroke Windows (W30/L30) — Early Signs", detail: "Open narrow stroke windows first. Insular ribbon sign, obscuration of lentiform nucleus, cortical sulcal effacement. Invisible on standard W80/L35.", time: "45s" },
        { step: 2, priority: "critical", title: "ASPECTS Scoring — Before Vessel Assessment", detail: "10 regions: caudate, putamen, internal capsule, insular cortex, M1-M6. Subtract 1 per ischaemic region. ASPECTS <6 = poor outcome with thrombectomy.", time: "60s" },
        { step: 3, priority: "critical", title: "CTA — Large Vessel Occlusion", detail: "ICA terminus, M1, M2, basilar. Dense MCA sign on NCCT = M1 occlusion. Hyperdense basilar = basilar thrombosis.", time: "30s" },
        { step: 4, priority: "critical", title: "Exclude Haemorrhage", detail: "Haemorrhagic transformation (ECASS: HI1/HI2/PH1/PH2) changes thrombolysis eligibility immediately.", time: "20s" },
        { step: 5, priority: "high", title: "Malignant MCA Infarct Signs", detail: ">50% MCA territory, midline shift, ipsilateral ventricle compression. Predict malignant oedema.", time: "20s" },
        { step: 6, priority: "high", title: "CTP Assessment", detail: "Core (rCBF <30%) vs penumbra (Tmax >6s). Mismatch ratio >1.8 = salvageable tissue.", time: "30s" },
        { step: 7, priority: "normal", title: "Full Brain Survey", detail: "Posterior fossa, white matter changes, old infarcts, atrophy.", time: "30s" },
      ],
      template: `CT BRAIN ± CTA — ACUTE STROKE
Indication: [acute neurological deficit, onset ___ h ago]
Technique: NCCT ± CTA ± CTP

EARLY ISCHAEMIA SIGNS [W30/L30]
Insular ribbon sign: Absent / Present R / L
Lentiform nucleus obscuration: Absent / Present R / L
Dense MCA sign: Absent / Present R / L
Cortical sulcal effacement: Absent / Present — region ___
Hyperdense basilar: Absent / Present

ASPECTS SCORE [before vessel assessment]
Caudate: 1/0  Putamen: 1/0  Internal capsule: 1/0  Insular cortex: 1/0
M1: 1/0  M2: 1/0  M3: 1/0  M4: 1/0  M5: 1/0  M6: 1/0
ASPECTS: ___ /10  (≥6: consider thrombectomy; <6: poor outcome)
Side: Right / Left

HAEMORRHAGE
ICH: No / Yes — type ___, location ___
Haemorrhagic transformation: No / Yes — ECASS: HI1 / HI2 / PH1 / PH2

LVO [CTA]
ICA intracranial: Patent / Occluded R/L
M1: Patent / Occluded R/L
M2: Patent / Occluded R/L
Basilar: Patent / Occluded — extent ___
Collateral grade: Good / Moderate / Poor

CTP [if performed]
Core: ___ ml (rCBF <30%)  Penumbra: ___ ml (Tmax >6s)
Mismatch ratio: ___ (>1.8 = salvageable)

MALIGNANT INFARCT
MCA territory: <50% / >50%
Midline shift: No / Yes — ___ mm
Basal cisterns: Patent / Compressed

ANCILLARY
Leukoaraiosis: None / Fazekas ___  Old infarcts: No / Yes ___
Atrophy: Age-appropriate / Disproportionate

IMPRESSION
[Ischaemic stroke / No early CT changes]
Territory: [ICA/MCA/ACA/PCA/Posterior/Lacunar]
ASPECTS: ___ /10  LVO: No / Yes — [vessel]
Thrombectomy eligibility: [comment]
Urgency: EMERGENCY — stroke team notification`,
    },
    cs: {
      label: "Akutní ischemická CMP",
      evidence: "ASPECTS (Barber et al. Lancet 2000); guidelines ESO/AHA pro CMP 2023; Powers et al. AHA 2019 časné CT příznaky ischémie",
      criticalFindings: ["Okluze velké cévy", "ASPECTS <6", "Hemoragická transformace", "Maligní infarkt MCA"],
      searchEvidence: "Mair et al. 2015 — detekce časných CT příznaků ischémie; validace ASPECTS Barber 2000; guidelines ESO nařizují skórování ASPECTS před rozhodnutím o trombektomii",
      searchMismatch: "Fatální chyba: hodnocení pouze v mozkovém okně. ASPECTS musí být skórováno PŘED hledáním okluze cévy — primování na cévu vede k podhodnocení rozsahu infarktu.",
      searchPattern: [
        { step: 1, priority: "critical", title: "Mozková okna pro CMP (W30/L30) — časné příznaky", detail: "Nejdříve úzká okna pro CMP. Příznak ztráty insulárního lemu, zastření nucleus lentiformis, vymizení kortikálních sulků. Na standardním W80/L35 neviditelné.", time: "45s" },
        { step: 2, priority: "critical", title: "Skórování ASPECTS — před hodnocením cév", detail: "10 oblastí: nc. caudatus, putamen, capsula interna, insula, M1–M6. Odečtěte 1 bod za každou ischemickou oblast. ASPECTS <6 = špatný výsledek při trombektomii.", time: "60s" },
        { step: 3, priority: "critical", title: "CTA — okluze velké cévy", detail: "Intrakraniální ICA, M1, M2, bazilární tepna. Hyperdenzní střední mozková tepna na NCCT = okluze M1. Hyperdenzní bazilární tepna = trombóza.", time: "30s" },
        { step: 4, priority: "critical", title: "Vyloučení hemoragie", detail: "Hemoragická transformace (ECASS: HI1/HI2/PH1/PH2) okamžitě mění způsobilost k trombolýze.", time: "20s" },
        { step: 5, priority: "high", title: "Příznaky maligního infarktu MCA", detail: "Postižení >50 % teritoria MCA, deviace střední čáry, komprese ipsilaterální komory. Předpovídají maligní edém.", time: "20s" },
        { step: 6, priority: "high", title: "CT perfuze", detail: "Jádro infarktu (rCBF <30 %) vs. penumbra (Tmax >6 s). Poměr nesouladu >1,8 = zachranitelná tkáň.", time: "30s" },
        { step: 7, priority: "normal", title: "Celkový přehled mozku", detail: "Zadní jáma, změny bílé hmoty, staré infarkty, atrofie.", time: "30s" },
      ],
      template: `CT MOZKU ± CTA — AKUTNÍ ISCHEMICKÁ CMP
Indikace: [akutní neurologický deficit, začátek před ___ h]
Technika: NCCT ± CTA ± CT perfuze

NÁLEZ

Časné příznaky ischémie [okna W30/L30]
Příznak ztráty insulárního lemu: Nepřítomen / Přítomen vpravo / vlevo
Zastření nc. lentiformis: Nepřítomno / Přítomno vpravo / vlevo
Hyperdenzní střední mozková tepna: Nepřítomna / Přítomna vpravo / vlevo
Vymizení kortikálních sulků: Nepřítomno / Přítomno — oblast ___
Hyperdenzní bazilární tepna: Nepřítomna / Přítomna

Skóre ASPECTS [hodnotit před posouzením cév]
Nc. caudatus: 1/0  Putamen: 1/0  Capsula interna: 1/0  Insula: 1/0
M1: 1/0  M2: 1/0  M3: 1/0  M4: 1/0  M5: 1/0  M6: 1/0
ASPECTS: ___ /10  (≥6: zvážit trombektomii; <6: špatná prognóza)
Strana: Pravá / Levá

Krvácení
ICH: Ne / Ano — typ ___, lokalizace ___
Hemoragická transformace: Ne / Ano — ECASS: HI1 / HI2 / PH1 / PH2

Okluze velké cévy [CTA]
Intrakraniální ICA: Průchodná / Okludovaná vpravo/vlevo
M1: Průchodná / Okludovaná vpravo/vlevo
M2: Průchodná / Okludovaná vpravo/vlevo
Bazilární tepna: Průchodná / Okludovaná — rozsah ___
Kolaterální oběh: Dobrý / Střední / Slabý

CT perfuze [pokud provedena]
Jádro infarktu: ___ ml (rCBF <30 %)  Penumbra: ___ ml (Tmax >6 s)
Poměr nesouladu: ___ (>1,8 = zachranitelná tkáň)

Příznaky maligního infarktu
Postižení teritoria MCA: <50 % / >50 %
Deviace střední čáry: Ne / Ano — ___ mm
Bazální cisterny: Volné / Stlačené

Doplňkový nález
Leukoaraióza: Žádná / Fazekas ___  Staré infarkty: Ne / Ano ___
Atrofie: Přiměřená věku / Nepřiměřeně výrazná

ZÁVĚR
[Akutní ischemická CMP / Bez CT průkazu časných ischemických změn — CMP nelze CT vyloučit]
Teritorium: [ICA/MCA/ACA/PCA/Zadní povodí/Lakunární]
ASPECTS: ___ /10  Okluze velké cévy: Ne / Ano — [céva]
Způsobilost k trombektomii: [komentář dle ASPECTS + okluze + časové okno]
URGENTNÍ NÁLEZ — nutné okamžité předání neurologickému týmu`,
    },
  },

  {
    id: "ich",
    category: "neuro",
    en: {
      label: "Intracranial Haemorrhage",
      evidence: "ICH Score (Hemphill et al. Stroke 2001); Broderick 1993 ABC/2 volume method; AHA/ASA ICH guidelines 2022",
      criticalFindings: ["Spot sign (haematoma expansion)", "Intraventricular extension", "Herniation", "Underlying mass"],
      searchEvidence: "Delong 2010 — spot sign predicts expansion; Tuhrim 1999 IVH score; AHA 2022 search sequence",
      searchMismatch: "Volume estimation skipped or eyeballed. ABC/2 must be done for every ICH — it drives ICH score and management. Spot sign frequently not looked for on CTA.",
      searchPattern: [
        { step: 1, priority: "critical", title: "Location Determines Aetiology", detail: "Putaminal/thalamic = hypertensive. Lobar = amyloid/mass/AVM. Cerebellar = hypertensive/AVM. Brainstem = hypertensive (very high mortality). SAH = aneurysm.", time: "20s" },
        { step: 2, priority: "critical", title: "Volume — ABC/2 Mandatory", detail: "A × B × C/2. >30ml = surgical consideration. >60ml = high mortality. Every time, not optional.", time: "30s" },
        { step: 3, priority: "critical", title: "Spot Sign — CTA", detail: "Enhancing foci within haematoma on arterial phase = active bleeding = 3-6× expansion risk. Look actively — subtle 1-2mm foci.", time: "30s" },
        { step: 4, priority: "critical", title: "IVH + Hydrocephalus", detail: "Which ventricles? Graeb IVH score. Temporal horn dilation = early obstructive hydrocephalus. EVD decision.", time: "20s" },
        { step: 5, priority: "critical", title: "Herniation", detail: "Midline shift (septum pellucidum). Subfalcine, uncal, transtentorial. Basal cisterns.", time: "20s" },
        { step: 6, priority: "high", title: "Underlying Cause", detail: "Atypical location, disproportionate oedema, heterogeneous density → underlying mass/AVM.", time: "30s" },
        { step: 7, priority: "normal", title: "ICH Score Calculation", detail: "GCS + volume + IVH + infratentorial + age. Max 6. Document in impression.", time: "15s" },
      ],
      template: `CT BRAIN ± CTA — INTRACRANIAL HAEMORRHAGE
Indication: [acute headache / focal deficit / decreased GCS]
Technique: NCCT ± CTA

HAEMATOMA
Location: Putaminal / Thalamic / Lobar (___ lobe) / Cerebellar / Brainstem / Other ___
Side: Right / Left
Density: Homogeneous hyperdense / Heterogeneous [heterogeneous = expansion risk]

VOLUME [ABC/2 — mandatory]
A: ___ cm  B: ___ cm  C: ___ cm
Volume: ___ ml  (>30ml surgical consideration; >60ml high mortality)

EXPANSION RISK
Spot sign (CTA): No / Yes — number ___ [HIGH expansion risk]
Irregular margins: No / Yes  Satellite haematomas: No / Yes

IVH
Present: No / Yes — Right lateral / Left lateral / 3rd / 4th
Graeb IVH Score: ___ /12
Hydrocephalus: No / Yes — temporal horns ___ mm

HERNIATION
Midline shift: No / Yes — ___ mm
Subfalcine: No / Yes  Uncal: No / Yes
Basal cisterns: Patent / Compressed / Obliterated

AETIOLOGY
Hypertensive (typical location): Yes / No
Amyloid angiopathy (lobar, elderly): No / Possible / Yes
Underlying mass: No / Suspected ___
AVM/vascular malformation: No / Suspected ___

ICH SCORE [Hemphill 2001]
GCS 3-4=2 / 5-12=1 / 13-15=0: ___
Volume ≥30ml=1 / <30=0: ___
IVH present=1 / absent=0: ___
Infratentorial=1 / supratentorial=0: ___
Age ≥80=1 / <80=0: ___
ICH Score: ___ /6  (0→0%, 2→26%, 3→72%, 4→97% 30-day mortality)

IMPRESSION
[Location] ICH, volume ___ ml.
ICH Score: ___ /6 (___ % predicted mortality)
IVH: No / Yes (Graeb ___)  Spot sign: No / Yes
Midline shift: No / ___ mm
Aetiology: [Hypertensive / Amyloid / Suspected underlying lesion / Unknown]
Urgency: EMERGENCY — neurosurgical notification`,
    },
    cs: {
      label: "Intrakraniální krvácení",
      evidence: "ICH skóre (Hemphill et al. Stroke 2001); metoda ABC/2 Broderick 1993; guidelines AHA/ASA pro ICH 2022",
      criticalFindings: ["Spot sign (riziko expanze hematomu)", "Rozšíření do komor", "Herniace", "Tumor v podkladí"],
      searchEvidence: "Delong 2010 — spot sign predikuje expanzi; IVH skóre Tuhrim 1999; systematika dle AHA 2022",
      searchMismatch: "Odhad objemu je vynecháván nebo prováděn od oka. Metoda ABC/2 musí být provedena u každého ICH — ovlivňuje ICH skóre a management. Spot sign na CTA je často přehlízen.",
      searchPattern: [
        { step: 1, priority: "critical", title: "Lokalizace určuje etiologii", detail: "Putaminální/talamická = hypertenzní. Lobární = amyloidová angiopatie/tumor/AVM. Mozečková = hypertenzní/AVM. Kmen = hypertenzní (velmi vysoká mortalita). SAK = aneuryzma.", time: "20s" },
        { step: 2, priority: "critical", title: "Objem — metoda ABC/2 povinně", detail: "A × B × C/2. >30 ml = zvažovat chirurgii. >60 ml = vysoká mortalita. Povinné u každého ICH, nelze vynechat.", time: "30s" },
        { step: 3, priority: "critical", title: "Spot sign — CTA", detail: "Enhancující ložiska uvnitř hematomu v arteriální fázi = aktivní krvácení = 3–6× vyšší riziko expanze. Hledejte aktivně — drobná ložiska 1–2 mm.", time: "30s" },
        { step: 4, priority: "critical", title: "IVH + hydrocefalus", detail: "Které komory jsou postiženy? Graebovo IVH skóre. Dilatace temporálních rohů = časný obstruktivní hydrocefalus. Rozhodnutí o EVD.", time: "20s" },
        { step: 5, priority: "critical", title: "Herniace", detail: "Deviace střední čáry (septum pellucidum). Subfalcinní, unkální, transtentoriální herniace. Bazální cisterny.", time: "20s" },
        { step: 6, priority: "high", title: "Příčina krvácení", detail: "Atypická lokalizace, nepřiměřený edém, heterogenní denzita → tumor/AVM v podkladí.", time: "30s" },
        { step: 7, priority: "normal", title: "Výpočet ICH skóre", detail: "GCS + objem + IVH + infratentoriální lokalizace + věk. Maximum 6. Uvést v závěru.", time: "15s" },
      ],
      template: `CT MOZKU ± CTA — INTRAKRANIÁLNÍ KRVÁCENÍ
Indikace: [akutní bolest hlavy / ložiskový neurologický deficit / pokles GCS]
Technika: NCCT ± CTA

NÁLEZ

Hematom
Lokalizace: Putaminální / Talamická / Lobární (___lalok) / Mozečková / Mozkový kmen / Jiná ___
Strana: Vpravo / Vlevo
Denzita: Homogenně hyperdenzní / Heterogenní [heterogenní = riziko expanze]

Objem [metoda ABC/2 — povinně]
A: ___ cm  B: ___ cm  C: ___ cm
Objem: ___ ml  (>30 ml zvažovat chirurgii; >60 ml vysoká mortalita)

Riziko expanze hematomu
Spot sign (CTA): Ne / Ano — počet ___ [VYSOKÉ riziko expanze]
Nepravidelné okraje: Ne / Ano  Satelitní hemotomy: Ne / Ano

Intraventrikulární krvácení (IVH)
Přítomno: Ne / Ano — Pravá postranní / Levá postranní / III. komora / IV. komora
Graebovo IVH skóre: ___ /12
Hydrocefalus: Ne / Ano — temporální rohy ___ mm

Herniace
Deviace střední čáry: Ne / Ano — ___ mm
Subfalcinní: Ne / Ano  Unkální: Ne / Ano
Bazální cisterny: Volné / Stlačené / Obliterovány

Etiologie
Hypertenzní (typická lokalizace): Ano / Ne
Amyloidová angiopatie (lobární, vyšší věk): Ne / Možná / Ano
Tumor v podkladí: Ne / Suspektní ___
AVM / cévní malformace: Ne / Suspektní ___

ICH skóre [Hemphill 2001]
GCS 3–4 = 2 b / 5–12 = 1 b / 13–15 = 0 b: ___
Objem ≥30 ml = 1 b / <30 ml = 0 b: ___
IVH přítomno = 1 b / nepřítomno = 0 b: ___
Infratentoriální lokalizace = 1 b / supratentoriální = 0 b: ___
Věk ≥80 let = 1 b / <80 let = 0 b: ___
ICH skóre celkem: ___ /6  (0 → 0 %, 2 → 26 %, 3 → 72 %, 4 → 97 % mortalita za 30 dní)

ZÁVĚR
Intrakraniální krvácení [lokalizace], objem ___ ml.
ICH skóre: ___ /6 (předpokládaná mortalita ___ %)
IVH: Ne / Ano (Graeb ___)  Spot sign: Ne / Ano
Deviace střední čáry: Ne / ___ mm
Etiologie: [Hypertenzní / Amyloidová angiopatie / Suspektní tumor v podkladí / Nezjištěna]
URGENTNÍ NÁLEZ — nutná konzultace neurochirurgie`,
    },
  },

  {
    id: "sah",
    category: "neuro",
    en: {
      label: "Subarachnoid Haem.",
      evidence: "Modified Fisher Grade (Frontera 2006); Ottawa SAH Rule Perry 2011; ISUIA aneurysm rupture risk data",
      criticalFindings: ["Aneurysm on CTA", "Hydrocephalus", "Modified Fisher grade", "Parenchymal haematoma"],
      searchEvidence: "Frontera 2006 Modified Fisher validation; ISAT/ISUIA aneurysm data; blood distribution predicts aneurysm location",
      searchMismatch: "Most radiologists report SAH distribution then look for aneurysm. Correct: use blood distribution to PREDICT aneurysm location FIRST, then go there on CTA.",
      searchPattern: [
        { step: 1, priority: "critical", title: "Confirm SAH — All Cisterns", detail: "Sylvian fissures, basal cisterns, interhemispheric fissure, prepontine, sulci.", time: "20s" },
        { step: 2, priority: "critical", title: "Distribution → Predict Aneurysm Location", detail: "Sylvian = MCA. Interhemispheric/anterior = AComm. Prepontine = basilar. Perisellar = ICA/PComm. Go there on CTA first.", time: "20s" },
        { step: 3, priority: "critical", title: "CTA — Targeted Aneurysm Hunt", detail: "Predicted location first. Saccular outpouching, daughter sac (rupture indicator). If negative, survey full Circle of Willis.", time: "60s" },
        { step: 4, priority: "critical", title: "Hydrocephalus", detail: "Temporal horn dilation (normal <2mm). Third ventricle rounding. Acute hydrocephalus = EVD.", time: "20s" },
        { step: 5, priority: "high", title: "Modified Fisher Grade", detail: "1: focal/thin SAH no IVH. 2: thin + IVH. 3: thick no IVH. 4: thick + IVH. Grade 3/4 = highest vasospasm risk.", time: "15s" },
        { step: 6, priority: "high", title: "Parenchymal Haematoma", detail: "Associated ICH? Location correlates with aneurysm (sylvian haematoma = MCA).", time: "15s" },
        { step: 7, priority: "normal", title: "Full Brain Survey", detail: "Parenchyma, cerebral oedema, infarction (vasospasm if delayed).", time: "20s" },
      ],
      template: `CT BRAIN + CTA — SUBARACHNOID HAEMORRHAGE
Indication: [thunderclap headache / reduced GCS]
Technique: NCCT + CTA circle of Willis ± CTV

SAH
Confirmed: Yes / No
Distribution:
  Basal cisterns: No / Trace / Thick
  Sylvian fissure R: No / Thin / Thick  L: No / Thin / Thick
  Interhemispheric: No / Yes
  Prepontine: No / Yes  Cortical sulci: No / Yes ___
  IVH: No / Yes — ventricles ___

MODIFIED FISHER GRADE [Frontera 2006]
Grade 1: Focal/thin, no IVH (vasospasm 24%)
Grade 2: Thin + IVH (33%)
Grade 3: Thick, no IVH (33%)
Grade 4: Thick + IVH (40%)
→ Grade: ___

ANEURYSM [CTA]
Identified: No / Yes
  Location: AComm / PComm R/L / MCA R/L / ICA / Basilar / PICA / Other ___
  Size: ___ mm  Neck: ___ mm
  Morphology: Saccular / Irregular / Daughter sac [rupture indicator]
Multiple: No / Yes ___
Perimesencephalic (non-aneurysmal): No / Yes

HYDROCEPHALUS
Temporal horns: R ___ mm  L ___ mm  (normal <2mm)
3rd ventricle: Normal / Dilated  Acute: No / Yes [EVD]

PARENCHYMAL
ICH: No / Yes — ___ ml  Oedema: No / Yes  Infarction: No / Yes ___

IMPRESSION
SAH, [distribution].
Modified Fisher Grade: ___
Aneurysm: Not identified / [location, size, morphology]
Hydrocephalus: No / Yes
Urgency: EMERGENCY — neurosurgical/IR notification`,
    },
    cs: {
      label: "Subarachnoidální krvácení",
      evidence: "Modifikovaný Fisherův stupeň (Frontera 2006); Ottawská pravidla pro SAK Perry 2011; data ISUIA o riziku ruptury aneuryzmatu",
      criticalFindings: ["Aneuryzma na CTA", "Hydrocefalus", "Modifikovaný Fisherův stupeň", "Parenchymatózní hematom"],
      searchEvidence: "Validace modifikovaného Fisherova stupně Frontera 2006; data ISAT/ISUIA; distribuce krve předpovídá lokalizaci aneuryzmatu",
      searchMismatch: "Většina radiologů popíše distribuci SAK a pak hledá aneuryzma. Správně: použijte distribuci krve k PŘEDPOVĚDI lokalizace aneuryzmatu NEJDŘÍVE, a pak tam jděte na CTA.",
      searchPattern: [
        { step: 1, priority: "critical", title: "Potvrzení SAK — všechny cisterny", detail: "Silviovská rýha, bazální cisterny, interhemisférická rýha, prepontální cisterna, kortikální sulky.", time: "20s" },
        { step: 2, priority: "critical", title: "Distribuce → předpověď lokalizace aneuryzmatu", detail: "Silviovská rýha = MCA. Interhemisféricky/anteriorně = AComm. Prepontálně = bazilární tepna. Periselárně = ICA/PComm. Na CTA jděte nejdříve tam.", time: "20s" },
        { step: 3, priority: "critical", title: "CTA — cílené hledání aneuryzmatu", detail: "Nejdříve předpovídaná lokalizace. Sakulární výchlipka, dceřiný vak (příznak ruptury). Při negativitě systematické projití celého Willisova okruhu.", time: "60s" },
        { step: 4, priority: "critical", title: "Hydrocefalus", detail: "Dilatace temporálních rohů (norma <2 mm). Zaoblení III. komory. Akutní hydrocefalus = EVD.", time: "20s" },
        { step: 5, priority: "high", title: "Modifikovaný Fisherův stupeň", detail: "1: fokální/tenká vrstva SAK bez IVH. 2: tenká vrstva + IVH. 3: silná vrstva bez IVH. 4: silná vrstva + IVH. Stupeň 3/4 = nejvyšší riziko vazospazmu.", time: "15s" },
        { step: 6, priority: "high", title: "Parenchymatózní hematom", detail: "Přidružené ICH? Lokalizace odpovídá aneuryzmatu (hematom v Silviovské rýze = MCA).", time: "15s" },
        { step: 7, priority: "normal", title: "Celkový přehled mozku", detail: "Parenchym, edém, infarkt (vazospazmus při opožděné prezentaci).", time: "20s" },
      ],
      template: `CT MOZKU + CTA — SUBARACHNOIDÁLNÍ KRVÁCENÍ
Indikace: [hrom bouřkové bolesti hlavy / snížení GCS]
Technika: NCCT + CTA Willisova okruhu ± CTV

NÁLEZ

Subarachnoidální krvácení (SAK)
Potvrzeno: Ano / Ne
Distribuce:
  Bazální cisterny: Ne / Stopy / Silná vrstva
  Silviovská rýha vpravo: Ne / Tenká vrstva / Silná vrstva  vlevo: Ne / Tenká / Silná
  Interhemisférická rýha: Ne / Ano
  Prepontální cisterna: Ne / Ano  Kortikální sulky: Ne / Ano ___
  IVH: Ne / Ano — komory ___

Modifikovaný Fisherův stupeň [Frontera 2006]
Stupeň 1: Fokální/tenká vrstva SAK bez IVH (riziko vazospazmu 24 %)
Stupeň 2: Tenká vrstva + IVH (33 %)
Stupeň 3: Silná vrstva bez IVH (33 %)
Stupeň 4: Silná vrstva + IVH (40 %)
→ Stupeň: ___

Aneuryzma [CTA]
Identifikováno: Ne / Ano
  Lokalizace: AComm / PComm vpravo/vlevo / MCA vpravo/vlevo / ICA / Bazilární tepna / PICA / Jiné ___
  Velikost: ___ mm  Krček: ___ mm
  Morfologie: Sakulární / Nepravidelné / Dceřiný vak [příznak ruptury]
Mnohočetná aneuryzmata: Ne / Ano ___
Perimezencefalický vzorec (nearteryzmatické): Ne / Ano

Hydrocefalus
Temporální rohy: Vpravo ___ mm  Vlevo ___ mm  (norma <2 mm)
III. komora: Normální / Dilatovaná  Akutní hydrocefalus: Ne / Ano [EVD]

Parenchymatózní nález
ICH: Ne / Ano — ___ ml  Edém: Ne / Ano  Infarkt: Ne / Ano ___

ZÁVĚR
Subarachnoidální krvácení, [distribuce].
Modifikovaný Fisherův stupeň: ___
Aneuryzma: Neidentifikováno / [lokalizace, velikost, morfologie]
Hydrocefalus: Ne / Ano
URGENTNÍ NÁLEZ — nutná konzultace neurochirurgie/intervenční neuroradiologie`,
    },
  },

  {
    id: "headtrauma",
    category: "neuro",
    en: {
      label: "Head Trauma",
      evidence: "Rotterdam Score (Maas 2005); Marshall CT Classification 1991; NICE head injury guidelines 2023",
      criticalFindings: ["Epidural haematoma", "Midline shift >5mm", "Absent basal cisterns", "Herniation"],
      searchEvidence: "Maas 2005 Rotterdam validation; Marshall 1991 outcome correlation; NICE 2023 systematic search mandate",
      searchMismatch: "Bone windows looked at last or skipped. Correct: bone windows SECOND (after haemorrhage check), before detailed parenchyma. EDH most reliably found on bone windows. Temporal bone fractures invisible on brain windows.",
      searchPattern: [
        { step: 1, priority: "critical", title: "Brain Windows — Haemorrhage", detail: "EDH (biconvex, no suture crossing), SDH (crescent), SAH (sulcal), contusions (frontal/temporal poles), DAI (grey-white junction, corpus callosum).", time: "30s" },
        { step: 2, priority: "critical", title: "Bone Windows — Skull + Base", detail: "Vault fractures — especially temporal (MMA = EDH risk). Skull base, temporal bone, cribriform plate. Depressed fractures.", time: "30s" },
        { step: 3, priority: "critical", title: "Midline Shift + Herniation", detail: "Shift at septum pellucidum. >5mm = surgical consideration. Uncal herniation — ipsilateral suprasellar cistern. Basal cisterns (drives Rotterdam).", time: "20s" },
        { step: 4, priority: "critical", title: "EDH — Expansion Risk", detail: "Heterogeneous density = active bleeding = emergency even if small. Biconvex >1cm, >30ml, or >5mm shift = operative.", time: "20s" },
        { step: 5, priority: "high", title: "Contusions + DAI", detail: "Frontal/temporal poles. Corpus callosum, dorsolateral brainstem = DAI (subtle on CT, MRI needed).", time: "20s" },
        { step: 6, priority: "high", title: "Rotterdam Score", detail: "Basal cisterns(0-2) + midline shift(0-1) + epidural mass(0-1) + IVH/SAH(0-1). Score ≥4 = mortality >50%.", time: "15s" },
        { step: 7, priority: "normal", title: "Soft Tissue + Sinuses", detail: "Scalp haematoma (impact point). Pneumocephalus. Sinuses (fluid = skull base fracture).", time: "20s" },
      ],
      template: `CT BRAIN — HEAD TRAUMA
Mechanism: [___]  GCS: ___  Lateralising signs: No / Yes ___
Technique: NCCT ± CTA if vascular injury suspected

HAEMORRHAGE
EDH: No / Yes
  Location: ___  Volume: ___ ml  Thickness: ___ mm
  Density: Homogeneous / Heterogeneous [heterogeneous = active bleeding]
  Crossing sutures: No / Yes [reconsider diagnosis]

SDH: No / Yes
  Acute / Subacute / Chronic / Mixed
  Location: Convexity R/L / Interhemispheric / Tentorial
  Thickness: ___ mm

SAH: No / Yes — ___  IVH: No / Yes — ventricles ___
Contusions: No / Yes — location ___, size ___
DAI: No / Suspected — [corpus callosum / grey-white / brainstem]
ICH: No / Yes — location ___, volume ___ ml

MASS EFFECT & HERNIATION
Midline shift: No / Yes — ___ mm
Subfalcine: No / Yes  Uncal: No / Yes
Basal cisterns: Patent / Compressed / Absent [Rotterdam]
Transtentorial: No / Yes

SKULL FRACTURES [bone windows]
Vault: None / Linear / Depressed ___ mm / Diastatic
  Location: ___  Crossing meningeal groove: No / Yes [EDH risk]
Skull base: None / Yes — ___  Temporal bone: Intact / Fracture ___

ROTTERDAM SCORE [Maas 2005]
Basal cisterns: Normal(0) / Compressed(1) / Absent(2): ___
Midline shift ≤5mm(0) / >5mm(1): ___
Epidural mass: Present(0) / Absent(1): ___
IVH/SAH: Absent(0) / Present(1): ___
Rotterdam: ___ + 1 = ___ /6  (≥4: mortality >50%)

ANCILLARY
Pneumocephalus: No / Yes  Scalp haematoma: ___
Sinuses: Clear / Opacified ___

IMPRESSION
[Injuries in severity order]
Rotterdam: ___ /6  Midline shift: No / ___ mm
Urgency: Non-operative / Neurosurgical consultation / Emergency OR`,
    },
    cs: {
      label: "Kraniocerebrální trauma",
      evidence: "Rotterdamské skóre (Maas 2005); Marshallova CT klasifikace 1991; guidelines NICE pro poranění hlavy 2023",
      criticalFindings: ["Epidurální hematom", "Deviace střední čáry >5 mm", "Absence bazálních cisteren", "Herniace"],
      searchEvidence: "Validace rotterdamského skóre Maas 2005; korelace výsledků Marshallova CT 1991; povinná systematika dle NICE 2023",
      searchMismatch: "Kostní okna jsou hodnocena jako poslední nebo vynechána. Správně: kostní okna JAKO DRUHÁ (po přehledu krvácení), před podrobným hodnocením parenchymu. EDH nejspolehlivěji viditelný v kostním okně. Zlomeniny spánkové kosti neviditelné v mozkovém okně.",
      searchPattern: [
        { step: 1, priority: "critical", title: "Mozková okna — krvácení", detail: "EDH (bikonvexní, nepřekračuje sutury), SDH (srpovitý), SAK (v kortikálních sulcích), kontuze (frontální/temporální póly), DAI (rozhraní šedé a bílé hmoty, corpus callosum).", time: "30s" },
        { step: 2, priority: "critical", title: "Kostní okna — kalva + spodina", detail: "Zlomeniny klenby — zejména temporální (a. meningea media = riziko EDH). Spodina lební, spánková kost, cribriformní ploténka. Depresi zlomeniny.", time: "30s" },
        { step: 3, priority: "critical", title: "Deviace střední čáry + herniace", detail: "Deviace na úrovni septum pellucidum. >5 mm = zvažovat chirurgii. Unkální herniace — supraselární cisterna. Bazální cisterny (klíčové pro rotterdamské skóre).", time: "20s" },
        { step: 4, priority: "critical", title: "EDH — riziko expanze", detail: "Heterogenní denzita = aktivní krvácení = emergentní situace i při malém objemu. Bikonvexní >1 cm, >30 ml nebo deviace >5 mm = operační indikace.", time: "20s" },
        { step: 5, priority: "high", title: "Kontuze + DAI", detail: "Frontální/temporální póly. Corpus callosum, dorzolaterální mozkový kmen = DAI (na CT subtilní, nutné MRI).", time: "20s" },
        { step: 6, priority: "high", title: "Rotterdamské skóre", detail: "Bazální cisterny (0–2) + deviace střední čáry (0–1) + epidurální expanze (0–1) + IVH/SAK (0–1). Skóre ≥4 = mortalita >50 %.", time: "15s" },
        { step: 7, priority: "normal", title: "Měkké tkáně + dutiny", detail: "Hematom skalpu (místo dopadu). Pneumocefalus. Paranazální dutiny (tekutina = zlomenina spodiny).", time: "20s" },
      ],
      template: `CT MOZKU — KRANIOCEREBRÁLNÍ TRAUMA
Mechanismus: [___]  GCS: ___  Lateralizační příznaky: Ne / Ano ___
Technika: NCCT ± CTA při podezření na cévní poranění

NÁLEZ

Krvácení
Epidurální hematom (EDH): Ne / Ano
  Lokalizace: ___  Objem: ___ ml  Tloušťka: ___ mm
  Denzita: Homogenní / Heterogenní [heterogenní = aktivní krvácení]
  Překračuje sutury: Ne / Ano [přehodnotit diagnózu]

Subdurální hematom (SDH): Ne / Ano
  Akutní / Subakutní / Chronický / Smíšený
  Lokalizace: Konvexita vpravo/vlevo / Interhemisféricky / Tentoriálně
  Tloušťka: ___ mm

SAK: Ne / Ano — ___  IVH: Ne / Ano — komory ___
Kontuze: Ne / Ano — lokalizace ___, velikost ___
DAI: Ne / Suspektní — [corpus callosum / rozhraní šedé a bílé hmoty / mozkový kmen]
ICH: Ne / Ano — lokalizace ___, objem ___ ml

Expanze + herniace
Deviace střední čáry: Ne / Ano — ___ mm
Subfalcinní herniace: Ne / Ano  Unkální herniace: Ne / Ano
Bazální cisterny: Volné / Stlačené / Obliterovány [klíčové pro rotterdamské skóre]
Transtentoriální herniace: Ne / Ano

Zlomeniny kalvy a spodiny lební [kostní okna]
Kalva: Bez zlomeniny / Lineární / Deprimovaná ___ mm / Diastáza
  Lokalizace: ___  Přechod přes drážku a. meningea media: Ne / Ano [riziko EDH]
Spodina lební: Bez zlomeniny / Ano — oblast ___  Spánková kost: Intaktní / Zlomenina ___

Rotterdamské skóre [Maas 2005]
Bazální cisterny: Normální(0) / Stlačené(1) / Obliterovány(2): ___
Deviace střední čáry ≤5 mm(0) / >5 mm(1): ___
Epidurální expanze: Přítomna(0) / Nepřítomna(1): ___
IVH/SAK: Nepřítomno(0) / Přítomno(1): ___
Rotterdam celkem: ___ + 1 = ___ /6  (≥4: mortalita >50 %)

Doplňkový nález
Pneumocefalus: Ne / Ano  Hematom skalpu: ___
Paranazální dutiny: Volné / Opacifikovány ___

ZÁVĚR
[Poranění seřazena dle závažnosti]
Rotterdamské skóre: ___ /6  Deviace střední čáry: Ne / ___ mm
Naléhavost: Konzervativní / Konzultace neurochirurgie / Emergentní operace`,
    },
  },

  {
    id: "braintumor",
    category: "neuro",
    en: {
      label: "Brain Mass / Tumour",
      evidence: "WHO CNS Classification 2021; EANO glioma guidelines 2021; RANO criteria; Cha 2006 CT characterisation",
      criticalFindings: ["Herniation", "Haemorrhage into mass", "Hydrocephalus", "Leptomeningeal spread"],
      searchEvidence: "Cha 2006 systematic CT characterisation; WHO 2021 integrated diagnosis; EANO 2021 structured reporting",
      searchMismatch: "Single-phase CT inadequate for brain tumour characterisation — always flag MRI need. On CT: single vs multiple changes differential entirely. Herniation/hydrocephalus = acute management determinants.",
      searchPattern: [
        { step: 1, priority: "critical", title: "Number of Lesions", detail: "Multiple grey-white junction = metastases. Periventricular = lymphoma/GBM. Single ring-enhancing: GBM/metastasis/abscess/lymphoma.", time: "20s" },
        { step: 2, priority: "critical", title: "Herniation + Hydrocephalus", detail: "Before detailed characterisation: mass effect, shift, herniation, ventricular obstruction. Determines emergency management.", time: "20s" },
        { step: 3, priority: "high", title: "Lesion Characterisation", detail: "Intra-axial vs extra-axial (changes differential completely). Density. Enhancement. Oedema. Necrosis. Haemorrhage.", time: "45s" },
        { step: 4, priority: "high", title: "Distribution Pattern", detail: "Cortical/grey-white = metastases. Periventricular = lymphoma/GBM. Corpus callosum = GBM butterfly. Extra-axial + dural tail = meningioma.", time: "20s" },
        { step: 5, priority: "high", title: "Leptomeningeal Disease", detail: "Sulcal enhancement, ependymal enhancement, cranial nerve enhancement.", time: "20s" },
        { step: 6, priority: "normal", title: "Bone Windows", detail: "Calvarial invasion, hyperostosis, skull base erosion, lytic/sclerotic metastases.", time: "15s" },
      ],
      template: `CT BRAIN WITH CONTRAST — BRAIN MASS
Indication: [headache / seizure / focal deficit / known malignancy]
Technique: NCCT + CECT  [Note: MRI brain with contrast required for definitive characterisation]

LESION
Number: Single / Multiple
Location: Intra-axial / Extra-axial [critical distinction]
  Lobe: Frontal / Temporal / Parietal / Occipital / PF / Corpus callosum / Brainstem
  Side: R / L / Midline
  Grey-white junction: No / Yes  Periventricular: No / Yes

Size: ___ × ___ × ___ mm
Density (NCCT): Hyperdense / Isodense / Hypodense / Heterogeneous / Calcified
Enhancement: No / Solid / Ring / Heterogeneous / Dural tail
Necrosis: No / Yes  Haemorrhage: No / Yes
Oedema: Absent / Mild / Moderate / Severe — ___ cm beyond lesion

MASS EFFECT
Midline shift: No / Yes — ___ mm
Hydrocephalus: No / Yes
Herniation: No / Subfalcine / Uncal / Transtentorial
Basal cisterns: Patent / Compressed / Obliterated

DIFFERENTIAL
Single ring-enhancing: GBM / Metastasis / Abscess / Lymphoma
Multiple (grey-white junction): Metastases
Extra-axial + dural tail: Meningioma
Butterfly (corpus callosum): GBM / Lymphoma
→ Working differential: ___

LEPTOMENINGEAL
Sulcal enhancement: No / Yes  Ependymal: No / Yes

BONES
Skull: Normal / Hyperostosis / Invasion ___

IMPRESSION
[Single/multiple] [intra/extra]-axial lesion(s), [location].
Working differential: ___
Mass effect: [describe]  Herniation: No / Yes
MRI brain with contrast required for definitive characterisation.`,
    },
    cs: {
      label: "Expanzivní proces mozku",
      evidence: "WHO klasifikace CNS 2021; guidelines EANO pro gliomy 2021; kritéria RANO; CT charakterizace Cha 2006",
      criticalFindings: ["Herniace", "Krvácení do expanze", "Hydrocefalus", "Leptomeningeální šíření"],
      searchEvidence: "Systematická CT charakterizace Cha 2006; integrovaná diagnóza WHO 2021; strukturované hlášení EANO 2021",
      searchMismatch: "Jednofázové CT je nedostatečné pro charakterizaci mozkového tumoru — vždy indikujte MRI. Na CT: počet lézí zcela mění diferenciální diagnózu. Herniace/hydrocefalus = akutní management.",
      searchPattern: [
        { step: 1, priority: "critical", title: "Počet lézí", detail: "Mnohočetné na rozhraní šedé a bílé hmoty = metastázy. Periventrikulárně = lymfom/GBM. Solitární prstencové sycení: GBM/metastáza/absces/lymfom.", time: "20s" },
        { step: 2, priority: "critical", title: "Herniace + hydrocefalus", detail: "Před podrobnou charakterizací: expanze, deviace, herniace, obstrukce komor. Určuje potřebu akutního managementu.", time: "20s" },
        { step: 3, priority: "high", title: "Charakterizace léze", detail: "Intraxiální vs. extraaxiální (zcela mění diferenciální diagnózu). Denzita. Sycení. Edém. Nekróza. Krvácení.", time: "45s" },
        { step: 4, priority: "high", title: "Distribuční vzorec", detail: "Kortikálně/rozhraní šedé a bílé hmoty = metastázy. Periventrikulárně = lymfom/GBM. Corpus callosum = GBM motýlkový vzorec. Extraaxiální + durální přívěsek = meningeom.", time: "20s" },
        { step: 5, priority: "high", title: "Leptomeningeální postižení", detail: "Sycení sulků, ependymální sycení, sycení hlavových nervů.", time: "20s" },
        { step: 6, priority: "normal", title: "Kostní okna", detail: "Invaze klenby, hyperostóza, destrukce spodiny, lytické/sklerotické metastázy.", time: "15s" },
      ],
      template: `CT MOZKU S KONTRASTEM — EXPANZIVNÍ PROCES
Indikace: [bolest hlavy / epileptický záchvat / ložiskový deficit / onkologická anamnéza]
Technika: NCCT + CECT  [Poznámka: pro definitivní charakterizaci je nutné MRI mozku s kontrastem]

NÁLEZ

Expanzivní proces
Počet: Solitární / Mnohočetný
Lokalizace: Intraxiální / Extraaxiální [klíčové rozlišení]
  Lalok: Frontální / Temporální / Parietální / Okcipitální / Zadní jáma / Corpus callosum / Mozkový kmen
  Strana: Vpravo / Vlevo / Středočárově
  Rozhraní šedé a bílé hmoty: Ne / Ano  Periventrikulárně: Ne / Ano

Velikost: ___ × ___ × ___ mm
Denzita (NCCT): Hyperdenzní / Izodenzní / Hypodenzní / Heterogenní / Kalcifikace
Sycení: Bez sycení / Solidní / Prstencové / Heterogenní / Durální přívěsek
Nekróza: Ne / Ano  Krvácení: Ne / Ano
Perifokální edém: Nepřítomen / Mírný / Střední / Výrazný — ___ cm od léze

Expanzivní účinek
Deviace střední čáry: Ne / Ano — ___ mm
Hydrocefalus: Ne / Ano
Herniace: Ne / Subfalcinní / Unkální / Transtentoriální
Bazální cisterny: Volné / Stlačené / Obliterovány

Diferenciální diagnóza
Solitární prstencové sycení: GBM / Metastáza / Absces / Lymfom
Mnohočetné (rozhraní šedé a bílé hmoty): Metastázy
Extraaxiální + durální přívěsek: Meningeom
Motýlkový vzorec (corpus callosum): GBM / Lymfom
→ Pracovní diferenciální diagnóza: ___

Leptomeningeální postižení
Sycení sulků: Ne / Ano  Ependymální sycení: Ne / Ano

Kostní nález
Kalva: Normální / Hyperostóza / Invaze ___

ZÁVĚR
[Solitární/mnohočetná] [intra/extra]axiální expanze, [lokalizace].
Pracovní diferenciální diagnóza: ___
Expanzivní účinek: [popis]  Herniace: Ne / Ano
Pro definitivní charakterizaci doporučujeme MRI mozku s gadoliniem.`,
    },
  },

  {
    id: "venousthrombosis",
    category: "neuro",
    en: {
      label: "Venous Sinus Thrombosis",
      evidence: "EFNS/EAN CVT guidelines 2017; Ferro et al. ISCVT 2004; Dmytriw 2018 CT diagnosis systematic review",
      criticalFindings: ["Haemorrhagic infarction", "Bilateral thalamic involvement", "Posterior fossa thrombosis"],
      searchEvidence: "Dmytriw 2018 — NCCT sensitivity 33%, CTV 75-100%; EFNS 2017 mandate CTV; cord/dense triangle sign detection",
      searchMismatch: "CVT most missed intracranial emergency. NCCT alone misses 65% of cases. Dense triangle/cord signs require active search. Always request CTV when CVT suspected.",
      searchPattern: [
        { step: 1, priority: "critical", title: "Dense Triangle / Cord Signs", detail: "Hyperdense SSS (dense triangle, posterior 1/3). Hyperdense transverse sinus. Cord sign (cortical vein thrombosis). Require narrow windowing and active search.", time: "30s" },
        { step: 2, priority: "critical", title: "Bilateral Thalamic Oedema", detail: "Bilateral symmetric thalamic hypodensity = deep CVT (internal cerebral veins/straight sinus). Trigger immediate CTV.", time: "15s" },
        { step: 3, priority: "critical", title: "Haemorrhagic Infarction — Atypical Location", detail: "Not respecting arterial territory, parasagittal or cortical = CVT. Cortical SAH.", time: "20s" },
        { step: 4, priority: "critical", title: "Empty Delta Sign — Post-Contrast", detail: "Filling defect in posterior SSS = empty delta. Specific for CVT.", time: "20s" },
        { step: 5, priority: "high", title: "CTV — All Sinuses", detail: "SSS, transverse (bilateral), sigmoid, straight, vein of Galen, internal cerebral veins, cortical veins.", time: "45s" },
        { step: 6, priority: "normal", title: "Brain Parenchyma", detail: "Oedema, infarction, haemorrhage location.", time: "20s" },
      ],
      template: `CT BRAIN + CTV — CEREBRAL VENOUS THROMBOSIS
Indication: [headache / papilloedema / seizure / focal deficit with normal CTA]
Technique: NCCT + CTV [NCCT alone insufficient — sensitivity 33%]

NCCT DIRECT SIGNS
Dense triangle (SSS): No / Yes
Cord sign (cortical vein): No / Yes — location ___
Dense transverse sinus: No / Yes — R / L
Straight sinus hyperdensity: No / Yes

NCCT INDIRECT SIGNS
Bilateral thalamic oedema/haemorrhage: No / Yes [deep CVT]
Parasagittal haemorrhagic infarction: No / Yes
Cortical SAH: No / Yes
Oedema not following arterial territory: No / Yes

CTV
Empty delta sign (SSS): No / Yes
SSS: Patent / Thrombosed — extent ___
R transverse: Patent / Thrombosed / Hypoplastic
L transverse: Patent / Thrombosed / Hypoplastic
Sigmoid R/L: Patent / Thrombosed
Straight sinus: Patent / Thrombosed
Internal cerebral veins: Patent / Thrombosed
Vein of Galen: Patent / Thrombosed
Cortical veins: None / Thrombosis — location ___

PARENCHYMA
Oedema: No / Yes — location ___  Bilateral thalamic: ___
Haemorrhagic infarction: No / Yes — location ___

IMPRESSION
[CVT confirmed / Suspected — CTV required / No CVT on CT]
Sinus involved: ___
Parenchymal complication: [specify]
Note: Negative NCCT does NOT exclude CVT
Urgency: Urgent — anticoagulation decision`,
    },
    cs: {
      label: "Trombóza mozkových žil a splavů",
      evidence: "Guidelines EFNS/EAN pro CVT 2017; Ferro et al. ISCVT 2004; systematický přehled CT diagnostiky CVT Dmytriw 2018",
      criticalFindings: ["Hemoragický infarkt", "Oboustranné postižení thalamu", "Trombóza zadní jámy"],
      searchEvidence: "Dmytriw 2018 — senzitivita NCCT 33 %, CTV 75–100 %; EFNS 2017 nařizuje CTV; metodika detekce příznaku cord a dense triangle",
      searchMismatch: "CVT je nejčastěji přehlíženou intrakraniální urgentní diagnózou. Samotné NCCT přehlíží 65 % případů. Příznaky dense triangle a cord vyžadují aktivní cílené hledání. Při podezření na CVT vždy indikujte CTV.",
      searchPattern: [
        { step: 1, priority: "critical", title: "Příznak dense triangle + příznak cord", detail: "Hyperdenzní SSS (dense triangle, zadní třetina). Hyperdenzní transverzální splav. Příznak cord (trombóza kortikální žíly — hyperdenzní kortikální žíla). Vyžaduje úzká okna a aktivní hledání.", time: "30s" },
        { step: 2, priority: "critical", title: "Oboustranný edém thalamu", detail: "Oboustranná symetrická hypodenzita thalamu = hluboká CVT (vv. cerebri internae/přímý splav). Okamžitá indikace CTV.", time: "15s" },
        { step: 3, priority: "critical", title: "Hemoragický infarkt — atypická lokalizace", detail: "Nerespektuje arteriální teritorium, parasagitálně nebo kortikálně = CVT. Kortikální SAK.", time: "20s" },
        { step: 4, priority: "critical", title: "Příznak empty delta — po kontrastní látce", detail: "Výplňový defekt v zadní části SSS = příznak empty delta. Specifický pro CVT.", time: "20s" },
        { step: 5, priority: "high", title: "CTV — všechny splavu a žíly", detail: "SSS, transverzální splav (oboustranně), sigmoidální splav, přímý splav, v. Galeni, vv. cerebri internae, kortikální žíly.", time: "45s" },
        { step: 6, priority: "normal", title: "Parenchym mozku", detail: "Edém, infarkt, lokalizace krvácení.", time: "20s" },
      ],
      template: `CT MOZKU + CTV — TROMBÓZA MOZKOVÝCH ŽIL A SPLAVŮ
Indikace: [bolest hlavy / papilledém / epilepsie / ložiskový deficit při normální CTA]
Technika: NCCT + CTV [samotné NCCT nedostatečné — senzitivita 33 %]

NÁLEZ

Přímé CT příznaky na NCCT
Příznak dense triangle (SSS): Ne / Ano
Příznak cord (kortikální žíla): Ne / Ano — lokalizace ___
Hyperdenzní transverzální splav: Ne / Ano — vpravo/vlevo
Hyperdenzita přímého splavu: Ne / Ano

Nepřímé CT příznaky na NCCT
Oboustranný edém/krvácení thalamu: Ne / Ano [hluboká CVT]
Parasagitální hemoragický infarkt: Ne / Ano
Kortikální SAK: Ne / Ano
Edém nerespektující arteriální teritorium: Ne / Ano

CTV — hodnocení splavů a žil
Příznak empty delta (SSS): Ne / Ano
SSS: Průchodný / Trombóza — rozsah ___
Pravý transverzální splav: Průchodný / Trombóza / Hypoplazie
Levý transverzální splav: Průchodný / Trombóza / Hypoplazie
Sigmoidální splav vpravo/vlevo: Průchodný / Trombóza
Přímý splav: Průchodný / Trombóza
Vv. cerebri internae: Průchodné / Trombóza [oboustranné postižení thalamu]
V. Galeni: Průchodná / Trombóza
Kortikální žíly: Bez trombózy / Trombóza — lokalizace ___

Parenchymatózní nález
Edém: Ne / Ano — lokalizace ___  Oboustranný thalamický: ___
Hemoragický infarkt: Ne / Ano — lokalizace ___

ZÁVĚR
[Potvrzena CVT / Suspektní CVT — nutné CTV / Bez průkazu CVT na CT]
Postižené splavu/žíly: ___
Parenchymatózní komplikace: [specifikovat]
Poznámka: Negativní NCCT nevylučuje CVT — při klinickém podezření nutné CTV
Naléhavost: Urgentní — rozhodnutí o antikoagulaci (neurologie/hematologie)`,
    },
  },
];
