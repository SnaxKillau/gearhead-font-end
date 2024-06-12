import {FETCH_INVOICE_LIST_REQUEST, FETCH_INVOICE_LIST_SUCCESS, FETCH_INVOICE_LIST_ERROR} from "../types/type"
import api from "../api/api"

export const fetchInvoiceListRequest = () => {
    return {
        type : FETCH_INVOICE_LIST_REQUEST
    }
}
export const fetchInvoiceListSuccess = (data) => {
    return {
        type : FETCH_INVOICE_LIST_SUCCESS,
        payload : data
    }
}
export const fetchInvoiceListError = (err) => {
    return {
        type : FETCH_INVOICE_LIST_ERROR,
        payload : err
    }
}
export const fetchInvoiceList = () => {
    return (dispatch) => {
        dispatch(fetchInvoiceListRequest())
        api.get(`/api/invoice/user/${localStorage.getItem("currentUser")}`)
        .then((res) => {
            console.log(res.data)
            dispatch(fetchInvoiceListSuccess(res.data))
        })
        .catch((err) => {
            dispatch(fetchInvoiceListError(err))
        })
    }
}