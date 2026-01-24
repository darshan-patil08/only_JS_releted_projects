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
    <div className="w-full px-2 sm:px-4 overflow-hidden">
      <div className="flex flex-col items-center justify-center m-3 md:m-5 gap-2 md:gap-3">
        {/* Action Buttons Row */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 w-full">
          <a
            href="#contact"
            onClick={scrollToContact}
            className="hover:scale-105 transition duration-300 h-9 sm:h-10 md:h-12 border border-gray-500 flex items-center justify-center px-3 sm:px-4 md:px-6 py-2 text-center rounded-full bg-white cursor-pointer"
          >
            <span className="text-black font-mono text-xs sm:text-sm md:text-base whitespace-nowrap">
              Get in touch
            </span>
            <MoveRight size={16} strokeWidth={0.75} className="ml-1.5 sm:ml-2 text-black sm:w-5 sm:h-5" />
          </a>
          <a
            href={resumePDF}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-105 transition duration-300 h-9 sm:h-10 md:h-12 border border-gray-500 flex items-center justify-center px-3 sm:px-4 md:px-6 py-2 text-center rounded-full bg-[rgb(var(--bg-tertiary))]"
          >
            <span className="text-white font-mono text-xs sm:text-sm md:text-base whitespace-nowrap">
              View Resume
            </span>
            <Eye size={16} strokeWidth={1.5} color="white" className="ml-1.5 sm:ml-2 sm:w-5 sm:h-5" />
          </a>
          <a
            href={resumePDF}
            download="Darshan_Patil_Resume.pdf"
            className="hover:scale-105 transition duration-300 h-9 sm:h-10 md:h-12 border border-gray-500 flex items-center justify-center px-3 sm:px-4 md:px-6 py-2 text-center rounded-full bg-[rgb(var(--bg-black-always))]"
          >
            <span className="text-[rgb(var(--text-on-black))] font-mono text-xs sm:text-sm md:text-base whitespace-nowrap">Download</span>
            <Download size={16} strokeWidth={1.5} className="ml-1.5 sm:ml-2 text-[rgb(var(--text-on-black))] sm:w-5 sm:h-5" />
          </a>
        </div>

        {/* Social Icons Row */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 rounded-full bg-[rgb(var(--bg-black-always))]">
          <a href="https://github.com/darshan-patil08" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition duration-300 h-9 w-9 sm:h-10 sm:w-10 md:h-12 md:w-12 flex items-center justify-center border border-gray-800 rounded-full">
            <Github size={18} strokeWidth={2} color="white" className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </a>
          <a href="https://www.linkedin.com/in/darshan-patil-574614370?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition duration-300 h-9 w-9 sm:h-10 sm:w-10 md:h-12 md:w-12 flex items-center justify-center border border-gray-800 rounded-full">
            <Linkedin size={18} strokeWidth={2} color="white" className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </a>
          <a href="https://www.instagram.com/darshanpatil__08?igsh=MWc1cWVoZ2ttMXk1Mg==" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition duration-300 h-9 w-9 sm:h-10 sm:w-10 md:h-12 md:w-12 flex items-center justify-center border border-gray-800 rounded-full">
            <Instagram size={18} strokeWidth={2} color="white" className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </a>
          <a href="https://x.com/Darshanpatil800" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition duration-300 h-9 w-9 sm:h-10 sm:w-10 md:h-12 md:w-12 flex items-center justify-center border border-gray-800 rounded-full">
            <Twitter size={18} strokeWidth={2} color="white" className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LinkButtons;
