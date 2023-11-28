import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback, useMemo } from "react";

function ProjectCard({
  title,
  description,
  image,
  githubLink,
  label,
  demoLink,
  getRandomColor,
  id,
  expanded,
}) {
  const [isAnimating, setIsAnimating] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [showGif, setShowGif] = useState(false);
  const [overlayColor, setOverlayColor] = useState("");

  const getColorCallback = useCallback(() => {
    return getRandomColor();
  }, [getRandomColor]);

  const memoizedGetColorCallback = useMemo(
    () => getColorCallback(),
    [getColorCallback]
  );

  useEffect(() => {
    const color = memoizedGetColorCallback;
    setOverlayColor(color);

    return () => {
      setOverlayColor("");
    };
  }, [memoizedGetColorCallback]);
  

  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      setIsAnimating(false);
    }, 2000);

    return () => clearTimeout(animationTimeout);
  }, []);

  useEffect(() => {
    setShowGif(expanded);
  }, [expanded]);

  const styleLinks =
    " text-slate-300 px-2 py-px cursor-pointer text-xs sm:text-sm md:text-md lg:text-lg hover:text-customRed hover:scale-105 transition-all duration-200";

  return (
    <div key={id + title} className="absolute w-full h-full top-0 left-0">
      <div className="absolute bottom-4 right-0 p-2 z-20 w-[80px] md:w-[140px]  bg-customBlack flex flex-col md:flex-row justify-around rounded-l-lg ">
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className={styleLinks}
        >
          code
        </a>
        <a
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className={styleLinks}
        >
          demo
        </a>
      </div>

      <div
        className="absolute top-0 left-0 items-start justify-start rounded-lg z-10 w-full h-full"
        onMouseEnter={() => {
          if (!isAnimating) {
            setIsHovered(true);
          }
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-customBlack opacity-20 z-50 rounded-sm"></div>

        <div className="absolute h-full w-full overflow-hidden rounded-lg">
          {showGif && (
            <motion.img
              src={image}
              alt={`Screenshot of ${title}`}
              className="w-full h-full object-cover"
              initial={{ opacity: 0, filter: "blur(5px)", scale: 1 }}
              animate={{ opacity: 1, filter: "blur(0px)", scale: 1.1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            />
          )}
        </div>

        <AnimatePresence>
          {isHovered && expanded ? (
            <motion.div
              key={`${id}/overlay`}
              className="absolute top-0 left-0 h-full w-full bg-customBlack opacity-20 z-30 rounded-lg"
              style={{ backgroundColor: overlayColor }}
              initial={{ opacity: 1, width: "100%" }}
              animate={{ opacity: 0.9, width: "60%" }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            ></motion.div>
          ) : (
            <motion.div
              key={`${id}/overlay`}
              className="absolute top-0 left-0 w-full h-full bg-customBlack opacity-20 z-30 rounded-lg"
              style={{ backgroundColor: overlayColor }}
              initial={{ opacity: 0, width: "50%" }}
              animate={{ opacity: 0.95, width: "100%" }}
              exit={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            ></motion.div>
          )}

          <motion.div
            key={`${id}/shade`}
            className="absolute top-0 left-0 w-full h-full flex flex-col justify-around items-start z-40 rounded-sm"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5 }}
          >
            <div
              key={`${id}/info`}
              className="absolute z-40 flex justify-start flex-col items-start p-4 h-full rounded-sm"
            >
              <div className="pb-4">
                <h4 className="text-black leading-tight text-[1rem] sm:text-[0.9rem] md:text-[1rem] lg:text-[1.2rem]">
                  {label}
                </h4>
                <h3 className=" leading-none text-black text-[1.8rem] md:text-[3.2rem] font-extrabold mb-8">
                  {title}
                </h3>
              </div>

              <p className="text-gray-200 mb-6 text-xs sm:text-xs md:text-sm lg:text-md w-1/2">
                {description}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default ProjectCard;
