import React from "react";
import styles from "./styles.module.scss";
import logo from "../../../assets/img/BB.png";

const homePage = () => {
  return (
    <>
      <img className={styles.logo} src={logo} alt="logo" />
    </>
  );
};

export default homePage;
