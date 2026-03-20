import { personalInfo } from '../data'

const socialLinks = [
  { label: 'GitHub', href: personalInfo.social.github },
  { label: 'LinkedIn', href: personalInfo.social.linkedin },
  { label: 'Facebook', href: personalInfo.social.facebook },
]

export default function Footer() {
  return (
    <footer className="bg-black py-14 px-6 md:px-8 border-t border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 max-w-7xl mx-auto w-full">
        <div className="text-xl font-[800] text-white font-[Manrope] uppercase tracking-[-0.05em]">
          MẠNH.DEV
        </div>
        <div className="flex flex-wrap justify-center gap-8 font-[Inter] text-[0.75rem] uppercase tracking-[0.2em] font-medium">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              className="text-neutral-500 hover:text-white transition-colors duration-300"
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="text-neutral-600 font-[Inter] text-[0.7rem] uppercase tracking-widest font-medium text-center">
          © {new Date().getFullYear()} ĐỖ ĐỨC MẠNH. KEEP BUILDING.
        </div>
      </div>
    </footer>
  )
}
