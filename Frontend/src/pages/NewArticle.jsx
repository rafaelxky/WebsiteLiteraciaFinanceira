import "../styles/NewArticle.css";
import ArticleForm from "../components/form/ArticleForm";
import { securityService } from "../Dependencies";

export default function NewArticle() {

  let isWriter = securityService.IsUserWriter();
  let isLoggedIn = securityService.IsLoggedIn();

  return (
    <main className="news-page">
      {isWriter ? (
        <section className="news-card">
          <header className="news-header">
            <h1>Adicionar noticia</h1>
            <p>Preencha os campos para publicar uma nova noticia.</p>
          </header>
          <ArticleForm />
        </section>
      ) : isLoggedIn ? (
        <section className="news-card">
          <header className="news-header">
            <h1>Para publicar uma noticia tem que ter permição de autor.</h1>
          </header>
        </section>
      ) : (
        <section className="news-card">
            <h1>Faça login com uma conta com permição de autor.</h1>
        </section>
      )
      }
    </main>
  );
}
