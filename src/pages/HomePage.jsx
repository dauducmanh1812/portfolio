import { useRef, useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { motion, useMotionValue, animate } from 'framer-motion'
import { personalInfo, projects, skills } from '../data'

/* ─── Variants ───────────────────────────────────────────────── */
const heroContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.5 } },
}
const heroItem = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] } },
}
const mkFadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.72, ease: [0.25, 0.46, 0.45, 0.94], delay } },
})
const staggerList = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}
const listItem = {
  hidden: { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
}
const tileParent = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
}
const tileChild = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
}

/* ─── Counter ────────────────────────────────────────────────── */
function Counter({ target, prefix = '', suffix = '', isActive }) {
  const mv = useMotionValue(0)
  const [display, setDisplay] = useState('0')

  useEffect(() => {
    if (!isActive) return
    const ctrl = animate(mv, target, { duration: 1.6, ease: 'easeOut' })
    const unsub = mv.on('change', (v) => setDisplay(Math.round(v).toLocaleString()))
    return () => { ctrl.stop(); unsub() }
  }, [isActive, target, mv])

  return <span>{prefix}{display}{suffix}</span>
}

/* ─── Skill tiles ────────────────────────────────────────────── */
const skillMeta = [
  { key: 'backend',    label: 'Backend',        icon: 'terminal' },
  { key: 'frontend',   label: 'Frontend',        icon: 'web' },
  { key: 'databases',  label: 'Databases',       icon: 'storage' },
  { key: 'devops',     label: 'DevOps & Cloud',  icon: 'cloud' },
  { key: 'languages',  label: 'Languages',       icon: 'code' },
  { key: 'leadership', label: 'Leadership',      icon: 'groups' },
]

const featuredProjects = projects.filter((p) => p.featured)

/* ─── Section wrapper ────────────────────────────────────────── */
// Helper: dark section is transparent (fixed animated bg shows through)
// Light section has an opaque surface bg
const DarkSection = ({ children, className = '', ...props }) => (
  <section
    className={`h-[100dvh] snap-start flex items-center overflow-hidden ${className}`}
    {...props}
  >
    {children}
  </section>
)
const LightSection = ({ children, className = '', ...props }) => (
  <section
    className={`h-[100dvh] snap-start flex items-center overflow-hidden bg-[#f6f6f7] ${className}`}
    {...props}
  >
    {children}
  </section>
)

