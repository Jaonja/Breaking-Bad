import styles from "./styles.module.scss";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Card = ({ birthday, name, img, status }) => {
  return (
    <div className={styles.cardWrapper}>
      <LazyLoadImage className={styles.img} src={img}></LazyLoadImage>
      <div className={styles.infoWrapper}>
        <p className={styles.status}>{status}</p>
        <p className={styles.name}>{name}</p>
        <p className={styles.data}>{birthday}</p>
      </div>
    </div>
  );
};

export default Card;
