import Repository from "../../repository/index";
import {
  FETCH_CHARACTERS,
  CHANGE_LOADER,
  ERROR_FETCHING_PERSONS,
} from "../actionTypes/importData";

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
export const showCharactersList = () => async (dispatch) => {
  dispatch(characterIsFetching(true));
  const { value, error } = await Repository.APICore.createCardList();
  if (error || !value) {
    dispatch(charactersError(true));
  }
  dispatch(fetchCharacters(value));
  dispatch(characterIsFetching(false));
};
