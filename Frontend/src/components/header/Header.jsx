import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HeaderBtn } from "./HeaderBtn";
import { SearchBar } from "./HeaderSearchBar";
import { securityService } from "../../Dependencies";
import "../../styles/Header.css";

export function Header() {
  const [loggedIn, setLoggedIn] = useState(securityService.IsLoggedIn());

  function logout() {
    securityService.Logout();
    setLoggedIn(false); // update immediately
  }

  // Optional: if securityService can notify on login
  useEffect(() => {
    const unsubscribe = securityService.onLoginChange?.(() => {
      setLoggedIn(securityService.IsLoggedIn());
    });

    return () => unsubscribe?.();
  }, []);

  return (
    <div className="header">
      <Link to="/" className="no-underline">
        <h1>Literacia Financeira</h1>
      </Link>

      <SearchBar onSearch={null} />
      <HeaderBtn link="/artigos">Ler</HeaderBtn>

      {loggedIn ? (
        <HeaderBtn onClick={logout}>Logout</HeaderBtn>
      ) : (
        <HeaderBtn link="/login">Login</HeaderBtn>
      )}
    </div>
  );
}
