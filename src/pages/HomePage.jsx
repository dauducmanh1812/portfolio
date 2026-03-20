import { useNavigate } from 'react-router-dom'
import { personalInfo } from '../data'

export default function HomePage() {
  const navigate = useNavigate()

  return (
    <div className="bg-[#0a0a0a]">
      {/* ── Hero ── */}
      <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-white/[0.03] blur-[150px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-neutral-900/50 blur-[120px] rounded-full" />
        </div>

        <section className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-8 pt-32 pb-24">
          <div className="flex flex-col items-center text-center space-y-10">
            <div className="inline-flex items-center gap-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
              <span className="w-12 h-[1px] bg-neutral-700" />
              <span className="font-[Inter] text-[0.7rem] uppercase tracking-[0.4em] text-neutral-500">
                Full-stack Engineer · Team Leader
              </span>
              <span className="w-12 h-[1px] bg-neutral-700" />
            </div>

            <h1 className="font-[Manrope] font-[800] text-[12vw] md:text-[9vw] leading-[0.85] tracking-[-0.07em] uppercase text-white text-glow opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              KEEP<br />
              <span className="italic text-neutral-400">BUILDING</span><br />
              FORWARD
            </h1>

            <div className="max-w-2xl space-y-10 flex flex-col items-center opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
              <p className="text-[#999] text-lg md:text-xl leading-relaxed font-[Inter] font-light max-w-xl">
                {personalInfo.objective.split('.').slice(0, 2).join('.') + '.'}
              </p>
              <div className="flex flex-col sm:flex-row gap-6 items-center">
                <button
                  onClick={() => navigate('/about')}
                  className="bg-white text-black px-10 py-4 rounded-full font-[Manrope] font-[800] text-base uppercase tracking-tight shadow-[0_20px_40px_rgba(255,255,255,0.08)] hover:scale-105 active:scale-95 transition-all duration-500 relative overflow-hidden group"
                >
                  <span className="relative z-10">About Me</span>
                  <div className="absolute inset-0 bg-neutral-200 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
                <a
                  href="mailto:ttducmanh.1812@gmail.com"
                  className="flex items-center gap-3 font-[Manrope] font-bold uppercase tracking-[0.15em] text-[0.8rem] text-[#999] hover:text-white transition-colors group"
                >
                  Get In Touch
                  <span className="material-symbols-outlined text-[1.1rem] group-hover:translate-x-2 transition-transform">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-20">
          <span className="font-[Inter] text-[0.55rem] uppercase tracking-[0.5em] text-[#999]">
            Scroll
          </span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
        </div>
      </main>

      {/* ── CTA ── */}
      <section className="mx-6 md:mx-8 mb-20 py-28 bg-black border border-white/5 rounded-2xl overflow-hidden relative group max-w-7xl lg:mx-auto">
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
    </div>
  )
}
