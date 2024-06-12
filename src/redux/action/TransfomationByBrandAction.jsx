import {FETCH_TRANSFORMATION_BY_BRAND_REQUEST , FETCH_TRANSFORMATION_BY_BRAND_SUCCESS, FETCH_TRANSFORMATION_BY_BRAND_ERROR, CLEAN_TRANSFORMATION_BY_BRAND , FETCH_TRANSFORMATION_DETAIL_REQUEST , FETCH_TRANSFORMATION_DETAIL_SUCCESS,FETCH_TRANSFORMATION_DETAIL_ERROR, CLEAN_TRANSFORMATION_DETAIL} from "../types/type"
import api from "../api/api"

export const fetchTransforamtionByBrandRequest = () => {
    return {
        type: FETCH_TRANSFORMATION_BY_BRAND_REQUEST
    }
}
export const fetchTransforamtionByBrandSuccess = (data, index) => {
    return {
        type: FETCH_TRANSFORMATION_BY_BRAND_SUCCESS,
        payload : data,
        index: index
    }
}
export const fetchTransforamtionByBrandError = (err) => {
    return {
        type: FETCH_TRANSFORMATION_BY_BRAND_ERROR,
        payload : err
    }
}
export const clearState = () => {
    return {
        type : CLEAN_TRANSFORMATION_BY_BRAND
    }
}
export const fetchTransforamtionDetailRequest = () => {
    return {
        type : FETCH_TRANSFORMATION_DETAIL_REQUEST
    }
}
export const fetchTransforamtionDetailSuccess = (data) => {
    return {
        type : FETCH_TRANSFORMATION_DETAIL_SUCCESS,
        payload : data
    }
}
export const fetchTransforamtionDetailError = (err) => {
    return {
        type : FETCH_TRANSFORMATION_DETAIL_ERROR,
        payload : err
    }
}
export const cleanTransforamtionDetail = () => {
    return {
        type : CLEAN_TRANSFORMATION_DETAIL
    }
}
export const fetchTransforamtionByBrand = (brandName) => {
    return (dispatch) => {
        dispatch(fetchTransforamtionByBrandRequest())
        api.get(`/api/transformation/${brandName}?pageNum=1&&pageLimit=4`)
        .then((res) => {
            dispatch(fetchTransforamtionByBrandSuccess(res.data, 1))
        })
        .catch((err) => {
            dispatch(fetchTransforamtionByBrandError(err))
        })
    }
}
export const fetchTransforamtionByBrandWithOtherPage = (brandName, pageNum) =>{
    return (dispatch) => {
        dispatch(clearState())
        dispatch(fetchTransforamtionByBrandRequest())
        api.get(`/api/transformation/${brandName}?pageNum=${pageNum}&&pageLimit=4`)
        .then((res) => {
            dispatch(fetchTransforamtionByBrandSuccess(res.data, pageNum))
        })
        .catch((err) => {
            dispatch(fetchTransforamtionByBrandError(err))
        })
    }
}
export const fetchTransformationDetail = (id) => {
    return (dispatch) => {
        dispatch(fetchTransforamtionDetailRequest())
        api.get(`/api/transformation/detail/${id}`)
        .then((res) => {
            dispatch(fetchTransforamtionDetailSuccess(res.data))
        })
        .catch((err) => {
            dispatch(fetchTransforamtionByBrandError(err))
        })
    }
}