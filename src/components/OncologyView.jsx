import { useState, useMemo } from "react";
import { ONCOLOGY_TEMPLATES } from "../data/oncology.js";
import { ONCOLOGY_UI, TUMOUR_GRID_LABELS } from "../i18n/oncology-ui.js";
import { PRIORITY_STYLES } from "../data/modules.js";

const ONCOLOGY_COLOR = {
  text: "text-rose-400",
  badge: "bg-rose-500/15 text-rose-300 border-rose-500/25",
  border: "border-rose-500/25",
  bg: "bg-rose-500/8",
  active: "bg-rose-500/15 text-rose-300 border-rose-500/30",
  inactive: "text-zinc-600 hover:text-zinc-300 border-transparent",
};

const EXTENT_SECTIONS = {
  ap:   ["tumorSpecific", "abdomen", "impression"],
  cap:  ["tumorSpecific", "chest", "abdomen", "impression"],
  ncap: ["tumorSpecific", "neck", "chest", "abdomen", "impression"],
};

function assembleTemplate(modeData, extent, sectionLabels) {
  const sections = EXTENT_SECTIONS[extent] || EXTENT_SECTIONS["ap"];
  const t = modeData.template;
  return sections
    .filter(s => t[s])
    .map(s => {
      const label = sectionLabels[s];
      if (!label || s === "tumorSpecific") return t[s];
      return `\n${"─".repeat(60)}\n${label}\n${"─".repeat(60)}\n${t[s]}`;
    })
    .join("\n");
}

