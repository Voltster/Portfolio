import { useState } from 'react'
import Card from '../component/Card'
import projectData from "../utils/data"
import ProjectModal from '../component/ProjectModal'
import SectionName from '../component/SectionName';


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
          <SectionName  name={"Projects"}/>
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
