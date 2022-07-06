import React from "react";
import {Link} from "react-router-dom";

function Register () {
    return (
        <div className="popup__container">
        <form className="popup__form" name="register">
            <h1>Регистрация</h1>
            <input
                type="email"
                placeholder="Email"
                required
                name="email"
            />
            <input
                type="text"
                placeholder="Пароль"
                required
                name="password"
                minLength="8"
                maxLength="20"
            />
            <button type="submit">Зарегистрироваться</button>
            <p>Уже зарегистрированы?<Link to="/sign-in">Войти</Link></p>

        </form>
        </div>
    )
}

export default Register;