import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import shoping from "./image/shopping-cart.png"
import logo from "./image/logo.png"
import { useSelector } from 'react-redux'
import { IRootState } from "./type/type";



function Navbar() { 
  const data = useSelector((state: IRootState) => state.cartReducer);
  return (
    <nav className="absolute top-0 left-0 p-4 w-full">
    <div className="container mx-auto grid items-center">
      <div className="flex items-center justify-center space-x-8">
        <Link to="/" className="text-white hover:text-gray-300 font-Babas text-lg">Home</Link>
        <Link to="/brands" className="text-white hover:text-gray-300 font-Babas text-lg">Brand</Link>
        <img src={logo} className=' w-16 p-2 hidden md:grid' />
        <Link to="/order" className="text-white hover:text-gray-300 font-Babas text-lg">Order</Link>
        <Link to="/profile" className="text-white hover:text-gray-300 font-Babas text-lg">Profile</Link>
        <Link to = '/shopBag'>
            <div className='w-8 p-2 md:w-10 md:p-2 md:mb-4 bg-white rounded-lg absolute right-6 top-4 md:top-8'>
                <img  src={shoping}/>
                <div className=' absolute bottom-6 left-6 w-4 h-4 md:w-6 md:h-6 md:bottom-8 md:left-8  bg-green-700 rounded-full'>
                  <div className=' flex justify-center'>
                      <h1 className=' text-white text-xs md:mt-1'>{data.cart.length}</h1>
                  </div>
                </div>
            </div>
        </Link>
        
      </div>
     
    </div>
  </nav>
  )
}

export default Navbar