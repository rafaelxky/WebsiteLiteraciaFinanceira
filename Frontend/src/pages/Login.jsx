import { useState } from "react";
import "../styles/Login.css";
import { securityService } from "../Dependencies";
import { UserLoginDto } from "../models/users/UserLoginDto";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { WrongCredentialsError } from "../errors/WrongCredentialsError";



export default function Login({setLoggedIn}) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function Submit(e) {
    e.preventDefault();
    let loginDto = new UserLoginDto(email, password);
    try {
      await securityService.Login(loginDto);
      setLoggedIn(true);
      navigate("/status", {state: {message: "Loggin feito com sucesso!", nextPage: "/"}});
    } catch (err){
      if(err instanceof WrongCredentialsError){
        navigate("/status", {state: {message: "Erro ao fazer login! Email ou password errados!", nextPage: "/login"}});
      } else {
        navigate("/status", {state: {message: "Erro desconhecido ao fazer login! Tente de novo.", nextPage: "/login"}});
      }
    }
  }

  return (
    <main className="login-page">
      <section className="login-card">
        <h1>Login</h1>

        <form className="login-form" onSubmit={Submit}>
          <label className="login-field">
            Email
            <input type="email" placeholder="nome@exemplo.com" value={email}  onChange={e => setEmail(e.target.value)} />
          </label>

          <label className="login-field">
            Palavra-passe
            <input type="password" placeholder="••••••••" value={password} onChange={e => setPassword(e.target.value)}/>
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


