import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { personalInfo, experience, projects, skills, education, awards } from '../data'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
}

const skillLabels = {
  languages: 'Languages',
  backend: 'Backend',
  frontend: 'Frontend',
  databases: 'Databases',
  devops: 'DevOps & Cloud',
  leadership: 'Leadership',
}

export default function CVPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="cv-page min-h-screen bg-surface pt-20 pb-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">

        {/* Download button — no-print */}
        <div className="no-print flex justify-end mb-10">
          <button
            onClick={() => window.print()}
            className="cta-metallic text-white px-7 py-3 text-xs font-display tracking-[0.08em] uppercase flex items-center gap-2 transition-opacity hover:opacity-90 active:opacity-95"
          >
            <span className="material-symbols-outlined text-sm leading-none">download</span>
            Download PDF
          </button>
        </div>

        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="border-b border-[rgba(207,196,197,0.3)] pb-8 mb-8"
        >
          <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-display font-bold uppercase tracking-tight text-on-surface leading-tight mb-1">
            {personalInfo.name}
          </h1>
          <p className="text-base font-body text-on-surface/60 mb-6">
            {personalInfo.title} · {personalInfo.subtitle}
          </p>
          {/* Contact bar */}
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs font-body text-on-surface/70">
            <a href={`mailto:${personalInfo.email}`} className="hover:text-on-surface transition-colors">
              {personalInfo.email}
            </a>
            <span className="text-on-surface/30">·</span>
            <span>{personalInfo.phone}</span>
            <span className="text-on-surface/30">·</span>
            <span>{personalInfo.location}</span>
            <span className="text-on-surface/30">·</span>
            <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-on-surface transition-colors">
              LinkedIn
            </a>
            <span className="text-on-surface/30">·</span>
            <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer" className="hover:text-on-surface transition-colors">
              GitHub
            </a>
          </div>
        </motion.div>

        {/* Summary */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-[0.65rem] font-display tracking-[0.14em] uppercase text-on-surface/40 mb-4">
            Summary
          </h2>
          <p className="text-sm font-body text-on-surface/80 leading-relaxed max-w-3xl">
            {personalInfo.objective}
          </p>
        </motion.section>

        <div className="border-t border-[rgba(207,196,197,0.2)] mb-10" />

        {/* Experience */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-[0.65rem] font-display tracking-[0.14em] uppercase text-on-surface/40 mb-6">
            Experience
          </h2>
          {experience.map((exp) => (
            <div key={exp.company}>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
                <div>
                  <span className="text-sm font-display font-semibold text-on-surface">{exp.company}</span>
                  <span className="mx-2 text-on-surface/30">·</span>
                  <span className="text-sm font-body text-on-surface/70">{exp.role}</span>
                </div>
                <span className="text-xs font-body text-on-surface/40 shrink-0">{exp.period}</span>
              </div>
              <p className="text-sm font-body text-on-surface/60 mb-4 leading-relaxed">{exp.description}</p>
              <ul className="space-y-1.5">
                {exp.highlights.map((h, i) => (
                  <li key={i} className="flex gap-3 text-sm font-body text-on-surface/70 leading-relaxed">
                    <span className="text-on-surface/30 shrink-0 mt-1">—</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.section>

        <div className="border-t border-[rgba(207,196,197,0.2)] mb-10" />

        {/* Projects */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-[0.65rem] font-display tracking-[0.14em] uppercase text-on-surface/40 mb-6">
            Projects
          </h2>
          <div className="space-y-6">
            {projects.map((p, i) => (
              <div key={p.id} className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-1">
                <span className="text-[0.6rem] font-display text-on-surface/30 pt-0.5 tabular-nums w-6">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
                    <span className="text-sm font-display font-semibold text-on-surface">{p.name}</span>
                    <span className={`text-[0.6rem] font-display tracking-[0.08em] uppercase px-2 py-0.5 ${
                      p.role === 'Team Leader'
                        ? 'bg-on-surface text-surface'
                        : 'border border-[rgba(207,196,197,0.5)] text-on-surface/60'
                    }`}>
                      {p.role}
                    </span>
                    <span className="text-xs font-body text-on-surface/40">{p.period}</span>
                    <span className="text-xs font-body text-on-surface/40">{p.teamSize} people</span>
                  </div>
                  <p className="text-xs font-body text-on-surface/60 leading-relaxed mb-2">{p.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span key={t} className="text-[0.6rem] font-body text-on-surface/50 border border-[rgba(207,196,197,0.35)] px-1.5 py-0.5">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        <div className="border-t border-[rgba(207,196,197,0.2)] mb-10" />

        {/* Skills */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-[0.65rem] font-display tracking-[0.14em] uppercase text-on-surface/40 mb-6">
            Skills
          </h2>
          <div className="space-y-3">
            {Object.entries(skills).map(([key, items]) => (
              <div key={key} className="grid grid-cols-[120px_1fr] gap-4 items-start">
                <span className="text-xs font-display text-on-surface/50 pt-0.5">{skillLabels[key]}</span>
                <span className="text-xs font-body text-on-surface/75 leading-relaxed">
                  {items.join(', ')}
                </span>
              </div>
            ))}
          </div>
        </motion.section>

        <div className="border-t border-[rgba(207,196,197,0.2)] mb-10" />

        {/* Education & Awards */}
        <div className="grid md:grid-cols-2 gap-10">
          <motion.section
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-[0.65rem] font-display tracking-[0.14em] uppercase text-on-surface/40 mb-4">
              Education
            </h2>
            <div>
              <p className="text-sm font-display font-semibold text-on-surface">{education.school}</p>
              <p className="text-sm font-body text-on-surface/70">{education.degree}</p>
              <p className="text-xs font-body text-on-surface/40 mt-1">{education.period}</p>
            </div>
          </motion.section>

          <motion.section
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-[0.65rem] font-display tracking-[0.14em] uppercase text-on-surface/40 mb-4">
              Awards
            </h2>
            {awards.map((a) => (
              <div key={a.name}>
                <p className="text-sm font-display font-semibold text-on-surface">{a.name}</p>
                <p className="text-sm font-body text-on-surface/70">{a.org}</p>
                <p className="text-xs font-body text-on-surface/40 mt-1">{a.year}</p>
              </div>
            ))}
          </motion.section>
        </div>

      </div>
    </div>
  )
}
