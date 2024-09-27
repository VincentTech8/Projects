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
    <div className='min-h-[70vh] flex items-center justify-center py-12 xl:py-0'>
      <div className="container mx-auto">
        <Tabs defaultValue='about' className='flex flex-col xl:flex-row gap-[60px]'>
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
              experience
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  )
}

export default AboutSection