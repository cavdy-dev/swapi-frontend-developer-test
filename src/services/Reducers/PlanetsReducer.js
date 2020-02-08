import { FETCH_PLANETS } from '../Actions/types';

const initialState = {};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_PLANETS:
      return payload;
    default:
      return state;
  }
};
