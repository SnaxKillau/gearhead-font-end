import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./NavBar";
import { Link } from "react-router-dom";
import logo from "./image/insider.jpg";
import calender from "./image/calendar.png";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchNoti,
  deleteNofitication,
  postNotification,
  acceptOrder,
  denyOrder,
  clearState,
  seen,
  postNotificationCommunicate,
} from "../redux/action/NotificationAction";
import { IRootState } from "./type/type";
import deleteIcon from "../component/image/folder.png";
import chat from "../component/image/chatting.png";
import send from "../component/image/send.png";
import plusMail from "../component/image/mail.png";
import profile from "../component/image/profile.png";

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
interface MessageCommunicate {
  message: string;
  senderId: string;
  receiverId: string;
  confirmMessage: boolean;
  accepted: boolean;
  notificationId: number | null;
  seen: boolean;
  created: string;
}

function NotificationDetail() {
  const dispatch = useDispatch<any>();
  const data = useSelector((state: IRootState) => state.noticationReducer);
  const [childNotification, setChildNotification] = useState<Message[]>();
  const [currentNotification, setCurrentNotification] =
    useState<Message | null>();
  const [mainClass, setMainClass] = useState<string>("bg-[#FFFEF7]");
  const [deleteList, setDeleteList] = useState<number[]>([]);
  const [notificationClick, setNoticationClick] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);
  const [mailShow, setMailShow] = useState<boolean>(false);
  const [selectedButton, setSelectedButton] = useState<number>();
  const [messageData, setMessageData] = useState<MessageData>({
    message: "",
    orderId: 0,
    senderId: "",
    receiverId: "",
    confirmMessage: false,
    accepted: false,
    notificationId: null,
    seen: false,
    created: "",
  });
  const [communicateData, setCommunicateData] = useState<MessageCommunicate>({
    message: "",
    senderId: "",
    receiverId: "",
    confirmMessage: false,
    accepted: false,
    notificationId: null,
    seen: false,
    created: "",
  });

  useEffect(() => {
    dispatch(clearState());
    dispatch(fetchNoti());
  }, []);

  useEffect(() => {
    if (data.noti[0]?.seen.length + data.noti[0]?.unseen.length < 4) {
      setMainClass("bg-[#FFFEF7] h-screen");
    } else {
      setMainClass("bg-[#FFFEF7]");
    }
  }, [data]);

  useEffect(() => {
    if (
      currentNotification &&
      currentNotification.children.length > 3 &&
      data.noti[0]?.seen.length + data.noti[0]?.unseen.length < 4
    ) {
      setMainClass("bg-[#FFFEF7]");
    } else if (data.noti[0]?.seen.length + data.noti[0]?.unseen.length > 4) {
      setMainClass("bg-[#FFFEF7]");
    } else {
      setMainClass("bg-[#FFFEF7] h-[120vh]");
    }
  }, [currentNotification]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      if (messageData.notificationId != null) {
        dispatch(postNotification(messageData));
      } else {
        dispatch(postNotificationCommunicate(communicateData));
      }
      setChildNotification([]);
      setCurrentNotification(null);
      setShow(false);
    }
  };

  const handleSendBtn = () => {
    if (messageData.notificationId != null) {
      dispatch(postNotification(messageData));
    } else {
      dispatch(postNotificationCommunicate(communicateData));
    }
    setChildNotification([]);
    setCurrentNotification(null);
    setShow(false);
  };
  const handleInputMassageChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setCommunicateData((prevState) => ({
      ...prevState,
      message: event.target.value,
      senderId: localStorage.getItem("currentUser") || "",
      receiverId: "Mw==",
      confirmMessage: false,
      accepted: false,
      notificationId: null,
      seen: false,
      created: convertDate(Date.now()),
    }));
  };
  const sendBtn = () => {
    dispatch(postNotificationCommunicate(communicateData));
    setMailShow(false);
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (currentNotification?.order == undefined) {
      setCommunicateData((prevState) => ({
        ...prevState,
        message: event.target.value,
        senderId: localStorage.getItem("currentUser") || "",
        receiverId: currentNotification?.senderId || "",
        confirmMessage: false,
        accepted: false,
        notificationId: currentNotification?.id || null,
        seen: false,
        created: convertDate(Date.now()),
      }));
    } else {
      setMessageData((prevState) => ({
        ...prevState,
        message: event.target.value,
        orderId: currentNotification?.order.id || 0,
        senderId: localStorage.getItem("currentUser") || "",
        receiverId: currentNotification?.senderId || "",
        confirmMessage: false,
        accepted: false,
        notificationId: currentNotification?.id || null,
        seen: false,
        created: convertDate(Date.now()),
      }));
    }
  };

  // Function to handle button click and change background color
  const handleSeenButtonClick = (id: number) => {
    setSelectedButton(id);
    const notification = data.noti[0].seen.find(
      (item: Message) => item.id === id
    );
    setCurrentNotification(notification);
    setChildNotification(notification?.children);
    setNoticationClick(true);
  };
  const handleUnSeenButtonClick = (id: number) => {
    setSelectedButton(id);
    const notification = data.noti[0].unseen.find(
      (item: Message) => item.id === id
    );
    dispatch(seen(id));
    setCurrentNotification(notification);
    setChildNotification(notification?.children);
    setNoticationClick(true);
  };
  const handleDeleteClick = () => {
    dispatch(deleteNofitication(deleteList));
    setChildNotification([]);
    setCurrentNotification(null);
  };
  const accept = (data: any) => {
    dispatch(
      acceptOrder({
        id: data?.order?.id,
        notificationId: data.id,
        senderId: "Mw==",
        created: convertDate(Date.now()),
      })
    );
  };
  const Deny = (data: any) => {
    dispatch(
      denyOrder({
        id: data?.order?.id,
        notificationId: data.id,
        senderId: "Mw==",
        created: convertDate(Date.now()),
      })
    );
  };
  const convertDate = (inputDate: number) => {
    const date = new Date(inputDate);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
    const day = String(date.getDate()).padStart(2, "0");

    const formatedDate = `${year}-${month}-${day}`;
    return formatedDate;
  };
  return (
    <div className={mainClass}>
      <div className="bg-black h-20">
        <Navbar />
      </div>
      {mailShow ? (
        <div>
          <div
            className=" absolute inset-0 backdrop-blur z-10"
            onClick={() => {
              setMailShow(false);
            }}
          ></div>
          <div className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-11/12 md:w-2/4 h-96 rounded-lg shadow-md shadow-red-700 opacity-95">
            <div className=" grid align-middle justify-center mt-10"></div>
            <div>
              <h1 className="text-center mt-5 font-bold text-base">
                Message to Admin
              </h1>
              <textarea
                className="mr-12 mt-2 md:mt-4 h-32 md:h-32 ml-4 md:ml-6 w-11/12 p-2 focus:outline-red-800 shadow-red-400 shadow-sm bg-gray-100 border-gray-100 rounded-lg placeholder:text-sm placeholder:pl-2"
                placeholder="Enter brand of item"
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                  handleInputMassageChange(e)
                }
              />
              <div className="flex justify-center mt-5">
                <div className="text-lg font-Kanit bg-red-800 h-10 justify-center text-white rounded-md shadow-red-400 shadow-lg w-3/12">
                  <button
                    className="w-full pt-1"
                    onClick={() => {
                      sendBtn();
                    }}
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      <div className="grid md:grid-cols-5">
        <div className=" col-span-2 overflow-y-auto max-h-screen">
          <input
            type="text"
            placeholder="Search..."
            className=" w-10/12 px-4 py-2 m-10 border border-gray-300 rounded-xl shadow-sm shadow-red-200 mb-4"
          />
          <div className=" flex justify-end mr-5">
            <img
              className="w-10 border-[1px] border-black p-2 rounded-xl hover:bg-red-300 shadow-sm shadow-black "
              src={plusMail}
              onClick={() => {
                setMailShow(true);
              }}
            />
            <img
              className="w-10 border-[1px] ml-2 border-black p-2 rounded-xl hover:bg-red-300 shadow-sm shadow-black "
              src={deleteIcon}
              onClick={() => {
                handleDeleteClick();
              }}
            />
          </div>
          {data?.noti[0]?.unseen.map((data: any, index: number) => {
            return (
              <div key={data.id}>
                <button
                  className="hidden w-full h-32 md:grid grid-cols-6 text-start hover:bg-[#F0F0F0]  transition-all duration-200"
                  onClick={() => handleUnSeenButtonClick(data.id)}
                  style={{
                    backgroundColor: selectedButton === index ? "#F0F0F0" : "",
                  }}
                >
                  <div className=" grid justify-center items-center h-full">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      onClick={() => {
                        setDeleteList([...deleteList, data.id]);
                      }}
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                  </div>
                  <div className=" col-span-5 mt-7">
                    <div className=" grid grid-cols-3">
                      <div className=" col-span-2">
                        <div className=" flex space-x-2">
                          {data.senderId ==
                          localStorage.getItem("currentUser") ? (
                            <img
                              src={profile}
                              className=" rounded-full w-5 h-5 mt-[8px]"
                            />
                          ) : (
                            <img
                              src={logo}
                              className=" rounded-full w-5 h-5 mt-[8px]"
                            />
                          )}

                          <h1 className=" opacity-70 text-sm mt-2 font-medium">
                            {data.senderUsername}
                          </h1>
                        </div>
                        <h1 className="mt-2">{data.title}</h1>
                      </div>
                      <div className="h-7 text-center w-24 text-[#A8A8A8] rounded-full opacity-80 pt-1">
                        <h1>{data.created}</h1>
                      </div>
                    </div>
                    <div className="w-64 overflow-hidden">
                      <h1 className="truncate opacity-1000">{data.message}</h1>
                    </div>
                  </div>
                </button>

                {/* This is for the mobile view */}
                <div className=" h-32 mt-5 grid grid-cols-6 text-start md:rounded-3xl hover:bg-[#F2EEEB]  transition-all duration-200 md:hidden">
                  <div className=" grid justify-center items-center h-full">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      onClick={() => {
                        setDeleteList([...deleteList, data.id]);
                      }}
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                  </div>
                  <Link
                    to={`/notification/mobile/${data.id}`}
                    className=" col-span-5 mt-7"
                  >
                    <div className=" grid grid-cols-3">
                      <div className=" col-span-2">
                        <div className=" flex space-x-2">
                          {data.senderId ==
                          localStorage.getItem("currentUser") ? (
                            <img
                              src={profile}
                              className=" rounded-full w-5 h-5 mt-[8px]"
                            />
                          ) : (
                            <img
                              src={logo}
                              className=" rounded-full w-5 h-5 mt-[8px]"
                            />
                          )}

                          <h1 className=" opacity-70 text-sm mt-2 font-medium">
                            {data.senderUsername}
                          </h1>
                        </div>
                        <h1 className=" font-medium mt-2">{data.title}</h1>
                      </div>
                      <div className="h-7 text-center w-24 text-[#A8A8A8] rounded-full opacity-80 pt-1">
                        <h1>{data.created}</h1>
                      </div>
                    </div>
                    <div className="w-64 overflow-hidden">
                      <h1 className="truncate opacity-50">{data.title}</h1>
                    </div>
                  </Link>
                </div>
              </div>
            );
          })}
          {data?.noti[0]?.seen.map((data: any, index: number) => {
            return (
              <div key={data.id}>
                <button
                  className="hidden w-full h-32 md:grid grid-cols-6 text-start hover:bg-[#F0F0F0]  transition-all duration-200"
                  onClick={() => handleSeenButtonClick(data.id)}
                  style={{
                    backgroundColor:
                      selectedButton === data.id ? "#F0F0F0" : "",
                  }}
                >
                  <div className=" grid justify-center items-center h-full">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      onClick={() => {
                        setDeleteList([...deleteList, data.id]);
                      }}
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                  </div>
                  <div className=" col-span-5 mt-7">
                    <div className=" grid grid-cols-3">
                      <div className=" col-span-2">
                        <div className=" flex space-x-2">
                          {data.senderId ==
                          localStorage.getItem("currentUser") ? (
                            <img
                              src={profile}
                              className=" rounded-full w-5 h-5 mt-[8px]"
                            />
                          ) : (
                            <img
                              src={logo}
                              className=" rounded-full w-5 h-5 mt-[8px]"
                            />
                          )}
                          <h1 className=" opacity-70 text-sm mt-2 font-medium">
                            {data.senderUsername}
                          </h1>
                        </div>
                        <h1 className=" font-medium mt-2">{data.title}</h1>
                      </div>
                      <div className="h-7 text-center w-24 text-[#A8A8A8] rounded-full opacity-80 pt-1">
                        <h1>{data.created}</h1>
                      </div>
                    </div>
                    <div className="w-64 overflow-hidden">
                      <h1 className="truncate opacity-50">{data.message}</h1>
                    </div>
                  </div>
                </button>

                {/* This is for the mobile view */}
                <div className=" h-32 mt-5 grid grid-cols-6 text-start md:rounded-3xl hover:bg-[#F2EEEB]  transition-all duration-200 md:hidden">
                  <div className=" grid justify-center items-center h-full">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      onClick={() => {
                        setDeleteList([...deleteList, data.id]);
                      }}
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                  </div>
                  <Link
                    to={`/notification/mobile/${data.id}`}
                    className=" col-span-5 mt-7"
                  >
                    <div className=" grid grid-cols-3">
                      <div className=" col-span-2">
                        <div className=" flex space-x-2">
                        {data.senderId ==
                          localStorage.getItem("currentUser") ? (
                            <img
                              src={profile}
                              className=" rounded-full w-5 h-5 mt-[8px]"
                            />
                          ) : (
                            <img
                              src={logo}
                              className=" rounded-full w-5 h-5 mt-[8px]"
                            />
                          )}
                          <h1 className=" opacity-70 text-sm mt-2 font-medium">
                            {data.senderUsername}
                          </h1>
                        </div>
                        <h1 className=" font-medium mt-2">{data.title}</h1>
                      </div>
                      <div className="h-7 text-center w-24 text-[#A8A8A8] rounded-full opacity-80 pt-1">
                        <h1>{data.created}</h1>
                      </div>
                    </div>
                    <div className="w-64 overflow-hidden">
                      <h1 className="truncate opacity-50">{data.title}</h1>
                    </div>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className=" col-span-3 hidden md:block border-l-[1.45px] border-gray-200 overflow-y-auto max-h-screen">
          {notificationClick ? (
            <div>
              <div className="grid grid-cols-2">
                <div className=" flex space-x-4 p-10 items-center">
                  {currentNotification?.senderId ==
                  localStorage.getItem("currentUser") ? (
                    <img src={profile} className=" w-10 rounded-full" />
                  ) : (
                    <img src={logo} className=" w-10 rounded-full" />
                  )}
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
                    <button
                      className="w-full"
                      onClick={() => {
                        accept(currentNotification);
                      }}
                    >
                      Accept
                    </button>
                  </div>
                  <div className=" flex mt-5 ml-10 text-lg font-Kanit bg-red-700 h-10 justify-center text-white rounded-md w-3/12">
                    <button
                      className="w-full"
                      onClick={() => {
                        Deny(currentNotification);
                      }}
                    >
                      Deny
                    </button>
                  </div>
                </div>
              ) : null}
            </div>
          ) : null}
          {childNotification?.map((data: any, index: number) => {
            return (
              <div key={data.id}>
                <div className="grid grid-cols-2">
                  <div className=" flex space-x-4 p-10 items-center">
                    {data?.senderId == localStorage.getItem("currentUser") ? (
                      <img src={profile} className=" w-10 rounded-full" />
                    ) : (
                      <img src={logo} className=" w-10 rounded-full" />
                    )}
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
                      <button
                        className="w-full"
                        onClick={() => {
                          accept(data);
                        }}
                      >
                        Accept
                      </button>
                    </div>
                    <div className=" flex mt-5 ml-10 text-lg font-Kanit bg-red-700 h-10 justify-center text-white rounded-md w-3/12">
                      <button
                        className="w-full"
                        onClick={() => {
                          Deny(data);
                        }}
                      >
                        Deny
                      </button>
                    </div>
                  </div>
                ) : null}
              </div>
            );
          })}
          {currentNotification ? (
            <button>
              <img
                src={chat}
                alt="Chat"
                className=" fixed right-10 bottom-10 w-12 bg-green-400 shadow-md shadow-black p-3 rounded-full"
                onClick={() => setShow(!show)}
              />
            </button>
          ) : null}
          <div>
            {show && (
              <div>
                <motion.input
                  onKeyDown={handleKeyDown}
                  onChange={handleInputChange}
                  initial={{ width: 0 }}
                  animate={{ width: 600 }}
                  exit={{ width: 0 }}
                  transition={{ duration: 0.5 }}
                  type="text"
                  placeholder="Press Enter to send the message"
                  className="h-10 fixed right-28 pl-5 bottom-10 border-2 border-gray-500 rounded-full"
                />
                <button onClick={() => handleSendBtn()}>
                  <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 100 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    src={send}
                    className="h-5 fixed right-32 pl-5 bottom-[49px]"
                  />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotificationDetail;
