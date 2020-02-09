import axios from '../config/axiosConfig';
import { FETCH_CONTENT } from './types';

export default url => async dispatch => {
  try {
    const res = await axios.get(url);
    if (res && res.data) {
      dispatch({
        type: FETCH_CONTENT,
        payload: res.data
      });
    }
  } catch (err) {
    console.log(err);
  }
};
