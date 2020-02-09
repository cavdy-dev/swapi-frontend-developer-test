import axios from '../config/axiosConfig';
import { FETCH_STARSHIPS } from './types';

export default (page, search) => async dispatch => {
  try {
    const res = await axios.get('/starships', {
      params: { page: page || 1, search: search || '' }
    });
    if (res && res.data) {
      dispatch({
        type: FETCH_STARSHIPS,
        payload: res.data
      });
    }
  } catch (err) {
    console.log(err);
  }
};
