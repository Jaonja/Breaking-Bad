import React from "react";
import styles from "./style.module.scss";

const ErrorMessage = ({ name }) => {
  return <div className={styles.error}>{name}</div>;
};

export default ErrorMessage;
