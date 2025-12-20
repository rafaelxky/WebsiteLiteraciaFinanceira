export default function ArticlesSidebar({ popular, categories, onPickCategory }) {
  return (
    <aside className="aSide">
      <div className="aSide__box">
        <h3 className="aSide__title">Populares</h3>
        <ul className="aSide__list">
          {popular.map((item) => (
            <li key={item} className="aSide__item">
              • {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="aSide__box">
        <h3 className="aSide__title">Categorias</h3>
        <div className="aSide__tags">
          {categories.map((c) => (
            <button
              key={c}
              className="tag"
              type="button"
              onClick={() => onPickCategory(c)}
            >
              {c}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}
