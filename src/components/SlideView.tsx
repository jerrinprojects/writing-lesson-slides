import { useEffect, useState } from "react";
import type { Slide } from "../slides";

interface SlideViewProps {
  slide: Slide;
  current: number;
  total: number;
  lessonTitle: string;
  onPrev: () => void;
  onNext: () => void;
  onBack: () => void;
}

type LangKey = "zh" | "vi";

const LANG_LABELS: Record<LangKey, string> = {
  zh: "中文",
  vi: "Tiếng Việt",
};

function renderBody(text: string) {
  return text.split("\n").map((line, lineIdx, arr) => {
    const parts = line.split(/\*\*(.*?)\*\*/g);
    return (
      <span key={lineIdx}>
        {parts.map((part, i) =>
          i % 2 === 1 ? <strong key={i}>{part}</strong> : <span key={i}>{part}</span>
        )}
        {lineIdx < arr.length - 1 && <br />}
      </span>
    );
  });
}

const typeConfig: Record<string, { color: string; label: string }> = {
  walt:       { color: "#4f86f7", label: "WALT" },
  success:    { color: "#10b981", label: "SUCCESS CRITERIA" },
  learn:      { color: "#f7a44f", label: "LEARNING" },
  practice:   { color: "#c94fbe", label: "PRACTICE" },
  apply:      { color: "#ef4444", label: "APPLY IT" },
  recap:      { color: "#64748b", label: "RECAP" },
  evaluate:   { color: "#f59e0b", label: "EVALUATION" },
  think:      { color: "#06b6d4", label: "THINK" },
  discussion: { color: "#8b5cf6", label: "" },
};

export default function SlideView({ slide, current, total, lessonTitle, onPrev, onNext, onBack }: SlideViewProps) {
  const config = typeConfig[slide.content.type] ?? { color: "#4f86f7", label: "" };
  const isDiscussion = slide.content.type === "discussion";
  const [activeLangs, setActiveLangs] = useState<Set<LangKey>>(new Set());

  // Reset languages when slide changes
  useEffect(() => {
    setActiveLangs(new Set());
  }, [current]);

  const translations = slide.content.translations;
  const hasTranslations = translations && (translations.zh || translations.vi);

  const toggleLang = (lang: LangKey) => {
    setActiveLangs((prev) => {
      const next = new Set(prev);
      next.has(lang) ? next.delete(lang) : next.add(lang);
      return next;
    });
  };

  return (
    <div className={`slide-view ${isDiscussion ? "slide-view--discussion" : ""}`}>
      {/* Mobile only: top bar with back button */}
      <div className="mobile-topbar">
        <button className="back-btn" onClick={onBack}>
          ← All Lessons
        </button>
        <span style={{ fontSize: "0.9rem", color: "#64748b", fontWeight: 600 }}>{lessonTitle}</span>
      </div>

      {isDiscussion ? (
        // ── Discussion slide: centred, big question ──
        <div className="discussion-card" style={{ borderTop: `6px solid ${config.color}` }}>
          <span className="discussion-section" style={{ color: config.color }}>
            {slide.title}
          </span>

          <p className="discussion-question">{renderBody(slide.content.body)}</p>

          {/* Translations — each active language stacks below */}
          {(["zh", "vi"] as LangKey[]).map((lang) => {
            const t = translations?.[lang];
            if (!t || !activeLangs.has(lang)) return null;
            return (
              <p key={lang} className="discussion-translation">
                {renderBody(t.body)}
              </p>
            );
          })}

          {/* Tip row: English + any active translated tips */}
          {(slide.content.tip || (["zh", "vi"] as LangKey[]).some((l) => activeLangs.has(l) && translations?.[l]?.tip)) && (
            <div className="discussion-tip-row">
              {slide.content.tip && (
                <p className="discussion-tip">{slide.content.tip}</p>
              )}
              {(["zh", "vi"] as LangKey[]).map((lang) => {
                const tip = translations?.[lang]?.tip;
                if (!tip || !activeLangs.has(lang)) return null;
                return <p key={lang} className="discussion-tip discussion-tip--translated">{tip}</p>;
              })}
            </div>
          )}

          {/* Language buttons */}
          {hasTranslations && (
            <div className="lang-btns">
              {(Object.keys(LANG_LABELS) as LangKey[]).map((lang) =>
                translations?.[lang] ? (
                  <button
                    key={lang}
                    className={`lang-btn ${activeLangs.has(lang) ? "active" : ""}`}
                    style={activeLangs.has(lang) ? { backgroundColor: config.color, borderColor: config.color } : { borderColor: config.color, color: config.color }}
                    onClick={() => toggleLang(lang)}
                  >
                    {LANG_LABELS[lang]}
                  </button>
                ) : null
              )}
            </div>
          )}
        </div>
      ) : (
        // ── Regular slide ──
        <div className="slide-card" style={{ borderTop: `6px solid ${config.color}` }}>
          {config.label && (
            <div className="slide-type-badge" style={{ backgroundColor: config.color }}>
              {config.label}
            </div>
          )}

          <h1 className="slide-title">{slide.title}</h1>

          <p className="slide-body">{renderBody(slide.content.body)}</p>

          {slide.content.examples && slide.content.examples.length > 0 && (
            <ul className="slide-examples">
              {slide.content.examples.map((ex, i) => (
                <li key={i}>{ex}</li>
              ))}
            </ul>
          )}

          {slide.content.tip && (
            <div className="slide-tip">
              <span className="tip-label">Tip:</span>
              <span>{slide.content.tip}</span>
            </div>
          )}
        </div>
      )}

      <div className="nav-bar">
        <button className="nav-btn" onClick={onPrev} disabled={current === 0}>
          Prev
        </button>
        <span className="slide-counter">
          {current + 1} / {total}
        </span>
        <button className="nav-btn" onClick={onNext} disabled={current === total - 1}>
          Next
        </button>
      </div>
    </div>
  );
}
