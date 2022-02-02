import {
  FETCH_CHARACTERS,
  CHANGE_LOADER,
  ERROR_FETCHING_PERSONS,
} from "../actionTypes/importData";

const initialState = {
  persons: [],
  isFetching: false,
  isError: false,
};

const personsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARACTERS:
      return {
        ...state,
        characters: action.payload,
      };
    case CHANGE_LOADER:
      return {
        ...state,
        isFetching: action.payload,
      };
    case ERROR_FETCHING_PERSONS:
      return {
        ...state,
        isError: action.payload,
      };
    default:
      return state;
  }
};
export default personsReducer;
