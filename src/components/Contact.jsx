// Importing necessary libraries and components
import React, { useRef, useState } from "react";
import { motion } from "framer-motion"; // For animations
import emailjs from "@emailjs/browser"; // For sending emails

import { styles } from "../styles"; // Importing styles
import { EarthCanvas } from "./canvas"; // Importing a custom canvas component
import { SectionWrapper } from "../hoc"; // Importing a higher-order component for section wrapping
import { slideIn } from "../utils/motion"; // Importing animation utility

// Contact component definition
const Contact = () => {
  // useRef hook to reference the form element
  const formRef = useRef();
  
  // useState hook to manage form data
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  // useState hook to manage loading state
  const [loading, setLoading] = useState(false);

  // Function to handle input changes
  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    // Update the form state with the new input value
    setForm({
      ...form,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setLoading(true); // Set loading state to true

    // Send email using EmailJS service
    emailjs
      .send(
        'service_gwmw0ym', // EmailJS service ID
        'template_pyv5p9e', // EmailJS template ID
        {
          from_name: form.name, // Sender's name
          to_name: "Ifan Ul Abedin", // Receiver's name
          from_email: form.email, // Sender's email
          to_email: "ifanabedin034@gmail.com", // Receiver's email
          message: form.message, // Message content
        },
        'kIJ8bI-T_9U6LB3iA' // EmailJS user ID
      )
      .then(
        () => {
          setLoading(false); // Set loading state to false
          alert("Thank you. I will get back to you as soon as possible."); // Show success message

          // Reset the form state
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false); // Set loading state to false
          console.error(error); // Log the error

          alert("Ahh, something went wrong. Please try again."); // Show error message
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      {/* Motion div for animation */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)} // Animation variant
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl' // Styling classes
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        {/* Form element */}
        <form
          ref={formRef} // Reference to the form element
          onSubmit={handleSubmit} // Form submission handler
          className='mt-12 flex flex-wrap flex-col gap-8' // Styling classes
        >
          {/* Name input field */}
          <label className='flex flex-col w-full'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange} // Input change handler
              placeholder="Enter your name..."
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          {/* Email input field */}
          <label className='w-full flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange} // Input change handler
              placeholder="Enter your email..."
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          {/* Message textarea field */}
          <label className='w-full flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange} // Input change handler
              placeholder='What you want to say...?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          {/* Submit button */}
          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"} {/* Button text changes based on loading state */}
          </button>
        </form>
      </motion.div>

      {/* Motion div for animation */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)} // Animation variant
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]' // Styling classes
      >
        <EarthCanvas /> {/* Custom canvas component */}
      </motion.div>
    </div>
  );
};

// Exporting the Contact component wrapped with SectionWrapper HOC
export default SectionWrapper(Contact, "contact");