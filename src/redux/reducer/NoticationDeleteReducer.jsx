import { DELETE_NOTIFICATION_REQUEST, DELETE_NOTIFICATION_SUCCESS, DELETE_NOTIFICATION_ERROR } from "../types/type"

const NotiDeleteState = {
    loading: true,
    success: false,
    error: ""
  };
  const NotificationDeleteReducer = (state = NotiDeleteState, action) => {
    switch (action.type) {
      case DELETE_NOTIFICATION_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case DELETE_NOTIFICATION_SUCCESS:
          return {
            ...state,
            loading: false,
            success: true
          };
      case DELETE_NOTIFICATION_ERROR: 
        return{
            ...state,
            loading: false,
            error: action.payload
      }
      default:
        return state;
    }
  };
  export default NotificationDeleteReducer;