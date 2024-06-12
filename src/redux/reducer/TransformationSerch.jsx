import {FETCH_TRANSFORMATION_BY_SEARCH_REQUEST, FETCH_TRANSFORMATION_BY_SEARCH_SUCEESS, FETCH_TRANSFORMATION_BY_SEARCH_ERROR, CLEAN_TRANSFORMATION_BY_SEARCH} from "../types/type"
const TransfomationBySearchState = {
    loading: true,
    transfomationBySearch: [],
    searchData : [],
    sucess : false,
    error: "",
  };
  const TransfomationBySearchReducer = (state = TransfomationBySearchState, action) => {
    switch (action.type) {
      case FETCH_TRANSFORMATION_BY_SEARCH_REQUEST:
        return {
          ...state,
          loading: true,
          searchData : action.payload
        };
      case FETCH_TRANSFORMATION_BY_SEARCH_SUCEESS:
            return {
              ...state,
              loading: false,
              sucess : true,
              transfomationBySearch: action.payload,
            };
      case FETCH_TRANSFORMATION_BY_SEARCH_ERROR: 
        return{
            ...state,
            loading: false,
            error: action.payload
      }
      case CLEAN_TRANSFORMATION_BY_SEARCH:
        return{
          ...state,
          sucess : false,
          transfomationBySearch: [],
          error: "",
        }
      default:
        return state;
    }
  };

  export default TransfomationBySearchReducer