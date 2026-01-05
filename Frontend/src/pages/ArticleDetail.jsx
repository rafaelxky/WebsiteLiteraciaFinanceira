import "../styles/Articles.css";
import { Link, useParams } from "react-router-dom";
import { articles } from "../data/articlesData";

export default function ArticleDetail() {
  const { id } = useParams();

  // ✅ evita crash se id não existir
  const article = articles.find((a) => a.id === id);

  if (!article) {
    return (
      <main className="articlesPage">
        <div className="articlesContainer">
          <h1>Artigo não encontrado</h1>
          <p>O id no URL foi: {id}</p>
          <Link className="btn btn--ghost" to="/artigos">
            ← Voltar aos artigos
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="articlesPage">
      <div className="articlesContainer">
        <Link className="btn btn--ghost" to="/artigos">
          ← Voltar
        </Link>

        <div className="articleDetail">
          <p className="aCard__date">
            {article.date} • {article.category}
          </p>

          <h1 className="articleDetail__title">{article.title}</h1>

          <img className="articleDetail__img" src={article.image} alt={article.title} />

          <div className="articleDetail__content">
            {article.content?.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
