import React, { Fragment } from "react";
import styles from "./styles.module.scss";
import Card from "../../molecules/Card/index";
import ErrorMessage from "../../atoms/ErrorMessage/";
import Loader from "../../atoms/Loader/";
import { Link } from "react-router-dom";

const CardList = ({ characters, isFetching, isError }) => {
  return ( 
    <>
      {isError ? (
        <ErrorMessage name="Данные не подгрузились" />
      ) : !isFetching ? (
        <div className={styles.cardList}>
          {characters.map((character) => (
            <Link
              to={`/character/${character.char_id}`}
              className={styles.link}
            >
              <Card
                key={character.char_id}
                name={character.name}
                birthday={character.birthday}
                img={character.img}
                status={character.status}
              />
            </Link>
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default CardList;
