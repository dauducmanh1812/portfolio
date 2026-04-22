import { personalInfo } from '../data'

const socialLinks = [
  { label: 'GitHub', href: personalInfo.social.github },
  { label: 'LinkedIn', href: personalInfo.social.linkedin },
  { label: 'Facebook', href: personalInfo.social.facebook },
]

export default function Footer() {
  return (
    <footer className="bg-white py-14 px-6 md:px-8 border-t border-amber-200/30">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-wrap justify-center gap-8 font-[Inter] text-[0.8rem] font-medium">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              className="text-amber-700 hover:text-amber-900 transition-colors duration-300"
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="text-amber-800/60 font-[Inter] text-[0.75rem] tracking-wide font-medium text-center">
          © {new Date().getFullYear()} Đỗ Đức Mạnh
        </div>
      </div>
    </footer>
  )
}
