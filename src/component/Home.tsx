import Navbar from "./NavBar";
import carshop from "./image/carshop.avif";
import { documentText } from "./variable";

import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import Increase from "./IncreaseNumber";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./style.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { type } from "os";
import FirstPage from "./FirstPage";
import Notification from "./Notification";
import Card from "./Card";
import MobileCard from "./MobileCard";
import BrandCard from "./BrandCard";

type Hover = {
  hover: boolean;
};
function Home() {
  const controls = useAnimation();
  const finalNumber = 100;
  const ref = useRef<HTMLDivElement>(null);

  const secRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: scrollYProgressRef } = useScroll({
    target: ref,
    offset: ["-0.5 1", "0.8 1"],
  });
  const scaleProgress = useTransform(scrollYProgressRef, [0.5, 1], [0.8, 1]);
  const { scrollYProgress: scrollYProgressSecRef } = useScroll({
    target: secRef,
    offset: ["-0.5 1", "0.8 1"],
  });
  const secScaleProgress = useTransform(
    scrollYProgressSecRef,
    [0.5, 1],
    [0.8, 1]
  );
  const [btnHover, setBtnHover] = useState<boolean>(false);

  const setBtnHovered = () => {
    setBtnHover(true);
  };
  const setBtnLeaved = () => {
    setBtnHover(false);
  };

  return (
    <div className="overflow-x-hidden">
      <FirstPage></FirstPage>
      <Navbar />
      <Notification />
      <div>
        <div className="h-screen flex items-center justify-center overflow-hidden">
          <img
            src={carshop}
            className="w-full h-full object-cover"
            alt="Car Shop"
          />
          <motion.h1
            initial={{ x: -1000, opacity: 0 }}
            animate={{ x: 0, opacity: 0.8 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute text-[80px] md:text-[90px] opacity-80 text-white font-Pro "
          >
            TRUENO
          </motion.h1>
          <motion.h1
            
            className="absolute bottom-20 text-[10px] md:text-[12px] opacity-80 text-white font-Pro animate-bounce"
          >
            SCROLL DOWN
          </motion.h1>
          <div className="absolute bottom-[-40px] right-[10.5rem] w-32 h-20 bg-white text-black font-Pro  shadow-lg shadow-white text-lg pt-3">
            <h1 className="pl-8">Partner</h1>
            <div className=" flex pl-12">
              <Increase from={0} to={24} />
            </div>
          </div>
          <div className="absolute bottom-[-40px] right-10 w-32 h-20 bg-black text-white border-l-[1px] border-white  text-lg pt-3 font-Pro shadow-lg shadow-white">
            <h1 className="pl-8">Secure</h1>
            <div className=" flex pl-10">
              <Increase from={0} to={100} />
              <h1> %</h1>
            </div>
          </div>
        </div>
        <div className=" mt-12 md:mt-10 text-center  font-Pro text-xl">
          Top Brand
        </div>
        <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
            <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 animate-left-scroll">
              {[1, 2, 3, 4 , 5].map((item) => (
                <BrandCard item={item}/>
              ))}
            </div>
          </div>
        <div className="flex justify-center items-center">
              <button className=" text-[15px] border-b-2 border-yellow-400 hover:text-red-500 "
              >
                 View all brands
              </button>
        </div>
        <div className="mt-20 ml-20 mb-10 h-48 md:h-screen">
          <div className=" grid grid-cols-1 md:grid-cols-2">
            <h1 className=" font-Pro text-xl">
              New in : Special Price with the high quality product
            </h1>
            <div className="md:flex justify-end align-middle hidden md:mr-20">
              <button className=" border-2 border-black p-3 rounded-lg">
                See More
              </button>
            </div>
          </div>
          <div className="flex overflow-x-scroll pb-10 hide-scroll-bar md:hidden">
            <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10">
              {[1, 2, 3, 4].map((item) => (
                <MobileCard item={item} price={10} available_unit={50} />
              ))}
            </div>
          </div>
          <div className=" flex justify-center align-middle mr-20 md:hidden">
            <button className=" border-2 border-black p-3 rounded-lg">
              See More
            </button>
          </div>

          <motion.div
            className="hidden h-screen mt-10 md:grid  md:grid-cols-3"
            ref={ref}
            style={{
              scale: scaleProgress,
              opacity: scrollYProgressRef,
            }}
          >
            <Card />
            <Card price={12} />
          </motion.div>
        </div>
        <div className=" mt-64 md:mt-20 ml-20 mb-10 md:h-screen">
          <div className=" grid grid-cols-1 md:grid-cols-2">
            <h1 className=" font-Pro text-xl">
              New in : Special Price with the high quality product
            </h1>
            <div className=" md:flex justify-end align-middle hidden md:mr-20">
              <button className=" border-2 border-black p-3 rounded-lg">
                See More
              </button>
            </div>
          </div>
          <motion.div
            className=" h-screen mt-10 md:grid grid-cols-1 md:grid-cols-3 hidden"
            ref={secRef}
            style={{
              scale: secScaleProgress,
              opacity: scrollYProgressSecRef,
            }}
          >
            <Card></Card>
            <Card></Card>
          </motion.div>
          <div className="flex overflow-x-scroll pb-10 hide-scroll-bar md:hidden">
            <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10">
              {[1, 2, 3, 4].map((item) => (
                <MobileCard item={item} price={10} available_unit={50} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className=" flex justify-center align-middle md:hidden">
        <button className=" border-2 border-black p-3 rounded-lg">
          See More
        </button>
      </div>
      <div className=" text-center">
        <h1 className="font-Kanit text-4xl mt-5 md:mt-0">Create Account</h1>
        <h1 className=" text-sm m-5 md:text-md md:m-0">
          Become a GearHead member and unlock exclusive rewards, including free
          delivery, early sale access and more. The more you shop, the more you
          get.
        </h1>
        <button className=" bg-black w-32 rounded-lg h-12 text-cyan-50 mt-4 mb-20 hover:bg-slate-600">
          Create Account
        </button>
      </div>
    </div>
  );
}

export default Home;
