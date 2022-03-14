import React from "react";
import styles from "./styles.module.scss";
import Header from "../../organisms/Header";
import Footer from "../../organisms/Footer";
import logo from "../../../assets/img/BB.png";

const homePage = () => {
  return (
    <>
      <div className={styles.HeaderColor}>
        <Header />
      </div>
      <img className={styles.logo} src={logo} alt="logo" />
      <Footer />
    </>
  );
};

export default homePage;
