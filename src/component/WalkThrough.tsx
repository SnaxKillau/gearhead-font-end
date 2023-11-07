import { type } from 'os'
import React, { useState } from 'react'
import car from "./image/classicCar.jpeg"
import { Link } from 'react-router-dom'
import close from "./image/close.png"
import { motion } from "framer-motion"



function WalkThrough() {

    const [yesClass , setYesClass] = useState<string>("ml-9 w-10 h-10 border-2 border-black  text-black font-Kanit rounded-lg mt-5 md:mt-0 shadow-red-400 shadow-lg")
    const [noClass , setNoClass] = useState<string>("ml-9 w-10 h-10 border-2 border-black  text-black font-Kanit rounded-lg mt-5 md:mt-0 mr-3 md:mr-0 shadow-red-400 shadow-lg" )
    const [suv , setSuv] = useState<string>("md:ml-9 w-14 md:w-36 h-10 border-2 border-black  text-black font-Kanit rounded-lg mt-5 md:mt-0 shadow-red-400 shadow-lg")
    const [suvSelect , setSuvSelect] = useState<boolean>(false)
    const [pickupSelect , setPickUpSelect] = useState<boolean>(false)
    const [sportSelect , setSportSelect] = useState<boolean>(false)
    const [vanSelect , setVanSelect] = useState<boolean>(false)
    const [vehicleId , setVehicleId] = useState<number[]>([])


  const yesClick = () => {
    setNoClass(yesClass)
    setYesClass("ml-9 w-10 h-10 font-Kanit rounded-lg bg-purple-800 text-white shadow-purple-950 shadow-sm mt-5 md:mt-0")
  }
  const noClick = () => {
    setYesClass(noClass)
    setNoClass("ml-9 w-10 h-10 font-Kanit rounded-lg bg-purple-800 text-white shadow-purple-950 shadow-sm mt-5 md:mt-0 mr-3")
  }
  const suvClick = () => {
    setSuvSelect(true)
    setVehicleId((prev) => [...prev , 0])
  }
  const pickupClick = () => {
    setPickUpSelect(true)
    setVehicleId((prev) => [...prev , 1])
  }
  const sportClick = () => {
    setSportSelect(true)
    setVehicleId((prev) => [...prev , 2])
  }
  const vanClick = async() => {
    setVanSelect(true)
   setVehicleId((prev) => [...prev , 3])
  }
  
  return (
    <div className=' flex justify-center items-center h-screen overflow-y-hidden bg-gradient-to-r from-slate-50 to-gray-100 '>
    <div className=' w-full ml-10 mr-10 h-3/4  bg-gradient-to-tr from-slate-50 to-slate-200 grid grid-cols-1 md:grid-cols-2  shadow-red-400 shadow-lg'> 
            <img  src = {car} className=' h-[75%] w-[40%] absolute hidden md:flex'/>
            <div className=' relative   w-[86%] bg-black opacity-30 hidden md:flex'/>
            <div className='flex flex-col mt-10 ml-10 md:ml-0'>
            <h1 className=' font-Kanit text-3xl text-red-800'>WalkThrough</h1>
            <div className='flex mt-5 text-lg text-purple-950'>
                      <h1 className='font-Kanit'>Do you owned car ? </h1>
                      <button className={yesClass} onClick={() => {yesClick()}}>Y</button>
                      <button className={noClass} onClick={() => {noClick()}}>N</button>
            </div>
            <div className=' grid  grid-cols-1 md:flex  mt-5 text-lg text-purple-950'>
                      <h1 className='font-Kanit'>What type of car you like ? </h1>        
            </div>
            <div className=' mt-4 grid grid-cols-2 md:grid-cols-4'>
                <motion.div
                    initial = {{
                      opacity :0
                    }}
                    animate = {{
                     
                      opacity : suvSelect ? 10 : 0
                    }}
                    transition={{
                      duration : 0.5
                    }}
                className=' w-16 md:w-36 h-10 grid grid-cols-4 shadow-red-400 shadow-lg font-Kanit text-lg opacity-0'>
                     <div className='flex justify-center items-center col-span-3'>
                          <h1>SUV</h1>
                     </div>
                     <div className='flex justify-center items-center' onClick={() => {setSuvSelect(false)}}>
                          <img className='w-3 h-3' src = {close}/>
                     </div>
                </motion.div>
                   <motion.div
                    initial = {{
                      opacity :0
                    }}
                    animate = {{
                     
                      opacity : pickupSelect ? 10 : 0
                    }}
                    transition={{
                      duration : 0.5
                    }}

                 className=' w-32 md:w-36 h-10 grid grid-cols-4 shadow-red-400 shadow-lg font-Kanit text-lg opacity-0'>
                     <div className='flex justify-center items-center col-span-3'>
                          <h1>Pick Up</h1>
                     </div>
                     <div className='flex justify-center items-center' onClick={() => {setPickUpSelect(false)}}>
                          <img className='w-3 h-3' src = {close}/>
                     </div>
                </motion.div>
                <motion.div
                    initial = {{
                      opacity :0
                    }}
                    animate = {{
                     
                      opacity : sportSelect ? 10 : 0
                    }}
                    transition={{
                      duration : 0.5
                    }}       
                   className=' w-20 md:w-36 h-10 grid grid-cols-4 shadow-red-400 shadow-lg font-Kanit text-lg opacity-0'>
                     <div className='flex justify-center items-center col-span-3'>
                          <h1>Sport</h1>
                     </div>
                     <div className='flex justify-center items-center' onClick={() => setSportSelect(false)}>
                          <img className='w-3 h-3' src = {close}/>
                     </div>
                </motion.div>
                <motion.div
                    initial = {{
                      opacity :0
                    }}
                    animate = {{
                     
                      opacity : vanSelect ? 10 : 0
                    }}
                    transition={{
                      duration : 0.5
                    }}
                 className='w-20 md:w-36 h-10 grid grid-cols-4 shadow-red-400 shadow-lg font-Kanit text-lg opacity-0'>
                     <div className='flex justify-center items-center col-span-3'>
                          <h1>Van</h1>
                     </div>
                     <div className='flex justify-center items-center' onClick={() => {setVanSelect(false)}}>
                          <img className='w-3 h-3' src = {close}/>
                     </div>
                </motion.div>

            </div>
            <div className='grid mr-5 grid-cols-4 md:flex md:mr-48 md:mt-10 text-sm text-purple-950 font-Kanit'>
                    <button className={suv} onClick={() => {suvClick()}}>SUV</button>
                    <button className={suv} onClick={() => {pickupClick()}}>Pick Up</button>
                    <button className={suv} onClick={() => {sportClick()}}>Sport</button>
                    <button className={suv} onClick={() => {vanClick()}}>Van</button>
                
            </div>
                   
              

            </div>

            
    </div>




</div>
  )
}

export default WalkThrough