import React, { useState, useRef, useEffect } from 'react'
import { toast } from 'sonner'
import ThemeToggle from './ThemeToggle'

const NavBar = ({ toggleTheme, isDark }) => {
  const [activeLink, setActiveLink] = useState('Home')
  const [indicatorStyle, setIndicatorStyle] = useState({})
  const navRefs = useRef({})

  // Map nav links to their corresponding section IDs
  const navConfig = {
    Home: '#home',
    About: '#about',
    Projects: '#projects',
    Contact: '#contact'
  }

  const navLinks = ['Home', 'About', 'Projects', 'Contact']

  // Update indicator position on activeLink change and window resize
  const updateIndicator = () => {
    const activeElement = navRefs.current[activeLink]
    if (activeElement) {
      setIndicatorStyle({
        left: activeElement.offsetLeft,
        width: activeElement.offsetWidth,
      })
    }
  }

  useEffect(() => {
    updateIndicator()
  }, [activeLink])

  // Handle window resize for responsive indicator
  useEffect(() => {
    const handleResize = () => {
      updateIndicator()
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [activeLink])

  const handleNavClick = (e, link) => {
    e.preventDefault()
    setActiveLink(link)

    // Show toast for Projects section (coming soon)
    if (link === 'Projects') {
      toast.info('🚀 Projects are coming soon!', {
        description: 'Stay tuned for some exciting projects.',
        duration: 3000,
        position: 'top-center',
      })
      return
    }

    // Smooth scroll to section
    const targetId = navConfig[link]
    const targetSection = document.querySelector(targetId)
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <>
      <header className="flex items-center h-auto sticky top-2 sm:top-4 md:top-6 z-50 justify-center py-1 sm:py-2 px-3 sm:px-4 md:px-10">
        <div className="w-full max-w-xl flex justify-center items-center">
          {/* Premium slim navbar */}
          <nav className="text-gray-400 flex justify-center border border-gray-700/50 rounded-full  py-0.5 sm:py-1 bg-[rgb(var(--bg-navbar)/0.85)] backdrop-blur-md shadow-lg shadow-black/10 w-auto relative">
            {/* Sliding background indicator - responsive */}
            <div
              className="absolute  bg-[rgb(var(--navbar-indicator)/0.15)] rounded-full transition-all duration-400 ease-out"
              style={{
                left: `${indicatorStyle.left + 2}px`,
                width: `${indicatorStyle.width - 4}px`,
                height: 'calc(100% - 4px)',
                top: '2px',
              }}
            />

            <ul
              className="flex gap-1 sm:gap-2 md:gap-6 lg:gap-10 flex-row items-center justify-center text-[10px] sm:text-xs md:text-sm relative z-10"
            >
              {navLinks.map((link) => (
                <li key={link} className="nav-item">
                  <a
                    ref={(el) => (navRefs.current[link] = el)}
                    className={`nav-link transition-all duration-300 px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full block cursor-pointer font-medium tracking-wide ${activeLink === link
                      ? 'text-white'
                      : 'text-gray-400 hover:text-white'
                      }`}
                    href={navConfig[link]}
                    onClick={(e) => handleNavClick(e, link)}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Theme toggle - hidden on small screens (moved to fixed position) */}
        <div className="hidden md:flex absolute top-2 right-4 sm:right-6 md:right-8 z-50 h-14 w-14 items-center justify-center">
          <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
        </div>
      </header>

      {/* Fixed theme toggle for mobile - bottom right */}
      <div className="md:hidden fixed bottom-4 right-4 z-50 h-14 w-14 flex items-center justify-center bg-[rgb(var(--bg-navbar)/0.9)] backdrop-blur-md rounded-full border border-gray-700/50 shadow-lg shadow-black/20">
        <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
      </div>
    </>
  )
}

export default NavBar