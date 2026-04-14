import type { WritingSheet } from "../slides";

interface InstructionSheetProps {
  sheet: WritingSheet;
  onBack: () => void;
}

export default function InstructionSheet({ sheet, onBack }: InstructionSheetProps) {
  return (
    <div className="sheet-wrapper">

      {/* ── Screen-only toolbar ── */}
      <div className="sheet-toolbar no-print">
        <button className="sheet-back-btn" onClick={onBack}>
          ← Back
        </button>
        <button className="sheet-print-btn" onClick={() => window.print()}>
          Print / Save as PDF
        </button>
      </div>

      {/* ══════════════ PAGE 1 ══════════════ */}
      <div className="sheet-page">

        <div className="sheet-header" style={{ borderColor: sheet.color }}>
          <div className="sheet-header-left">
            <span className="sheet-label" style={{ backgroundColor: sheet.color }}>
              Writing of the Week
            </span>
            <h1 className="sheet-main-title">{sheet.title}</h1>
          </div>
          <div className="sheet-header-right no-print">
            <span className="sheet-page-num">Page 1 of 2</span>
          </div>
        </div>

        <div className="sheet-walt" style={{ borderLeftColor: sheet.color }}>
          <span className="sheet-walt-label" style={{ color: sheet.color }}>WALT</span>
          <p className="sheet-walt-text">{sheet.walt}</p>
        </div>

        <div className="sheet-section">
          <h2 className="sheet-section-title" style={{ color: sheet.color }}>
            What to do
          </h2>
          <ol className="sheet-instructions">
            {sheet.instructions.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
        </div>

        <div className="sheet-two-col">
          <div className="sheet-box" style={{ borderColor: sheet.color }}>
            <h3 className="sheet-box-title" style={{ backgroundColor: sheet.color }}>
              Sentence Starters
            </h3>
            <ul className="sheet-starters">
              {sheet.sentenceStarters.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </div>

          <div className="sheet-box" style={{ borderColor: sheet.color }}>
            <h3 className="sheet-box-title" style={{ backgroundColor: sheet.color }}>
              Word Bank
            </h3>
            <div className="sheet-wordbank">
              {sheet.wordBank.map((w, i) => (
                <span key={i} className="sheet-word" style={{ borderColor: sheet.color }}>
                  {w}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* ══════════════ PAGE 2 ══════════════ */}
      <div className="sheet-page sheet-page-break">

        <div className="sheet-header" style={{ borderColor: sheet.color }}>
          <div className="sheet-header-left">
            <span className="sheet-label" style={{ backgroundColor: sheet.color }}>
              Writing of the Week
            </span>
            <h1 className="sheet-main-title">{sheet.title} — Examples</h1>
          </div>
          <div className="sheet-header-right no-print">
            <span className="sheet-page-num">Page 2 of 2</span>
          </div>
        </div>

        {sheet.examples.map((ex, i) => (
          <div key={i} className="sheet-section">
            <h2 className="sheet-section-title" style={{ color: sheet.color }}>
              {ex.label}
            </h2>
            <div className="sheet-example-box" style={{ borderColor: sheet.color }}>
              {ex.text.split("\n").map((line, j) => (
                <p key={j} className="sheet-example-line">{line}</p>
              ))}
            </div>
            {ex.note && (
              <p className="sheet-example-note">{ex.note}</p>
            )}
          </div>
        ))}

      </div>
    </div>
  );
}
