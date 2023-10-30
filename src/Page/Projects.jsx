import { useState } from 'react'
import Card from '../component/Card'
import projectData from "../utils/data"
import ProjectModal from '../component/ProjectModal'
import { motion as m } from 'framer-motion'


const Projects = () => {

  const [selectedCategory, setSelectedCategory] = useState("All");

  // Display Filtered Projects
  const filterProjects = () => {
    if (selectedCategory === "All") {
      return projectData;
    }  
    if (selectedCategory === "Graphic") {
      return projectData.filter((project) => project.category === selectedCategory);
    }
    else {
      return projectData.filter((project) => project.category === selectedCategory);
    }
  };
  

  const [projectModal, setProjectModal] = useState(null)

  const openProjectModal = (item) => {
    setProjectModal({
      item: item,
      goBack: () => closeProjectModal()
    });
    console.log("YOur click on card")
  };

  const closeProjectModal = () => {
    setProjectModal(null);
  };

  return (
    <section className='w-full bg-inherit  z-10  snap-start ' id='projects'>
        <div className='relative mx-auto flex flex-col w-11/12 h-auto mb-12 max-w-maxContent gap-8  mt-10  text-white justify-center items-center'>
         <m.div 
         initial={{opacity:0}}
         whileInView={{y:[-50,0], opacity:1}}
         transition={{duration:1, ease: [0.45, 0, 0.55, 1]}} 
         className='flex flex-col justify-center items-center gap-x-3 mt-14'>
           <h3 className='subHeading text-4xl  text-center'>Projects</h3>
           <div className='bg-gradient-to-r from-gray-900 via-gray-100 to-gray-900 w-[10rem] h-[1px] mt-3'></div>
         </m.div>
         {/*  filter projects when click */}
         <div className="flex justify-center space-x-4 mt-4 border-[1px] border-gray-900 py-2 px-4 rounded-full font-semibold ">
            <button
              className={`${
                selectedCategory === "All" ? "bg-gray-800 font-bold" : "bg-transparent"
              } px-4 py-2 rounded-lg transition-all duration-200`}
              onClick={() => setSelectedCategory("All")}
            >
              All
            </button>
            <button
              className={`${
                selectedCategory === "Design" ? "bg-gray-800" : "bg-transparent"
              } px-4 py-2 rounded-lg transition-all duration-200`}
              onClick={() => setSelectedCategory("Design")}
            >
              Design
            </button>
            <button
              className={`${
                selectedCategory === "Graphic" ? "bg-gray-800" : "bg-transparent"
              } px-4 py-2 rounded-lg transition-all duration-200`}
              onClick={() => setSelectedCategory("Graphic")}
            >
              Graphic
            </button>
          </div>
         <div className='w-[100%] grid grid-cols-1 lg:grid-cols-3 gap-4'>
          {/* Project here */}
          {
            filterProjects().map((item, index) =>(
              <Card 
              key={index} 
              alt={item.alt} 
              image={item.image} 
              heading={item.heading} 
              paragraph={item.description} 
              tools={item.tools} 
              
              projectModal={true}
              onClick={() => openProjectModal(item)}
              />
            ))
          }
          
         </div>
        </div>
        {
          projectModal && <ProjectModal  modalData={projectModal}/>
        }
    </section>
  )
}

export default Projects
