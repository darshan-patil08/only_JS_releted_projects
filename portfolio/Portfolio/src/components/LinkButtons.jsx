import React from "react";
import { MoveRight, Download, Github, Linkedin, Instagram, Twitter } from 'lucide-react';

const LinkButtons = () => {
  return (
    <div className="w-full px-4">
      <div className="flex flex-col sm:flex-row items-center justify-center m-3 md:m-5 gap-2 md:gap-3">
        <div className="hover:scale-105 transition duration-300 w-full sm:w-auto min-w-[160px] h-10 md:h-12 border border-gray-500 flex items-center justify-center px-4 md:px-6 py-2 text-center rounded-full bg-white">
          <a href="" className="text-black font-mono md:text-base whitespace-nowrap">
            Get in touch
          </a>
          <MoveRight size={20} strokeWidth={0.75} className="ml-2" />
        </div>
        <div className="hover:scale-105 transition duration-300 w-full sm:w-auto min-w-[180px] h-10 md:h-12 border border-gray-500 flex items-center justify-center px-4 md:px-6 py-2 text-center rounded-full bg-[rgb(var(--bg-tertiary))]">
          <a href="" className="text-white  font-mono text-sm md:text-base whitespace-nowrap">
            View my resume
          </a>
          <MoveRight size={20} strokeWidth={0.75} color="white" className="ml-2" />
        </div>
        <div className="hover:scale-105 transition duration-300 w-full sm:w-auto min-w-[200px] h-10 md:h-12 border border-gray-500 flex items-center justify-center px-4 md:px-6 py-2 text-center rounded-full bg-[rgb(var(--bg-black-always))]">
          <a className="text-[rgb(var(--text-on-black))] font-mono text-sm md:text-base whitespace-nowrap">Download Resume</a>
          <Download size={20} strokeWidth={0.75} className="ml-2 text-[rgb(var(--text-on-black))]" />
        </div>
        <div className=" w-1/2  sm:w-auto min-w-[200px] h-12 md:h-12 flex items-center px-2 md:px-2 py-2 text-center rounded-full bg-[rgb(var(--bg-black-always))]">
          <a href="https://github.com/darshan-patil08" className="hover:scale-105 transition ml-2 duration-300 h-12 md:h-12 w-12 md:w-12 flex items-center justify-center border border-gray-800 rounded-full">
            <Github strokeWidth={2} color="white" />
          </a>
          <a href="https://www.linkedin.com/in/darshan-patil-574614370?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="hover:scale-105 transition ml-2 duration-300 h-12 md:h-12 w-12 md:w-12 flex items-center justify-center border border-gray-800 rounded-full">
            <Linkedin strokeWidth={2} color="white" />
          </a>
          <a href="https://www.instagram.com/darshanpatil__08?igsh=MWc1cWVoZ2ttMXk1Mg==" className="hover:scale-105 transition ml-2 duration-300 h-12 md:h-12 w-12 md:w-12 flex items-center justify-center border border-gray-800 rounded-full">
            <Instagram strokeWidth={2} color="white" />
          </a>
          <a href="https://x.com/Darshanpatil800" className="hover:scale-105 transition ml-2 duration-300 h-12 md:h-12 w-12 md:w-12 flex items-center justify-center border border-gray-800 rounded-full">
            <Twitter strokeWidth={2} color="white" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LinkButtons;
