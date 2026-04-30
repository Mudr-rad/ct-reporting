// ─── ABDOMINAL TEMPLATES ─────────────────────────────────────────────────────
// Each template has { id, category, en: {...}, cs: {...} }
// Czech templates are written from scratch in authentic Czech radiology style —
// NOT word-for-word translations. Czech reports use Nález / Závěr structure,
// Latin-Czech anatomical terminology, and flowing diagnostic language.

export const ABDOMINAL_TEMPLATES = [
  {
    id: "appendicitis",
    category: "surgical",
    en: {
      label: "Appendicitis",
      evidence: "ACR + ESGAR consensus; Hlibczuk 2010 meta-analysis CT diagnostic criteria; Rao et al. 1997",
      criticalFindings: ["Perforation signs", "Pericaecal abscess", "Portal venous gas"],
      searchEvidence: "Rao 1997 CT graded compression; Doria 2006 meta-analysis; Lameris 2009 — RIF-tracing technique vs systematic survey",
      searchMismatch: "Templates are anatomy-ordered. Correct search is RIF-centric and appendix-first, not organ-by-organ.",
      searchPattern: [
        { step: 1, priority: "critical", title: "W/L Setup & Scout", detail: "Soft tissue W400/L40. Scroll coronal first for global orientation — dilated bowel, free fluid, RIF density change visible in 5 seconds.", time: "5s" },
        { step: 2, priority: "critical", title: "Locate Caecum → Trace Appendix", detail: "Find caecum (gas + ileocaecal valve) on axials. Trace appendix from base — it always originates here. Follow it to tip. Do NOT start by looking for a 'round structure in RIF'.", time: "45s" },
        { step: 3, priority: "critical", title: "Appendix Not Found? Systematic RIF", detail: "Retrocaecal (most common), retroileal, pelvic, subhepatic positions. Absence of visualisation ≠ normal. Look for fat stranding without appendix — perforation/abscess until proven otherwise.", time: "30s" },
        { step: 4, priority: "high", title: "Characterise Appendix", detail: "Diameter, wall thickening, surrounding fat stranding, appendicolith. Diameter >6mm + stranding = appendicitis. Extraluminal appendicolith = perforation.", time: "20s" },
        { step: 5, priority: "high", title: "Complications Sweep", detail: "Switch to lung windows — free air? Abscess in RIF? Portal venous gas (rare but critical). Peritoneal fluid distribution.", time: "20s" },
        { step: 6, priority: "normal", title: "Alternative Diagnosis [if appendix normal]", detail: "Right ovary and adnexa. Terminal ileum (Crohn, Meckel). Caecum wall. Right ureter/calculus. Mesenteric nodes. Only after appendix is confirmed normal.", time: "30s" },
        { step: 7, priority: "normal", title: "Standard Organ Survey", detail: "Liver, spleen, kidneys, remaining bowel. Incidentals. This comes LAST.", time: "30s" },
      ],
      template: `CT ABDOMEN & PELVIS — ACUTE APPENDICITIS
Indication: [acute RIF pain / clinical suspicion appendicitis]
Technique: Portal venous phase ± oral contrast

APPENDIX
Visualised: Yes / No
Diameter: ___ mm  (normal <6mm)
Wall thickening: No / Yes — ___ mm
Periappendiceal fat stranding: Absent / Mild / Moderate / Severe
Appendicolith: Absent / Present — location ___
Perforation signs:
  Free air adjacent to appendix: No / Yes
  Periappendiceal abscess: No / Yes — size ___ mm, location ___
  Phlegmon: No / Yes — extent ___
  Extraluminal appendicolith: No / Yes [implies perforation]

COMPLICATIONS
Free intraperitoneal air: No / Yes
Free fluid: No / Yes — location ___, simple / complex
Portal venous gas: No / Yes [CRITICAL]

ALTERNATIVE DIAGNOSIS [complete only if appendix confirmed normal]
Ovarian pathology: None / Cyst ___ mm / TOC / Torsion
Meckel diverticulitis: No / Yes
Mesenteric lymphadenitis: No / Yes — nodes up to ___ mm
Caecal pathology: No / Yes ___
Crohn disease: No / Yes ___
Ureteric calculus: No / Yes — ___ mm at ___
Other: ___

ANCILLARY FINDINGS
Liver: Normal parenchyma. No focal lesion.
Spleen: Normal.
Kidneys: Symmetric enhancement. No hydronephrosis.
Bowel: No obstruction elsewhere.
Lymph nodes: No significant lymphadenopathy.

IMPRESSION
[Acute appendicitis / Perforated appendicitis with abscess / No appendicitis — alternative: ___]
Surgical urgency: Routine / Urgent / Emergency`,
    },
    cs: {
      label: "Apendicitida",
      evidence: "ACR + ESGAR konsensus; Hlibczuk 2010 metaanalýza CT diagnostických kritérií; Rao et al. 1997",
      criticalFindings: ["Perforace appendixu", "Periappendikální absces", "Plyn v portální žíle"],
      searchEvidence: "Rao 1997 CT graded compression; Doria 2006 metaanalýza; Lameris 2009 — technika sledování appendixu od céka",
      searchMismatch: "Šablony jsou řazeny anatomicky. Správná systematika je zaměřena na PDK a appendix jako první — ne orgán po orgánu.",
      searchPattern: [
        { step: 1, priority: "critical", title: "Nastavení oken + scout", detail: "Měkkotkáňová okna W400/L40. Nejdříve koronální rekonstrukce — dilatace střeva, volná tekutina a densitní změny v PDK viditelné do 5 sekund.", time: "5s" },
        { step: 2, priority: "critical", title: "Lokalizace céka → sledování appendixu", detail: "Najděte cékum (plyn + Bauhinská chlopeň) na axiálních řezech. Appendix sledujte od jeho baze — vždy začíná zde. Sledujte až ke špičce. NEZAČÍNEJTE hledáním 'kulatého útvaru v PDK'.", time: "45s" },
        { step: 3, priority: "critical", title: "Appendix nezobrazitelný? Systematické prohledání PDK", detail: "Retrocékální poloha (nejčastější), retroileální, pánevní, subhepatální. Nezobrazení appendixu ≠ normální nález. Infiltrace tuku bez appendixu = perforace/absces, dokud není vyloučeno jinak.", time: "30s" },
        { step: 4, priority: "high", title: "Hodnocení appendixu", detail: "Průměr, ztluštění stěny, infiltrace okolního tuku, appendikolit. Průměr >6 mm + infiltrace tuku = apendicitida. Extraluminální appendikolit = perforace.", time: "20s" },
        { step: 5, priority: "high", title: "Komplikace — plicní okna", detail: "Přepnutí na plicní okna — volný vzduch? Absces v PDK? Plyn v portální žíle (vzácný, ale kritický). Distribuce volné tekutiny.", time: "20s" },
        { step: 6, priority: "normal", title: "Alternativní diagnóza [pouze při normálním appendixu]", detail: "Pravý ovarium a adnexa. Terminální ileum (Crohnova choroba, Meckelův divertikl). Stěna céka. Pravý močovod/konkrement. Mezenteriální uzliny. Pouze po potvrzení normálního appendixu.", time: "30s" },
        { step: 7, priority: "normal", title: "Celkový přehled orgánů", detail: "Játra, slezina, ledviny, zbytek střeva. Vedlejší nálezy. Toto je POSLEDNÍ krok.", time: "30s" },
      ],
      template: `CT BŘICHA A PÁNVE — AKUTNÍ APENDICITIDA
Indikace: [bolest v PDK / klinické podezření na apendicitidu]
Technika: Portální fáze ± perorální kontrast

NÁLEZ

Appendix
Zobrazení: Ano / Ne
Průměr: ___ mm (norma <6 mm)
Ztluštění stěny: Ne / Ano — ___ mm
Infiltrace periappendikálního tuku: Nepřítomna / Mírná / Střední / Výrazná
Appendikolit: Nepřítomen / Přítomen — lokalizace ___
Známky perforace:
  Volný vzduch v okolí appendixu: Ne / Ano
  Periappendikální absces: Ne / Ano — velikost ___ mm, lokalizace ___
  Flegmóna: Ne / Ano — rozsah ___
  Extraluminální appendikolit: Ne / Ano [svědčí pro perforaci]

Komplikace
Volný vzduch v peritoneální dutině: Ne / Ano
Volná tekutina: Ne / Ano — lokalizace ___, charakter prostý/komplexní
Plyn v portální žíle: Ne / Ano [KRITICKÝ NÁLEZ]

Alternativní diagnóza [vyplnit pouze při normálním appendixu]
Ovariální patologie: Bez nálezu / Cysta ___ mm / Tuboovariální komplex / Torze
Meckelův divertikl: Ne / Ano
Mezenteriální lymfadenitida: Ne / Ano — uzliny do ___ mm
Patologie céka: Ne / Ano ___
Crohnova choroba: Ne / Ano ___
Urolitiáza: Ne / Ano — ___ mm v oblasti ___

Doplňkový nález
Játra jsou homogenní parenchymatózní struktury, bez ložiskových změn.
Slezina bez patologického nálezu.
Ledviny symetricky enhancují, bez hydronefrózy.
Střevní pasáž bez průkazu obstrukce.
Lymfatické uzliny bez patologického zvětšení.

ZÁVĚR
[Akutní apendicitida / Perforovaná apendicitida s abscesem / Bez průkazu apendicitidy — alternativní diagnóza: ___]
Naléhavost: Plánovaná / Urgentní / Emergentní`,
    },
  },

  {
    id: "obstruction",
    category: "surgical",
    en: {
      label: "Bowel Obstruction",
      evidence: "Bologna Guidelines 2017 (WSES); Maung et al. EAST 2012; Mallo et al. systematic review closed-loop CT criteria",
      criticalFindings: ["Closed-loop", "Pneumatosis intestinalis", "Portal venous gas", "Absent wall enhancement"],
      searchEvidence: "Mallo et al. 2005 — closed-loop CT criteria validation; Taylor et al. 2001 — transition point identification; Catena 2011 WSES",
      searchMismatch: "Anatomy-ordered templates miss the critical step: find the transition point FIRST by retrograde tracing. Most radiologists start at proximal dilated bowel — this is slower and less reliable.",
      searchPattern: [
        { step: 1, priority: "critical", title: "Scout + Global Gestalt", detail: "Coronal reconstruction first. SBO pattern (central, small calibre) vs LBO (peripheral, haustral). Caecal diameter — if ≥9cm, flag immediately.", time: "10s" },
        { step: 2, priority: "critical", title: "Find Transition Point — Retrograde Tracing", detail: "Start at COLLAPSED bowel and trace PROXIMALLY until dilation. Transition point = where collapsed meets dilated. Identify cause at transition (adhesion band, hernia neck, mass).", time: "60s" },
        { step: 3, priority: "critical", title: "Closed-Loop Assessment", detail: "C/U-shaped loop? Two adjacent transition points? Radial mesenteric vessels converging? ANY = closed loop = surgical emergency.", time: "30s" },
        { step: 4, priority: "critical", title: "Ischaemia Signs — Dedicated Pass", detail: "Bowel wall enhancement. Mesenteric oedema. Then lung windows — pneumatosis, portal venous gas.", time: "45s" },
        { step: 5, priority: "high", title: "Cause Characterisation", detail: "Adhesion, hernia (check all sites), mass, volvulus (whirl sign), intussusception (target sign).", time: "30s" },
        { step: 6, priority: "normal", title: "Full Bowel Survey + Organs", detail: "Remaining bowel for synchronous pathology. Solid organs, free fluid, lymph nodes.", time: "30s" },
      ],
      template: `CT ABDOMEN & PELVIS — BOWEL OBSTRUCTION
Indication: [clinical obstruction / distension]
Technique: Portal venous phase

OBSTRUCTION CHARACTERISATION
Type: Small bowel / Large bowel / Combined
Degree: Partial / High-grade partial / Complete
Transition point: Identified / Not identified
  Location: ___
  Cause: Adhesion / Hernia (___) / Mass / Volvulus / Intussusception / Gallstone / Not identified

CALIBRE
Proximal diameter: ___ mm  (SBO normal <25mm; colon <60mm; caecum <90mm)
Small bowel faeces sign: Absent / Present [high-grade obstruction]

CLOSED-LOOP [complete for every SBO — surgical emergency if present]
Closed-loop: No / Yes
  C/U-shaped loop: No / Yes
  Radial mesenteric vessels: No / Yes
  Two adjacent transition points: No / Yes

ISCHAEMIA SIGNS
Wall enhancement: Normal / Reduced / Absent [absent = transmural infarction]
Wall thickening: No / Yes — location ___
Mesenteric oedema: No / Yes
Pneumatosis intestinalis: No / Yes — location ___ [CRITICAL]
Portal venous gas: No / Yes [CRITICAL]
Free fluid: No / Simple / Complex / Haemorrhagic — volume ___
Free air: No / Yes

ANCILLARY FINDINGS
Liver: Normal.
Solid organs: Normal.
Other: ___

IMPRESSION
[Type] bowel obstruction, [degree], transition at [location], cause [___].
Ischaemia signs: Absent / Present — [specify]
Closed-loop: No / Yes
Urgency: Elective / Urgent / Emergency`,
    },
    cs: {
      label: "Ileus / Střevní neprůchodnost",
      evidence: "Boloňské guidelines 2017 (WSES); Maung et al. EAST 2012; Mallo et al. systematický přehled CT kritérií uzavřené kličky",
      criticalFindings: ["Uzavřená klička (closed-loop)", "Pneumatosis intestinalis", "Plyn v portální žíle", "Absence sycení stěny"],
      searchEvidence: "Mallo et al. 2005 — validace CT kritérií uzavřené kličky; Taylor et al. 2001 — metodika určení přechodové zóny",
      searchMismatch: "Anatomické šablony opomíjejí klíčový krok: přechodová zóna musí být nalezena JAKO PRVNÍ retrográdním sledováním. Většina radiologů začíná u dilatovaného střeva — to je pomalejší a méně spolehlivé.",
      searchPattern: [
        { step: 1, priority: "critical", title: "Scout + celkový přehled", detail: "Nejdříve koronální rekonstrukce. Distribuce dilatovaného vs. kolabovaného střeva do 10 sekund. Vzor tenkého střeva (centrální, malý průměr) vs. tlustého (periferní, haustra). Průměr céka ≥9 cm = okamžitý záznam.", time: "10s" },
        { step: 2, priority: "critical", title: "Přechodová zóna — retrográdní sledování", detail: "Začněte u KOLABOVANÉHO střeva a sledujte PROXIMÁLNĚ až k dilataci. Přechodová zóna = místo, kde kolabované navazuje na dilatované. Určete příčinu v přechodové zóně (adheze, hrdlo kýly, tumor).", time: "60s" },
        { step: 3, priority: "critical", title: "Hodnocení uzavřené kličky", detail: "Konfigurace C nebo U? Dvě sousedící přechodové zóny? Radiální uspořádání mezenteriálních cév? COKOLI z toho = uzavřená klička = chirurgická emergentní situace.", time: "30s" },
        { step: 4, priority: "critical", title: "Ischemické změny — cílené hodnocení", detail: "Sycení stěny střeva. Edém mezenteria. Poté plicní okna — pneumatosis intestinalis, plyn v portální žíle.", time: "45s" },
        { step: 5, priority: "high", title: "Příčina obstrukce", detail: "Adheze, kýla (prohledejte všechna místa — tříselná, stehenní, pupeční, vnitřní), tumor, volvulus (whirl sign), invaginace (target sign).", time: "30s" },
        { step: 6, priority: "normal", title: "Celkový přehled střeva + orgánů", detail: "Zbytek střeva — synchronní patologie. Parenchymatózní orgány, volná tekutina, uzliny.", time: "30s" },
      ],
      template: `CT BŘICHA A PÁNVE — ILEUS / STŘEVNÍ NEPRŮCHODNOST
Indikace: [klinický obraz ileu / distenze]
Technika: Portální fáze

NÁLEZ

Charakter obstrukce
Typ: Tenké střevo / Tlusté střevo / Kombinovaný
Stupeň: Parciální / Vysokostupňový parciální / Kompletní
Přechodová zóna: Identifikována / Neidentifikována
  Lokalizace: ___
  Příčina: Adheze / Kýla (___) / Tumor / Volvulus / Invaginace / Žlučový konkrement / Nezjištěna

Kalibr střeva
Průměr proximálně: ___ mm (tenké střevo norma <25 mm; tlusté <60 mm; cékum <90 mm)
Příznak střevní stolice (faeces sign): Nepřítomen / Přítomen [svědčí pro vysokostupňový ileus]

Uzavřená klička [vyplnit u každého ileu tenkého střeva]
Uzavřená klička: Ne / Ano
  Konfigurace C/U: Ne / Ano
  Radiální uspořádání mezenteriálních cév: Ne / Ano
  Dvě sousedící přechodové zóny: Ne / Ano

Ischemické změny
Sycení stěny střeva: Normální / Redukované / Chybí [chybí = transmurální infarkt]
Ztluštění stěny: Ne / Ano — lokalizace ___
Edém mezenteria: Ne / Ano
Pneumatosis intestinalis: Ne / Ano — lokalizace ___ [KRITICKÝ NÁLEZ]
Plyn v portální žíle: Ne / Ano [KRITICKÝ NÁLEZ]
Volná tekutina: Ne / Prostá / Komplexní / Hemoragická — množství ___
Volný vzduch: Ne / Ano

Doplňkový nález
Játra bez patologického nálezu.
Parenchymatózní orgány bez patologického nálezu.
Ostatní: ___

ZÁVĚR
Ileus [tenkého/tlustého] střeva, [stupeň], přechodová zóna v oblasti [___], příčina [___].
Ischemické změny: Nepřítomny / Přítomny — [specifikovat]
Uzavřená klička: Ne / Ano
Naléhavost: Plánovaná / Urgentní / Emergentní`,
    },
  },

  {
    id: "pancreatitis",
    category: "surgical",
    en: {
      label: "Pancreatitis",
      evidence: "Revised Atlanta 2012 (Banks et al. Gut 2013); Modified CTSI — Mortele et al. 2004; ACR appropriateness criteria",
      criticalFindings: ["Necrosis >30%", "Infected collection (gas)", "Portal/SMV thrombosis", "Pseudoaneurysm"],
      searchEvidence: "Thoeni 2012 — phase-specific CT search; Balthazar 2002 — systematic pancreatic assessment; ESGAR consensus on protocol",
      searchMismatch: "Portal-venous-only CT misses necrosis assessment (needs non-contrast comparison) and vascular complications (needs arterial). Search must follow protocol phases explicitly.",
      searchPattern: [
        { step: 1, priority: "critical", title: "Non-Contrast Phase First", detail: "Pancreatic parenchymal density ~40-50 HU. High density = haemorrhage. Note low-density areas for comparison with contrast phases.", time: "20s" },
        { step: 2, priority: "critical", title: "Portal Venous — Necrosis Assessment", detail: "Non-enhancing parenchyma = necrosis. Estimate extent: <30%, 30-50%, >50%. Drives CTSI and Revised Atlanta severity.", time: "45s" },
        { step: 3, priority: "critical", title: "Vascular Assessment", detail: "Portal vein, SMV, splenic vein patency. Arterial phase — pseudoaneurysm (round enhancing structure near collection).", time: "30s" },
        { step: 4, priority: "high", title: "Classify Collections — Revised Atlanta", detail: "APFC vs ANC (<4 weeks), Pseudocyst vs WOPN (>4 weeks). Homogeneous = fluid. Heterogeneous = necrotic debris. Gas = infected.", time: "45s" },
        { step: 5, priority: "high", title: "Biliary Survey", detail: "CBD diameter. Choledocholithiasis — determines ERCP urgency.", time: "20s" },
        { step: 6, priority: "normal", title: "Complications Sweep", detail: "Pleural effusions (bilateral = severe sign). Ascites. Splenic complications.", time: "20s" },
      ],
      template: `CT ABDOMEN — ACUTE PANCREATITIS
Indication: [confirmed/suspected pancreatitis, day ___ of illness]
Technique: Pancreatic protocol (non-contrast + arterial + portal venous) / PV only

PANCREATIC PARENCHYMA
Enlargement: No / Focal / Diffuse
Enhancement: Homogeneous / Heterogeneous
Necrosis: Absent / Present — extent <30% / 30-50% / >50%, location ___
Pancreatic duct: Normal / Dilated ___ mm / Disrupted
Peripancreatic stranding: Absent / Mild / Moderate / Severe

REVISED ATLANTA 2012 SEVERITY
Mild: No necrosis, no organ failure, no complications
Moderately Severe: Local complications ± transient organ failure <48h
Severe: Persistent organ failure >48h ± necrosis
→ Severity: ___

MODIFIED CTSI [Mortele 2004 — validated]
Balthazar: A(0) / B(1) / C(2) / D(3) / E(4) = ___ pts
Necrosis: None(0) / <30%(2) / 30-50%(4) / >50%(6) = ___ pts
CTSI Total: ___ /10  (≥7: severe, mortality ~17%)

FLUID COLLECTIONS [Revised Atlanta — classify precisely]
Collection 1:
  Type: APFC / Pseudocyst / ANC / WOPN
  Location: ___  Size: ___ mm
  Gas within: No / Yes [infected — CRITICAL]
Collection 2: ___

VASCULAR
Portal vein: Patent / Thrombosed
SMV: Patent / Thrombosed [CRITICAL]
Splenic vein: Patent / Occluded
Pseudoaneurysm: No / Yes — vessel ___, size ___

BILIARY
CBD: ___ mm  Choledocholithiasis: No / Yes
Gallbladder: Normal / Stones / Cholecystitis

COMPLICATIONS
Pleural effusion: No / R / L / Bilateral — volume ___
Ascites: No / Yes — volume ___
Splenic complications: None / Infarct / Rupture

IMPRESSION
Acute [interstitial oedematous / necrotising] pancreatitis.
Revised Atlanta: [Mild / Moderately severe / Severe]
CTSI: ___ /10
[Collections, vascular complications, infected necrosis concern]`,
    },
    cs: {
      label: "Akutní pankreatitida",
      evidence: "Revidovaná atlantská klasifikace 2012 (Banks et al. Gut 2013); Modifikované CTSI — Mortele et al. 2004; ACR appropriateness criteria",
      criticalFindings: ["Nekróza >30 %", "Infekce kolekce (plyn)", "Trombóza v. portae/VMH", "Pseudoaneuryzma"],
      searchEvidence: "Thoeni 2012 — fázově specifická CT systematika; Balthazar 2002 — systematické hodnocení pankreatu; konsensus ESGAR",
      searchMismatch: "Portální fáze samotná je nedostatečná — hodnocení nekrózy vyžaduje porovnání s nativní fází, cévní komplikace vyžadují arteriální fázi. Systematika musí respektovat jednotlivé fáze.",
      searchPattern: [
        { step: 1, priority: "critical", title: "Nativní fáze jako první", detail: "Denzita parenchymu slinivky ~40–50 HU. Vysoká denzita = hemoragie. Zaznamenat hypodenzní oblasti pro porovnání s kontrastními fázemi.", time: "20s" },
        { step: 2, priority: "critical", title: "Portální fáze — hodnocení nekrózy", detail: "Nesycující se parenchym = nekróza. Odhadněte rozsah: <30 %, 30–50 %, >50 %. Lokalizace: hlava/tělo/ocas. Toto ovlivňuje CTSI a závažnost dle revidované atlantské klasifikace.", time: "45s" },
        { step: 3, priority: "critical", title: "Cévní hodnocení", detail: "Průchodnost v. portae, VMH, v. lienalis. Arteriální fáze — pseudoaneuryzma (kulatá enhancující struktura v/u kolekce).", time: "30s" },
        { step: 4, priority: "high", title: "Klasifikace kolekcí — Revidovaná Atlanta", detail: "APFC vs. ANC (<4 týdny), pseudocysta vs. WOPN (>4 týdny). Homogenní = tekutina. Heterogenní = nekrotický obsah. Plyn = infekce.", time: "45s" },
        { step: 5, priority: "high", title: "Biliární systém", detail: "Průměr ductus choledochus. Choledocholitiáza — určuje naléhavost ERCP.", time: "20s" },
        { step: 6, priority: "normal", title: "Komplikace", detail: "Pleurální výpotky (oboustranný = příznak těžké pankreatitidy). Ascites. Komplikace na slezině.", time: "20s" },
      ],
      template: `CT BŘICHA — AKUTNÍ PANKREATITIDA
Indikace: [potvrzená/suspektní pankreatitida, den ___ onemocnění]
Technika: Pankreatický protokol (nativní + arteriální + portální fáze) / pouze portální fáze

NÁLEZ

Parenchym slinivky
Zvětšení: Ne / Fokální / Difúzní
Sycení: Homogenní / Heterogenní
Nekróza: Nepřítomna / Přítomna — rozsah <30 % / 30–50 % / >50 %, lokalizace ___
Pankreatický vývod: Normální / Dilatovaný ___ mm / Přerušen
Infiltrace peripankreatického tuku: Nepřítomna / Mírná / Střední / Výrazná

Závažnost dle Revidované atlantské klasifikace 2012
Mírná: Bez nekrózy, bez orgánového selhání, bez komplikací
Středně těžká: Lokální komplikace ± přechodné orgánové selhání <48 h
Těžká: Přetrvávající orgánové selhání >48 h ± nekróza
→ Závažnost: ___

Modifikované CTSI [Mortele 2004 — validováno]
Balthazar: A(0) / B(1) / C(2) / D(3) / E(4) = ___ bodů
Nekróza: Žádná(0) / <30 %(2) / 30–50 %(4) / >50 %(6) = ___ bodů
CTSI celkem: ___ /10  (≥7: těžká forma, mortalita ~17 %)

Tekutinové kolekce [Revidovaná Atlanta — klasifikovat přesně]
Kolekce 1:
  Typ: APFC / Pseudocysta / ANC / WOPN
  Lokalizace: ___  Velikost: ___ mm
  Plyn v kolekci: Ne / Ano [infekce — KRITICKÝ NÁLEZ]
Kolekce 2: ___

Cévní nález
V. portae: Průchodná / Trombóza
VMH: Průchodná / Trombóza [KRITICKÝ NÁLEZ]
V. lienalis: Průchodná / Okludovaná
Pseudoaneuryzma: Ne / Ano — céva ___, velikost ___

Biliární systém
Ductus choledochus: ___ mm  Choledocholitiáza: Ne / Ano
Žlučník: Bez patologického nálezu / Konkrementy / Cholecystitida

Doplňkový nález
Pleurální výpotek: Ne / Vpravo / Vlevo / Oboustranně — množství ___
Ascites: Ne / Ano — množství ___
Komplikace na slezině: Žádné / Infarkt / Ruptura

ZÁVĚR
Akutní [intersticiální edematózní / nekrotizující] pankreatitida.
Závažnost dle Revidované Atlanty: [Mírná / Středně těžká / Těžká]
CTSI: ___ /10
[Kolekce, cévní komplikace, podezření na infekci nekrózy]`,
    },
  },

  {
    id: "diverticulitis",
    category: "surgical",
    en: {
      label: "Diverticulitis",
      evidence: "Modified Hinchey (Wasvary 1999); ESCP Birmingham Consensus 2023; Ambrosetti 2006 CT-outcome correlation",
      criticalFindings: ["Free air", "Distant abscess", "Fistula", "Underlying mass"],
      searchEvidence: "Ambrosetti 2006 — CT findings predict outcome; Sartelli WSES 2015 — CT classification drives management",
      searchMismatch: "Common error: searching for fat stranding first. Correct: find the INFLAMED DIVERTICULUM as epicentre. Also — exclude underlying mass BEFORE reporting diverticulitis.",
      searchPattern: [
        { step: 1, priority: "critical", title: "Find the Epicentre", detail: "Identify densest fat stranding region. Within it, find the inflamed diverticulum. Fat stranding alone is non-specific — the diverticulum must be the source.", time: "30s" },
        { step: 2, priority: "critical", title: "Free Air — Lung Windows Now", detail: "Switch to lung windows immediately. Free intraperitoneal air? Contained vs free perforation determines Hinchey staging and urgency.", time: "15s" },
        { step: 3, priority: "critical", title: "Exclude Underlying Mass", detail: "Is this diverticulitis or perforated carcinoma? Asymmetric wall thickening, mass, lymphadenopathy → consider carcinoma. Never assume.", time: "30s" },
        { step: 4, priority: "high", title: "Hinchey Staging — Abscess", detail: "Pericolic only (Ia), abscess (Ib), distant abscess (II). Size, gas, drainage route available?", time: "30s" },
        { step: 5, priority: "high", title: "Fistula Search — Coronals", detail: "Air in bladder = colovesical. Trace tract on coronals. Easy to miss on axials alone.", time: "20s" },
        { step: 6, priority: "normal", title: "Full Colon Survey", detail: "Remainder of colon. Appendix. Gynaecological structures.", time: "20s" },
      ],
      template: `CT ABDOMEN & PELVIS — ACUTE DIVERTICULITIS
Indication: [LIF pain / suspected diverticulitis]
Technique: Portal venous phase

DIVERTICULAR DISEASE
Acute segment: Location ___, length ___ cm
Wall thickening: ___ mm
Pericolonic fat stranding: Mild / Moderate / Severe, extent ___
Inflamed diverticulum identified: Yes / No
Underlying mass excluded: Yes / Uncertain — describe ___

MODIFIED HINCHEY CLASSIFICATION
Stage 0:  Thickening only, no complications
Stage Ia: Confined pericolic phlegmon
Stage Ib: Pericolic / mesenteric abscess
Stage II: Pelvic / retroperitoneal / distant abscess
Stage III: Purulent peritonitis
Stage IV: Faecal peritonitis (free perforation)
→ STAGE: ___

ABSCESS [Ib or higher]
Present: No / Yes
Location: Pericolic / Mesenteric / Pelvic / Distant
Size: ___ × ___ mm
Gas within abscess: No / Yes
Drainage route available: Yes / No ___

PERFORATION
Free air: No / Yes — volume ___, distribution ___
Free fluid: No / Simple / Complex — location ___

COMPLICATIONS
Fistula: No / Yes — Colovesical / Colovaginal / Coloenteric
  Air in bladder: No / Yes
Obstruction: No / Yes — degree ___

ANCILLARY
Appendix: Normal / Abnormal ___
Gynaecological: Normal / Abnormal ___

IMPRESSION
Acute [left/right]-sided diverticulitis, Modified Hinchey Stage [___].
[Complications]
Urgency: Conservative / IV antibiotics / Percutaneous drainage / Surgical
Note: Colonoscopy recommended 6-8 weeks post-resolution (exclude carcinoma)`,
    },
    cs: {
      label: "Akutní divertikulitida",
      evidence: "Modifikovaná Hincheyho klasifikace (Wasvary 1999); konsensus ESCP Birmingham 2023; Ambrosetti 2006 korelace CT a klinického výstupu",
      criticalFindings: ["Volný vzduch", "Vzdálený absces", "Fistula", "Suspektní tumor v podkladí"],
      searchEvidence: "Ambrosetti 2006 — CT predikuje klinický výstup; Sartelli WSES 2015 — CT klasifikace určuje management",
      searchMismatch: "Časté chyby: hledání infiltrace tuku jako prvního kroku. Správně: najděte ZANÍCENÝ DIVERTIKL jako epicentrum. Dále — vyloučte tumor v podkladí PŘED hodnocením divertikulitidy.",
      searchPattern: [
        { step: 1, priority: "critical", title: "Nalezení epicentra zánětu", detail: "Identifikujte oblast s nejhustší infiltrací tuku. V ní najděte zanícený divertikl jako epicentrum. Samotná infiltrace tuku je nespecifická — divertikl musí být zdrojem.", time: "30s" },
        { step: 2, priority: "critical", title: "Volný vzduch — okamžitě plicní okna", detail: "Přepněte na plicní okna. Volný vzduch v dutině peritoneální? Lokalizovaná vs. volná perforace určuje stadium Hinchey a naléhavost výkonu.", time: "15s" },
        { step: 3, priority: "critical", title: "Vyloučení tumoru v podkladí", detail: "Jedná se o divertikulitidu nebo o perforovaný karcinom? Asymetrické/nepravidelné ztluštění stěny, tumor, lymfadenitida → zvažte karcinom. Nikdy nepředpokládejte.", time: "30s" },
        { step: 4, priority: "high", title: "Stagování dle Hinchey — absces", detail: "Pouze perikolický zánět (Ia), absces (Ib), vzdálený/pánevní absces (II). Velikost, plyn v abscesu, přístupnost k drenáži?", time: "30s" },
        { step: 5, priority: "high", title: "Hledání fistuly — koronální rekonstrukce", detail: "Vzduch v močovém měchýři = kolovezikální fistula. Fistulózní trakt sledujte na koronálních rekonstrukcích. Na axiálních řezech snadno přehlédnutelné.", time: "20s" },
        { step: 6, priority: "normal", title: "Přehled zbytku tlustého střeva", detail: "Zbytek kolon. Appendix. Gynekologické orgány.", time: "20s" },
      ],
      template: `CT BŘICHA A PÁNVE — AKUTNÍ DIVERTIKULITIDA
Indikace: [bolest v LDK / klinické podezření na divertikulitidu]
Technika: Portální fáze

NÁLEZ

Divertikulární onemocnění
Akutní segment: Lokalizace ___, délka ___ cm
Ztluštění stěny: ___ mm
Infiltrace perikolického tuku: Mírná / Střední / Výrazná, rozsah ___
Zanícený divertikl identifikován: Ano / Ne
Tumor v podkladí vyloučen: Ano / Nejisté — popis ___

Modifikovaná Hincheyho klasifikace
Stadium 0:  Ztluštění stěny, bez komplikací
Stadium Ia: Ohraničená perikolická flegmóna
Stadium Ib: Perikolický / mezenteriální absces
Stadium II: Pánevní / retroperitoneální / vzdálený absces
Stadium III: Purulentní peritonitida
Stadium IV: Fekální peritonitida (volná perforace)
→ STADIUM: ___

Absces [stadium Ib a výše]
Přítomen: Ne / Ano
Lokalizace: Perikolicky / Mezenteriálně / V pánvi / Vzdáleně
Velikost: ___ × ___ mm
Plyn v abscesu: Ne / Ano
Perkutánní drenáž možná: Ano / Ne ___

Perforace
Volný vzduch: Ne / Ano — množství ___, distribuce ___
Volná tekutina: Ne / Prostá / Komplexní — lokalizace ___

Komplikace
Fistula: Ne / Ano — Kolovezikální / Kolovaginální / Koloenterická
  Vzduch v měchýři: Ne / Ano
Obstrukce: Ne / Ano — stupeň ___

Doplňkový nález
Appendix: Normální / Patologický ___
Gynekologické orgány: Normální / Patologický nález ___

ZÁVĚR
Akutní divertikulitida [vlevo/vpravo], modifikované stadium Hinchey [___].
[Komplikace]
Naléhavost: Konzervativní postup / Intravenózní ATB / Perkutánní drenáž / Chirurgická intervence
Poznámka: Doporučujeme kolonoskopii 6–8 týdnů po odeznění zánětu (vyloučení karcinomu)`,
    },
  },

  {
    id: "cholecystitis",
    category: "surgical",
    en: {
      label: "Cholecystitis",
      evidence: "Tokyo Guidelines 2018 (TG18); Shakespear et al. 2010 CT meta-analysis; Fidler 1996 emphysematous cholecystitis",
      criticalFindings: ["Emphysematous cholecystitis", "Perforation", "Gangrenous changes", "Mirizzi syndrome"],
      searchEvidence: "Shakespear 2010 — CT sensitivity 91%; Grayson 2002 — gangrenous CT criteria; TG18 severity validation",
      searchMismatch: "Standard organ-survey approach misses emphysematous and gangrenous subtypes requiring active dedicated search. Mortality >10% without surgery — cannot be found passively.",
      searchPattern: [
        { step: 1, priority: "critical", title: "Lung Windows — Gas in GB Wall", detail: "Before anything else: lung windows, look at gallbladder. Gas in wall = emphysematous = surgical emergency (mortality 15-25%). Invisible on soft tissue windows.", time: "10s" },
        { step: 2, priority: "critical", title: "GB Assessment — Wall Enhancement", detail: "Distension, wall thickening, then wall enhancement pattern. Reduced/absent = gangrenous = urgent surgery.", time: "30s" },
        { step: 3, priority: "critical", title: "Gangrene Signs — Active Search", detail: "Irregular wall. Intraluminal membranes (sloughed mucosa — highly specific). Absent enhancement. Any one = gangrenous.", time: "30s" },
        { step: 4, priority: "high", title: "Biliary Survey — CBD + Mirizzi", detail: "CBD diameter. Choledocholithiasis. Mirizzi: stone at GB neck compressing CHD.", time: "20s" },
        { step: 5, priority: "high", title: "Perforation Assessment", detail: "Focal wall defect. Pericholecystic abscess. Free perforation.", time: "20s" },
        { step: 6, priority: "normal", title: "Liver + Remainder", detail: "Hepatic abscess. Pancreas head. Remaining survey.", time: "20s" },
      ],
      template: `CT ABDOMEN — ACUTE CHOLECYSTITIS
Indication: [RUQ pain / fever / suspected cholecystitis]
Technique: Portal venous phase

GALLBLADDER
Distension: No (≤4cm) / Yes — ___ × ___ cm
Wall thickening: No (<3mm) / Yes — ___ mm
Wall enhancement: Normal / Increased / Decreased [decreased = gangrene risk]
Pericholecystic fluid: Absent / Present
Pericholecystic stranding: Absent / Mild / Severe
Gallstones: No / Yes — largest ___ mm
Impacted cystic duct stone: No / Yes — ___ mm

CRITICAL SUBTYPES
Gangrenous cholecystitis:
  Irregular/asymmetric wall: No / Yes
  Intraluminal membranes: No / Yes
  Absent wall enhancement: No / Yes
  → Gangrenous: No / Suspected / Yes — URGENT SURGERY

Emphysematous cholecystitis:
  Gas in GB wall: No / Yes [EMERGENCY]
  → Emphysematous: No / Yes — EMERGENCY SURGERY

Perforation:
  Focal wall defect: No / Yes
  Pericholecystic abscess: No / Yes — ___ mm
  Free perforation: No / Yes
  Type: I (abscess) / II (free) / III (into organ)

BILIARY
CBD: ___ mm  IHBD: No / Yes
Choledocholithiasis: No / Yes
Mirizzi: No / Yes

TOKYO 2018 SEVERITY
Grade I / Grade II / Grade III
→ Grade: ___

IMPRESSION
[Acute calculous / acalculous] cholecystitis [subtype].
TG18 Grade: ___
Urgency: Elective / Urgent / Emergency`,
    },
    cs: {
      label: "Akutní cholecystitida",
      evidence: "Tokyovské guidelines 2018 (TG18); Shakespear et al. 2010 CT metaanalýza; Fidler 1996 emfyzematózní cholecystitida",
      criticalFindings: ["Emfyzematózní cholecystitida", "Perforace", "Gangrenózní změny", "Mirizziho syndrom"],
      searchEvidence: "Shakespear 2010 — senzitivita CT 91 %; Grayson 2002 — CT kritéria gangrenózní cholecystitidy; validace závažnosti TG18",
      searchMismatch: "Standardní přehled orgánů přehlíží emfyzematózní a gangrenózní subtypy, které vyžadují aktivní cílené hledání. Mortalita >10 % bez operace — pasivně nelze nalézt.",
      searchPattern: [
        { step: 1, priority: "critical", title: "Plicní okna — plyn ve stěně žlučníku", detail: "Jako úplně první: plicní okna, podívejte se na žlučník. Plyn ve stěně = emfyzematózní cholecystitida = chirurgická emergentní situace (mortalita 15–25 %). Na měkkotkáňových oknech neviditelné.", time: "10s" },
        { step: 2, priority: "critical", title: "Hodnocení žlučníku — sycení stěny", detail: "Distenze, ztluštění stěny, poté vzorec sycení stěny. Redukované/chybějící sycení = gangrenózní cholecystitida = urgentní operace.", time: "30s" },
        { step: 3, priority: "critical", title: "Gangrenózní změny — aktivní vyhledávání", detail: "Nepravidelná stěna. Intraluminální membrány (odloučená sliznice — vysoce specifické). Absence sycení stěny. Byť jeden z příznaků = gangrenózní cholecystitida.", time: "30s" },
        { step: 4, priority: "high", title: "Biliární systém — DCH + Mirizzi", detail: "Průměr ductus choledochus. Choledocholitiáza. Mirizziho syndrom: konkrement v hrdle žlučníku komprimující DCH.", time: "20s" },
        { step: 5, priority: "high", title: "Hodnocení perforace", detail: "Fokální defekt stěny. Pericholecy stický absces. Volná perforace.", time: "20s" },
        { step: 6, priority: "normal", title: "Játra + doplňkový přehled", detail: "Jaterní absces. Hlava pankreatu. Celkový přehled.", time: "20s" },
      ],
      template: `CT BŘICHA — AKUTNÍ CHOLECYSTITIDA
Indikace: [bolest v PPK / horečka / klinické podezření na cholecystitidu]
Technika: Portální fáze

NÁLEZ

Žlučník
Distenze: Ne (≤4 cm) / Ano — ___ × ___ cm
Ztluštění stěny: Ne (<3 mm) / Ano — ___ mm
Sycení stěny: Normální / Zvýšené / Snížené [snížené = riziko gangrény]
Pericholecy stická tekutina: Nepřítomna / Přítomna
Infiltrace pericholecy stického tuku: Nepřítomna / Mírná / Výrazná
Konkrementy: Ne / Ano — největší ___ mm
Inkarcerovaný konkrement v hrdle: Ne / Ano — ___ mm

Kritické subtypy [aktivně vyloučit každý]
Gangrenózní cholecystitida:
  Nepravidelná/asymetrická stěna: Ne / Ano
  Intraluminální membrány: Ne / Ano
  Absence sycení stěny: Ne / Ano
  → Gangrenózní: Ne / Suspektní / Ano — URGENTNÍ OPERACE

Emfyzematózní cholecystitida:
  Plyn ve stěně žlučníku: Ne / Ano [EMERGENTNÍ SITUACE]
  → Emfyzematózní: Ne / Ano — EMERGENTNÍ OPERACE

Perforace:
  Fokální defekt stěny: Ne / Ano
  Pericholecy stický absces: Ne / Ano — ___ mm
  Volná perforace: Ne / Ano
  Typ: I (absces) / II (volná) / III (do okolního orgánu)

Biliární systém
DCH: ___ mm  Dilatace IJCH: Ne / Ano
Choledocholitiáza: Ne / Ano
Mirizziho syndrom: Ne / Ano

Závažnost dle Tokyovských guidelines 2018
Stupeň I (mírná) / Stupeň II (středně těžká) / Stupeň III (těžká)
→ Stupeň: ___

ZÁVĚR
Akutní [kalkulózní / akalkulózní] cholecystitida [subtyp].
Stupeň TG18: ___
Naléhavost: Plánovaná / Urgentní / Emergentní`,
    },
  },

  {
    id: "ischaemia",
    category: "surgical",
    en: {
      label: "Mesenteric Ischaemia",
      evidence: "ESVS Guidelines 2023; Bala et al. WSES 2017; Luther et al. systematic review 2014; Menke 2010 meta-analysis CTA",
      criticalFindings: ["Pneumatosis", "Portal venous gas", "Non-enhancing bowel", "Free air"],
      searchEvidence: "Menke 2010 — CTA sensitivity 93.3%; ESVS 2023 — vascular-first assessment mandated; Bala WSES 2017 — search sequence recommendations",
      searchMismatch: "CRITICAL: templates are bowel-first. Correct search is VASCULAR-FIRST on arterial phase. Assessing bowel before vessels is the most common search error in AMI.",
      searchPattern: [
        { step: 1, priority: "critical", title: "ARTERIAL PHASE — SMA Origin", detail: "Open arterial phase ONLY first. SMA origin at L1. Patent? Filling defect (embolus)? Thrombosis? Highest-value 30 seconds in abdominal radiology.", time: "30s" },
        { step: 2, priority: "critical", title: "Trace SMA + Branches", detail: "Follow SMA distally. Where does filling stop? Defines ischaemic territory. Use MIP reconstructions if available.", time: "30s" },
        { step: 3, priority: "critical", title: "Venous Assessment", detail: "Portal venous phase: SMV, portal vein, splenic vein thrombosis.", time: "20s" },
        { step: 4, priority: "critical", title: "Lung Windows — Pneumatosis + Portal Gas", detail: "Before bowel detail: lung windows. Portal venous gas and pneumatosis intestinalis — highest-mortality CT signs. Both invisible on soft tissue windows.", time: "15s" },
        { step: 5, priority: "high", title: "Bowel Viability", detail: "Wall enhancement. Absent = transmural infarction. Location corresponds to vascular territory.", time: "30s" },
        { step: 6, priority: "normal", title: "Extent + Complications", detail: "Ischaemic segment length. Free fluid. Free air (perforation).", time: "20s" },
      ],
      template: `CTA ABDOMEN — ACUTE MESENTERIC ISCHAEMIA
Indication: [severe pain out of proportion / suspected AMI]
Technique: CTA — arterial + portal venous [PV-only inadequate]

VASCULAR — ARTERIAL PHASE [report first]
SMA:
  Patency: Patent / Occluded / Stenosed
  Occlusion location: ___ cm from origin
  Type: Embolic / Thrombotic / Dissection / Vasospasm (NOMI)
  Collateral filling: No / Yes
Coeliac: Patent / Occluded / Stenosed
IMA: Patent / Occluded / Stenosed
SMV: Patent / Occluded — extent ___
Portal vein: Patent / Thrombosed
Splenic vein: Patent / Occluded

AETIOLOGY
Arterial embolism: No / Yes
Arterial thrombosis: No / Yes
Venous thrombosis: No / Yes
NOMI: No / Yes
Mechanical strangulation: No / Yes

ISCHAEMIA SEVERITY
Pneumatosis intestinalis: No / Yes — location ___ [CRITICAL]
Portal venous gas: No / Yes [CRITICAL]
Free intraperitoneal air: No / Yes
Non-enhancing bowel: No / Yes — location ___, extent ___ cm
Mesenteric oedema: Absent / Present
Ascites: No / Yes — simple / haemorrhagic

BOWEL
Territory: Jejunum / Ileum / Right colon / Transverse / Left colon
Extent: ___ cm
Viability: Viable / Threatened / Infarcted

IMPRESSION
[Occlusive / Non-occlusive] acute mesenteric ischaemia.
Vessel: [SMA/SMV/portal] — [type]
Viability: Viable / Threatened / Infarcted
Urgency: EMERGENCY — immediate vascular/surgical notification`,
    },
    cs: {
      label: "Akutní mesenterická ischémie",
      evidence: "Guidelines ESVS 2023; Bala et al. WSES 2017; Luther et al. systematický přehled 2014; Menke 2010 metaanalýza CTA",
      criticalFindings: ["Pneumatosis intestinalis", "Plyn v portální žíle", "Chybějící sycení stěny střeva", "Volný vzduch"],
      searchEvidence: "Menke 2010 — senzitivita CTA 93,3 %; ESVS 2023 — nařizuje přístup cévní-první; Bala WSES 2017 — doporučení k pořadí systematiky",
      searchMismatch: "KRITICKÉ: šablony jsou zaměřeny na střevo jako první. Správná systematika je CÉVNÍ JAKO PRVNÍ v arteriální fázi. Hodnocení střeva před cévami je nejčastější chybou v systematice AMI.",
      searchPattern: [
        { step: 1, priority: "critical", title: "ARTERIÁLNÍ FÁZE — odstup AMS", detail: "Otevřete POUZE arteriální fázi jako první. Odstup AMS na úrovni L1. Průchodná? Výplňový defekt (embolus)? Trombóza? Nejcennějších 30 sekund v břišní radiologii.", time: "30s" },
        { step: 2, priority: "critical", title: "Sledování AMS a větví", detail: "Sledujte AMS distálně. Kde se plnění zastavuje? Tím je definováno ischemické teritorium. Pokud jsou dostupné MIP rekonstrukce, využijte je.", time: "30s" },
        { step: 3, priority: "critical", title: "Hodnocení žil", detail: "Portální fáze: trombóza VMH, v. portae, v. lienalis.", time: "20s" },
        { step: 4, priority: "critical", title: "Plicní okna — pneumatosis + plyn v portální žíle", detail: "Před podrobným hodnocením střeva: plicní okna. Plyn v portální žíle a pneumatosis intestinalis jsou CT nálezy s nejvyšší mortalitou. Na měkkotkáňových oknech oba neviditelné.", time: "15s" },
        { step: 5, priority: "high", title: "Viabilita střeva", detail: "Sycení stěny střeva. Chybějící sycení = transmurální infarkt. Lokalizace odpovídá cévnímu teritoriu.", time: "30s" },
        { step: 6, priority: "normal", title: "Rozsah + komplikace", detail: "Délka ischemického segmentu. Volná tekutina. Volný vzduch (perforace).", time: "20s" },
      ],
      template: `CTA BŘICHA — AKUTNÍ MESENTERICKÁ ISCHÉMIE
Indikace: [silná bolest neodpovídající klinickému nálezu / podezření na AMI]
Technika: CTA — arteriální + portální fáze [pouze portální fáze je nedostatečná]

NÁLEZ

Cévní nález — arteriální fáze [uvést jako první]
AMS:
  Průchodnost: Průchodná / Okludovaná / Stenotická
  Lokalizace okluze: ___ cm od odstupu
  Typ: Embolická (výplňový defekt) / Trombotická / Disekce / Vazospazmus (NOMI)
  Kolaterální plnění: Ne / Ano
Truncus coeliacus: Průchodný / Okludovaný / Stenotický
AMI: Průchodná / Okludovaná / Stenotická
VMH: Průchodná / Okludovaná — rozsah ___
V. portae: Průchodná / Trombózovaná
V. lienalis: Průchodná / Okludovaná

Etiologie
Arteriální embolie: Ne / Ano
Arteriální trombóza: Ne / Ano
Venózní trombóza: Ne / Ano
NOMI (neokluzivní): Ne / Ano
Mechanická strangulace: Ne / Ano

Závažnost ischémie
Pneumatosis intestinalis: Ne / Ano — lokalizace ___ [KRITICKÝ NÁLEZ]
Plyn v portální žíle: Ne / Ano [KRITICKÝ NÁLEZ]
Volný vzduch v peritoneální dutině: Ne / Ano
Chybějící sycení stěny střeva: Ne / Ano — lokalizace ___, délka ___ cm
Edém mezenteria: Nepřítomen / Přítomen
Ascites: Ne / Ano — prostý/hemoragický

Střevo
Postižené teritorium: Jejunum / Ileum / Pravé tračník / Transverzum / Levé tračník
Rozsah: ___ cm
Viabilita: Životaschopné / Ohrožené / Infarkt

ZÁVĚR
Akutní mesenterická ischémie [okluzivní/neokluzivní].
Postižená céva: [AMS/VMH/v. portae] — [typ]
Viabilita střeva: Životaschopné / Ohrožené / Infarkt
URGENTNÍ NÁLEZ — nutná okamžitá konzultace chirurgie/vaskulární chirurgie`,
    },
  },

  {
    id: "perforation",
    category: "surgical",
    en: {
      label: "GI Perforation",
      evidence: "Hainaux et al. 2006 CT sensitivity 92%; Langell & Mulvihill 2008; ACR Appropriateness Criteria",
      criticalFindings: ["Free air volume", "Faecal peritonitis", "Perforation site"],
      searchEvidence: "Hainaux 2006 — lung windows mandatory; Stapakis 1992 — subdiaphragmatic air detection; Maniatis 2000 — CT localisation",
      searchMismatch: "Template lists free air as a finding. Correct: open lung windows BEFORE soft tissue windows. Free air invisible on W400/L40 — most common technical miss.",
      searchPattern: [
        { step: 1, priority: "critical", title: "Lung Windows FIRST — Every Case", detail: "W1500/L-600 before soft tissue. Entire abdomen. Subdiaphragmatic, perihepatic, perisplenic, mesenteric, pelvic. One bubble changes everything.", time: "20s" },
        { step: 2, priority: "critical", title: "Localise from Air Distribution", detail: "Subphrenic anterior = gastroduodenal. Perisplenic = gastric. Central mesenteric = small bowel. Pericolonic = colonic.", time: "20s" },
        { step: 3, priority: "critical", title: "Find the Wall Defect", detail: "Soft tissue windows at suspected site. Focal defect, extraluminal contrast, perilesional inflammation.", time: "30s" },
        { step: 4, priority: "high", title: "Peritoneal Contamination", detail: "Free fluid: simple vs complex/dense (pus/faecal) vs haemorrhagic. Localised vs diffuse.", time: "20s" },
        { step: 5, priority: "high", title: "Causative Pathology", detail: "Peptic ulcer, diverticular, tumour, Meckel, stercoral, ischaemic.", time: "30s" },
        { step: 6, priority: "normal", title: "Contained vs Free + Organs", detail: "Abscess/phlegmon vs free contamination. Standard survey.", time: "20s" },
      ],
      template: `CT ABDOMEN — GI PERFORATION
Indication: [peritonism / suspected perforation]
Technique: Portal venous (no oral contrast if perforation suspected)

FREE AIR
Free intraperitoneal air: No / Yes
  Volume: Trace / Small / Moderate / Large
  Distribution: Subdiaphragmatic R/L / Perihepatic / Perisplenic / Pelvic / Diffuse
Retroperitoneal air: No / Yes — location ___

PERFORATION SITE
Most likely: Gastroduodenal / Small bowel / Appendix / Colon / Unclear
Wall defect: No / Yes — location ___
Extraluminal contrast: No / Yes

PERITONEAL CONTAMINATION
Free fluid: No / Simple / Complex / Haemorrhagic / Faeculent
Distribution: Localised (___) / Diffuse
Peritoneal enhancement: No / Yes

CONTAINED vs FREE
Contained — abscess: No / Yes — ___ mm
Contained — phlegmon: No / Yes

CAUSATIVE PATHOLOGY
Peptic ulcer: No / Suspected ___
Diverticular: No / Yes — Hinchey ___
Tumour: No / Yes ___
Ischaemic / Stercoral: No / Yes

IMPRESSION
[Free / Contained] GI perforation, [volume] pneumoperitoneum.
Site: ___  Cause: ___
Contamination: Localised / Diffuse
Urgency: Emergency / Urgent`,
    },
    cs: {
      label: "Perforace GIT",
      evidence: "Hainaux et al. 2006 senzitivita CT 92 %; Langell & Mulvihill 2008; ACR Appropriateness Criteria",
      criticalFindings: ["Množství volného vzduchu", "Fekální peritonitida", "Místo perforace"],
      searchEvidence: "Hainaux 2006 — plicní okna jsou povinná; Stapakis 1992 — detekce subdiafragmatického vzduchu; Maniatis 2000 — CT lokalizace perforace",
      searchMismatch: "Šablona uvádí volný vzduch jako nález. Správně: otevřete plicní okna DŘÍVE než měkkotkáňová. Volný vzduch je na W400/L40 neviditelný — nejčastější technická chyba.",
      searchPattern: [
        { step: 1, priority: "critical", title: "NEJDŘÍVE plicní okna — každý případ", detail: "W1500/L-600 před měkkotkáňovými okny. Celé břicho. Subdiafragmaticky, perihepatálně, perilenálně, mezenteriálně, pánevně. Jedna vzduchová bublina mění vše.", time: "20s" },
        { step: 2, priority: "critical", title: "Lokalizace dle distribuce vzduchu", detail: "Subdiafragmaticky vpředu = gastroduodenální. Perienálně = žaludek. Centrálně mezenteriálně = tenké střevo. Perikolicky = tlusté střevo.", time: "20s" },
        { step: 3, priority: "critical", title: "Nalezení defektu stěny", detail: "Měkkotkáňová okna v místě suspektní perforace. Fokální defekt, extraluminální kontrast, perilesionální zánět.", time: "30s" },
        { step: 4, priority: "high", title: "Kontaminace peritoneální dutiny", detail: "Volná tekutina: prostá vs. komplexní/denzní (hnis/střevní obsah) vs. hemoragická. Lokalizovaná vs. difuzní.", time: "20s" },
        { step: 5, priority: "high", title: "Příčina perforace", detail: "Peptický vřed, divertikulární onemocnění, tumor, Meckelův divertikl, stercorální perforace, ischemie.", time: "30s" },
        { step: 6, priority: "normal", title: "Ohraničená vs. volná perforace + orgány", detail: "Absces/flegmóna vs. volná kontaminace. Celkový přehled orgánů.", time: "20s" },
      ],
      template: `CT BŘICHA — PERFORACE GIT
Indikace: [peritonismus / podezření na perforaci]
Technika: Portální fáze (bez perorálního kontrastu při podezření na perforaci)

NÁLEZ

Volný vzduch
Volný vzduch v peritoneální dutině: Ne / Ano
  Množství: Stopy / Malé / Střední / Velké
  Distribuce: Subdiafragmaticky vpravo/vlevo / Perihepatálně / Perienálně / Pánevně / Difuzně
Retroperitoneální vzduch: Ne / Ano — lokalizace ___

Místo perforace
Nejpravděpodobnější lokalizace: Gastroduodenální / Tenké střevo / Appendix / Tlusté střevo / Nejasná
Defekt stěny: Ne / Ano — lokalizace ___
Extraluminální kontrast: Ne / Ano

Kontaminace peritoneální dutiny
Volná tekutina: Ne / Prostá / Komplexní / Hemoragická / Střevní obsah
Distribuce: Lokalizovaná (___) / Difuzní
Sycení pobřišnice: Ne / Ano [svědčí pro peritonitidu]

Ohraničení
Absces: Ne / Ano — ___ mm
Flegmóna: Ne / Ano

Příčina perforace
Peptický vřed: Ne / Suspektní ___
Divertikulární onemocnění: Ne / Ano — Hinchey ___
Tumor: Ne / Ano ___
Ischemie / Stercorální: Ne / Ano

ZÁVĚR
[Volná / Ohraničená] perforace GIT, pneumoperitoneum [množství].
Místo: ___  Příčina: ___
Kontaminace: Lokalizovaná / Difuzní
Naléhavost: Emergentní / Urgentní`,
    },
  },

  {
    id: "trauma",
    category: "trauma",
    en: {
      label: "Abdominal Trauma",
      evidence: "AAST Organ Injury Scales (validated); EAST guidelines 2012; WSES trauma guidelines 2020; Dreizin 2020 CT search patterns",
      criticalFindings: ["Active extravasation", "Grade IV-V organ injury", "Mesenteric injury", "Diaphragm tear"],
      searchEvidence: "Dreizin 2020 — systematic search reduces missed injuries; Boscak 2013 — extravasation detection; WSES 2020 — priority-ordered assessment",
      searchMismatch: "Standard organ-by-organ survey misses time-critical findings. Correct trauma search is priority-ordered: extravasation first, then organs by severity, hollow viscus last.",
      searchPattern: [
        { step: 1, priority: "critical", title: "Arterial Phase — Extravasation Hunt", detail: "Arterial phase ONLY first. Bright foci >90 HU = active arterial extravasation. Single finding most urgently changing management.", time: "30s" },
        { step: 2, priority: "critical", title: "Haemoperitoneum Distribution", detail: "Coronal: perihepatic, perisplenic, pelvic, paracolic. Dense fluid >30 HU = haemoperitoneum. Points to injury source.", time: "15s" },
        { step: 3, priority: "critical", title: "Solid Organs — AAST Grade", detail: "Liver → Spleen → Kidneys → Pancreas. For each: laceration depth, haematoma extent, devascularisation, AAST grade.", time: "90s" },
        { step: 4, priority: "critical", title: "Lung Windows — Free Air + Pneumatosis", detail: "Free intraperitoneal air (hollow viscus injury). Retroperitoneal air. Pneumatosis.", time: "15s" },
        { step: 5, priority: "high", title: "Hollow Viscus + Mesentery", detail: "Free fluid WITHOUT solid organ injury = bowel/mesenteric injury. Bowel wall haematoma. Bladder rupture.", time: "45s" },
        { step: 6, priority: "high", title: "Diaphragm — Coronals", detail: "Trace entire diaphragm on coronals. Left more common. Missed constantly on axials.", time: "20s" },
        { step: 7, priority: "normal", title: "Vascular + Bones", detail: "Aorta, IVC. Spine, pelvis, ribs.", time: "30s" },
      ],
      template: `CT TRAUMA — BŘICHO A PÁNEV
Mechanism: [blunt/penetrating]  Haemodynamics: [stable/unstable]
Technique: Arterial + portal venous

⚠ CRITICAL FINDINGS [report first]
Active extravasation: No / Yes — location ___
Haemoperitoneum: No / Yes — volume ___
Pneumoperitoneum: No / Yes

SOLID ORGANS
LIVER [AAST I-VI]
Injury: No / Yes
  Laceration: depth ___ cm, extent ___ %
  Subcapsular haematoma: No / Yes — ___ %
  Extravasation: No / Yes
  AAST Grade: I / II / III / IV / V / VI

SPLEEN [AAST I-V]
Injury: No / Yes
  Laceration / Subcapsular haematoma — ___ %
  Devascularisation: No / Yes
  Extravasation: No / Yes
  AAST Grade: I / II / III / IV / V

KIDNEY R / L [AAST I-V]
Injury: No / Yes
  Laceration — collecting system ___
  Urinary extravasation: No / Yes
  AAST Grade: I / II / III / IV / V

PANCREAS [AAST I-V]
Injury: No / Yes  Main duct: No / Suspected / Yes
AAST Grade: I / II / III / IV / V

HOLLOW VISCUS & MESENTERY
Free air: No / Yes  Bowel haematoma: No / Yes
Mesenteric haematoma: No / Yes
Free fluid without solid organ injury: No / Yes [HIGH suspicion]
Bladder: Intact / Intraperitoneal rupture / Extraperitoneal rupture

VASCULAR
Aorta: Normal / Injury  IVC: Normal / Injury

DIAPHRAGM
Right: Intact / Defect ___  Left: Intact / Defect ___

HAEMOPERITONEUM
Perihepatic / Perisplenic / Pelvic / Paracolic: ___
Total: Small / Moderate / Large (>500ml)

BONES
Spine: ___  Pelvis: ___  Ribs: ___

IMPRESSION
1. ___  2. ___  3. ___
Extravasation: Present / Absent
Intervention: Angioembolisation / Operative / Conservative`,
    },
    cs: {
      label: "Trauma břicha",
      evidence: "AAST škály orgánového poranění (validované); guidelines EAST 2012; guidelines WSES pro trauma 2020; Dreizin 2020 CT systematika",
      criticalFindings: ["Aktivní extravazace", "Poranění orgánu AAST IV-V", "Poranění mezenteria", "Ruptura bránice"],
      searchEvidence: "Dreizin 2020 — systematika snižuje počet přehlédnutých poranění; Boscak 2013 — detekce extravazace; WSES 2020 — prioritní hodnocení",
      searchMismatch: "Standardní hodnocení orgán po orgánu přehlíží časově kritické nálezy. Správná traumatická systematika je prioritně řazená: extravazace první, pak orgány dle závažnosti, dutá střeva jako poslední.",
      searchPattern: [
        { step: 1, priority: "critical", title: "Arteriální fáze — hledání extravazace", detail: "Nejdříve POUZE arteriální fáze. Světlá ložiska >90 HU = aktivní arteriální extravazace. Nález, který nejnaléhavěji mění management.", time: "30s" },
        { step: 2, priority: "critical", title: "Distribuce hemoperitonea", detail: "Koronální rekonstrukce: perihepatálně, perienálně, pánevně, parakolicky. Denzní tekutina >30 HU = hemoperitoneum. Ukazuje na zdroj poranění.", time: "15s" },
        { step: 3, priority: "critical", title: "Parenchymatózní orgány — AAST staging", detail: "Játra → slezina → ledviny → pankreas. Pro každý orgán: hloubka lacerace, rozsah hematomu, devaskularizace, stupeň AAST.", time: "90s" },
        { step: 4, priority: "critical", title: "Plicní okna — volný vzduch + pneumatosis", detail: "Volný vzduch v peritoneální dutině (poranění dutého orgánu). Retroperitoneální vzduch. Pneumatosis intestinalis.", time: "15s" },
        { step: 5, priority: "high", title: "Dutá střeva + mezenterium", detail: "Volná tekutina BEZ poranění parenchymatózního orgánu = poranění střeva/mezenteria. Hematom stěny střeva. Ruptura močového měchýře.", time: "45s" },
        { step: 6, priority: "high", title: "Bránice — koronální rekonstrukce", detail: "Sledujte celou bránici na koronálních řezech. Vlevo častěji. Na axiálních řezech trvale přehlíží.", time: "20s" },
        { step: 7, priority: "normal", title: "Cévy + kosti", detail: "Aorta, DDŽ. Páteř, pánev, žebra.", time: "30s" },
      ],
      template: `CT TRAUMA — BŘICHO A PÁNEV
Mechanismus: [tupé/penetrující]  Hemodynamika: [stabilní/nestabilní]
Technika: Arteriální + portální fáze

NÁLEZ

⚠ KRITICKÉ NÁLEZY [uvést jako první]
Aktivní extravazace: Ne / Ano — lokalizace ___
Hemoperitoneum: Ne / Ano — množství ___
Pneumoperitoneum: Ne / Ano

Parenchymatózní orgány

JÁTRA [AAST I–VI]
Poranění: Ne / Ano
  Lacerace: hloubka ___ cm, rozsah ___ %
  Subkapsulární hematom: Ne / Ano — ___ %
  Extravazace: Ne / Ano
  Stupeň AAST: I / II / III / IV / V / VI

SLEZINA [AAST I–V]
Poranění: Ne / Ano
  Lacerace / Subkapsulární hematom — ___ %
  Devaskularizace: Ne / Ano
  Extravazace: Ne / Ano
  Stupeň AAST: I / II / III / IV / V

LEDVINY vpravo / vlevo [AAST I–V]
Poranění: Ne / Ano
  Lacerace — vývodný systém ___
  Urinózní extravazace: Ne / Ano
  Stupeň AAST: I / II / III / IV / V

PANKREAS [AAST I–V]
Poranění: Ne / Ano  Hlavní vývod: Ne / Suspektní / Ano
Stupeň AAST: I / II / III / IV / V

Dutá střeva + mezenterium
Volný vzduch: Ne / Ano  Hematom stěny: Ne / Ano
Mezenteriální hematom: Ne / Ano
Volná tekutina bez poranění parenchymatózního orgánu: Ne / Ano [VYSOKÉ podezření]
Močový měchýř: Intaktní / Intraperitoneální ruptura / Extraperitoneální ruptura

Cévy
Aorta: Bez nálezu / Poranění  DDŽ: Bez nálezu / Poranění

Bránice
Vpravo: Intaktní / Defekt ___  Vlevo: Intaktní / Defekt ___

Hemoperitoneum
Perihepatálně / Perienálně / Pánevně / Parakolicky: ___
Celkem: Malé / Střední / Velké (>500 ml)

Kosti
Páteř: ___  Pánev: ___  Žebra: ___

ZÁVĚR
1. ___  2. ___  3. ___
Extravazace: Přítomna / Nepřítomna
Intervence: Angioembola / Operační / Konzervativní`,
    },
  },

  {
    id: "oncology",
    category: "oncology",
    en: {
      label: "Oncology Follow-up",
      evidence: "RECIST 1.1 (Eisenhauer et al. Eur J Cancer 2009); iRECIST 2017; Schwartz et al. inter-observer variability",
      criticalFindings: ["New lesions", "Progressive disease", "Treatment complications"],
      searchEvidence: "Eisenhauer 2009 RECIST 1.1; Nishino 2014 — systematic RECIST reduces variability; ESGAR structured oncology reporting 2016",
      searchMismatch: "Critical error: assessing images without reading prior report first. RECIST reproducibility requires intentional target lesion identification before opening images.",
      searchPattern: [
        { step: 1, priority: "critical", title: "Read Prior Report BEFORE Images", detail: "Open prior report. Target lesions, baseline sum, prior response. ONLY THEN open images.", time: "60s" },
        { step: 2, priority: "critical", title: "Measure Target Lesions", detail: "Find each prior target. Measure longest diameter. Calculate sum. Compare to baseline AND nadir.", time: "90s" },
        { step: 3, priority: "critical", title: "New Lesions Survey — Before Anything Else", detail: "Any new lesion = PD regardless of target behaviour. Check liver, peritoneum, lung bases, bones, nodes.", time: "60s" },
        { step: 4, priority: "high", title: "Non-Target Lesions", detail: "Stable / Non-CR-Non-PD / Unequivocal progression.", time: "30s" },
        { step: 5, priority: "high", title: "Treatment Complications", detail: "Immunotherapy colitis. Targeted therapy hepatotoxicity/pneumatosis. Surgical complications.", time: "30s" },
        { step: 6, priority: "normal", title: "Incidentals + Final RECIST", detail: "Adrenal, bony findings. Calculate response category.", time: "20s" },
      ],
      template: `CT ABDOMEN — ONCOLOGY RESPONSE ASSESSMENT
Primary: ___  Treatment: ___  Cycle: ___  Prior CT: ___
Technique: Portal venous ± arterial

⚠ RESPONSE SUMMARY [complete last, report first]
RECIST 1.1: CR / PR / SD / PD
New lesions: No / Yes — ___

TARGET LESIONS [max 5 total, max 2/organ, ≥10mm; nodes ≥15mm SA]
1. Location ___, current ___ mm (prior ___ mm, Δ ___ %)
2. Location ___, current ___ mm (prior ___ mm, Δ ___ %)
3. Location ___, current ___ mm (prior ___ mm, Δ ___ %)
Sum: Current ___ mm / Prior ___ mm / Baseline ___ mm / Nadir ___ mm
Change from baseline: ___ %

NON-TARGET LESIONS
Present: No / Yes
Response: CR / Non-CR Non-PD / Unequivocal progression

NEW LESIONS [any = PD]
None / Yes — location ___, size ___

ORGAN ASSESSMENT
Liver: No mets / Mets — number ___, largest ___ mm
Peritoneum: No / Disease — distribution ___
Nodes: Retroperitoneal ___ mm / Mesenteric ___ mm
Bones: No / Lesions — location ___

PRIMARY SITE
Size: ___ × ___ mm (prior ___ × ___)

TREATMENT COMPLICATIONS
Bowel: None / Colitis / Obstruction / Perforation
Liver: None / Steatosis / Congestion
Thrombosis: None / DVT / Portal
Immunotherapy colitis: No / Yes — grade ___

RECIST 1.1
CR / PR (≥30% ↓ from baseline) / PD (≥20% ↑ from nadir + new lesion) / SD
→ Response: ___

IMPRESSION
[Tumour], [treatment], cycle ___.
RECIST 1.1: [response]  Sum: ___ mm ([±]___ % from baseline)
Next assessment: ___`,
    },
    cs: {
      label: "Onkologické sledování",
      evidence: "RECIST 1.1 (Eisenhauer et al. Eur J Cancer 2009); iRECIST 2017; Schwartz et al. variabilita mezi hodnotiteli",
      criticalFindings: ["Nové léze", "Progrese onemocnění", "Komplikace léčby"],
      searchEvidence: "Eisenhauer 2009 RECIST 1.1; Nishino 2014 — systematické hodnocení snižuje variabilitu; konsensus ESGAR pro onkologické hlášení 2016",
      searchMismatch: "Kritická chyba: hodnocení snímků bez předchozího přečtení starého protokolu. Reprodukovatelnost RECIST vyžaduje záměrnou identifikaci cílových lézí před otevřením snímků.",
      searchPattern: [
        { step: 1, priority: "critical", title: "Nejdříve přečíst starý protokol", detail: "Otevřete předchozí protokol. Cílové léze, výchozí součet, předchozí odpověď. TEPRVE POTÉ otevřete snímky.", time: "60s" },
        { step: 2, priority: "critical", title: "Změření cílových lézí", detail: "Najděte každou předchozí cílovou lézi. Změřte nejdelší průměr. Vypočítejte součet. Porovnejte s výchozím stavem I nejnižší hodnotou.", time: "90s" },
        { step: 3, priority: "critical", title: "Přehled nových lézí — jako první", detail: "Jakákoli nová léze = progrese bez ohledu na chování cílových lézí. Prohledejte játra, peritoneum, baze plic, kosti, uzliny.", time: "60s" },
        { step: 4, priority: "high", title: "Necílové léze", detail: "Stabilní / Neplná remise bez progrese / Jednoznačná progrese.", time: "30s" },
        { step: 5, priority: "high", title: "Komplikace léčby", detail: "Kolitida při imunoterapii. Hepatotoxicita/pneumatosis při cílené terapii. Chirurgické komplikace.", time: "30s" },
        { step: 6, priority: "normal", title: "Vedlejší nálezy + závěrečné RECIST", detail: "Nadledviny, kostní nálezy. Výpočet kategorie odpovědi.", time: "20s" },
      ],
      template: `CT BŘICHA — ONKOLOGICKÉ SLEDOVÁNÍ / HODNOCENÍ ODPOVĚDI
Primární tumor: ___  Léčba: ___  Cyklus: ___  Předchozí CT: ___
Technika: Portální ± arteriální fáze

NÁLEZ

⚠ SOUHRN ODPOVĚDI [vyplnit na závěr, uvést na začátku]
RECIST 1.1: CR / PR / SD / PD
Nové léze: Ne / Ano — ___

Cílové léze [max. 5 celkem, max. 2 na orgán, ≥10 mm; uzliny ≥15 mm v krátké ose]
1. Lokalizace ___, aktuálně ___ mm (dříve ___ mm, Δ ___ %)
2. Lokalizace ___, aktuálně ___ mm (dříve ___ mm, Δ ___ %)
3. Lokalizace ___, aktuálně ___ mm (dříve ___ mm, Δ ___ %)
Součet: Aktuálně ___ mm / Dříve ___ mm / Výchozí ___ mm / Minimum ___ mm
Změna od výchozího stavu: ___ %

Necílové léze
Přítomny: Ne / Ano
Odpověď: CR / Neplná remise bez progrese / Jednoznačná progrese

Nové léze [jakákoli = PD]
Žádné / Ano — lokalizace ___, velikost ___

Hodnocení orgánů
Játra: Bez metastáz / Metastázy — počet ___, největší ___ mm
Peritoneum: Bez nálezu / Postižení — distribuce ___
Uzliny: Retroperitoneální ___ mm / Mezenteriální ___ mm
Kosti: Bez nálezu / Léze — lokalizace ___

Primární tumor
Velikost: ___ × ___ mm (dříve ___ × ___)

Komplikace léčby
Střevo: Žádné / Kolitida / Obstrukce / Perforace
Játra: Žádné / Steatóza / Kongesce
Trombóza: Žádná / HŽT / Portální žíla
Kolitida při imunoterapii: Ne / Ano — stupeň ___

Kategorizace RECIST 1.1
CR / PR (↓≥30 % od výchozího stavu) / PD (↑≥20 % od minima + nová léze) / SD
→ Odpověď: ___

ZÁVĚR
[Tumor], [léčba], cyklus ___.
RECIST 1.1: [odpověď]  Součet: ___ mm ([±]___ % od výchozího stavu)
Příští hodnocení: ___`,
    },
  },

  {
    id: "renalcolic",
    category: "urological",
    en: {
      label: "Renal Colic",
      evidence: "EAU Urolithiasis Guidelines 2023; Türk et al. low-dose CT validation; Brisbane et al. 2016 HU stone composition; Smith 1995 original unenhanced CT protocol",
      criticalFindings: ["High-grade obstruction", "Infected obstructed kidney", "AAA mimicking colic", "Urothelial tumour"],
      searchEvidence: "EAU 2023 — unenhanced CT gold standard (sensitivity 96%, specificity 98%); Blandino 2006 CT criteria; HU composition — Brisbane 2016",
      searchMismatch: "Stone found → report written. Critical error: finding the stone is only step 1. Degree of obstruction, secondary signs, and AAA exclusion are missed when search stops at the stone.",
      searchPattern: [
        { step: 1, priority: "critical", title: "AAA Exclusion First — Aorta", detail: "Before stone search: look at aorta. AAA rupture mimics renal colic. Diameter >3cm = aneurysm. Periaortic haematoma = rupture. 10 seconds. Mandatory for males >50.", time: "10s" },
        { step: 2, priority: "critical", title: "Find the Stone — Trace Full Ureter", detail: "Trace ureter from renal pelvis to bladder. Impaction sites: PUJ, iliac vessel crossing, VUJ. Measure in two dimensions. HU value: <500 = likely uric acid (dissolvable).", time: "45s" },
        { step: 3, priority: "critical", title: "Obstruction Degree — Secondary Signs", detail: "Hydronephrosis grade 0-3. Hydroureter. Perinephric stranding (confirms obstruction). Renal enlargement.", time: "20s" },
        { step: 4, priority: "critical", title: "Infected Obstructed Kidney", detail: "Gas in collecting system = emphysematous pyelonephritis = emergency. Renal abscess. Thickened urothelium + stranding + fever = pyonephrosis = urgent drainage.", time: "15s" },
        { step: 5, priority: "high", title: "Stone Characterisation", detail: "Size (passage probability: <4mm 80%, 4-6mm 50%, >6mm <20%). HU. Skin-to-stone distance for ESWL.", time: "20s" },
        { step: 6, priority: "high", title: "Contralateral Kidney + Bladder", detail: "Contralateral stones/hydronephrosis. Solitary kidney changes urgency.", time: "15s" },
        { step: 7, priority: "normal", title: "Alternative Pathology", detail: "Ovarian pathology. Appendix. Incidental renal lesions (Bosniak).", time: "20s" },
      ],
      template: `CT-KUB (UNENHANCED) — RENAL COLIC
Indication: [flank pain / suspected urolithiasis]
Technique: Unenhanced CT, low-dose protocol (EAU 2023)

AORTA [exclude AAA — mandatory males >50]
Diameter: ___ mm  (normal <30mm)
Periaortic haematoma: No / Yes [AAA EMERGENCY]
→ AAA excluded: Yes / No ___

URETERIC STONE
Stone identified: No / Yes
  Location: PUJ / Proximal ureter / Mid ureter / Iliac crossing / Distal ureter / VUJ
  Side: Right / Left / Bilateral
  Size: ___ × ___ mm
  HU value: ___ HU  (<500 = likely uric acid; >1000 = calcium stone)
  Skin-to-stone distance: ___ mm
Multiple stones: No / Yes — locations ___

OBSTRUCTION
Hydronephrosis: No / Grade 1 / Grade 2 / Grade 3
Hydroureter: No / Yes — to level ___
Perinephric stranding: Absent / Present [confirms obstruction]

INFECTED OBSTRUCTION
Gas in collecting system: No / Yes [EMERGENCY]
Renal abscess: No / Yes — ___ mm
Pyonephrosis features: No / Yes [urgent drainage]

PASSAGE PROBABILITY (EAU 2023)
<4mm ~80% / 4-6mm ~50% / >6mm <20%
→ Probability: High / Moderate / Low

CONTRALATERAL KIDNEY
Stones: No / Yes  Hydronephrosis: No / Yes
Solitary kidney: No / Yes [changes urgency]

BLADDER
Normal / Stone / Wall thickening / Mass ___

INCIDENTAL RENAL LESIONS
Cysts: No / Yes — Bosniak ___ / Size ___
Solid lesion: No / Yes ___

IMPRESSION
[Right/left] ureteric stone, [location], [size] mm, [HU] HU.
Obstruction: [Grade/None]  Infected: No / Yes
Passage probability: [High/Moderate/Low]
Urgency: Routine / Urgent / Emergency`,
    },
    cs: {
      label: "Renální kolika / Urolitiáza",
      evidence: "Guidelines EAU pro urolitiázu 2023; validace low-dose CT — Türk et al.; složení konkrementů dle HU — Brisbane et al. 2016; Smith 1995 původní protokol nativního CT",
      criticalFindings: ["Vysokostupňová obstrukce", "Infikovaná obstruovaná ledvina", "AAA napodobující koliku", "Uroteliální tumor"],
      searchEvidence: "EAU 2023 — nativní CT je zlatý standard (senzitivita 96 %, specificita 98 %); kritéria CT Blandino 2006; složení dle HU — Brisbane 2016",
      searchMismatch: "Konkrement nalezen → protokol dopsán. Kritická chyba: nalezení konkrementu je pouze první krok. Stupeň obstrukce, sekundární příznaky a vyloučení AAA jsou přehlíženy, jakmile se systematika zastaví u konkrementu.",
      searchPattern: [
        { step: 1, priority: "critical", title: "Nejdříve vyloučit AAA — aorta", detail: "Před hledáním konkrementu: pohled na aortu. Ruptura AAA dokonale napodobuje renální koliku. Průměr >3 cm = aneuryzma. Periortální hematom = ruptura. 10 sekund. Povinné u mužů >50 let.", time: "10s" },
        { step: 2, priority: "critical", title: "Nalezení konkrementu — sledování celého močovodu", detail: "Sledujte močovod od pyelonu až k měchýři. Nejčastější místa uvíznutí: pyeloureterální přechod, přechod přes ilické cévy, ureterovezikální přechod. Měřte ve dvou rovinách. HU: <500 = pravděpodobně kyselina močová (možná dissoluce).", time: "45s" },
        { step: 3, priority: "critical", title: "Stupeň obstrukce — sekundární příznaky", detail: "Stupeň hydronefrózy 0–3. Hydroureter. Infiltrace perirenálního tuku (potvrzuje obstrukci). Zvětšení ledviny.", time: "20s" },
        { step: 4, priority: "critical", title: "Infikovaná obstruovaná ledvina", detail: "Plyn v dutém systému = emfyzematózní pyelonefritida = emergentní situace. Renální absces. Ztluštění urotelu + infiltrace tuku + horečka = pyonefróza = urgentní drenáž.", time: "15s" },
        { step: 5, priority: "high", title: "Charakteristika konkrementu", detail: "Velikost (pravděpodobnost spontánního odchodu: <4 mm 80 %, 4–6 mm 50 %, >6 mm <20 %). HU hodnota. Vzdálenost kůže–konkrement pro ESWL.", time: "20s" },
        { step: 6, priority: "high", title: "Kontralaterální ledvina + měchýř", detail: "Konkrementy/hydronefróza kontralaterálně. Soliterní ledvina mění naléhavost.", time: "15s" },
        { step: 7, priority: "normal", title: "Alternativní patologie", detail: "Ovariální patologie. Appendix. Incidentální renální léze (Bosniakova klasifikace).", time: "20s" },
      ],
      template: `CT LEDVINY–MOČOVODY–MĚCHÝŘ (CT-LMM) — RENÁLNÍ KOLIKA / UROLITIÁZA
Indikace: [bolest v boku / klinické podezření na urolitiázu]
Technika: Nativní CT, low-dose protokol (EAU 2023)

NÁLEZ

Aorta [vyloučit AAA — povinné u mužů >50 let]
Průměr aorty: ___ mm (norma <30 mm)
Periortální hematom: Ne / Ano [RUPTURA AAA — EMERGENTNÍ SITUACE]
→ AAA vyloučena: Ano / Ne ___

Konkrement v močovodu
Konkrement nalezen: Ne / Ano
  Lokalizace: Pyeloureterální přechod / Proximální močovod / Střední močovod / Přechod přes ilické cévy / Distální močovod / Ureterovezikální přechod
  Strana: Vpravo / Vlevo / Oboustranně
  Velikost: ___ × ___ mm
  HU hodnota: ___ HU  (<500 = pravděpodobně kyselina močová; >1000 = kalciový konkrement)
  Vzdálenost kůže–konkrement: ___ mm
Mnohočetné konkrementy: Ne / Ano — lokalizace ___

Obstrukce
Hydronefróza: Ne / Stupeň 1 / Stupeň 2 / Stupeň 3
Hydroureter: Ne / Ano — po úroveň ___
Infiltrace perirenálního tuku: Nepřítomna / Přítomna [potvrzuje obstrukci]

Infikovaná obstrukce [aktivně vyloučit]
Plyn v dutém systému: Ne / Ano [EMERGENTNÍ SITUACE]
Renální absces: Ne / Ano — ___ mm
Příznaky pyonefrózy: Ne / Ano [urgentní drenáž]

Pravděpodobnost spontánního odchodu (EAU 2023)
<4 mm ~80 % / 4–6 mm ~50 % / >6 mm <20 %
→ Pravděpodobnost: Vysoká / Střední / Nízká

Kontralaterální ledvina
Konkrementy: Ne / Ano  Hydronefróza: Ne / Ano
Soliterní ledvina: Ne / Ano [mění naléhavost]

Močový měchýř
Bez patologického nálezu / Konkrement / Ztluštění stěny / Expanze ___

Incidentální renální léze
Cysty: Ne / Ano — Bosniakova klasifikace ___ / Velikost ___
Solidní léze: Ne / Ano ___

ZÁVĚR
Konkrement v [pravém/levém] močovodu, lokalizace [___], velikost ___ mm, HU ___.
Obstrukce: [stupeň/bez obstrukce]  Infekce: Ne / Ano
Pravděpodobnost spontánního odchodu: [Vysoká/Střední/Nízká]
Aorta: Normální nález / AAA ___
Naléhavost: Plánovaná / Urgentní / Emergentní`,
    },
  },

  {
    id: "aaa",
    category: "vascular",
    en: {
      label: "AAA / Aortic Surveillance",
      evidence: "ESVS AAA Guidelines 2019; UKSAT 5.5cm threshold (1998); EVAR-1/DREAM trials; White endoleak classification (1997); SVS reporting standards",
      criticalFindings: ["Rapid growth >5mm/6mo", "Endoleak type I/III", "Rupture signs", "Juxta/suprarenal extent"],
      searchEvidence: "ESVS 2019 — perpendicular-to-centreline measurement mandate; Cayne 2004 endoleak CT criteria; EVAR-1 surveillance protocol",
      searchMismatch: "Most radiologists measure maximum axial diameter and stop. Critical errors: (1) axial overestimates true diameter by up to 20% — must measure perpendicular to centreline. (2) Post-EVAR: endoleak needs arterial AND delayed phases. (3) Iliac aneurysms systematically under-reported.",
      searchPattern: [
        { step: 1, priority: "critical", title: "Rupture Signs First", detail: "Periaortic haematoma, retroperitoneal haematoma, draped aorta sign (posterior wall loss against vertebrae = contained rupture). Emergency surgery without further CT if present.", time: "15s" },
        { step: 2, priority: "critical", title: "Measure Perpendicular to Centreline", detail: "NOT axial — overestimates 5-8mm in tortuous aorta. MPR perpendicular to lumen centreline. Outer wall to outer wall. ESVS-mandated method.", time: "30s" },
        { step: 3, priority: "critical", title: "Post-EVAR: Endoleak — Two Phases", detail: "Arterial: Type I (seal zones), Type III (midgraft defect). Delayed: Type II (IMA, lumbar — fills late, missed on arterial alone). Type I and III = reintervention.", time: "60s" },
        { step: 4, priority: "critical", title: "Growth Rate — Compare to Prior", detail: "Threshold: ≥5.5cm men, ≥5.0cm women. Growth >5mm/6mo = rapid = surgical referral regardless of size.", time: "20s" },
        { step: 5, priority: "high", title: "Extent — Neck and Iliac", detail: "Proximal neck: infrarenal vs juxta vs pararenal vs suprarenal. Neck length, diameter, angulation. Iliac: >18mm = aneurysmal.", time: "30s" },
        { step: 6, priority: "high", title: "Post-EVAR Graft", detail: "Migration? Limb kinking/thrombosis. Sac change >5mm without endoleak = Type V.", time: "30s" },
        { step: 7, priority: "normal", title: "Visceral Vessels + Thrombus", detail: "Renal arteries. SMA/coeliac. Mural thrombus. Venous anomalies.", time: "20s" },
      ],
      template: `CTA ABDOMEN — AAA / AORTIC SURVEILLANCE
Indication: [surveillance / pre-operative / post-EVAR follow-up]
Technique: Non-contrast + arterial + delayed phases [delayed mandatory post-EVAR]

RUPTURE SIGNS [before measurement]
Periaortic haematoma: No / Yes
Retroperitoneal haematoma: No / Yes — extent ___
Draped aorta sign: No / Yes
→ Rupture: No / Contained / Free — EMERGENCY if present

MEASUREMENT [perpendicular to centreline — ESVS mandate]
Max diameter: ___ mm AP × ___ mm transverse
Prior: ___ mm (___) → Growth: ___ mm over ___ months
Growth: Stable / Slow / Rapid (>5mm/6mo) [rapid = surgical referral]
Threshold reached: No / Yes (≥55mm men / ≥50mm women)

AORTIC EXTENT
Proximal: Infrarenal / Juxtarenal / Pararenal / Suprarenal
Infrarenal neck: Length ___ mm / Diameter ___ mm / Angulation ___ °
  Thrombus in neck: No / Yes  Calcification: No / Focal / Circumferential
Distal: Above bifurcation / At bifurcation / Involving iliac ___

ILIAC ARTERIES
Right CIA: ___ mm  Left CIA: ___ mm  (normal <18mm)
Right IIA: Patent / Aneurysmal ___ mm
Left IIA: Patent / Aneurysmal ___ mm

MURAL THROMBUS
Extent: None / Eccentric / Circumferential  Max thickness: ___ mm

POST-EVAR [complete if graft present]
Graft migration: No / Proximal ___ mm / Distal ___
Limb patency: R patent / R thrombosed  ·  L patent / L thrombosed

ENDOLEAK [White 1997 — arterial + delayed phases required]
Type I (seal zone, arterial): No / Yes — Ia / Ib
Type II (branch vessel, delayed): No / Yes — IMA / Lumbar
Type III (graft defect, arterial): No / Yes
Type V (endotension — sac growth, no leak): No / Yes
→ Endoleak: No / Type ___ — Action: Observe / Reintervene

SAC (post-EVAR)
Current: ___ mm  Prior: ___ mm  Change: ___

VISCERAL VESSELS
Coeliac: Patent / Stenosed  SMA: Patent / Stenosed
Right renal: Patent / Stenosed ___  Left renal: Patent / Stenosed ___

IMPRESSION
[Infrarenal/Juxta/Suprarenal] AAA, max ___ mm.
Growth: [Stable / +___ mm / Rapid]  Threshold: [Below / Reached]
Post-EVAR: Endoleak [None / Type ___]  Sac: [Stable / Regressing / Enlarging]
Next surveillance: [per ESVS]`,
    },
    cs: {
      label: "AAA / Sledování aorty",
      evidence: "Guidelines ESVS pro AAA 2019; práh 5,5 cm UKSAT (1998); studie EVAR-1/DREAM; Whiteova klasifikace endoleaků (1997); SVS standardy hlášení",
      criticalFindings: ["Rychlý růst >5 mm/6 měs.", "Endoleak typu I/III", "Příznaky ruptury", "Juxta/suprarenální rozsah"],
      searchEvidence: "ESVS 2019 — měření kolmo na osu aorty je závazné; CT kritéria endoleaků Cayne 2004; sledovací protokol EVAR-1",
      searchMismatch: "Většina radiologů změří maximální axiální průměr a skončí. Kritické chyby: (1) axiální měření nadhodnocuje skutečný průměr až o 20 % — nutno měřit kolmo na osu; (2) po EVAR je k detekci endoleaku nutná arteriální A odložená fáze; (3) iliakální aneuryzmata jsou systematicky nezaznamenávána.",
      searchPattern: [
        { step: 1, priority: "critical", title: "Nejdříve příznaky ruptury", detail: "Periortální hematom, retroperitoneální hematom, příznak draped aorta (ztráta kontury zadní stěny oproti obratlům = krytá ruptura). Při pozitivním nálezu = emergentní operace bez dalšího CT.", time: "15s" },
        { step: 2, priority: "critical", title: "Měření kolmo na osu aorty", detail: "NE axiální řez — nadhodnocuje 5–8 mm u tortuózní aorty. MPR kolmo na osu lumenu. Zevní stěna k zevní stěně. Závazná metoda dle ESVS.", time: "30s" },
        { step: 3, priority: "critical", title: "Po EVAR: endoleak — dvě fáze", detail: "Arteriální: typ I (místa přiložení protézy), typ III (defekt středního segmentu). Odložená fáze: typ II (AIM, lumbální tepny — plní se pozdě, v arteriální fázi přehlédnutelný). Typy I a III = reintervence.", time: "60s" },
        { step: 4, priority: "critical", title: "Rychlost růstu — porovnání s předchozím", detail: "Práh pro operaci: ≥5,5 cm (muži), ≥5,0 cm (ženy). Růst >5 mm/6 měsíců = rychlý růst = indikace k operaci bez ohledu na absolutní velikost.", time: "20s" },
        { step: 5, priority: "high", title: "Rozsah — krček a iliakální cévy", detail: "Proximální rozsah: infrarenální vs. juxtrarenální vs. pararenální vs. suprarenální. Délka, průměr a angulace krčku. Iliakální tepny: >18 mm = aneuryzmatické rozšíření.", time: "30s" },
        { step: 6, priority: "high", title: "Hodnocení EVAR protézy", detail: "Migrace? Zákrut/trombóza raménka. Nárůst vaku >5 mm bez endoleaku = typ V (endotenze).", time: "30s" },
        { step: 7, priority: "normal", title: "Viscerální cévy + trombus", detail: "Renální tepny. AMS/truncus coeliacus. Nástěnný trombus. Žilní anomálie.", time: "20s" },
      ],
      template: `CTA BŘICHA — AAA / SLEDOVÁNÍ AORTY
Indikace: [sledování / předoperační plánování / kontrola po EVAR]
Technika: Nativní + arteriální + odložená fáze [odložená fáze povinná po EVAR]

NÁLEZ

Příznaky ruptury [hodnotit před měřením]
Periortální hematom: Ne / Ano
Retroperitoneální hematom: Ne / Ano — rozsah ___
Příznak draped aorta: Ne / Ano
→ Ruptura: Ne / Krytá / Volná — EMERGENTNÍ SITUACE při pozitivitě

Měření [kolmo na osu aorty — závazná metoda ESVS]
Maximální průměr: ___ mm AP × ___ mm transverzálně
Předchozí: ___ mm (datum ___) → Růst: ___ mm za ___ měsíců
Dynamika: Stabilní / Pomalý růst / Rychlý růst (>5 mm/6 měs.) [rychlý = indikace k operaci]
Operační práh dosažen: Ne / Ano (≥55 mm muži / ≥50 mm ženy)

Rozsah aneuryzmatu
Proximálně: Infrarenální / Juxtrarenální / Pararenální / Suprarenální
Infrarenální krček: Délka ___ mm / Průměr ___ mm / Angulace ___ °
  Trombus v krčku: Ne / Ano  Kalcifikace: Ne / Fokální / Cirkulární
Distálně: Nad bifurkací / Na bifurkaci / Zasahuje do iliakálních tepen ___

Iliakální tepny
Pravá AIC: ___ mm  Levá AIC: ___ mm  (norma <18 mm)
Pravá AII: Průchodná / Aneuryzmatická ___ mm
Levá AII: Průchodná / Aneuryzmatická ___ mm

Nástěnný trombus
Rozsah: Bez trombu / Excentrický / Cirkulární  Maximální tloušťka: ___ mm

Hodnocení EVAR protézy [vyplnit při přítomnosti protézy]
Migrace protézy: Ne / Proximální ___ mm / Distální ___
Průchodnost ramének: Pravé průchodné / Pravé trombózované  ·  Levé průchodné / Levé trombózované

Endoleak [Whiteova klasifikace — nutná arteriální + odložená fáze]
Typ I (místo přiložení, arteriální fáze): Ne / Ano — Ia / Ib
Typ II (větevní cévy, odložená fáze): Ne / Ano — AIM / Lumbální tepny
Typ III (defekt protézy, arteriální fáze): Ne / Ano
Typ V (endotenze — růst vaku bez prokazatelného endoleaku): Ne / Ano
→ Endoleak: Ne / Typ ___ — Postup: Sledování / Reintervence

Vak po EVAR
Aktuálně: ___ mm  Dříve: ___ mm  Změna: ___

Viscerální cévy
Truncus coeliacus: Průchodný / Stenotický  AMS: Průchodná / Stenotická
Pravá renální tepna: Průchodná / Stenóza ___  Levá renální tepna: Průchodná / Stenóza ___

ZÁVĚR
AAA [infrarenální/juxtrarenální/suprarenální], maximální průměr ___ mm.
Dynamika: [Stabilní / +___ mm / Rychlý růst]  Operační práh: [Nedosažen / Dosažen]
Po EVAR: Endoleak [Nepřítomen / Typ ___]  Vak: [Stabilní / Regredující / Zvětšující se]
Doporučení: [Sledovací interval dle ESVS / Indikace k operaci/EVAR / Emergentní situace]`,
    },
  },
];
