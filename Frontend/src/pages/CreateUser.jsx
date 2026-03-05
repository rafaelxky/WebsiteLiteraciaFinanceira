import { useState } from "react";
import UserCreateDto from "../models/users/UserCreateDto"
import { securityService, usersService } from "../Dependencies";
import { Navigate, useNavigate } from "react-router-dom";
import { EmailConflictError } from "../errors/EmailConflictError";
import { ServerError } from "../errors/ServerError";

export default function CreateUser(){

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [name, setName] = useState("");

    const navigate = useNavigate();

  async function Submit(e){
    e.preventDefault();
    let userCreate = new UserCreateDto(email, password, name);
    if(password != passwordConfirm){
      navigate("/status", {state: {message: "\"Palavra-passe\" e \"Confirmar Palavra-passe\" não são iguais! Tente novament.", nextPage: "/createUser"}});
    }
    try {
      await usersService.NewUser(userCreate);
      navigate("/status", {state: {message: "Utilizador criado com sucesso!", nextPage: "/"}});
    } catch (error) {
      if(error instanceof EmailConflictError){
        navigate("/status", {state: {message: "Erro ao criar utilizador, este email já está a ser utilizado!", nextPage: "/createUser"}});
      } else 
      if(error instanceof ServerError){
        navigate("/status", {state: {message: "Erro no servidor, tente outra vez mais tarde! Pedimos desculpa pela inconveniencia :(", nextPage: "/createUser"}});
      } 
      else {
        navigate("/status", {state: {message: "Erro desconhecido ao criar utilizador! Tente de novo.", nextPage: "/createUser"}});
      }
    }
  }

return (
    <main className="login-page">
      <section className="login-card">
        <h1>Criar utilizador</h1>

        <form className="login-form" onSubmit={Submit}>
          <label className="login-field">
            Email
            <input 
                type="email" 
                placeholder="nome@exemplo.com" 
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
          </label>

          <label className="login-field">
            Palavra-passe
            <input 
                type="password" 
                placeholder="••••••••" 
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
          </label>
          
          <label className="login-field">
            Confirmar Palavra-passe
            <input 
                type="password" 
                placeholder="••••••••" 
                value={passwordConfirm}
                onChange={e => setPasswordConfirm(e.target.value)}
            />
          </label>

          <label className="login-field">
            Nome de utilizador
            <input 
                type="text"
                placeholder="O meu nome"
                value={name}
                onChange={e => setName(e.target.value)}
             />
          </label>

          <button  type="submit" className="login-submit">
            Criar conta
          </button>
        </form>
      </section>
    </main>
  );
}