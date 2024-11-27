'use client'

import Link from "next/link"
import { Button } from "./ui/button"

// import swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import {Pagination} from 'swiper/modules'


//components

import {Swiper, SwiperSlide} from "swiper/react"
import ProjectCard from "@/components/ProjectCard"

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
      image : '/work/4.png',
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

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container max-auto">
        {/* Text */}
        <div className=" max-w-[400px] xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Latest Project</h2>
          <p className="subtitle mb-8">Take a look at our latest project and see how we turn visions into reality.</p>
          <Link href="/projects"><Button>All Projects</Button></Link>
        </div >
        {/* Slider */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0 ">
        <Swiper className="h-[480px]" 
          slidesPerView={1} 
          breakpoints={{
            640:{
              slidesPerView: 2
              },
            }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{clickable: true}}
        >
          {/* Show only the first 4 projects for the slides */}
          {ProjectData.slice(0,4).map((project,index)=>{
            return (
              <SwiperSlide key={index}>
                <ProjectCard project={project}/>
              </SwiperSlide>
            )
          })}
        </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Work