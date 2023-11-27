import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";


const Accordion = ({ i, expanded, setExpanded, project, getRandomColor }) => {
  const isOpen = i === expanded;

  return (
    <div className="h-0">
      <motion.header
        initial={false}
        animate={{ backgroundColor: isOpen ? "#FF0088" : "#0055FF" }}
        onClick={() => setExpanded(isOpen ? false : i)}
      />
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="h-48 border">card</div>
            <ProjectCard {...project} getRandomColor={getRandomColor} />
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
};



   export default Accordion;
