import axios from '../config/axiosConfig';
import { FETCH_CHARACTERS } from './types';

export default (page, search) => async dispatch => {
  try {
    const res = await axios.get('/people', {
      params: { page: page || 1, search: search || '' }
    });
    if (res && res.data) {
      dispatch({
        type: FETCH_CHARACTERS,
        payload: res.data
      });
    }
  } catch (err) {
    console.log(err);
  }
};
