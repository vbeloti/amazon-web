import React from "react";
import logo from "../../assets/img/logo.svg";

import "./styles.css";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <nav className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt="Amazon logo" />
      </Link>

      <input className="header__searchInput" type="text"/>
    </nav>
  );
};

export default Header;
