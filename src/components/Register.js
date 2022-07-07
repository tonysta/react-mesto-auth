import React from "react";
import {register} from "../utils/auth.js";
import {Link} from "react-router-dom";

function Register () {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    function handleEmailChange(event) {
        setEmail(event.target.value);
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        register(
            password,
            email
        );
    }

    return (
        <div className="popup__container">
        <form onSubmit={handleSubmit} className="popup__form" name="register">
            <h1>Регистрация</h1>
            <input
                type="email"
                placeholder="Email"
                required
                name="email"
                value={email || ''}
                onChange={handleEmailChange}
            />
            <input
                type="text"
                placeholder="Пароль"
                required
                name="passwordword"
                minLength="8"
                maxLength="20"
                value={password || ''}
                onChange={handlePasswordChange}
            />
            <button type="submit">Зарегистрироваться</button>
            <p>Уже зарегистрированы?<Link to="/sign-in">Войти</Link></p>

        </form>
        </div>
    )
}

export default Register;