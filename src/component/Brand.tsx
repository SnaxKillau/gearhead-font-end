import React, { useRef, useState, useEffect } from "react";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import Card from "./Card";
import Navbar from "./NavBar";
import porsche from "./image/porsche.svg";

interface Car {
  id: number;
  description: string;
  src: string;
}

interface CarMap {
  [key: string]: Car[];
}
function Brand() {
  const carData: CarMap = {
    T: [
      {
        id: 1,
        description: "Toyota",
        src: porsche,
      },
      {
        id: 2,
        description: "Tesla",
        src: porsche,
      },
    ],
    F: [
      {
        id: 3,
        description: "Ferrari",
        src: porsche,
      },
      {
        id: 4,
        description: "Ford",
        src: porsche,
      },
    ],
    J: [
      {
        id: 3,
        description: "Ferrari",
        src: porsche,
      },
      {
        id: 4,
        description: "Ford",
        src: porsche,
      },
    ],
    H: [
      {
        id: 3,
        description: "Ferrari",
        src: porsche,
      },
      {
        id: 4,
        description: "Ford",
        src: porsche,
      },
    ], K: [
      {
        id: 3,
        description: "Ferrari",
        src: porsche,
      },
      {
        id: 4,
        description: "Ford",
        src: porsche,
      },
    ],
    KA: [
      {
        id: 3,
        description: "Ferrari",
        src: porsche,
      },
      {
        id: 4,
        description: "Ford",
        src: porsche,
      },
    ],
    Z: [
      {
        id: 3,
        description: "Ferrari",
        src: porsche,
      },
      {
        id: 4,
        description: "Ford",
        src: porsche,
      },
    ],
    A: [
      {
        id: 3,
        description: "Ferrari",
        src: porsche,
      },
      {
        id: 4,
        description: "Ford",
        src: porsche,
      },
    ],
    AS: [
      {
        id: 3,
        description: "Ferrari",
        src: porsche,
      },
      {
        id: 4,
        description: "Ford",
        src: porsche,
      },
    ],
    S: [
      {
        id: 3,
        description: "Ferrari",
        src: porsche,
      },
      {
        id: 4,
        description: "Ford",
        src: porsche,
      },
    ],
  };
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      
      <div className="bg-black h-14">
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
        {Object.keys(carData).map((shortCutName) => (
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
        {Object.entries(carData).map(([key, data]) => (
          <div key={key} id={key}>
            <h1 className=" text-4xl mt-2">{key}</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4">
              {data.map((e) => (
                <div
                  key={e.id}
                  className="grid grid-cols-6 justify-center items-center space-x-3  border-2 h-10 border-gray-200 mr-10 mt-5"
                >
                  <img src={e.src} className=" m-2 w-6" alt={e.description} />
                  <h1>{e.description}</h1>
                </div>
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
