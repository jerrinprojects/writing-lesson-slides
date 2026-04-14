import type { Category, Lesson, WritingSheet } from "../slides";

interface CategoryPageProps {
  category: Category;
  lessons: Lesson[];
  sheets: WritingSheet[];
  onSelectLesson: (id: string) => void;
  onSelectSheet: (id: string) => void;
  onBack: () => void;
}

export default function CategoryPage({
  category,
  lessons,
  sheets,
  onSelectLesson,
  onSelectSheet,
  onBack,
}: CategoryPageProps) {
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
            onClick={() => onSelectLesson(lesson.id)}
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

        {sheets.map((sheet) => (
          <button
            key={sheet.id}
            className="lesson-card"
            style={{ borderTop: `5px solid ${sheet.color}` }}
            onClick={() => onSelectSheet(sheet.id)}
          >
            <div className="lesson-card-dot" style={{ backgroundColor: sheet.color }} />
            <h2 className="lesson-card-title">{sheet.title}</h2>
            <p className="lesson-card-desc">{sheet.description}</p>
            <div className="lesson-card-meta">
              <span>Instruction Sheet</span>
              <span className="lesson-card-arrow" style={{ color: sheet.color }}>Open →</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
