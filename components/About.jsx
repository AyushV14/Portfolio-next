import DevImg from "./DevImg";  // Ensure this import is correct
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User2, MailIcon, HomeIcon, PhoneIcon, GraduationCap, Calendar, Briefcase } from "lucide-react";
import Image from "next/image";

const infoData = [
    {
        icon: <User2 size={20} />,
        text: 'Ayush Vikhrankar',
    },
    {
        icon: <PhoneIcon size={20} />,
        text: '+91-7208521535',
    },
    {
        icon: <MailIcon size={20} />,
        text: 'vikharankarayush14@gmail.com',
    },
    {
        icon: <Calendar size={20} />,
        text: 'Born on 14th December 2004',
    },
    {
        icon: <GraduationCap size={20} />,
        text: 'B-Tech in Information and Technology',
    },
    {
        icon: <HomeIcon size={20} />,
        text: 'Mumbai, India',
    },
];

const QualificationData = [
    {
        title:'education',
        data:[
            {
                university:'KJ Somaiya College of Engineering',
                qualification:'Bachelor of Technology in Information Technology',
                years:'2022-2026',
            },
        ]
    },
    {
        title:'experience',
        data:[
            {
                company:'Freelance Web Developer',
                role:' Making website for clients',
                years:'June 2024 - Aug 202',
            },
            {
                company:'Real Happiness Of Life Foundation',
                role:'Website Team lead ',
                years:'Sept 2024 - Dec 2024',
            },
        ]
    },
]

const skillData = [
    {
        title:'Skills',
        data:[
            {
                name:'HTML CSS Javascript PHP',
            },
            {
                name:'Frontend development Next Js React Js ',
            },
            {
                name:'Backend development Mongo Db Strapi ',
            },
            {
                name: 'Version Control Git GitHub GitLab',
            },
            {
                name: 'Mobile Development React Native Flutter',
            },
        ]
    },
    {
        title:'Tools',
        data:[
            {
                imgPath:'/about/vscode.svg',
            },
            {
                imgPath:'/about/figma.svg',
            },
            {
                imgPath:'/about/notion.svg',
            },
            {
                imgPath:'/about/wordpress.svg',
            },
            {
                imgPath:'/about/figma.svg',
            },
           
        ]
    },
]

