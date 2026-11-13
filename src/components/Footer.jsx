import { motion } from 'framer-motion'
import { FiHeart } from 'react-icons/fi'
import { site, socials } from '../config/site'

const links = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]


export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden py-16 px-6" style={{ borderTop: '1px solid var(--border)' }}>
      {/* Gradient fade */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ background: 'linear-gradient(0deg, var(--accent-1), transparent)' }}
      />

      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <a href="#hero" className="font-display font-bold text-2xl gradient-text block mb-3">
              AG.
            </a>
            <p className="text-secondary text-sm leading-relaxed max-w-xs">
              Building beautiful, functional web experiences with modern technologies.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-mono text-xs tracking-widest text-secondary uppercase mb-4">Navigation</p>
            <ul className="space-y-2">
              {links.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-secondary hover:text-primary text-sm transition-colors duration-200 hover:gradient-text"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-mono text-xs tracking-widest text-secondary uppercase mb-4">Connect</p>
            <div className="flex gap-3 mb-4">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="glass w-10 h-10 rounded-xl flex items-center justify-center text-secondary hover:text-primary hover:scale-110 transition-all duration-300"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
            {site.email && <p className="text-secondary text-sm">{site.email}</p>}
            <p className="text-secondary text-xs mt-1">Available for opportunities</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-8"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          <p className="text-secondary text-xs font-mono">
            © {year} Arpita Gupta. All rights reserved.
          </p>
          <p className="text-secondary text-xs flex items-center gap-1.5">
            Designed & Developed by{' '}
            <span className="gradient-text font-medium">Arpita Gupta</span>
            <FiHeart size={11} style={{ color: 'var(--accent-2)' }} />
          </p>
        </div>
      </div>
    </footer>
  )
}
