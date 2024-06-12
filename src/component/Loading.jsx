import React from 'react'
import '../component/css/style.css'
function Loading() {
  return (
    <div
    className="fixed z-30 top-0 left-0 w-screen h-screen flex justify-center items-center backdrop-blur-sm bg-black  bg-opacity-50"
  >
    <div className="w-96 rounded-lg rotate-45">
      <div className="loader"></div> 
    </div>
  </div>
  )
}
export default Loading