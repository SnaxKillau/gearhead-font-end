import {FETCH_INVOICE_REQUEST, FETCH_INVOICE_SUCCESS, FETCH_INVOICE_ERROR} from "../types/type"
import api from "../api/api"

export const fetchInvoiceRequest = () => {
    return {
        type : FETCH_INVOICE_REQUEST
    }
}
export const fetchInvoiceSuccess = (data) => {
    return {
        type : FETCH_INVOICE_SUCCESS,
        payload : data
    }
}
export const fetchInvoiceError = (err) => {
    return {
        type : FETCH_INVOICE_REQUEST,
        payload : err
    }
}
export const fetchInvoice = (id) => {
    return (dispatch) => {
        dispatch(fetchInvoiceRequest())
        api.get(`/api/invoice/${id}`)
        .then((res) => {
            dispatch(fetchInvoiceSuccess(res.data))
        })
        .catch((err) => {
            dispatch(fetchInvoiceError(err))
        })
    }
}