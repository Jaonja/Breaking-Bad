import React from "react";
import CardList from "../../organisms/CardList/index";
import Header from "../../organisms/Header";
import Footer from "../../organisms/Footer";
import styles from "./styles.module.scss";
const CharactersListPage = () => {
  return (
    <>
      <div className={styles.HeaderColor}>
        <Header />
      </div>
      <CardList />
      <div className={styles.footer}>
        <Footer />
      </div>
    </>
  );
};
export default CharactersListPage;
