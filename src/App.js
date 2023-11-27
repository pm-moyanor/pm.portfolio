// App.js
import { useEffect, useRef, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { motion } from "framer-motion";


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


function App() {
  const scrollRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 1,
      }
    );


    const currentRef = scrollRef.current; 

    if (currentRef) {
      observer.observe(currentRef);
    }
  
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [scrollRef]);

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
        {pages.map((page,index) => (
          <motion.div
            id={page.id}
            key={page.id}
            initial={isVisible ? { opacity: 0, y: 50 } : {}}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            exit={isVisible ? { opacity: 0, y: -50 } : {}}
            transition={{ duration: 0.5, delay: isVisible ? index * 0.1 : 0 }}
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
