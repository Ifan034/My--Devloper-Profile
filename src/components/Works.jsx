// Importing necessary libraries and components
import React from "react";
import { Tilt } from "react-tilt"; // For tilt effect on cards
import { motion } from "framer-motion"; // For animations

import { styles } from "../styles"; // Importing custom styles
import { github, live } from "../assets"; // Importing GitHub icon
import { SectionWrapper } from "../hoc"; // Importing higher-order component for section wrapping
import { projects } from "../constants"; // Importing projects data
import { fadeIn, textVariant } from "../utils/motion"; // Importing animation variants

// ProjectCard component definition
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_link,
}) => {
  return (
    // Motion div for animation
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      {/* Tilt effect on the card */}
      <Tilt
        options={{
          max: 45, // Maximum tilt angle
          scale: 1, // Scale of the card
          speed: 450, // Speed of the tilt effect
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        {/* Project image */}
        <div className="relative w-full h-[218px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          {/* Live link overlay */}
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(live_link, "_blank")} // Open source code link in a new tab
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={live}
                alt="live link"
                className="w-1/2 h-1/2 object-contain hover:scale-110 hover:opacity-80 hover:rotate-3"
              />
            </div>
          </div>

          {/* github link overlay */}
          <div className="absolute inset-0 flex justify-end right-12 m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")} // Open source code link in a new tab
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github link"
                className="w-1/2 h-1/2 object-contain hover:scale-110 hover:opacity-80 hover:rotate-3"
              />
            </div>
          </div>
        </div>

        {/* Project name and description */}
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        {/* Project tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

// Works component definition
const Works = () => {
  return (
    <>
      {/* Section header */}
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      {/* Section description */}
      <div className="w-full flex" id="projects">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      {/* Project cards */}
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

// Exporting the Works component wrapped with SectionWrapper HOC
export default SectionWrapper(Works, "");
