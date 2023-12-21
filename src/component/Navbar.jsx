import  { useState } from 'react'
import Btn from './Btn'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { Squash as Hamburger } from 'hamburger-react'
import rohit from "../assets/Logo/layers.png"
import { AnimatePresence, motion as m } from "framer-motion"
import { menuSlide, slide } from './anime'


const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Service', href: '#service' },
    { name: 'Contact', href: '#contact' },
]

const Navbar = () => {

    const [isActive, setIsActive] = useState(false)

  return (
    <m.nav 
    initial={{y:-25}}
    animate={{y:0}}
    transition={{duration:0.5}}
    className='w-full md:w-11/12 md:mt-2 mx-auto px-6 z-50 fixed bg-inherit inset-x-0 top-0 flex justify-center items-center navbar'>
        <div className='relative w-full  md:w-[880px] p-4  rounded-md flex md:justify-around items-center '>
            <div className='flex justify-center items-center gap-2'>
            <img src={rohit} alt="rohit" width={40} className='cursor-pointer' />
            <p className='text-lg text-gray-200 font-medium'>Rohit Kumar Mishra</p>
            </div>
            {/* Medium screen */}
            <div className='hidden md:flex  md:gap-x-6 items-center ml-6 flex-2'>
                {/* Navlinks */}
                {
                    navigation.map((navLink, index) =>(
                        <a 
                        href={navLink.href} 
                        key={index} 
                        className="text-sm font-semibold leading-6 text-gray-300 hover:text-gray-100 cursor-pointer duration-200 transition-all ease-in-out">{navLink.name}</a>
                    ))
                }
            {/* Ghost btn */}
            <Btn 
            outline={true} 
            customClasses={"ml-10  text-sm"} 
            text={"Let Talk "}
            link={"#contact"}
            ><AiOutlineArrowRight/></Btn>
            </div>  
            
            {/*Small-screen Navlinks */}
            <div className={`block md:hidden ml-auto cursor-pointer h-[43px] text-gray-200 ${isActive && ("text-gray-50")}`} >
            <Hamburger  
            toggled={isActive} toggle={setIsActive}
            />
            </div>
            <AnimatePresence mode='wait'>
            {/* <Curve> */}
            {
                isActive && (
                    <m.div variants={menuSlide} animate="enter" exit="exit" initial="initial" 
                    className='md:hidden p-4 w-[80%] bg-gray-900  rounded-lg fixed top-[4.7rem] -right-24 sm:-right-40 h-screen  flex flex-col items-center  gap-12 pt-16'>
                    {
                        navigation.map((navLink, index) =>(
                            <m.a variants={slide} animate="enter" exit="exit" initial="initial"  custom={index}
                            href={navLink.href} 
                            key={index}
                            className="text-lg font-semibold leading-6 text-gray-400 hover:text-gray-200 cursor-pointer duration-200 transition-all ease-in-out "
                            
                            >{navLink.name}</m.a>
                        ))
                     }
                     <Btn outline={true} 
                     customClasses={"ml-0"} 
                     text={"Let Talk "}
                     link={`#contact`}
                     ></Btn>
                    </m.div>
                )
            }
            {/* </Curve> */}
            </AnimatePresence>
        </div>
    </m.nav>
  )
}

export default Navbar
