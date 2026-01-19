import "../styles/Articles.css";
import { useEffect, useMemo, useState } from "react";
import ArticlesHero from "../components/article/ArticlesHero";
import ArticleCard from "../components/article/ArticleCard";
import ArticlesSidebar from "../components/article/ArticlesSidebar";

export default function Articles() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [query, setQuery] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const res = await fetch("http://localhost:8080/api/articles?page=0&size=10");
        if (!res.ok) throw new Error("Erro ao buscar artigos");
        const page = await res.json();
        const content = page?.content || [];
        const mapped = content.map((a) => ({
          id: String(a.id),
          title: a.title,
          excerpt: (a.content || "").slice(0, 140),
          category: a.category || "",
          date: a.date || "",
          image: a.imageUrl || "",
          content: (a.content || "").split("\n").filter(Boolean),
        }));
        if (mounted) setArticles(mapped);
      } catch (err) {
        if (mounted) setError(err?.message || "Erro ao buscar artigos");
      } finally {
        if (mounted) setLoading(false);
      }
    })();

    return () => {
      mounted = false;
    };
  }, []);

  const filtered = useMemo(() => {
    return articles.filter((a) => {
      const q = query.toLowerCase();

      const matchesQuery =
        a.title.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q);

      const matchesCategory = pickedCategory ? a.category === pickedCategory : true;

      return matchesQuery && matchesCategory;
    });
  }, [query, pickedCategory, articles]);

  const popular = useMemo(() => {
    return articles
      .filter((a) => a?.title)
      .slice(0, 2)
      .map((a) => a.title);
  }, [articles]);

  const categories = useMemo(() => {
    return [...new Set(articles.map((a) => a.category).filter(Boolean))];
  }, [articles]);

  return (
    <main className="articlesPage">
      <div className="articlesContainer">
        <ArticlesHero />

        {loading ? <p>A carregar artigos...</p> : null}
        {error ? <p>{error}</p> : null}

        <div className="searchRow">
          <input
            className="searchInput"
            placeholder="Procurar artigos..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          {pickedCategory ? (
            <button className="clearBtn" type="button" onClick={() => setPickedCategory("")}>
              Limpar categoria: {pickedCategory}
            </button>
          ) : null}
        </div>

        <section className="aLayout">
          <div className="aMain">
            <h2 className="aSectionTitle">Artigos Recentes</h2>

            <div className="aList">
              {filtered.map((a) => (
                <ArticleCard key={a.id} {...a} />
              ))}
            </div>

            <a className="seeAll" href="#">
              Ver todos os artigos →
            </a>
          </div>

          <ArticlesSidebar
            popular={popular}
            categories={categories}
            onPickCategory={(c) => setPickedCategory(c)}
          />
        </section>
      </div>
    </main>
  );
}
