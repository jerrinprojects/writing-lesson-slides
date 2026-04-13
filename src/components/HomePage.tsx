import type { Category } from "../slides";

interface HomePageProps {
  categories: Category[];
  onSelect: (categoryId: Category["id"]) => void;
}

export default function HomePage({ categories, onSelect }: HomePageProps) {
  return (
    <div className="home">
      <div className="home-header">
        <h1 className="home-title">Writing Lessons</h1>
        <p className="home-subtitle">Choose a section to get started</p>
      </div>

      <div className="category-grid">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className="category-card"
            style={{ borderTop: `6px solid ${cat.color}` }}
            onClick={() => onSelect(cat.id)}
          >
            <div className="category-card-icon" style={{ backgroundColor: cat.color }}>
              {cat.icon}
            </div>
            <h2 className="category-card-title">{cat.title}</h2>
            <p className="category-card-desc">{cat.description}</p>
            <span className="category-card-arrow" style={{ color: cat.color }}>
              Open →
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
