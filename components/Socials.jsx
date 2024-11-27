'use client'

import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookFill,
  RiInstagramFill
} from 'react-icons/ri'

import Link from 'next/link'

const icons = [
  {
    path:'https://github.com/AyushV14',
    name:<RiGithubFill/>
    
  },
  {
    path:'https://www.linkedin.com/in/ayush-vikharankar-904431259/',
    name:<RiLinkedinFill/>
  },
  {
    path:'https://www.youtube.com/@ayushvikharankar2115',
    name:<RiYoutubeFill/>
  },
  {
    path:'/',
    name:<RiFacebookFill/>
  },
  {
    path:'https://www.instagram.com/ayushvik14/',
    name:<RiInstagramFill/>
  },
]

const Socials = ({containerStyles , iconStyles}) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index)=>{
        return <Link href={icon.path} key={index} target="_blank">
          <div className={`${iconStyles}`}>{icon.name}</div>
        </Link>
      })}
    </div>
  )
}

export default Socials