import {FETCH_ORDER_REQUEST, FETCH_ORDER_SUCCESS, FETCH_ORDER_ERROR} from "../types/type"

const OrderState = {
    loading: true,
    order: [],
    error:[],
  };
  const OrderReducer = (state = OrderState, action) => {
    switch (action.type) {
      case FETCH_ORDER_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_ORDER_SUCCESS:
        return{
            ...state,
            loading : false,
            order : action.payload
        }
      case FETCH_ORDER_ERROR: 
        return{
          ...state,
          loading : false,
          error: action.payload
        }
      default:
        return state;
    }
  };
  export default OrderReducer;