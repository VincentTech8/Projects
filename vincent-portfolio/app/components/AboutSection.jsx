"use client"
import React from 'react'
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaFigma,
  FaReact,
  FaNodeJs
} from 'react-icons/fa'
import {
  SiTailwindcss,
  SiNextdotjs
} from 'react-icons/si'

// About data
const about = {
  title: "About me",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Vincent",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+61) 0466 598 833",
    },
    {
      fieldName: "Experience",
      fieldValue: "2+ Years",
    },
    {
      fieldName: "Availability",
      fieldValue: "True",
    },
    {
      fieldName: "Email",
      fieldValue: "vincentc.job@gmail.com",
    },
    {
      fieldName: "LinkedIn",
      fieldValue: "www.linkedin.com/in/vincentc08",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indonesian",
    },
    {
      fieldName: "Language",
      fieldValue: "English, Indonesian, Malay",
    },
  ]
};

// Experience data
const experience = {
  title: "My experience",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  items: [
    {
      company: "Monash University",
      position: "Full Stack Developer",
      duration: "Feb 2024 - May 2024",
    },
    {
      company: "Monash University",
      position: "Accessible STEM Activity Designer",
      duration: "Jun 2023 - Jul 2023",
    },
    {
      company: "Monash University",
      position: "R Shiny Developer and Time Series Analyst",
      duration: "Nov 2022 - Feb 2023",
    },
    {
      company: "The Hatter & The Hare",
      position: "Waiter, Dishwasher, and Training Supervisor",
      duration: "Feb 2021 - April 2022",
    },
  ]
};

// Education data
const education = {
  title: "My education",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  items: [
    {
      institution: "Monash University",
      degree: "Master for Information Technology in Software Engineering",
      duration: "2022 - 2024",
    },
    {
      institution: "Monash University",
      degree: "Bachelor of Commerce in Finance and Econometrics",
      duration: "2019 - 2021",
    },
  ]
};

// Skill data
const skill = {
  title: "My skill",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
  ]
};

import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const AboutSection = () => {
  return (
    <section>
      <div className='min-h-[70vh] flex items-center justify-center py-12 xl:py-0'>
        <div className="container mx-auto">
          <Tabs defaultValue='experience' className='flex flex-col xl:flex-row gap-[60px]'>
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
              <TabsTrigger value="about">About me</TabsTrigger>
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
            </TabsList>
            {/* content */}
            <div className='text-white min-h-[60vh] w-full'>
              {/* about */}
              <TabsContent value="about" className="w-full">
                about
              </TabsContent>
              {/* experience */}
              <TabsContent value="experience" className="w-full">
                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                  <h3 className='text-4xl font-bold'>
                    {experience.title}
                  </h3>
                  <p className='max-w-[680px] text-white/60 mx-auto xl:mx-0'>
                    {experience.description}
                  </p>
                  <ScrollArea className="h-[300px]">
                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                      {experience.items.map((item, index) => {
                        return (
                          <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                            <span className='bg-clip-text text-transparent' style={{ backgroundImage: "linear-gradient(to right, #96EC98, #01EEFC)" }}>
                              {item.duration}
                            </span>
                            <h3 className='text-lg max-w-[360px] min-h-[60px] text-center lg:text-left'>
                              {item.position}
                            </h3>
                            <div className='flex items-center gap-3'>
                              {/* dot */}
                              <span className='w-[6px] h-[6px] rounded-full' style={{ backgroundImage: "linear-gradient(to right, #96EC98, #01EEFC)" }}></span>
                              <p className='text-white/60'>{item.company}</p>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>
              {/* education */}
              <TabsContent value="education" className="w-full">
                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                  <h3 className='text-4xl font-bold'>
                    {education.title}
                  </h3>
                  <p className='max-w-[680px] text-white/60 mx-auto xl:mx-0'>
                    {education.description}
                  </p>
                  <ScrollArea className="h-[300px]">
                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                      {education.items.map((item, index) => {
                        return (
                          <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                            <span className='bg-clip-text text-transparent' style={{ backgroundImage: "linear-gradient(to right, #96EC98, #01EEFC)" }}>
                              {item.duration}
                            </span>
                            <h3 className='text-lg max-w-[360px] min-h-[60px] text-center lg:text-left'>
                              {item.degree}
                            </h3>
                            <div className='flex items-center gap-3'>
                              {/* dot */}
                              <span className='w-[6px] h-[6px] rounded-full' style={{ backgroundImage: "linear-gradient(to right, #96EC98, #01EEFC)" }}></span>
                              <p className='text-white/60'>{item.institution}</p>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>
              {/* skills */}
              <TabsContent value="skills" className="w-full">
                skills
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  )
}

export default AboutSection