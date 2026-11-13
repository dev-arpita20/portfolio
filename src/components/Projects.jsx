import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub, FiCheckCircle } from 'react-icons/fi'
import { useInView } from '../hooks/useInView'
import SectionHeader from './SectionHeader'
import { API_URL } from '../config/api'
import { fallbackProjects } from '../data/projects'

export default function Projects() {
  const [ref, inView] = useInView()
  const [projects, setProjects] = useState(fallbackProjects)

  useEffect(() => {
    const ctrl = new AbortController()
    fetch(`${API_URL}/api/projects`, { signal: ctrl.signal })
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((data) => Array.isArray(data) && data.length && setProjects(data))
      .catch(() => {}) // keep fallback data
    return () => ctrl.abort()
  }, [])

  return (
    <section id="projects" className="py-28 px-6 relative overflow-hidden" ref={ref}>
      <div
        className="absolute right-0 bottom-0 w-[500px] h-[500px] rounded-full opacity-[0.06] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #22d3ee, transparent)' }}
      />
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          eyebrow="What I've Built"
          title="Featured Project"
          subtitle="A fully front-end project that blends data analytics with clean dashboard design."
          inView={inView}
        />

        <div className="space-y-8">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              className="group glass gradient-border rounded-3xl overflow-hidden grid md:grid-cols-5"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
            >
              <div
                className="relative md:col-span-2 h-52 md:h-auto flex items-center justify-center overflow-hidden"
                style={{ background: `linear-gradient(135deg, ${p.accent}33, ${p.accent}0d)` }}
              >
                <div
                  className="absolute inset-0 opacity-[0.07]"
                  style={{ backgroundImage: `radial-gradient(${p.accent} 1px, transparent 1px)`, backgroundSize: '24px 24px' }}
                />
                <span className="relative text-7xl select-none transition-transform duration-500 group-hover:scale-125 group-hover:-rotate-6">
                  {p.icon}
                </span>
                <span
                  className="absolute top-4 left-4 font-mono text-xs font-bold px-3 py-1 rounded-full"
                  style={{ background: `${p.accent}20`, color: p.accent, border: `1px solid ${p.accent}30` }}
                >
                  FRONTEND · DATA ANALYTICS
                </span>
              </div>

              <div className="md:col-span-3 p-6 sm:p-8">
                <h3 className="font-display font-bold text-2xl text-primary mb-3">
                  <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:gradient-text transition-all">
                    {p.title}
                  </a>
                </h3>
                <p className="text-secondary text-sm leading-relaxed mb-4">{p.description}</p>

                {p.highlights?.length > 0 && (
                  <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-2 mb-5">
                    {p.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-xs text-secondary">
                        <FiCheckCircle size={13} className="mt-0.5 flex-shrink-0" style={{ color: p.accent }} />
                        {h}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-xs px-2.5 py-1 rounded-lg"
                      style={{ background: `${p.accent}15`, color: p.accent, border: `1px solid ${p.accent}25` }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs font-medium px-5 py-2.5 rounded-full text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    style={{ background: `linear-gradient(135deg, ${p.accent}, ${p.accent}cc)` }}
                  >
                    <FiExternalLink size={13} /> Live Demo
                  </a>
                  <a
                    href={p.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs font-medium px-5 py-2.5 rounded-full glass text-secondary hover:text-primary transition-all duration-300 hover:scale-105"
                  >
                    <FiGithub size={13} /> GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
