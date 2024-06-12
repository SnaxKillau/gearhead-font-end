import React from "react";
import Navbar from "./NavBar";
import sent from "./image/sent.png";
import inbox from "./image/inbox.png";
import invoice from "./image/iconinvoice.png";
import profile from "./image/profile.png"
import { Link, useNavigate } from "react-router-dom";

function Profile() {
  const nav = useNavigate()
  const logoutBtn = () => {
    localStorage.removeItem("token")
    nav('/login')
  }
  return (
    <div className="h-screen overflow-hidden">
      <div className="bg-black h-20">
        <Navbar></Navbar>
      </div>
      <div className=" h-1/3 bg-custom-radial grid" />
      <div className=" h-full flex justify-center">
        <div className=" bg-white rounded-3xl shadow-lg shadow-red-700 w-3/4 h-[65%] relative bottom-24 flex flex-col">
         <div className=" flex justify-center">
         <img
            src={profile}
            className=" w-36 h-36 rounded-full relative bottom-12 shadow-md shadow-red-700"
          />
         </div>
          <div className=" text-center">
            <h1 className=" text-4xl font-MrDafoe">Phop Versna</h1>
            <h1 className=" mt-2 text-md font-Babas opacity-80">
              hello@gmail.com
            </h1>
          </div>
          <div className=" grid grid-cols-3 mt-10">
            <div className=" flex justify-center items-center">
                <Link to = "/orderList">
                <button>
                <img src = {sent} className=" w-14 opacity-50 hover:opacity-90"/>
                <h1 className=" opacity-100 mt-5 text-xl font-Babas">Order</h1>
                </button>
                </Link>
            </div>
            <div className=" flex justify-center items-center">
                <Link to= "/notification">
                <button>
                <img src = {inbox} className=" w-14 opacity-50 hover:opacity-90"/>
                <h1 className=" opacity-100 mt-5 text-xl font-Babas">Inbox</h1>
                </button>
                </Link>
            </div>
            <div className=" flex justify-center items-center">
                <Link to = "/invoiceList">
                <button>
                <img src = {invoice} className=" w-14 opacity-50 hover:opacity-90"/>
                <h1 className=" opacity-100 mt-5 text-xl font-Babas">Invoice</h1>
                </button>
                </Link>
            </div>
          </div>
              <div className=" flex justify-center items-center mt-5">
              <div className=" flex mt-5 text-lg font-Kanit bg-purple-800 h-10 justify-center text-white rounded-md shadow-purple-950 shadow-lg  w-3/12" onClick={() => {logoutBtn()}}>
                <button>
                  Log Out
                </button>
              </div>
              </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
