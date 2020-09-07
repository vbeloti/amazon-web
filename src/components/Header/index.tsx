import React from "react";
import logo from "../../assets/img/logo.svg";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

import "./styles.css";
import { Link } from "react-router-dom";
import { useStateValue } from "../../context/StateProvider";
import { auth } from "../../config/firebase";

const Header: React.FC = () => {
  const [{ basket, user }] = useStateValue();

  const handleLogin = () => {
    if (user) {
      auth.signOut();
    }
  };

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
        <Link className="header__link" to={!user ? '/login' : '/'}>
          <div onClick={handleLogin} className="header__option">
            <span className="header__optionLineOne">Olá, {user?.email}</span>
            <span className="header__optionLineTwo">{user ? 'Sair' : 'Entrar'}</span>
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
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
