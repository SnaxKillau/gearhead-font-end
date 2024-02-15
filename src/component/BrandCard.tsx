import React from 'react'
import koniseeg from "./image/koeningsegg.png"

function BrandCard(props:any) {
  return (
    <div key={props.item} className="inline-block px-3">
    <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg gird shadow-red-400 shadow-lg mt-10 bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out text-center">
        <div className=' flex justify-center items-center'>
            <img className=" w-20 h-20 mt-20 z-10" src={koniseeg} />
        </div>
        <h1 className="mt-5 font-Pro text-lg">PORSCHE</h1>
    </div>
  </div>
  )
}

export default BrandCard