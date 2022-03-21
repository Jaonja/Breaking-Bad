import React from "react";
import style from "./style.module.scss";
import logo from "../../../assets/img/logo.png";
import logo1 from "../../../assets/img/logo1.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={style.logoWrapper}>
      <Link to="/">
        <img className={style.logo} src={logo} alt="logo" />
      </Link>
      <div className={style.BurgerContainer}>
        <Link to="/list">
          <img src={logo1} alt="logo" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
