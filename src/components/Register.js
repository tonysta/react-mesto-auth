import React from "react";
import {Link} from "react-router-dom";

function Register () {
    return (
        <form name="register">
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
            <p>Уже зарегистрированы?</p>
            <Link to="/sign-in">Войти</Link>
        </form>
    )
}

export default Register;