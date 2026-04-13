import { useCallback, useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import SlideView from "./components/SlideView";
import { slides } from "./slides";
import "./App.css";

export default function App() {
  const [current, setCurrent] = useState(0);

  const goNext = useCallback(() => {
    setCurrent((prev) => Math.min(prev + 1, slides.length - 1));
  }, []);

  const goPrev = useCallback(() => {
    setCurrent((prev) => Math.max(prev - 1, 0));
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        goNext();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [goNext, goPrev]);

  return (
    <div className="app">
      <Sidebar slides={slides} currentIndex={current} onSelect={setCurrent} />
      <SlideView
        slide={slides[current]}
        current={current}
        total={slides.length}
        onPrev={goPrev}
        onNext={goNext}
      />
    </div>
  );
}
