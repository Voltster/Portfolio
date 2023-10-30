import "./App.css";
import Navbar from './component/Navbar';
import MouseScroll from './component/MouseScroll';
import Hero from "./Page/Hero"
import About from "./Page/About"
import Skill from './component/Skill';
import Service from './Page/Service';
import Projects from './Page/Projects';
import Contact from './Page/Contact';
import Footer from './Page/Footer';
import Cursor from "./component/Cursor";
import { AnimatePresence,} from "framer-motion"


function App() {
  return (<>
    <div className=" relative font-roboto select-text flex w-screen h-screen min-h-screen flex-col grid-Bg">
      <AnimatePresence mode='wait'>
      <Cursor/>
      {/* Navigation Bar */}
      
      <Navbar />
      {/* <canvas id='canvas' className='text-white text-3'>hey ya</canvas> */}

      {/* Background Animation */}
      <div className="relative h-[100vh] w-screen snap-center " id="home">
        {/* Main Section */}
        <Hero />

        {/* Mouse Scroll */}
        <div className="absolute hidden bottom-5 w-full md:flex justify-center items-center">
          <MouseScroll />
        </div>
      </div>

      {/* About */}

      <About />

      <Skill />

      <Service />

      <Projects />

      <Contact />

      <Footer />
      </AnimatePresence>
    </div>
    </>
  );
}

export default App;
