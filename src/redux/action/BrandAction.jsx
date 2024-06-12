import {FETCH_BRAND_REQUEST, FETCH_BRAND_SUCCESS, FETCH_BRAND_ERROR} from "../types/type"
import api from "../api/api";

export const fetchBrandRequest = () => {
    return {
      type: FETCH_BRAND_REQUEST,
    };
  };
  export const fetchBrandSuccess = (posts) => {
    return {
      type: FETCH_BRAND_SUCCESS,
      payload: posts,
    };
  };
  export const fetchBrandError = (err) => {
    return {
      type: FETCH_BRAND_ERROR,
      payload: err,
    };
};
export const fetchBrand = () => {
 return (dispatch) => {
  api.get("/api/brand")
  .then((res) => {
    dispatch(fetchBrandSuccess(res.data))
  })
  .catch((err) => {
    dispatch(fetchBrandError(err))
  })
 }
}