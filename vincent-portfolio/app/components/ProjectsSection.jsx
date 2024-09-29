"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area"

const projectsData = [
    {
        id: 1,
        title: "React Portfolio Website",
        description: "Project 1 description",
        image: "/images/projects/1.png",
        tag: ["All", "Web"],
        gitUrl: "https://react-icons.github.io/react-icons/",
        previewUrl: "/",
    },
    {
        id: 2,
        title: "Potography Portfolio Website",
        description: "Project 2 description",
        image: "/images/projects/1.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 3,
        title: "E-commerce Application",
        description: "Project 3 description",
        image: "/images/projects/1.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 4,
        title: "Food Ordering Application",
        description: "Project 4 description",
        image: "/images/projects/1.png",
        tag: ["All", "Mobile"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 5,
        title: "React Firebase Template",
        description: "Authentication and CRUD operations",
        image: "/images/projects/1.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 6,
        title: "Full-stack Roadmap",
        description: "Project 5 description",
        image: "/images/projects/6.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 7,
        title: "Full-stack Roadmap",
        description: "Project 5 description",
        image: "/images/projects/6.png",
        tag: ["All", "Other"],
        gitUrl: "/",
    },
];

const ProjectsSection = () => {
    const [tag, setTag] = useState("All");

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filteredProjects = projectsData.filter((project) =>
        project.tag.includes(tag)
    );

    // Animation

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };

    return (
        <section id="projects">
            <div className="pt-14">
                <h2 className="text-center text-4xl font-bold text-white mt-4 mb-5 md:mb-7">
                    My Projects
                </h2>
                <div className="text-white sm:flex sm:flex-row grid grid-rows-2 grid-cols-2 justify-center items-center gap-2 py-6">
                    <ProjectTag
                        onClick={handleTagChange}
                        name="All"
                        isSelected={tag === "All"}
                    />
                    <ProjectTag
                        onClick={handleTagChange}
                        name="Web"
                        isSelected={tag === "Web"}
                    />
                    <ProjectTag
                        onClick={handleTagChange}
                        name="Mobile"
                        isSelected={tag === "Mobile"}
                    />
                    <ProjectTag
                        onClick={handleTagChange}
                        name="Other"
                        isSelected={tag === "Other"}
                    />
                </div>
                <ScrollArea className="h-[800px]">
                    <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
                        {filteredProjects.map((project, index) => (
                            <motion.li
                                key={index}
                                variants={cardVariants}
                                initial="initial"
                                animate={isInView ? "animate" : "initial"}
                                transition={{ duration: 0.3, delay: index * 0.4 }}
                            >
                                <ProjectCard
                                    key={project.id}
                                    title={project.title}
                                    description={project.description}
                                    imgUrl={project.image}
                                    gitUrl={project.gitUrl}
                                    previewUrl={project.previewUrl}
                                />
                            </motion.li>
                        ))}
                    </ul>
                </ScrollArea>
            </div>
        </section>
    );
};

export default ProjectsSection;