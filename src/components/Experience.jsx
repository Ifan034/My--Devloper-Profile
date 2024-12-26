// Importing necessary libraries and components
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"; // For creating vertical timelines
import { motion } from "framer-motion"; // For animations

import "react-vertical-timeline-component/style.min.css"; // Importing styles for the vertical timeline

import { styles } from "../styles"; // Importing custom styles
import { experiences } from "../constants"; // Importing experience data
import { SectionWrapper } from "../hoc"; // Importing a higher-order component for section wrapping
import { textVariant } from "../utils/motion"; // Importing animation utility

// ExperienceCard component definition
const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836", // Background color of the content
        color: "#fff", // Text color
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }} // Style for the content arrow
      date={experience.date} // Date of the experience
      iconStyle={{ background: experience.iconBg }} // Background color of the icon
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon} // Icon image source
            alt={experience.company_name} // Alt text for the icon image
            className='w-[60%] h-[60%] object-contain' // Styling classes for the icon image
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3> {/* Experience title */}
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name} {/* Company name */}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`} // Unique key for each point
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point} {/* Experience point */}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

// Experience component definition
const Experience = () => {
  return (
    <>
      {/* Animated text section */}
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      {/* Vertical timeline section */}
      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`} // Unique key for each experience card
              experience={experience} // Passing experience data to the ExperienceCard component
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

// Exporting the Experience component wrapped with SectionWrapper HOC
export default SectionWrapper(Experience, "work");