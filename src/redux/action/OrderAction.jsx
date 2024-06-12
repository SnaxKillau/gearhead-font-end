import {FETCH_ORDER_REQUEST, FETCH_ORDER_SUCCESS, FETCH_ORDER_ERROR} from "../types/type"
import api from "../api/api";

export const fetchOrderRequest = () => {
    return {
      type: FETCH_ORDER_REQUEST,
    };
  };
  export const fetchOrderSuccess = (posts) => {
    return {
      type: FETCH_ORDER_SUCCESS,
      payload: posts,
    };
  };
  export const fetchOrderError = (err) => {
    return {
      type: FETCH_ORDER_ERROR,
      payload: err,
    };
};
export const fetchOrder = () => {
 return (dispatch) => {
  api.get(`/api/order/currentOrder/${localStorage.getItem("currentUser")}`)
  .then((res) => {
    dispatch(fetchOrderSuccess(res.data))
  })
  .catch((err) => {
    dispatch(fetchOrderError(err))
  })
 }
}