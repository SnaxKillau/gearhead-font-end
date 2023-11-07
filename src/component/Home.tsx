
import Navbar from './NavBar'
import porsche from "./image/back-porsche.jpeg"
import porsche2 from "./image/porche911.jpeg"
import porsche3 from "./image/porsche.jpeg"
import porsche4 from "./image/porsche2.jpeg"
import gtr from "./image/r-34.png"
import gtrback from "./image/r-34back.png"
import lb from "./image/lb-brand.webp"
import {documentText} from './variable'

import React, { useRef, useState, useEffect} from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from "framer-motion"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './style.css';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { type } from "os"


type Hover = {
    hover: boolean
}
function Home() {

  
  const [NumHover , setNumHover] = useState<Hover[]>([
    {
      hover : false
    },
    {
      hover : false
    },
    {
      hover : false
    },
    
    {
      hover : false
    },
  ])

  const setHovered = (index:number) => {
    let newArr = [...NumHover]
    newArr[index].hover = true
    setNumHover(newArr)
    console.log(NumHover)
  }
  const setHoveredLeave = (index:number) => {
    let newArr = [...NumHover]
    newArr[index].hover = false
    setNumHover(newArr)
  }
 
  return (
    <div>
        <Navbar/>
        <div className='mt-24 border-t-2 border-red-200'>
              <div className='h-screen grid  md:grid-cols-2 mt-10'>
                
                 <div className=' grid justify-center items-center ml-20 mr-20'>
                       <div>
                           <h1 className=' font-Kanit text-5xl text-center'>Top Global Brand </h1>
                           <h1 className=' text-center mt-5 font-Roboto opacity-60'>
                           The Porsche engineers knew exactly what their objective was: to make the new 911 GT2 RS the most powerful Porsche for the road. Objective achieved. The watercooled six-cylinder bi-turbo Boxer engine with four-valve technology, delivers its power through the rear axle
                           </h1>
                           <div className=' flex justify-center align-middle mt-5'>
                                  <button className=' border-2 border-black p-3 rounded-lg'>
                                    {
                                      documentText[0][0].btn_explore
                                    }
                                  </button>
                           </div>


                       </div>
                 </div>
                 <div className='grid grid-cols-2 ml-10 mr-10 md:mr-20 md:ml-0  shadow-red-400 shadow-lg'>
                       <img src = {porsche} className=' h-full'/>
                       <img src = {porsche2} className=' h-full'/>
                       <img src = {porsche3} className=' h-full'/>
                       <img src = {porsche4} className=' h-full'/>         
                 </div>
              </div>
              {/* For table and pc view */}
              <div className='h-screen hidden md:grid  md:grid-cols-2 mt-10 '>
                    <div className=' ml-20  shadow-red-400 shadow-lg'>
                       <img  className=' h-full' src= {lb}></img>
                    </div>
                    <div className=' grid justify-center items-center ml-20 mr-20'>
                          <div>
                              <h1 className=' font-Kanit text-5xl text-center'> High Quality Accessories</h1>
                              <h1 className=' text-center mt-5 font-Roboto opacity-60'>
                              Liberty Walk is a car modification company that is known for creating wide body kits for a variety of vehicles. These kits are designed to give cars a more aggressive and sporty look, and they are often used on high-performance vehicles such as sports cars and supercars. The company was founded in Japan in 2007 by Wataru Kato
                              </h1>
                              <div className=' flex justify-center align-middle mt-5'>
                                      <button className=' border-2 border-black p-3 rounded-lg'>
                                        Expolore more
                                      </button>
                              </div>
                          


                       </div>
                 </div>
          
              </div>
              {/* For mobile view */}
              <div className='h-screen grid  md:grid-cols-2 mt-10 md:hidden'>
                
                <div className=' grid justify-center items-center ml-20 mr-20'>
                      <div>
                          <h1 className=' font-Kanit text-5xl text-center'>High Quality Accessories </h1>
                          <h1 className=' text-center mt-5 font-Roboto opacity-60'>
                          Liberty Walk is a car modification company that is known for creating wide body kits for a variety of vehicles. These kits are designed to give cars a more aggressive and sporty look, and they are often used on high-performance vehicles such as sports cars and supercars. The company was founded in Japan in 2007 by Wataru Kato
                          </h1>
                          <div className=' flex justify-center align-middle mt-5'>
                                 <button className=' border-2 border-black p-3 rounded-lg'>
                                   Expolore more
                                 </button>
                          </div>

                          <div className='mt-10'>
                            <img  className=' h-full' src= {lb}></img>
                          </div>
                      </div>
                </div>
       
             </div>
             <div className=' mt-20 ml-20 mb-10 h-screen'>
                    <div className=' grid grid-cols-1 md:grid-cols-2'>
                    <h1 className=' font-Roboto text-xl'>New in : Special Price with the high quality product</h1>
                    <div className=' md:flex justify-end align-middle hidden md:mr-20' >
                                <button className=' border-2 border-black p-3 rounded-lg'>
                                   See More
                                 </button>
                    </div>
                    </div>
                    <div className=' h-screen mt-10 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4'>
                          <div className='ml-10 mr-10 h-4/5'>
                              <motion.div className='h-3/4 bg-gray-100 flex justify-center items-center  shadow-red-400 shadow-lg'
                                   onMouseEnter={() => setHovered(0)}
                                   onMouseLeave={() => setHoveredLeave(0)}
                              >
                              <motion.img src = {gtr} 
                                  initial = {{
                                    translateX : 120
                                  }}
                                  animate = {{
                                    translateX : NumHover[0].hover ? 10 : 120,
                                    opacity : NumHover[0].hover ? 0 : 10
                                  }}
                                  transition={{
                                    duration : 0.5
                                  }}
                                       
                              />
                                 <motion.img src = {gtrback}
                                initial = {{
                                  zIndex : 0
                                }}
                                animate = {{
                                  zIndex: 10,
                                  translateX : NumHover[0].hover ? -120 : 10,
                                  opacity : NumHover[0].hover ? 10 : 0
                                }}
                                transition={{
                                  duration : NumHover[0].hover ? 1 : 0.7
                                }}

                                 />
                             
                              </motion.div>

                                <h1 className=' mt-5 font-bold text-lg'>Nissan</h1>
                                <h1>GTR R34 Vspec</h1>
                                <h1>Type : Brand New</h1>
                                <h1>Price : 20, XXXX$</h1>
                          </div>
                          <div className='ml-10 mr-10 h-4/5'>
                              <motion.div className='h-3/4 bg-gray-100 flex justify-center items-center  shadow-red-400 shadow-lg'
                                   onMouseEnter={() => setHovered(1)}
                                   onMouseLeave={() => setHoveredLeave(1)}
                              >
                              <motion.img src = {gtr} 
                                  initial = {{
                                    translateX : 120
                                  }}
                                  animate = {{
                                    translateX : NumHover[1].hover ? 10 : 120,
                                    opacity : NumHover[1].hover ? 0 : 10
                                  }}
                                  transition={{
                                    duration : 0.5
                                  }}
                                       
                              />
                                 <motion.img src = {gtrback}
                                initial = {{
                                  zIndex : 0
                                }}
                                animate = {{
                                  zIndex: 10,
                                  translateX : NumHover[1].hover ? -120 : 10,
                                  opacity : NumHover[1].hover ? 10 : 0
                                }}
                                transition={{
                                  duration : NumHover[1].hover ? 1 : 0.7
                                }}

                                 />
                              </motion.div>



                                <h1 className=' mt-5 font-bold text-lg'>Nissan</h1>
                                <h1>GTR R34 Vspec</h1>
                          </div>      
                    </div>
                   
             </div>

             <div className=' flex justify-center align-middle mt-5 md:hidden'>
                                      <button className=' border-2 border-black p-3 rounded-lg'>
                                        See more
                                      </button>
              </div>
             <div className='h-screen grid  md:grid-cols-2'>
                
                <div className=' grid justify-center items-center ml-20 mr-20'>
                      <div>
                          <h1 className=' font-Kanit text-5xl text-center'>Top Global Brand </h1>
                          <h1 className=' text-center mt-5 font-Roboto opacity-60'>
                          The Porsche engineers knew exactly what their objective was: to make the new 911 GT2 RS the most powerful Porsche for the road. Objective achieved. The watercooled six-cylinder bi-turbo Boxer engine with four-valve technology, delivers its power through the rear axle
                          </h1>
                          <div className=' flex justify-center align-middle mt-5'>
                                 <button className=' border-2 border-black p-3 rounded-lg'>
                                   {
                                     documentText[0][0].btn_explore
                                   }
                                 </button>
                          </div>


                      </div>
                </div>
                <div className='grid grid-cols-2 ml-10 mr-10 md:mr-20 md:ml-0  shadow-red-400 shadow-lg'>
                      <img src = {porsche} className=' h-full'/>
                      <img src = {porsche2} className=' h-full'/>
                      <img src = {porsche3} className=' h-full'/>
                      <img src = {porsche4} className=' h-full'/>         
                </div>
             </div>
             <div className=' mt-20 ml-20 mb-10 h-screen'>
                    <div className=' grid grid-cols-1 md:grid-cols-2'>
                    <h1 className=' font-Roboto text-xl'>New in : Special Price with the high quality product</h1>
                    <div className=' md:flex justify-end align-middle hidden md:mr-20'>
                                <button className=' border-2 border-black p-3 rounded-lg'>
                                   See More
                                 </button>
                    </div>
                    </div>
                    <div className=' h-screen mt-10 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4'>
                          <div className='ml-10 mr-10 h-4/5'>
                              <motion.div className='h-3/4 bg-gray-100 flex justify-center items-center  shadow-red-400 shadow-lg'
                                   onMouseEnter={() => setHovered(0)}
                                   onMouseLeave={() => setHoveredLeave(0)}
                              >
                              <motion.img src = {gtr} 
                                  initial = {{
                                    translateX : 120
                                  }}
                                  animate = {{
                                    translateX : NumHover[0].hover ? 10 : 120,
                                    opacity : NumHover[0].hover ? 0 : 10
                                  }}
                                  transition={{
                                    duration : 0.5
                                  }}
                                       
                              />
                                 <motion.img src = {gtrback}
                                initial = {{
                                  zIndex : 0
                                }}
                                animate = {{
                                  zIndex: 10,
                                  translateX : NumHover[0].hover ? -120 : 10,
                                  opacity : NumHover[0].hover ? 10 : 0
                                }}
                                transition={{
                                  duration : NumHover[0].hover ? 1 : 0.7
                                }}

                                 />
                             


                              </motion.div>

                                <h1 className=' mt-5 font-bold text-lg'>Nissan</h1>
                                <h1>GTR R34 Vspec</h1>
                                <h1>Type : Brand New</h1>
                                <h1>Price : 20, XXXX$</h1>
                          </div>
                          <div className='ml-10 mr-10 h-4/5'>
                              <motion.div className='h-3/4 bg-gray-100 flex justify-center items-center  shadow-red-400 shadow-lg'
                                   onMouseEnter={() => setHovered(1)}
                                   onMouseLeave={() => setHoveredLeave(1)}
                              >
                              <motion.img src = {gtr} 
                                  initial = {{
                                    translateX : 120
                                  }}
                                  animate = {{
                                    translateX : NumHover[1].hover ? 10 : 120,
                                    opacity : NumHover[1].hover ? 0 : 10
                                  }}
                                  transition={{
                                    duration : 0.5
                                  }}
                                       
                              />
                                 <motion.img src = {gtrback}
                                initial = {{
                                  zIndex : 0
                                }}
                                animate = {{
                                  zIndex: 10,
                                  translateX : NumHover[1].hover ? -120 : 10,
                                  opacity : NumHover[1].hover ? 10 : 0
                                }}
                                transition={{
                                  duration : NumHover[1].hover ? 1 : 0.7
                                }}

                                 />
                              </motion.div>

                                <h1 className=' mt-5 font-bold text-lg'>Nissan</h1>
                                <h1>GTR R34 Vspec</h1>
                          </div>
                          
                  
                         
                          
                    </div>
             </div>
        </div>
        <div className=' flex justify-center align-middle mt-5 md:hidden'>
               <button className=' border-2 border-black p-3 rounded-lg'>
                See More 
                </button>
         </div>
         <div className=' text-center'>
             <h1 className='font-Kanit text-4xl'>Create Account</h1>
              <h1 className=' text-md'>Become a GearHead member and unlock exclusive rewards, including free delivery, early sale access and more.
                  The more you shop, the more you get.</h1>
              <button className=' bg-black w-32 rounded-lg h-12 text-cyan-50 mt-4 mb-20 hover:bg-slate-600'>Create Account</button>
         </div>
        
  
        
  

    </div>
  )
}

export default Home