import React from 'react';
import { motion } from 'framer-motion';

function NameBanner({ getRandomColor }) {
  const firstName = 'Paula';
  const lastName = 'Moyano';

  const characterVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 20,
        delay: 0.07 * index,
      },
    }),
  };

  return (
    <div className="w-full sm:w-auto flex flex-col justify-end items-start mb-2">
      <h3 className="text-customRed ml-2 sm:ml-2 text-md sm:text-md md:text-lg lg:text-xl leading-tight font-body">
        HELLO MY NAME IS
      </h3>
      <div className="flex flex-wrap">
        <div className="flex leading-none w-full -mb-3 sm:-mb-3 md:-mb-6 lg:-mb-8 xl:-mb-10 ">
          {[...firstName].map((char, index) => (
            <motion.p
              key={index}
              variants={characterVariants}
              initial="initial"
              whileInView="animate"
              custom={index}
              style={{ display: 'inline' }}
              className="text-[4.8rem] sm:text-[4.8rem] md:text-[8rem] lg:text-[10rem] xl:text-[12rem] font-museoModerno font-normal tracking-tight"
            >
{char}
            </motion.p>
          ))}
        </div>
        <div className="flex leading-none w-full">
          {[...lastName].map((char, index) => (
            <motion.span
              key={index}
              variants={characterVariants}
              initial="initial"
              whileInView="animate"
              custom={index}
              style={{ display: 'inline-block' }}
              className="text-[4.6rem] sm:text-[4.6rem] md:text-[8rem] lg:text-[10rem] xl:text-[12rem] font-museoModerno font-normal tracking-tight"
            >
    {char}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NameBanner;
