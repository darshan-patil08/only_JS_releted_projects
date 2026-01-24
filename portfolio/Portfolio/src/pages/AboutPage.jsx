import React from 'react'
import LogoLoop from '../components/LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiHtml5, SiCss3, SiJavascript, SiMongodb, SiMysql } from 'react-icons/si';
const AboutPage = () => {
  const techLogos = [
    {
      node: <span className="text-[32px] sm:text-[40px] md:text-[48px] text-[rgb(var(--text-primary))]"><SiHtml5 /></span>,
      title: "HTML5",
      href: "https://developer.mozilla.org/en-US/docs/Web/HTML"
    },
    {
      node: <span className="text-[32px] sm:text-[40px] md:text-[48px] text-[rgb(var(--text-primary))]"><SiCss3 /></span>,
      title: "CSS3",
      href: "https://developer.mozilla.org/en-US/docs/Web/CSS"
    },
    {
      node: <span className="text-[32px] sm:text-[40px] md:text-[48px] text-[rgb(var(--text-primary))]"><SiJavascript /></span>,
      title: "JavaScript",
      href: "https://www.javascript.com/"
    },
    {
      node: <span className="text-[32px] sm:text-[40px] md:text-[48px] text-[rgb(var(--text-primary))]"><SiReact /></span>,
      title: "React",
      href: "https://reactjs.org/"
    },
    {
      node: <span className="text-[32px] sm:text-[40px] md:text-[48px] text-[rgb(var(--text-primary))]"><SiTailwindcss /></span>,
      title: "Tailwind CSS",
      href: "https://tailwindcss.com/"
    },
    {
      node: <span className="text-[32px] sm:text-[40px] md:text-[48px] text-[rgb(var(--text-primary))]"><SiTypescript /></span>,
      title: "TypeScript",
      href: "https://www.typescriptlang.org/"
    },
    {
      node: <span className="text-[32px] sm:text-[40px] md:text-[48px] text-[rgb(var(--text-primary))]"><SiMongodb /></span>,
      title: "MongoDB",
      href: "https://www.mongodb.com/"
    },


  ];

  return (
    <div id="about" className='min-h-screen w-full py-10 px-4'>
      <section style={{ opacity: 1, transform: 'none' }} className="my-10 flex w-full scroll-mt-28 flex-col items-center md:mb-20">
        <div className='text-center'>
          <h2 className="font-bold text-[rgb(var(--text-primary))] mt-2 mb-4 md:mb-6 text-lg sm:text-xl md:text-2xl lg:text-3xl text-center px-4 max-w-4xl leading-tight">About Me</h2>
        </div>
        <div className='mt-5 w-full max-w-3xl px-4 text-center leading-7'>
          <p id="about-text" className="text-[rgb(var(--text-primary))] text-sm sm:text-base md:text-lg mb-4">
            My name is Darshan Patil, and I am a Frontend Web Developer with a strong foundation in modern web technologies. I work with HTML, CSS, JavaScript, React.js, and TypeScript to build responsive, user-friendly, and performance-oriented web interfaces.
          </p>
          <p id="about-text" className="text-[rgb(var(--text-primary))] text-sm sm:text-base md:text-lg mb-4">
            Along with frontend development, I have hands-on knowledge of Node.js and Express.js, and I use MongoDB for databases. I am familiar with authentication systems using JWT, bcrypt, and Supabase, which helps me understand how frontend and backend connect in real-world applications. I also have experience with Version Control (Git/GitHub) and collaborative development workflows.
          </p>
          <p id="about-text" className="text-[rgb(var(--text-primary))] text-sm sm:text-base md:text-lg mb-4">
            I am currently a final-year BCA student and doing an internship, where I actively work on real projects. Alongside this, I am developing my final-year project, currently focusing on the frontend architecture, UI development, and performance optimization.
          </p>
          <p id="about-text" className="text-[rgb(var(--text-primary))] text-sm sm:text-base md:text-lg mb-4">
            I am passionate about continuous learning and regularly explore new tools, frameworks, and best practices in web development. I enjoy building things, improving my skills every day, and contributing to meaningful and impactful digital products.
          </p>
        </div>
        <div className='mt-10 w-full max-w-5xl px-4 sm:px-6 md:px-8 overflow-hidden'>
          <LogoLoop
            logos={techLogos}
            speed={80}
            direction="left"
            width="100%"
            logoHeight={36}
            gap={60}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="rgb(var(--bg-primary))"
            ariaLabel="Technology stack"
          />
        </div>
      </section>
    </div>
  )
}

export default AboutPage