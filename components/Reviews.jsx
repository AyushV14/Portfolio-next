'use client'

import Image from "next/image"
import { Card,CardDescription , CardHeader , CardTitle } from "@/components/ui/card"

// import swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import {Pagination} from 'swiper/modules'


//components
import {Swiper, SwiperSlide} from "swiper/react"

const reviewsData = [
    {
        avatar: '/reviews/avatar-1.png',
        name: 'Rajesh Kumar',
        job: 'Chef',
        review: 'The spices used in this recipe are amazing! I loved the flavors.',
    },
    {
        avatar: '/reviews/avatar-2.png',
        name: 'Priya Sharma',
        job: 'Interior Designer',
        review: 'The designs are innovative and vibrant, they really reflect modern trends.',
    },
    {
        avatar: '/reviews/avatar-3.png',
        name: 'Arvind Rao',
        job: 'Game Developer',
        review: 'The game mechanics are smooth, but I would love to see more levels.',
    },
    {
        avatar: '/reviews/avatar-4.png',
        name: 'Neha Patel',
        job: 'Therapist',
        review: 'I appreciate how comforting and supportive the sessions were.',
    },
    {
        avatar: '/reviews/avatar-1.png',
        name: 'Amit Verma',
        job: 'Engineer',
        review: 'Great product! It helped solve several technical challenges I was facing.',
    },
    {
        avatar: '/reviews/avatar-2.png',
        name: 'Meera Desai',
        job: 'Video Editor',
        review: 'Editing is so much faster with this tool! The features are top-notch.',
    },
];


const Reviews = () => {
  return (
    <section className="mb-12 xl:mb-32 ">
        <div className="container mx-auto">
            <h2 className="section-title mb-12 text-center mx-auto">Reviews</h2>
            {/* Slider */}
            <Swiper className="h-[350px]" 
                slidesPerView={1} 
                breakpoints={{
                    640:{slidesPerView:2},
                    1300:{slidesPerView:3},
                }}
                spaceBetween={30}
                modules={[Pagination]}
                pagination={{
                    clickable:true,
                }}
            >
                {reviewsData.map((person,index)=>{
                    return (
                        <SwiperSlide key={index}>
                            <Card className='bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px]'>
                                <CardHeader className='p-0 mb-10'>
                                    <div className="flex  items-center gap-x-4">
                                        {/* Image */}
                                        <Image 
                                            src={person.avatar}
                                            width={70}
                                            height={70}
                                            alt=" "
                                            priority
                                        />
                                        {/* Name */}
                                        <div className="flex flex-col">
                                            <CardTitle>{person.name}</CardTitle>
                                            <p>{person.job}</p>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardDescription className='text-lg text-muted-foreground'>{person.review}</CardDescription>
                            </Card>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    </section>
  )
}

export default Reviews