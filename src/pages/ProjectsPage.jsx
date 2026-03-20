import { useEffect, useState } from 'react'
import { projects } from '../data'

const filters = ['All', 'Leader', 'Member']

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [expanded, setExpanded] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const filtered =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.role === (activeFilter === 'Leader' ? 'Team Leader' : 'Member'))

  return (
    <div className="bg-[#0e0e0e]">
      <main className="pt-40 pb-24 px-6 md:px-8 max-w-6xl mx-auto min-h-screen">
        {/* ── Header ── */}
        <section className="mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
            <div>
              <span className="font-[Inter] uppercase tracking-[0.4em] text-[#0052FF]/80 font-bold text-xs">
                Portfolio
              </span>
              <h1 className="text-5xl md:text-8xl font-[Manrope] font-[800] tracking-[-0.06em] text-white leading-[0.9] mt-4">
                Projects
              </h1>
            </div>
            <p className="text-[#999] text-base md:text-lg font-light max-w-md leading-relaxed">
              A selection of enterprise-scale applications I've built and led across e-commerce, travel, hospitality, and construction industries.
            </p>
          </div>

          {/* Filter pills */}
          <div className="flex gap-3">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-5 py-2 rounded-full text-xs font-[Manrope] font-bold uppercase tracking-wider transition-all duration-300 border ${
                  activeFilter === f
                    ? 'bg-white text-black border-white'
                    : 'bg-transparent text-[#999] border-white/10 hover:border-white/30 hover:text-white'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </section>

        {/* ── Project List ── */}
        <section className="space-y-6">
          {filtered.map((project, i) => (
            <div
              key={project.id}
              className="group bg-[#111] rounded-2xl border border-white/5 hover:border-[#0052FF]/20 transition-all duration-500 overflow-hidden"
            >
              {/* Collapsed row */}
              <button
                onClick={() => setExpanded(expanded === project.id ? null : project.id)}
                className="w-full text-left p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-6 cursor-pointer"
              >
                <span className="text-[#0052FF] font-[Manrope] text-xs font-[800] tracking-widest uppercase shrink-0 w-8">
                  {String(i + 1).padStart(2, '0')}
                </span>

                <div className="flex-1 min-w-0">
                  <h3 className="text-xl md:text-2xl font-[Manrope] font-bold text-white group-hover:text-[#0052FF] transition-colors truncate">
                    {project.name}
                  </h3>
                  <p className="text-[#757575] text-sm mt-1 font-[Inter]">
                    {project.period}
                  </p>
                </div>

                <div className="flex items-center gap-4 shrink-0">
                  <span
                    className={`text-[0.65rem] px-3 py-1 rounded-full font-[Inter] font-medium uppercase tracking-wider ${
                      project.role === 'Team Leader'
                        ? 'bg-[#0052FF]/10 text-[#0052FF] border border-[#0052FF]/20'
                        : 'bg-white/5 text-[#999] border border-white/10'
                    }`}
                  >
                    {project.role}
                  </span>
                  <span className="text-[#757575] text-sm font-[Inter] hidden md:block">
                    {project.teamSize} members
                  </span>
                  <span
                    className={`material-symbols-outlined text-[#757575] transition-transform duration-300 ${
                      expanded === project.id ? 'rotate-180' : ''
                    }`}
                  >
                    expand_more
                  </span>
                </div>
              </button>

              {/* Expanded content */}
              {expanded === project.id && (
                <div className="px-8 md:px-10 pb-10 pt-0 border-t border-white/5">
                  <div className="grid md:grid-cols-12 gap-8 pt-8">
                    <div className="md:col-span-7 space-y-4">
                      <h4 className="font-[Manrope] text-[0.65rem] uppercase tracking-[0.3em] text-[#757575] font-[800]">
                        Description
                      </h4>
                      <p className="text-[#999] text-base leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="md:col-span-2 space-y-4">
                      <h4 className="font-[Manrope] text-[0.65rem] uppercase tracking-[0.3em] text-[#757575] font-[800]">
                        Platform
                      </h4>
                      <p className="text-[#999] text-sm">{project.platform}</p>
                    </div>

                    <div className="md:col-span-3 space-y-4">
                      <h4 className="font-[Manrope] text-[0.65rem] uppercase tracking-[0.3em] text-[#757575] font-[800]">
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="text-[0.6rem] px-2.5 py-1 rounded-full border border-white/10 text-neutral-400 font-[Inter] uppercase tracking-wider"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </section>

        {/* ── Stats Bar ── */}
        <section className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          <StatCard value="6+" label="Projects Delivered" />
          <StatCard value="5+" label="Years Experience" />
          <StatCard value="80" label="Largest Team Led" />
          <StatCard value="935" label="TOEIC Score" />
        </section>

        {/* ── CTA ── */}
        <section className="mt-20 py-28 bg-black border border-white/5 rounded-2xl overflow-hidden relative group">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,82,255,0.06)_0%,_transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          <div className="relative z-10 text-center space-y-10 px-8">
            <h2 className="text-4xl md:text-7xl font-[Manrope] font-[800] tracking-[-0.06em] text-white">
              Interested in{' '}
              <span className="text-[#0052FF] italic">collaborating</span>?
            </h2>
            <div className="pt-6">
              <a
                href="mailto:ttducmanh.1812@gmail.com"
                className="inline-flex items-center gap-4 text-white font-[Manrope] font-bold uppercase tracking-[0.2em] text-sm group/btn"
              >
                <span className="border-b-2 border-[#0052FF] pb-1 group-hover/btn:px-4 transition-all duration-300">
                  Reach out
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

function StatCard({ value, label }) {
  return (
    <div className="bg-[#111] rounded-2xl p-8 border border-white/5 text-center">
      <p className="text-3xl md:text-4xl font-[Manrope] font-[800] text-white tracking-tight">
        {value}
      </p>
      <p className="text-[#757575] text-xs uppercase tracking-widest mt-2 font-[Inter]">
        {label}
      </p>
    </div>
  )
}
