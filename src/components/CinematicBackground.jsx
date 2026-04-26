export default function CinematicBackground() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0,
        background: '#040408',
      }}
    >
      {/* Orb 1 — deep violet, upper-left area */}
      <div
        className="cinema-orb-1"
        style={{
          position: 'absolute',
          top: '-10%',
          left: '-5%',
          width: '55%',
          height: '70%',
          background: 'radial-gradient(ellipse at center, rgba(88, 28, 220, 0.55) 0%, rgba(60, 10, 160, 0.25) 45%, transparent 75%)',
          filter: 'blur(64px)',
        }}
      />

      {/* Orb 2 — electric blue, right side */}
      <div
        className="cinema-orb-2"
        style={{
          position: 'absolute',
          top: '20%',
          right: '-10%',
          width: '50%',
          height: '65%',
          background: 'radial-gradient(ellipse at center, rgba(14, 80, 200, 0.45) 0%, rgba(10, 50, 150, 0.2) 45%, transparent 75%)',
          filter: 'blur(72px)',
        }}
      />

      {/* Orb 3 — teal accent, lower-center */}
      <div
        className="cinema-orb-3"
        style={{
          position: 'absolute',
          bottom: '-15%',
          left: '25%',
          width: '50%',
          height: '55%',
          background: 'radial-gradient(ellipse at center, rgba(0, 140, 160, 0.35) 0%, rgba(0, 100, 130, 0.15) 45%, transparent 75%)',
          filter: 'blur(80px)',
        }}
      />

      {/* Lens-flare sweep */}
      <div
        className="cinema-sweep"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '45%',
          height: '100%',
          background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.022) 40%, rgba(255,255,255,0.038) 50%, rgba(255,255,255,0.022) 60%, transparent 100%)',
        }}
      />

      {/* Film grain overlay */}
      <div
        className="cinema-grain"
        style={{
          position: 'absolute',
          inset: '-20%',
          opacity: 0.045,
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }}
      />
    </div>
  )
}
