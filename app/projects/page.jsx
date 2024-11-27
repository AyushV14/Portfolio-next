'use client';
import React,{useState} from "react";
import { Tabs,TabsList,TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";

const ProjectData = [
  {
    image : '/work/1.png',
    category: 'next js',
    name: 'Prompt finder Website',
    Description: 'To enchance your ai experience find a prompt to improve response',
    link:'http://prompt-genius.vercel.app',
    github:'https://github.com/AyushV14/PromptGenius',
  },
  {
    image : '/work/travel1.png',
    category: 'next js',
    name: 'Travel-bliss Website',
    Description: 'Tours and travel website you can find information for your new adventure',
    link:'https://travel-bliss-ten.vercel.app',
    github:'https://github.com/AyushV14/TravelBliss',
  },
  {
    image : '/work/3.png',
    category: 'fullstack',
    name: 'Farmers App',
    Description: 'Mobile App made with React Native for connection of farmers and consumer',
    link:'/',
    github:'https://github.com/AyushV14/farmers-frontend',
  },
  {
    image : '/work/budget.png',
    category: 'react js',
    name: 'Budget App',
    Description: 'Budgeting app for your expenses made with expo go and react native ',
    link:'/',
    github:'https://github.com/AyushV14/Budget-app',
  },
  

  {
    image : '/work/veg.png',
    category: 'react js',
    name: 'Veggie Verse Website',
    Description: 'personalized recipe suggestions based on the ingredients they have on hand',
    link:'https://veggie-verse.netlify.app/',
    github:'https://github.com/AyushV14',
  },
  {
    image : '/work/product1.png',
    category: 'react js',
    name: 'Product Website',
    Description: 'dynamic online platform designed to effortlessly showcase and manage a diverse array of products. ',
    link:'https://product-name.netlify.app/',
    github:'https://github.com/AyushV14',
  },
  {
    image : '/work/4.png',
    category: 'next js',
    name: 'Nike Website',
    Description: 'Nike Shoes website basic frontend',
    link:'https://nike-edge.netlify.app',
    github:'/',
  },
  
  
  
];

// remove category duplicates
const uniqueCategories = [
    'all projects',
      ...new Set(ProjectData.map((item)=> item.category)),];

const Projects = () => {
  const [categories ,setCategories] = useState(uniqueCategories)
  const [catergory,setCatory] = useState('all projects')
  
  const filteredProject = ProjectData.filter((project) => {
    return (
      catergory === 'all projects' 
      ? project 
      : project.category === catergory
    );
});

  

  return (
    <section className="min-h-screen pt-12 ">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>
        {/* Tabs */}
        <Tabs defaultValue={catergory} className="mb-24 xl:mb-48" >
          <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none"> 
            {categories.map((catergory,index) =>{
              return (
                <TabsTrigger 
                  value={catergory} 
                  key={index} 
                  className='capitalize w-[162px] md:w-auto ' 
                  onClick={()=> setCatory(catergory)}
                >
                  {catergory}
                </TabsTrigger>
              )
            })}
          </TabsList>
          {/* tabs content */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4 ">
            {filteredProject.map((project,index)=>{
              return (
                <TabsContent value={catergory} key={index} className='relative'>
                  <ProjectCard project={project}/>
                </TabsContent>
              )
            })}
          </div>
        </Tabs>
      </div>
    </section>
  )
}

export default Projects