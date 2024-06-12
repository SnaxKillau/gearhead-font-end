import {FETCH_TRANSFORMATION_BY_BRAND_REQUEST , FETCH_TRANSFORMATION_BY_BRAND_SUCCESS, FETCH_TRANSFORMATION_BY_BRAND_ERROR, CLEAN_TRANSFORMATION_BY_BRAND } from "../types/type"

const TransfomationByBrandState = {
    loading: true,
    transfomationByBrand: [],
    pageIndex : 0,
    error: "",
  };
  const TransfomationByBrandReducer = (state = TransfomationByBrandState, action) => {
    switch (action.type) {
      case FETCH_TRANSFORMATION_BY_BRAND_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_TRANSFORMATION_BY_BRAND_SUCCESS:
            return {
              ...state,
              loading: false,
              pageIndex: action.index,
              transfomationByBrand: action.payload,
            };
      case FETCH_TRANSFORMATION_BY_BRAND_ERROR: 
        return{
            ...state,
            loading: false,
            error: action.payload
      }
      case CLEAN_TRANSFORMATION_BY_BRAND:
        return{
          ...state,
          transfomationByBrand: [],
          error: "",
          pageIndex: 0
        }
      default:
        return state;
    }
  };

  export default TransfomationByBrandReducer