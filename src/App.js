// App.js
import React, { useState, useEffect, useRef } from "react";

import "./App.css";
import Dot from "./components/Dot.js";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { motion, useAnimation } from "framer-motion";


const getRandomColor = () => {
  const baseRgb = [238, 49, 49];
  const variationRange = 120;
  const randomRgb = baseRgb.map((channel) =>
    Math.min(
      255,
      Math.max(
        0,
        channel +
          Math.floor(Math.random() * variationRange - variationRange / 2)
      )
    )
  );
  const randomColor = `rgb(${randomRgb.join(", ")})`;
  return randomColor;
};

const pages = [
  { id: "about", component: <AboutMe getRandomColor={getRandomColor} /> },
  { id: "techstack", component: <TechStack getRandomColor={getRandomColor} /> },
  { id: "projects", component: <Projects getRandomColor={getRandomColor} /> },
  { id: "contact", component: <Contact /> },
];

const wrapperVariants = {
  initial: {
    clipPath: "polygon(0 0, 0 0, 100% 0, 100% 0)",
    transition: { duration: 0.4 },
  },
  animate: {
    clipPath: "polygon(0 0, 0 100%, 100% 100%, 100% 0)",
    transition: { duration: 0.4, staggerChildren: 0.1 },
  },
  exit: {
    clipPath: "polygon(0 100%, 0 100%, 100% 100%, 100% 100%)",
    transition: { duration: 0.4 },
  },
};

function App() {
  const scrollRef = useRef(null);

  const scrollToSection = (targetId) => {
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      scrollRef.current.scrollTo({
        top: targetSection.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="App bg-customBlack">
      <Header pages={pages} scrollToSection={scrollToSection} />

      <main
        ref={scrollRef}
        className="scroll-container min-h-screen h-screen w-full bg-customBlack snap-mandatory snap-y  overflow-scroll"
      >
        {pages.map((page) => (
          <motion.div
            id={page.id}
            key={page.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen snap-start"
          >
            {page.component}
          </motion.div>
        ))}
      </main>
    </div>
  );
}

export default App;
