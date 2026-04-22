import { personalInfo } from '../data'

const socialLinks = [
  { label: 'GitHub', href: personalInfo.social.github },
  { label: 'LinkedIn', href: personalInfo.social.linkedin },
  { label: 'Facebook', href: personalInfo.social.facebook },
]

export default function Footer() {
  return (
    <footer className="bg-surface-clo py-14 px-6 md:px-8 border-t border-[rgba(207,196,197,0.15)]">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-wrap justify-center gap-8">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              className="text-xs font-display tracking-[0.06em] uppercase text-on-surface/50 hover:text-on-surface transition-colors duration-300"
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="text-xs font-display tracking-[0.06em] uppercase text-on-surface/30 text-center">
          © {new Date().getFullYear()} Đỗ Đức Mạnh
        </div>
      </div>
    </footer>
  )
}
