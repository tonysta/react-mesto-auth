import React from "react";

function Login () {
    return (
        <div className="auth">
            <form className="auth__form" name="login">
                <h1 className="auth__title">Вход</h1>
                <input
                type="email"
                placeholder="Email"
                required
                name="email"
                className="auth__input"
                />
                <input
                type="text"
                placeholder="Пароль"
                required
                name="password"
                minLength="8"
                maxLength="20"
                className="auth__input"
                />
                <button className="auth__submit" type="submit">Войти</button>
            </form>
        </div>
    )
}

export default Login;