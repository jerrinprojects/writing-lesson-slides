import type { Lesson } from "../slides";

interface HomePageProps {
  lessons: Lesson[];
  onSelect: (lessonId: string) => void;
}

export default function HomePage({ lessons, onSelect }: HomePageProps) {
  return (
    <div className="home">
      <div className="home-header">
        <h1 className="home-title">✏️ Writing Lessons</h1>
        <p className="home-subtitle">Choose a lesson to get started</p>
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
              <span className="lesson-card-arrow">Start →</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
