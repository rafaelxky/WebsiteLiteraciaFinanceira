// src/components/Hero.jsx
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1>Aprende a gerir as tuas finanças pessoais</h1>
        <p>
          Descobre ferramentas e guias práticos para melhorar a tua literacia financeira
          e alcançar os teus objetivos.
        </p>

        <div className="hero__actions">
          <Link className="btn btn--primary" to="/projetos">
            Ver Projetos
          </Link>
          <Link className="btn btn--ghost" to="/articles">
            Ler Artigos
          </Link>
        </div>
      </div>

      <div className="hero__visual" aria-hidden="true">
        <div className="hero__placeholder">
          {/* depois podes trocar por imagem/ilustração */}
          📈🐷🧾
        </div>
      </div>
    </section>
  );
}
