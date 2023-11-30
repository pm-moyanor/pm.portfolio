import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import { motion, useAnimation } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const {
  REACT_APP_EMAILJS_SERVICE_ID,
  REACT_APP_EMAILJS_TEMPLATE_ID,
  REACT_APP_EMAILJS_PUBLIC_KEY,
} = process.env;

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isMessageSent, setIsMessageSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const form = useRef();
  const buttonControls = useAnimation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);

      const templateParams = {
        user_name: name,
        user_email: email,
        user_message: message,
      };

      const response = await emailjs.send(
        REACT_APP_EMAILJS_SERVICE_ID,
        REACT_APP_EMAILJS_TEMPLATE_ID,
        templateParams,
        REACT_APP_EMAILJS_PUBLIC_KEY
      );

      console.log("Email sent successfully:", response);

      setIsMessageSent(true);

      await buttonControls.start({
        opacity: 0,
        scale: 0,
        transition: { duration: 0.2 },
      });

      form.current.reset();
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error sending email:", error);
    } finally {
      setIsLoading(false);
      await buttonControls.start({ opacity: 1, scale: 1 });
    }
  };
  return (
    <section id="contact" 
    className="flex flex-col items-center justify-center px-2 sm:px:2 md:px-4 h-screen">
      
      <div className=" w-fit p-4 flex flex-col items-end mb-10">
      <h1 className="w-full text-[5rem] sm:text-[5rem] md:text-[6rem] text-end tracking-tighter lg:text-[9rem] leading-none font-body font-extrabold ">
          Contact
        </h1>
        <div className="flex flex-col justify-start items-end">
        <p className=" text-xs md:text-sm">
          Feel free to reach out to me at:
        </p>
        <p className="text-xs md:text-sm text-customRed">
          <a href="mailto:pm.moyanor@gmail.com">pm.moyanor@gmail.com</a>
        </p>
        <div className="flex mt-2">
          <a
            href="https://github.com/pm-moyanor"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={20} className="text-customRed mr-2" />
          </a>

          <a
            href="https://www.linkedin.com/in/paula-moyano-364babb4/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={20} className="text-customRed " />
          </a>
        </div>
     
        </div>
      </div>

      <form
        ref={form}
        onSubmit={handleSubmit}
        className="w-4/5 flex flex-col justify-center bg-customBlack bg-opacity-95 max-w-3xl min-w-2xl p-6 sm:p-6 md:p-10 lg:p-16 relative h-1/2 mx-6"
      >
        <div className="w-full mb-2">
          <label htmlFor="name" className="sr-only">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full border-b border-b-gray-500 p-2 cursor-pointer bg-customBlack text-gray-5 text-xs md:text-sm"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="w-full mb-2">
          <label htmlFor="email" className="sr-only">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full border-b border-b-gray-500 p-2 bg-customBlack cursor-text text-white text-xs md:text-sm"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="w-full mb-4">
          <label htmlFor="message" className="sr-only">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="w-full border-b border-b-gray-500 p-2 bg-customBlack text-white text-xs md:text-sm"
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <div className="flex flex-wrap justify-between align-middle">
          <motion.button
            type="submit"
            className="bg-customRed text-white py-2 px-4 mr-2  hover:bg-red-600 text-xs md:text-sm"
            animate={buttonControls}
          >
            {isLoading ? "Sending..." : "Send message"}
          </motion.button>

          {isMessageSent && (
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
              className="w-fit text-xs text-white bg-transparent flex justify-end p-4 pl-0"
            >
              Thank you for your message! I'll get back to you soon.
            </motion.p>
          )}
        </div>
      </form>
    </section>
  );
}

export default Contact;
