// Importing necessary libraries and components
import React from "react";
import { motion } from "framer-motion"; // For animations

import { styles } from "../styles"; // Importing custom styles
import { SectionWrapper } from "../hoc"; // Importing a higher-order component for section wrapping
import { fadeIn, textVariant } from "../utils/motion"; // Importing animation utilities
import { testimonials } from "../constants"; // Importing testimonials data

// FeedbackCard component definition
const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)} // Animation variant
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full' // Styling classes
  >
    <p className='text-white font-black text-[48px]'>"</p> {/* Quotation mark */}

    <div className='mt-1'>
      <p className='text-white tracking-wider text-[18px]'>{testimonial}</p> {/* Testimonial text */}

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            <span className='blue-text-gradient'>@</span> {name} {/* Name with @ symbol */}
          </p>
          <p className='mt-1 text-secondary text-[12px]'>
            {designation} of {company} {/* Designation and company */}
          </p>
        </div>

        <img
          src={image} // Image source
          alt={`feedback_by-${name}`} // Alt text for the image
          className='w-10 h-10 rounded-full object-cover' // Styling classes for the image
        />
      </div>
    </div>
  </motion.div>
);

// Feedbacks component definition
const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`} id="testimonials">
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        {/* Animated text section */}
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {/* Mapping through testimonials data to create FeedbackCard components */}
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

// Exporting the Feedbacks component wrapped with SectionWrapper HOC
export default SectionWrapper(Feedbacks, "");