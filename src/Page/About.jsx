/* eslint-disable react/no-unescaped-entities */
import Btn from '../component/Btn';
import about from "../assets/Image/about1.jpg";
import resumePdf from "../assets/Resume.pdf";
import { motion as m } from "framer-motion";
import SectionName from '../component/SectionName';

const About = () => {
  const downloadResume = () => {
    // Function to trigger the resume download
    window.open(resumePdf);
  };

  return (
    <section className='w-full bg-inherit z-0 snap-start mt-1' id='about'>
      <div className='relative mx-auto flex w-11/12 h-[100%] max-w-maxContent flex-col items-center justify-center gap-8 mt-10'>
        <SectionName name={"About"}/>
        <div className="flex w-full flex-col md:flex-row gap-x-20 gap-y-4 items-center justify-center">
          <m.div
          initial={{x:0, opacity:0}}
          whileInView={{x:[-250,0], opacity:1}}
          transition={{duration:1, ease: [0.45, 0, 0.55, 1]}}
          className="relative">
            <img src={about} className='relative rounded-md  p-[2px] z-10' width={325} alt='author pic' loading='lazy'/>
            <div className='border-2 border-[#141414]  rounded-md w-[100%] h-[97.5%] absolute top-[20px] left-[10px] z-0'></div>
          </m.div>
          <m.div
          initial={{x:0,opacity:0}}
          whileInView={{x:[250,0], opacity:1}}
          transition={{duration:1, ease: [0.45, 0, 0.55, 1]}}
           className="w-full md:w-[37%] flex gap-2 flex-col">
            <p className='paragraph font-semibold'>Who am I?</p>
            <h2 className='subHeading'>I'm Rohit, a Web Developer & Graphic Designer.</h2>
            <p className='paragraph'>
            Hey there, I'm Rohit Kumar Mishra—an avid Web Developer with a knack for crafting elegant, user-friendly websites. I'm also your go-to guy for branding and graphic design needs. Let's turn your ideas into digital masterpieces!
            </p>
            <p className='paragraph font-semibold'>Contact</p>
            <p className='paragraph'>
              If you'd like to say hi or get started with your project and need my help, feel free to contact me at <strong> <a href="mailto:rohitkumarmishra954@gmail.com">rohitkumarmishra954@gmail.com</a></strong>.
            </p>
            <div className='flex flex-row gap-4 mt-4'>
              <Btn text={"HIRE ME"}
                link={`#contact`}
                customClasses={"text-sm"}
              ></Btn>
              <Btn outline={true} text={"See My RESUME"} onclick={downloadResume}  customClasses={"text-sm"}>
             
              </Btn>
            </div>
          </m.div>
        </div>
      
      </div>
    </section>
  );
}

export default About;
