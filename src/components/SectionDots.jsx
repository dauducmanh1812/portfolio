const SECTION_COUNT = 5

export default function SectionDots({ activeSection, snapContainerRef }) {
  const scrollTo = (idx) => {
    snapContainerRef.current?.scrollTo({
      top: idx * window.innerHeight,
      behavior: 'smooth',
    })
  }

  const isDark = activeSection === 0 || activeSection === 3 || activeSection === 4

  return (
    <div className="fixed right-5 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-3">
      {Array.from({ length: SECTION_COUNT }, (_, i) => (
        <button
          key={i}
          onClick={() => scrollTo(i)}
          aria-label={`Go to section ${i + 1}`}
          className="w-1.5 h-1.5 transition-all duration-300"
          style={{
            background: isDark
              ? i === activeSection ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.2)'
              : i === activeSection ? 'rgba(26,28,28,0.75)' : 'rgba(26,28,28,0.2)',
            transform: i === activeSection ? 'scale(1.4)' : 'scale(1)',
          }}
        />
      ))}
    </div>
  )
}
