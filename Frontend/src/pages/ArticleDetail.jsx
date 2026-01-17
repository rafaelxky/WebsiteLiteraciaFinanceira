import "../styles/Articles.css";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ArticleDetail() {
  const { id } = useParams();

  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const res = await fetch(`http://localhost:8080/api/articles/${id}`);
        if (!res.ok) throw new Error("Erro ao buscar artigo");
        const data = await res.json();
        const mapped = {
          id: String(data.id),
          title: data.title,
          date: "2026-01-17",
          category: "Orçamento",
          image:
            data.imageUrl ||
            "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
          content: (data.content || "").split("\n").filter(Boolean),
        };
        if (mounted) setArticle(mapped);
      } catch (err) {
        if (mounted) setError(err?.message || "Erro ao buscar artigo");
      } finally {
        if (mounted) setLoading(false);
      }
    })();

    return () => {
      mounted = false;
    };
  }, [id]);

  if (loading) {
    return (
      <main className="articlesPage">
        <div className="articlesContainer">
          <p>A carregar artigo...</p>
        </div>
      </main>
    );
  }

  if (!article || error) {
    return (
      <main className="articlesPage">
        <div className="articlesContainer">
          <h1>Artigo não encontrado</h1>
          {error ? <p>{error}</p> : <p>O id no URL foi: {id}</p>}
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
