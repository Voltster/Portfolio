/* eslint-disable react/prop-types */
import { motion as m } from "framer-motion"


const Card = ({image, heading, paragraph , tools , alt , onClick }) => {
  return (
    <m.div
    initial={{scale:0.4}}
     whileInView={{y:[0,0],x:[0,0], scale:1}}
     transition={{duration:0.5, easeInOut: [0.45, 0, 0.55, 1]}} 
              
     className=' relative mx-auto w-full md:w-[80%] lg:w-[100%]  border-[1px] border-gray-800 backdrop-blur-sm rounded-lg cursor-pointer  group hover:scale-[105%] transition-all duration-300' 
    onClick={onClick}
    >
      <img src={image} alt={alt}  loading='lazy' className='w-full h-full object-cover object-top  max-h-80 rounded-lg'/>
      <div className=' w-full absolute mx-auto bottom-0 lg:opacity-0 place-items-center overflow-auto bg-gradient-to-t from-[#000] via-[#000000cd] to-[#000000bf] bg-opacity-100 py-2 px-6  group-hover:opacity-100 transition-all duration-200 ease-in-out'>
          <h2 className='subHeading mb-2'>{heading}</h2>
        <p className='paragraph mb-4'>{paragraph}</p>
        <ul className='flex gap-2 mb-4' >{
          tools.map((tool,i) =>{return(
          <li key={i} 
            className='py-1 px-2 bg-gray-900 rounded-full text-xs'
          >{tool}</li>
          )})} 
        </ul> 
      </div>
    </m.div>
  )
}

export default Card
