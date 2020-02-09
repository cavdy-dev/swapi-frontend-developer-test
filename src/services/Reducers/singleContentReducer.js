import { FETCH_CONTENT } from '../Actions/types';

const initialState = {};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_CONTENT:
      return payload;
    default:
      return state;
  }
};
