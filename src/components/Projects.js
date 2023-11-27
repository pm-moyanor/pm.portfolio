import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { motion, AnimatePresence } from "framer-motion";

const AccordionItem = ({ project, expanded, toggleExpand, getRandomColor }) => {
  const isOpen = expanded === project.id;
  const cardHeight = isOpen
    ? "h-[320px] md:h-[450px]"
    : "h-[90px] md:h-[120px]";

  return (
    <div
      className={`relative overflow-y-auto rounded-lg m-px md:min-w-[500px] ${cardHeight} transition-all duration-300`}
      key={project.id}
      style={{overflow: `${isOpen ? "auto" : "hidden"}`}}
      onClick={() => toggleExpand(project.id)}
    >
      <ProjectCard
        {...project}
        expanded={isOpen}
        getRandomColor={getRandomColor}
      />
    </div>
  );
};

function Projects({ getRandomColor }) {
  const [expanded, setExpanded] = useState(false);

  const projects = [
    {
      id: "store",
      title: "Litton",
      label: "e-commerce",
      description: "E-Commerce Website for audio products using NextJs",
      image: "screens-ecommerce.gif",
      githubLink: "https://github.com/pm-moyanor/Litton-ecommerce",
      demoLink: "https://litton-ecommerce.netlify.app/layout",
    },
    {
      id: "bakery",
      title: "Bollo Güella",
      label: "freelance",
      description:
        "Bollo Güella is an artisan bread bakery located in Mendoza, Argentina.",
      image: "screens-bollo-guella.gif",
      githubLink: "https://github.com/pm-moyanor/next-bollo-guella",
      demoLink: "https://main--friendly-mandazi-cb4459.netlify.app/",
    },
    {
      id: "map",
      title: "CripeMapPro",
      label: "hackathon",
      description:
        "This project was created in collaboration for the Hackathon for Social Good 2023. It provides interactive access to crime data",
      image: "crimemappro-screenshot.png",
      githubLink: "https://github.com/pm-moyanor/wwwcode-hackaton-crimelocator",
      demoLink: "https://litton-ecommerce.netlify.app/layout",
    },
    {
      id: "game",
      title: "Boolebots",
      label: "collaboration",
      description:
        "BooleBots is a collaboration project, this fun game has it's foundation in boolean logic.",
      image: "screens-boolebots.gif",
      githubLink: "https://github.com/chingu-voyages/v44-tier2-team-25",
      demoLink: "https://boolebots25.netlify.app",
    },
  ];

  const toggleExpand = (projectId) => {
    setExpanded((prevExpanded) =>
      prevExpanded === projectId ? false : projectId
    );
  };

  const enterFromRightVariants = {
    initial: {
      opacity: 0,
      x: 100,
    },
    animate: (index) => ({
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        delay: 0.05 * index,
      },
    }),
  };
  return (
    <section
      id="projects"
      className="flex flex-col min-h-screen items-end justify-center pt-4 m-8"
    >
      <div className="w-full mb-2 md:mb-8 lg:mb-0">
        <h1 className="whitespace-nowrap h-fit self-start text-[5rem] sm:text-[5rem] md:text-[8rem] lg:text-[10rem] text-end tracking-tighter pb-6 leading-none font-body font-extrabold">
          Projects .
        </h1>
      </div>

      <div className="flex relative flex-col h-full justify-center w-full max-w-4xl">
      {projects.map((project, index) => (
  <motion.div
    key={project.id}
    variants={enterFromRightVariants}
    initial="initial"
    whileInView="animate"
    viewport={{
      once: true,
    }}
    custom={index}
    className="mb-4" 
  >
    <AccordionItem
      project={project}
      expanded={expanded}
      toggleExpand={toggleExpand}
      getRandomColor={getRandomColor}
    />
  </motion.div>
))}
      </div>
    </section>
  );
}

export default Projects;