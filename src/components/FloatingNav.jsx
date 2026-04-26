import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

const navItems = [
  { path: '/',    icon: 'home',          label: 'Home' },
  { path: '/cv',  icon: 'description',   label: 'CV' },
]

export default function FloatingNav({ onContactClick }) {
  const location = useLocation()
  const isHome = location.pathname === '/'

  const pillBase =
    'bg-[rgba(8,8,16,0.55)] backdrop-blur-[24px] border border-white/[0.1] shadow-[0_8px_32px_rgba(0,0,0,0.4)]'

  return (
    <>
      {/* ── Desktop: fixed left-center vertical pill ── */}
      <motion.nav
        className={`hidden lg:flex fixed left-7 top-1/2 -translate-y-1/2 z-50 flex-col items-center gap-1 p-2 ${pillBase}`}
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {navItems.map(({ path, icon, label }) => {
          const active = location.pathname === path
          return (
            <Link
              key={path}
              to={path}
              title={label}
              className={`w-10 h-10 flex items-center justify-center transition-all duration-300 group relative ${
                active
                  ? 'bg-white/[0.15] text-white'
                  : 'text-white/40 hover:text-white hover:bg-white/[0.08]'
              }`}
            >
              <span className="material-symbols-outlined text-[1.15rem]">{icon}</span>
              {/* Tooltip */}
              <span className="absolute left-full ml-3 px-2.5 py-1 bg-[rgba(8,8,16,0.9)] text-white text-[0.6rem] font-display tracking-[0.1em] uppercase whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                {label}
              </span>
            </Link>
          )
        })}

        {/* Divider */}
        <div className="w-4 h-px bg-white/10 my-1" />

        {/* Contact — scrolls to last section on home, mailto elsewhere */}
        <button
          title="Contact"
          onClick={onContactClick}
          className="w-10 h-10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/[0.08] transition-all duration-300 group relative"
        >
          <span className="material-symbols-outlined text-[1.15rem]">alternate_email</span>
          <span className="absolute left-full ml-3 px-2.5 py-1 bg-[rgba(8,8,16,0.9)] text-white text-[0.6rem] font-display tracking-[0.1em] uppercase whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            Contact
          </span>
        </button>
      </motion.nav>

      {/* ── Mobile/Tablet: fixed bottom-center horizontal pill ── */}
      <motion.nav
        className={`flex lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex-row items-center gap-1 px-2 py-2 ${pillBase}`}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {navItems.map(({ path, icon, label }) => {
          const active = location.pathname === path
          return (
            <Link
              key={path}
              to={path}
              aria-label={label}
              className={`w-11 h-11 flex items-center justify-center transition-all duration-300 ${
                active
                  ? 'bg-white/[0.15] text-white'
                  : 'text-white/40 hover:text-white hover:bg-white/[0.08]'
              }`}
            >
              <span className="material-symbols-outlined text-[1.2rem]">{icon}</span>
            </Link>
          )
        })}

        <div className="h-5 w-px bg-white/10 mx-1" />

        <button
          aria-label="Contact"
          onClick={onContactClick}
          className="w-11 h-11 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/[0.08] transition-all duration-300"
        >
          <span className="material-symbols-outlined text-[1.2rem]">alternate_email</span>
        </button>
      </motion.nav>
    </>
  )
}
