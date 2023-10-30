// import Spline from '@splinetool/react-spline';
import bg from "../assets/bg1.svg"
import Btn from '../component/Btn'
import { AiOutlineArrowRight } from 'react-icons/ai'
import * as Icon1 from "react-icons/ai"
import * as Icon2 from "react-icons/bs"
import * as Icon3 from "react-icons/io5"
import { Typewriter } from 'react-simple-typewriter'
import {  motion as m } from "framer-motion";


const contactDetails = [
  {
    icon: "AiOutlineMail",
    heading: "Email",
    description: "rohitkumarmishra@gmail.com",
  },
  {
    icon: "BsTelephone",
    heading: "Phone",
    description: "+91 954-024-3331",
  },
  {
    icon: "IoLocationOutline",
    heading: "Location",
    description: "West Delhi, India",
  },
]

const Hero = () => {

  const moveVariants = {
    animation:{
      y: [0, -15],
      transition:{
        yo:Infinity,
        duration:2,
        delay:1
      }
    }
  }
  
  return (
        
    <m.section 
    initial={{y:-15, opacity:0}}
    animate={{y:0, opacity:1}}
    transition={{duration:2, delay: 0.5}}
    className='relative  w-full h-[100vh] bg-fixed' id='#home'>
      <div className='absolute top-20 w-full h-[90vh] flex justify-center'>
      <img src={bg} className='absolute h-[90vh] w-screen mt-0 top-0 left-0 position'/>
        <m.div
        animate="visible"
        initial="hidden"
          exit="hidden"
         className='absolute border-0 left-[9%] top-[10%]'>
            <p className='paragraph text-xl '>Hi There!</p>
            
            <h1 className='heading text-white'>I am
              <span className='text-red-600'>
                  <Typewriter
                words={[' Developer',' Designer']}
                loop={true}
                cursor
                //  cursorStyle='_'
                typeSpeed={200}
                deleteSpeed={200}
                delaySpeed={1000}
                  />                      
              </span>
            </h1>
            <p className='paragraph text-xl py-4 font-semibold text-white'>I design and code beautifully simple things, <br/> and I love what I do.</p>
          
        </m.div>
        <Btn  
        variants={moveVariants}
        animate="animation"
        text={"Projects"} 
        customClasses={"absolute left-[9%] top-[50%]"}
        link={`#projects`}
        >
          <AiOutlineArrowRight/>
          </Btn>
          {/* Contact -- */}
        <div
         className='absolute left-[9%] bottom-[10%] flex flex-row '>
          {
            contactDetails.map((ele, i)=> {
              let Icon = Icon1[ele.icon] || Icon2[ele.icon] || Icon3[ele.icon]
              return (
                <div 
                key={i}
                // eslint-disable-next-line eqeqeq
                className={`mr-2 pr-2 border-r-[1px] ${ i == "2"  && ("border-none")}`}
                >
                <span className='flex flex-row items-center '>
                <p className='paragraph text-base font-semibold'>{ele.heading}</p>
                <Icon size={15}  className="text-gray-400 mx-2"/>
                </span>
                  <p className='paragraph text-sm'>{ele.description}</p>
              
              </div>
              )
            })
          }
        </div>
      </div>
      
        
    </m.section>
  )
}

export default Hero
