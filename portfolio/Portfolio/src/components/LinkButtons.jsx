import React from "react";
import { MoveRight, Download, Github, Linkedin, Instagram, Twitter, Eye } from 'lucide-react';
import resumePDF from '../assets/Darshan patil_removed.pdf';

const LinkButtons = () => {
  // Smooth scroll to contact section
  const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="w-full px-4">
      <div className="flex flex-col sm:flex-row items-center justify-center m-3 md:m-5 gap-2 md:gap-3">
        <a
          href="#contact"
          onClick={scrollToContact}
          className="hover:scale-105 transition duration-300 w-full sm:w-auto min-w-[160px] h-10 md:h-12 border border-gray-500 flex items-center justify-center px-4 md:px-6 py-2 text-center rounded-full bg-white cursor-pointer"
        >
          <span className="text-black font-mono md:text-base whitespace-nowrap">
            Get in touch
          </span>
          <MoveRight size={20} strokeWidth={0.75} className="ml-2 text-black" />
        </a>
        <a
          href={resumePDF}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-105 transition duration-300 w-full sm:w-auto min-w-[180px] h-10 md:h-12 border border-gray-500 flex items-center justify-center px-4 md:px-6 py-2 text-center rounded-full bg-[rgb(var(--bg-tertiary))]"
        >
          <span className="text-white font-mono text-sm md:text-base whitespace-nowrap">
            View my resume
          </span>
          <Eye size={20} strokeWidth={1.5} color="white" className="ml-2" />
        </a>
        <a
          href={resumePDF}
          download="Darshan_Patil_Resume.pdf"
          className="hover:scale-105 transition duration-300 w-full sm:w-auto min-w-[200px] h-10 md:h-12 border border-gray-500 flex items-center justify-center px-4 md:px-6 py-2 text-center rounded-full bg-[rgb(var(--bg-black-always))]"
        >
          <span className="text-[rgb(var(--text-on-black))] font-mono text-sm md:text-base whitespace-nowrap">Download Resume</span>
          <Download size={20} strokeWidth={1.5} className="ml-2 text-[rgb(var(--text-on-black))]" />
        </a>
        <div className=" w-1/2  sm:w-auto min-w-[200px] h-12 md:h-12 flex items-center px-2 md:px-2 py-2 text-center rounded-full bg-[rgb(var(--bg-black-always))]">
          <a href="https://github.com/darshan-patil08" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition ml-2 duration-300 h-12 md:h-12 w-12 md:w-12 flex items-center justify-center border border-gray-800 rounded-full">
            <Github strokeWidth={2} color="white" />
          </a>
          <a href="https://www.linkedin.com/in/darshan-patil-574614370?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition ml-2 duration-300 h-12 md:h-12 w-12 md:w-12 flex items-center justify-center border border-gray-800 rounded-full">
            <Linkedin strokeWidth={2} color="white" />
          </a>
          <a href="https://www.instagram.com/darshanpatil__08?igsh=MWc1cWVoZ2ttMXk1Mg==" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition ml-2 duration-300 h-12 md:h-12 w-12 md:w-12 flex items-center justify-center border border-gray-800 rounded-full">
            <Instagram strokeWidth={2} color="white" />
          </a>
          <a href="https://x.com/Darshanpatil800" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition ml-2 duration-300 h-12 md:h-12 w-12 md:w-12 flex items-center justify-center border border-gray-800 rounded-full">
            <Twitter strokeWidth={2} color="white" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LinkButtons;
