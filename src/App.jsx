import { useState } from "react";
import { UI, MODULE_LABELS, CATEGORY_LABELS } from "./i18n/ui.js";
import { MODULES, PRIORITY_STYLES } from "./data/modules.js";
import { ALL_TEMPLATES } from "./data/index.js";
import OncologyView from "./components/OncologyView.jsx";

function getCategoryStyle(moduleKey, categoryKey) {
  const mod = MODULES.find(m => m.key === moduleKey);
  return mod?.categories[categoryKey] || mod?.categories[Object.keys(mod.categories)[0]];
}

function SearchView({ template, lang, ui }) {
  const t = template[lang];
  return (
    <div className="space-y-3">
      <div className="rounded-lg border border-zinc-700/60 bg-zinc-900/60 p-4">
        <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">{ui.mismatchTitle}</div>
        <p className="text-sm text-zinc-300 leading-relaxed">{t.searchMismatch}</p>
        <p className="text-xs text-zinc-600 mt-2 leading-relaxed">
          <span className="text-zinc-500 font-semibold">{ui.searchEvidenceLabel} </span>{t.searchEvidence}
        </p>
      </div>
      <div className="rounded-lg border border-zinc-800 bg-zinc-900/40 overflow-hidden">
        <div className="px-4 py-2.5 border-b border-zinc-800 bg-zinc-900/70">
          <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">{ui.protocolTitle}</span>
        </div>
        <div className="divide-y divide-zinc-800/50">
          {t.searchPattern.map(s => {
            const p = PRIORITY_STYLES[s.priority];
            return (
              <div key={s.step} className={`flex gap-3 p-4 ${p.bg}`}>
                <div className="flex-shrink-0 flex items-start gap-2 pt-1">
                  <div className={`w-2 h-2 rounded-full flex-shrink-0 ${p.dot}`} />
                  <span className="text-xs text-zinc-700 font-bold w-3 leading-none">{s.step}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 mb-1 flex-wrap">
                    <span className={`text-sm font-bold ${p.label}`}>{s.title}</span>
                    <span className="text-xs text-zinc-700 flex-shrink-0">~{s.time}</span>
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
  );
}

function TemplateView({ template, lang, ui, catStyle }) {
  const [copied, setCopied] = useState(false);
  const t = template[lang];
  const copy = () => { navigator.clipboard.writeText(t.template); setCopied(true); setTimeout(() => setCopied(false), 2000); };
  return (
    <div className="space-y-3">
      <div className="rounded-lg border border-zinc-800 bg-zinc-900/40 overflow-hidden">
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-zinc-800 bg-zinc-900/70">
          <span className="text-xs text-zinc-600">{ui.formatNote}</span>
          <button onClick={copy} className={`text-xs px-3 py-1 rounded border font-bold transition-all ${copied ? `${catStyle.bg} ${catStyle.border} ${catStyle.text}` : "border-zinc-700 text-zinc-500 hover:text-zinc-200"}`}>
            {copied ? ui.copiedButton : ui.copyButton}
          </button>
        </div>
        <pre className="p-4 text-zinc-300 overflow-x-auto whitespace-pre-wrap break-words" style={{ fontFamily: "inherit", fontSize: "0.72rem", lineHeight: "1.8" }}>{t.template}</pre>
      </div>
      <p className="text-xs text-zinc-600 px-1 leading-relaxed">{ui.usageNote} <span className="text-red-500/60">{ui.criticalNote}</span></p>
    </div>
  );
}

export default function App() {
  const [lang, setLang] = useState("en");
  const [activeModule, setActiveModule] = useState("abdomen");
  const [activeId, setActiveId] = useState("appendicitis");
  const [view, setView] = useState("search");

  const ui = UI[lang];
  const moduleLabels = MODULE_LABELS[lang];
  const categoryLabels = CATEGORY_LABELS[lang];
  const moduleDef = MODULES.find(m => m.key === activeModule);
  const isOncology = moduleDef?.isOncology;
  const moduleTemplates = ALL_TEMPLATES[activeModule] || [];
  const active = moduleTemplates.find(t => t.id === activeId) || moduleTemplates[0];
  const catStyle = isOncology ? null : getCategoryStyle(activeModule, active?.category);

  const switchModule = (key) => {
    setActiveModule(key);
    const mod = MODULES.find(m => m.key === key);
    if (!mod?.isOncology) setActiveId((ALL_TEMPLATES[key] || [])[0]?.id || "");
    setView("search");
  };

  const grouped = isOncology ? {} : moduleTemplates.reduce((acc, t) => {
    if (!acc[t.category]) acc[t.category] = [];
    acc[t.category].push(t);
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100" style={{ fontFamily: "'JetBrains Mono','Cascadia Code','Fira Code',monospace" }}>
      <div className="border-b border-zinc-800 bg-zinc-900/80 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-between gap-3 flex-wrap">
          <div className="flex-shrink-0">
            <div className="text-sm font-bold tracking-widest text-zinc-100">{ui.appTitle}</div>
            <div className="text-xs text-zinc-600 mt-0.5 tracking-wide">{ui.appSubtitle}</div>
          </div>
          <div className="flex gap-1 bg-zinc-900 border border-zinc-800 rounded-lg p-1 flex-wrap">
            {MODULES.map(m => (
              <button key={m.key} onClick={() => switchModule(m.key)}
                className={`text-xs px-3 py-1.5 rounded-md font-bold tracking-wider border transition-all ${activeModule === m.key ? m.tabStyle.active : m.tabStyle.inactive}`}>
                {moduleLabels[m.key]}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <div className="text-xs text-zinc-700 text-right hidden lg:block leading-relaxed">
              <div>{ui.guidanceRow1}</div>
              <div>{ui.guidanceRow2}</div>
            </div>
            <div className="flex gap-1 bg-zinc-900 border border-zinc-800 rounded p-0.5 flex-shrink-0">
              {["en", "cs"].map(l => (
                <button key={l} onClick={() => setLang(l)}
                  className={`text-xs px-3 py-1.5 rounded font-bold tracking-wider uppercase transition-all ${lang === l ? "bg-zinc-700 text-zinc-100" : "text-zinc-600 hover:text-zinc-300"}`}>
                  {l}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row" style={{ minHeight: "calc(100vh - 57px)" }}>
        {!isOncology && (
          <div className="lg:w-52 flex-shrink-0 border-b lg:border-b-0 lg:border-r border-zinc-800/70">
            <div className="p-3 space-y-1">
              {Object.entries(grouped).map(([catKey, templates]) => {
                const cs = moduleDef.categories[catKey];
                const showLabel = Object.keys(grouped).length > 1;
                return (
                  <div key={catKey} className="mb-2">
                    {showLabel && <div className="text-xs font-bold text-zinc-700 uppercase tracking-widest px-2 pt-2 pb-1">{categoryLabels[catKey]}</div>}
                    {templates.map(t => {
                      const style = moduleDef.categories[t.category] || cs;
                      const isActive = t.id === activeId;
                      return (
                        <button key={t.id} onClick={() => { setActiveId(t.id); setView("search"); }}
                          className={`w-full text-left px-3 py-2 rounded text-xs transition-all mb-0.5 ${isActive ? `${style.bg} border ${style.border} ${style.text} font-bold` : "text-zinc-500 hover:text-zinc-200 hover:bg-zinc-800/50"}`}>
                          {t[lang].label}
                        </button>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        <div className="flex-1 min-w-0 p-4 lg:p-6">
          {isOncology ? (
            <OncologyView lang={lang} ui={ui} />
          ) : active ? (
            <div className="space-y-4">
              <div className={`rounded-lg border p-4 ${catStyle.bg} ${catStyle.border}`}>
                <div className="flex flex-wrap items-start gap-3 justify-between">
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h2 className={`text-lg font-bold ${catStyle.text}`}>{active[lang].label}</h2>
                      <span className={`text-xs px-2 py-0.5 rounded border font-semibold ${catStyle.badge}`}>{categoryLabels[active.category]}</span>
                    </div>
                    <p className="text-xs text-zinc-500 leading-relaxed">
                      <span className="text-zinc-400 font-semibold">{ui.evidenceLabel} </span>{active[lang].evidence}
                    </p>
                  </div>
                  <div className="flex gap-2 flex-shrink-0">
                    {["search", "template"].map(v => (
                      <button key={v} onClick={() => setView(v)}
                        className={`text-xs px-3 py-1.5 rounded border font-bold tracking-wide transition-all ${view === v ? `${catStyle.bg} ${catStyle.border} ${catStyle.text}` : "border-zinc-700 text-zinc-500 hover:text-zinc-200"}`}>
                        {v === "search" ? ui.searchTab : ui.templateTab}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="mt-3 flex flex-wrap gap-1.5 items-center">
                  <span className="text-xs text-zinc-600 mr-1">{ui.dontMiss}</span>
                  {active[lang].criticalFindings.map(f => (
                    <span key={f} className="text-xs px-2 py-0.5 bg-red-500/10 border border-red-500/20 text-red-400 rounded font-medium">⚠ {f}</span>
                  ))}
                </div>
              </div>
              {view === "search"
                ? <SearchView template={active} lang={lang} ui={ui} />
                : <TemplateView template={active} lang={lang} ui={ui} catStyle={catStyle} />
              }
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
