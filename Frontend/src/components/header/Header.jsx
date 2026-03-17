import { Children } from "react";
import "../../styles/index.css"
import { HeaderBtn } from "./HeaderBtn";
import { Link } from "react-router-dom";
import { SearchBar } from "./HeaderSearchBar";
import { langService} from "../../Dependencies";

export function Header({ isLoggedIn }) {

    const lang = langService.map;

    return (
        <div className="header">
            <Link to="/" className="no-underline">
                <h1>{lang?.headerTitle}</h1>
            </Link>
            <SearchBar onSearch={null}></SearchBar>
            <HeaderBtn link="/articles">{lang?.headerRead}</HeaderBtn>
            <HeaderBtn link="/articles/novo">{lang?.headerAddArticle}</HeaderBtn>
            <HeaderBtn link="/chat">{lang?.headerChat}</HeaderBtn>

            {isLoggedIn ? (
            <HeaderBtn link="/logout">{lang?.headerLogout}</HeaderBtn>
            ) : (
            <HeaderBtn link="/login">{lang?.headerLogin}</HeaderBtn>
            )}
        </div>
    );
}
