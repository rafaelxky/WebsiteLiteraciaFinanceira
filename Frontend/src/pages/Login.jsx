import { useState } from "react";
import { securityService } from "../Dependencies";
import { UserLoginDto } from "../models/users/UserLoginDto";
import "../styles/Login.css";
import { Navigate, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
   const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault(); // stop page reload

    const login = new UserLoginDto(email, password);
    securityService.Login(login);

    // redirect after login
    navigate("/");
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <h1>Sign in</h1>

        <form onSubmit={handleSubmit}>
          <label>
            Email
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>

          <label>
            Password
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>

          <button type="submit">Login</button>
        </form>

        <p className="hint">Forgot password?</p>
      </div>
    </div>
  );
}
