// Module definitions — color schemes and category styles.
// To add a new module: add entry here, create a data file, add to src/data/index.js

export const MODULES = [
  {
    key: "abdomen",
    color: "amber",
    categories: {
      surgical:   { text: "text-amber-400",  badge: "bg-amber-500/15 text-amber-300 border-amber-500/25",   border: "border-amber-500/25",   bg: "bg-amber-500/8"   },
      trauma:     { text: "text-red-400",    badge: "bg-red-500/15 text-red-300 border-red-500/25",         border: "border-red-500/25",     bg: "bg-red-500/8"     },
      oncology:   { text: "text-sky-400",    badge: "bg-sky-500/15 text-sky-300 border-sky-500/25",         border: "border-sky-500/25",     bg: "bg-sky-500/8"     },
      urological: { text: "text-teal-400",   badge: "bg-teal-500/15 text-teal-300 border-teal-500/25",      border: "border-teal-500/25",    bg: "bg-teal-500/8"    },
      vascular:   { text: "text-orange-400", badge: "bg-orange-500/15 text-orange-300 border-orange-500/25", border: "border-orange-500/25",  bg: "bg-orange-500/8"  },
    },
    tabStyle: { active: "bg-amber-500/15 text-amber-300 border-amber-500/30",    inactive: "text-zinc-600 hover:text-zinc-300 border-transparent" },
  },
  {
    key: "head",
    color: "violet",
    categories: {
      neuro: { text: "text-violet-400", badge: "bg-violet-500/15 text-violet-300 border-violet-500/25", border: "border-violet-500/25", bg: "bg-violet-500/8" },
    },
    tabStyle: { active: "bg-violet-500/15 text-violet-300 border-violet-500/30",  inactive: "text-zinc-600 hover:text-zinc-300 border-transparent" },
  },
  {
    key: "chest",
    color: "sky",
    categories: {
      chest: { text: "text-sky-400", badge: "bg-sky-500/15 text-sky-300 border-sky-500/25", border: "border-sky-500/25", bg: "bg-sky-500/8" },
    },
    tabStyle: { active: "bg-sky-500/15 text-sky-300 border-sky-500/30",           inactive: "text-zinc-600 hover:text-zinc-300 border-transparent" },
  },
  {
    key: "spine",
    color: "emerald",
    categories: {
      spine: { text: "text-emerald-400", badge: "bg-emerald-500/15 text-emerald-300 border-emerald-500/25", border: "border-emerald-500/25", bg: "bg-emerald-500/8" },
    },
    tabStyle: { active: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30", inactive: "text-zinc-600 hover:text-zinc-300 border-transparent" },
  },
  {
    key: "oncology",
    color: "rose",
    categories: {},  // oncology uses its own tumour-selector UI
    tabStyle: { active: "bg-rose-500/15 text-rose-300 border-rose-500/30", inactive: "text-zinc-600 hover:text-zinc-300 border-transparent" },
    isOncology: true, // flag for special rendering
  },
];

export const PRIORITY_STYLES = {
  critical: { dot: "bg-red-500",   label: "text-red-400",   bg: "bg-red-500/6",   },
  high:     { dot: "bg-amber-500", label: "text-amber-400", bg: "bg-amber-500/6", },
  normal:   { dot: "bg-zinc-500",  label: "text-zinc-400",  bg: "bg-zinc-800/20", },
};
