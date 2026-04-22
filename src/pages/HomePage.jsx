import { useNavigate } from 'react-router-dom'
import { personalInfo } from '../data'

export default function HomePage() {
  const navigate = useNavigate()

  return (
    <div className="bg-surface">
      {/* ── Hero ── */}
      <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
        <section className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-8 py-26">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 flex flex-col space-y-8">
              <span className="text-[0.75rem] font-display tracking-[0.1em] uppercase text-on-surface/40">
                Đỗ Đức Mạnh
              </span>

              <h1 className="text-[clamp(2.5rem,5.5vw,3.5rem)] font-display font-bold tracking-[0.1em] uppercase leading-[0.95] text-on-surface">
                Building digital<br />
                products that<br />
                create impact
              </h1>

              <p className="text-base font-body font-light leading-[1.8] text-on-surface/70 max-w-xl">
                {personalInfo.objective.split('.').slice(0, 2).join('.') + '.'}
              </p>

              <div className="flex flex-col sm:flex-row gap-6 pt-4">
                <button
                  onClick={() => navigate('/about')}
                  className="bg-cta-metallic text-on-primary font-display text-xs font-medium tracking-[0.06em] uppercase px-8 py-4 transition-opacity duration-[400ms] hover:opacity-90 active:opacity-95"
                >
                  Explore My Work
                </button>
                <button
                  onClick={() => window.location.href = 'mailto:ttducmanh.1812@gmail.com'}
                  className="bg-transparent text-on-surface/50 font-display text-xs tracking-[0.06em] uppercase transition-colors duration-300 hover:text-on-surface flex items-center gap-2"
                >
                  Get in touch
                  <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="square" strokeLinejoin="square" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="md:col-span-5 hidden md:block">
              {/* Placeholder for feature visual */}
              <div className="aspect-square bg-surface-clo" />
            </div>
          </div>
        </section>
      </main>

      {/* ── CTA Section ── */}
      <section className="bg-surface-clo py-26 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5">
              <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-display font-semibold tracking-[-0.025em] leading-[1.1] text-on-surface">
                Let's work <span className="text-on-surface/40">together</span>
              </h2>
              <p className="text-base font-body font-light leading-[1.8] text-on-surface/70 mt-6">
                Interested in collaborating on something meaningful? I'd love to hear from you.
              </p>
            </div>
            <div className="md:col-span-6 md:col-start-7">
              <a
                href="mailto:ttducmanh.1812@gmail.com"
                className="inline-flex bg-cta-metallic text-on-primary font-display text-xs font-medium tracking-[0.06em] uppercase px-8 py-4 transition-opacity duration-[400ms] hover:opacity-90 active:opacity-95"
              >
                Start a Conversation
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
