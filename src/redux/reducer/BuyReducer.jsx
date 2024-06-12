import { POST_BUYING_PRODUCTS_REQUEST, POST_BUYING_PRODUCTS_SUCCESS, POST_BUYING_PRODUCTS_ERROR} from "../types/type"

const productsBuyingState = {
    loading: true,
    product: '',
    sucesss : false,
    error: '',
  };
  const BuyReducer = (state = productsBuyingState, action) => {
    switch (action.type) {
      case POST_BUYING_PRODUCTS_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case POST_BUYING_PRODUCTS_SUCCESS:
        return{
            ...state,
            loading : false,
            sucesss : true,
            product: action.payload,
        }
      case POST_BUYING_PRODUCTS_ERROR: 
        return{
          ...state,
          loading : false,
          error: action.payload
        }
      default:
        return state;
    }
  };
  export default BuyReducer;