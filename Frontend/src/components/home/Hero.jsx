import { Link } from "react-router-dom";
import { langService } from "../../Dependencies";

export default function Hero() {
  const lang = langService.map;
  return (
    <section className="hero">
      <div className="hero__content">
        <h1>{lang?.heroTitle}</h1>
        <p>
          {lang?.heroBody}
        </p>

        <div className="hero__actions">
          <Link className="btn btn--primary" to="/projetos">
           {lang?.seeBody}
          </Link>
          <Link className="btn btn--ghost" to="/articles">
              {lang?.readArticles}
          </Link>
        </div>
      </div>

      <div className="hero__visual" aria-hidden="true">
        <div className="hero__placeholder">
          📈🐷🧾
        </div>
      </div>
    </section>
  );
}
