import axios from '../config/axiosConfig';
import { FETCH_PLANETS } from './types';

export default () => async dispatch => {
  try {
    const res = await axios.get('/planets');
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
