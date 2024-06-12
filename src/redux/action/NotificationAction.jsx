import api from "../api/api";
import {FETCH_NOTIFICATION_REQUEST, FETCH_NOTIFICATION_SUCCESS, FETCH_NOTIFICATION_ERROR, DELETE_NOTIFICATION_REQUEST, DELETE_NOTIFICATION_SUCCESS, DELETE_NOTIFICATION_ERROR ,CLEAR_NOTI_STATE, POST_NOTIFICATION_REQUEST, POST_NOTIFICATION_SUCCESS, POST_NOTIFICATION_ERROR} from "../types/type"

  export const fetchNotiRequest = () => {
    return {
      type: FETCH_NOTIFICATION_REQUEST,
    };
  };
  export const fetchNotiSuccess = (posts) => {
    return {
      type: FETCH_NOTIFICATION_SUCCESS,
      payload: posts,
    };
  };
  export const fetchNotiError = (err) => {
    return {
      type: FETCH_NOTIFICATION_ERROR,
      payload: err,
    };
  };
  export const clearState = () => {
    return {
      type : CLEAR_NOTI_STATE
    }
  }
  export const fetchNoti = () => {
    return (dispatch) => {
        dispatch(fetchNotiRequest());
        api.get(`/api/notification/user?id=${localStorage.getItem("currentUser")}`)
        .then((res)  => {
            dispatch(fetchNotiSuccess(res.data))
        })
        .catch((err) => {
            dispatch(fetchNotiError(err))
        })

    }
  }

  export const acceptOrder = (data) => {
      return (dispatch) => {
        api.post("/api/notification/orderAccept" , data)
        .then(() => {
          console.log("SUccess")
          dispatch(clearState() , dispatch(fetchNoti()))
        })
        .catch((err) => {console.log(err)})
      }
  }
  export const denyOrder = (data) => {
    return (dispatch) => {
      api.post("/api/notification/orderDeny", data)
      .then(() => {dispatch(clearState() , dispatch(fetchNoti()))})
      .catch((err) => {console.log(err)})
    }
  }

  //delete action
  export const deleteNotiRequest = () => {
    return{
      type : DELETE_NOTIFICATION_REQUEST
    }
  }
  export const deleteNotiSuccess = () => {
    return{
      type : DELETE_NOTIFICATION_SUCCESS
    }
  }
  export const deleteNotiError = (err) => {
    return{
      type : DELETE_NOTIFICATION_ERROR,
      payload: err
    }
  }
  export const deleteNofitication = (ids) => {
    return (dispatch) => {
      dispatch(deleteNotiRequest())
      api.delete("/api/notification", {
        data: { "notificationId": ids }
      })
      .then(() => {
        dispatch(clearState(), dispatch(fetchNoti()))
      })
      .catch((err) => {
        console.log(err)
      })
    }
  }
  
  export const postNotificationRequest = () => {
    return{
      type : POST_NOTIFICATION_REQUEST
    }
  }
  export const postNotificationSuccess = () => {
    return{
      type : POST_NOTIFICATION_SUCCESS
    }
  }
  export const postNotificationError = (err) =>{
    return{
      type : POST_NOTIFICATION_ERROR,
      payload: err
    }
  }
  export const postNotification = (newData) => {
    return (dispatch) =>{
      dispatch(postNotificationRequest())
      api.post('/api/notification',newData)
      .then(() => {
        dispatch(clearState() , dispatch(fetchNoti()))
      })
      .catch((err) => {
        dispatch(postNotificationError(err))
      })
    }
  }
  export const postNotificationCommunicate = (newData) => {
    return (dispatch) =>{
      dispatch(postNotificationRequest())
      api.post('/api/notification/communicate',newData)
      .then(() => {
        dispatch(clearState() , dispatch(fetchNoti()))
      })
      .catch((err) => {
        dispatch(postNotificationError(err))
      })
    }
  }

  export const seen = (id) => {
    return (dispatch) => {
      api.post(`/api/notification/seen/${id}`)
    }
  }