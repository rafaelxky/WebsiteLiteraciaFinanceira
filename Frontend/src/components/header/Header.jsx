import { Children } from "react";
import "../../styles/index.css"
import { HeaderBtn } from "./HeaderBtn";
import { Link } from "react-router-dom";
import { SearchBar } from "./HeaderSearchBar";
import { securityService } from "../../Dependencies";

export function Header({ isLoggedIn }) {
    return (
        <div className="header">
            <Link to="/" className="no-underline">
                <h1>Literacia Financeira</h1>
            </Link>
            <SearchBar onSearch={null}></SearchBar>
            <HeaderBtn link="/artigos">Ler</HeaderBtn>
            <HeaderBtn link="/artigos/novo">Adicionar noticia</HeaderBtn>
            <HeaderBtn link="/chat">Chat</HeaderBtn>

            {isLoggedIn ? (
            <HeaderBtn link="/logout">Logout</HeaderBtn>
            ) : (
            <HeaderBtn link="/login">Login</HeaderBtn>
            )}
        </div>
    );
}
