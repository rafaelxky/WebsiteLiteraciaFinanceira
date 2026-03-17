import { langService } from "../../Dependencies";

export default function ArticlesSidebar({ popular, categories, onPickCategory }) {

  const lang = langService.map;

  if (!popular?.length && !categories?.length) return null;

  return (
    <aside className="aSide">
      {popular?.length ? (
        <div className="aSide__box">
          <h3 className="aSide__title">
            {lang?.populars}
          </h3>
          <ul className="aSide__list">
            {popular.map((item) => (
              <li key={item} className="aSide__item">
                • {item}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {categories?.length ? (
        <div className="aSide__box">
          <h3 className="aSide__title">{lang?.categories}</h3>
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
      ) : null}
    </aside>
  );
}
