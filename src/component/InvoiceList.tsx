import React from "react";
import Navbar from "./NavBar";
import { useState , useEffect } from "react";
import { useDispatch ,useSelector} from "react-redux";
import { fetchInvoiceList } from "../redux/action/InvoiceListAction"
import { IRootState } from "./type/type";
import { Link } from "react-router-dom";

function InvoiceList() {
    
    const data = useSelector(
        (state: IRootState) => state.invoiceListReducer
      );
    const dispatch = useDispatch<any>()

    useEffect(() => {
        dispatch(fetchInvoiceList())
    },[])
    console.log(data)
  return (
    <div className=" h-screen">
      <div className="bg-black h-20">
        <Navbar></Navbar>
      </div>
      <div className=" bg-[#FFFEF7]">
        <div className="p-10">
          <h1 className=" text-xl md:text-3xl font-bold">Invoice List</h1>
          <h1 className=" mt-2 text-lg font-light">
            Lists of Invoice
          </h1>
        </div>
        <div className=" h-[500px] overflow-y-scroll grid grid-cols-1 md:grid-cols-2">
        {
            data?.invoice.map((e:any) => {
                return (
                    <Link to = {`/invoice/${e.invoiceId}`} className=" rounded-xl shadow-sm shadow-red-700 mt-5 h-20 ml-5 mr-5 p-5 grid grid-cols-2">
                        <div className=" font-bold">
                        <h1>{e.invoiceId}</h1>
                        <h1>{e.name}</h1>
                        </div>
                        <div className=" text-end">
                        <h1>{e.created}</h1>
                        <h1>{e.total?.toLocaleString('en-US', { style: 'currency', currency: 'USD' })} </h1>
                        </div>
                    </Link>
                )
            })
        }
        </div>
        </div>
    </div>
  );
}

export default InvoiceList;
