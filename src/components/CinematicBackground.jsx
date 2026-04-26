export default function CinematicBackground({ fixed = false }) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: fixed ? 'fixed' : 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: fixed ? 0 : 0,
        background: '#03030a',
      }}
    >
      {/* Orb 1 — electric violet, upper-left, fast */}
      <div
        className="cinema-orb-1"
        style={{
          position: 'absolute',
          top: '-20%',
          left: '-10%',
          width: '70%',
          height: '80%',
          background: 'radial-gradient(ellipse at center, rgba(130, 20, 255, 0.7) 0%, rgba(90, 0, 200, 0.35) 40%, transparent 72%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Orb 2 — neon blue, right side, medium */}
      <div
        className="cinema-orb-2"
        style={{
          position: 'absolute',
          top: '10%',
          right: '-15%',
          width: '65%',
          height: '75%',
          background: 'radial-gradient(ellipse at center, rgba(20, 100, 255, 0.6) 0%, rgba(10, 60, 200, 0.28) 40%, transparent 72%)',
          filter: 'blur(70px)',
        }}
      />

      {/* Orb 3 — teal/cyan, lower-left, fast */}
      <div
        className="cinema-orb-3"
        style={{
          position: 'absolute',
          bottom: '-20%',
          left: '5%',
          width: '55%',
          height: '60%',
          background: 'radial-gradient(ellipse at center, rgba(0, 200, 200, 0.5) 0%, rgba(0, 140, 170, 0.22) 40%, transparent 72%)',
          filter: 'blur(75px)',
        }}
      />

      {/* Orb 4 — magenta-pink, center-right, slow */}
      <div
        className="cinema-orb-4"
        style={{
          position: 'absolute',
          top: '40%',
          left: '35%',
          width: '50%',
          height: '55%',
          background: 'radial-gradient(ellipse at center, rgba(220, 30, 140, 0.4) 0%, rgba(180, 10, 100, 0.18) 40%, transparent 72%)',
          filter: 'blur(80px)',
        }}
      />

      {/* Lens-flare sweep — faster, brighter */}
      <div
        className="cinema-sweep"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '40%',
          height: '100%',
          background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.028) 35%, rgba(255,255,255,0.055) 50%, rgba(255,255,255,0.028) 65%, transparent 100%)',
        }}
      />

      {/* Film grain */}
      <div
        className="cinema-grain"
        style={{
          position: 'absolute',
          inset: '-20%',
          opacity: 0.05,
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }}
      />
    </div>
  )
}
