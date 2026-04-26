import { useRef, useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { motion, useMotionValue, animate } from 'framer-motion'
import CinematicBackground from '../components/CinematicBackground'
import { personalInfo, projects, skills } from '../data'

/* ─── Animation variants ─────────────────────────────────────── */
const heroContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.4 } },
}
const heroItem = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] } },
}
const fadeUpSection = (delay = 0) => ({
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94], delay } },
})
const staggerList = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}
const listItem = {
  hidden: { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
}
const tileVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
}
const tileItem = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
}

/* ─── Animated counter ───────────────────────────────────────── */
function Counter({ target, prefix = '', suffix = '', isActive }) {
  const mv = useMotionValue(0)
  const [display, setDisplay] = useState('0')

  useEffect(() => {
    if (!isActive) return
    const controls = animate(mv, target, { duration: 1.6, ease: 'easeOut' })
    const unsub = mv.on('change', (v) => setDisplay(Math.round(v).toLocaleString()))
    return () => {
      controls.stop()
      unsub()
    }
  }, [isActive, target, mv])

  return <span>{prefix}{display}{suffix}</span>
}

/* ─── Skill meta ─────────────────────────────────────────────── */
const skillMeta = [
  { key: 'backend',    label: 'Backend',        icon: 'terminal' },
  { key: 'frontend',   label: 'Frontend',        icon: 'web' },
  { key: 'databases',  label: 'Databases',       icon: 'storage' },
  { key: 'devops',     label: 'DevOps & Cloud',  icon: 'cloud' },
  { key: 'languages',  label: 'Languages',       icon: 'code' },
  { key: 'leadership', label: 'Leadership',      icon: 'groups' },
]

const featuredProjects = projects.filter((p) => p.featured)

