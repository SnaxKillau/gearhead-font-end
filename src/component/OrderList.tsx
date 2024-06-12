import React, { useRef, useState, useEffect } from "react";
import Navbar from './NavBar'
import { useSelector, useDispatch } from "react-redux";
import { IRootState } from "./type/type";
import { fetchOrder } from "../redux/action/OrderAction"
import { imageApi } from "../redux/api/image";

function OrderList() {
    const dispatch = useDispatch<any>()
    const data = useSelector(
    (state: IRootState) => state.orderReducer
  );
  useEffect(() => {
    dispatch(fetchOrder())
  },[])
  return (
    <div className='h-screen'>
    <div className="bg-black h-20">
        <Navbar></Navbar>
      </div>
      <div className=" bg-[#FFFEF7]">
        <div className="p-10">
          <h1 className=" text-xl md:text-3xl font-bold">Order List</h1>
          <h1 className=" mt-2 text-lg font-light">
            <h1>Sound and Safe</h1>
          </h1>
          <div className=" grid grid-cols-7 mt-5">
          <div className=" col-span-7 md:col-span-7 bg-white mx-8 rounded-3xl mb-10 shadow-lg shadow-red-400">
            <div className="grid grid-cols-6 font-semibold pt-5">
              <div className=" col-span-3 p-2 pl-9">Product</div>
              <div className="pt-2 text-center">Price</div>
              <div className="pt-2 text-center">Condition</div>
              <div className="text-center pt-2">Date</div>
            </div>
          {
            data?.order.map((e:any) => {
                return (
                    <div>
                    <div className="grid grid-cols-6 font-semibold">
                      <div className=" col-span-3 p-2 pl-4">
                        <div className=" flex">
                          <img
                            className=" w-2/12 md:w-3/12 md:h-20 ml-2 rounded-xl opacity-80"
                            src = {imageApi + e.imagePath}
                          />
                         
                          <div className=" flex flex-col justify-center ml-2 md:ml-10">
                            <h1 className="font-normal opacity-80 text-[10px] md:text-[14px]">
                              Brand : {e.name}
                            </h1>
                            <h1 className=" font-semibold opacity-80 text-[10px] md:text-lg">
                              Source : { e.source }
                            </h1>
                            <h1 className=" mt-5 md:text-xs font-light text-[10px]">
                              Username : { e.userName}
                            </h1>
                            <h1 className="md:text-xs font-light text-[10px]">
                              Address: { e.address }
                            </h1>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-center font-normal">
                        <div>{ e.price }</div>
                      </div>
                      <div className="flex items-center justify-center font-medium">
                        <div>
                        {e.accept ? "Accepted" : e.deny ? "Denied" : "Padding"}
                        </div>
                      </div>
                      <div className="flex items-center justify-center font-normal">
                        <div>{ e.created }</div>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <div className="w-11/12 h-[1.5px] bg-black opacity-10"></div>
                    </div>
                  </div>
                )
            })
           }

            </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default OrderList