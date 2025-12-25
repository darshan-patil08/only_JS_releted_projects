import React, { useState, lazy, Suspense } from 'react'
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import Footer from './pages/Footer'
// Lazy load components that are not immediately visible
const AboutPage = lazy(() => import('./pages/AboutPage'))
const PageBreaker = lazy(() => import('./components/PageBreaker'))

const App = () => {
  // Theme state - starts in dark mode
  const [isDark, setIsDark] = useState(true)

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <div className={`${isDark ? 'dark' : ''} min-h-screen bg-[rgb(var(--bg-primary))]`}>
      <NavBar toggleTheme={toggleTheme} isDark={isDark} />
      <HomePage />
      <Suspense fallback={<div className="w-full h-20" />}>
        <PageBreaker />
        <AboutPage />
      </Suspense>
      <Suspense fallback={<div className="w-full h-20" />}>
        <ContactPage />
      </Suspense>
      <Footer />
    </div>
  )
}

export default App