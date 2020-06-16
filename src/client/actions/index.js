import axios from 'axios';

export const FETCH_PRODUCTS = 'fetch_products';
export const fetchProducts = () => async dispatch => {
  const res = await axios.get('http://localhost:3000/api/products.json');

  dispatch({
    type: FETCH_PRODUCTS,
    payload: res
  });
};