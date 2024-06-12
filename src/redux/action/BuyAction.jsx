import { POST_BUYING_PRODUCTS_REQUEST, POST_BUYING_PRODUCTS_SUCCESS, POST_BUYING_PRODUCTS_ERROR} from "../types/type"
import api from "../api/api";
export const postBuyingRequest = () => {
    return {
        type: POST_BUYING_PRODUCTS_REQUEST,
      };
}
export const postBuyingSuccess = (data) => {
    return {
        type: POST_BUYING_PRODUCTS_SUCCESS,
        payload: data,
      };
}
export const postBuyingError = (err) => {
    return {
        type: POST_BUYING_PRODUCTS_ERROR,
        payload: err,
      };
}

export const postBuying = (data) => {
    return (dispatch) =>{
        dispatch(postBuyingRequest())
        api.post('/api/sale',data)
        .then((res) => {
          dispatch(postBuyingSuccess(res.data))
        })
        .catch((err) => {
          dispatch(postBuyingError(err))
        })
}
}