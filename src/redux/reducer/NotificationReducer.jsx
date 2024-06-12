import {FETCH_NOTIFICATION_REQUEST, FETCH_NOTIFICATION_SUCCESS, FETCH_NOTIFICATION_ERROR, CLEAR_NOTI_STATE } from "../types/type"

const NotiState = {
    loading: true,
    noti: [],
    error: "",
  };
  const NotificationReducer = (state = NotiState, action) => {
    switch (action.type) {
      case FETCH_NOTIFICATION_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_NOTIFICATION_SUCCESS:
          const existingNotificationIndex = state.noti.findIndex(notification => notification.id === action.payload.id);
          if (existingNotificationIndex === -1) {
            // Notification does not exist, add it to the state
            return {
              ...state,
              loading: false,
              noti: [...state.noti, action.payload],
            };
      }
      case FETCH_NOTIFICATION_ERROR: 
        return{
            ...state,
            loading: false,
            error: action.payload
      }
      case CLEAR_NOTI_STATE:
        return{
            ...state,
            noti:[]
        }
      default:
        return state;
    }
  };
  export default NotificationReducer;