import React, { useRef, useState, useEffect } from "react";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import Card from "./Card";
import Navbar from "./NavBar";
import porsche from "./image/porsche.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchBrandGroup } from "../redux/action/BrandGroupAction";
import { IRootState } from "./type/type";
import { imageApi } from "../redux/api/image";
import { clearState } from "../redux/action/TranforamtionSearchAction"

interface Car {
  id: number;
  description: string;
  src: string;
}

interface CarMap {
  [key: string]: Car[];
}

function Brand() {

  const data = useSelector<IRootState>(state => state.brandGroupReducer)
  useEffect(() => {
    dispatch(fetchBrandGroup())
    dispatch(clearState())
    window.scrollTo(0, 0);
  }, []);
  const dispatch = useDispatch<any>()
 
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      
      <div className="bg-black h-20">
        <Navbar></Navbar>
      </div>
      <div className=" mt-12 ">
        <h1 className=" text-3xl font-Fahkwang opacity-80 text-center">
          Browse by car brand A-Z
        </h1>
        <h4 className=" text-center ml-10 mr-10 xl:ml-80 xl:mr-80 mt-4 ">
          Search alphabetically for your favourite car brand and explore our
          extensive range of makes, models and reviews. Find your perfect match
          from the biggest choice of new and used cars available online.
        </h4>
      </div>
    <div className="mr-2 md:ml-10 mt-10 flex flex-wrap">

        {
        // @ts-ignore
        Object.keys(data?.brand).map((shortCutName) => (
          <a
            key={shortCutName}
            href={`#${shortCutName}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(shortCutName);
            }}
            className="hover:border-black cursor-pointer border-[1px] ml-2 h-10 w-10 border-gray-300 flex justify-center items-center mt-2"
          >
            {shortCutName}
          </a>
        ))}
      </div>
      <div className="ml-12 mt-10">
        {
        // @ts-ignore
        Object.entries(data?.brand).map(([key, data]) => (
          <div key={key} id={key}>
            <h1 className=" text-4xl mt-2">{key}</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4">
              
              {
              // @ts-ignore
              data.map((e) => (
                <Link to = {`/brands/${e.description}/${e.imagePath}`}
                  key={e.id}
                  className="grid grid-cols-6 justify-center items-center space-x-3  border-2 h-14 border-gray-200 mr-10 mt-5"
                >
                  <img src={imageApi + e.imagePath} className=" m-2 w-6" alt={e.description} />
                  <h1>{e.description}</h1>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className=" mt-60">
        Footer
      </div>
    
    </div>
  );
}

export default Brand;
