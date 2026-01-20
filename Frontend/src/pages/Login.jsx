import "../styles/Login.css";



export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function Submit(e) {
    e.preventDefault();
  }

  return (
    <main className="login-page">
      <section className="login-card">
        <h1>Login</h1>

        <form className="login-form" onSubmit={Submit}>
          <label className="login-field">
            Email
            <input type="email" placeholder="nome@exemplo.com" />
          </label>

          <label className="login-field">
            Palavra-passe
            <input type="password" placeholder="••••••••" />
          </label>

          <button onSubmit={Submit} type="submit" className="login-submit">
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


