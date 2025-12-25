import React from 'react'
import profileImage from '../assets/PFP.png'
import LinkButtons from '../components/LinkButtons'

const HomePage = () => {
  return (

    <div id="home" className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mt-12 md:mt-16 flex flex-col items-center gap-3 md:gap-5">
      <div id="profile-pic" className="mb-6 md:mb-12">
        <img
          src={profileImage}
          className="w-32 h-32 sm:w-40 sm:h-40 md:w-50 md:h-50 rounded-full grayscale-90 ring-2 md:ring-3 ring-white hover:grayscale-0 shadow-xl shadow-yellow-400/40 hover:ring-yellow-400 transition duration-300 hover:scale-105"
          alt="Darshan Patil - Frontend Engineer Profile Picture"
          width={200}
          height={200}
          loading="eager"
        />
      </div>
      <div className="border border-[rgb(var(--border-secondary))] rounded-full p-2 font-mono px-3 md:px-4 text-xs sm:text-sm">
        <a
          id="animations"
          className="relative inline-flex rounded-full h-2 w-2 md:h-2.5 md:w-2.5 bg-green-400"
          href=""
        >
          <span
            id="animation"
            className="animate-ping absolute inline-flex h-2 w-2 md:h-2.5 md:w-2.5 rounded-full bg-green-400 opacity-75"
          ></span>
        </a>
        <span id="available-for-work" className="text-[rgb(var(--text-primary))] ml-2"
        >Available for work!</span
        >
      </div>
      <p id="fresher" className="text-[rgb(var(--text-secondary))] text-xs sm:text-sm mt-1 md:mt-2">
        Currently fresher — open to work
      </p>
      <h1
        id="intro"
        className="font-bold text-[rgb(var(--text-primary))] mt-2 mb-4 md:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center px-4 max-w-4xl leading-tight"
      >
        Hi I'm <span id="name" className="text-green-500 font-extrabold">Darshan Patil</span> - Frontend Engineer with Full-Stack Expertise.
      </h1>
      <div className='flex flex-col items-center justify-center px-4 md:px-8 py-6 md:py-8'>
        <p id="description" className="text-[rgb(var(--text-secondary))] w-full max-w-2xl text-center text-sm sm:text-base md:text-lg leading-relaxed">
          I build fast, accessible, and SEO-friendly web applications using
          React.js, Next.js, Tailwind CSS, and shadcn/ui. With 3.5+ years of
          experience and strong full-stack skills in JavaScript and TypeScript,
          I am passionate about creating smooth user interfaces, maintaining
          excellent UI/UX, and writing clean, maintainable code. I craft modern
          user experiences while also delivering scalable backend integrations
          when needed.
        </p>
        <LinkButtons />
      </div>

    </div>
  )
}

export default HomePage