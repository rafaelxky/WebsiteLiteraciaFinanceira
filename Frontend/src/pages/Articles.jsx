import "../styles/Articles.css";
import { useMemo, useState } from "react";
import { articles } from "../data/articlesData";


import ArticlesHero from "../components/article/ArticlesHero";
import ArticleCard from "../components/article/ArticleCard";
import ArticlesSidebar from "../components/article/ArticlesSidebar";

export default function Articles() {
 

  const popular = [
    "Dicas Simples para Criar um Orçamento Pessoal",
    "Estratégias para Pagar Cartões de Crédito",
  ];

  const categories = ["Orçamento", "Poupança", "Dívidas", "Investimentos", "Ganhar Dinheiro"];

  const [query, setQuery] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");

  const filtered = useMemo(() => {
    return articles.filter((a) => {
      const q = query.toLowerCase();

      const matchesQuery =
        a.title.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q);

      const matchesCategory = pickedCategory ? a.category === pickedCategory : true;

      return matchesQuery && matchesCategory;
    });
  }, [query, pickedCategory, articles]);

  return (
    <main className="articlesPage">
      <div className="articlesContainer">
        <ArticlesHero />

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