/* ─── HomePage ───────────────────────────────────────────────── */
export default function HomePage({ onSectionChange, snapContainerRef }) {
  const localRef = useRef(null)
  const snapRef = snapContainerRef || localRef
  const [activeSection, setActiveSection] = useState(0)

  const handleScroll = useCallback(() => {
    const el = snapRef.current
    if (!el) return
    const idx = Math.round(el.scrollTop / window.innerHeight)
    const clamped = Math.max(0, Math.min(4, idx))
    setActiveSection((prev) => {
      if (prev !== clamped) {
        onSectionChange?.(clamped)
        return clamped
      }
      return prev
    })
  }, [onSectionChange])

  useEffect(() => {
    const el = snapRef.current
    if (!el) return
    el.addEventListener('scroll', handleScroll, { passive: true })
    return () => el.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    onSectionChange?.(0)
    return () => { document.body.style.overflow = '' }
  }, [onSectionChange])

  const sa = (idx) => activeSection === idx ? 'visible' : 'hidden'

  return (
    <div
      ref={snapRef}
      className="h-screen overflow-y-scroll snap-y snap-mandatory hide-scrollbar"
      style={{ overscrollBehavior: 'none' }}
    >

      {/* ══════════════ SECTION 1 — HERO ══════════════════════ */}
      <section className="h-[100dvh] snap-start relative overflow-hidden flex items-center">
        <CinematicBackground />

        <div className="relative z-10 w-full px-6 md:px-16 max-w-7xl mx-auto">
          <motion.div variants={heroContainer} initial="hidden" animate="visible">
            <motion.p variants={heroItem} className="text-[0.65rem] font-display tracking-[0.22em] uppercase text-white/35 mb-6">
              {personalInfo.nameEn}
            </motion.p>

            <motion.h1
              variants={heroItem}
              className="text-[clamp(2.8rem,7vw,6.5rem)] font-display font-bold uppercase text-white leading-[0.92] tracking-tight mb-8"
            >
              Full-Stack
              <br />
              <span className="text-white/35">Engineer &amp;</span>
              <br />
              Team Leader
            </motion.h1>

            <motion.p variants={heroItem} className="text-sm font-body text-white/45 max-w-md mb-10 leading-relaxed">
              Passionate about clean code, good teamwork, and shipping things
              that actually work — across Japan, Korea &amp; Southeast Asia.
            </motion.p>

            <motion.div variants={heroItem} className="flex flex-wrap items-center gap-5">
              <button
                onClick={() => snapRef.current?.scrollTo({ top: window.innerHeight * 2, behavior: 'smooth' })}
                className="cta-metallic text-white px-8 py-3.5 text-xs font-display tracking-[0.08em] uppercase transition-opacity hover:opacity-90 active:opacity-95"
              >
                See My Work
              </button>
              <Link
                to="/cv"
                className="text-xs font-display tracking-[0.08em] uppercase text-white/50 hover:text-white transition-colors duration-300 border-b border-white/20 hover:border-white/50 pb-0.5"
              >
                View CV
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <span className="text-[0.55rem] font-display tracking-[0.2em] uppercase text-white/25">scroll</span>
          <motion.div
            className="w-px h-8 bg-white/20"
            animate={{ scaleY: [1, 0.4, 1], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </section>

      {/* ══════════════ SECTION 2 — NUMBERS ═══════════════════ */}
      <section className="h-[100dvh] snap-start bg-surface flex items-center">
        <div className="w-full px-6 md:px-16 max-w-7xl mx-auto">
          <motion.p
            variants={fadeUpSection(0)}
            initial="hidden"
            animate={sa(1)}
            className="text-[0.65rem] font-display tracking-[0.2em] uppercase text-on-surface/30 mb-16"
          >
            In numbers
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6">
            {[
              { target: 5,  prefix: '', suffix: '+', label: 'Years of Experience',  delay: 0 },
              { target: 6,  prefix: '', suffix: '+', label: 'Products Shipped',      delay: 0.15 },
              { target: 80, prefix: '', suffix: '+', label: 'Engineers Worked With', delay: 0.3 },
            ].map(({ target, prefix, suffix, label, delay }) => (
              <motion.div
                key={label}
                variants={fadeUpSection(delay)}
                initial="hidden"
                animate={sa(1)}
                className="border-t border-[rgba(207,196,197,0.3)] pt-6"
              >
                <div className="text-[clamp(3.5rem,8vw,6rem)] font-display font-bold text-on-surface leading-none tracking-tight mb-3">
                  <Counter target={target} prefix={prefix} suffix={suffix} isActive={activeSection === 1} />
                </div>
                <p className="text-xs font-body text-on-surface/45 tracking-wide uppercase">{label}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            variants={fadeUpSection(0.5)}
            initial="hidden"
            animate={sa(1)}
            className="mt-16 text-sm font-body text-on-surface/35 max-w-lg leading-relaxed italic"
          >
            "The best code is invisible — it simply solves the problem. The best leaders amplify everyone around them."
          </motion.p>
        </div>
      </section>

      {/* ══════════════ SECTION 3 — WORK ══════════════════════ */}
      <section className="h-[100dvh] snap-start bg-surface-clo flex items-center">
        <div className="w-full px-6 md:px-16 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-[220px_1fr] gap-10 md:gap-20 items-start">

            <motion.div variants={fadeUpSection(0)} initial="hidden" animate={sa(2)}>
              <p className="text-[0.65rem] font-display tracking-[0.2em] uppercase text-on-surface/30 mb-4">
                Selected Work
              </p>
              <p className="text-sm font-body text-on-surface/55 leading-relaxed mb-8">
                6 enterprise products across Japan, Korea &amp; Southeast Asia.
              </p>
              <Link
                to="/cv"
                className="text-xs font-display tracking-[0.08em] uppercase text-on-surface/45 hover:text-on-surface transition-colors duration-300 border-b border-on-surface/20 hover:border-on-surface/50 pb-0.5"
              >
                Full CV →
              </Link>
            </motion.div>

            <motion.div variants={staggerList} initial="hidden" animate={sa(2)} className="space-y-0">
              {featuredProjects.map((p, i) => (
                <motion.div
                  key={p.id}
                  variants={listItem}
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.2 }}
                  className="border-t border-[rgba(207,196,197,0.3)] py-5"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-baseline gap-4 min-w-0">
                      <span className="text-[0.58rem] font-display text-on-surface/25 tabular-nums shrink-0">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-baseline gap-3 mb-1.5">
                          <span className="text-sm font-display font-semibold text-on-surface">{p.name}</span>
                          <span className={`text-[0.56rem] font-display tracking-[0.08em] uppercase px-2 py-0.5 shrink-0 ${
                            p.role === 'Team Leader'
                              ? 'bg-on-surface text-surface'
                              : 'border border-[rgba(207,196,197,0.5)] text-on-surface/55'
                          }`}>
                            {p.role}
                          </span>
                        </div>
                        <p className="text-xs font-body text-on-surface/45 leading-relaxed line-clamp-2">{p.description}</p>
                      </div>
                    </div>
                    <div className="shrink-0 text-right hidden sm:block">
                      <p className="text-[0.58rem] font-body text-on-surface/30">{p.period}</p>
                      <p className="text-[0.58rem] font-body text-on-surface/30 mt-0.5">{p.teamSize} people</p>
                    </div>
                  </div>
                </motion.div>
              ))}
              <div className="border-t border-[rgba(207,196,197,0.3)]" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════ SECTION 4 — EXPERTISE ═════════════════ */}
      <section className="h-[100dvh] snap-start bg-[#0d0d0d] flex items-center">
        <div className="w-full px-6 md:px-16 max-w-7xl mx-auto">
          <motion.p
            variants={fadeUpSection(0)}
            initial="hidden"
            animate={sa(3)}
            className="text-[0.65rem] font-display tracking-[0.2em] uppercase text-white/20 mb-12"
          >
            Expertise
          </motion.p>

          <motion.div
            variants={tileVariants}
            initial="hidden"
            animate={sa(3)}
            className="grid grid-cols-2 md:grid-cols-3 gap-px bg-white/[0.05]"
          >
            {skillMeta.map(({ key, label, icon }) => (
              <motion.div
                key={key}
                variants={tileItem}
                className="bg-[#0d0d0d] p-6 md:p-8 border-t border-white/[0.05] hover:bg-white/[0.025] transition-colors duration-300 group"
              >
                <span className="material-symbols-outlined text-white/20 text-xl mb-4 block group-hover:text-white/35 transition-colors duration-300">{icon}</span>
                <p className="text-xs font-display font-semibold uppercase tracking-[0.08em] text-white/70 mb-2">{label}</p>
                <p className="text-[0.62rem] font-body text-white/30 leading-relaxed">
                  {skills[key].slice(0, 4).join(', ')}
                  {skills[key].length > 4 && <span className="text-white/18"> +{skills[key].length - 4}</span>}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════ SECTION 5 — CONTACT ═══════════════════ */}
      <section className="h-[100dvh] snap-start relative overflow-hidden flex items-center">
        <CinematicBackground />

        <div className="relative z-10 w-full px-6 md:px-16 max-w-7xl mx-auto">
          <motion.div variants={fadeUpSection(0)} initial="hidden" animate={sa(4)}>
            <p className="text-[0.65rem] font-display tracking-[0.2em] uppercase text-white/30 mb-8">
              Let's Connect
            </p>

            <h2 className="text-[clamp(2rem,6vw,5rem)] font-display font-bold uppercase text-white leading-[0.92] tracking-tight mb-10">
              Let's Build
              <br />
              <span className="text-white/30">Something.</span>
            </h2>

            <div className="flex flex-col gap-4 mb-12">
              <a
                href={`mailto:${personalInfo.email}`}
                className="group inline-flex items-center gap-3 text-sm font-body text-white/55 hover:text-white transition-colors duration-300 w-fit"
              >
                <span className="material-symbols-outlined text-sm text-white/25 group-hover:text-white/55 transition-colors">mail</span>
                {personalInfo.email}
              </a>
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 text-sm font-body text-white/55 hover:text-white transition-colors duration-300 w-fit"
              >
                <span className="text-white/25 group-hover:text-white/55 transition-colors text-[0.6rem] font-display uppercase tracking-widest">in</span>
                LinkedIn
              </a>
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 text-sm font-body text-white/55 hover:text-white transition-colors duration-300 w-fit"
              >
                <span className="text-white/25 group-hover:text-white/55 transition-colors text-[0.6rem] font-display uppercase tracking-widest">gh</span>
                GitHub
              </a>
            </div>

            <Link
              to="/cv"
              className="inline-flex items-center gap-2 text-xs font-display tracking-[0.08em] uppercase text-white/35 hover:text-white/75 transition-colors duration-300 border-b border-white/15 hover:border-white/35 pb-0.5"
            >
              Download CV
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </motion.div>
        </div>

        <div className="absolute bottom-6 w-full text-center">
          <p className="text-[0.58rem] font-body text-white/18 tracking-widest uppercase">
            © {new Date().getFullYear()} {personalInfo.name}
          </p>
        </div>
      </section>

    </div>
  )
}
