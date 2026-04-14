import { useState } from "react";
import type { Slide } from "../slides";

interface SidebarProps {
  lessonTitle: string;
  slides: Slide[];
  currentIndex: number;
  onSelect: (index: number) => void;
  onBack: () => void;
}

export default function Sidebar({ lessonTitle, slides, currentIndex, onSelect, onBack }: SidebarProps) {
  const [open, setOpen] = useState(false);

  const handleSelect = (index: number) => {
    onSelect(index);
    setOpen(false); // close sidebar after selecting on mobile
  };

  return (
    <>
      {/* Dark overlay when open on mobile */}
      {open && (
        <div
          className="sidebar-overlay"
          onClick={() => setOpen(false)}
        />
      )}

      <div className={`sidebar ${open ? "open" : "closed"}`}>
        <button
          className="toggle-btn"
          onClick={() => setOpen(!open)}
          title={open ? "Close menu" : "Open menu"}
        >
          {open ? "◀" : "▶"}
        </button>

        {open && (
          <div className="slide-list">
            <button className="back-btn" onClick={onBack}>
              ← All Lessons
            </button>
            <h3 className="sidebar-title">{lessonTitle}</h3>
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                className={`slide-item ${index === currentIndex ? "active" : ""}`}
                onClick={() => handleSelect(index)}
              >
                <span className="slide-num">{index + 1}</span>
                <span className="slide-summary">{slide.summary}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
