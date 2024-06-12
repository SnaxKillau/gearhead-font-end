import React, { useRef, useState, useEffect } from "react";
import Navbar from "./NavBar";
import HorizontalScroll from "./HorizontalScroll";
import logo from "./image/logo.png";
import { motion } from "framer-motion";
import profile from './image/profile.png'
import { toPng } from 'html-to-image';
import { useSelector, useDispatch } from "react-redux";
import { IRootState } from "./type/type";
import { fetchInvoice } from "../redux/action/InvoiceAction"
import { useParams } from "react-router-dom";
interface InvoiceData {
  "name" : string,
  "order" : number,
  "rate" : number,
  "amount": number
}
function Invoice() {


  const data = useSelector(
    (state: IRootState) => state.invoiceReducer
  );
  const param = useParams();
  const dispatch = useDispatch<any>();
  useEffect(() => {
    dispatch(fetchInvoice(param.id))
  },[])
  const elementRef = useRef<HTMLDivElement>(null!);

  const htmlToImageConvert = () => {
    toPng(elementRef.current, { cacheBust: false })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "invoice.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className=" h-screen">
      <div className="bg-black h-20">
        <Navbar />
      </div>
      <HorizontalScroll />

      <div className=" bg-white p-6 pl-10 rounded-xl h-96 md:hidden">
            <h1 className=" font-Kanit text-base">Client Details</h1>
            <div className=" flex space-x-2 mt-4">
                <img src={profile} className="w-10 rounded-full"/>
                <div className=" flex flex-col">
                  <h1 className=" font-Kanit">{data?.invoice?.name}</h1>
                  <h1 className=" opacity-50">{data?.invoice?.email}</h1>
                </div>
            </div>
            <div className="grid grid-cols-2 mt-6 font-Kanit">
                <h1>Phone Number:</h1>
                <h1 className=" opacity-50">{data?.invoice?.phoneNumber}</h1>
                <h1>Address:</h1>
                <h1 className=" opacity-50">{data?.invoice?.address}</h1>
            </div>
           <div className=" flex justify-center items-center mt-10">
           <button className="inline-block mx-auto my-auto" onClick={() => {htmlToImageConvert()}}>Download</button>
           </div>
      </div>
      <div className=" grid md:grid-cols-3  bg-gray-100 overflow-hidden" ref={elementRef}>
        <div className="col-span-2 bg-white md:m-10 rounded-xl p-10">
          <h1 className=" font-Kanit text-xl opacity-80">
            New Invoice : {data?.invoice?.invoiceId}
          </h1>
          <div className=" h-60 bg-[#1C212B] w-full md:h-28 rounded-lg mt-10 grid md:grid-cols-2 p-4 ">
            <div className=" flex flex-row space-x-5">
              <img src={logo} className=" w-10 h-10" />
              <div className=" flex flex-col text-white">
                <h1 className=" font-Kanit text-lg">Insider</h1>
                <h1 className=" opacity-80">insider@gmail.com</h1>
              </div>
            </div>
            <div className=" text-white grid justify-end md:text-end">
              <h1 className=" opacity-80">B building ,rupp phom penh</h1>
              <h1 className=" opacity-80">168 , 69D</h1>
              <h1 className=" opacity-80">168 , 69Sna</h1>
            </div>
          </div>
          <div className=" bg-gray-100 w-full h-40 rounded-lg mt-10 grid grid-cols-2 p-4 ">
            <div>
              <h1 className=" font-Kanit text-lg">Invoice Number</h1>
              <div className=" mt-4 opacity-50 font-medium space-y-1">
                <h1>{data?.invoice?.invoiceId}</h1>
                <h1>Created Date :{ data?.invoice?.created } </h1>
                <h1>Update Date : { data?.invoice?.created }</h1>
              </div>
            </div>
            <div className=" text-end">
              <h1 className=" font-Kanit text-lg">Billed to</h1>
              <div className=" mt-4 opacity-50 font-medium space-y-1">
                <h1> Kon Khmer</h1>
                <h1> Adresss </h1>
              </div>
            </div>
          </div>
          <div>
            <h1 className=" mt-4 font-Kanit text-lg">Invoice Details</h1>
            <h1 className=" opacity-50">Details item with more info</h1>
          </div>
          <table className=" w-full mt-4">
            <thead>
            <tr>
              <th colSpan={2} className=" text-left">ITEM</th>
              <th/>
              <th className=" w-36">ORDER</th>
              <th>RATE</th>
              <th>AMOUNT</th>
            </tr>
            {
              data?.invoice?.transformationSale?.map((e:any , index:number) => {
                return (
                  <motion.tr key={index}
                  initial={{ y: 0, opacity: 0 }} // Adjust initial position based on index
                  animate={{ y: index * 10 , opacity: 1 }}
                  transition={{ duration: 1, delay: index * 0.2 }} 
                  
                  >
                  <td colSpan={2} className="p-3 rounded-sm">
                  <div className="border border-gray-300 p-3 w-full  rounded-lg">{e.name}</div>
                  </td>
                  <td/>
                  <td className=" text-center">
                  <div className="border border-gray3100 p-3 w-20 text-center inline-block rounded-lg">{e.unit}</div>
                  </td>
                  <td className=" text-center ">
                  <div className="border border-gray-300 p-3 w-20 text-center inline-block rounded-lg">{e.price}</div>
                  </td>
                  <td className=" text-center">
                  <div className="border border-gray-300 p-3 w-20 text-center inline-block rounded-lg">{e.total}</div>
                  </td>
    
                </motion.tr>
                )
              })
            }

            </thead>
           
          </table>
          <div className=" mt-24 grid grid-cols-2 space-y-6 font-Kanit bg-[#1C212B] text-white pb-10 rounded-md" >
    
          
            <div className=" mt-6 ml-4 text-xl">
              <h1>សូមអរគុណក្នុងការគាំទ្រ</h1>
            </div>
            <div className=" md:mr-14 grid grid-cols-2">
              <h1 className=" md:pl-20">Subtotal</h1>
              <h1 className=" text-end pr-4 md:pr-0">{data?.invoice?.total?.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</h1>
            </div>
            <div className=" mt-6 ml-4 text-2xl font-MrDafoe">
              <h1>Thank you for support our shop</h1>
            </div>
            <div className="  md:mr-14 grid grid-cols-2">
              <h1 className=" md:pl-20">Discount</h1>
              <h1 className=" text-end pr-4 md:pr-0">0</h1>
            </div>
            <div className=" mt-6 ml-4 text-2xl font-MrDafoe">
              <h1>From Versna</h1>
            </div>
            <div className="  md:mr-14 grid grid-cols-2">
              <h1 className=" md:pl-20">Total</h1>
              <h1 className=" text-end pr-4 md:pr-0">{data?.invoice?.total?.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</h1>
            </div>
          </div>
        </div>
        <div className="hidden bg-white p-6 pl-10 rounded-xl h-96 md:m-10 md:ml-0 md:block">
            <h1 className=" font-Kanit text-base">Client Details</h1>
            <div className=" flex space-x-2 mt-4">
                <img src={profile} className="w-10 rounded-full"/>
                <div className=" flex flex-col">
                  <h1 className=" font-Kanit"> {data?.invoice?.name}</h1>
                  <h1 className=" opacity-50">{data?.invoice?.email}</h1>
                </div>
            </div>
            <div className="grid grid-cols-2 mt-6 font-Kanit">
                <h1>Phone Number:</h1>
                <h1 className=" opacity-50">{data?.invoice?.phoneNumber}</h1>
                <h1>Address:</h1>
                <h1 className=" opacity-50">{data?.invoice?.address}</h1>
            </div>
           <div className=" flex justify-center items-center mt-10">
           <button className="inline-block mx-auto my-auto" onClick={() => {htmlToImageConvert()}}>Download</button>
           </div>
        </div>
      </div>
    </div>
  );
}

export default Invoice;
