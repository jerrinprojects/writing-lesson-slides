import { useCallback, useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import SlideView from "./components/SlideView";
import HomePage from "./components/HomePage";
import CategoryPage from "./components/CategoryPage";
import { categories, lessons } from "./slides";
import type { Category } from "./slides";
import "./App.css";

type View = "home" | "category" | "lesson";

export default function App() {
  const [view, setView] = useState<View>("home");
  const [activeCategoryId, setActiveCategoryId] = useState<Category["id"] | null>(null);
  const [activeLessonId, setActiveLessonId] = useState<string | null>(null);
  const [current, setCurrent] = useState(0);

  const activeCategory = categories.find((c) => c.id === activeCategoryId) ?? null;
  const activeLesson = lessons.find((l) => l.id === activeLessonId) ?? null;
  const categoryLessons = lessons.filter((l) => l.category === activeCategoryId);

  const openCategory = (id: Category["id"]) => {
    setActiveCategoryId(id);
    setView("category");
  };

  const openLesson = (id: string) => {
    setCurrent(0);
    setActiveLessonId(id);
    setView("lesson");
  };

  const goCategory = () => {
    setActiveLessonId(null);
    setCurrent(0);
    setView("category");
  };

  const goHome = () => {
    setActiveLessonId(null);
    setActiveCategoryId(null);
    setCurrent(0);
    setView("home");
  };

  const total = activeLesson?.slides.length ?? 0;

  const goNext = useCallback(() => {
    setCurrent((prev) => Math.min(prev + 1, total - 1));
  }, [total]);

  const goPrev = useCallback(() => {
    setCurrent((prev) => Math.max(prev - 1, 0));
  }, []);

  useEffect(() => {
    if (view !== "lesson") return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        goNext();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      } else if (e.key === "Escape") {
        goCategory();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [view, goNext, goPrev]);

  if (view === "home") {
    return <HomePage categories={categories} onSelect={openCategory} />;
  }

  if (view === "category" && activeCategory) {
    return (
      <CategoryPage
        category={activeCategory}
        lessons={categoryLessons}
        onSelect={openLesson}
        onBack={goHome}
      />
    );
  }

  if (view === "lesson" && activeLesson) {
    return (
      <div className="app">
        <Sidebar
          lessonTitle={activeLesson.title}
          slides={activeLesson.slides}
          currentIndex={current}
          onSelect={setCurrent}
          onBack={goCategory}
        />
        <SlideView
          slide={activeLesson.slides[current]}
          current={current}
          total={total}
          lessonTitle={activeLesson.title}
          onPrev={goPrev}
          onNext={goNext}
          onBack={goCategory}
        />
      </div>
    );
  }

  return null;
}
