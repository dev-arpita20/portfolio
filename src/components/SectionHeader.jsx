import { motion } from 'framer-motion'

export default function SectionHeader({ eyebrow, title, subtitle, inView }) {
  return (
    <div className="text-center mb-16">
      <motion.span
        className="font-mono text-xs tracking-[0.4em] uppercase mb-4 block"
        style={{ color: 'var(--accent-1)' }}
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        {eyebrow}
      </motion.span>

      <motion.h2
        className="font-display font-bold text-4xl sm:text-5xl text-primary mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          className="text-secondary max-w-xl mx-auto text-base leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
      )}

      {/* Decorative line */}
      <motion.div
        className="flex items-center justify-center gap-2 mt-6"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="h-px w-12 opacity-30" style={{ background: 'var(--accent-1)' }} />
        <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent-2)' }} />
        <div className="h-px w-12 opacity-30" style={{ background: 'var(--accent-1)' }} />
      </motion.div>
    </div>
  )
}
