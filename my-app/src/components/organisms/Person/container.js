import { useEffect } from "react";
import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Person from "./component";
import { getPersonsData } from "../../../store/actions/getPersons";

const PersonContainer = () => {
  const dispatch = useDispatch();
  // @ts-ignore
  const characters = useSelector((state) => state.personsReducer.characters);
  // @ts-ignore
  const isFetching = useSelector((state) => state.personsReducer.isFetching);
  // @ts-ignore
  const isError = useSelector((state) => state.personsReducer.isError);
  const { id } = useParams();
  useEffect(() => {
    dispatch(getPersonsData());
  }, [dispatch]);
  const person = characters.length
    ? characters.filter((characters) => characters.char_id == id)[0]
    : [];
  return <Person person={person} isFetching={isFetching} isError={isError} />;
};
export const container = PersonContainer;
