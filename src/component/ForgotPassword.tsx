import React, { useEffect, useState } from "react";
import car from "./image/porscheback.jpeg";
import { Link, useNavigate, useParams } from "react-router-dom";
import mail from "../component/image/email.png"
import Loading from "./Loading";
import api from "../redux/api/api";

function ForgotPassword() {
  const param = useParams();

  const nav = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false)
  const [email , setEmail] = useState<string>("");

  const submitEmail = () => {
    setLoading(true)
    api.post("/auth/forgotPassword", {
      email : email
    })
    .then(() => {
      setLoading(false)
      setSuccess(true)
    })
    .catch((err) => {
      setLoading(false)
      setError(true)
    })
  }
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className=" w-screen">
           {
            success ? <div onClick={() => {setSuccess(false)}}>
            <div className=" absolute inset-0 backdrop-blur z-10"></div>
             <div className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-1/4 h-[27%] rounded-lg bg-white opacity-95">
               <div className=" grid align-middle justify-center mt-10">
                  <div>
                     <img src = {mail} className=" w-10"/>
                  </div>
               </div>
               <div>
                 <h1 className=" text-center mt-5 font-bold text-base"> Email Successfully Send</h1>
                 </div>
           </div> 
            </div> : null
           }
            {
             error ? <div onClick={() => {setError(false)}}>
            <div className=" absolute inset-0 backdrop-blur z-10" ></div>
             <div className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-1/4 h-[27%] rounded-lg bg-white opacity-95">
               <div className=" grid align-middle justify-center mt-10">
                  <div>
                     <img src = {mail} className=" w-10"/>
                  </div>
               </div>
               <div>
                 <h1 className=" text-center mt-5 font-bold text-base text-red-600"> Email isn't exist</h1>
                 </div>
           </div> 
            </div> : null
           }

          <div className=" flex justify-center items-center h-screen overflow-y-hidden bg-gradient-to-r from-slate-50 to-gray-100">
            <div className=" w-full ml-10 mr-10 h-3/4  bg-gradient-to-tr from-slate-50 to-slate-200 grid grid-cols-1 md:grid-cols-2  shadow-red-400 shadow-lg">
              <img
                src={car}
                className=" h-[75%] w-[40%] absolute hidden md:flex"
              />
              <div className=" relative   w-[86%] bg-black opacity-30 hidden md:flex" />
              <div className="flex flex-col mt-10 ml-10 md:ml-0">
                <h1 className=" font-Kanit text-3xl text-red-800">
                  Forget Password
                </h1>
                <h1 className=" font-Kanit text-red-800">
                  Please Enter to got the mail of token
                </h1>
                <div className=" grid grid-cols-1 md:flex  mt-5 text-lg text-red-800">
                  <h1 className="font-Kanit">Email</h1>
                  <input
                    type="text"
                    className=" mr-12 md:mr-0  md:ml-12 focus:outline-red-800 shadow-red-400 shadow-sm p-1 bg-gray-100 border-gray-100 rounded-lg placeholder:text-sm placeholder:pl-2"
                    placeholder="Enter Email"
                    onChange={(e) => {setEmail(e.target.value)}}
                  />
                </div>

                <div className=" flex mt-5 text-lg font-Kanit bg-red-800 h-10 justify-center text-white rounded-md shadow-red-400 shadow-lg  w-3/12">
                  <button onClick={() => {submitEmail()}} className="w-full">
                    Change
                  </button>
                </div>
                <div className=" absolute flex justify-center items-center text-white rounded-full  shadow-red-400 shadow-lg bottom-28 right-14  h-10 w-10 font-Kanit bg-red-800">
                  <h1>07</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ForgotPassword;
