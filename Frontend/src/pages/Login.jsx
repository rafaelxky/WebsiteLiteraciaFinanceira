import { useState } from "react";
import "../styles/Login.css";
import { securityService } from "../Dependencies";
import { UserLoginDto } from "../models/users/UserLoginDto";
import { Link, Navigate, useNavigate } from "react-router-dom";



export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Navigate = useNavigate();

  function Submit(e) {
    e.preventDefault();
    let loginDto = new UserLoginDto(email, password);
    securityService.Login(loginDto);
    Navigate("/")
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

          <button type="submit" className="login-submit">
            Entrar
          </button>

        </form>

        <div className="login-footer">
          <span>Ou</span>
          <Link to={"/createUser"}>
            <button type="button" className="login-link" >
              Criar utilizador
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}


