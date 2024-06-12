import {FETCH_TRANSFORMATION_DETAIL_REQUEST , FETCH_TRANSFORMATION_DETAIL_SUCCESS,FETCH_TRANSFORMATION_DETAIL_ERROR, CLEAN_TRANSFORMATION_DETAIL} from "../types/type"

const TransfomationDetailState = {
    loading: true,
    transforamtionDetail: [],
    error: "",
  };
  const TransformationDetailReducer = (state = TransfomationDetailState, action) => {
    switch (action.type) {
      case FETCH_TRANSFORMATION_DETAIL_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_TRANSFORMATION_DETAIL_SUCCESS:
            return {
              ...state,
              loading: false,
              transforamtionDetail: action.payload,
            };
      case FETCH_TRANSFORMATION_DETAIL_ERROR: 
        return{
            ...state,
            loading: false,
            error: action.payload
      }
      case CLEAN_TRANSFORMATION_DETAIL:
        return{
          ...state,
          transforamtionDetail: [],
          error: "",
        }
      default:
        return state;
    }
  };

  export default TransformationDetailReducer;