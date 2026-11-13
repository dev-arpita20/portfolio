import { motion } from 'framer-motion'
import { FiArrowDown } from 'react-icons/fi'
import { socials } from '../config/site'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full animate-blob opacity-[0.15]"
          style={{ background: 'radial-gradient(circle, #a78bfa 0%, transparent 70%)' }}
        />
        <div
          className="absolute top-[20%] right-[-15%] w-[500px] h-[500px] rounded-full animate-blob opacity-[0.12]"
          style={{ background: 'radial-gradient(circle, #e879f9 0%, transparent 70%)', animationDelay: '2s' }}
        />
        <div
          className="absolute bottom-[-10%] left-[30%] w-[400px] h-[400px] rounded-full animate-blob opacity-[0.10]"
          style={{ background: 'radial-gradient(circle, #22d3ee 0%, transparent 70%)', animationDelay: '4s' }}
        />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(var(--text-primary) 1px, transparent 1px),
              linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-24 text-center relative z-10">
        {/* Badge */}
        <motion.div {...fadeUp(0.1)} className="inline-flex items-center gap-2 mb-8">
          <div className="glass rounded-full px-4 py-1.5 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-xs text-secondary tracking-wider">OPEN TO WORK</span>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          {...fadeUp(0.2)}
          className="font-display font-black text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-none mb-4"
        >
          <span className="text-primary block">Arpita</span>
          <span className="gradient-text block">Gupta</span>
        </motion.h1>

        {/* Title */}
        <motion.div {...fadeUp(0.35)} className="mb-6">
          <span
            className="font-mono text-base sm:text-lg tracking-[0.3em] uppercase font-medium"
            style={{ color: 'var(--accent-1)' }}
          >
            Frontend Developer · Data Analytics
          </span>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          {...fadeUp(0.45)}
          className="text-secondary text-lg sm:text-xl max-w-xl mx-auto leading-relaxed mb-10"
        >
          Building modern, responsive web experiences and turning data into clear, insightful dashboards.
        </motion.p>

        {/* CTAs */}
        <motion.div {...fadeUp(0.55)} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-body font-medium text-sm overflow-hidden transition-all duration-300 hover:scale-105"
            style={{ background: 'linear-gradient(135deg, var(--accent-1), var(--accent-2))' }}
          >
            <span className="relative z-10 text-white">View Projects</span>
            <motion.span
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: 'linear-gradient(135deg, var(--accent-2), var(--accent-3))' }}
            />
          </a>

          <a
            href="#contact"
            className="gradient-border glass inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-body font-medium text-sm text-primary hover:scale-105 transition-all duration-300"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Social icons */}
        <motion.div {...fadeUp(0.65)} className="flex items-center justify-center gap-5">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="glass rounded-full w-11 h-11 flex items-center justify-center text-secondary hover:text-primary hover:scale-110 transition-all duration-300"
              style={{ '--hover-border': 'var(--accent-1)' }}
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.a
          href="#about"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-secondary hover:text-primary transition-colors duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{ opacity: { delay: 1.5, duration: 0.5 }, y: { repeat: Infinity, duration: 2, ease: 'easeInOut' } }}
        >
          <span className="font-mono text-xs tracking-widest">SCROLL</span>
          <FiArrowDown size={16} />
        </motion.a>
      </div>
    </section>
  )
}
