import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaPinterest, FaMedium } from 'react-icons/fa';

import videoFile from '../assets/video/myvideo.mp4'; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const toggleMenu = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };

  return (
    // <nav className="fixed top-0 left-0 w-full bg-yellow-400 text-black shadow-md z-50">
    //   {/* Main Navbar */}
    //   <div className="container mx-auto flex items-center justify-between py-4 px-6 relative z-50">
    //     {/* Logo */}
    //     <div className="text-2xl font-bold">
    //       <a href="/">Ly</a>
    //     </div>

    //     {/* Navigation Links (Visible on Larger Screens) */}
    //     <div className="hidden md:flex space-x-6">
    //       <a href="#work" className="hover:text-gray-700 transition">
    //         Work
    //       </a>
    //       <a href="#solutions" className="hover:text-gray-700 transition">
    //         Solutions
    //       </a>
    //       <a href="#about" className="hover:text-gray-700 transition">
    //         About
    //       </a>
    //       <a href="#contact" className="hover:text-gray-700 transition">
    //         Contact
    //       </a>
    //       <a href="#career" className="hover:text-gray-700 transition">
    //         Career
    //       </a>
    //     </div>

    //     {/* Buttons */}
    //     <div className="flex items-center space-x-4">
    //       <button className="hidden md:block border border-black px-4 py-2 rounded-full hover:bg-black hover:text-yellow-400 transition">
    //         Speak With Us
    //       </button>
    //       {/* Hamburger Icon */}
    //       <button
    //         className="text-3xl focus:outline-none z-50"
    //         onClick={() => setIsMenuOpen(!isMenuOpen)}
    //       >
    //         {isMenuOpen ? "✕" : "☰"}
    //       </button>
    //     </div>
    //   </div>

    //   {/* Fullscreen Menu */}
    //   {isMenuOpen && (
    //     <div className="fixed inset-0 bg-yellow-400 z-40 flex flex-col md:flex-row">
    //       {/* Left Column: Video */}
    //       <div className="w-full md:w-1/4 bg-yellow-400 flex justify-center items-center">
    //         <video
    //           src={videoFile}
    //           autoPlay
    //           loop
    //           muted
    //           className="h-[300px] md:h-[600px] w-[300px] md:w-[300px] object-cover"
    //         />
    //       </div>

    //       {/* Middle Column: Links */}
    //       <div className="w-full md:w-1/2 flex flex-col justify-center items-center space-y-6 py-8">
    //         <a href="#startup" className="text-2xl font-medium hover:underline">
    //           Startup Solutions
    //         </a>
    //         <a href="#fintech" className="text-2xl font-medium hover:underline">
    //           Designed for FinTech
    //         </a>
    //         <a href="#blog" className="text-2xl font-medium hover:underline">
    //           Blog
    //         </a>
    //         <a href="#faqs" className="text-2xl font-medium hover:underline">
    //           FAQs
    //         </a>
    //         <a href="#cycle" className="text-2xl font-medium hover:underline">
    //           The Yellow Cycle
    //         </a>
    //         <a href="#process" className="text-2xl font-medium hover:underline">
    //           The Lemonade Process
    //         </a>
    //       </div>

    //       {/* Right Column: Social Icons */}
    //       <div className="w-full md:w-1/4 p-4 flex flex-col items-center md:items-start justify-center">
    //         <p className="font-bold mb-4 text-center md:text-left">
    //           We're quite social savvy
    //         </p>
    //         <div className="flex space-x-4">
    //           <a href="#" target="_blank" rel="noopener noreferrer">
    //             <FaFacebook size={28} className="hover:text-gray-700" />
    //           </a>
    //           <a href="#" target="_blank" rel="noopener noreferrer">
    //             <FaTwitter size={28} className="hover:text-gray-700" />
    //           </a>
    //           <a href="#" target="_blank" rel="noopener noreferrer">
    //             <FaLinkedin size={28} className="hover:text-gray-700" />
    //           </a>
    //           <a href="#" target="_blank" rel="noopener noreferrer">
    //             <FaMedium size={28} className="hover:text-gray-700" />
    //           </a>
    //           <a href="#" target="_blank" rel="noopener noreferrer">
    //             <FaYoutube size={28} className="hover:text-gray-700" />
    //           </a>
    //           <a href="#" target="_blank" rel="noopener noreferrer">
    //             <FaPinterest size={28} className="hover:text-gray-700" />
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //   )}
    // </nav>
    <nav className="fixed top-0 left-0 w-full bg-yellow-400 text-black shadow-md z-50">
      {/* Main Navbar */}
      <div className="container mx-auto flex items-center justify-between py-4 px-6 relative z-50">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="/">Ly</a>
        </div>

        {/* Navigation Links (Visible on Larger Screens) */}
        <div className="hidden md:flex space-x-6">
          <a href="#work" className="hover:text-gray-700 transition">
            Work
          </a>
          <a href="#solutions" className="hover:text-gray-700 transition">
            Solutions
          </a>
          <a href="#about" className="hover:text-gray-700 transition">
            About
          </a>
          <a href="#contact" className="hover:text-gray-700 transition">
            Contact
          </a>
          <a href="#career" className="hover:text-gray-700 transition">
            Career
          </a>
        </div>

        {/* Buttons */}
        <div className="flex items-center space-x-4">
          <button className="hidden md:block border border-black px-4 py-2 rounded-full hover:bg-black hover:text-yellow-400 transition">
            Speak With Us
          </button>
          {/* Hamburger Icon */}
          <button
            className="text-3xl focus:outline-none z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Fullscreen Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-yellow-400 z-40 flex flex-col md:flex-row">
          {/* First Row: Social Icons */}
          <div className="flex w-full md:w-1/4 flex-col items-center md:items-start p-4 py-20">
            <p className="font-bold mb-4 text-center md:text-left">
              We're quite social savvy
            </p>
            <div className="flex space-x-4">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={28} className="hover:text-gray-700" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={28} className="hover:text-gray-700" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={28} className="hover:text-gray-700" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaMedium size={28} className="hover:text-gray-700" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaYoutube size={28} className="hover:text-gray-700" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaPinterest size={28} className="hover:text-gray-700" />
              </a>
            </div>
          </div>

          {/* Second Row: Links */}
          <div className="flex flex-col w-full md:w-1/2 space-y-6 py-20">
            <a href="#startup" className="text-2xl font-medium hover:underline">
              Startup Solutions
            </a>
            <a href="#fintech" className="text-2xl font-medium hover:underline">
              Designed for FinTech
            </a>
            <a href="#blog" className="text-2xl font-medium hover:underline">
              Blog
            </a>
            <a href="#faqs" className="text-2xl font-medium hover:underline">
              FAQs
            </a>
            <a href="#cycle" className="text-2xl font-medium hover:underline">
              The Yellow Cycle
            </a>
            <a href="#process" className="text-2xl font-medium hover:underline">
              The Lemonade Process
            </a>
          </div>

          {/* Third Row: Video */}
          <div className="flex w-full md:w-1/4 items-center justify-center">
            <video
              src={videoFile}
              autoPlay
              loop
              muted
              className="w-full h-[600px] object-cover"
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
