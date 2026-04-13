import type { Slide } from "../slides";

interface SlideViewProps {
  slide: Slide;
  current: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
}

function renderBody(text: string) {
  // Bold **text** support
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? <strong key={i}>{part}</strong> : <span key={i}>{part}</span>
  );
}

const typeColors: Record<string, string> = {
  intro: "#4f86f7",
  rule: "#f7a44f",
  example: "#4fc97a",
  practice: "#c94fbe",
  summary: "#f75f5f",
};

export default function SlideView({ slide, current, total, onPrev, onNext }: SlideViewProps) {
  const color = typeColors[slide.content.type] ?? "#4f86f7";

  return (
    <div className="slide-view">
      <div className="slide-card" style={{ borderTop: `6px solid ${color}` }}>
        <div className="slide-type-badge" style={{ backgroundColor: color }}>
          {slide.content.type.toUpperCase()}
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
