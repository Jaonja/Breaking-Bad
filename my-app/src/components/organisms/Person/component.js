import React from "react";
import styles from "./styles.module.scss";
import ErrorMessage from "../../atoms/ErrorMessage/";
import Loader from "../../atoms/Loader/";

const Person = ({ person, isFetching, isError }) => {
  let { img, name, status, birthday, nickname } = person;
  return isError ? (
    <ErrorMessage />
  ) : isFetching ? (
    <Loader />
  ) : (
    <div className={styles.mainWrapper}>
      <div className={styles.wrapper}>
        <div className={styles.wrapperImg}>
          <img src={img} alt="img of person" />{" "}
        </div>
        <div className={styles.wrapperContent}>
          <div className={styles.status}>{status}</div>
          <div className={styles.name}> {name}</div>
          <div className={styles.birthday}>
            <p>Дата рождения:</p>
            <span>{birthday}</span>
          </div>
          <div className={styles.nickname}>
            <p>Ник-нейм: </p>
            <span> {nickname}</span>
          </div>
          <div className={styles.quote}>
            <p>
              Цитата:
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non,
                aliquam laoreet vivamus sed. Diam fames mi, quam tellus cursus
                volutpat velit massa.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Person;
