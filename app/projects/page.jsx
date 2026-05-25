'use client';
import React,{useState} from "react";
import { Tabs,TabsList,TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";

const ProjectData = [
  {
    category: 'ai / fullstack',
    name: 'AI PDF Note Taker',
    Description: 'Upload PDFs and chat with them using natural language. Powered by the Gemini API with Convex DB for vector storage and Clerk for auth.',
    stack: ['Next.js', 'Gemini API', 'Convex', 'Clerk'],
    link: 'https://ai-pdf-note-taker-gray.vercel.app/',
    github: 'https://github.com/AyushV14/Ai-Pdf-Note-Taker',
  },
  {
    category: 'devops',
    name: 'Stu-DevOps API',
    Description: 'REST API taken from local development to production: Docker, GitHub Actions self-hosted runner, Kubernetes, Helm, ArgoCD & observability.',
    stack: ['Docker', 'Kubernetes', 'GitHub Actions', 'Helm', 'ArgoCD'],
    link: '/',
    github: 'https://github.com/AyushV14',
  },
  {
    category: 'ai / devops',
    name: 'CLX - Scan. Analyze. Secure.',
    Description: 'CLI tool that uses a Groq-hosted LLM to scan Python scripts for security vulnerabilities (eval, system calls, hardcoded secrets) and auto-fixes risky patterns.',
    stack: ['Python', 'Groq LLM', 'CLI'],
    link: 'https://devfolio.co/',
    github: 'https://github.com/AyushV14',
  },
  {
    category: 'ai / fullstack',
    name: 'IsItReal',
    Description: 'Detects AI-generated vs human images using a Hugging Face model. React + Node + FastAPI, fully Dockerized, orchestrated with Compose, deployed on AWS EC2.',
    stack: ['React', 'FastAPI', 'Docker', 'AWS EC2', 'Hugging Face'],
    link: '/',
    github: 'https://github.com/AyushV14',
  },
  {
    category: 'game',
    name: 'Ashan Library',
    Description: 'Interactive tile-based game world built with React + Vite. Custom map built from tiles with full in-browser interaction and exploration.',
    stack: ['React', 'Vite', 'Tiled', 'Canvas'],
    link: 'https://ashanlibrary.vercel.app/',
    github: 'https://github.com/AyushV14',
  },
  {
    category: 'next js',
    name: 'Meeting WebApp',
    Description: 'Video conferencing & scheduling platform using Stream Video SDK with real-time meetings, calendar integration, and secure auth.',
    stack: ['Next.js', 'Stream SDK', 'Radix UI', 'Tailwind'],
    link: 'https://meeting-webapp-ten.vercel.app/',
    github: 'https://github.com/AyushV14/meeting-webapp',
  },
  {
    category: 'react native',
    name: 'Farmers to Consumers',
    Description: 'React Native app connecting farmers directly with consumers - eliminating middlemen. Selected at the internal round of Smart India Hackathon 2025.',
    stack: ['React Native', 'Expo', 'Firebase'],
    link: '/',
    github: 'https://github.com/AyushV14/farmers-frontend',
  },
  {
    category: 'ai / fullstack',
    name: 'Indian Stock Market Simulator',
    Description: 'AI-driven educational platform simulating Indian stock trading with live data, virtual currency, and AI-generated portfolio insights.',
    stack: ['Next.js', 'MongoDB', 'Clerk', 'LLM APIs'],
    link: '/',
    github: 'https://github.com/AyushV14',
  },
  {
    category: 'react js',
    name: 'RHFL Foundation Website',
    Description: 'Official RHFL Foundation website - led a cross-functional team of 7 across UI/UX and backend for a responsive, accessible build.',
    stack: ['React', 'Tailwind', 'Team Lead'],
    link: '/',
    github: 'https://github.com/AyushV14/rhlfreact-ayush',
  },
  {
    category: 'next js',
    name: 'Nike SaaS Store',
    Description: 'Nike e-commerce experience with payment integration and modern checkout flow, built with Next.js.',
    stack: ['Next.js', 'Stripe', 'Tailwind'],
    link: 'https://shoes-ecom-frontend.vercel.app/',
    github: 'https://github.com/AyushV14/shoes-ecom-frontend',
  },
  {
    category: 'next js',
    name: 'Travel-bliss',
    Description: 'Tours and travel discovery site with rich destination content and a clean, responsive layout.',
    stack: ['Next.js', 'Tailwind'],
    link: 'https://travel-bliss-ten.vercel.app',
    github: 'https://github.com/AyushV14/TravelBliss',
  },
  {
    category: 'next js',
    name: 'Prompt Genius',
    Description: 'Discover and share prompts to get better responses out of AI models. A community-driven prompt library.',
    stack: ['Next.js', 'MongoDB', 'NextAuth'],
    link: 'http://prompt-genius.vercel.app',
    github: 'https://github.com/AyushV14/PromptGenius',
  },
  {
    category: 'react native',
    name: 'Budget App',
    Description: 'Personal budgeting app built with Expo and React Native to track expenses on the go.',
    stack: ['React Native', 'Expo'],
    link: '/',
    github: 'https://github.com/AyushV14/Budget-app',
  },
  {
    category: 'react js',
    name: 'Veggie Verse',
    Description: 'Personalized recipe suggestions based on the ingredients you have on hand.',
    stack: ['React', 'Tailwind'],
    link: 'https://veggie-verse.netlify.app/',
    github: 'https://github.com/AyushV14',
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
          <TabsList className="w-full grid h-full md:grid-cols-4 lg:grid-cols-8 lg:max-w-[1080px] mb-12 mx-auto md:border dark:border-none">
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