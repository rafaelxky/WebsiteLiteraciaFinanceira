import "../styles/NewArticle.css";
import ArticleForm from "../components/form/ArticleForm";
import { securityService } from "../Dependencies";
import { langService } from "../Dependencies";

export default function NewArticle() {

  let isWriter = securityService.IsUserWriter();
  let isLoggedIn = securityService.IsLoggedIn();

  const lang = langService.map;

  return (
    <main className="news-page">
      {isWriter ? (
        <section className="news-card">
          <header className="news-header">
            <h1>{lang?.addArticleTitle}</h1>
            <p>{lang?.articleFieldPrompt}</p>
          </header>
          <ArticleForm />
        </section>
      ) : isLoggedIn ? (
        <section className="news-card">
          <header className="news-header">
            <h1>{lang?.noPermitionToPublish}</h1>
          </header>
        </section>
      ) : (
        <section className="news-card">
            <h1>{lang?.loginToPublish}</h1>
        </section>
      )
      }
    </main>
  );
}
