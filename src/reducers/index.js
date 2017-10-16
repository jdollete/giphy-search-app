import { combineReducers } from 'redux';
import TrendingGifReducer from './TrendingGifReducer';


export default combineReducers({
  trendingGif: TrendingGifReducer,
  searchedGifs: TrendingGifReducer,
  inputFieldText: TrendingGifReducer
});
