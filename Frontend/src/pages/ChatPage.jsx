import ChatWindow from "../components/chat/ChatWindow.jsx";
import { langService } from "../Dependencies.js";
import "../styles/chat.css";

export default function ChatPage() {
  const lang = langService.map;

  return (
    <main className="main">
      <section className="hero">
        <div className="hero__left">
          <div className="avatarCard">
            <div className="avatarCard__avatar">💬</div>
            <div>
              <h2 className="avatarCard__title">{lang?.questionPrompt}</h2>
              <p className="avatarCard__text">
                {lang?.questionText}
              </p>
            </div>
          </div>

          <div className="tips">
            <h3 className="tips__title">{lang?.examplesTitle}</h3>
            <ul className="tips__list">
              <li>{lang?.exampleQuestionA}</li>
              <li>{lang?.exampleQuestionB}</li>
              <li>{lang?.exampleQuestionC}</li>
            </ul>
          </div>
        </div>

        <div className="hero__right">
          <ChatWindow />
        </div>
      </section>
    </main>
  );
}
