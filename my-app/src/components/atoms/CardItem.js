import React from "react";
import styles from "./styles.module.scss";

export default function CardItem({ todo, index }) {
  return (
    <li className={styles.active}>
      <strong>{index + 1}</strong>
      {todo.titles}
    </li>
  );
}
