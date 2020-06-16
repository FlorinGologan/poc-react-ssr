import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import menuReducer from './menuReducer';

export default combineReducers({
  products: productsReducer,
  menu: menuReducer
});