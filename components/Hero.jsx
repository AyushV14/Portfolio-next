import Link from "next/link"
import { Button } from "./ui/button"
import { Download, Send } from "lucide-react"

import {
    RiBriefcase4Fill,
    RiTrophyFill,
    RiTodoFill,
    RiArrowDownLine
} from 'react-icons/ri'

//components
import DevImg from "./DevImg"
import Badge from "./Badge"
import Socials from "./Socials"

const Hero = () => {
  return (
  <section className=" h-[84vh] xl:pt-28 py-12 xl:py-24 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
    <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
            {/* Text */}
            <div className="flex max-w-[700px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
              <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">Full Stack & Mobile Developer</div>
              <h1 className="h1 mb-4">Hello, my name is Ayush Vikharankar</h1>
              <p className="subtitle max-w-[490px] mx-auto xl:mx-0">B.Tech IT student with AI Honours at KJSCE. I build AI-powered, scalable web and mobile applications using React Native, Next.js, the MERN stack, and modern DevOps tooling.</p>

              {/* Buttons */}
              <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
                <Link href='/contact'>
                  <Button  className="gap-x-2">
                    Contact me <Send size={18}/>
                  </Button>
                </Link>
                <Link href='/hero/Ayush Vikharankar- Resume.pdf' passHref target="_blank">
                  <Button variant='secondary' className="gap-x-2" as="a" download >
                    Download CV <Download size={18}/>
                  </Button>
                </Link>
              </div>
              {/* SOCIALS */}
              <Socials containerStyles='flex gap-x-6 mx-auto xl:mx-0' iconStyles='text-foreground text-[22px] hover:text-primary transition-all'/>
            </div>
            {/* Image */}
            <div className="hidden xl:flex relative">

              {/* Badge 1 */}
              <Badge
                icon={<RiBriefcase4Fill/>}
                endCountNum={3}
                badgeText='Internships Completed'
                containerStyles='absolute top-[24%] -left-[5rem]'
              />
              {/* Badge 2 */}
              <Badge
                icon={<RiTodoFill/>}
                endCountNum={12}
                endCountText='+'
                badgeText='Projects Built'
                containerStyles='absolute top-[80%] -left-[1rem]'
              />

              {/* Badge 3 */}
              <Badge
                icon={<RiTrophyFill/>}
                endCountNum={5}
                endCountText='+'
                badgeText='Hackathons & Awards'
                containerStyles='absolute top-[55%] -right-8'
              />

              <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2">
              </div>
              <DevImg containerStyles="bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom" imgSrc='/hero/developer1.png' />
            </div>
        </div>
        {/* Icon */}
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
            <RiArrowDownLine className="text-3xl text-primary"/>
        </div>
    </div>
  </section>
  )
}

export default Hero