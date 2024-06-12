import {FETCH_BRANDGROUP_REQUEST, FETCH_BRANDGROUP_SUCCESS, FETCH_BRANDGROUP_ERROR} from "../types/type"

const BrandGroupState = {
    loading: true,
    brand: [],
    error:[],
  };
  const BrandGroupReducer = (state = BrandGroupState, action) => {
    switch (action.type) {
      case FETCH_BRANDGROUP_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_BRANDGROUP_SUCCESS:
        return{
            ...state,
            loading : false,
            brand: action.payload
        }
      case FETCH_BRANDGROUP_ERROR: 
        return{
          ...state,
          loading : false,
          error: action.payload
        }
      default:
        return state;
    }
  };
  export default BrandGroupReducer;