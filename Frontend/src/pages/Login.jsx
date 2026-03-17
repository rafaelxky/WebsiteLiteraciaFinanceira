import { useState } from "react";
import "../styles/Login.css";
import { langService, securityService } from "../Dependencies";
import { UserLoginDto } from "../models/users/UserLoginDto";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { WrongCredentialsError } from "../errors/WrongCredentialsError";



export default function Login({setLoggedIn}) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const lang = langService.map;

  async function Submit(e) {
    e.preventDefault();
    let loginDto = new UserLoginDto(email, password);
    try {
      await securityService.Login(loginDto);
      setLoggedIn(true);
      navigate("/status", {state: {message: lang?.successfullLogin, nextPage: "/"}});
    } catch (err){
      if(err instanceof WrongCredentialsError){
        navigate("/status", {state: {message: lang?.loginFailed, nextPage: "/login"}});
      } else {
        navigate("/status", {state: {message: lang?.loginUnknownError, nextPage: "/login"}});
      }
    }
  }

  return (
    <main className="login-page">
      <section className="login-card">
        <h1>{lang?.headerLogin}</h1>

        <form className="login-form" onSubmit={Submit}>
          <label className="login-field">
            {lang?.email}
            <input type="email" placeholder="nome@exemplo.com" value={email}  onChange={e => setEmail(e.target.value)} />
          </label>

          <label className="login-field">
            {lang?.passwordTitle}
            <input type="password" placeholder="••••••••" value={password} onChange={e => setPassword(e.target.value)}/>
          </label>

          <button type="submit" className="login-submit">
            {lang?.login}
          </button>

        </form>

        <div className="login-footer">
          <span>{lang?.or}</span>
          <Link to={"/createUser"}>
            <button type="button" className="login-link" >
              {lang?.createUserTitle}
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}


