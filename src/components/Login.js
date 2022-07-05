import React from "react";

function Login () {
    return (
        <form name="login">
            <h1>Вход</h1>
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
    )
}

export default Login;