import React, { useEffect, useState } from 'react'
import door from "./image/doorlock.png"
import { motion, useAnimation} from "framer-motion"
import { useNavigate } from 'react-router-dom';
import curtain1 from "./image/curtain3.jpg"
import curtain2 from "./image/curtain4.jpg"

function FirstPage() {

  const [modifyClass , SetClass] = useState("fixed top-0 left-0 w-screen h-screen flex items-center justify-center overflow-hidden z-50")
  const handleAnimationComplete = () => {
    SetClass("hidden")
  };

  return (

    <div className = {modifyClass}>
    <motion.div className="flex w-screen h-screen">
      {/* Left-up image */}
      <motion.div
        className="flex-grow flex items-center justify-center"
        animate={{ x: -900 }} // Move to the left by 300 pixels
        transition={{ duration: 2 }}
        onAnimationComplete={handleAnimationComplete}
      >
        <img
          src={curtain1}
          alt="Left Up"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Right-up image */}
      <motion.div
        className="flex-grow flex items-center justify-center"
        animate={{ x: 900 }} // Move to the right by 300 pixels
        transition={{ duration: 1.5 }}
      >
        <img
          src={curtain2}
          alt="Right Up"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </motion.div>
  </div>
  )
}

export default FirstPage