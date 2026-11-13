import { motion } from 'framer-motion'

export default function LoadingScreen() {
  const letters = "ARPITA".split("")
  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center"
      style={{ background: 'var(--bg-primary)' }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/3 w-64 h-64 rounded-full opacity-20 animate-blob"
          style={{ background: 'radial-gradient(circle, #a78bfa, transparent)' }} />
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 rounded-full opacity-20 animate-blob"
          style={{ background: 'radial-gradient(circle, #e879f9, transparent)', animationDelay: '2s' }} />
      </div>

      <div className="relative flex gap-1 mb-6">
        {letters.map((l, i) => (
          <motion.span
            key={i}
            className="text-5xl font-display font-bold gradient-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5, ease: 'easeOut' }}
          >
            {l}
          </motion.span>
        ))}
      </div>

      <motion.p
        className="text-secondary font-mono text-sm tracking-widest mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        FRONTEND &amp; DATA ANALYTICS
      </motion.p>

      <motion.div
        className="w-48 h-0.5 rounded-full overflow-hidden"
        style={{ background: 'var(--border)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.div
          className="h-full rounded-full"
          style={{ background: 'linear-gradient(90deg, var(--accent-1), var(--accent-2))' }}
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ delay: 1, duration: 1.0, ease: 'easeInOut' }}
        />
      </motion.div>
    </motion.div>
  )
}
