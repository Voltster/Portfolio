import * as Icon1 from "react-icons/ai"
import * as Icon2 from "react-icons/bs"
import * as Icon3 from "react-icons/ai"
import * as Icon4 from "react-icons/si"
import { motion as m } from "framer-motion"

const socialLinks = [
  {
    icon: "AiFillLinkedin",
    heading: "Linkedin",
    link: "https://www.linkedin.com/in/rohit-kumar-mishra-a49b68262/",
    
  },
  {
    icon: "BsGithub",
    heading: "Github",
    link: "https://github.com/Voltster",
    
  },
  {
    icon: "AiFillInstagram",
    heading: "Instagram",
    link: "https://www.instagram.com/rohit_mishra954/",
  },
  {
    icon: "SiReplit",
    heading: "Replit",
    link: "https://replit.com/@RohitMishra17",
  },
]

const Footer = () => {

  const year = new Date().getFullYear();
  
  return (
    <footer className=' w-full z-0  backdrop-blur-sm opacity-90  mx-auto flex flex-col justify-center items-center py-2 snap-start '>
      <div className='w-full flex flex-col gap-y-4 sm:flex-row justify-center items-center px-8 mt-4'>
        {/* Logo */}
        <m.div
        initial={{x:0, opacity:0}}
        whileInView={{x:[-250,0], opacity:1}}
        transition={{duration:1, ease: [0.45, 0, 0.55, 1]}}
         className='flex item-center  sm:w-[50%]'>
            {/* <div className='w-8 h-8 rounded-full bg-primary'></div> */}
            <p className='text-lg  font-bold text-gray-300'>Rohit Kumar Mishra</p>
        </m.div>
        {/* Social Icons */}
        <m.div 
        initial={{x:0, opacity:0}}
        whileInView={{x:[250,0], opacity:1}}
        transition={{duration:1, ease: [0.45, 0, 0.55, 1]}}
        className='  sm:w-[50%] flex justify-end gap-2'>
            {
                socialLinks.map((ele,i)=>{
                    let Icon = Icon1[ele.icon] || Icon2[ele.icon] || Icon3[ele.icon] || Icon4[ele.icon] ;
                    return(
                        <span key={i} className='text-white rounded-full border-[1px] border-gray-400 p-2 hover:bg-indigo-700 hover:border-indigo-600 cursor-pointer'>
                            <a href={`${ele.link}`} target='blank' ><Icon size={18}/></a>
                        </span>
                    )
                })
            }
        </m.div>
        <div>

        </div>
      </div>
      {/* Copyright */}
      <div className='flex justify-center items-center my-4 border-t-[1px] border-gray-300 w-[95%]'>
        <m.p 
        initial={{y:0, opacity:0}}
        whileInView={{y:[20,0], opacity:1}}
        transition={{duration:1, ease: [0.45, 0, 0.55, 1]}}
        className='paragraph mt-10 text-center'>© Copyright {year}, All Rights Reserved by Rohit</m.p>
      </div>
    </footer>
  )
}

export default Footer
