import { FETCH_CHARACTERS } from '../Actions/types';

const initialState = {};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_CHARACTERS:
      return payload;
    default:
      return state;
  }
};
