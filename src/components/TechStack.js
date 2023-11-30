import React, { useEffect } from "react";
import { motion } from "framer-motion";

const techStackString =
  "Javascript  HTML5 CSS Sass Bootstrap React TailwindCSS Figma GitHub Git";

const TechStack = ({ activeSection, getRandomColor }) => {
  const fullText = techStackString.repeat(50);

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
  useEffect(() => {
    const stopAnimations = () => {
      const animatingElements = document.querySelectorAll(".motion-effect");
      animatingElements.forEach((element) => {
        motion.cancel(element);
      });
    };

    if (!activeSection || activeSection !== "techstack") {
      stopAnimations();
    }
  }, [activeSection]);

  return (
    <section
      id="techstack"
      className="flex flex-col justify-center h-screen overflow-hidden w-full z-30"
    >
      <div className="flex justify-between items-end mr-8 ">
        <div className="w-full">
          <h1 className="w-full text-[5rem] sm:text-[5rem] md:text-[8rem] text-end tracking-tighter lg:text-[9rem] leading-none font-body font-extrabold whitespace-break-spaces">
            Tech Stack
          </h1>
          <div className="leading-tighter text-lg sm:text-lg md:text-2xl lg:text-3xl uppercase text-end text-gray-400">
            {techStackString.split(" ").map((word, index) => (
              <motion.p
                key={`${word}/${index}`}
                variants={enterFromRightVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                custom={index}
              >
                {word}
              </motion.p>
            ))}
          </div>
        </div>
      </div>

      <motion.div
        className="flex relative w-full items-end leading-none "
        animate={{
          x: ["0%", "-100%"],
          transition: {
            duration: 40,
            repeatType: "loop",
            ease: "linear",
          },
        }}
        style={{ color: getRandomColor(), whiteSpace: "nowrap" }}
      >
        <span className=" text-[13vh] sm:text-[13vh] md:text-[25vh] font-extrabold font-body tracking-tighter">
          {fullText.split(" ").map((word, index) => {
            return (
              <motion.span
                key={`${word}/slide/${index}`}
                style={{ color: getRandomColor() }}
              >
                {word}{" "}
              </motion.span>
            );
          })}
        </span>
      </motion.div>
    </section>
  );
};

export default TechStack;
