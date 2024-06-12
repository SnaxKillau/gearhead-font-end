import React, { useState } from "react";
import car from "./image/classicCar.jpeg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import api from "../redux/api/api";
import Loading from "./Loading";

function Login() {
  const [username, setUsername] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const [cPass, setcPass] = useState<string>("");
  const [inCorrectPass, setInCorrectPass] = useState<boolean>(false);
  const [inCorrectComfirmPass, setInCorrectComfirmPass] =
    useState<boolean>(false);
  const nav = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  const checkingComfirmPassword = () => {
      pass == cPass
      ? setInCorrectComfirmPass(false)
      : setInCorrectComfirmPass(true);
  };
  const login = () => {
    checkingComfirmPassword()
    if (pass == cPass) {
      setLoading(true)
      api
        .post("/auth/token", {
          username: username,
          password: pass,
        })
        .then((res) => {
          console.log("Hrllo")
          setLoading(false);
          localStorage.setItem("token", res.data);
          api.get(`/auth/currentUser?token=${res.data}`).then((res) => {
            localStorage.setItem("currentUser", res.data);
            console.log(res.data);
            nav("/");
          });
        })
        .catch((e) => {
          setLoading(false)
        });
    }
  };

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className=" w-screen">
          <div className=" flex justify-center items-center h-screen overflow-y-hidden bg-gradient-to-r from-slate-50 to-gray-100">
            <div className=" w-full ml-10 mr-10 h-3/4  bg-gradient-to-tr from-slate-50 to-slate-200 grid grid-cols-1 md:grid-cols-2  shadow-red-400 shadow-lg">
              <img
                src={car}
                className=" h-[75%] w-[40%] absolute hidden md:flex"
              />
              <div className=" relative   w-[86%] bg-black opacity-30 hidden md:flex" />
              <div className="flex flex-col mt-10 ml-10 md:ml-0">
                <h1 className=" font-Kanit text-3xl text-red-800"> Sign In</h1>
                <h1 className=" font-Kanit text-red-800">
                  Welcome back from GearHead plase enjoy
                </h1>
                <div className=" grid grid-cols-1 md:flex  mt-5 text-lg text-red-800">
                  <h1 className="font-Kanit">Username</h1>
                  <input
                    type="text"
                    className=" mr-12 md:mr-0  md:ml-12 focus:outline-red-800 shadow-red-400 shadow-sm p-1 bg-gray-100 border-gray-100 rounded-lg placeholder:text-sm placeholder:pl-2"
                    placeholder="Enter Username"
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                  />
                </div>

                {/* Checking email */}
                <div className="  grid grid-cols-1 md:flex  mt-5 text-lg text-red-800">
                  <h1 className="font-Kanit">Password</h1>
                  <input
                    type="password"
                    className=" mr-12 md:mr-0  md:ml-12 focus:outline-red-800 shadow-red-400 shadow-sm p-1 bg-gray-100 border-gray-100 rounded-lg placeholder:text-sm placeholder:pl-2"
                    placeholder="Enter Your Password"
                    onChange={(e) => {
                      setPass(e.target.value);
                    }}
                  ></input>
                </div>

                {/* Checking Password */}

                {inCorrectPass ? (
                  <h1 className="font-Kanit text-orange-500">
                    Password is incorrect !
                  </h1>
                ) : null}

                <div className="  grid grid-cols-1 md:flex  mt-5 text-lg text-red-800">
                  <h1 className="font-Kanit">Comfirm Password</h1>
                  <input
                    type="password"
                    className="mr-12 md:mr-0  md:ml-12 focus:outline-red-800 shadow-red-400 shadow-sm p-1 bg-gray-100 border-gray-100 rounded-lg placeholder:text-sm placeholder:pl-2"
                    placeholder="Enter Your Name"
                    onChange={(e) => {
                      setcPass(e.target.value);
                    }}
                  ></input>
                </div>

                {/* Checking password and comfirm password */}

                {inCorrectComfirmPass ?(
                  <h1 className="mt-5 font-Kanit text-orange-500">
                    Comfirm Password is incorrect!
                  </h1>
                ) : null}

                <div className=" flex mt-5 text-lg font-Kanit bg-red-800 h-10 justify-center text-white rounded-md shadow-red-400 shadow-lg  w-3/12">
                  <button
                    onClick={() => {
                      login();
                    }}
                    className="w-full"
                  >
                    Sign In
                  </button>
                </div>

                <div className=" flex mt-5 text-lg">
                  <h1 className="mr-5">Don't have an Account ? </h1>
                  <Link to="/signup" className=" hover:text-red-500 underline">
                    Sign up
                  </Link>
                </div>
                <div className=" flex mt-5 text-lg">
                  <Link to="/forgot-password" className=" hover:text-red-700 text-red-500 underline">
                    Forget Password
                  </Link>
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

export default Login;
