import React from "react";
import PersonPage from "../../../components/organisms/Person";
import Header from "../../organisms/Header";
import Footer from "../../organisms/Footer";
import styles from "./styles.module.scss";

const Person = () => {
  return (
    <>
      <Header />
      <PersonPage />
      <Footer />
    </>
  );
};
export default Person;
