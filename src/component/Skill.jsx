/* eslint-disable react/no-unescaped-entities */
import * as Icon1 from "react-icons/si"
import * as Icon2 from "react-icons/bi"
import * as Icon3 from "react-icons/fa"
import * as Icon4 from "react-icons/si"
import * as Icon5 from "react-icons/io5"
import * as Icon6 from "react-icons/tb"
import * as Icon7 from "react-icons/fa"
import * as Icon8 from "react-icons/io5"
import * as Icon9 from "react-icons/ai"
import * as Icon10 from "react-icons/bs"
import * as Icon11 from "react-icons/bi"
import * as Icon12 from "react-icons/bi"

import { motion as m} from "framer-motion";
import { icon } from "./anime"


const skills = [
  {
    icon: "SiMongodb",
    heading: "MongoDB",
  },
  {
    icon: "SiExpress",
    heading: "Express",
  },
  {
    icon: "FaReact",
    heading: "React",
  },
  {
    icon: "FaNode",
    heading: "Node",
  },
  {
    icon: "BiLogoTailwindCss",
    heading: "Tailwind",
  },
  {
    icon: "FaBootstrap",
    heading: "Bootstrap",
  },
  {
    icon: "IoLogoJavascript",
    heading: "Javascript",
  },
  {
    icon: "SiCss3",
    heading: "CSS3",
  },
  {
    icon: "AiFillHtml5",
    heading: "HTML5",
  },
  {
    icon: "BsGit",
    heading: "Git",
  },
  {
    icon: "BiLogoVisualStudio",
    heading: "Visual Studio",
  },
  {
    icon: "BiLogoFigma",
    heading: "Figma",
  },
  
]

const Skill = () => {


  return (
    <section className='w-full md:h-screen z-0  snap-start mt-14 pt-14 ' id='skill'>
      <m.div
      initial={{opacity:0}}
      whileInView={{y:[-50,0], opacity:1}}
      transition={{duration:1, ease: [0.45, 0, 0.55, 1]}}
       className=' w-8/12 mx-auto flex flex-col justify-center items-center gap-3 mt-12 '>
            <p className='paragraph text-gray-400 uppercase'>A problem is a chance for you to do your best.</p>
           <h3 className='subHeading text-4xl text-center'>Skills & Experience</h3>
           <div className='bg-gradient-to-r from-gray-900 via-gray-100 to-gray-900 w-[18rem] h-[1px] text-white'></div>
           <p className='paragraph text-center'>I'm a MERN stack developer with a knack for crafting dynamic web applications. <br/> Proficient in HTML, CSS, and JavaScript, I specialize in React and Tailwind for building engaging user experiences. My skills extend to custom plugins, feature-rich applications, and captivating animations. Let's bring your projects to life!</p>
            <p className='paragraph'>Visit my <a href="linkdin" className='text-red-400  hover:underline' target='blank'>Linkedin</a> for more details.</p>
    </m.div>
         <div 
         
         className=' w-[70%] mx-auto grid grid-cols-3 md:grid-cols-6 gap-4 my-16'>
          {
            skills.map((item, index) =>{
              let Icon = Icon1[item.icon] || Icon2[item.icon] || Icon3[item.icon] || Icon4[item.icon] || Icon5[item.icon] || Icon6[item.icon] || Icon7[item.icon] || Icon8[item.icon] || Icon9[item.icon] || Icon10[item.icon] || Icon11[item.icon] || Icon12[item.icon]
              return(
                <m.div 
                variants={icon}
                whileInView="whileInView"  
                initial="initial" 
                custom={index}
                key={index}
                className='text-gray-100 bg-[#020A0C] bg-opacity-30  backdrop-blur-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] h-[100px] flex flex-col justify-center items-center rounded-md hover:text-gray-50 duration-200 group transition-transform  hover:scale-105 p-6 sm:p-2'
                >
                 <Icon size={75} className="group-hover:text-gray-100]"/>
                  <p className='paragraph'>{item.heading}</p>
                </m.div>
              )
            })
          }
        </div>
    </section>
  )
}

export default Skill
