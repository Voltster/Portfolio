import { motion as m } from "framer-motion";

// eslint-disable-next-line react/prop-types
const SectionName = ({name}) => {
  return (
    <m.div 
        initial={{opacity:0}}
        whileInView={{y:[-50,0], opacity:1}}
        transition={{duration:1, ease: [0.45, 0, 0.55, 1]}}
        className='flex flex-col justify-center items-center gap-x-3 mt-12'>
          <h3 className='subHeading text-4xl text-center relative' id="underline">{name}</h3>
        </m.div>
  )
}

export default SectionName
