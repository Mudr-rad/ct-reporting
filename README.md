# CT Reporting

Evidence-based CT reporting templates with systematic search protocols.  
Each template has a **Search Pattern** (what to look for and in what order) and a **Reporting Template** (pre-populated delete-down format).

Available in **English** and **Czech** (written from scratch in authentic Czech radiology style — not translated).

---

## Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:5173/ct-reporting/

---

## Deploy to GitHub Pages

1. Create a GitHub repository named `ct-reporting`
2. Push this folder to it:
   ```bash
   git init
   git add .
   git commit -m "initial commit"
   git remote add origin https://github.com/YOURUSERNAME/ct-reporting.git
   git push -u origin main
   ```
3. Deploy:
   ```bash
   npm run deploy
   ```
4. In GitHub → Settings → Pages → Source: `gh-pages` branch

Your site will be live at: `https://YOURUSERNAME.github.io/ct-reporting/`

**Every future update:**
```bash
npm run build
npm run deploy
```

---

## How to Add a Template

Open the relevant data file and add a new object following this pattern:

```js
// src/data/abdominal.js  (or head.js / chest.js / spine.js)

{
  id: "unique-id",          // lowercase, no spaces
  category: "surgical",     // must match a category in src/data/modules.js

  en: {
    label: "Template Name",
    evidence: "Key references...",
    criticalFindings: ["Finding 1", "Finding 2"],
    searchEvidence: "Evidence for search pattern...",
    searchMismatch: "Why standard approach fails for this exam...",
    searchPattern: [
      {
        step: 1,
        priority: "critical",  // "critical" | "high" | "normal"
        title: "Step Title",
        detail: "Detailed explanation of what to do and why.",
        time: "30s"
      },
      // ... more steps
    ],
    template: `YOUR TEMPLATE TEXT HERE
Use backtick string for multiline.
Pre-fill normals. Blank fields use ___.`,
  },

  cs: {
    // Same structure, Czech content written in authentic Czech radiology style
    // NOT a word-for-word translation
    label: "Název šablony",
    // ...
  },
},
```

That's it. No other files need to change.

---

## How to Add a New Module (e.g. MSK, Neuro MRI)

1. **Create** `src/data/msk.js` following the pattern of `abdominal.js`

2. **Register** it in `src/data/index.js`:
   ```js
   import { MSK_TEMPLATES } from "./msk.js";
   
   export const ALL_TEMPLATES = {
     abdomen: ABDOMINAL_TEMPLATES,
     head: HEAD_TEMPLATES,
     chest: CHEST_TEMPLATES,
     spine: SPINE_TEMPLATES,
     msk: MSK_TEMPLATES,           // ← add this
   };
   ```

3. **Add module definition** in `src/data/modules.js`:
   ```js
   {
     key: "msk",
     color: "rose",
     categories: {
       msk: { text: "text-rose-400", badge: "bg-rose-500/15 text-rose-300 border-rose-500/25", border: "border-rose-500/25", bg: "bg-rose-500/8" },
     },
     tabStyle: { active: "bg-rose-500/15 text-rose-300 border-rose-500/30", inactive: "text-zinc-600 hover:text-zinc-300 border-transparent" },
   },
   ```

4. **Add labels** in `src/i18n/ui.js`:
   ```js
   MODULE_LABELS = {
     en: { ..., msk: "MSK" },
     cs: { ..., msk: "MSK" },
   };
   CATEGORY_LABELS = {
     en: { ..., msk: "MSK" },
     cs: { ..., msk: "MSK" },
   };
   ```

---

## How to Add a Language

1. Add a new language block to every entry in `src/i18n/ui.js`
2. Add `{ label, evidence, criticalFindings, searchEvidence, searchMismatch, searchPattern, template }` 
   for the new language in every template in every data file
3. Add a button in the language toggle in `src/App.jsx`

---

## Project Structure

```
src/
  App.jsx              ← main component, handles navigation and layout
  index.css            ← Tailwind import only
  main.jsx             ← React entry point
  
  data/
    index.js           ← registers all modules (edit here to add modules)
    modules.js         ← module colors and category styles
    abdominal.js       ← 11 abdominal templates
    head.js            ← 6 head templates
    chest.js           ← 8 chest templates
    spine.js           ← 2 spine templates
  
  i18n/
    ui.js              ← all interface strings (EN + CS)
```

---

## Evidence Basis

Templates use validated classification systems where available:
- **ASPECTS** — Barber et al. Lancet 2000
- **ICH Score** — Hemphill et al. Stroke 2001
- **Modified Fisher** — Frontera et al. 2006
- **Rotterdam Score** — Maas et al. 2005
- **RECIST 1.1** — Eisenhauer et al. Eur J Cancer 2009
- **Fleischner 2017** — MacMahon et al. Radiology 2017
- **Lung-RADS 2022** — ACR
- **UIP/ATS-ERS 2022** — Raghu et al.
- **ITMIG 2014** — Carter et al.
- **Revised Atlanta 2012** — Banks et al. Gut 2013
- **Modified Hinchey** — Wasvary 1999
- **AAST Organ Injury Scales** — validated outcomes data
- **AO Spine TL** — Vaccaro et al. 2013
- **TLICS** — Vaccaro et al. 2005
- **Tokyo Guidelines 2018** — TG18
- **ESVS AAA 2019** — ESVS
- **ESC Aortic 2023** — ESC
- **EAU Urolithiasis 2023** — EAU
