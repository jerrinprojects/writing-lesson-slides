import { useState } from "react";
import type { Slide } from "../slides";

interface SidebarProps {
  slides: Slide[];
  currentIndex: number;
  onSelect: (index: number) => void;
}

export default function Sidebar({ slides, currentIndex, onSelect }: SidebarProps) {
  const [open, setOpen] = useState(true);

  return (
    <div className={`sidebar ${open ? "open" : "closed"}`}>
      <button className="toggle-btn" onClick={() => setOpen(!open)} title={open ? "Close sidebar" : "Open sidebar"}>
        {open ? "◀" : "▶"}
      </button>

      {open && (
        <div className="slide-list">
          <h3 className="sidebar-title">Slides</h3>
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              className={`slide-item ${index === currentIndex ? "active" : ""}`}
              onClick={() => onSelect(index)}
            >
              <span className="slide-num">{index + 1}</span>
              <span className="slide-summary">{slide.summary}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
