import React from "react";
import NameBanner from "./NameBanner";

function AboutMe({ getRandomColor }) {
  const text = `I'm a front-end developer with a unique background in silversmithing. My unique skill combines creativity, meticulous attention to detail, and robust problem-solving skills, focusing on making responsive, user-friendly web applications using HTML, CSS, JavaScript, and React.

  Inspired by my experience in silversmithing, I've honed the art of transforming raw materials into exquisite, functional pieces. As a developer, I apply that same dedication to crafting polished and well-structured code.
  
  Passionate about advancing my journey, I eagerly embrace new challenges that drive me to grow and innovate. Whether it's building captivating websites or unraveling intricate coding puzzles, I'm fully committed to creating beautiful pieces in the digital realm.`;
 
  const coloredText = text.split(/(,\s*|\s+)/).filter(Boolean).map((char, index) => (
    <span
      key={index}
      className="text-sm sm:text-sm md:text-md lg:text-md text-gray-300 font-light"
      style={{ color: getRandomColor() }}
    >
      {char}
    </span>
  ));

  return (
    <section
      id="about"
      className="flex flex-col justify-center items-start w-full h-screen p-4 md:p-8"
    >
      <NameBanner />
      <div className="mb-6 text-left max-w-md sm:max-w-lg md:max-w-xl lg:max-w-4xl overflow-auto">
        <p className="text-justify tracking-tighter"> {coloredText}</p>
      </div>
    </section>
  );
}

export default AboutMe;
