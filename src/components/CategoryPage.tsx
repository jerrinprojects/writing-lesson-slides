import type { Category, Lesson } from "../slides";

interface CategoryPageProps {
  category: Category;
  lessons: Lesson[];
  onSelect: (lessonId: string) => void;
  onBack: () => void;
}

export default function CategoryPage({ category, lessons, onSelect, onBack }: CategoryPageProps) {
  return (
    <div className="home">
      <div className="cat-page-header">
        <button className="cat-back-btn" onClick={onBack}>
          ← Back
        </button>
        <div className="home-header" style={{ marginBottom: 0 }}>
          <h1 className="home-title">{category.title}</h1>
          <p className="home-subtitle">{category.description}</p>
        </div>
      </div>

      <div className="lesson-grid">
        {lessons.map((lesson) => (
          <button
            key={lesson.id}
            className="lesson-card"
            style={{ borderTop: `5px solid ${lesson.color}` }}
            onClick={() => onSelect(lesson.id)}
          >
            <div className="lesson-card-dot" style={{ backgroundColor: lesson.color }} />
            <h2 className="lesson-card-title">{lesson.title}</h2>
            <p className="lesson-card-desc">{lesson.description}</p>
            <div className="lesson-card-meta">
              <span>{lesson.slides.length} slides</span>
              <span className="lesson-card-arrow" style={{ color: lesson.color }}>Start →</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
