import {
  TRENDING_GIF_FETCH,
  SEARCH_GIFS,
  INPUT_CHANGED,
  PREVIOUS_SEARCH,
  CLEAR_SEARCH
} from '../actions/types';

const INITIAL_STATE = {
  gifs: [],
  inputFieldText: "",
  previousSearches: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TRENDING_GIF_FETCH:
      return { ...state, gifs: action.payload };
    case SEARCH_GIFS:
      return { ...state, searchedGifs: action.payload};
    case INPUT_CHANGED:
      return { ...state, inputFieldText: action.payload};
    case CLEAR_SEARCH:
      return { ...state, inputFieldText: action.payload};
    case PREVIOUS_SEARCH:
      return { ...state, previousSearches: action.payload};
    default:
      return state;
  }
};
