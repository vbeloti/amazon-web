import React from "react";
import logo from "../../assets/img/logo.svg";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

import "./styles.css";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <nav className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt="Amazon logo" />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link className="header__link" to="/login">
          <div className="header__option">
            <span className="header__optionLineOne">Olá, Faça seu login</span>
            <span className="header__optionLineTwo">Conta</span>
          </div>
        </Link>

        <Link className="header__link" to="/">
          <div className="header__option">
            <span className="header__optionLineOne">Devoluções</span>
            <span className="header__optionLineTwo">e Pedidos</span>
          </div>
        </Link>

        <Link className="header__link" to="/">
          <div className="header__option">
            <span className="header__optionLineOne">Experimente</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>

        <Link className="header__link" to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">0</span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
