import {
  FETCH_CHARACTERS,
  CHANGE_LOADER,
  ERROR_FETCHING_PERSONS,
  PERSON_QUOTE,
  IS_LOADING_QUOTE,
  IS_ERROR_QUOTE,
} from "../actionTypes/importData";

const initialState = {
  quote: [],
  isLoadingQuote: false,
  isErrorQuote: undefined,
  characters: [],
  isFetching: false,
  isError: false,
};

const personsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PERSON_QUOTE:
      return {
        ...state,
        quote: action.quote,
      };
    case IS_LOADING_QUOTE:
      return {
        ...state,
        isLoadingQuote: action.isLoadingQuote,
      };
    case IS_ERROR_QUOTE:
      return {
        ...state,
        isErrorQuote: action,
      };
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
