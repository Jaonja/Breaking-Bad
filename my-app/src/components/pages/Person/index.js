import React from "react";
import PersonPage from "../../../components/organisms/Person";
import Header from "../../organisms/Header";
import Footer from "../../organisms/Footer";
import styles from "./styles.module.scss";

const Person = () => {
  return (
    <>
      <div className={styles.HeaderColor}>
        <Header />
      </div>
      <PersonPage />
      <Footer />
    </>
  );
};
export default Person;
