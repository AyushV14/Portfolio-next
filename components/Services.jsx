import {Smartphone, Blocks , Sparkles} from 'lucide-react'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'


const servicesData = [
    {
        icon: <Blocks size={72} strokeWidth={0.8} />,
        title: 'Full Stack Web Development',
        description: 'End-to-end web apps with Next.js, React, Node.js, and Prisma - backed by MongoDB, PostgreSQL, or Firebase.'
    },
    {
        icon: <Smartphone size={72} strokeWidth={0.8} />,
        title: 'Mobile App Development',
        description: 'Cross-platform mobile apps with React Native and Expo - real-time chat, push notifications, and in-app purchases.'
    },
    {
        icon: <Sparkles size={72} strokeWidth={0.8} />,
        title: 'AI Integration & DevOps',
        description: 'Bringing Gemini, OpenAI, and Hugging Face models into products. Containerized with Docker, shipped on AWS with CI/CD.'
    },
]



const Services = () => {
  return (
    <section className='mb-12 xl:mb-36'>
        <div className='container mx-auto'>
            <h2 className='section-title mb-12 xl:mb-24 text-center mx-auto'>My Services</h2>
            {/* Grid Items */}
            <div className='grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8'>
                {servicesData.map((item,index)=>{
                    return (
                        <Card className="w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative" key={index}>
                            <CardHeader className="text-primary absolute -top-[60px] ">
                                <div className='w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center'>{item.icon}</div>
                            </CardHeader>
                            <CardContent className="text-center">
                                <CardTitle className="mb-4">{item.title}</CardTitle>
                                <CardDescription className="text-lg">{item.description}</CardDescription>
                            </CardContent>
                        </Card>
                    )
                })}
            </div>
        </div>
    </section>
  )
}

export default Services