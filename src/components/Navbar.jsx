import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/cv', label: 'CV' },
]

export default function Navbar({ isDark = false }) {
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)

  const navBg = isDark
    ? 'bg-[rgba(0,0,0,0.35)] backdrop-blur-[32px]'
    : 'bg-[rgba(249,249,249,0.72)] backdrop-blur-[32px]'
  const borderColor = isDark
    ? 'border-[rgba(255,255,255,0.08)]'
    : 'border-[rgba(207,196,197,0.15)]'
  const activeLinkClass = isDark ? 'text-white' : 'text-on-surface'
  const inactiveLinkClass = isDark
    ? 'text-white/50 hover:text-white'
    : 'text-on-surface/50 hover:text-on-surface'
  const hamburgerColor = isDark ? 'bg-white' : 'bg-on-surface'
  const mobileMenuBg = isDark ? 'bg-[rgba(0,0,0,0.92)] backdrop-blur-[32px]' : 'bg-surface-clo'
  const mobileLinkActive = isDark ? 'text-white' : 'text-on-surface'
  const mobileLinkInactive = isDark ? 'text-white/50' : 'text-on-surface/50'

  return (
    <nav className={`fixed top-0 w-full z-50 transition-colors duration-500 ${navBg}`}>
      <div className={`flex justify-between items-center px-6 md:px-8 py-4 max-w-7xl mx-auto w-full border-b ${borderColor}`}>
        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-xs font-display tracking-[0.06em] uppercase transition-colors duration-300 ${
                location.pathname === link.path ? activeLinkClass : inactiveLinkClass
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
          <span className={`block w-6 h-0.5 transition-all ${hamburgerColor} ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 transition-all ${hamburgerColor} ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 transition-all ${hamburgerColor} ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className={`md:hidden ${mobileMenuBg} px-6 pb-6`}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className={`block py-3 text-xs font-display tracking-[0.06em] uppercase transition-colors duration-300 ${
                location.pathname === link.path ? mobileLinkActive : mobileLinkInactive
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
