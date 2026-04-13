import type { Slide } from "../slides";

interface SlideViewProps {
  slide: Slide;
  current: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
}

function renderBody(text: string) {
  return text.split("\n").map((line, lineIdx) => {
    const parts = line.split(/\*\*(.*?)\*\*/g);
    return (
      <span key={lineIdx}>
        {parts.map((part, i) =>
          i % 2 === 1 ? <strong key={i}>{part}</strong> : <span key={i}>{part}</span>
        )}
        {lineIdx < text.split("\n").length - 1 && <br />}
      </span>
    );
  });
}

const typeConfig: Record<string, { color: string; label: string }> = {
  walt:     { color: "#4f86f7", label: "WALT" },
  success:  { color: "#10b981", label: "SUCCESS CRITERIA" },
  learn:    { color: "#f7a44f", label: "LEARNING" },
  practice: { color: "#c94fbe", label: "PRACTICE" },
  apply:    { color: "#ef4444", label: "APPLY IT" },
  recap:    { color: "#64748b", label: "RECAP" },
  evaluate: { color: "#f59e0b", label: "EVALUATION" },
  think:    { color: "#06b6d4", label: "THINK" },
};

export default function SlideView({ slide, current, total, onPrev, onNext }: SlideViewProps) {
  const config = typeConfig[slide.content.type] ?? { color: "#4f86f7", label: slide.content.type.toUpperCase() };

  return (
    <div className="slide-view">
      <div className="slide-card" style={{ borderTop: `6px solid ${config.color}` }}>
        <div className="slide-type-badge" style={{ backgroundColor: config.color }}>
          {config.label}
        </div>

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
            <span className="tip-icon">💡</span>
            <span>{slide.content.tip}</span>
          </div>
        )}
      </div>

      <div className="nav-bar">
        <button className="nav-btn" onClick={onPrev} disabled={current === 0}>
          ◀ Prev
        </button>
        <span className="slide-counter">
          {current + 1} / {total}
        </span>
        <button className="nav-btn" onClick={onNext} disabled={current === total - 1}>
          Next ▶
        </button>
      </div>
    </div>
  );
}
