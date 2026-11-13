import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaPhp, FaDatabase, FaChartBar, FaFileExcel } from 'react-icons/fa'
import { useInView } from '../hooks/useInView'
import SectionHeader from './SectionHeader'

const skills = [
  { name: 'HTML5', icon: FaHtml5, color: '#e34c26', level: 95, category: 'Frontend' },
  { name: 'CSS', icon: FaCss3Alt, color: '#2f6bff', level: 90, category: 'Frontend' },
  { name: 'JavaScript', icon: FaJs, color: '#f7df1e', level: 85, category: 'Frontend' },
  { name: 'React', icon: FaReact, color: '#61dbfb', level: 80, category: 'Frontend' },
  { name: 'Power BI', icon: FaChartBar, color: '#f2c811', level: 70, category: 'Data Analytics' },
  { name: 'Excel', icon: FaFileExcel, color: '#21a366', level: 82, category: 'Data Analytics' },
  { name: 'SQL', icon: FaDatabase, color: '#f29111', level: 78, category: 'Data Analytics' },
  { name: 'Python', icon: FaPython, color: '#facc15', level: 75, category: 'Programming' },
  { name: 'PHP', icon: FaPhp, color: '#8993be', level: 65, category: 'Programming' },
]

const categories = ['All', 'Frontend', 'Data Analytics', 'Programming']

export default function Skills() {
  const [ref, inView] = useInView()
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? skills : skills.filter(s => s.category === active)

  return (
    <section id="skills" className="py-28 px-6 relative overflow-hidden" ref={ref}>
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full opacity-[0.06] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #e879f9, transparent)' }}
      />

      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="What I Work With"
          title="My Skills"
          subtitle="Technologies and tools I use to bring ideas to life."
          inView={inView}
        />

        {/* Filter tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
        >
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-1.5 rounded-full font-mono text-xs tracking-wider transition-all duration-300 ${
                active === cat
                  ? 'text-white scale-105'
                  : 'glass text-secondary hover:text-primary'
              }`}
              style={active === cat ? { background: 'linear-gradient(135deg, var(--accent-1), var(--accent-2))' } : {}}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Skill cards grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {filtered.map((skill, i) => {
            const Icon = skill.icon
            return (
              <motion.div
                key={skill.name}
                className="glass gradient-border rounded-2xl p-5 group cursor-default hover:scale-105 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
                layout
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${skill.color}18` }}
                  >
                    <Icon size={18} style={{ color: skill.color }} />
                  </div>
                  <span className="font-body font-medium text-sm text-primary leading-tight">{skill.name}</span>
                </div>

                {/* Progress bar */}
                <div className="space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-xs text-secondary">{skill.category}</span>
                    <span className="font-mono text-xs" style={{ color: skill.color }}>{skill.level}%</span>
                  </div>
                  <div
                    className="h-1 rounded-full overflow-hidden"
                    style={{ background: 'var(--border)' }}
                  >
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: `linear-gradient(90deg, ${skill.color}80, ${skill.color})` }}
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: 0.5 + i * 0.05, ease: 'easeOut' }}
                    />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom highlight */}
        <motion.div
          className="mt-16 glass gradient-border rounded-2xl p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          <p className="text-secondary text-sm leading-relaxed max-w-xl mx-auto">
            Always learning, always growing — currently deepening my skills in{' '}
            <span className="gradient-text font-medium">Power BI</span>,{' '}
            <span className="gradient-text font-medium">data visualisation</span> and{' '}
            <span className="gradient-text font-medium">React</span> to turn data into clear, interactive dashboards.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
