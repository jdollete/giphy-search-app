import { combineReducers } from 'redux';
import GifReducer from './GifReducer';


export default combineReducers({
  trendingGif: GifReducer,
  searchedGifs: GifReducer,
  inputFieldText: GifReducer,
  previousSearches: GifReducer,
  gifSearchResults: GifReducer
});
