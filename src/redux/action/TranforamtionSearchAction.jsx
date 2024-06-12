import {FETCH_TRANSFORMATION_BY_SEARCH_REQUEST, FETCH_TRANSFORMATION_BY_SEARCH_SUCEESS, FETCH_TRANSFORMATION_BY_SEARCH_ERROR, CLEAN_TRANSFORMATION_BY_SEARCH} from "../types/type"
import api from "../api/api"

export const fetchTransforamtionBySearchRequest = (data) => {
    return {
        type: FETCH_TRANSFORMATION_BY_SEARCH_REQUEST,
        payload : data
    }
}
export const fetchTransforamtionBySearchSuccess = (data) => {
    return {
        type: FETCH_TRANSFORMATION_BY_SEARCH_SUCEESS,
        payload : data,
    }
}
export const fetchTransforamtionBySearchError = (err) => {
    return {
        type: FETCH_TRANSFORMATION_BY_SEARCH_ERROR,
        payload : err
    }
}
export const clearState = () =>{
    return {
        type : CLEAN_TRANSFORMATION_BY_SEARCH
    }
}

export const fetchTransforamtionBySearch = (newData) => {
    console.log(newData)
    return (dispatch) =>{
        dispatch(fetchTransforamtionBySearchRequest(newData))
        api.post("api/transformation/search", newData)
        .then((res) => {
            dispatch(fetchTransforamtionBySearchSuccess(res.data))
        })
        .catch((err) => {
            dispatch(fetchTransforamtionBySearchError(err))
        })
    }
}