const About = () => {

    const getData = (arr , title)=>{
        return arr.find((item)=> item.title === title);
    };

    return (
        <section className="xl:h-[860px] pb-12 xl:py-24 py-44 ">
            <div className="container mx-auto">
                <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">About Me</h2>
                <div className="flex flex-col xl:flex-row">
                    {/* Image */}
                    <div className="hidden xl:flex flex-1 relative">
                        <DevImg containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative" imgSrc="/about/developer.png" />
                    </div>
                    {/* Tabs */}
                    <div className="flex-1">
                        <Tabs defaultValue="personal">
                            <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">Personal Information</TabsTrigger>
                                <TabsTrigger className="w-[162px] xl:w-auto" value="Qualifications">Qualification</TabsTrigger>
                                <TabsTrigger className="w-[162px] xl:w-auto" value="Skills">Skills</TabsTrigger>
                            </TabsList>
                    
                            <div className="text-lg mt-12 xl:mt-8">
                                {/* personal */}
                                <TabsContent value="personal">
                                    <div className="text-center xl:text-left">
                                        <h3 className="h3 mb-4">Creative Solutions, Exceptional Quality</h3>
                                        <p className="subtitle max-m-xl max-auto xl:mx-0">
                                            I specialize in crafting intuitive websites with cutting-edge technology, delivering dynamic and engaging user experiences.
                                        </p>
                                        {/* Icons */}
                                        <div className="grid xl:grid-cols-2 gap-4 mb-12">
                                            {infoData.map((item, index) => (
                                                <div  className="flex items-center gap-x-4 mx-auto xl:mx-0" key={index}>
                                                    <div className="text-primary">{item.icon}</div>
                                                    <div className="text-base">{item.text}</div>
                                                </div>
                                            ))}
                                        </div>
                                        {/* Language */}
                                        <div className="flex flex-col gap-y-2">
                                            <div className="text-primary">Language Skill</div>
                                            <div className="border-b border-border"></div>
                                            <div>English , Hindi , Marathi , Gujrati </div>
                                        </div>
                                    </div>
                                </TabsContent>
                                {/* Qualifications */}
                                <TabsContent value="Qualifications">
                                    <div>
                                        <h3 className="h3 mb-8 text-center xl:text-left">My Awesome Journey</h3>
                                        {/* Experience education wrapper */}
                                        <div className="grid md:grid-cols-2 gap-y-8">
                                            {/* Expericence */}
                                            <div className="flex flex-col gap-y-6">
                                                <div className="flex gap-x-4 items-center tex-[22px] text-primary">
                                                    <Briefcase />
                                                    <h4 className="capitalize font-medium">
                                                        {getData(QualificationData, 'experience').title}
                                                    </h4>
                                                </div>
                                                {/* List */}
                                                <div className="flex flex-col gap-y-8">
                                                {getData(QualificationData, 'experience').data.map((item,index)=>{
                                                    const {company, role , years} = item;
                                                    return (
                                                        <div  className="flex gap-x-8 group" key={index}>
                                                            <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                                <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                                            </div>
                                                            <div>
                                                                <div className="font-semibold text-xl leading-none mb-2">{company}</div>
                                                                <div className="text-lg leading-none text-muted-foreground mb-4">{role}</div>
                                                                <div className="text-base font-medium">{years}</div>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                                </div>
                                            </div>
                                            {/* Education */}
                                            <div className="flex flex-col gap-y-6">
                                                <div className="flex gap-x-4 items-center tex-[22px] text-primary">
                                                    <GraduationCap size={20} />
                                                    <h4 className="capitalize font-medium">
                                                        {getData(QualificationData, 'education').title}
                                                    </h4>
                                                </div>
                                                {/* List */}
                                                <div className="flex flex-col gap-y-8">
                                                {getData(QualificationData, 'education').data.map((item,index)=>{
                                                    const {university, qualification , years} = item;
                                                    return (
                                                        <div  className="flex gap-x-8 group" key={index}>
                                                            <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                                <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                                            </div>
                                                            <div>
                                                                <div className="font-semibold text-xl leading-none mb-2">{university}</div>
                                                                <div className="text-lg leading-none text-muted-foreground mb-4">{qualification}</div>
                                                                <div className="text-base font-medium">{years}</div>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>
                                {/* SKills */}
                                <TabsContent value="Skills">
                                    <div className="text-center xl:text-left">
                                        <h3 className="h3 mb-8 ">Tools I Use Everyday</h3>
                                        {/* skills */}
                                        <div className="mb-16 ">
                                            <h4 className="text-xl font-semibold mb-2">Skills</h4>
                                            <div className="border-b border-border mb-4"></div>
                                            {/* Skills List */}
                                            <div>
                                                {getData(skillData, 'Skills').data.map((item,index)=>{
                                                    const {name} = item;
                                                    return (
                                                        <div className="w-2/4 text-center xl:text-left mx-auto xl:mx-0" key={index}>
                                                            <div className="font-medium">{name}</div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                        {/* TOOLS */}
                                        <div>
                                            <h4 className="text-ml font-semibold mb-2 xl:text-left ">Tools</h4>
                                            <div className="border-b border-border mb-4"></div>
                                            {/* tools list */}
                                            <div className="flex gap-x-8 justify-center xl:justify-start">
                                                {getData(skillData,"Tools").data.map((item,index)=>{
                                                    const {imgPath} = item;
                                                    return(
                                                        <div key={index}> 
                                                            <Image 
                                                                src={imgPath}
                                                                width={48}
                                                                height={48}
                                                                alt=''
                                                                priority
                                                            />
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                    
                                </TabsContent>
                            </div>
                        </Tabs>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
