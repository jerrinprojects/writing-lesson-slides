import { useCallback, useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import SlideView from "./components/SlideView";
import HomePage from "./components/HomePage";
import { lessons } from "./slides";
import "./App.css";

export default function App() {
  const [activeLessonId, setActiveLessonId] = useState<string | null>(null);
  const [current, setCurrent] = useState(0);

  const activeLesson = lessons.find((l) => l.id === activeLessonId) ?? null;

  const openLesson = (id: string) => {
    setCurrent(0);
    setActiveLessonId(id);
  };

  const goHome = () => {
    setActiveLessonId(null);
    setCurrent(0);
  };

  const total = activeLesson?.slides.length ?? 0;

  const goNext = useCallback(() => {
    setCurrent((prev) => Math.min(prev + 1, total - 1));
  }, [total]);

  const goPrev = useCallback(() => {
    setCurrent((prev) => Math.max(prev - 1, 0));
  }, []);

  useEffect(() => {
    if (!activeLesson) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        goNext();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      } else if (e.key === "Escape") {
        goHome();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeLesson, goNext, goPrev]);

  if (!activeLesson) {
    return <HomePage lessons={lessons} onSelect={openLesson} />;
  }

  return (
    <div className="app">
      <Sidebar
        lessonTitle={activeLesson.title}
        slides={activeLesson.slides}
        currentIndex={current}
        onSelect={setCurrent}
        onBack={goHome}
      />
      <SlideView
        slide={activeLesson.slides[current]}
        current={current}
        total={total}
        lessonTitle={activeLesson.title}
        onPrev={goPrev}
        onNext={goNext}
        onBack={goHome}
      />
    </div>
  );
}
