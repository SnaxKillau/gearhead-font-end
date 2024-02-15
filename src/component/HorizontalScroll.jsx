import React, { useEffect, useRef , useState } from 'react'


import porsche from "./image/porsche.svg"
import ferrari from "./image/ferrari.svg"
import koeningsegg from "./image/koeningsegg.png"
import bentley from './image/bentley.svg'
import land from "./image/land.svg"
import mercedes from "./image/mercedes.svg"
import dodge from "./image/dodge.svg"
import { Link } from 'react-router-dom'



export default function HorizontalScroll() {

    const logos = [
        { src: koeningsegg, alt: 'Koeningsegg' },
        { src: bentley, alt: 'Bentley' },
        { src: ferrari, alt: 'Ferrari' },
        { src : porsche , alt: "Porsche" },
        { src: land, alt: 'Land' },
        { src: mercedes, alt: 'Mercedes' },
        { src: dodge, alt: 'Dodge' },
      
    ]
   

 

  return (
    <div className="w-full h-20 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
    <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
      {logos.map((logo, index) => (
        <li key={index}>
          <Link to = '#'>
          <img src={logo.src} alt={logo.alt} className=' w-14'/>
          </Link>
        </li>
      ))}
    </ul>
    <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
      {logos.map((logo, index) => (
        <li key={index}>
           <Link to = '#'>
          <img src={logo.src} alt={logo.alt} className=' w-14' />
          </Link>
        </li>
      ))}
    </ul>
  </div>

   
  );
};
    
  
  