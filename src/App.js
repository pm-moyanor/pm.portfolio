// App.js
import { useEffect, useRef, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Contact from "./components/Contact";



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
      if (targetSection.scrollHeight > window.innerHeight) {
        targetSection.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      } else {
        scrollRef.current.scrollTo({
          top: targetSection.offsetTop,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <div className="App">
      <div className="background-overlay">
        <img src="./background-pattern.jpg" alt="background-pattern" className="background-image w-full h-full" />
        <div className="overlay"></div>
      </div>


      <main
        ref={scrollRef}
        className="scroll-container min-h-screen h-screen w-full snap-mandatory snap-y overflow-scroll"
      >
        <Header pages={pages} scrollToSection={scrollToSection} />
        {pages.map((page, index) => (
          <div className="min-h-screen snap-start"> {page.component}</div>
        ))}
      </main>
    </div>
  );
}

export default App;
