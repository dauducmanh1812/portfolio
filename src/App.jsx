import { useState, useRef, useCallback } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SectionDots from './components/SectionDots'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import CVPage from './pages/CVPage'
import ProjectsPage from './pages/ProjectsPage'

const DARK_SECTIONS = new Set([0, 3, 4])

export default function App() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  const [activeSection, setActiveSection] = useState(0)
  const snapContainerRef = useRef(null)

  const handleSectionChange = useCallback((idx) => {
    setActiveSection(idx)
  }, [])

  const isDark = isHome ? DARK_SECTIONS.has(activeSection) : false

  return (
    <>
      <Navbar isDark={isDark} />

      {isHome && (
        <SectionDots
          activeSection={activeSection}
          snapContainerRef={snapContainerRef}
        />
      )}

      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              onSectionChange={handleSectionChange}
              snapContainerRef={snapContainerRef}
            />
          }
        />
        <Route path="/cv" element={<CVPage />} />
        <Route path="/about" element={<Navigate to="/cv" replace />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>

      {!isHome && <Footer />}
    </>
  )
}
