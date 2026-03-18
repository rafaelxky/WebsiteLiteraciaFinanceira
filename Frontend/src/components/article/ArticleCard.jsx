import { Link } from "react-router-dom";
import { langService } from "../../Dependencies";

export default function ArticleCard({ id, date, title, excerpt, image }) {

  const lang = langService.map;

  return (
    <article className="aCard">
      {image ? (
        <div className="aCard__imgWrap">
          <img className="aCard__img" src={image} alt={title} />
        </div>
      ) : null}

      <div className="aCard__body">
        {date ? <p className="aCard__date">{date}</p> : null}

        <h3 className="aCard__title">
          <Link className="aCard__titleLink" to={`/articles/${id}`}>
            {title}
          </Link>
        </h3>

        {excerpt ? <p className="aCard__excerpt">{excerpt}</p> : null}

        <Link className="aCard__link" to={`/articles/${id}`}>
          {lang?.readMore}
        </Link>
      </div>
    </article>
  );
}
