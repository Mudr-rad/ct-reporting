export const SPINE_TEMPLATES = [
  {
    id: "spinetrauma",
    category: "spine",
    en: {
      label: "Spine Trauma",
      evidence: "AO Spine TL Classification (Vaccaro 2013); TLICS Score (Vaccaro 2005); AO Spine subaxial cervical (Vaccaro 2015); NEXUS/Canadian C-Spine Rule",
      criticalFindings: ["Unstable fracture", "Canal compromise", "Distraction injury", "PLC disruption"],
      searchEvidence: "Vaccaro 2013 AO Spine TL validation; Patel 2007 TLICS reliability; Inaba 2013 systematic CT spine search; ATLS spinal clearance",
      searchMismatch: "Most describe the obvious fracture and move on. Critical errors: (1) multilevel injuries missed — up to 20% are non-contiguous. (2) Stability requires explicit PLC assessment. (3) Canal compromise measurement mandatory but frequently omitted.",
      searchPattern: [
        { step: 1, priority: "critical", title: "Alignment Survey — All Levels", detail: "Sagittal reconstructions first. ALL levels: height loss, kyphosis, listhesis. Classic miss: C7-T1 junction. Trace from occiput to sacrum.", time: "45s" },
        { step: 2, priority: "critical", title: "Canal Compromise — Measure", detail: "For each fracture: retropulsed fragment? % canal compromise (fragment AP / normal canal AP × 100). >50% = high neurological risk.", time: "30s" },
        { step: 3, priority: "critical", title: "AO Spine Classification", detail: "A (compression): A0-A4. B (tension band): B1-B3. C (translational — any translation = C). Higher type = more instability.", time: "30s" },
        { step: 4, priority: "critical", title: "PLC — Indirect CT Signs", detail: "CT cannot directly visualise PLC. Indirect: widened interspinous distance (>1.5× adjacent), facet widening/dislocation, spinous process avulsion, translation >2mm. Any = MRI recommended.", time: "20s" },
        { step: 5, priority: "critical", title: "Multilevel Injury Search", detail: "Continue survey after primary fracture. Non-contiguous in 15-20%. Check cervicothoracic and thoracolumbar junctions specifically.", time: "30s" },
        { step: 6, priority: "high", title: "TLICS Score (Thoracolumbar)", detail: "Morphology (1-3pts) + PLC (0-3pts) + neurology (0-4pts). ≤3 = non-op. 4 = equivocal. ≥5 = operative.", time: "15s" },
        { step: 7, priority: "normal", title: "Prevertebral / Paravertebral Soft Tissue", detail: "Prevertebral haematoma (cervical airway). Epidural haematoma. Pneumorrhachis.", time: "15s" },
      ],
      template: `CT SPINE — TRAUMA
Region: Cervical / Thoracic / Lumbar / Whole spine
Mechanism: [___]  GCS/Neurology: ___
Technique: Thin-slice axial + sagittal + coronal MPR

ALIGNMENT [sagittal — all levels]
Cervical: Normal / Kyphosis / Listhesis ___
Cervicothoracic (C7-T1): Normal / Abnormal ___
Thoracic: Normal / Kyphosis ___ ° / Listhesis ___
Thoracolumbar (T12-L2): Normal / Abnormal ___
Lumbar: Normal / Listhesis ___

PRIMARY FRACTURE
Level: ___

AO SPINE TYPE:
A — Compression:
  A0: Minor (transverse/spinous process)
  A1: Wedge compression
  A2: Split/pincer
  A3: Incomplete burst (posterior wall, unilateral pedicle)
  A4: Complete burst (posterior wall, both pedicles)
B — Tension band:
  B1: Bony posterior TBD  B2: PLC disruption  B3: Hyperextension
C — Translation/rotation (ANY translation = C — highly unstable)
→ AO Type: ___

FRACTURE DETAILS
Anterior height: ___ mm (normal ___) → Loss ___ %
Posterior height: ___ mm → Loss ___ %
Kyphosis at fracture: ___ °
Retropulsed fragment: No / Yes — ___ mm
Canal compromise: ___ % (>25% significant; >50% severe)
Facets: Intact / Subluxed / Dislocated R/L

PLC INDIRECT SIGNS [MRI for definitive]
Interspinous distance: ___ mm (adjacent ___) [>1.5× = disruption]
Spinous avulsion: No / Yes
Facet widening/dislocation: No / Yes
Translation: No / Yes — ___ mm
→ PLC: Intact / Disruption suspected (MRI) / Disrupted

TLICS [thoracolumbar — Vaccaro 2005]
Morphology: A0/A1/A2=1 / A3/A4/B1=2 / B2/B3/C=3: ___
PLC: Intact=0 / Suspected=2 / Disrupted=3: ___
Neurology: Intact=0 / Root=2 / Complete=2 / Incomplete=3 / Cauda=3: ___
TLICS: ___  (≤3 non-op; 4 equivocal; ≥5 operative)

CANAL
Canal AP at fracture: ___ mm (normal C >13, T >12, L >15mm)
Epidural haematoma: No / Yes — ___
Pneumorrhachis: No / Yes

MULTILEVEL
Secondary fracture: No / Yes — ___ type ___
Sacral fracture: No / Yes

CERVICAL SPECIFIC
C1: Normal / Jefferson / Posterior arch ___
C2: Normal / Odontoid (I/II/III) / Hangman ___
ADI: ___ mm (normal <3mm)
Foramen transversarium: Intact / Disrupted R/L [vertebral artery risk]

SOFT TISSUE
Prevertebral haematoma: No / Yes — level ___, AP ___ mm
Epidural haematoma: No / Yes — levels ___

IMPRESSION
[Level] fracture, AO Type [___].
Canal compromise: None / ___ %
TLICS: ___ ([non-op / equivocal / operative])
PLC: Intact / Suspected disruption / Disrupted
Multilevel: No / Yes — ___
Stability: Stable / Likely unstable / Unstable
Urgency: Routine / Urgent / Emergency`,
    },
    cs: {
      label: "Trauma páteře",
      evidence: "AO Spine TL klasifikace (Vaccaro 2013); TLICS skóre (Vaccaro 2005); AO Spine subaxiální cervikální klasifikace (Vaccaro 2015)",
      criticalFindings: ["Nestabilní zlomenina", "Kompromitace páteřního kanálu", "Distrakční poranění", "Poranění PLC"],
      searchEvidence: "Validace AO Spine TL Vaccaro 2013; spolehlivost TLICS Patel 2007; systematika CT páteře Inaba 2013; páteřní clearance ATLS",
      searchMismatch: "Většina radiologů popíše zjevnou zlomeninu a skončí. Kritické chyby: (1) víceúrovňová poranění přehlídnuta — až 20 % jsou nekontiguitní; (2) stabilita vyžaduje explicitní hodnocení PLC; (3) měření kompromitace kanálu je povinné, ale často vynecháváno.",
      searchPattern: [
        { step: 1, priority: "critical", title: "Hodnocení osy — všechny úrovně", detail: "Nejdříve sagitální rekonstrukce. VŠECHNY úrovně: ztráta výšky, kyfóza, anterolistéza. Klasicky přehlížené místo: přechod C7/Th1. Sledujte od okcipitu ke kosti křížové.", time: "45s" },
        { step: 2, priority: "critical", title: "Kompromitace páteřního kanálu — měření", detail: "U každé zlomeniny: retropulzní fragment? % kompromitace kanálu (AP fragment / normální AP kanálu × 100). >50 % = vysoké neurologické riziko.", time: "30s" },
        { step: 3, priority: "critical", title: "AO Spine klasifikace", detail: "A (komprese): A0–A4. B (zadní napěťová zóna): B1–B3. C (translace — jakákoli = C). Vyšší typ = větší nestabilita.", time: "30s" },
        { step: 4, priority: "critical", title: "PLC — nepřímé CT příznaky", detail: "CT neumožňuje přímou vizualizaci PLC. Nepřímé příznaky: rozšíření interspinózního prostoru (>1,5× sousední úroveň), dislokace fazetového kloubu, avulze trnového výběžku, translace >2 mm. Cokoli z toho = MRI.", time: "20s" },
        { step: 5, priority: "critical", title: "Hledání víceúrovňového poranění", detail: "Pokračujte v hodnocení i po nalezení primární zlomeniny. Nekontiguitní u 15–20 %. Zejména prohledejte cervikotorakální a torakolumbální přechod.", time: "30s" },
        { step: 6, priority: "high", title: "TLICS skóre (torakolumbální)", detail: "Morfologie (1–3 b) + PLC (0–3 b) + neurologie (0–4 b). ≤3 = konzervativně. 4 = hraniční. ≥5 = operačně.", time: "15s" },
        { step: 7, priority: "normal", title: "Prevertebrální / paravertebrální měkké tkáně", detail: "Prevertebrální hematom (cervikálně — ohrožení dýchacích cest). Epidurální hematom. Pneumorachis.", time: "15s" },
      ],
      template: `CT PÁTEŘE — TRAUMA
Oblast: Krční / Hrudní / Bederní / Celá páteř
Mechanismus: [___]  GCS/neurologický stav: ___
Technika: Tenkovrstvé axiální + sagitální + koronální MPR

NÁLEZ

Osa páteře [sagitální — všechny úrovně]
Krční páteř: Normální / Kyfóza / Anterolistéza ___
Cervikotorakální přechod (C7/Th1): Normální / Patologický ___
Hrudní páteř: Normální / Kyfóza ___ ° / Anterolistéza ___
Torakolumbální přechod (Th12/L2): Normální / Patologický ___
Bederní páteř: Normální / Anterolistéza ___

Primární zlomenina
Úroveň: ___

Typ dle AO Spine:
A — Komprese:
  A0: Minoritní (příčný/trnový výběžek)
  A1: Klínovitá komprese
  A2: Štěpná/klíšťová
  A3: Neúplná burstová (zadní stěna, jednostranný pedikl)
  A4: Kompletní burstová (zadní stěna, oba pedikly)
B — Poranění zadní napěťové zóny:
  B1: Kostní poranění zadní TZ  B2: Poranění PLC  B3: Hyperextenzní
C — Translace/rotace (JAKÁKOLI translace = C — vysoce nestabilní)
→ Typ AO: ___

Detaily zlomeniny
Přední výška: ___ mm (norma ___) → Ztráta ___ %
Zadní výška: ___ mm → Ztráta ___ %
Kyfotická angulace v místě zlomeniny: ___ °
Retropulzní fragment: Ne / Ano — ___ mm
Kompromitace kanálu: ___ % (>25 % = signifikantní; >50 % = závažná)
Fazetové klouby: Intaktní / Subluxace / Luxace vpravo/vlevo

Nepřímé CT příznaky poranění PLC [MRI pro definitivní hodnocení]
Interspinózní vzdálenost: ___ mm (sousední ___ mm) [>1,5× = poranění PLC]
Avulze trnového výběžku: Ne / Ano
Rozšíření/luxace fazetového kloubu: Ne / Ano
Translace: Ne / Ano — ___ mm
→ PLC: Intaktní / Poranění suspektní (nutné MRI) / Poranění prokázáno

TLICS skóre [torakolumbální — Vaccaro 2005]
Morfologie: A0/A1/A2=1 b / A3/A4/B1=2 b / B2/B3/C=3 b: ___
PLC: Intaktní=0 b / Suspektní=2 b / Poranění=3 b: ___
Neurologie: Intaktní=0 b / Kořenové=2 b / Kompletní=2 b / Inkompletní=3 b / Cauda=3 b: ___
TLICS celkem: ___  (≤3 konzervativně; 4 hraniční; ≥5 operačně)

Páteřní kanál
AP průměr kanálu v místě zlomeniny: ___ mm (norma: krční >13 mm, hrudní >12 mm, bederní >15 mm)
Epidurální hematom: Ne / Ano — ___
Pneumorachis: Ne / Ano

Víceúrovňové poranění
Sekundární zlomenina: Ne / Ano — úroveň ___, typ ___
Zlomenina kosti křížové: Ne / Ano

Cervikální specifika
C1: Normální / Jeffersonova zlomenina / Zlomenina zadního oblouku ___
C2: Normální / Zlomenina zubu (typ I/II/III) / Hangmanův typ ___
Atlantodentalní interval: ___ mm (norma <3 mm)
Foramen transversarium: Intaktní / Porušeno vpravo/vlevo [riziko poranění a. vertebralis]

Měkké tkáně
Prevertebrální hematom: Ne / Ano — úroveň ___, AP ___ mm
Epidurální hematom: Ne / Ano — úrovně ___

ZÁVĚR
Zlomenina [úroveň], typ AO [___].
Kompromitace kanálu: Žádná / ___ %
TLICS: ___ ([konzervativně / hraniční / operačně])
PLC: Intaktní / Poranění suspektní — MRI / Poranění prokázáno
Víceúrovňové poranění: Ne / Ano — ___
Stabilita: Stabilní / Pravděpodobně nestabilní / Nestabilní
Naléhavost: Plánovaná / Urgentní / Emergentní`,
    },
  },

  {
    id: "spinedegen",
    category: "spine",
    en: {
      label: "Degenerative Spine",
      evidence: "NASS nomenclature 2014 (Fardon); Fardon 2014 disc pathology nomenclature; Ulrich 1991 foraminal grading; Schizas 2010 lumbar stenosis CT/MRI",
      criticalFindings: ["Severe central stenosis", "Cauda equina compression", "Malignant cord compression", "Discitis-osteomyelitis"],
      searchEvidence: "Fardon 2014 NASS nomenclature standardisation; Andreisek 2013 systematic lumbar CT; Boden 1990 asymptomatic disc pathology prevalence",
      searchMismatch: "CT reports list level-by-level with disc + foramina. Wrong structure: clinician asks 'what is compressing this nerve root'. Search symptom-directed first. Also: bone windows for metastases/infection are consistently skipped.",
      searchPattern: [
        { step: 1, priority: "critical", title: "Bone Windows — Metastases / Infection", detail: "Before any disc: systematic bone window review. Lytic/sclerotic lesions. Endplate erosion/destruction = discitis. Epidural collection. A missed spinal metastasis causing instability is a medicolegal event.", time: "30s" },
        { step: 2, priority: "critical", title: "Canal Stenosis — Symptomatic Level First", detail: "Identify clinically relevant level from referral. Measure AP diameter. Grade: >12mm normal, 10-12mm relative, <10mm absolute. Trefoil canal. Ligamentum flavum hypertrophy.", time: "30s" },
        { step: 3, priority: "critical", title: "Cauda Equina Compression", detail: "Severe stenosis + symptoms = cauda equina syndrome until proven otherwise. Obliteration of epidural fat. Packed roots without CSF separation. Surgical emergency.", time: "15s" },
        { step: 4, priority: "high", title: "Disc — Correct Nomenclature (Fardon 2014)", detail: "Bulge (<25% circumference). Protrusion (base > apex). Extrusion (apex > base OR sequestered). Direction: central/paracentral/foraminal/extraforaminal.", time: "45s" },
        { step: 5, priority: "high", title: "Foraminal Stenosis — Both Sides", detail: "Ulrich: 0=normal fat, 1=partial obliteration, 2=complete obliteration, 3=nerve deformation. Far lateral disc — causes same-level ipsilateral radiculopathy, easily missed.", time: "30s" },
        { step: 6, priority: "normal", title: "Level-by-Level Survey", detail: "Disc height, osteophytes, Modic changes, facet arthrosis, listhesis, pars defect, scoliosis.", time: "30s" },
      ],
      template: `CT LUMBAR/THORACIC/CERVICAL SPINE — DEGENERATIVE
Indication: [back pain / radiculopathy level ___ / myelopathy]
Technique: Axial + sagittal + coronal MPR, bone + soft tissue windows

BONE WINDOWS [malignancy / infection — BEFORE disc assessment]
Vertebral bodies: Normal / Lytic ___ / Sclerotic ___ / Mixed ___
Endplates: Normal / Erosion/destruction ___ [discitis — CRITICAL]
Epidural collection: No / Yes — ___
Pedicles: Normal / Destruction ___
→ Malignant/infective pathology: No / Suspected — [describe — PRIORITISE]

CENTRAL CANAL [symptomatic level first]
Level    AP (mm)    Grade                              Cause
___      ___        Normal/>12 / Relative 10-12 / Absolute <10    ___
___      ___        ___                                ___
Cauda equina compression: No / Yes — level ___ [SURGICAL URGENCY]
Trefoil configuration: No / Yes — ___

DISC PATHOLOGY [Fardon 2014 NASS nomenclature]
L5/S1:
  Height: Preserved / Reduced ___ %
  Type: Normal / Bulge (<25%) / Protrusion (base>apex) / Extrusion (apex>base) / Sequestration
  Direction: Central / Paracentral R/L / Foraminal R/L / Extraforaminal R/L
  Canal effect: None / Mild indentation / Moderate / Severe compression
L4/L5:  [same format]
L3/L4:  [same format]
L2/L3:  [same format]
L1/L2:  [same format]

FORAMINAL STENOSIS [Ulrich — both sides]
Grade: 0=normal  1=partial obliteration  2=complete obliteration  3=nerve deformation
Level    Right    Left    Cause
L5/S1:   ___      ___     ___
L4/L5:   ___      ___     ___
L3/L4:   ___      ___     ___
Far lateral disc: No / Yes — level ___, side ___

FACET JOINTS
Most symptomatic: Hypertrophy: No/Mild/Mod/Severe  Effusion: No/Yes  Vacuum: No/Yes
Subluxation: No / Yes

ALIGNMENT
Spondylolisthesis: No / Yes
  Type: Degenerative / Isthmic (pars defect)
  Level: ___  Grade: I (<25%) / II / III / IV
  Direction: Antero / Retro
Pars defect (spondylolysis): No / Yes — level ___, R/L/Bilateral
Scoliosis: No / Yes — Cobb ___ °

POSTERIOR ELEMENTS
Ligamentum flavum: Normal / Hypertrophy — level ___, ___ mm (>4mm significant)
Epidural lipomatosis: No / Yes

IMPRESSION
Most significant findings:
1. [Level] — [disc + canal/foraminal grade]
2. ___  3. ___
Canal stenosis: None / Relative / Absolute — worst at ___
Nerve root: L___ / S___ — [left/right] — [canal/foraminal]
Malignant/infective: None / [specify urgently]
Note: CT underestimates ligamentous contribution — MRI if clinical mismatch`,
    },
    cs: {
      label: "Degenerativní onemocnění páteře",
      evidence: "Nomenklatura NASS 2014 (Fardon); nomenklatura diskové patologie Fardon 2014; foraminální stenóza Ulrich 1991; CT/MRI korelace bederní stenózy Schizas 2010",
      criticalFindings: ["Závažná centrální stenóza", "Komprese cauda equina", "Maligní komprese míchy", "Spondylodiscitida"],
      searchEvidence: "Standardizace nomenklatury NASS Fardon 2014; systematické CT bederní páteře Andreisek 2013; prevalence asymptomatické diskové patologie Boden 1990",
      searchMismatch: "CT protokoly páteře obsahují popis každé úrovně s diskem a forameny. Nesprávná struktura: klinik se ptá 'co komprimuje tento nervový kořen'. Nejdříve hodnoťte klinicky relevantní úroveň. Kostní okna pro metastázy/infekci jsou systematicky vynechávána.",
      searchPattern: [
        { step: 1, priority: "critical", title: "Kostní okna — metastázy / infekce", detail: "Před hodnocením disku: systematická revize v kostním okně. Lytické/sklerotické léze. Eroze/destrukce krycích ploch = spondylodiscitida. Epidurální kolekce. Přehlédnuté metastázy způsobující nestabilitu jsou medicolegalní problém.", time: "30s" },
        { step: 2, priority: "critical", title: "Stenóza páteřního kanálu — klinicky relevantní úroveň", detail: "Identifikujte klinicky relevantní úroveň z indikace. Měřte AP průměr. Klasifikace: >12 mm normální, 10–12 mm relativní stenóza, <10 mm absolutní stenóza. Trojúhelníkový kanál. Hypertrofie lig. flavum.", time: "30s" },
        { step: 3, priority: "critical", title: "Komprese cauda equina", detail: "Závažná stenóza + příznaky = syndrom cauda equina dokud není vyloučeno. Obliterace epidurálního tuku. Nervové kořeny bez oddělení CSF. Chirurgická emergentní situace.", time: "15s" },
        { step: 4, priority: "high", title: "Disk — správná nomenklatura (Fardon 2014)", detail: "Bulging (<25 % obvodu). Protruze (baze > hrot). Extruze (hrot > baze NEBO sekvestrace). Směr: centrálně/paracentralně/foraminálně/extraforaminálně.", time: "45s" },
        { step: 5, priority: "high", title: "Foraminální stenóza — obě strany", detail: "Ulrichova stupnice: 0=normální tuk, 1=parciální obliterace, 2=kompletní obliterace, 3=deformace nervu. Extrémně laterální výhřez — způsobuje ipsilaterální radikulopatii stejné úrovně, snadno přehlédnutelný.", time: "30s" },
        { step: 6, priority: "normal", title: "Systematický přehled každé úrovně", detail: "Výška disku, osteofyty, Modicovy změny, artróza fazetových kloubů, anterolistéza, spondylolýza, skolióza.", time: "30s" },
      ],
      template: `CT BEDERNÍ/HRUDNÍ/KRČNÍ PÁTEŘE — DEGENERATIVNÍ ONEMOCNĚNÍ
Indikace: [bolest zad / radikulopatie úrovně ___ / myelopatie]
Technika: Axiální + sagitální + koronální MPR, kostní + měkkotkáňová okna

NÁLEZ

Kostní okna [malignita / infekce — PŘED hodnocením disku]
Obratlová těla: Normální / Lytická léze ___ / Sklerotická ___ / Smíšená ___
Krycí plochy: Normální / Eroze/destrukce ___ [spondylodiscitida — KRITICKÝ NÁLEZ]
Epidurální kolekce: Ne / Ano — ___
Pedikly: Normální / Destrukce ___
→ Maligní/infekční patologie: Ne / Suspektní — [popsat — PRIORITNÍ]

Páteřní kanál [nejdříve klinicky symptomatická úroveň]
Úroveň    AP (mm)    Stupeň stenózy                          Příčina
___       ___        Normální/>12 / Relativní 10-12 / Absolutní <10    ___
___       ___        ___                                      ___
Komprese cauda equina: Ne / Ano — úroveň ___ [CHIRURGICKÁ URGENCE]
Trojúhelníkový kanál: Ne / Ano — ___

Disková patologie [nomenklatura NASS Fardon 2014]
L5/S1:
  Výška disku: Zachována / Snížena o ___ %
  Typ: Normální / Bulging (<25 %) / Protruze (baze>hrot) / Extruze (hrot>baze) / Sekvestrace
  Směr: Centrálně / Paracentralně vpravo/vlevo / Foraminálně vpravo/vlevo / Extraforaminálně vpravo/vlevo
  Vliv na kanál: Žádný / Mírné vtlačení / Střední komprese / Závažná komprese
L4/L5:  [stejný formát]
L3/L4:  [stejný formát]
L2/L3:  [stejný formát]
L1/L2:  [stejný formát]

Foraminální stenóza [Ulrichova stupnice — obě strany]
Stupeň: 0=normální tuk  1=parciální obliterace  2=kompletní obliterace  3=deformace nervu
Úroveň    Vpravo    Vlevo    Příčina
L5/S1:    ___       ___      ___
L4/L5:    ___       ___      ___
L3/L4:    ___       ___      ___
Extrémně laterální výhřez: Ne / Ano — úroveň ___, strana ___

Fazetové klouby
Nejsymptomatičtější úroveň: Hypertrofie: Ne/Mírná/Střední/Výrazná  Výpotek: Ne/Ano  Vakuový fenomén: Ne/Ano
Subluxace: Ne / Ano

Osa páteře
Anterolistéza/spondylolistéza: Ne / Ano
  Typ: Degenerativní / Istmická (spondylolýza)
  Úroveň: ___  Stupeň: I (<25 %) / II / III / IV
  Směr: Antero / Retro
Spondylolýza (defekt pars interarticularis): Ne / Ano — úroveň ___, vpravo/vlevo/oboustranně
Skolióza: Ne / Ano — Cobbův úhel ___ °

Zadní elementy
Lig. flavum: Normální / Hypertrofie — úroveň ___, ___ mm (>4 mm = signifikantní)
Epidurální lipomatóza: Ne / Ano

ZÁVĚR
Nejvýznamnější nálezy:
1. [Úroveň] — [diskové postižení + stupeň stenózy kanálu/foramina]
2. ___  3. ___
Stenóza páteřního kanálu: Žádná / Relativní / Absolutní — nejzávažnější na úrovni ___
Kompromitace nervového kořene: L___ / S___ — [vlevo/vpravo] — [kanál/foramen]
Maligní/infekční patologie: Nezjištěna / [specifikovat urgentně]
Poznámka: CT podhodnocuje příspěvek vazivových struktur — MRI při nesouladu kliniky a zobrazení`,
    },
  },
];
