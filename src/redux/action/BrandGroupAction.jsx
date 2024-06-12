import {FETCH_BRANDGROUP_REQUEST, FETCH_BRANDGROUP_SUCCESS, FETCH_BRANDGROUP_ERROR} from "../types/type"
import api from "../api/api";

export const fetchBrandGroupRequest = () => {
    return {
      type: FETCH_BRANDGROUP_REQUEST,
    };
  };
  export const fetchBrandGroupSuccess = (posts) => {
    return {
      type: FETCH_BRANDGROUP_SUCCESS,
      payload: posts,
    };
  };
  export const fetchBrandGroupError = (err) => {
    return {
      type: FETCH_BRANDGROUP_ERROR,
      payload: err,
    };
  };

  export const fetchBrandGroup = () => {
    return ((dispatch) => {
        dispatch(fetchBrandGroupRequest())
        api.get("/api/brand/group")
        .then((res) => {dispatch(fetchBrandGroupSuccess(res.data))})
        .catch((err) => {dispatch(fetchBrandGroupError(err))})
    })
  }