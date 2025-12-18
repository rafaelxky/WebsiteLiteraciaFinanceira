import { Children } from "react";
import "../../styles/index.css"
import { HeaderBtn } from "./HeaderBtn";
import { Link } from "react-router-dom";

export function Header(props){

    return (
        <div className = "header">
            <Link to="/" className="no-underline">
                <h1>Literacia Financeira</h1>
            </Link>
            <HeaderBtn link="/articles">Read</HeaderBtn>
            <HeaderBtn link="/login">Login</HeaderBtn>
        </div>
    );
}
