import React from 'react';
import logo from "../images/logo-w.svg";
import {Link} from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <img src={logo} alt="логотип" className="header__logo"/>
            <div style={{display: "flex", alignItems:"center", paddingBottom: "13px"}}>
                <p style={{margin: 0, color: "red"}}>test@test.test</p>
                <Link to="/sign-up" className="auth__link" style={{marginLeft: "24px"}}>Регистрация/Войти/Выйти</Link>
            </div>
        </header>
    )
}

export default Header;