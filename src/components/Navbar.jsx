import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/projects', label: 'Projects' },
]

export default function Navbar() {
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-neutral-950/60 backdrop-blur-xl shadow-[0_20px_40px_rgba(149,170,255,0.05)]">
      <div className="flex justify-between items-center px-6 md:px-8 py-5 max-w-7xl mx-auto w-full">
        <Link
          to="/"
          className="text-2xl font-[800] tracking-[-0.06em] text-white font-[Manrope] uppercase"
        >
          MẠNH.DEV
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10 font-[Manrope] tracking-[-0.03em] font-bold uppercase text-[0.85rem]">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`pb-1 transition-all duration-300 ${
                location.pathname === link.path
                  ? 'text-white border-b-2 border-white'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-5">
          <a
            href="mailto:ttducmanh.1812@gmail.com"
            className="hidden sm:inline-flex bg-white text-black px-6 py-2 rounded-full font-[Manrope] font-bold uppercase tracking-[-0.02em] text-sm hover:bg-neutral-200 active:scale-95 transition-all"
          >
            Let's Talk
          </a>
          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-white transition-all ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-neutral-950/95 backdrop-blur-xl px-6 pb-6 border-t border-white/5">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className={`block py-3 font-[Manrope] font-bold uppercase tracking-wider text-sm ${
                location.pathname === link.path ? 'text-white' : 'text-neutral-400'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="mailto:ttducmanh.1812@gmail.com"
            className="mt-4 inline-flex bg-white text-black px-6 py-2 rounded-full font-[Manrope] font-bold uppercase tracking-tight text-sm"
          >
            Let's Talk
          </a>
        </div>
      )}
    </nav>
  )
}
