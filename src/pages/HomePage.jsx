import { useNavigate } from 'react-router-dom'
import { personalInfo } from '../data'

export default function HomePage() {
  const navigate = useNavigate()

  return (
    <div className="bg-white">
      {/* ── Hero ── */}
      <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-amber-50 via-white to-orange-50">
        {/* Soft gradient accent */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-amber-200/20 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-gradient-to-r from-orange-100/20 to-transparent rounded-full blur-3xl" />
        </div>

        <section className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-8 pt-32 pb-24">
          <div className="flex flex-col items-center text-center space-y-10">
            <div className="inline-flex items-center gap-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.05s', animationFillMode: 'forwards' }}>
              <span className="w-12 h-[1px] bg-amber-300" />
              <span className="font-[Inter] text-[0.75rem] font-semibold tracking-wider text-amber-800">
                Hi, I'm Mạnh
              </span>
              <span className="w-12 h-[1px] bg-amber-300" />
            </div>

            <h1 className="font-[Manrope] font-bold text-[11vw] md:text-[8vw] leading-tight tracking-tight text-amber-950 text-glow opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
              Building digital<br />
              <span className="italic text-amber-700">experiences</span><br />
              that matter
            </h1>

            <div className="max-w-2xl space-y-10 flex flex-col items-center opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              <p className="text-amber-900/70 text-lg md:text-xl leading-relaxed font-[Inter] font-normal max-w-xl">
                {personalInfo.objective.split('.').slice(0, 2).join('.') + '.'}
              </p>
              <div className="flex flex-col sm:flex-row gap-6 items-center">
                <button
                  onClick={() => navigate('/about')}
                  className="bg-amber-800 text-white px-10 py-4 rounded-xl font-[Manrope] font-semibold text-base shadow-lg hover:shadow-xl hover:bg-amber-900 active:scale-95 transition-all duration-300 relative overflow-hidden group"
                >
                  <span className="relative z-10">Learn About Me</span>
                </button>
                <a
                  href="mailto:ttducmanh.1812@gmail.com"
                  className="flex items-center gap-2 font-[Manrope] font-semibold text-amber-800 hover:text-amber-950 transition-colors group"
                >
                  Let's connect
                  <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-40">
          <span className="font-[Inter] text-xs font-semibold tracking-wide text-amber-700">
            Scroll to explore
          </span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-amber-400 to-transparent" />
        </div>
      </main>

      {/* ── CTA ── */}
      <section className="mx-6 md:mx-8 mb-20 py-28 bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200/50 rounded-3xl overflow-hidden relative group max-w-7xl lg:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-t from-amber-100/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        <div className="relative z-10 text-center space-y-10 px-8">
          <h2 className="text-4xl md:text-6xl font-[Manrope] font-bold tracking-tight text-amber-950">
            Let's create something<br />
            <span className="italic text-amber-700">meaningful</span> together
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
    </div>
  )
}
