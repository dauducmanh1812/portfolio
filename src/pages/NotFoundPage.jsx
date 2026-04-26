import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import CinematicBackground from '../components/CinematicBackground'

export default function NotFoundPage() {
  return (
    <div className="h-screen relative overflow-hidden flex flex-col items-center justify-center">
      <CinematicBackground />

      <div className="relative z-10 text-center px-6 select-none">

        {/* Glitch 404 */}
        <motion.div
          className="relative inline-block mb-8"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Base */}
          <span className="text-[clamp(7rem,22vw,14rem)] font-display font-bold text-white leading-none tracking-tighter">
            404
          </span>
          {/* Glitch layer 1 — cyan */}
          <span
            aria-hidden="true"
            className="glitch-layer-1 absolute inset-0 text-[clamp(7rem,22vw,14rem)] font-display font-bold leading-none tracking-tighter"
          >
            404
          </span>
          {/* Glitch layer 2 — red */}
          <span
            aria-hidden="true"
            className="glitch-layer-2 absolute inset-0 text-[clamp(7rem,22vw,14rem)] font-display font-bold leading-none tracking-tighter"
          >
            404
          </span>
        </motion.div>

        <motion.p
          className="text-sm font-body text-white/45 mb-2"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Looks like you got lost.
        </motion.p>

        <motion.p
          className="text-xs font-body text-white/25 mb-10"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          This page doesn't exist.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Link
            to="/"
            className="cta-metallic inline-flex items-center gap-2 text-white px-7 py-3 text-xs font-display tracking-[0.1em] uppercase transition-opacity hover:opacity-90 active:opacity-95"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            Back to home
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
