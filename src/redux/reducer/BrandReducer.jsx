import {FETCH_BRAND_REQUEST, FETCH_BRAND_SUCCESS, FETCH_BRAND_ERROR} from "../types/type"

const BrandState = {
    loading: true,
    brand: [],
    error:[],
  };
  const BrandReducer = (state = BrandState, action) => {
    switch (action.type) {
      case FETCH_BRAND_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_BRAND_SUCCESS:
        return{
            ...state,
            loading : false,
            brand: action.payload,
        }
      case FETCH_BRAND_ERROR: 
        return{
          ...state,
          loading : false,
          error: action.payload
        }
      default:
        return state;
    }
  };
  export default BrandReducer;