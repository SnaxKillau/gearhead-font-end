import React, { useEffect } from "react";
import porches from "./image/porsche_918.png";
import { color , motion } from "framer-motion";

function Card(props: any) {
  return (
    <div className="ml-10 mr-10 h-3/4">
      <div className="h-full bg-gray-100 flex flex-col justify-center items-center shadow-red-400 shadow-lg">
        <h1 className={`mt-5 font-Fahkwang text-lg text-red-600`}>PORSCHE</h1>
        <h1 className=" text-4xl font-Prosto">918 Syder</h1>
        <img className=" w-11/12 h-2/5" src={porches} />
        <div className="grid grid-cols-4">
          <div className=" flex items-center">
            <div className=" flex flex-col mr-4">
              <h1 className="font-Pro">Year</h1>
              <h1>{props.year}</h1>
            </div>
            <div className=" bg-black w-[1.5px] h-14 mr-4" />
          </div>
          <div className="col-span-2 flex flex-col">
            <div className=" flex space-x-2">
              <h1 className=" font-Pro">Power:</h1>
              <h1 className=" font-Pro text-red-700">{props.power} hp</h1>
            </div>
            <div className=" flex space-x-2">
              <h1 className=" font-Pro">Price:</h1>
              <h1 className="font-Pro text-red-700">{props.price} $</h1>
            </div>
            <div className=" flex space-x-2">
              <h1 className=" font-Pro">Unit:</h1>
              <h1 className="font-Pro text-red-500">{props.available_unit}</h1>
            </div>
          </div>
          <div className=" flex items-center justify-center">
            <div className=" flex flex-col mr-4">
              <h1 className="font-Pro text-center">Top</h1>
              <h1 className="font-Pro">Speed</h1>
              <h1 className=" text-center font-Pro text-red-500">{props.top_speed} KM/H</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