export default function OncologyView({ lang, ui }) {
  const [tumourId, setTumourId] = useState(null);
  const [mode, setMode] = useState("staging"); // "staging" | "response"
  const [extent, setExtent] = useState("cap");
  const [view, setView] = useState("search");
  const [copied, setCopied] = useState(false);

  const oui = ONCOLOGY_UI[lang];
  const gridLabels = TUMOUR_GRID_LABELS[lang];

  const tumour = ONCOLOGY_TEMPLATES.find(t => t.id === tumourId);
  const modeData = tumour?.[lang]?.[mode];

  const validExtents = tumour?.validExtents || ["ap", "cap"];

  const assembledTemplate = useMemo(() => {
    if (!modeData) return "";
    return assembleTemplate(modeData, extent, oui.templateSections);
  }, [modeData, extent, oui]);

  const copyTemplate = () => {
    navigator.clipboard.writeText(assembledTemplate);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const selectTumour = (id) => {
    const t = ONCOLOGY_TEMPLATES.find(x => x.id === id);
    setTumourId(id);
    // Default to first valid extent
    if (t && !t.validExtents.includes(extent)) {
      setExtent(t.validExtents[0]);
    }
    setView("search");
    setCopied(false);
  };

  // ── TUMOUR GRID ─────────────────────────────────────────────────────────────
  if (!tumourId) {
    return (
      <div className="space-y-6">
        <div className={`rounded-lg border p-5 ${ONCOLOGY_COLOR.bg} ${ONCOLOGY_COLOR.border}`}>
          <h2 className={`text-lg font-bold mb-1 ${ONCOLOGY_COLOR.text}`}>{oui.selectTumour}</h2>
          <p className="text-xs text-zinc-500">Select tumour type, then clinical question and scan extent.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
          {ONCOLOGY_TEMPLATES.map(t => (
            <button key={t.id}
              onClick={() => selectTumour(t.id)}
              className="rounded-lg border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-800/80 hover:border-zinc-600 p-4 text-left transition-all group">
              <div className={`text-sm font-bold mb-1 group-hover:${ONCOLOGY_COLOR.text} text-zinc-300`}>
                {gridLabels[t.id]}
              </div>
              <div className="text-xs text-zinc-600">
                {t.validExtents.map(e => ONCOLOGY_UI[lang].extents[e]).join(" · ")}
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  // ── ACTIVE TUMOUR VIEW ───────────────────────────────────────────────────────
  return (
    <div className="space-y-4">

      {/* Header with back button */}
      <div className={`rounded-lg border p-4 ${ONCOLOGY_COLOR.bg} ${ONCOLOGY_COLOR.border}`}>
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-2 flex-wrap">
              <button onClick={() => setTumourId(null)}
                className="text-xs text-zinc-500 hover:text-zinc-300 border border-zinc-700 rounded px-2 py-1 transition-colors">
                ← back
              </button>
              <h2 className={`text-lg font-bold ${ONCOLOGY_COLOR.text}`}>
                {tumour[lang].label}
              </h2>
            </div>
            {modeData && (
              <p className="text-xs text-zinc-500 leading-relaxed">
                <span className="text-zinc-400 font-semibold">{ui.evidenceLabel} </span>
                {modeData.evidence}
              </p>
            )}
          </div>
          <div className="flex gap-2 flex-shrink-0">
            <button onClick={() => setView("search")}
              className={`text-xs px-3 py-1.5 rounded border font-bold transition-all ${
                view === "search" ? `${ONCOLOGY_COLOR.bg} ${ONCOLOGY_COLOR.border} ${ONCOLOGY_COLOR.text}` : "border-zinc-700 text-zinc-500 hover:text-zinc-200"
              }`}>
              {ui.searchTab}
            </button>
            <button onClick={() => setView("template")}
              className={`text-xs px-3 py-1.5 rounded border font-bold transition-all ${
                view === "template" ? `${ONCOLOGY_COLOR.bg} ${ONCOLOGY_COLOR.border} ${ONCOLOGY_COLOR.text}` : "border-zinc-700 text-zinc-500 hover:text-zinc-200"
              }`}>
              {ui.templateTab}
            </button>
          </div>
        </div>

        {/* Selectors row */}
        <div className="mt-3 flex flex-wrap gap-4 items-start">

          {/* Clinical question */}
          <div>
            <div className="text-xs text-zinc-600 mb-1.5 uppercase tracking-widest font-semibold">
              {oui.clinicalQuestion}
            </div>
            <div className="flex gap-1">
              {["staging", "response"].map(m => (
                <button key={m}
                  onClick={() => { setMode(m); setView("search"); }}
                  className={`text-xs px-3 py-1.5 rounded border font-bold transition-all ${
                    mode === m
                      ? `${ONCOLOGY_COLOR.bg} ${ONCOLOGY_COLOR.border} ${ONCOLOGY_COLOR.text}`
                      : "border-zinc-700 text-zinc-500 hover:text-zinc-300"
                  }`}>
                  {m === "staging" ? oui.staging : oui.response}
                </button>
              ))}
            </div>
          </div>

          {/* Scan extent */}
          <div>
            <div className="text-xs text-zinc-600 mb-1.5 uppercase tracking-widest font-semibold">
              {oui.scanExtent}
            </div>
            <div className="flex gap-1 flex-wrap">
              {validExtents.map(e => (
                <button key={e}
                  onClick={() => setExtent(e)}
                  className={`text-xs px-3 py-1.5 rounded border font-bold transition-all ${
                    extent === e
                      ? `${ONCOLOGY_COLOR.bg} ${ONCOLOGY_COLOR.border} ${ONCOLOGY_COLOR.text}`
                      : "border-zinc-700 text-zinc-500 hover:text-zinc-300"
                  }`}>
                  {oui.extents[e]}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Don't miss */}
        {modeData && (
          <div className="mt-3 flex flex-wrap gap-1.5 items-center">
            <span className="text-xs text-zinc-600 mr-1">{ui.dontMiss}</span>
            {modeData.criticalFindings.map(f => (
              <span key={f} className="text-xs px-2 py-0.5 bg-red-500/10 border border-red-500/20 text-red-400 rounded font-medium">
                ⚠ {f}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* SEARCH VIEW */}
      {view === "search" && modeData && (
        <div className="space-y-3">
          {/* Mismatch */}
          <div className="rounded-lg border border-zinc-700/60 bg-zinc-900/60 p-4">
            <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">
              {ui.mismatchTitle}
            </div>
            <p className="text-sm text-zinc-300 leading-relaxed">{modeData.searchMismatch}</p>
            <div className="mt-2 flex gap-2 flex-wrap">
              <span className={`text-xs px-2 py-0.5 rounded border font-semibold ${ONCOLOGY_COLOR.badge}`}>
                {mode === "staging" ? oui.classificationLabel : oui.criteriaLabel}{" "}
                {mode === "staging" ? modeData.classification : modeData.criteria}
              </span>
            </div>
            <p className="text-xs text-zinc-600 mt-2">
              <span className="text-zinc-500 font-semibold">{ui.searchEvidenceLabel} </span>
              {modeData.searchEvidence}
            </p>
          </div>

          {/* Steps */}
          <div className="rounded-lg border border-zinc-800 bg-zinc-900/40 overflow-hidden">
            <div className="px-4 py-2.5 border-b border-zinc-800 bg-zinc-900/70">
              <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">
                {ui.protocolTitle}
              </span>
            </div>
            <div className="divide-y divide-zinc-800/50">
              {modeData.searchPattern.map(s => {
                const p = PRIORITY_STYLES[s.priority];
                return (
                  <div key={s.step} className={`flex gap-3 p-4 ${p.bg}`}>
                    <div className="flex-shrink-0 flex items-start gap-2 pt-1">
                      <div className={`w-2 h-2 rounded-full flex-shrink-0 ${p.dot}`} />
                      <span className="text-xs text-zinc-700 font-bold w-3">{s.step}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline gap-2 mb-1 flex-wrap">
                        <span className={`text-sm font-bold ${p.label}`}>{s.title}</span>
                        <span className="text-xs text-zinc-700">~{s.time}</span>
                      </div>
                      <p className="text-xs text-zinc-400 leading-relaxed">{s.detail}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex gap-5 text-xs text-zinc-600 px-1">
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-red-500 flex-shrink-0" /> {ui.legendCritical}</span>
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0" /> {ui.legendHigh}</span>
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-zinc-500 flex-shrink-0" /> {ui.legendStandard}</span>
          </div>
        </div>
      )}

      {/* TEMPLATE VIEW */}
      {view === "template" && modeData && (
        <div className="space-y-3">
          <div className="rounded-lg border border-zinc-800 bg-zinc-900/40 overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-zinc-800 bg-zinc-900/70">
              <span className="text-xs text-zinc-600">
                {ui.formatNote} · {oui.extents[extent]}
              </span>
              <button onClick={copyTemplate}
                className={`text-xs px-3 py-1 rounded border font-bold transition-all ${
                  copied
                    ? `${ONCOLOGY_COLOR.bg} ${ONCOLOGY_COLOR.border} ${ONCOLOGY_COLOR.text}`
                    : "border-zinc-700 text-zinc-500 hover:text-zinc-200"
                }`}>
                {copied ? ui.copiedButton : ui.copyButton}
              </button>
            </div>
            <pre className="p-4 text-zinc-300 overflow-x-auto whitespace-pre-wrap break-words"
              style={{ fontFamily: "inherit", fontSize: "0.72rem", lineHeight: "1.8" }}>
              {assembledTemplate}
            </pre>
          </div>
          <p className="text-xs text-zinc-600 px-1">
            {ui.usageNote} <span className="text-red-500/60">{ui.criticalNote}</span>
          </p>
        </div>
      )}
    </div>
  );
}
