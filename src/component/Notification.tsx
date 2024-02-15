import React, { useState } from 'react'
import flag from "./image/blackwhite_flag.webp"
import { motion, useAnimation} from "framer-motion"

function Notification() {

    const [hiddenClass , setHiddenClass] = useState("absolute top-24 md:top-5 right-5 p-4 w-60 h-16 bg-white opacity-90")
    const onAnimationComplete = () => {
        // Set the state to hide the second motion.div after the animation completes
        setHiddenClass("hidden")
      };

  return (
    <motion.div 
    initial={{ x :500, opacity: 0 }}
    animate={{ x: 0, opacity: 0.8 }}
    transition={{ duration: 1, delay: 2.1 }}
    className={hiddenClass}>
        <div className='h-2/3 flex items-center'>
        <img src={flag} className='w-5 h-full object-cover opacity-50'/>
        <h1 className='pl-5 font-Pro text-lg'>New Notification! </h1>
        </div>
        <motion.div
            className='bg-black h-1 mt-4 w-[15rem]'
            initial={{ width: '15rem' }}
            animate={{ width: '0rem' }}
            transition={{ duration: 4 , delay: 3.1 }}
            onAnimationComplete={onAnimationComplete}
            />
    </motion.div>
  )
}

export default Notification