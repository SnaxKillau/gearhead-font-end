import {FETCH_CART_REQUEST,ADD_CART_SUCCESS,REMOVE_CART_SUCCESS,POST_CART_SUCCESS} from "../types/type"
export const fetchCartRequest = () => {
    return {
        type : FETCH_CART_REQUEST
    }
} 
export const addtoCart = (product) => {
    return{
        type : ADD_CART_SUCCESS,
        payload : product

    }
}
export const removeCart = (id) => {
    return{
        type : REMOVE_CART_SUCCESS,
        payload : id
    }
}