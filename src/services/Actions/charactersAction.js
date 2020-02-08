import axios from '../config/axiosConfig';
import { FETCH_CHARACTERS } from './types';

export default (page = 1) => async dispatch => {
  try {
    const res = await axios.get('/people', { params: { page } });
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
