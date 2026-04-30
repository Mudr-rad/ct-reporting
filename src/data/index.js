// ─── DATA INDEX ──────────────────────────────────────────────────────────────
//
// To add a new module / category:
//   1. Create src/data/yourmodule.js  (copy structure from abdominal.js)
//   2. Add it to MODULES in src/data/modules.js
//   3. Import and register it below — one line each
//
// To add a template to an existing module:
//   1. Open the relevant data file (e.g. abdominal.js)
//   2. Add a new object to the array following the existing pattern
//   3. No changes needed anywhere else

import { ABDOMINAL_TEMPLATES } from "./abdominal.js";
import { HEAD_TEMPLATES }      from "./head.js";
import { CHEST_TEMPLATES }     from "./chest.js";
import { SPINE_TEMPLATES }     from "./spine.js";
// Note: ONCOLOGY_TEMPLATES is handled separately by OncologyView component
// and loaded via src/data/oncology.js

export const ALL_TEMPLATES = {
  abdomen: ABDOMINAL_TEMPLATES,
  head:    HEAD_TEMPLATES,
  chest:   CHEST_TEMPLATES,
  spine:   SPINE_TEMPLATES,
};
