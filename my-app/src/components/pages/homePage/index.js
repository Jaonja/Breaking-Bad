import React from "react";
import styles from "./styles.module.scss";
import Header from "../../organisms/Header";
import Footer from "../../organisms/Footer";
import logo from "../../../assets/img/BB.png";

const homePage = () => {
  return (
    <div>
      <Header />
      <div className={styles.logoContainer}>
        <img className={styles.logo} src={logo} alt="logo" />
      </div>
      <Footer />
    </div>
  );
};

export default homePage;
