import {FETCH_INVOICE_LIST_REQUEST, FETCH_INVOICE_LIST_SUCCESS, FETCH_INVOICE_LIST_ERROR} from "../types/type"

const InvoiceListState = {
    loading: true,
    invoice: [],
    error:"",
  };
  const InvoiceListReducer = (state = InvoiceListState
    , action) => {
    switch (action.type) {
      case FETCH_INVOICE_LIST_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_INVOICE_LIST_SUCCESS:
        return{
            ...state,
            loading : false,
            invoice : action.payload
        }
      case FETCH_INVOICE_LIST_ERROR: 
        return{
          ...state,
          loading : false,
          error: action.payload
        }
      default:
        return state;
    }
  };
  export default InvoiceListReducer;