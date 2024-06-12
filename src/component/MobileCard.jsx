import React from "react";
import porches from "./image/porsche_918.png";
import { imageApi } from "../redux/api/image";

function MobileCard(props) {
  return (
    <div className="inline-block px-3">
      <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-red-400 shadow-lg mt-10 bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out text-center">
        <h1 className={`mt-5 font-Fahkwang text-sm text-red-600`}>{props.brand}</h1>
        <h1 className=" text-xl font-Prosto">{props.model}</h1>
        <img className=" w-96 h-20 mt-10 z-10" src={imageApi + props.image} />
        <div className=" grid grid-cols-2">
          <div className=" flex space-x-2 justify-center items-center">
            <h1 className=" font-bold">Price</h1>
            <h1>{props.price}</h1>
          </div>
          <div className=" flex space-x-2 justify-center items-center">
            <h1 className=" font-bold">Unit</h1>
            <h1>{props.available_unit}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileCard;
