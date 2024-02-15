import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Navbar from './NavBar'
import heart from "./image/heart.png"

import porsche from "./image/back-porsche.jpeg"
import porsche2 from "./image/porche911.jpeg"


import gas from "./image/gas-station.png"
import co from "./image/co.png"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import './style.css';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { motion } from "framer-motion"
import { type } from 'os';
import porches from "./image/porsche_918.png";
import HorizontalScroll from './HorizontalScroll';


type btnTriger ={
    destroyed : boolean
} 
function ProductDetail() {

    const [thumbsSwiper, setThumbsSwiper] = useState<btnTriger>();
    const [detail , setDetail] = useState<boolean>(false)
    const [performance , setPerfromanc] = useState<boolean>(false)
    const [fuelText , setFuelText] = useState<boolean>(false)
    const [buy ,setBuy] = useState<boolean>(false)


  return (
    <div >
         <div className='bg-black h-14'>
              <Navbar></Navbar>
         </div>
         <HorizontalScroll/>
        <div className=' md:h-screen  border-t-2'>
    
              <div className=' grid grid-cols-1 md:grid-cols-3 md:mt-10 h-1/2'>

              <div className=' md:col-span-2 h-96 md:h-1/2 m-10 shadow-sm p-5 shadow-red-800'>

                    <Swiper
                        style={{
                        // @ts-ignore */
                        '--swiper-navigation-color': '#fff',
                        '--swiper-pagination-color': '#fff',
                        }}
                        spaceBetween={10}
                        navigation={true}
                        autoplay={{ delay: 10 }}
                        // @ts-ignore */
                        thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper2"
                    >
                        <SwiperSlide>
                        <img src={porsche} />
                        </SwiperSlide>
                        <SwiperSlide>
                        <img src={porsche2} />
                        </SwiperSlide>

                        
                    </Swiper>
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        spaceBetween={10}
                        slidesPerView={4}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                        <img src={porsche} />
                        </SwiperSlide>
                        <SwiperSlide>
                        <img src={porsche2} />
                        </SwiperSlide>

                    </Swiper>
                    </div>
                    <div className='ml-10 md:mt-10 md:ml-0'> 
                      <h1 className=' text-lg font-Fahkwang opacity-50'>Porsche</h1>
                      <h1 className=' text-2xl font-Prosto'>991 GT3 RS</h1>
                      <h1 className=' text-sm font-Pro'> 2023 Full Option</h1>
                      <h1 className=' text-2xl  mt-10 font-Pro'>$ 320 ,000 </h1>
                      <div className=' grid grid-cols-4 mt-10'>
                      <div className=' col-span-3'>
                          {buy ? <motion.img 
                          initial = {{
                            opacity : 10,
                            x:0
                          }}
                          animate = {{
                            x : 100,
                            y: -290,
                            opacity :0
                          }}
                          transition={{
                            duration : 2
                          }}
                          onAnimationComplete={() => setBuy(false)}
                          src = {porches} className=' w-16 absolute right-28'/> : null}
                          <button className=' w-full h-10 bg-black text-cyan-100 font-Kanit rounded-lg' onClick={() => {setBuy(true)}}>Add To Bag</button>  
                           
                      </div>
                      <div>
                      <button className='w-1/2 h-10 border-2 border-black flex justify-center items-center ml-2 rounded-lg'>
                            <img src = {heart} className=' w-5'/>
                          </button>
                      </div>

                         
                    </div>

                    </div>
              
              </div>
           

        </div>
           <div className=' ml-10 mb-10'>
               
                    <button  className=' text-lg mb-5 font-Pro w-full text-start' onClick={() => {setDetail(!detail)}}>
                        THE DETAIL
                    </button>
            
                {  detail ? <motion.div
                className=' mb-5 w-11/12'
                 initial = {{
                    opacity : 0
                  }}
                  animate = {{
                  
                    opacity :10
                  }}
                  transition={{
                    duration : 2
                  }}>
                   <h1 className=' font-bold text-xl'>Overview</h1>
                  <h1>
                  Sports-car specialist Porsche has been crafting impossibly delicious 911 models for decades, but the 2024 911 GT3 and GT3 RS models are its most uncompromised and outrageously quick versions to date. These track-day champs are powered by a naturally aspirated 4.0-liter six-cylinder engine that howls to a 9000 rpm redline. In GT3 guise, the flat-six makes 502 horsepower, but go for the GT3 RS or S/T and it gets juiced to 518 ponies. Parked next to a standard 911, the GT3 models look like entirely different cars, especially the RS, which wears wild aero elements including a giant rear wing
                  </h1>
                  
                  
                  </motion.div> :null}
                  <div className=' w-11/12 h-[2px] bg-gradient-to-bl from-zinc-300 to-sky-900' />
                  
                  
                
            </div>
            
            <div className=' m-10 mb-20'>
                <button onClick={() => {setPerfromanc(!performance)}} className=' text-lg mb-5 font-Pro w-full text-start'>
                    PERFORMANCE
                </button>
               
             {  performance ? <motion.div
                 initial = {{
                    opacity : 0
                  }}
                  animate = {{
                  
                    opacity : 10,
                  }}
                  transition={{
                    duration : 2
                  }}
                  
                  >
                   <h1 className=' font-bold text-xl'>911 GT3 RS</h1>
                   <h1>WLTP*</h1>
                
                   <div className=' grid grid-cols-1  md:grid-cols-5'>
                 
                            <div className='md:flex' onMouseOver={() => {setFuelText(true)}} onMouseLeave={() => {setFuelText(false)}}>
                                <div className=' grid grid-cols-2'>
                                    <img src={gas} className='w-10 mt-2 border-[2px] border-black p-2 rounded-full'/>
                                    <div>
                                        <h1>13,4</h1>
                                        <h1>1/100 km</h1>
                                    </div>
                                </div>                         
                            <div className='md:flex'>
                                <div className=' grid grid-cols-2 md:ml-5'>
                                    <img src={co} className='w-10 mt-2 mr-6'/>
                                    <div>
                                        <h1>305</h1>
                                        <h1> g/km</h1>
                                    </div>                
                                </div>
                                
                            </div>
                        </div>
                        <div className=' md:col-span-2 md:ml-20 mt-10 md:mt-0'>
                            
                                <div className='flex border-b-[3px]'>
                                    <h1 className=' font-bold text-2xl pb-2'>365 kw</h1>
                                     <h1 className=' ml-12 mt-2'>Power(kW)</h1>
                                </div>
                                <div className='flex border-b-[3px]'>
                                    <h1 className=' font-bold text-2xl pb-2' >3,2s</h1>
                                     <h1 className='ml-12 mt-2'>Acceleration 0- 100 km/h</h1>
                                </div>
                                <div className='flex pb-2'>
                                    <h1 className=' font-bold text-2xl'>296 km/h</h1>
                                     <h1 className='ml-12 mt-2'>Top speed</h1>
                                </div>
                            </div>
                      

                        
                   </div>
                   <motion.div className='bg-white relative bottom-14 opacity-0'
                      initial = {{
                        opacity : 0,
                        
                      }}
                      animate = {{  
                        opacity : fuelText ? 10 : 0
                      }}
                      transition={{
                        duration : 1
                      }}
                   >
                     <h1 className=' font-bold'>Fuel consumption combined: 13,4 l/100 km</h1>
                     <h1 className=' font-bold'>CO2-emissions combined (WLTP): 305 g/km</h1>
                   </motion.div>

             
            
                </motion.div> : null}
          
                <div className=' w-11/12 h-[2px] bg-gradient-to-bl from-zinc-300 to-sky-900' />
            </div>
            <div className=' h-20 '>

            </div>
         
          
           
            
    </div>
  )
}

export default ProductDetail