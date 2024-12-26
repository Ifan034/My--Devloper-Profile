// Importing necessary libraries and components
import React from "react";
import { Tilt } from "react-tilt"; // Tilt effect for the card
import { motion } from "framer-motion"; // Animation library
// Importing styles, constants, higher-order components, and utility functions
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

// ServiceCard component to display individual service cards
const ServiceCard = ({ index, title, icon }) => (
  // Tilt effect wrapper
  <Tilt className='xs:w-[250px] w-full'>
    {/* Animated div with fade-in effect */}
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      {/* Inner content of the card */}
      <div
        options={{
          max: 45, // Maximum tilt angle
          scale: 1, // Scale of the card
          speed: 450, // Speed of the tilt effect
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        {/* Icon image */}
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />
        {/* Title of the service */}
        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

// About component to display the about section
const About = () => {
  return (
    <>
      {/* Animated div for the introduction text */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      {/* Animated paragraph with a brief introduction */}
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a skilled software developer with experience in Javascript and TypeScript,
        and expertise in frameworks like React, Node.js, and Next.js. I'm a quick learner
        and collaborate closely with clients to create efficient, scalable, and user-friendly
        solutions that solve real-world problems. Let's work together to bring your ideas to life!
      </motion.p>

      {/* Container for the service cards */}
      <div className='mt-20 flex flex-wrap gap-10'>
        {/* Mapping over the services array to create a ServiceCard for each service */}
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

// Exporting the About component wrapped with the SectionWrapper higher-order component
export default SectionWrapper(About, "about");