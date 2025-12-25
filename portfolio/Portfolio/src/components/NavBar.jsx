import React, { useState, useRef, useEffect } from 'react'
import ThemeToggle from './ThemeToggle'

const NavBar = ({ toggleTheme, isDark }) => {
  const [activeLink, setActiveLink] = useState('Home')
  const [indicatorStyle, setIndicatorStyle] = useState({})
  const navRefs = useRef({})

  // Map nav links to their corresponding hrefs
  const navConfig = {
    Home: 'https://darshanpatil.vercel.app/',
    About: 'https://www.google.com',
    Projects: 'https://www.google.com',
    Contact: 'https://www.google.com'
  }

  const navLinks = ['Home', 'About', 'Projects', 'Contact']

  useEffect(() => {
    const activeElement = navRefs.current[activeLink]
    if (activeElement) {
      setIndicatorStyle({
        left: activeElement.offsetLeft,
        width: activeElement.offsetWidth,
      })
    }
  }, [activeLink])

  return (
    <header className="flex items-center h-auto sticky top-4 md:top-8 z-50 justify-center py-2 md:py-3 px-4 md:px-10">
      <div className="w-full max-w-2xl flex justify-center items-center">
        <nav className="text-gray-400 flex justify-space-between border border-gray-600 rounded-full px-2 py-1 bg-[rgb(var(--bg-navbar)/0.8)] backdrop-blur-sm w-full md:w-auto relative">
          {/* Sliding background indicator */}
          <div
            className="absolute bg-[rgb(var(--navbar-indicator)/0.1)] mx-2 rounded-full transition-all duration-500 ease-in-out"
            style={{
              left: `${indicatorStyle.left}px`,
              width: `${indicatorStyle.width}px`,
              height: 'calc(100% - 8px)',
              top: '4px',
            }}
          />

          <ul
            type="none"
            className="flex w-full gap-8 sm:gap-12 md:gap-32 flex-row items-center justify-around text-xs sm:text-sm md:text-base relative z-10"
          >
            {navLinks.map((link) => (
              <li key={link} className="nav-item">
                <a
                  ref={(el) => (navRefs.current[link] = el)}
                  className={`nav-link transition-colors duration-300 px-2 py-2 rounded-full block ${activeLink === link
                    ? 'text-white'
                    : 'hover:text-white'
                    }`}
                  href={navConfig[link]}
                  onClick={(e) => {
                    e.preventDefault()
                    setActiveLink(link)
                    // Smooth scroll to section
                    // const targetSection = document.querySelector(navConfig[link])
                    // if (targetSection) {
                    //   targetSection.scrollIntoView({ behavior: 'smooth' })
                    // }
                  }}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>

      </div>
      <div className="absolute top-3 right-4 sm:right-6 md:right-10 z-50 h-14 w-14 flex items-center justify-center">
        <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
      </div>
    </header>
  )
}

export default NavBar