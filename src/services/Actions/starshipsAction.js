import axios from '../config/axiosConfig';
import { FETCH_STARSHIPS } from './types';

export default (page = 1) => async dispatch => {
  try {
    const res = await axios.get('/starships', { params: { page } });
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
