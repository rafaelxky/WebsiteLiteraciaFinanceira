import { Children } from "react";
import "../styles/index.css"
import { HeaderBtn } from "./HeaderBtn";
export function Header(props){
    return (
        <div className = "header">
            <h1>Literacia Financeira</h1>
            <HeaderBtn>Read</HeaderBtn>
            <HeaderBtn>Login</HeaderBtn>
        </div>
    );
}
