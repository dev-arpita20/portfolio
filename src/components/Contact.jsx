import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiSend } from 'react-icons/fi'
import { contactLinks as socials } from '../config/site'
import { API_URL } from '../config/api'
import { useInView } from '../hooks/useInView'
import SectionHeader from './SectionHeader'


export default function Contact() {
  const [ref, inView] = useInView()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)

  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    setError('')
    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(data.message || "Messages can't be delivered from this preview yet — please reach out on LinkedIn.")
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      setStatus('error')
      setError(err.message || 'Could not send your message. Please try again.')
    }
  }

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const inputClass = `
    w-full glass rounded-xl px-4 py-3 font-body text-sm text-primary placeholder-secondary
    outline-none border-transparent focus:border-violet-400/50 border transition-all duration-300
    bg-transparent
  `

  return (
    <section id="contact" className="py-28 px-6 relative overflow-hidden" ref={ref}>
      <div
        className="absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[300px] opacity-[0.08] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #a78bfa, transparent)' }}
      />

      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Get In Touch"
          title="Contact Me"
          subtitle="Have a project in mind or want to collaborate? I'd love to hear from you."
          inView={inView}
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="font-display font-bold text-2xl text-primary mb-4">
              Let's build something{' '}
              <span className="gradient-text">amazing together</span>
            </h3>
            <p className="text-secondary text-sm leading-relaxed mb-8">
              I'm currently open to frontend developer and data analytics roles, freelance projects, and exciting collaborations.
              Whether you have a startup idea or an established product needing a UI makeover — let's talk!
            </p>

            <div className="space-y-4">
              {socials.map((s, i) => {
                const Icon = s.icon
                return (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 glass rounded-2xl p-4 group hover:scale-[1.02] transition-all duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: 'linear-gradient(135deg, rgba(167,139,250,0.2), rgba(232,121,249,0.2))' }}
                    >
                      <Icon size={16} style={{ color: 'var(--accent-1)' }} />
                    </div>
                    <div>
                      <p className="font-mono text-xs text-secondary">{s.label}</p>
                      <p className="text-primary text-sm font-medium">{s.value}</p>
                    </div>
                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-secondary">→</div>
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="glass gradient-border rounded-3xl p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="font-mono text-xs text-secondary block mb-2 tracking-wider">NAME</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="font-mono text-xs text-secondary block mb-2 tracking-wider">EMAIL</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="font-mono text-xs text-secondary block mb-2 tracking-wider">MESSAGE</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell me about your project..."
                    required
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending' || status === 'sent'}
                  className="w-full py-3.5 rounded-full font-body font-medium text-sm text-white flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                  style={{ background: 'linear-gradient(135deg, var(--accent-1), var(--accent-2))' }}
                >
                  {status === 'sending' ? (
                    <>
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      >
                        ◌
                      </motion.span>
                      Sending...
                    </>
                  ) : status === 'sent' ? (
                    <>✓ Message Sent!</>
                  ) : (
                    <>
                      <FiSend size={14} />
                      Send Message
                    </>
                  )}
                </button>

                {status === 'sent' && (
                  <motion.p
                    className="text-center text-sm font-mono"
                    style={{ color: 'var(--accent-3)' }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    Thanks! I'll get back to you within 24 hours. 🎉
                  </motion.p>
                )}
                {status === 'error' && (
                  <p className="text-center text-sm font-mono text-red-400">{error}</p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
