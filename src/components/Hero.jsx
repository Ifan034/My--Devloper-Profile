// Importing necessary libraries and components
import React from 'react';
import { motion } from 'framer-motion'; // For animations
import { styles } from '../styles'; // Importing custom styles
import { ComputersCanvas } from './canvas'; // Importing a custom canvas component

// Hero component definition
const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      {/* Container for the hero content */}
      <div className={`absolute inset-0 sm:top-[160] top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 mb-6`}>

        {/* Gradient part with a purple rounded straight line */}
        <div className={`flex flex-col justify-center items-center mt-64 md:mt-5`}>
          <div className='w-5 h-5 rounded-full bg-[#00ff00]'></div> {/* Green circle */}
          <div className='w-1 sm:h-80 h-40 violet-gradient'></div> {/* Vertical gradient line */}
        </div>

        {/* Hero heading with name and work section */}
        <div className='mt-64 md:mt-5'>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className={`text-[#00ff00]`}>Ifan</span> {/* Highlighted name */}
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop 3D visuals, user <br className='sm:block hidden' />
            interfaces and web applications. {/* Description */}
          </p>
        </div>
      </div>

      {/* Custom canvas component */}
      <ComputersCanvas />

      {/* Scroll down indicator */}
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href="#about">
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-gray-500 flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0], // Animation for vertical movement
              }}
              transition={{
                duration: 1.5, // Duration of the animation
                repeat: Infinity, // Repeat the animation infinitely
                repeatType: "loop", // Loop the animation
              }}
              className='w-3 h-3 rounded-full bg-gray-600 mb-1' // Styling for the animated dot
            />
          </div>
        </a>
      </div>
    </section>
  );
};

// Exporting the Hero component
export default Hero;