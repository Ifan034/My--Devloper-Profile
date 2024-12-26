// Importing necessary libraries and components
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // For navigation links

import { styles } from "../styles"; // Importing custom styles
import { navLinks } from "../constants"; // Importing navigation links data
import { logo, menu, close } from "../assets"; // Importing assets

// Navbar component definition
const Navbar = () => {
  // State variables
  const [active, setActive] = useState(""); // To track the active navigation link
  const [toggle, setToggle] = useState(false); // To toggle the mobile menu
  const [scrolled, setScrolled] = useState(false); // To track if the page is scrolled

  // useEffect hook to handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY; // Get the current scroll position
      if (scrollTop > 100) {
        setScrolled(true); // Set scrolled to true if scrolled more than 100px
      } else {
        setScrolled(false); // Set scrolled to false if scrolled less than 100px
      }
    };

    window.addEventListener("scroll", handleScroll); // Add scroll event listener

    return () => window.removeEventListener("scroll", handleScroll); // Cleanup the event listener
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        {/* Logo and brand name */}
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive(""); // Reset active link
            window.scrollTo(0, 0); // Scroll to top
          }}
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-medium cursor-pointer flex '>
            Ifan Ul Abedin &nbsp;
            {/* <span className='sm:block hidden'> | Portfolio</span> */}
          </p>
        </Link>

        {/* Navigation links for desktop */}
        <ul className='list-none hidden md:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)} // Set active link on click
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile menu toggle button */}
        <div className='md:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu} // Toggle between menu and close icon
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)} // Toggle the menu on click
          />

          {/* Mobile menu */}
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } overflow-hidden p-10 black-gradient absolute justify-center items-center top-16 left-1/2 transform -translate-x-1/2 mt-2 w-full max-w-md h-[500px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-center items-center text-center flex-col gap-6 sm:gap-12'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] sm:text-[20px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle); // Close the menu on click
                    setActive(nav.title); // Set active link on click
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Exporting the Navbar component
export default Navbar;