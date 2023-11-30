import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";

const Header = ({ pages, scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="nav fixed text-slate-300 bg-transparent py-6 h-18 flex justify-center items-center w-full p-2">
      <div className="container flex items-center justify-between mx-2 w-full lg:w-fit">
        {/* large screen */}
        <ul className=" hidden sm:hidden lg:flex items-center justify-center space-x-8 lg:space-x-12">
          {pages.map((page) => (
            <motion.li
              key={page.id}
              whileHover={{ borderBottom: "2px solid gray" }}
              style={{ borderBottom: "2px solid transparent" }}
            >
              <a
                href={`#${page.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(`#${page.id}`)}
                }
              >
                {page.id.charAt(0).toUpperCase() + page.id.slice(1)}
              </a>
            </motion.li>
          ))}
          <div className="hidden lg:flex items-center justify-center space-x-4">
            <motion.a
              href="https://github.com/pm-moyanor"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.5 }}
            >
              <FaGithub size={20} className="text-customRed" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/paula-moyano-364babb4/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.5 }}
            >
              <FaLinkedin size={20} className="text-customRed" />
            </motion.a>
          </div>
        </ul>

        {/*  Small Screen */}
        <div className=" fixed top-6 right-6 lg:hidden z-120 w-full flex justify-end">
          <motion.button
            onClick={toggleMenu}
            whileHover={{ scale: 1.2 }}
            className="text-gray-300 text-2xl text-right"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </motion.button>
        </div>

        {/* Mobile */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="mobile-menu"
              
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.4 }}
              className="mobile-menu lg:hidden fixed top-0 right-0 w-full h-full flex items-center justify-center bg-customBlack"
              onClick={toggleMenu}
            >
              <div className="flex flex-col items-center ">
                {pages.map((page) => (
                  <motion.a
                    key={page.id}
                    whileHover={{ scale: 1.1 }}
                    href={`#${page.id}`}
                    onClick={() => {
                      scrollToSection(`#${page.id}`);
                      setIsOpen(!isOpen);
                    }}
                    className="text-3xl py-2"
                  >
                    {page.id.charAt(0).toUpperCase() + page.id.slice(1)}
                  </motion.a>
                ))}
                {/* Social Icons */}
                <div className="flex items-end justify-around w-20 mt-5 z-30">
                  <motion.a
                    href="https://github.com/pm-moyanor"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.5 }}
                  >
                    <FaGithub size={26} className="text-customRed mr-2" />
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/paula-moyano-364babb4/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.5 }}
                  >
                    <FaLinkedin size={26} className="text-customRed mr-2" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Header;
