import { useEffect } from 'react'
import { personalInfo, experience, education, certifications, awards, skills } from '../data'

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-white">
      <main className="pt-40 pb-24 px-6 md:px-8 max-w-5xl mx-auto min-h-screen">
        {/* ── Hero Section ── */}
        <section className="mb-40">
          <div className="flex flex-col items-center md:items-start md:flex-row gap-14 md:gap-20">
            {/* Photo */}
            <div className="relative group shrink-0">
              <div className="absolute -inset-2 bg-gradient-to-br from-amber-200 to-orange-100 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition duration-700" />
              <div className="relative w-52 h-68 md:w-72 md:h-96 rounded-2xl overflow-hidden bg-amber-100 border border-amber-200/50 shadow-lg">
                <img
                  alt="Đỗ Đức Mạnh"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                  src={personalInfo.photo}
                />
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 space-y-8">
              <span className="font-[Inter] tracking-wider font-semibold text-amber-700 text-xs">
                {personalInfo.title} • {personalInfo.subtitle}
              </span>
              <h1 className="text-5xl md:text-7xl font-[Manrope] font-bold tracking-tight text-amber-950 leading-tight mt-4">
                I'm{' '}
                <span className="text-amber-700">Mạnh</span>, a developer <br /> & team leader
              </h1>
              <p className="text-lg md:text-xl text-amber-900/70 font-normal leading-relaxed max-w-xl">
                I build scalable applications and lead teams to deliver meaningful digital products that create real impact across Asia.
              </p>
              <div className="flex flex-wrap gap-3 pt-4">
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
              <p className="text-lg md:text-xl text-amber-900/80 leading-relaxed font-normal">
                I started my career at GMO-Z.COM RUNSYSTEM right after graduating from Hanoi University.
                Beginning as a PHP developer, I quickly grew across the full stack — Laravel, Vue.js, React,
                and Node.js — eventually leading teams on enterprise-scale projects across Japan, Korea, and beyond.
              </p>
              <p className="text-base text-amber-900/70 leading-relaxed max-w-2xl">
                Over 5+ years, I've contributed to platforms serving millions of users: from construction material
                ordering systems managing 80-person teams, to travel platforms, e-commerce solutions, and hotel
                management tools. My core philosophy is straightforward:{' '}
                <strong className="text-amber-950 font-semibold">
                  engineer for scale, lead with clarity
                </strong>.
              </p>
            </div>
          </div>

          {/* Quote */}
          <div className="grid md:grid-cols-12 gap-10 pt-14 border-t border-amber-200/50">
            <div className="md:col-span-4">
              <SectionLabel>Philosophy</SectionLabel>
            </div>
            <div className="md:col-span-8">
              <blockquote className="relative">
                <span className="absolute -left-10 top-0 text-6xl font-[Manrope] text-amber-300/30 leading-none">
                  "
                </span>
                <p className="text-3xl md:text-4xl font-[Manrope] italic font-normal text-amber-950 leading-snug tracking-tight">
                  Good code is invisible — it simply works. Great leadership makes{' '}
                  <span className="text-amber-700 not-italic font-semibold">everyone</span> around you ship better.
                </p>
              </blockquote>
            </div>
          </div>
        </section>

        {/* ── Experience ── */}
        <section className="mb-40">
          <div className="flex items-baseline justify-between mb-20">
            <h2 className="text-4xl md:text-6xl font-[Manrope] font-bold tracking-tight text-amber-950">
              Experience
            </h2>
            <span className="text-amber-700 font-[Manrope] text-sm font-semibold tracking-wider hidden md:block">
              Career
            </span>
          </div>

          {experience.map((exp) => (
            <div
              key={exp.company}
              className="border-b border-amber-200/50 pb-12 mb-12"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-[Manrope] font-bold text-amber-950">
                    {exp.company}
                  </h3>
                  <p className="text-amber-700 font-[Manrope] font-semibold text-sm tracking-wide mt-1">
                    {exp.role}
                  </p>
                </div>
                <span className="text-amber-900/60 font-[Inter] text-sm tracking-wide shrink-0">
                  {exp.period}
                </span>
              </div>
              <p className="text-amber-900/70 text-base leading-relaxed mb-6 max-w-3xl">
                {exp.description}
              </p>
              <ul className="space-y-2">
                {exp.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3 text-amber-900/70 text-sm">
                    <span className="text-amber-700 mt-0.5 shrink-0">▸</span>
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
            <h2 className="text-4xl md:text-6xl font-[Manrope] font-bold tracking-tight text-amber-950">
              Expertise
            </h2>
            <span className="text-amber-700 font-[Manrope] text-sm font-semibold tracking-wider hidden md:block">
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

        {/* ── Timeline ── */}
        <section className="mb-40">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-amber-300/50 via-amber-300/30 to-transparent" />

            <div className="space-y-12">
              {/* Education */}
              <div className="grid md:grid-cols-2 gap-6 md:gap-0">
                <div className="md:text-right md:pr-8">
                  <span className="text-xs font-semibold text-amber-700 tracking-wider">
                    {education.period}
                  </span>
                  <h3 className="text-lg font-semibold text-amber-950 mt-1">{education.school}</h3>
                  <p className="text-sm text-amber-900/60 mt-1">{education.degree}</p>
                </div>
                <div className="md:pl-8">
                  <div className="absolute left-0 md:left-1/2 w-10 h-10 -translate-x-1/2 flex items-center justify-center">
                    <div className="w-5 h-5 rounded-full bg-white border-2 border-amber-400" />
                  </div>
                </div>
              </div>

              {/* Certifications */}
              {certifications.map((cert) => (
                <div key={cert.name} className="grid md:grid-cols-2 gap-6 md:gap-0">
                  <div className="md:text-right md:pr-8">
                    <span className="text-xs font-semibold text-amber-700 tracking-wider">
                      {cert.year}
                    </span>
                    <h3 className="text-lg font-semibold text-amber-950 mt-1">{cert.name}</h3>
                    <p className="text-sm text-amber-900/60 mt-1">{cert.score}</p>
                  </div>
                  <div className="md:pl-8">
                    <div className="absolute left-0 md:left-1/2 w-10 h-10 -translate-x-1/2 flex items-center justify-center">
                      <div className="w-5 h-5 rounded-full bg-white border-2 border-amber-400" />
                    </div>
                  </div>
                </div>
              ))}

              {/* Awards */}
              {awards.map((award) => (
                <div key={award.name} className="grid md:grid-cols-2 gap-6 md:gap-0">
                  <div className="md:text-right md:pr-8">
                    <span className="text-xs font-semibold text-amber-700 tracking-wider">
                      {award.year}
                    </span>
                    <h3 className="text-lg font-semibold text-amber-950 mt-1">{award.name}</h3>
                    <p className="text-sm text-amber-900/60 mt-1">{award.org}</p>
                  </div>
                  <div className="md:pl-8">
                    <div className="absolute left-0 md:left-1/2 w-10 h-10 -translate-x-1/2 flex items-center justify-center">
                      <div className="w-5 h-5 rounded-full bg-white border-2 border-amber-400" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-28 bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200/50 rounded-3xl overflow-hidden relative group shadow-lg">
          <div className="absolute inset-0 bg-gradient-to-t from-amber-100/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="relative z-10 text-center space-y-10 px-8">
            <h2 className="text-4xl md:text-6xl font-[Manrope] font-bold tracking-tight text-amber-950">
              Ready to collaborate?<br />
              <span className="italic text-amber-700">Let's connect</span>
            </h2>
            <div className="pt-6">
              <a
                href="mailto:ttducmanh.1812@gmail.com"
                className="inline-flex items-center gap-3 text-amber-900 font-[Manrope] font-semibold text-base group/btn"
              >
                <span className="border-b-2 border-amber-800 pb-1 group-hover/btn:border-amber-950 transition-colors">
                  Get in touch
                </span>
                <span className="material-symbols-outlined text-lg text-amber-800 group-hover/btn:translate-x-1 transition-transform">
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
    <h2 className="font-[Manrope] text-[0.75rem] font-semibold tracking-wider text-amber-700">
      {children}
    </h2>
  )
}

function InfoPill({ icon, text }) {
  return (
    <span className="inline-flex items-center gap-2 text-amber-900/70 text-xs font-[Inter] bg-amber-100/50 px-3 py-1.5 rounded-full border border-amber-200/70">
      <span className="material-symbols-outlined text-[0.9rem] text-amber-700">{icon}</span>
      {text}
    </span>
  )
}

function ExpertiseCard({ num, icon, title, desc }) {
  return (
    <div className="group border-b border-amber-200/50 pb-10 hover:border-amber-400/60 transition-colors duration-300">
      <div className="flex justify-between items-start mb-5">
        <span className="text-amber-700 font-[Manrope] text-xs font-semibold tracking-wider">
          {num}
        </span>
        <span className="material-symbols-outlined text-amber-700/60 group-hover:text-amber-700 transition-colors">
          {icon}
        </span>
      </div>
      <h3 className="text-2xl md:text-3xl font-[Manrope] font-bold text-amber-950 mb-3">
        {title}
      </h3>
      <p className="text-amber-900/70 text-base leading-relaxed font-normal">{desc}</p>
    </div>
  )
}
