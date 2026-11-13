import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'
import { ThemeContext } from './context/ThemeContext'

const SECTIONS = ['hero', 'about', 'skills', 'projects', 'contact']

export default function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [loading, setLoading] = useState(true)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2200)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('light', !darkMode)
  }, [darkMode])

  useEffect(() => {
    if (loading) return
    const observers = SECTIONS.map((id) => {
      const el = document.getElementById(id)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([e]) => e.isIntersecting && setActiveSection(id),
        { threshold: 0.4 }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach((o) => o?.disconnect())
  }, [loading])

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <AnimatePresence>{loading && <LoadingScreen key="loader" />}</AnimatePresence>
      {!loading && (
        <div className="min-h-screen">
          <Navbar activeSection={activeSection} />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </div>
      )}
    </ThemeContext.Provider>
  )
}
