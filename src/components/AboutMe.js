import React from "react";
import NameBanner from "./NameBanner";

function AboutMe({ getRandomColor }) {
  const text = `I'm a frontend developer blending creativity, meticulous attention to detail, and problem-solving skills to craft responsive, user-centric web applications using HTML, CSS, JavaScript, and React.

  My background in silversmithing fuels my commitment to transforming materials into functional, refined pieces. This dedication translates into crafting structured, polished code in my work as a developer.`;
 
  const coloredText = text.split(/(,\s*|\s+)/).filter(Boolean).map((char, index) => (
    <span
      key={index}
      className="text-sm sm:text-sm md:text-md lg:text-lg text-gray-300 font-light"
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
      <div className="my-4 text-left max-w-md sm:max-w-lg md:max-w-xl lg:max-w-3xl overflow-auto">
        <p className="text-justify tracking-tighter"> {coloredText}</p>
      </div>
    </section>
  );
}

export default AboutMe;
