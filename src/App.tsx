import { useCallback, useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import SlideView from "./components/SlideView";
import HomePage from "./components/HomePage";
import CategoryPage from "./components/CategoryPage";
import InstructionSheet from "./components/InstructionSheet";
import { categories, lessons, writingSheets } from "./slides";
import type { Category } from "./slides";
import "./App.css";

type View = "home" | "category" | "lesson" | "sheet";

export default function App() {
  const [view, setView] = useState<View>("home");
  const [activeCategoryId, setActiveCategoryId] = useState<Category["id"] | null>(null);
  const [activeLessonId, setActiveLessonId] = useState<string | null>(null);
  const [activeSheetId, setActiveSheetId] = useState<string | null>(null);
  const [current, setCurrent] = useState(0);

  const activeCategory = categories.find((c) => c.id === activeCategoryId) ?? null;
  const activeLesson = lessons.find((l) => l.id === activeLessonId) ?? null;
  const activeSheet = writingSheets.find((s) => s.id === activeSheetId) ?? null;

  const categoryLessons = lessons.filter((l) => l.category === activeCategoryId);
  const categorySheets = writingSheets.filter((s) => s.category === activeCategoryId);

  const openCategory = (id: Category["id"]) => {
    setActiveCategoryId(id);
    setView("category");
    window.location.hash = id;
  };

  const openLesson = (id: string) => {
    setCurrent(0);
    setActiveLessonId(id);
    setView("lesson");
  };

  const openSheet = (id: string) => {
    setActiveSheetId(id);
    setView("sheet");
  };

  const goCategory = () => {
    setActiveLessonId(null);
    setActiveSheetId(null);
    setCurrent(0);
    setView("category");
    if (activeCategoryId) window.location.hash = activeCategoryId;
  };

  const goHome = () => {
    setActiveLessonId(null);
    setActiveSheetId(null);
    setActiveCategoryId(null);
    setCurrent(0);
    setView("home");
    history.pushState("", document.title, window.location.pathname);
  };

  // On first load, check if the URL has a category hash and navigate there
  useEffect(() => {
    const hash = window.location.hash.replace("#", "") as Category["id"];
    const matched = categories.find((c) => c.id === hash);
    if (matched) {
      setActiveCategoryId(matched.id);
      setView("category");
    }
  }, []);

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
        sheets={categorySheets}
        onSelectLesson={openLesson}
        onSelectSheet={openSheet}
        onBack={goHome}
      />
    );
  }

  if (view === "sheet" && activeSheet) {
    return <InstructionSheet sheet={activeSheet} onBack={goCategory} />;
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
