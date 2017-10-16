import axios from 'axios';
import {
  TRENDING_GIF_FETCH
} from './types';

export const fetchTrending = () => {
  return(dispatch) => {
    dispatch({ type: TRENDING_GIF_FETCH });

    axios.get('https://api.giphy.com/v1/gifs/trending?api_key=N7jGbYOebKSqhTe9Lq0tIz3gpiBU4bRE').then(response => {
      const responseData = response.data.data
      trendingFetchSuccess(dispatch, responseData);
    })
  }
};

const trendingFetchSuccess = (dispatch, responseData) => {
  dispatch({
    type: TRENDING_GIF_FETCH,
    payload: responseData
  });
};
