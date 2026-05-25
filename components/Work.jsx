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
      category: 'ai / fullstack',
      name: 'AI PDF Note Taker',
      Description: 'Upload PDFs and chat with them using natural language. Powered by Gemini API with Convex DB for vector storage and Clerk auth.',
      stack: ['Next.js', 'Gemini API', 'Convex', 'Clerk'],
      link: 'https://ai-pdf-note-taker-gray.vercel.app/',
      github: 'https://github.com/AyushV14/Ai-Pdf-Note-Taker',
    },
    {
      category: 'devops',
      name: 'Stu-DevOps API',
      Description: 'REST API taken from local dev to production: Docker, GitHub Actions self-hosted runner, Kubernetes, Helm, ArgoCD & observability.',
      stack: ['Docker', 'Kubernetes', 'GitHub Actions', 'Helm'],
      link: '/',
      github: 'https://github.com/AyushV14',
    },
    {
      category: 'game',
      name: 'Ashan Library',
      Description: 'Interactive tile-based game world built with React + Vite. Custom map composed of tiles with full in-browser exploration.',
      stack: ['React', 'Vite', 'Tiled'],
      link: 'https://ashanlibrary.vercel.app/',
      github: 'https://github.com/AyushV14',
    },
    {
      category: 'ai / fullstack',
      name: 'IsItReal',
      Description: 'Detects AI-generated vs human images using a Hugging Face model. React + Node + FastAPI, Dockerized, deployed on AWS EC2.',
      stack: ['React', 'FastAPI', 'Docker', 'AWS'],
      link: '/',
      github: 'https://github.com/AyushV14',
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