import "../styles/Articles.css";
import { useEffect, useMemo, useState } from "react";
import ArticlesHero from "../components/article/ArticlesHero";
import ArticleCard from "../components/article/ArticleCard";
import ArticlesSidebar from "../components/article/ArticlesSidebar";
import { articleService, langService } from "../Dependencies";

export default function Articles() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [query, setQuery] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");

  const lang = langService.map;
  const articleS = articleService;

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        // todo: fetch as scrolls
        const res = articleS.GetUniqueArticle(0,10)
        if (!res.ok) throw new Error(lang?.errorFetchingArticles);

        const text = await res.text();
        console.log("Raw response:", text);

        const content = page?.content || [];
        const page = await res.json();
        const mapped = content.map((a) => ({
          id: String(a?.id),
          title: a?.title,
          excerpt: (a?.content || "").slice(0, 140),
          category: a?.category || "",
          date: a?.date || "",
          image: a?.imageUrl || "",
          content: (a?.content || "").split("\n").filter(Boolean),
        }));
        if (mounted) setArticles(mapped);
      } catch (err) {
        if (mounted) setError(err?.message || lang?.errorFetchingArticles);
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

        {loading ? <p>{lang?.loadingArticles}</p> : null}
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
              {lang?.clearCategory} {pickedCategory}
            </button>
          ) : null}
        </div>

        <section className="aLayout">
          <div className="aMain">
            <h2 className="aSectionTitle">{lang.recentArticles}</h2>

            <div className="aList">
              {filtered.map((a) => (
                <ArticleCard key={a.id} {...a} />
              ))}
            </div>

            <a className="seeAll" href="#">
              {lang?.seeAllArticles}
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
