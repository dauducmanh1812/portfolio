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
      }}
    >
      {/* Layer 1: Base radial gradient — very dark navy-to-black */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 20% 60%, #0d0e1a 0%, #060608 55%, #000000 100%)',
        }}
      />

      {/* Layer 2: Slow aurora orb — rotates 360° over 40s */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '140%',
          height: '140%',
          marginTop: '-70%',
          marginLeft: '-70%',
          background: 'conic-gradient(from 180deg at 40% 60%, #0a0e2a 0deg, #0d1b3e 80deg, #060612 160deg, #0a0d1f 240deg, #050508 320deg, #0a0e2a 360deg)',
          filter: 'blur(80px)',
          opacity: 0.7,
          animation: 'aurora-spin 40s linear infinite',
        }}
      />

      {/* Layer 3: Lens-flare sweep — horizontal shimmer */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '50%',
          height: '100%',
          background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.018) 40%, rgba(255,255,255,0.032) 50%, rgba(255,255,255,0.018) 60%, transparent 100%)',
          animation: 'lens-sweep 10s ease-in-out infinite',
        }}
      />

      {/* Layer 4: Film grain — SVG feTurbulence tiled texture */}
      <div
        style={{
          position: 'absolute',
          inset: '-20%',
          opacity: 0.04,
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
          animation: 'hero-grain-shift 8s steps(1) infinite',
        }}
      />
    </div>
  )
}
