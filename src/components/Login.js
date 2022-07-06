import React from "react";

function Login () {
    return (
        <div className="popup__container">
        <form className="popup__form" name="login">
            <h1 className="popup__title">Вход</h1>
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
            <button type="submit">Войти</button>
        </form>
        </div>
    )
}

export default Login;