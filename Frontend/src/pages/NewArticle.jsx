import "../styles/NewArticle.css";
import ArticleForm from "../components/form/ArticleForm";

export default function NewArticle() {
  return (
    <main className="news-page">
      <section className="news-card">
        <header className="news-header">
          <h1>Adicionar noticia</h1>
          <p>Preencha os campos para publicar uma nova noticia.</p>
        </header>
        <ArticleForm />
      </section>
    </main>
  );
}
