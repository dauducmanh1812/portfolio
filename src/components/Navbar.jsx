import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
]

export default function Navbar() {
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-[rgba(249,249,249,0.72)] backdrop-blur-[32px]">
      <div className="flex justify-between items-center px-6 md:px-8 py-4 max-w-7xl mx-auto w-full border-b border-[rgba(207,196,197,0.15)]">
        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-xs font-display tracking-[0.06em] uppercase transition-colors duration-300 ${
                location.pathname === link.path
                  ? 'text-on-surface'
                  : 'text-on-surface/50 hover:text-on-surface'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-on-surface transition-all ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-on-surface transition-all ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-on-surface transition-all ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-surface-clo px-6 pb-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className={`block py-3 text-xs font-display tracking-[0.06em] uppercase transition-colors duration-300 ${
                location.pathname === link.path ? 'text-on-surface' : 'text-on-surface/50'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
