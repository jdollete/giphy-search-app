import {
  TRENDING_GIF_FETCH
} from '../actions/types';

const INITIAL_STATE = {

};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TRENDING_GIF_FETCH:
      return { ...state, gifs: action.payload };
    default:
      return state;
  }
};
