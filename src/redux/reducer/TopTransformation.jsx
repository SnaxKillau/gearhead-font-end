import {FETCH_TOP_TRANSFORMATION_REQUEST, FETCH_TOP_TRANSFORMATION_SUCCESS, FETCH_TOP_TRANSFORMATION_ERROR} from "../types/type"

const TopState = {
    loading: true,
    topTransfomation: [],
    error: "",
  };
  const TopTransformationReducer = (state = TopState, action) => {
    switch (action.type) {
      case FETCH_TOP_TRANSFORMATION_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_TOP_TRANSFORMATION_SUCCESS:
            return {
              ...state,
              loading: false,
              topTransfomation: action.payload,
            };
      case FETCH_TOP_TRANSFORMATION_ERROR: 
        return{
            ...state,
            loading: false,
            error: action.payload
      }
      default:
        return state;
    }
  };

  export default TopTransformationReducer