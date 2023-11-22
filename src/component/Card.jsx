/* eslint-disable react/prop-types */
import { motion as m } from "framer-motion"
import "./Card.css";

const Card = ({image, heading, paragraph , tools , alt , onClick }) => {
  return (
    <m.div
    initial={{scale:0.9}}
     whileInView={{y:[0,0],x:[0,0], scale:1}}
     transition={{duration:0.5, easeInOut: [0.45, 0, 0.55, 1]}} 
              
     className=' relative mx-auto w-full md:w-[80%] lg:w-[100%]  border-[2px] border-gray-800 backdrop-blur-sm rounded-md cursor-pointer   figure' 
    onClick={onClick}
    >
      <img src={image} alt={alt}  loading='lazy' className='w-full h-full object-cover object-top  max-h-80 rounded-lg'/>
      <div className='w-[101%]  bg-gradient-to-t from-[#150e1f] via-[#111111cd] to-[#0000005d] figcaption'>
        <h2 className='subHeading mb-2'>{heading}</h2>
        <p className='paragraph mb-4' >{paragraph}</p>
        <ul className='flex gap-2 mb-4' >{
          tools.map((tool,i) =>{return(
          <li key={i} 
            className='py-1 px-2 bg-gray-900 rounded-full text-xs text-yellow-50'
          >{tool}</li>
          )})} 
        </ul> 
      </div>
    </m.div>
  )
}

export default Card
