import { FETCH_MENU } from '../actions';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_MENU:
      return action.payload.data;
    default:
      return state;
  }
}