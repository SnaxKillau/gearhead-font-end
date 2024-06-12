import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Navbar from './NavBar'


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
import { useDispatch, useSelector } from 'react-redux';
import { addtoCart } from "../redux/action/CartAction"
import { IRootState } from './type/type';
import { useParams } from 'react-router-dom';
import { imageApi } from "../redux/api/image";
import { fetchTransformationDetail } from "../redux/action/TransfomationByBrandAction";

type btnTriger ={
    destroyed : boolean
} 
function ProductDetail() {
   const data = useSelector((state: IRootState ) => state.cartReducer)
    const dispatch:any = useDispatch();
    const param = useParams();
    const [thumbsSwiper, setThumbsSwiper] = useState<btnTriger>();
    const [detail , setDetail] = useState<boolean>(false)
    const [performance , setPerfromanc] = useState<boolean>(false)
    const [fuelText , setFuelText] = useState<boolean>(false)
    const [buy ,setBuy] = useState<boolean>(false)
    const [num , setNum] = useState<number>(0)
    const [mainClass , setMainClass] = useState<string>("h-[180vh] md:h-[180vh]")
    const transfomationByBrand = useSelector(
      (state: IRootState) => state.transformationDetailReducer
    );
    useEffect(() => {
      dispatch(fetchTransformationDetail(param.id))
    }, []);
    
    console.log(transfomationByBrand?.transforamtionDetail?.image)
    const pushCart = () => {  
      setBuy(true)
      const someProduct = { id: transfomationByBrand?.transforamtionDetail?.id, brand: transfomationByBrand?.transforamtionDetail?.brand, model : transfomationByBrand?.transforamtionDetail?.model, color:transfomationByBrand?.transforamtionDetail?.color, condition:transfomationByBrand?.transforamtionDetail?.condition, price :transfomationByBrand?.transforamtionDetail?.price ,quatity : 1 , total : transfomationByBrand?.transforamtionDetail?.price, img : transfomationByBrand?.transforamtionDetail?.image[0] };
      dispatch(addtoCart(someProduct));
      console.log(data)
      setNum(num+ 1)
    }
    const btnClick = () => {
      setDetail(!detail)
      setMainClass("h-[280vh] md:h-[200vh]")
    }
    const btnPerformanceClick = () => {
      setPerfromanc(!performance)
      setMainClass("h-[280vh] md:h-[200vh]")
    }
   
    console.log(transfomationByBrand)
  return (
    <div className={mainClass} >
         <div className='bg-black h-20'>
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
                      {
                        transfomationByBrand?.transforamtionDetail?.image?.map((e:any) => {
                          return (
                            <SwiperSlide>
                            <img src={imageApi + e} />
                            </SwiperSlide>
                          )
                        })
                      }
                       

                        
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
                        {
                        transfomationByBrand?.transforamtionDetail?.image?.map((e:any) => {
                          return (
                            <SwiperSlide>
                            <img src={imageApi + e} />
                            </SwiperSlide>
                          )
                        })
                      }

                    </Swiper>
                    </div>
                    <div className='ml-10 md:mt-10 md:ml-0'> 
                      <h1 className=' text-lg font-Fahkwang opacity-50'>{transfomationByBrand?.transforamtionDetail?.brand}</h1>
                      <h1 className=' text-2xl font-Prosto'>{transfomationByBrand?.transforamtionDetail.model}</h1>
                      <h1 className=' text-sm font-Pro'> {transfomationByBrand?.transforamtionDetail.year} {transfomationByBrand?.transforamtionDetail.condition}</h1>
                      <h1 className=' text-2xl  mt-10 font-Pro'>{transfomationByBrand?.transforamtionDetail?.price?.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</h1>
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

                        
                         {
                          transfomationByBrand?.transforamtionDetail?.availableUnit > 0 ?
                          <button className=' w-full h-10 bg-black text-cyan-100 font-Kanit rounded-lg' onClick={() => {pushCart()}}>Add To Bag</button>   :  <button className=' w-full h-10 bg-black text-cyan-100 font-Kanit rounded-lg' disabled = {true}>Out of Shock</button>
                          
                         }
                           
                      </div>
                      <div>
                      </div>

                         
                    </div>

                    </div>
              
              </div>
           

        </div>
           <div className=' ml-10 mb-10 mt-10 md:mt-0'>
               
                    <button  className=' text-lg mb-5 font-Pro w-full text-start' onClick={() => {btnClick()}}>
                        THE DETAIL
                    </button>
            
                {  detail ? <motion.div
                className=' mb-5 w-[87%]'
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
                  {transfomationByBrand?.transforamtionDetail?.descriptions}
                  </h1>
                  
                  
                  </motion.div> :null}
                  <div className=' w-[88%] h-[2px] bg-gradient-to-bl from-zinc-300 to-sky-900' />
                  
                  
                
            </div>
            
            <div className=' m-10 mb-20'>
                <button onClick={() => {btnPerformanceClick()}} className=' text-lg mb-5 font-Pro w-full text-start'>
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
                                        <h1>{transfomationByBrand?.transforamtionDetail?.mpg}</h1>
                                        <h1>1/100 km</h1>
                                    </div>
                                </div>                         
                            <div className='md:flex'>
                                <div className=' grid grid-cols-2 md:ml-5'>
                                    <img src={co} className='w-10 mt-2 mr-6'/>
                                    <div>
                                        <h1>{transfomationByBrand?.transforamtionDetail?.co2}</h1>
                                        <h1> g/km</h1>
                                    </div>                
                                </div>
                                
                            </div>
                        </div>
                        <div className=' md:col-span-2 md:ml-20 mt-10 md:mt-0'>
                            
                                <div className='flex border-b-[3px]'>
                                    <h1 className=' font-bold text-2xl pb-2'>{transfomationByBrand?.transforamtionDetail?.power} kw</h1>
                                     <h1 className=' ml-12 mt-2'>Power(kW)</h1>
                                </div>
                                <div className='flex border-b-[3px]'>
                                    <h1 className=' font-bold text-2xl pb-2' >{transfomationByBrand?.transforamtionDetail?.acceleration}</h1>
                                     <h1 className='ml-12 mt-2'>Acceleration 0- 100 km/h</h1>
                                </div>
                                <div className='flex pb-2'>
                                    <h1 className=' font-bold text-2xl'>{transfomationByBrand?.transforamtionDetail?.top_speed} km/h</h1>
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
                     <h1 className=' font-bold'>Fuel consumption combined: {transfomationByBrand?.transforamtionDetail?.mpg} l/100 km</h1>
                     <h1 className=' font-bold'>CO2-emissions combined (WLTP): {transfomationByBrand?.transforamtionDetail?.co2} g/km</h1>
                   </motion.div>

             
            
                </motion.div> : null}
          
                <div className=' w-11/12 h-[2px] bg-gradient-to-bl from-zinc-300 to-sky-900' />
            </div>
         
          
           
            
    </div>
  )
}

export default ProductDetail