import {FETCH_CART_REQUEST, ADD_CART_SUCCESS,REMOVE_CART_SUCCESS,POST_CART_SUCCESS} from "../types/type"

const CartState = {
    loading: true,
    cart: [],
    error: "",
  };
  const CartReducer = (state = CartState, action) => {
    switch (action.type) {
      case FETCH_CART_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case ADD_CART_SUCCESS:
        return{
            ...state,
            cart: [...state.cart, action.payload],
        }
      case REMOVE_CART_SUCCESS: 
        return{
          ...state,
          cart : state.cart.filter(obj => obj.id != action.payload)
        }
      default:
        return state;
    }
  };
  export default CartReducer;