import React, { useEffect, useState } from "react";
import Navbar from "./NavBar";
import HorizontalScroll from "./HorizontalScroll";
import porsche from "./image/porsche.svg";
import Card from "./Card";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import MobileCard from "./MobileCard";
import close from "./image/close.png";
import filter from "./image/filter.png";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { IRootState } from "./type/type";
import back from "../component/image/back-button.png";

function BrandFilter() {
  const [isOpen, setIsOpen] = useState(false);
  const param = useParams();
  const nav = useNavigate();

  const data = useSelector(
    (state: IRootState) => state.transfomationBySearchReducer
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const btnClose = () => {
    setIsOpen(false);
  };
  const btnOpen = () => {
    setIsOpen(true);
  };

  console.log(data.searchData)
  return (
    <div className=" h-auto overflow-x-hidden">
      <div className="bg-black h-20">
        <Navbar />
      </div>
      <div>
        <HorizontalScroll />
        <div className=" flex space-x-10 h-32 items-center border-t-[1px] border-gray-200">
          <button>
            <img
              src={back}
              className="w-10 top-24 left-2 absolute"
              onClick={() => {
                nav(-2);
              }}
            />
          </button>
          <img src={porsche} className=" h-16 ml-8" />
          <h1 className=" font-Kanit text-4xl">Search</h1>
        </div>
      </div>
      {/* For mobile view*/}
      <div className=" bg-gray-100 md:hidden h-screen w-screen">
        <motion.div
          className={`absolute w-screen h-2/3 col-span-2 bg-white  mt-10 p-10 grid justify-center items-center ${
            isOpen ? "" : "hidden"
          }`}
          initial={{ opacity: 0 }} // Initial opacity when component mounts
          animate={{ opacity: isOpen ? 1 : 0 }} // Animate opacity based on visibility
          transition={{ duration: 0.5 }}
        >
          <img
            src={close}
            className=" absolute top-10 right-5 w-5"
            onClick={() => {
              btnClose();
            }}
          />
          <h1 className=" font-light text-3xl">Filters</h1>
          <h1 className="mt-2">Brands</h1>
          <div className=" border-2 border-gray-400 h-10 mt-2 rounded-md w-11/12 pl-2 pt-2" >{data.searchData.brand}</div>
          <h1 className="mt-2">Min prices</h1>
          <div className=" border-2 border-gray-400 h-10 mt-2 rounded-md w-11/12 pl-2 pt-2" >{data.searchData.minPrice}</div>
          <h1 className="mt-2">Max prices</h1>
          <div className=" border-2 border-gray-400  h-10 mt-2 rounded-md w-11/12 pl-2 pt-2" >{data.searchData.maxPrice}</div>
        </motion.div>
        <div className=" flex justify-center">
          <button
            onClick={() => {
              btnOpen();
            }}
            className={`h-10 border-2 flex space-x-4 justify-center items-center border-red-700 w-2/3 mt-10 ${
              isOpen ? "hidden" : ""
            }`}
          >
            <img src={filter} className=" w-5" />
            <h1 className=" font-bold text-red-700 text-lg">Filter</h1>
          </button>
        </div>
        <div className="flex overflow-x-scroll pb-10 hide-scroll-bar md:hidden">
          <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10">
            {data?.transfomationBySearch?.map((item: any, index: number) => (
              <MobileCard
                key={index}
                price={item.price}
                available_unit={item.availableUnit}
                image={item.image[0]}
                brand={item.brand}
                model={item.model}
              />
            ))}
          </div>
        </div>
      </div>

      {/* For pc and table view */}
      <div className="hidden bg-gray-100 md:grid grid-cols-6">
        <div className=" col-span-2 bg-white h-[30rem] mt-10 ml-10 p-10">
          <h1 className=" font-light text-3xl">Filters</h1>
          <h1 className="mt-2">Brands</h1>
          <div className=" border-2 border-gray-400 h-10 mt-2 rounded-md w-10/12 pl-2 pt-2 font-bold" >{data.searchData.brand}</div>
          <h1 className="mt-2">Min prices</h1>
          <div className=" border-2 border-gray-400 h-10 mt-2 rounded-md w-10/12 pl-2 pt-2" >{data.searchData.minPrice}</div>
          <h1 className="mt-2">Max prices</h1>
          <div className=" border-2 border-gray-400 h-10 mt-2 rounded-md w-10/12 pl-2 pt-2">{data.searchData.maxPrice}</div>
        </div>
        <div className=" col-span-4">
          <motion.div className="hidden mt-10 md:grid md:grid-cols-2">
            {data?.transfomationBySearch?.map((e: any, index: number) => {
              return (
                <div className="h-[80vh]" key= {index}>
                  <Link to={`/detail/${e.id}`} key={index}>
                    <Card
                      brand={e.brand}
                      model={e.model}
                      image={e.image[0]}
                      year={e.year}
                      power={e.power}
                      price={e.price}
                      available_unit={e.availableUnit}
                      top_speed={e.top_speed}
                    />
                  </Link>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default BrandFilter;
