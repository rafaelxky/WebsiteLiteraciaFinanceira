import { useState } from "react";
import UserCreateDto from "../models/users/UserCreateDto"
import { securityService, usersService } from "../Dependencies";
import { Navigate, useNavigate } from "react-router-dom";

export default function CreateUser(){

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [name, setName] = useState("");

    const navigate = useNavigate();

  function Submit(e){
    e.preventDefault();
    let userCreate = new UserCreateDto(email, password, name);
    if(password != passwordConfirm){
        return <Navigate to="/"/>;   
    }
    usersService.NewUser(userCreate);
    navigate("/");
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