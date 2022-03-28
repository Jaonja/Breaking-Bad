import React from "react";
// @ts-ignore
import styles from "./styles.module.scss";
import ErrorMessage from "../../atoms/ErrorMessage/";
import Loader from "../../atoms/Loader/";
import { Link } from "react-router-dom";
import logo from "../../../assets/img/Vector.png";

const Person = ({ quote, person, isFetching, isError }) => {
  let { img, name, status, birthday, nickname } = person;
  return isError ? (
    <ErrorMessage name={undefined} />
  ) : isFetching ? (
    <Loader />
  ) : (
    <div className={styles.mainWrapper}>
      <div className={styles.wrapper}>
        <div className={styles.one}>
          <Link to="/list" className={styles.link}>
            <img className={styles.logo} src={logo} alt="logo" />
            <span className={styles.logoTxt}>Назад в каталог</span>
          </Link>
          <div className={styles.wrapperImg}>
            <img src={img} alt="img of person" />
          </div>
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
              <span>{quote}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Person;
