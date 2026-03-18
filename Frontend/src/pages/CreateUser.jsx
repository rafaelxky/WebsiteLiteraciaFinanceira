import { useState } from "react";
import UserCreateDto from "../models/users/UserCreateDto"
import { langService, securityService, usersService } from "../Dependencies";
import { Navigate, useNavigate } from "react-router-dom";
import { EmailConflictError } from "../errors/EmailConflictError";
import { ServerError } from "../errors/ServerError";

export default function CreateUser(){

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [name, setName] = useState("");

    const navigate = useNavigate();

    const lang = langService.map;

  async function Submit(e){
    e.preventDefault();
    let userCreate = new UserCreateDto(email, password, name);
    if(password != passwordConfirm){
      navigate("/status", {state: {message: lang?.passwordMissmatch, nextPage: "/createUser"}});
    }
    try {
      await usersService.NewUser(userCreate);
      navigate("/status", {state: {message: lang?.createUserSuccess, nextPage: "/"}});
    } catch (error) {
      if(error instanceof EmailConflictError){
        navigate("/status", {state: {message: lang?.repeatedEmail, nextPage: "/createUser"}});
      } else 
      if(error instanceof ServerError){
        navigate("/status", {state: {message: lang?.serverError, nextPage: "/createUser"}});
      } 
      else {
        navigate("/status", {state: {message: lang?.unknownError, nextPage: "/createUser"}});
      }
    }
  }

return (
    <main className="login-page">
      <section className="login-card">
        <h1>{lang?.createUserTitle}</h1>

        <form className="login-form" onSubmit={Submit}>
          <label className="login-field">
            {lang?.email}
            <input 
                type="email" 
                placeholder={lang?.emailPlaceholder}
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
          </label>

          <label className="login-field">
            {lang?.passwordTitle}
            <input 
                type="password" 
                placeholder="••••••••" 
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
          </label>
          
          <label className="login-field">
            {lang?.passwordConfirm}
            <input 
                type="password" 
                placeholder="••••••••" 
                value={passwordConfirm}
                onChange={e => setPasswordConfirm(e.target.value)}
            />
          </label>

          <label className="login-field">
            {lang?.usernameFormPrompt}
            <input 
                type="text"
                placeholder={lang?.usernamePlaceholder}
                value={name}
                onChange={e => setName(e.target.value)}
             />
          </label>

          <button  type="submit" className="login-submit">
            {lang?.createAccountSubmit}
          </button>
        </form>
      </section>
    </main>
  );
}