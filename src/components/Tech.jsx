// Importing necessary libraries and components
import React from "react";

import { BallCanvas } from "./canvas"; // Importing a custom canvas component
import { SectionWrapper } from "../hoc"; // Importing a higher-order component for section wrapping
import { technologies } from "../constants"; // Importing technologies data

// Tech component definition
const Tech = () => {
  return (
    // Container for the technology icons
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {/* Mapping through the technologies array to create a BallCanvas for each technology */}
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} /> {/* BallCanvas component with the technology icon */}
        </div>
      ))}
    </div>
  );
};

// Exporting the Tech component wrapped with SectionWrapper HOC
export default SectionWrapper(Tech, "");