/* ─── HomePage ───────────────────────────────────────────────── */
export default function HomePage({ onSectionChange, snapContainerRef, onContactRequest }) {
  const localRef = useRef(null)
  const snapRef = snapContainerRef || localRef
  const [activeSection, setActiveSection] = useState(0)
  const TOTAL = 6

  const handleScroll = useCallback(() => {
    const el = snapRef.current
    if (!el) return
    const idx = Math.round(el.scrollTop / window.innerHeight)
    const clamped = Math.max(0, Math.min(TOTAL - 1, idx))
    setActiveSection((prev) => {
      if (prev !== clamped) { onSectionChange?.(clamped); return clamped }
      return prev
    })
  }, [onSectionChange, snapRef])

  useEffect(() => {
    const el = snapRef.current
    if (!el) return
    el.addEventListener('scroll', handleScroll, { passive: true })
    return () => el.removeEventListener('scroll', handleScroll)
  }, [handleScroll, snapRef])

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    onSectionChange?.(0)
    return () => { document.body.style.overflow = '' }
  }, [onSectionChange])

  // Expose contact scroll via App-level callback
  useEffect(() => {
    if (onContactRequest) {
      onContactRequest(() => {
        snapRef.current?.scrollTo({ top: window.innerHeight * 5, behavior: 'smooth' })
      })
    }
  }, [onContactRequest, snapRef])

  const sa = (idx) => activeSection === idx ? 'visible' : 'hidden'

  return (
    <div
      ref={snapRef}
      className="h-screen overflow-y-scroll snap-y snap-mandatory hide-scrollbar relative"
      style={{ overscrollBehavior: 'none', zIndex: 1 }}
    >

      {/* ══ 1 · HERO ══════════════════════════════════════════ */}
      {/* transparent — fixed cinematic bg shows through */}
      <DarkSection>
        <div className="w-full px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
          <motion.div variants={heroContainer} initial="hidden" animate="visible">
            <motion.p variants={heroItem} className="text-[0.6rem] font-display tracking-[0.24em] uppercase text-white/30 mb-6">
              {personalInfo.nameEn}
            </motion.p>

            <motion.h1
              variants={heroItem}
              className="text-[clamp(2.8rem,7.5vw,7rem)] font-display font-bold uppercase text-white leading-[0.88] tracking-tight mb-8"
            >
              Full-Stack
              <br />
              <span className="text-white/28">Engineer &amp;</span>
              <br />
              Team Leader
            </motion.h1>

            <motion.p variants={heroItem} className="text-sm font-body text-white/40 max-w-sm mb-10 leading-[1.85]">
              Passionate about clean code, good teamwork, and shipping things
              that actually work.
            </motion.p>

            <motion.div variants={heroItem} className="flex flex-wrap items-center gap-5">
              <button
                onClick={() => snapRef.current?.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                className="cta-metallic text-white px-8 py-3.5 text-xs font-display tracking-[0.1em] uppercase transition-opacity hover:opacity-90 active:opacity-95"
              >
                About me
              </button>
              <Link
                to="/cv"
                className="text-xs font-display tracking-[0.1em] uppercase text-white/40 hover:text-white/80 transition-colors duration-300 border-b border-white/15 hover:border-white/40 pb-0.5"
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
          transition={{ delay: 2.2, duration: 0.8 }}
        >
          <span className="text-[0.5rem] font-display tracking-[0.22em] uppercase text-white/20">scroll</span>
          <motion.div
            className="w-px h-10 bg-white/15"
            animate={{ scaleY: [1, 0.3, 1], opacity: [0.25, 0.7, 0.25] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </DarkSection>

      {/* ══ 2 · PHOTO / ABOUT ══════════════════════════════════ */}
      {/* Light section — photo has white bg, needs clean surface */}
      <LightSection className="relative">
        <div className="w-full h-full grid md:grid-cols-2">

          {/* Left: profile photo */}
          <motion.div
            variants={mkFadeUp(0)}
            initial="hidden"
            animate={sa(1)}
            className="relative overflow-hidden"
            style={{ height: '100dvh' }}
          >
            <img
              src={personalInfo.photo}
              alt={personalInfo.name}
              className="w-full h-full object-cover object-top"
              style={{ filter: 'grayscale(8%) contrast(1.04)' }}
            />
            {/* Subtle gradient overlay on right edge to blend into text side */}
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-r from-transparent to-[#f6f6f7] hidden md:block" />
          </motion.div>

          {/* Right: bio */}
          <div className="flex flex-col justify-center px-8 md:px-12 lg:px-16 absolute inset-0 md:relative md:inset-auto bg-[rgba(246,246,247,0.88)] md:bg-transparent backdrop-blur-sm md:backdrop-blur-none">
            <motion.div variants={mkFadeUp(0.1)} initial="hidden" animate={sa(1)}>
              <p className="text-[0.6rem] font-display tracking-[0.2em] uppercase text-on-surface/30 mb-6">About</p>

              <h2 className="text-[clamp(1.6rem,3.5vw,2.8rem)] font-display font-bold uppercase text-on-surface leading-[0.95] tracking-tight mb-6">
                {personalInfo.name}
              </h2>

              <p className="text-[0.75rem] font-display tracking-[0.05em] uppercase text-on-surface/50 mb-6">
                {personalInfo.title} · {personalInfo.subtitle}
              </p>

              <p className="text-sm font-body text-on-surface/65 leading-[1.9] max-w-xs mb-8">
                I love building things properly — from the database to the UI.
                Five years in, and I still get excited every time I ship something
                that makes a real difference for people.
              </p>

              <div className="flex gap-6 text-xs font-body text-on-surface/40 border-t border-[rgba(207,196,197,0.3)] pt-6">
                <span>📍 {personalInfo.location}</span>
                <span>🎂 Since 1999</span>
              </div>
            </motion.div>
          </div>

        </div>
      </LightSection>

      {/* ══ 3 · NUMBERS ════════════════════════════════════════ */}
      <LightSection>
        <div className="w-full px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
          <motion.p variants={mkFadeUp(0)} initial="hidden" animate={sa(2)}
            className="text-[0.6rem] font-display tracking-[0.22em] uppercase text-on-surface/28 mb-16">
            In numbers
          </motion.p>

          <div className="grid grid-cols-3 gap-6 md:gap-10 mb-16">
            {[
              { target: 5,  suffix: '+', label: 'Years',    delay: 0 },
              { target: 6,  suffix: '+', label: 'Products', delay: 0.12 },
              { target: 80, suffix: '+', label: 'Engineers', delay: 0.24 },
            ].map(({ target, suffix, label, delay }) => (
              <motion.div key={label} variants={mkFadeUp(delay)} initial="hidden" animate={sa(2)}
                className="border-t border-[rgba(207,196,197,0.35)] pt-5">
                <div className="text-[clamp(2.8rem,6vw,5.5rem)] font-display font-bold text-on-surface leading-none tracking-tight mb-2">
                  <Counter target={target} suffix={suffix} isActive={activeSection === 2} />
                </div>
                <p className="text-[0.6rem] font-body text-on-surface/38 tracking-wider uppercase">{label}</p>
              </motion.div>
            ))}
          </div>

          <motion.p variants={mkFadeUp(0.4)} initial="hidden" animate={sa(2)}
            className="text-sm font-body text-on-surface/32 max-w-md leading-[1.9] italic border-l-2 border-[rgba(207,196,197,0.4)] pl-5">
            "The best code is invisible — it simply solves the problem."
          </motion.p>
        </div>
      </LightSection>

      {/* ══ 4 · WORK ═══════════════════════════════════════════ */}
      <LightSection style={{ backgroundColor: '#f0f0f2' }}>
        <div className="w-full px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-[200px_1fr] gap-10 md:gap-20 items-start">

            <motion.div variants={mkFadeUp(0)} initial="hidden" animate={sa(3)}>
              <p className="text-[0.6rem] font-display tracking-[0.22em] uppercase text-on-surface/28 mb-4">Selected Work</p>
              <p className="text-sm font-body text-on-surface/50 leading-relaxed mb-8">
                6 enterprise products across Japan, Korea &amp; Southeast Asia.
              </p>
              <Link to="/cv"
                className="text-[0.6rem] font-display tracking-[0.1em] uppercase text-on-surface/38 hover:text-on-surface transition-colors duration-300 border-b border-on-surface/15 hover:border-on-surface/40 pb-0.5">
                Full CV →
              </Link>
            </motion.div>

            <motion.div variants={staggerList} initial="hidden" animate={sa(3)}>
              {featuredProjects.map((p, i) => (
                <motion.div key={p.id} variants={listItem}
                  whileHover={{ x: 10 }} transition={{ duration: 0.2 }}
                  className="border-t border-[rgba(207,196,197,0.35)] py-5">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex gap-4 items-baseline min-w-0">
                      <span className="text-[0.55rem] font-display text-on-surface/22 tabular-nums shrink-0">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-baseline gap-3 mb-1.5">
                          <span className="text-sm font-display font-semibold text-on-surface">{p.name}</span>
                          <span className={`text-[0.54rem] font-display tracking-[0.08em] uppercase px-2 py-0.5 shrink-0 ${
                            p.role === 'Team Leader'
                              ? 'bg-on-surface text-[#f6f6f7]'
                              : 'border border-[rgba(207,196,197,0.5)] text-on-surface/50'
                          }`}>{p.role}</span>
                        </div>
                        <p className="text-xs font-body text-on-surface/42 leading-relaxed line-clamp-1">{p.description}</p>
                      </div>
                    </div>
                    <div className="shrink-0 text-right hidden sm:block">
                      <p className="text-[0.55rem] font-body text-on-surface/28">{p.period}</p>
                      <p className="text-[0.55rem] font-body text-on-surface/28 mt-0.5">{p.teamSize} people</p>
                    </div>
                  </div>
                </motion.div>
              ))}
              <div className="border-t border-[rgba(207,196,197,0.35)]" />
            </motion.div>
          </div>
        </div>
      </LightSection>

      {/* ══ 5 · EXPERTISE ══════════════════════════════════════ */}
      {/* Dark with strong overlay — animated bg bleeds through subtly */}
      <section
        className="h-[100dvh] snap-start flex items-center overflow-hidden"
        style={{ background: 'rgba(5,5,10,0.9)' }}
      >
        <div className="w-full px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
          <motion.p variants={mkFadeUp(0)} initial="hidden" animate={sa(4)}
            className="text-[0.6rem] font-display tracking-[0.22em] uppercase text-white/18 mb-10">
            Expertise
          </motion.p>

          <motion.div variants={tileParent} initial="hidden" animate={sa(4)}
            className="grid grid-cols-2 md:grid-cols-3 gap-px" style={{ background: 'rgba(255,255,255,0.04)' }}>
            {skillMeta.map(({ key, label, icon }) => (
              <motion.div key={key} variants={tileChild}
                className="p-6 md:p-7 border-t border-white/[0.04] group cursor-default transition-colors duration-300 hover:bg-white/[0.03]"
                style={{ background: 'rgba(5,5,10,0.92)' }}>
                <span className="material-symbols-outlined text-white/18 text-lg mb-3 block group-hover:text-white/30 transition-colors duration-300">{icon}</span>
                <p className="text-[0.68rem] font-display font-semibold uppercase tracking-[0.08em] text-white/65 mb-1.5">{label}</p>
                <p className="text-[0.6rem] font-body text-white/28 leading-relaxed">
                  {skills[key].slice(0, 4).join(', ')}
                  {skills[key].length > 4 && <span className="text-white/15"> +{skills[key].length - 4}</span>}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ 6 · CONTACT ════════════════════════════════════════ */}
      {/* Transparent — animated bg shows */}
      <DarkSection className="relative">
        <div className="w-full px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
          <motion.div variants={mkFadeUp(0)} initial="hidden" animate={sa(5)}>
            <p className="text-[0.6rem] font-display tracking-[0.22em] uppercase text-white/25 mb-8">
              Let's Connect
            </p>

            <h2 className="text-[clamp(2rem,6vw,5.5rem)] font-display font-bold uppercase text-white leading-[0.88] tracking-tight mb-10">
              Let's Build
              <br />
              <span className="text-white/25">Something.</span>
            </h2>

            <div className="flex flex-col gap-4 mb-12">
              <a href={`mailto:${personalInfo.email}`}
                className="group inline-flex items-center gap-3 text-sm font-body text-white/50 hover:text-white transition-colors duration-300 w-fit">
                <span className="material-symbols-outlined text-sm text-white/22 group-hover:text-white/50 transition-colors">mail</span>
                {personalInfo.email}
              </a>
              <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 text-sm font-body text-white/50 hover:text-white transition-colors duration-300 w-fit">
                <span className="text-white/22 group-hover:text-white/50 transition-colors text-[0.58rem] font-display uppercase tracking-widest">in</span>
                LinkedIn
              </a>
              <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 text-sm font-body text-white/50 hover:text-white transition-colors duration-300 w-fit">
                <span className="text-white/22 group-hover:text-white/50 transition-colors text-[0.58rem] font-display uppercase tracking-widest">gh</span>
                GitHub
              </a>
            </div>

            <Link to="/cv"
              className="inline-flex items-center gap-2 text-[0.6rem] font-display tracking-[0.1em] uppercase text-white/30 hover:text-white/65 transition-colors duration-300 border-b border-white/12 hover:border-white/30 pb-0.5">
              Download CV
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </motion.div>
        </div>

        <div className="absolute bottom-5 w-full text-center">
          <p className="text-[0.54rem] font-body text-white/15 tracking-widest uppercase">
            © {new Date().getFullYear()} {personalInfo.name}
          </p>
        </div>
      </DarkSection>

    </div>
  )
}
