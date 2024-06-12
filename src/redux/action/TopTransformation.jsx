import api from "../api/api";
import {FETCH_TOP_TRANSFORMATION_REQUEST, FETCH_TOP_TRANSFORMATION_SUCCESS, FETCH_TOP_TRANSFORMATION_ERROR} from "../types/type"

export const fetchTopRequest = () => {
    return {
      type: FETCH_TOP_TRANSFORMATION_REQUEST,
    };
  };
  export const fetchTopSuccess = (posts) => {
    return {
      type: FETCH_TOP_TRANSFORMATION_SUCCESS,
      payload: posts,
    };
  };
  export const fetchTopError = (err) => {
    return {
      type: FETCH_TOP_TRANSFORMATION_ERROR,
      payload: err,
    };
  };

  export const fetchTop = () => {
    return (dispatch) => {
        dispatch(fetchTopRequest());
        api.get('/api/transformation/top')
        .then((res) => {
            dispatch(fetchTopSuccess(res.data))
        })
        .catch((err) => {
            console.log(err)
        })
    }
  }