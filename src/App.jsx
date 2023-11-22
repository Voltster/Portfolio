import "./App.css";
import Navbar from './component/Navbar';
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
    <div className=" relative font-roboto select-text flex w-screen h-screen min-h-screen flex-col grid-Bg cursor-auto">
      <AnimatePresence mode='wait'>
      <Cursor/>
      {/* Navigation Bar */}
      
      <Navbar />

      {/* Background Animation */}
      <div className="relative h-[100vh] w-screen snap-center " id="home">
        {/* Main Section */}

        <Hero />

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
