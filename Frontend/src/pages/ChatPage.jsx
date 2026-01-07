import ChatWindow from "../components/chat/ChatWindow.jsx";
import "../styles/chat.css";

export default function ChatPage() {
  return (
    <main className="main">
      <section className="hero">
        <div className="hero__left">
          <div className="avatarCard">
            <div className="avatarCard__avatar">💬</div>
            <div>
              <h2 className="avatarCard__title">Faz a tua pergunta</h2>
              <p className="avatarCard__text">
                Escreve a tua dúvida e eu respondo com passos práticos.
              </p>
            </div>
          </div>

          <div className="tips">
            <h3 className="tips__title">Exemplos rápidos</h3>
            <ul className="tips__list">
              <li>“Como faço um fundo de emergência?”</li>
              <li>“Como pagar dívidas mais rápido?”</li>
              <li>“ETFs vs ações: por onde começo?”</li>
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
