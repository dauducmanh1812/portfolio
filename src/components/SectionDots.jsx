// Sections 0,1,4,5 are dark (transparent bg); 2,3 are light
const DARK_SECTIONS = new Set([0, 1, 4, 5])
const SECTION_COUNT = 6

export default function SectionDots({ activeSection, snapContainerRef }) {
  const scrollTo = (idx) => {
    snapContainerRef.current?.scrollTo({
      top: idx * window.innerHeight,
      behavior: 'smooth',
    })
  }

  const isDarkContext = DARK_SECTIONS.has(activeSection)

  return (
    <div className="fixed right-5 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-2.5">
      {Array.from({ length: SECTION_COUNT }, (_, i) => (
        <button
          key={i}
          onClick={() => scrollTo(i)}
          aria-label={`Section ${i + 1}`}
          style={{
            width: i === activeSection ? '6px' : '4px',
            height: i === activeSection ? '6px' : '4px',
            transition: 'all 0.3s ease',
            background: isDarkContext
              ? i === activeSection ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.2)'
              : i === activeSection ? 'rgba(26,28,28,0.7)'   : 'rgba(26,28,28,0.18)',
          }}
        />
      ))}
    </div>
  )
}
