import axios from 'axios';
import {
  TRENDING_GIF_FETCH,
  SEARCH_GIFS,
  INPUT_CHANGED,
  PREVIOUS_SEARCH
} from './types';

export const inputFieldChanged = (text) => {

  return {
    type: INPUT_CHANGED,
    payload: text
  };
};

export const fetchTrending = () => {
  return(dispatch) => {
    dispatch({ type: TRENDING_GIF_FETCH });

    axios.get('https://api.giphy.com/v1/gifs/trending?api_key=N7jGbYOebKSqhTe9Lq0tIz3gpiBU4bRE').then(response => {
      const responseData = response.data.data
      trendingFetchSuccess(dispatch, responseData);
    })
  }
};

export const searchGifs = (input) => {

  return(dispatch) => {
    dispatch({ type: SEARCH_GIFS });

    axios.get("http://api.giphy.com/v1/gifs/search?q="
      + input
      + "&api_key=N7jGbYOebKSqhTe9Lq0tIz3gpiBU4bRE")
      .then(response => {
      const responseData = response.data.data
      searchGifsSuccess(dispatch, responseData);
    })
  }
};

export const setPreviousSearch = (searchArray, search) => {
  var newObject = {}
  const currentTime = String(Date.now());

  newObject.id = currentTime;
  newObject.word = search;

  searchArray.push(newObject);

  // var allSearches = [];
  // var newSearchCollection = allSearches.push(searches);
  return {
    type: PREVIOUS_SEARCH,
    payload: searchArray
  };
};

const trendingFetchSuccess = (dispatch, responseData) => {
  dispatch({
    type: TRENDING_GIF_FETCH,
    payload: responseData
  });
};

const searchGifsSuccess = (dispatch, responseData) => {
  console.log(responseData);
  dispatch({
    type: SEARCH_GIFS,
    payload: responseData
  });
};
