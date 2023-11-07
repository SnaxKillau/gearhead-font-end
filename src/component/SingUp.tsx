import { type } from 'os'
import React, { useState } from 'react'
import car from "./image/sunsetcar.jpeg"
import { Link } from 'react-router-dom'





function SignUp() {

  const [email  , setEmail] = useState<string>("")
  const [pass  , setPass] = useState<string>("")
  const [cPass  , setcPass] = useState<string>("")
  const [involidEmail , setInvolidEmail] = useState<boolean>(false)
  const [inCorrectPass , setInCorrectPass] = useState<boolean>(false)
  const [inCorrectComfirmPass , setInCorrectComfirmPass] = useState<boolean>(false)
  const [maleClass , setMaleClass] = useState<string>("ml-9 w-10 h-10 border-2 border-black  text-black font-Kanit rounded-lg mt-5 md:mt-0")
  const [femaleClass , setFemaleClass] = useState<string>("ml-9 w-10 h-10 border-2 border-black  text-black font-Kanit rounded-lg mt-5 md:mt-0")


  const maleClick = () => {
    setFemaleClass(maleClass)
    setMaleClass("ml-9 w-10 h-10 font-Kanit rounded-lg bg-purple-800 text-white shadow-purple-950 shadow-sm mt-5 md:mt-0")
  }
  const femaleClick = () => {
    setMaleClass(femaleClass)
    setFemaleClass("ml-9 w-10 h-10 font-Kanit rounded-lg bg-purple-800 text-white shadow-purple-950 shadow-sm mt-5 md:mt-0")
  }

  const checkingEmail = () => {     
      var re =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      setInvolidEmail(!re.test(email))
  }
  const checkingComfirmPassword = () => {
    pass.localeCompare(cPass) == 0 ? setInCorrectComfirmPass(false) : setInCorrectComfirmPass(true)
    console.log(cPass)
  }
  
  
   
  return (
    <div className=' flex justify-center items-center h-screen overflow-y-hidden bg-gradient-to-r from-slate-50 to-gray-100 '>
        <div className=' w-full ml-10 mr-10 h-3/4  bg-gradient-to-tr from-slate-50 to-slate-200 grid grid-cols-1 md:grid-cols-2  shadow-red-400 shadow-lg'> 
                <img  src = {car} className=' h-[75%] w-[40%] absolute hidden md:flex'/>
                <div className=' relative   w-[86%] bg-black opacity-30 hidden md:flex'/>
                <div className='flex flex-col mt-10 ml-10 md:ml-0'>
                  <h1 className=' font-Kanit text-3xl text-purple-950'>Register</h1>
                  <h1 className=' font-Kanit text-purple-950'>Welcome to GearHead plase enjoy</h1>
                  <div className=' grid grid-cols-1 md:flex  mt-5 text-lg text-purple-950'>
                      <h1 className='font-Kanit'>Name</h1>
                      <input type='text' className=' mr-12 md:mr-0  md:ml-12 focus:outline-purple-950 shadow-purple-950 shadow-sm p-1 bg-gray-100 border-gray-100 rounded-lg placeholder:text-sm placeholder:pl-2' placeholder='Enter Your Name' onChange={(e) => {setEmail(e.target.value)}}/>
                  </div> 
                  <div className='flex  md:mt-5 text-lg text-purple-950'>
                      <h1 className='font-Kanit'>Gender</h1>
                      <button className={maleClass} onClick={() => {maleClick()}}>M</button>
                      <button className={femaleClass} onClick={() => {femaleClick()}}>F</button>
                  </div>      
                  <div className=' grid grid-cols-1 md:flex  mt-5 text-lg text-purple-950'>
                      <h1 className='font-Kanit'>Email</h1>
                      <input type='text' className=' mr-12 md:mr-0  md:ml-12 focus:outline-purple-950 shadow-purple-950 shadow-sm p-1 bg-gray-100 border-gray-100 rounded-lg placeholder:text-sm placeholder:pl-2' placeholder='Enter Your Email' onChange={(e) => {setEmail(e.target.value)}}/>
                  </div>

                  {/* Checking email */}

                 {
                  involidEmail ?  <h1 className='font-Kanit text-orange-500'>Emai is involid!</h1> : null
                 }

                  <div className='  grid grid-cols-1 md:flex  mt-5 text-lg text-purple-950'>
                      <h1 className='font-Kanit'>Password</h1>
                      <input type='text' className=' mr-12 md:mr-0  md:ml-12 focus:outline-purple-950 shadow-purple-950 shadow-sm p-1 bg-gray-100 border-gray-100 rounded-lg placeholder:text-sm placeholder:pl-2' placeholder='Enter Your Password' onFocus={() => {checkingEmail()}} onChange={(e) => {setPass(e.target.value)}}></input>
                  </div>

                  {/* Checking Password */}

                 {
                  inCorrectPass ?  <h1 className='font-Kanit text-orange-500'>Password is incorrect !</h1> : null
                 }

                  <div className='  grid grid-cols-1 md:flex  mt-5 text-lg text-purple-950'>
                      <h1 className='font-Kanit'>Comfirm Password</h1>
                      <input type='text' className='mr-12 md:mr-0  md:ml-12 focus:outline-purple-950 shadow-purple-950 shadow-sm p-1 bg-gray-100 border-gray-100 rounded-lg placeholder:text-sm placeholder:pl-2' placeholder='Enter Your Name' onChange={(e) => {setcPass(e.target.value)}}></input>
                  </div>

                  {/* Checking password and comfirm password */}

                  {
                    inCorrectComfirmPass ?    <h1 className='mt-5 font-Kanit text-orange-500'>Comfirm Password is incorrect!</h1> : null
                  }
               
                  <div  className=' flex mt-5 text-lg font-Kanit bg-purple-800 h-10 justify-center text-white rounded-md shadow-purple-950 shadow-lg  w-3/12'> 
                        <button onClick={() => {checkingComfirmPassword()}}>Sign Up</button>
                  </div>

                  <div className=' absolute flex justify-center items-center text-white rounded-full  shadow-purple-950 shadow-lg bottom-28 right-14  h-10 w-10 font-Kanit bg-purple-800'>
                      <h1>69</h1>
                  </div>
               
               
                </div>

                
        </div>
   


    
    </div>
  )
}

export default SignUp