import Repository from "../../repository/index";
import {
  FETCH_CHARACTERS,
  CHANGE_LOADER,
  ERROR_FETCHING_PERSONS,
	PERSON_QUOTE,
	IS_LOADING_QUOTE,
  IS_ERROR_QUOTE
} from "../actionTypes/importData";
export function isErrorQuote(value) {
  return {type: IS_ERROR_QUOTE, value}
}

export function isLoadingQuote(value) {
  return {type: IS_LOADING_QUOTE, isLoadingQuote: value}
}
export function personQuote(value) {
  return { type: PERSON_QUOTE, quote: value };
}
export const fetchCharacters = (characters) => ({
  type: FETCH_CHARACTERS,
  payload: characters,
});
export const characterIsFetching = (value) => ({
  type: CHANGE_LOADER,
  payload: value,
});
export const charactersError = (value) => ({
  type: ERROR_FETCHING_PERSONS,
  payload: value,
});
export const getPersonsData = () => async (dispatch) => {
  dispatch(characterIsFetching(true));
  const { value, error } = await Repository.APIPersons.getPersons();
  if (error || !value) {
    dispatch(charactersError(true));
  }
  dispatch(fetchCharacters(value));
  dispatch(characterIsFetching(false));
};
export const getPersonQuote = (name) => async (dispatch) => {
  dispatch(isLoadingQuote(true));
  let {value, error} = await Repository.APIPersons.getQuote(name);
  if (error || !value) {
    dispatch(isErrorQuote(true));
    dispatch(isLoadingQuote(false));
  }
  dispatch(personQuote(value));
  dispatch(isLoadingQuote(false));
};