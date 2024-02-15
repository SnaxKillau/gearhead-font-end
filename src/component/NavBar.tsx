import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import shoping from "./image/shopping-cart.png"



function Navbar() { 

  return (
    <nav className="absolute top-0 left-0 p-4 w-full">
    <div className="container mx-auto grid items-center">
      <div className="flex items-center justify-center space-x-8">
        <Link to="#" className="text-white hover:text-gray-300 font-Babas text-lg">Home</Link>
        <Link to="#" className="text-white hover:text-gray-300 font-Babas text-lg">Home</Link>
        <Link to="#" className="text-white hover:text-gray-300 font-Babas text-lg">Home</Link>
        <Link to="#" className="text-white hover:text-gray-300 font-Babas text-lg">Home</Link>
        <Link to="#" className="text-white hover:text-gray-300 font-Babas text-lg">Home</Link>
        <Link to = '#'><img className='w-8 p-2 bg-white rounded-lg absolute right-4 top-4' src={shoping}/></Link>
        
      </div>
     
    </div>
  </nav>
  )
}

export default Navbar