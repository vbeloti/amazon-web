import React, { MouseEvent, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "../../assets/img/logo-dark.svg";

import "./styles.css";
import { auth } from "firebase";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleLogin = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    auth()
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push('/');
      })
      .catch((e) => alert(e.message));
  };

  const handleRegister = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    auth()
    .createUserWithEmailAndPassword(email, password)
    .then((auth) => {

    })
    .catch((e) => alert(e.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img src={logo} alt="Amazon Logo" className="login__logo" />
      </Link>

      <div className="login__container">
        <h1>Fazer login</h1>
        <form>
          <h5>E-mail</h5>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
          <h5>Senha</h5>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <button
            onClick={handleLogin}
            type="submit"
            className="login_signInButton"
          >
            Continuar
          </button>
        </form>
        <p>
          Ao continuar, você concorda com as Condições de Uso da Amazon. Por
          favor verifique a Notificação de Privacidade, Notificação de Cookies e
          a Notificação de Anúncios Baseados em Interesse.
        </p>
        <button onClick={handleRegister} className="login_registerButton">
          Criar sua conta da Amazon
        </button>
      </div>
    </div>
  );
};

export default Login;
