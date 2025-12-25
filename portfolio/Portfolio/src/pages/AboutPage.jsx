import React from 'react'
import LogoLoop from '../components/LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiHtml5, SiCss3, SiJavascript, SiMongodb, SiMysql } from 'react-icons/si';
const AboutPage = () => {
  const techLogos = [
    {
      node: <span className="text-[48px] text-[rgb(var(--text-primary))]"><SiHtml5 /></span>,
      title: "HTML5",
      href: "https://developer.mozilla.org/en-US/docs/Web/HTML"
    },
    {
      node: <span className="text-[48px] text-[rgb(var(--text-primary))]"><SiCss3 /></span>,
      title: "CSS3",
      href: "https://developer.mozilla.org/en-US/docs/Web/CSS"
    },
    {
      node: <span className="text-[48px] text-[rgb(var(--text-primary))]"><SiJavascript /></span>,
      title: "JavaScript",
      href: "https://www.javascript.com/"
    },
    {
      node: <span className="text-[48px] text-[rgb(var(--text-primary))]"><SiReact /></span>,
      title: "React",
      href: "https://reactjs.org/"
    },
    {
      node: <span className="text-[48px] text-[rgb(var(--text-primary))]"><SiTailwindcss /></span>,
      title: "Tailwind CSS",
      href: "https://tailwindcss.com/"
    },
    {
      node: <span className="text-[48px] text-[rgb(var(--text-primary))]"><SiTypescript /></span>,
      title: "TypeScript",
      href: "https://www.typescriptlang.org/"
    },
    {
      node: <span className="text-[48px] text-[rgb(var(--text-primary))]"><SiMongodb /></span>,
      title: "MongoDB",
      href: "https://www.mongodb.com/"
    },


  ];

  return (
    <div className='min-h-screen w-full py-10 px-4'>
      <section style={{ opacity: 1, transform: 'none' }} className="my-10 flex w-full scroll-mt-28 flex-col items-center md:mb-20">
        <div className='text-center'>
          <h2 id="about" className="font-bold text-[rgb(var(--text-primary))] mt-2 mb-4 md:mb-6 text-lg sm:text-xl md:text-2xl lg:text-3xl text-center px-4 max-w-4xl leading-tight">About Me</h2>
        </div>
        <div className='mt-5 w-full max-w-3xl px-4 text-center leading-7'>
          <p id="about-text" className="text-[rgb(var(--text-primary))] text-sm sm:text-base md:text-lg mb-4">
            My name is Darshan Patil, and I am a Frontend Engineer with 3.5+ years of real-world experience designing fast, usable, and SEO-friendly web applications. My specialty is crafting smooth-looking UIs with React.js, Next.js, Tailwind CSS, and shadcn/ui and bringing things to life with Framer Motion.
          </p>
          <p id="about-text" className="text-[rgb(var(--text-primary))] text-sm sm:text-base md:text-lg mb-4">
            Alongside my frontend experience, I possess good full-stack skills in JavaScript and TypeScript, and familiar experience in Node.js, Express, and databases like MongoDB and MySQL. This allows me to manage projects from start-to-finish, from designing smooth UIs through connecting scalable backends.
          </p>
          <p id="about-text" className="text-[rgb(var(--text-primary))] text-sm sm:text-base md:text-lg mb-4">
            I diveering. Writing elegant, up-to-date code and discovering new tools and trends thrills me.
          </p>
          <p id="about-text" className="text-[rgb(var(--text-primary))] text-sm sm:text-base md:text-lg mb-4">
            Outside of work, I enjoy cricket and a good cup of tea, but now I am used to drinking coffee. I'm always up for learning, experimenting, and growing and looking for opportunities wherein I can bring value toward impactful products and inventive teams.
          </p>
        </div>
        <div className='mt-10 max-w-5xl px-4 sm:px-6 md:px-8'>
          <LogoLoop
            logos={techLogos}
            speed={80}
            direction="left"
            width="100%"
            logoHeight={48}
            gap={100}
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