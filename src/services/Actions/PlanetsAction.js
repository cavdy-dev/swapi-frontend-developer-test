import axios from '../config/axiosConfig';
import { FETCH_PLANETS } from './types';

export default (page, search) => async dispatch => {
  try {
    const res = await axios.get('/planets', {
      params: { page: page || 1, search: search || '' }
    });
    if (res && res.data) {
      dispatch({
        type: FETCH_PLANETS,
        payload: res.data
      });
    }
  } catch (err) {
    console.log(err);
  }
};
