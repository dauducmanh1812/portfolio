import { useState, useRef, useCallback, useEffect } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import CinematicBackground from './components/CinematicBackground'
import FloatingNav from './components/FloatingNav'
import SectionDots from './components/SectionDots'
import PageTransition from './components/PageTransition'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import CVPage from './pages/CVPage'
import ProjectsPage from './pages/ProjectsPage'
import NotFoundPage from './pages/NotFoundPage'

// Dark sections on homepage (transparent, animated bg shows): 0,1,4,5
const HOME_DARK_SECTIONS = new Set([0, 1, 4, 5])

export default function App() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  const [activeSection, setActiveSection] = useState(0)
  const snapContainerRef = useRef(null)

  // Ref to the contact-scroll function registered by HomePage
  const contactScrollRef = useRef(null)

  const handleSectionChange = useCallback((idx) => {
    setActiveSection(idx)
  }, [])

  const handleContactRequest = useCallback((fn) => {
    contactScrollRef.current = fn
  }, [])

  const handleContactClick = useCallback(() => {
    if (isHome && contactScrollRef.current) {
      contactScrollRef.current()
    } else {
      // On non-home pages, mailto
      window.location.href = 'mailto:ttducmanh.1812@gmail.com'
    }
  }, [isHome])

  // On non-home pages, reset section to 0 so when returning home it starts fresh
  useEffect(() => {
    if (!isHome) setActiveSection(0)
  }, [isHome])

  return (
    <>
      {/* ── Fixed cinematic background — always behind everything ── */}
      <CinematicBackground fixed />

      {/* ── Floating nav ── */}
      <FloatingNav onContactClick={handleContactClick} />

      {/* ── Section dots (homepage only, right edge) ── */}
      {isHome && (
        <SectionDots
          activeSection={activeSection}
          snapContainerRef={snapContainerRef}
        />
      )}

      {/* ── Page routes with transition ── */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageTransition>
                <HomePage
                  onSectionChange={handleSectionChange}
                  snapContainerRef={snapContainerRef}
                  onContactRequest={handleContactRequest}
                />
              </PageTransition>
            }
          />
          <Route
            path="/cv"
            element={
              <PageTransition>
                <CVPage />
              </PageTransition>
            }
          />
          <Route path="/about" element={<Navigate to="/cv" replace />} />
          <Route
            path="/projects"
            element={
              <PageTransition>
                <ProjectsPage />
              </PageTransition>
            }
          />
          <Route
            path="*"
            element={
              <PageTransition>
                <NotFoundPage />
              </PageTransition>
            }
          />
        </Routes>
      </AnimatePresence>

      {/* ── Footer on non-home pages ── */}
      {!isHome && location.pathname !== '*' && <Footer />}
    </>
  )
}
