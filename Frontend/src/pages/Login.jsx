import "../styles/Login.css";

export default function Login() {
  return (
    <main className="login-page">
      <section className="login-card">
        <h1>Login</h1>

        <form className="login-form">
          <label className="login-field">
            Email
            <input type="email" placeholder="nome@exemplo.com" />
          </label>

          <label className="login-field">
            Palavra-passe
            <input type="password" placeholder="••••••••" />
          </label>

          <button type="submit" className="login-submit">
            Entrar
          </button>
        </form>

        <div className="login-footer">
          <span>Ou</span>
          <button type="button" className="login-link">
            Criar utilizador
          </button>
        </div>
      </section>
    </main>
  );
}
