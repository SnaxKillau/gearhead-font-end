import {FETCH_INVOICE_REQUEST, FETCH_INVOICE_SUCCESS, FETCH_INVOICE_ERROR} from "../types/type"

const InvoiceState = {
    loading: true,
    invoice: [],
    error:[],
  };
  const InvoiceReducer = (state = InvoiceState
    , action) => {
    switch (action.type) {
      case FETCH_INVOICE_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_INVOICE_SUCCESS:
        return{
            ...state,
            loading : false,
            invoice : action.payload
        }
      case FETCH_INVOICE_ERROR: 
        return{
          ...state,
          loading : false,
          error: action.payload
        }
      default:
        return state;
    }
  };
  export default InvoiceReducer;