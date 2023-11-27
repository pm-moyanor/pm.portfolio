import React, { useEffect, useState } from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";

const Dot = ({getRandomColor,diameter}) => {
  const [isTapped, setIsTapped] = useState(false);
  const [color, setColor] = useState("grey");

  const x = useMotionValue(Math.random() * window.innerWidth);
  const y = useMotionValue(Math.random() * window.innerHeight);
  const controls = useAnimation();

  useEffect(() => {
    const floatAnimation = async () => {
        while (true) {
          await controls.start({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            transition: {
              duration: 8,
              ease: (t) => Math.sin(t * Math.PI * 2) * Math.sin(t * Math.PI * 2)
            }
          });
        }
      };
      floatAnimation();
    }, [controls]);

  const handleHoverStart = () => {
    controls.start({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      transition: { duration: Math.random() * 1.5 + 1.5, ease: "circInOut" }
    });
  };

  const handleTap = () => {
    setIsTapped(!isTapped);
    setColor(getRandomColor())  
  };

  return (
    <motion.div
      onTap={handleTap}
      whileHover={{ scale: 1.5, transition: { duration: 1.5 } }}
      onHoverStart={handleHoverStart}
      animate={controls}
      style={{
        position: "absolute",
        width: `${diameter}px`,
        height: `${diameter}px`,
        borderRadius: "50%",
        background: color, 
        x,
        y
      }}

    />
  );
};

export default Dot;
