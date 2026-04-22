import { useEffect } from 'react'
import { personalInfo, experience, education, certifications, awards, skills } from '../data'

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-surface">
      <main className="pt-40 pb-24 px-6 md:px-8 max-w-7xl mx-auto min-h-screen">
        {/* ── Hero Section ── */}
        <section className="mb-40 py-26">
          <div className="grid md:grid-cols-12 gap-16">
            {/* Photo */}
            <div className="md:col-span-5 aperture aspect-[3/4] bg-surface-clo" />

            {/* Info */}
            <div className="md:col-span-7 flex flex-col justify-center">
              <span className="text-[0.75rem] font-display tracking-[0.1em] uppercase text-on-surface/40 mb-6">
                {personalInfo.title} · {personalInfo.subtitle}
              </span>
              <h1 className="text-[clamp(2.5rem,5.5vw,3.5rem)] font-display font-bold tracking-[0.1em] uppercase leading-[0.95] text-on-surface mb-8">
                I build<br />
                products that<br />
                <span className="text-on-surface/40">matter</span>
              </h1>
              <p className="text-base font-body font-light leading-[1.8] text-on-surface/70 max-w-xl mb-10">
                I build scalable applications and lead teams to deliver meaningful digital products that create real impact across Asia.
              </p>
              <div className="flex flex-wrap gap-6">
                <InfoPill icon="mail" text={personalInfo.email} />
                <InfoPill icon="call" text={personalInfo.phone} />
                <InfoPill icon="location_on" text={personalInfo.location} />
              </div>
            </div>
          </div>
        </section>

        {/* ── My Journey ── */}
        <section className="mb-40 py-26 border-b border-[rgba(207,196,197,0.15)]">
          <div className="grid md:grid-cols-12 gap-16">
            <div className="md:col-span-3">
              <SectionLabel>01. My Journey</SectionLabel>
            </div>
            <div className="md:col-span-9 space-y-8">
              <p className="text-base font-body font-light leading-[1.8] text-on-surface/70">
                I started my career at GMO-Z.COM RUNSYSTEM right after graduating from Hanoi University.
                Beginning as a PHP developer, I quickly grew across the full stack — Laravel, Vue.js, React,
                and Node.js — eventually leading teams on enterprise-scale projects across Japan, Korea, and beyond.
              </p>
              <p className="text-base font-body font-light leading-[1.8] text-on-surface/70">
                Over 5+ years, I've contributed to platforms serving millions of users: from construction material
                ordering systems managing 80-person teams, to travel platforms, e-commerce solutions, and hotel
                management tools. My core philosophy is straightforward:{' '}
                <strong className="text-on-surface font-medium">
                  engineer for scale, lead with clarity
                </strong>.
              </p>
            </div>
          </div>

          {/* Quote */}
          <div className="grid md:grid-cols-12 gap-16 mt-20 pt-20 border-t border-[rgba(207,196,197,0.15)]">
            <div className="md:col-span-3">
              <SectionLabel>Philosophy</SectionLabel>
            </div>
            <div className="md:col-span-9">
              <blockquote>
                <p className="text-xl font-body font-light leading-[1.8] text-on-surface italic">
                  "Good code is invisible — it simply works. Great leadership makes{' '}
                  <span className="text-on-surface/40 not-italic">everyone</span> around you ship better."
                </p>
              </blockquote>
            </div>
          </div>
        </section>

        {/* ── Experience ── */}
        <section className="mb-40 py-26 border-b border-[rgba(207,196,197,0.15)]">
          <div className="grid md:grid-cols-12 gap-16 mb-20">
            <div className="md:col-span-3">
              <SectionLabel>02. Experience</SectionLabel>
            </div>
          </div>

          {experience.map((exp, idx) => (
            <div
              key={exp.company}
              className="grid md:grid-cols-12 gap-16 pb-20 mb-20 border-b border-[rgba(207,196,197,0.15)] last:border-b-0"
            >
              <div className="md:col-span-3">
                <span className="text-[0.75rem] font-display tracking-[0.1em] uppercase text-on-surface/40">
                  {exp.period}
                </span>
              </div>
              <div className="md:col-span-9">
                <h3 className="text-xl font-display font-semibold tracking-[-0.015em] leading-tight text-on-surface mb-3">
                  {exp.company}
                </h3>
                <p className="text-[0.75rem] font-display tracking-[0.1em] uppercase text-on-surface/50 mb-6">
                  {exp.role}
                </p>
                <p className="text-base font-body font-light leading-[1.8] text-on-surface/70 mb-6">
                  {exp.description}
                </p>
                <ul className="space-y-3">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-3 text-base font-body font-light leading-[1.8] text-on-surface/70">
                      <span className="text-on-surface/30 mt-0.5 shrink-0">—</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </section>

        {/* ── Expertise Grid ── */}
        <section className="mb-40 py-26 border-b border-[rgba(207,196,197,0.15)]">
          <div className="grid md:grid-cols-12 gap-16 mb-20">
            <div className="md:col-span-3">
              <SectionLabel>03. Expertise</SectionLabel>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
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
        <section className="mb-40 py-26 border-b border-[rgba(207,196,197,0.15)]">
          <div className="grid md:grid-cols-12 gap-16 mb-20">
            <div className="md:col-span-3">
              <SectionLabel>04. Milestones</SectionLabel>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {/* Education */}
            <div className="pb-12 border-b md:border-b-0 md:border-r border-[rgba(207,196,197,0.15)]">
              <span className="text-[0.75rem] font-display tracking-[0.1em] uppercase text-on-surface/40">
                {education.period}
              </span>
              <h3 className="text-lg font-display font-semibold tracking-[-0.015em] leading-tight text-on-surface mt-4">{education.school}</h3>
              <p className="text-sm font-body font-light text-on-surface/60 mt-2">{education.degree}</p>
            </div>

            {/* Certifications */}
            {certifications.map((cert) => (
              <div key={cert.name} className="pb-12 border-b md:border-b-0 md:border-r border-[rgba(207,196,197,0.15)] last:border-0">
                <span className="text-[0.75rem] font-display tracking-[0.1em] uppercase text-on-surface/40">
                  {cert.year}
                </span>
                <h3 className="text-lg font-display font-semibold tracking-[-0.015em] leading-tight text-on-surface mt-4">{cert.name}</h3>
                <p className="text-sm font-body font-light text-on-surface/60 mt-2">{cert.score}</p>
              </div>
            ))}

            {/* Awards */}
            {awards.map((award) => (
              <div key={award.name} className="pb-12 border-b md:border-b-0 md:border-r border-[rgba(207,196,197,0.15)] last:border-0">
                <span className="text-[0.75rem] font-display tracking-[0.1em] uppercase text-on-surface/40">
                  {award.year}
                </span>
                <h3 className="text-lg font-display font-semibold tracking-[-0.015em] leading-tight text-on-surface mt-4">{award.name}</h3>
                <p className="text-sm font-body font-light text-on-surface/60 mt-2">{award.org}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-26 bg-surface-clo">
          <div className="grid md:grid-cols-12 gap-16 items-center">
            <div className="md:col-span-6">
              <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-display font-semibold tracking-[-0.025em] leading-[1.1] text-on-surface">
                Ready to start <span className="text-on-surface/40">something great?</span>
              </h2>
              <p className="text-base font-body font-light leading-[1.8] text-on-surface/70 mt-6">
                I'm always interested in hearing about new opportunities and collaborations.
              </p>
            </div>
            <div className="md:col-span-6 md:text-right">
              <a
                href="mailto:ttducmanh.1812@gmail.com"
                className="inline-flex bg-cta-metallic text-on-primary font-display text-xs font-medium tracking-[0.06em] uppercase px-8 py-4 transition-opacity duration-[400ms] hover:opacity-90 active:opacity-95"
              >
                Get in touch
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
    <h2 className="text-[0.75rem] font-display tracking-[0.1em] uppercase text-on-surface/40">
      {children}
    </h2>
  )
}

function InfoPill({ icon, text }) {
  return (
    <span className="inline-flex items-center gap-2 text-on-surface/70 text-xs font-display bg-transparent px-0 py-2 border-b border-on-surface/20">
      <span className="material-symbols-outlined text-[0.9rem] text-on-surface/50">{icon}</span>
      {text}
    </span>
  )
}

function ExpertiseCard({ num, icon, title, desc }) {
  return (
    <div className="group pb-10 border-b border-[rgba(207,196,197,0.15)]">
      <div className="flex justify-between items-start mb-6">
        <span className="text-[0.75rem] font-display tracking-[0.1em] uppercase text-on-surface/40">
          {num}
        </span>
        <span className="material-symbols-outlined text-on-surface/30 group-hover:text-on-surface/50 transition-colors duration-300">
          {icon}
        </span>
      </div>
      <h3 className="text-lg font-display font-semibold tracking-[-0.015em] leading-tight text-on-surface mb-3">
        {title}
      </h3>
      <p className="text-base font-body font-light leading-[1.8] text-on-surface/70">{desc}</p>
    </div>
  )
}
