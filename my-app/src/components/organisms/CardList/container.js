import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CardList from "./component";
import { showCharactersList } from "../../../store/actions/getNewCharacters";

const CardListContainer = () => {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.cardListReducer.characters);
  const isFetching = useSelector((state) => state.cardListReducer.isFetching);
  const isError = useSelector((state) => state.cardListReducer.isError);
  useEffect(() => {
    dispatch(showCharactersList());
  }, [dispatch]);
  return (
    <CardList
      characters={characters}
      isFetching={isFetching}
      isError={isError}
    />
  );
};

export const container = CardListContainer;
