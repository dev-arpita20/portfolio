import { useState } from 'react'
import { motion } from 'framer-motion'
import { site } from '../config/site'
import { FiBriefcase, FiBook, FiCode } from 'react-icons/fi'
import { useInView } from '../hooks/useInView'
import SectionHeader from './SectionHeader'

const cards = [
  {
    icon: FiBriefcase,
    title: 'Experience',
    value: 'Intern',
    description: 'Social Media Marketing Intern at Executioners (Nov 2025 – Feb 2026)',
    color: '#a78bfa',
  },
  {
    icon: FiBook,
    title: 'Education',
    value: '3rd Year',
    description: 'BCA at Presidency College, Bengaluru · SGPA 9.1 / 9.0',
    color: '#e879f9',
  },
  {
    icon: FiCode,
    title: 'Technologies',
    value: '9 Skills',
    description: 'React, JavaScript, Power BI, Excel, SQL, Python & more',
    color: '#22d3ee',
  },
]

const journey = [
  { type: 'Experience', title: 'Social Media Marketing Intern', org: 'Executioners · Patna, Bihar', period: 'Nov 2025 – Feb 2026',
    points: ['Designed and edited videos, reels and visual content using CapCut and Canva.', 'Contributed creative ideas and helped plan visual and posting strategy.', 'Handled content writing and scripting for cohesive, on-brand storytelling.'] },
]

function ProfilePhoto() {
  const [ok, setOk] = useState(true)
  if (ok)
    return <img src={site.photo} alt="Arpita Gupta" onError={() => setOk(false)} className="w-72 h-80 object-cover rounded-3xl" />
  return (
    <div className="text-center">
      <div className="w-28 h-28 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl font-display font-bold text-white"
        style={{ background: 'linear-gradient(135deg, var(--accent-1), var(--accent-2))' }}>AG</div>
      <p className="font-mono text-xs tracking-widest text-secondary">ARPITA GUPTA</p>
      <p className="font-mono text-xs text-secondary opacity-60">Frontend &amp; Data Analytics</p>
    </div>
  )
}

export default function About() {
  const [ref, inView] = useInView()

  return (
    <section id="about" className="py-28 px-6 relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full opacity-[0.06] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #a78bfa, transparent)' }}
      />

      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Who I Am"
          title="About Me"
          subtitle="Frontend developer with a flair for data analytics and clean visual storytelling."
          inView={inView}
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile image placeholder */}
          <motion.div
            className="flex justify-center lg:justify-start"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative">
              {/* Decorative ring */}
              <div
                className="absolute -inset-4 rounded-3xl opacity-30 blur-sm"
                style={{ background: 'linear-gradient(135deg, var(--accent-1), var(--accent-2))' }}
              />
              <div className="relative gradient-border rounded-3xl overflow-hidden">
                <div
                  className="w-72 h-80 flex items-center justify-center rounded-3xl"
                  style={{ background: 'linear-gradient(135deg, rgba(167,139,250,0.15), rgba(232,121,249,0.15))' }}
                >
                  <ProfilePhoto />
                </div>
              </div>
              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-4 -right-4 glass rounded-2xl px-4 py-2"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span className="font-mono text-xs gradient-text font-medium">✦ Open to Work</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Text content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-primary mb-5">
                I turn ideas into{' '}
                <span className="gradient-text">beautiful interfaces</span>
              </h3>
              <p className="text-secondary leading-relaxed mb-4">
                I'm a 3rd year BCA student at Presidency College, Bengaluru, with a growing focus on frontend
                development and data analytics. I enjoy blending analytical thinking with visual storytelling —
                building responsive interfaces, dashboards and reports that communicate clearly.
              </p>
              <p className="text-secondary leading-relaxed mb-8">
                Alongside coding, I've created reels, graphics and social content with Canva and CapCut as a Social
                Media Marketing Intern, and I'm building skills in Power BI and data visualisation. Known for a
                strong work ethic, clear communication and an eye for clean, purposeful design.
              </p>

              {/* Info row */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  ['Location', 'Bengaluru, India'],
                  ['Education', 'BCA — 3rd Year'],
                  ['Languages', 'JS, Python, SQL, PHP'],
                  ['Focus', 'Frontend & Data Analytics'],
                ].map(([label, value]) => (
                  <div key={label} className="glass rounded-xl p-3">
                    <p className="font-mono text-xs text-secondary mb-1">{label}</p>
                    <p className="text-primary text-sm font-medium">{value}</p>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 font-body font-medium text-sm px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 text-white"
                style={{ background: 'linear-gradient(135deg, var(--accent-1), var(--accent-2))' }}
              >
                Let's work together →
              </a>
            </motion.div>
          </div>
        </div>

        {/* Stat cards */}
        <div className="grid sm:grid-cols-3 gap-6 mt-20">
          {cards.map((card, i) => {
            const Icon = card.icon
            return (
              <motion.div
                key={card.title}
                className="glass gradient-border rounded-2xl p-6 hover:scale-105 transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${card.color}20` }}
                >
                  <Icon size={20} style={{ color: card.color }} />
                </div>
                <div className="font-display font-bold text-3xl text-primary mb-1">{card.value}</div>
                <div className="text-sm font-medium text-primary mb-1">{card.title}</div>
                <div className="text-xs text-secondary leading-relaxed">{card.description}</div>
              </motion.div>
            )
          })}
        </div>
        {/* Resume highlights */}
        <div className="mt-6">
          <motion.div
            className="glass gradient-border rounded-2xl p-6 sm:p-8"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <h4 className="font-display font-bold text-xl text-primary mb-6">Experience</h4>
            <div className="space-y-6 border-l pl-6" style={{ borderColor: 'var(--border)' }}>
              {journey.map((j) => (
                <div key={j.title} className="relative">
                  <span className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full" style={{ background: 'var(--accent-2)' }} />
                  <p className="font-mono text-xs mb-1" style={{ color: 'var(--accent-1)' }}>{j.period} · {j.type}</p>
                  <p className="text-primary font-medium text-sm">{j.title}</p>
                  <p className="text-secondary text-xs mb-2">{j.org}</p>
                  <ul className="space-y-1">
                    {j.points.map((p) => (
                      <li key={p} className="text-secondary text-xs leading-relaxed">• {p}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
