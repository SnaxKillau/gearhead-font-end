import React, { useState } from 'react'
import logo from "./image/logo.png"
import heart from "./image/heart.png"
import shoping from "./image/shopping-bag.png"
import user from "./image/user.png"
import next from "./image/next.png"
import backicon from "./image/back.png"
import close from "./image/close.png"
import { Link } from 'react-router-dom'



function Navbar() {

    const brand = [
        [
            {
                "name" : "Ferrari"
            },
            {
                "name" : "Lamboghini"
            },
            {
                "name" : "Nissan"
            }
            ,{
                "name" : "Toyota"
            }
        ],
        [
            {
                "name" : "La Ferrari"
            },
            {
                "name" : "Huracan"
            },
            {
                "name" : "R-34"
            }
            ,{
                "name" : "AE 86"
            }
        ]
    ]

    const [show , setShow] = useState("h-96 w-screen mt-6 border-b-[1px] transition ease-in-out duration-500 opacity-0 sticky -z-10 bg-white");


    const [frontGround , setFrontGround] = useState("absolute h-72  border-b-[1px] transition ease-in-out duration-500 opacity-0 -z-10 bg-gray-200");

    const  [index , setIndex] = useState<number>(0)
    const [title , setTitle] = useState<string>("")
    // for link hover 
    const hoverBtn = (text:string , num:number) => {
        setShow("h-96 w-screen mt-6 border-b-[1px] transition ease-in-out duration-500 opacity-100 sticky z-10 bg-white")
        setFrontGround("absolute h-72  border-b-[1px] transition ease-in-out duration-500 opacity-30 sticky bg-gray-200 z-10")
        setTitle(text)
        setIndex(num)
    }
    const hoverOverbtn = () => {
        setShow("h-96 w-screen mt-6 border-b-[1px] transition ease-in-out duration-500 opacity-0 sticky -z-10 bg-white")
        setFrontGround("absolute h-72  border-b-[1px] transition ease-in-out duration-500 opacity-0 -z-10 bg-gray-200")
    }
    const frontBtn = () => {
        setShow("h-96 mt-6 border-b-[1px] transition ease-in-out duration-500 opacity-0 sticky -z-10 bg-white")
        setFrontGround("absolute h-72  border-b-[1px] transition ease-in-out duration-500 opacity-0 -z-10 bg-gray-200")
    }




    
   
  return (
    <div className=' h-16 '>
        <div className=' h-full grid grid-cols-3 sticky '>
            <div/>
                <div className=' flex justify-center'>
                    <img src={logo} className=' h-16 mt-5 '/>
                </div>
                <div className=' grid grid-cols-3 mt-10 md:ml-20 xl:ml-40 pl-4 md:pl-20 '>
                    <img src = {user} className=' w-6 hover:scale-125 transition ease-in-out duration-500'></img>
                    <img src = {heart} className=' w-6 hover:scale-125 transition ease-in-out duration-500'></img>
                    <img src = {shoping} className=' w-6 hover:scale-125 transition ease-in-out duration-500'></img>
                </div>
        </div>
        <div className=' h-1/2 mt-6 md:bottom-5 relative'> 
            <div className="grid grid-cols-5 md:grid-cols-9 md:mt-10">
                <Link
                to ="/"
                className='grid justify-center'>
                    <h1 className= "opacity-70 hover:opacity-100 z-10  transition ease-in-out duration-300 font-Roboto" onMouseOver={() => {hoverBtn("New in", 0)}}>New in</h1>
                </Link>
                <Link
                to = "/"
                className='flex justify-center'>
                    <h1 className= "opacity-70 hover:opacity-100 z-10  transition ease-in-out duration-300 font-Roboto" onMouseOver={() => {hoverBtn("Brand" , 1)}}>Brand</h1>
                </Link>
                <Link
                to = "/"
                className='flex justify-center'>
                    <h1 className= "opacity-70 hover:opacity-100 z-10  transition ease-in-out duration-300 font-Roboto" onMouseOver={() => {hoverBtn("Accessories",0)}}>Accessories</h1>
                </Link>
                <Link
                to = "/"
                className=' col-span-2 md:col-span-1 flex justify-center'>
                    <h1 className= "opacity-70 hover:opacity-100 z-10  transition ease-in-out duration-300 font-Roboto" onMouseOver={() => {hoverBtn("Pre-Order" , 0)}}>Pre-Order</h1>
                </Link>
            </div>
            <div className=" w-full top-0 right-0 absolute pl-3 pb-2 hidden md:flex justify-end mr-10">
                    <input placeholder='Search' className=' border-[1.2px] rounded-lg border-black p-2 '/>
            </div> 
            <div className={show} onMouseOver={() => {hoverBtn(title, index)}} onMouseLeave={() => {hoverOverbtn()}}>
                      
                       <div className=' grid grid-cols-5'>
                          
                            <div className=' col-span-2 ml-12 mt-5'>
                                 <h1 className=' font-Roboto mb-2'>{title}</h1>
                                {
                                    brand[index].map((e) => {
                                        return(
                                            <Link to = "/">
                                                <h1 className=' font-Roboto opacity-70 text-sm mt-1'>{e.name}</h1>
                                            </Link>
                                        )
                                    })
                                }
                            </div>
                                      
                            <div className=' col-span-2'>

                            </div>
                            <div className=' flex justify-end mr-5 mt-5'>
                                <img src = {close} className='w-4 h-4 hover:bg-slate-300 rounded-lg' onClick={() => {hoverOverbtn()}}/>
                            </div>
                       </div>
                       


            </div>   
            <div className={frontGround} onMouseOver={() => {frontBtn()}}/>
              

               
              
        </div>
 

    </div>
  )
}

export default Navbar