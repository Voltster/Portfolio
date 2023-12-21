import about from "../assets/Image/about.jpg";
import Btn from "../component/Btn";
import MouseScroll from '../component/MouseScroll';

const HeroContent = () => {
  return (
    <section data-aos="fade-up" className="mx-auto py-4 sm:py-4 lg:py-4  relative w-full h-full ">
  <div className="w-40 text-center mx-auto ">
    
    <img
      className="rounded-full text-center"
      src={about}
      alt="Rohit Kumar Mishra"
      loading="eager"
    />
  </div>
  <div className="text-center">
    <p className="font-light py-4 tracking-tight text-primary text-gray-200">
      Hi, I&apos;m Rohit 👋
    </p>
    <h1
      className="heading text-3xl font-bold text-primary text-transparent bg-clip-text bg-gradient-to-r from-[#d7d7d7] to-[#616161] sm:text-3xl md:text-5xl pb-2"
    >
      Designer, Frontend Developer
    </h1>
    <h2 className="w-5/6 mx-auto mt-2 text-gray-400 sm:text-xl font-medium">
      I design and code beautifully simple things, and I love what I do.
    </h2>
    <div className="mt-4 flex items-center justify-center gap-x-6">
       <Btn text={"See my Projects"}  link={"#projects"} customClasses={"text-lg mt-1"}/>
    </div>
    
  </div>
  <div className="mt-[7vh] w-full flex justify-center ">
      <a href="#about" aria-label="scrollButton">
      <MouseScroll />
      </a>
    </div>
</section>
  )
}

export default HeroContent
{/* <a
        href="#projects"
        className=" hover:bg-primary hover:bg-opacity-10  bg-trasparent bg-opacity-10 px-5 transition-all py-3 text-lg font-semibold text-gray-400 shadow-sm rounded-lg border border-gray-200 border-opacity-10"
      >
        Projects
      </a>  */}
