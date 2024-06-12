import { POST_NOTIFICATION_REQUEST, POST_NOTIFICATION_SUCCESS, POST_NOTIFICATION_ERROR } from "../types/type"

const NotiDeleteState = {
    loading: true,
    success: false,
    error: ""
};

const NotificationPostReducer = (state = NotiDeleteState, action) => {
    switch (action.type) {
      case POST_NOTIFICATION_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case POST_NOTIFICATION_SUCCESS:
          return {
            ...state,
            loading: false,
            success: true
          };
      case POST_NOTIFICATION_ERROR: 
        return{
            ...state,
            loading: false,
            error: action.payload
      }
      default:
        return state;
    }
  };
  export default NotificationPostReducer