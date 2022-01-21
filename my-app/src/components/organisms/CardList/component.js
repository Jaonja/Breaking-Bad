import React, { Fragment } from "react";
import styles from "./styles.module.scss";
import Card from "../../molecules/Card/index";
import ErrorMessage from "../../atoms/ErrorMessage/";
import Loader from "../../atoms/Loader/";

const CardList = ({ characters, isFetching, isError }) => {
  return (
    <Fragment>
      {isError ? (
        <ErrorMessage name="Данные не подгрузились" />
      ) : !isFetching ? (
        <div className={styles.cardList}>
          {characters.map((character) => (
            <Card
              key={character.char_id}
              name={character.name}
              birthday={character.birthday}
              img={character.img}
              status={character.status}
            />
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </Fragment>
  );
};

export default CardList;
