import bg from "../assets/bg.svg"
import Btn from '../component/Btn'
import { AiOutlineArrowRight } from 'react-icons/ai'
import * as Icon1 from "react-icons/ai"
import * as Icon2 from "react-icons/bs"
import * as Icon3 from "react-icons/io5"
import { Typewriter } from 'react-simple-typewriter'
import {  motion as m } from "framer-motion";
import MouseScroll from '../component/MouseScroll';

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
    className='relative   w-full h-auto bg-fixed mt-20' id='#home'>
        <div className=' relative w-10/12 h-[75vh] mx-auto flex  '>
        <div className='mt-20 z-20'>
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
            <p className='paragraph text-xl py-4 text-white'>I design and code beautifully simple things, <br/> and I love what I do.</p>
            <Btn  
        variants={moveVariants}
        animate="animation"
        text={"Projects"} 
        customClasses={"absolute left-[0%] mt-10"}
        link={`#projects`}
        >
          <AiOutlineArrowRight/>
          </Btn>
        </div>
        {/* Image */}
        <div>
        <img src={bg} className='absolute h-[90vh] w-screen mt-0 top-0 left-0 z-0 position'/>
        
        </div>
        </div>
          {/* Contact -- */}
          <div
         className='flex flex-row w-10/12 mx-auto'>
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
                {/* Mouse Scroll */}
        <div className="absolute hidden -bottom-4 w-full md:flex justify-center items-center ">
          <MouseScroll />
        </div>
    </m.section>
  )
}

export default Hero
