import {
  TRENDING_GIF_FETCH,
  SEARCH_GIFS
} from '../actions/types';

const INITIAL_STATE = {
  gifs: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TRENDING_GIF_FETCH:
      return { ...state, gifs: action.payload };
    case SEARCH_GIFS:
      return { ...state, searchedGifs: action.payload}
    default:
      return state;
  }
};
