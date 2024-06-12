import React, { useEffect, useState } from "react";
import Navbar from "./NavBar";
import cancle from "../component/image/minus.png";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "./type/type";
import { removeCart } from "../redux/action/CartAction";
import { imageApi } from "../redux/api/image";
import { postBuying } from "../redux/action/BuyAction"
import { useNavigate } from "react-router-dom";

interface Transformation {
  transformation_id: number;
  unit: number;
}
interface TransformationState {
  transformation: Transformation[];
  total: number;
  soldDate: string;
  userId: string | null;
  phone: String;
  address : String;
}

function ShopBag() {
  const nav = useNavigate()
  const dispatch = useDispatch<any>();
  const [total, setTotal] = useState<number>(0);
  const [tax, setTax] = useState<number>(0);
  const [subTotal, setSubTotal] = useState<number>(0);
  const [phone, setPhone] = useState<String>("")
  const [address , setAdress] = useState<String>("")
  const [mainClass, setMainClass] = useState<string>("bg-gray-100 h-screen");
  const [addressTimeout, setAddressTimeout] = useState<NodeJS.Timeout | null>(null);
  const [transformation, setTransformation] = useState<TransformationState>({
    transformation: [],
    soldDate: "2024-03-01",
    total: 0,
    userId: localStorage.getItem("currentUser"),
    phone : "",
    address : "",
  });
  const postState = useSelector(
    (state: IRootState) => state.buyReducer
  );
  const data = useSelector((state: IRootState) => state.cartReducer);
  const buyBtn = () => {
   dispatch(postBuying(transformation))
  };
  useEffect(() => {
    if (data?.cart?.length > 3) {
      setMainClass(`bg-gray-100 h-${data?.cart.length}screen`);
    }
    setTotal(data?.cart?.reduce((x, y) => x + y.total, 0));
  }, []);
  useEffect(() => {
    setTax(total * 0.01);
  }, [total]);
  useEffect(() => {
    setSubTotal(total + tax);
  }, [total, tax]);

  useEffect(() => {
    console.log(postState)
    if(postState.sucesss){
      nav(`/invoice/${postState.product}`)
    }
  },[postState])

  useEffect(() => {
    if (addressTimeout) {
      clearTimeout(addressTimeout);
    }

    const timeoutId = setTimeout(() => {
      setTransformation((prevData) => {
        const transformationMap = new Map(prevData.transformation.map(item => [item.transformation_id, item.unit]));


        data.cart.forEach((e) => {
          transformationMap.set(e.id, e.quatity);
        });

        const uniqueTransformations = Array.from(transformationMap, ([transformation_id, unit]) => ({ transformation_id, unit }));
        console.log(uniqueTransformations)
        return {
          ...prevData,
          transformation: uniqueTransformations,
          total: subTotal,
          address: address,
          phone: phone
        };
      });
     
    }, 1000);

    setAddressTimeout(timeoutId);

    return () => clearTimeout(timeoutId);
  }, [address, phone, subTotal]);
 
  const removeFromCart = (id: number) => {
    dispatch(removeCart(id));
    const cart = data?.cart.filter((e) => e.id == id);
    setTotal(total - cart[0].total);
  };
  return (
    <div className={mainClass}>
      <div className="bg-black h-20">
        <Navbar></Navbar>
      </div>
      <div className=" bg-[#FFFEF7]">
        <div className="p-10">
          <h1 className=" text-xl md:text-3xl font-bold">Shopping Cart</h1>
          <h1 className=" mt-2 text-lg font-light">
            <b>items</b> in shoping Cart
          </h1>
        </div>
        <div className=" grid grid-cols-7">
          <div className=" col-span-7 md:col-span-5 bg-white mx-8 rounded-3xl mb-10 shadow-lg shadow-red-400">
            <div className="grid grid-cols-6 font-semibold pt-5">
              <div className=" col-span-3 p-2 pl-9">Product</div>
              <div className="pt-2 text-center">Price</div>
              <div className="pt-2 text-center">Quatity</div>
              <div className="text-center pt-2">Total Price</div>
            </div>
            {data?.cart?.map((e) => {
              return (
                <div>
                  <div className="grid grid-cols-6 font-semibold">
                    <div className=" col-span-3 p-2 pl-4">
                      <div className=" flex">
                        <img
                          className=" w-4/12 md:w-5/12 md:h-48 ml-2 rounded-xl opacity-80"
                          src={imageApi + e.img}
                        />
                        <button
                          className="absolute w-8 h-8 ml-4 mt-4"
                          onClick={() => {
                            removeFromCart(e.id);
                          }}
                        >
                          <img src={cancle} className=" w-5" />
                        </button>
                        <div className=" flex flex-col justify-center ml-2 md:ml-10">
                          <h1 className="font-normal opacity-80 text-[10px] md:text-[14px]">
                            Brand : {e.brand}
                          </h1>
                          <h1 className=" font-semibold opacity-80 text-[10px] md:text-lg">
                            Model : {e.model}
                          </h1>
                          <h1 className=" mt-5 md:text-xs font-light text-[10px]">
                            Color : {e.color}
                          </h1>
                          <h1 className="md:text-xs font-light text-[10px]">
                            Condition:{e.condition}
                          </h1>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center font-normal">
                      <div>{e.price}</div>
                    </div>
                    <div className="flex items-center justify-center font-normal">
                      <div>{e.quatity}</div>
                    </div>
                    <div className="flex items-center justify-center font-normal">
                      <div>{e.total}</div>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="w-11/12 h-[1.5px] bg-black opacity-10"></div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className=" col-span-7 ml-8 md:ml-0 md:col-span-2 bg-white shadow-lg shadow-red-400 h-[35rem] rounded-3xl mr-8 mb-8">
            <div className="p-5 font-bold text-lg opacity-75">
              Calculated Shipping
            </div>
            <div className="flex justify-center items-center">
              <input
                className=" w-10/12 h-1 bg-slate-50 border-[1px] border-gray-500 rounded-full p-5 font-bold"
                placeholder="Input Your Address"
                onChange={(e:React.ChangeEvent<HTMLInputElement>) => {setAdress(e.target.value)}}
              />
            </div>
            <div className="flex justify-center items-center mt-5">
              <input
                className=" w-10/12 h-1 bg-slate-50 border-[1px] border-gray-500 rounded-full p-5 font-bold"
                placeholder="Input Your Phone Number"
                onChange={(e:React.ChangeEvent<HTMLInputElement>) => {setPhone(e.target.value)}}
              />
            </div>
            <div className="bg-slate-50 h-2/4 mt-8 rounded-xl m-4">
              <h1 className=" p-5 font-bold text-lg">Cart Total</h1>
              <div>
                <div className=" grid grid-cols-2 mt-2 font-light">
                  <h1 className=" text-start p-2 pl-5">Cart Subtotal</h1>
                  <h1 className=" text-end p-2 pl-5">{total}$</h1>
                </div>
                <div className=" grid grid-cols-2 font-light">
                  <h1 className=" text-start p-2 pl-5">Tax</h1>
                  <h1 className=" text-end p-2 pl-5">{tax}$</h1>
                </div>
                <div className=" grid grid-cols-2 font-bold ">
                  <h1 className=" text-start p-2 pl-5">Cart Subtotal</h1>
                  <h1 className=" text-end p-2 pl-5">{subTotal}$</h1>
                </div>
                <div className="flex justify-center items-center mt-5">
                  <button
                    className=" font-bold text-lg w-10/12 bg-black p-2 text-white opacity-80 rounded-full hover:opacity-100 "
                    onClick={() => {
                      buyBtn();
                    }}
                  >
                    Pay
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopBag;
