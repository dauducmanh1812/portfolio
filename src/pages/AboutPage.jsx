import { useEffect } from 'react'
import { personalInfo, experience, education, certifications, awards, skills } from '../data'

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-[#0e0e0e]">
      <main className="pt-40 pb-24 px-6 md:px-8 max-w-5xl mx-auto min-h-screen">
        {/* ── Hero Section ── */}
        <section className="mb-40">
          <div className="flex flex-col items-center md:items-start md:flex-row gap-14 md:gap-20">
            {/* Photo */}
            <div className="relative group shrink-0">
              <div className="absolute -inset-1 bg-gradient-to-tr from-[#0052FF] to-[#3766ff] rounded-lg blur opacity-10 group-hover:opacity-25 transition duration-1000" />
              <div className="relative w-52 h-68 md:w-72 md:h-96 rounded-lg overflow-hidden bg-[#1a1a1a] border border-white/5">
                <img
                  alt="Đỗ Đức Mạnh"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                  src={personalInfo.photo}
                />
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 space-y-8">
              <span className="font-[Inter] uppercase tracking-[0.4em] text-[#0052FF]/80 font-bold text-xs">
                {personalInfo.title} · {personalInfo.subtitle}
              </span>
              <h1 className="text-5xl md:text-8xl font-[Manrope] font-[800] tracking-[-0.06em] text-white leading-[0.9] mt-4">
                I am{' '}
                <span className="text-[#0052FF]">Mạnh</span>.
              </h1>
              <p className="text-xl md:text-2xl text-[#999] font-light leading-snug max-w-xl">
                Building scalable applications and leading teams to deliver impactful digital products across Asia.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <InfoPill icon="mail" text={personalInfo.email} />
                <InfoPill icon="call" text={personalInfo.phone} />
                <InfoPill icon="location_on" text={personalInfo.location} />
              </div>
            </div>
          </div>
        </section>

        {/* ── My Journey ── */}
        <section className="mb-40 space-y-28">
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-4">
              <SectionLabel>My Journey</SectionLabel>
            </div>
            <div className="md:col-span-8 space-y-10">
              <p className="text-xl md:text-2xl text-[#999] leading-relaxed font-light">
                I began my career at GMO-Z.COM RUNSYSTEM right after graduating from Hanoi University.
                Starting as a PHP developer, I quickly expanded across the full stack — Laravel, Vue.js, React,
                Node.js — and grew into leading teams on enterprise-scale Japan, Korea, and other global projects
              </p>
              <p className="text-base text-[#757575] leading-relaxed max-w-2xl">
                Over 5+ years, I've contributed to platforms serving millions of users: from construction material
                ordering systems with 80-person teams, to travel platforms, e-commerce solutions, and hotel
                management tools. My philosophy is simple:{' '}
                <strong className="text-white font-bold">
                  engineer for scale, lead with clarity
                </strong>.
              </p>
            </div>
          </div>

          {/* Quote */}
          <div className="grid md:grid-cols-12 gap-10 pt-14 border-t border-white/5">
            <div className="md:col-span-4">
              <SectionLabel>Philosophy</SectionLabel>
            </div>
            <div className="md:col-span-8">
              <blockquote className="relative">
                <span className="absolute -left-10 top-0 text-6xl font-[Manrope] text-[#0052FF]/20 leading-none">
                  "
                </span>
                <p className="text-3xl md:text-5xl font-[Manrope] italic font-light text-white leading-tight tracking-tight">
                  Good code is invisible — it simply works. Great leadership makes{' '}
                  <span className="text-[#0052FF] not-italic font-bold">everyone</span> around you ship better.
                </p>
              </blockquote>
            </div>
          </div>
        </section>

        {/* ── Experience ── */}
        <section className="mb-40">
          <div className="flex items-baseline justify-between mb-20">
            <h2 className="text-4xl md:text-6xl font-[Manrope] font-[800] tracking-[-0.05em] text-white">
              Experience
            </h2>
            <span className="text-[#757575] font-[Manrope] text-sm uppercase tracking-widest hidden md:block">
              Career
            </span>
          </div>

          {experience.map((exp) => (
            <div
              key={exp.company}
              className="border-b border-white/5 pb-12 mb-12"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-[Manrope] font-bold text-white">
                    {exp.company}
                  </h3>
                  <p className="text-[#0052FF] font-[Manrope] font-bold text-sm uppercase tracking-wider mt-1">
                    {exp.role}
                  </p>
                </div>
                <span className="text-[#757575] font-[Inter] text-sm tracking-wider shrink-0">
                  {exp.period}
                </span>
              </div>
              <p className="text-[#999] text-base leading-relaxed mb-6 max-w-3xl">
                {exp.description}
              </p>
              <ul className="space-y-2">
                {exp.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#999] text-sm">
                    <span className="text-[#0052FF] mt-0.5 shrink-0">▸</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* ── Expertise Grid ── */}
        <section className="mb-40">
          <div className="flex items-baseline justify-between mb-20">
            <h2 className="text-4xl md:text-6xl font-[Manrope] font-[800] tracking-[-0.05em] text-white">
              Expertise
            </h2>
            <span className="text-[#757575] font-[Manrope] text-sm uppercase tracking-widest hidden md:block">
              Capabilities
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <ExpertiseCard
              num="01"
              icon="terminal"
              title="Backend Architecture"
              desc="Designing robust server-side systems with Laravel, NestJS, Django — building RESTful APIs and microservices that serve millions of requests."
            />
            <ExpertiseCard
              num="02"
              icon="web"
              title="Frontend Engineering"
              desc="Crafting responsive, performant interfaces with Vue.js, React, and NuxtJS — from SPAs to server-rendered applications."
            />
            <ExpertiseCard
              num="03"
              icon="groups"
              title="Team Leadership"
              desc="Leading cross-functional teams of 10–80 members, defining technical roadmaps, mentoring developers, and delivering on tight deadlines."
            />
            <ExpertiseCard
              num="04"
              icon="cloud"
              title="Cloud & DevOps"
              desc="Deploying and managing applications on AWS with Docker, CI/CD pipelines, and infrastructure-as-code practices for reliable delivery."
            />
          </div>
        </section>

        {/* ── Education, Certs, Awards ── */}
        <section className="mb-40">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Education */}
            <div className="bg-[#111] rounded-2xl p-8 border border-white/5">
              <span className="material-symbols-outlined text-3xl text-[#0052FF] mb-4 block">school</span>
              <h3 className="font-[Manrope] font-bold text-white text-lg mb-2">
                {education.school}
              </h3>
              <p className="text-[#999] text-sm">{education.degree}</p>
              <p className="text-[#757575] text-xs mt-2 uppercase tracking-wider">{education.period}</p>
            </div>

            {/* Certifications */}
            <div className="bg-[#111] rounded-2xl p-8 border border-white/5">
              <span className="material-symbols-outlined text-3xl text-[#0052FF] mb-4 block">verified</span>
              {certifications.map((cert) => (
                <div key={cert.name}>
                  <h3 className="font-[Manrope] font-bold text-white text-lg mb-2">
                    {cert.name} — {cert.score}
                  </h3>
                  <p className="text-[#757575] text-xs uppercase tracking-wider">{cert.year}</p>
                </div>
              ))}
            </div>

            {/* Awards */}
            <div className="bg-[#111] rounded-2xl p-8 border border-white/5">
              <span className="material-symbols-outlined text-3xl text-[#0052FF] mb-4 block">emoji_events</span>
              {awards.map((award) => (
                <div key={award.name}>
                  <h3 className="font-[Manrope] font-bold text-white text-lg mb-2">
                    {award.name}
                  </h3>
                  <p className="text-[#999] text-sm">{award.org}</p>
                  <p className="text-[#757575] text-xs mt-2 uppercase tracking-wider">{award.year}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-28 bg-black border border-white/5 rounded-2xl overflow-hidden relative group">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,82,255,0.06)_0%,_transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          <div className="relative z-10 text-center space-y-10 px-8">
            <h2 className="text-4xl md:text-7xl font-[Manrope] font-[800] tracking-[-0.06em] text-white">
              Let's build <br /> something{' '}
              <span className="text-[#0052FF] italic">great</span>.
            </h2>
            <div className="pt-6">
              <a
                href="mailto:ttducmanh.1812@gmail.com"
                className="inline-flex items-center gap-4 text-white font-[Manrope] font-bold uppercase tracking-[0.2em] text-sm group/btn"
              >
                <span className="border-b-2 border-[#0052FF] pb-1 group-hover/btn:px-4 transition-all duration-300">
                  Get in touch
                </span>
                <span className="material-symbols-outlined text-[#0052FF] group-hover/btn:translate-x-4 transition-transform duration-300">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

/* ── Sub-components ── */

function SectionLabel({ children }) {
  return (
    <h2 className="font-[Manrope] text-[0.7rem] uppercase tracking-[0.4em] text-[#757575] font-[800]">
      {children}
    </h2>
  )
}

function InfoPill({ icon, text }) {
  return (
    <span className="inline-flex items-center gap-2 text-[#999] text-xs font-[Inter] bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
      <span className="material-symbols-outlined text-[0.9rem] text-[#0052FF]">{icon}</span>
      {text}
    </span>
  )
}

function ExpertiseCard({ num, icon, title, desc }) {
  return (
    <div className="group border-b border-white/5 pb-10 hover:border-[#0052FF]/40 transition-colors duration-500">
      <div className="flex justify-between items-start mb-5">
        <span className="text-[#0052FF] font-[Manrope] text-xs font-[800] tracking-widest uppercase">
          {num}
        </span>
        <span className="material-symbols-outlined text-[#757575] group-hover:text-[#0052FF] transition-colors">
          {icon}
        </span>
      </div>
      <h3 className="text-2xl md:text-3xl font-[Manrope] font-bold text-white mb-3">
        {title}
      </h3>
      <p className="text-[#999] text-base leading-relaxed font-light">{desc}</p>
    </div>
  )
}
