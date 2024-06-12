import React, { useEffect, useState } from "react";
import logo from "./image/insider.jpg";
import { Link, useNavigate } from "react-router-dom";
import calender from "./image/calendar.png";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "./type/type";
import { motion } from "framer-motion";
import { fetchNoti, postNotification,acceptOrder,denyOrder } from "../redux/action/NotificationAction";
import send from "../component/image/send.png";
import chat from "../component/image/chatting.png";
import back from "../component/image/back-button.png";

interface Order {
  id: number;
  name: string;
  user_id: number | null;
  source: string;
  imagePath: string;
  created: string | null;
}

interface Message {
  id: number;
  message: string;
  title: string;
  senderUsername: string;
  senderEmail: string;
  receiverId: string;
  senderId: string;
  confirmMessage: boolean;
  accepted: boolean;
  seen: boolean;
  order: Order;
  created: string;
  children: Message[];
}
interface MessageData {
  message: string;
  orderId: number;
  senderId: string;
  receiverId: string;
  confirmMessage: boolean;
  accepted: boolean;
  notificationId: number | null;
  seen: boolean;
  created: string;
}


function InboxDetailMobile() {
  const nav = useNavigate()
  const dispatch = useDispatch<any>();
  const data = useSelector((state: IRootState) => state.noticationReducer);
  const [childNotification, setChildNotification] = useState<Message[]>();
  const [show, setShow] = useState<boolean>(false);
  const [currentNotification, setCurrentNotification] = useState<Message>();
  const [messageData, setMessageData] = useState<MessageData>({
    message: '',
    orderId: 0,
    senderId: '',
    receiverId: '',
    confirmMessage: false,
    accepted: false,
    notificationId: null,
    seen: false,
    created: ''
  });


  const {id } = useParams()
  useEffect(() => {
    if (data.noti.length < 1) {
      dispatch(fetchNoti());
    }
  },[])
  useEffect(() => {
    const notification = data?.noti[0]?.seen.find(
      (item: Message) => item.id.toString() == id
    );
    if(notification == undefined){
      const notification = data?.noti[0]?.unseen.find(
        (item: Message) => item.id.toString() === id
      );
      setCurrentNotification(notification);
      setChildNotification(notification?.children);
    }
    else{
      setCurrentNotification(notification);
      setChildNotification(notification?.children);
    }
  },[data])

  const handleKeyDown = (event:React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      dispatch(postNotification(messageData))
      setChildNotification([])
    }
  };

  const handleSendBtn = () => {
      dispatch(postNotification(messageData))
      setChildNotification([])
  };
  const accept = (data:any) => {
    dispatch(acceptOrder({
      id : data?.order?.id,
      notificationId : data.id,
      senderId : localStorage.getItem("currentUser"),
      created :convertDate(Date.now())
    }))
    nav(-1)
    
  }
  const Deny = (data:any) => {
    dispatch(denyOrder({
      id : data?.order?.id,
      notificationId : data.id,
      senderId : localStorage.getItem("currentUser"),
      created :convertDate(Date.now())
    }))
    nav(-1)
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessageData(prevState => ({
      ...prevState,
      message: event.target.value,
      orderId: currentNotification?.order.id || 0,
      senderId : currentNotification?.senderId || '',
      receiverId: currentNotification?.receiverId || '',
      confirmMessage: false,
      accepted: false,
      notificationId: currentNotification?.id || null,
      seen: false,
      created: convertDate(Date.now())
    }));
  };
  const convertDate = (inputDate:number) => {
    const date = new Date(inputDate);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
    const day = String(date.getDate()).padStart(2, "0");
  
    const formatedDate = `${year}-${month}-${day}`;
    return formatedDate;
  };
  return (
    <div className=" md:hidden bg-white h-[200vh]">
       <button>
            <img
              src={back}
              className="w-10 top-2 left-2 absolute"
              onClick={() => {
                nav(-1);
              }}
            />
          </button>
      <div className=" block border-l-[1.45px] border-gray-200">
      <div>
              <div className="grid grid-cols-2">
                <div className=" flex space-x-4 p-10 items-center">
                  <img src={logo} className=" w-10 rounded-full" />
                  <div className=" grid">
                    <h1 className="  font-MrDafoe">
                      {currentNotification?.senderUsername}
                    </h1>
                    <h1 className=" font-light opacity-70">
                      {currentNotification?.senderEmail}
                    </h1>
                  </div>
                </div>
                <div className=" flex justify-end mr-6 items-center">
                  <img src={calender} className=" opacity-50 w-4" />
                  <h1 className=" opacity-50 ml-2">
                    {currentNotification?.created}
                  </h1>
                </div>
              </div>
              <div className="ml-10">
                <h1 className="text-lg">{currentNotification?.title}</h1>
                <h1 className="mt-4 text-base font-light">
                  {currentNotification?.message}
                </h1>
              </div>
              {currentNotification?.confirmMessage ? (
                <div className=" flex ">
                  <div className=" flex mt-5 ml-10 text-lg font-Kanit  h-10 justify-center border-[1.2px] border-black rounded-md w-3/12">
                    <button className="w-full" onClick={() => {accept(currentNotification)}}>Accept</button>
                  </div>
                  <div className=" flex mt-5 ml-10 text-lg font-Kanit bg-red-700 h-10 justify-center text-white rounded-md w-3/12">
                    <button className="w-full" onClick={() => {Deny(currentNotification)}}>Deny</button>
                  </div>
                </div>
              ) : null}
            </div>
            {childNotification?.map((data: any, index: number) => {
            return (
              <div key = {data.id}>
                <div className="grid grid-cols-2">
                  <div className=" flex space-x-4 p-10 items-center">
                    <img src={logo} className=" w-10 rounded-full" />
                    <div className=" grid">
                      <h1 className="  font-MrDafoe">{data.senderUsername}</h1>
                      <h1 className=" font-light opacity-70">
                        {data.senderEmail}
                      </h1>
                    </div>
                  </div>
                  <div className=" flex justify-end mr-6 items-center">
                    <img src={calender} className=" opacity-50 w-4" />
                    <h1 className=" opacity-50 ml-2">{data.created}</h1>
                  </div>
                </div>
                <div className="ml-10">
                  <h1 className="text-lg">{data.title}</h1>
                  <h1 className="mt-4 text-base font-light">{data.message}</h1>
                </div>
                {data?.confirmMessage ? (
                  <div className=" flex ">
                    <div className=" flex mt-5 ml-10 text-lg font-Kanit  h-10 justify-center border-[1.2px] border-black rounded-md w-3/12">
                      <button className="w-full" onClick={() => {accept(data)}}>Accept</button>
                    </div>
                    <div className=" flex mt-5 ml-10 text-lg font-Kanit bg-red-700 h-10 justify-center text-white rounded-md w-3/12">
                      <button className="w-full" onClick={() => {Deny(data)}}>Deny</button>
                    </div>
                  </div>
                ) : null}
              </div>
            );
          })}
      </div>
      {
          currentNotification ?  <button>
          <img
            src={chat}
            alt="Chat"
            className=" fixed right-10 bottom-10 w-12 bg-green-400 shadow-md shadow-black p-3 rounded-full"
            onClick={() => setShow(!show)}
          />
        </button> : null
         }
          <div>
            {show && (
             <div>
               <motion.input
                onKeyDown={handleKeyDown}
                onChange={handleInputChange}
                initial={{ width: 0 }}
                animate={{ width: 300 }}
                exit={{ width: 0 }}
                transition={{ duration: 0.5 }}
                type="text"
                placeholder="Press Enter to send the message"
                className="h-10 fixed right-28 pl-5 bottom-10 border-2 border-gray-500 rounded-full"
              />
              <button 
              onClick={(() => handleSendBtn())}
              >
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 100 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              src = {send} className= "h-5 fixed right-32 pl-5 bottom-[49px]"/>
              </button>
              </div>
            )}
          </div>
    </div>
  );
}

export default InboxDetailMobile;
