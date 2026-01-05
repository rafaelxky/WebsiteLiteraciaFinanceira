import { Link } from "react-router-dom";

export default function ArticleCard({ id, date, title, excerpt, image }) {
  return (
    <article className="aCard">
      <div className="aCard__imgWrap">
        <img className="aCard__img" src={image} alt={title} />
      </div>

      <div className="aCard__body">
        <p className="aCard__date">{date}</p>

        <h3 className="aCard__title">
          <Link className="aCard__titleLink" to={`/artigos/${id}`}>
            {title}
          </Link>
        </h3>

        <p className="aCard__excerpt">{excerpt}</p>

        <Link className="aCard__link" to={`/artigos/${id}`}>
          Ler mais →
        </Link>
      </div>
    </article>
  );
}
