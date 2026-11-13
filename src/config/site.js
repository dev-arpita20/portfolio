import { FiGithub, FiLinkedin, FiMail, FiMapPin } from 'react-icons/fi'

export const site = {
  name: 'Arpita Gupta',
  github: 'https://github.com/dev-arpita20',
  linkedin: 'https://www.linkedin.com/in/arpita-gupta-91b185411/',
  email: 'guptaarpita419@gmail.com',
  photo: `${import.meta.env.BASE_URL}profile.jpg`, // put your photo at client/public/profile.jpg
}

export const socials = [
  { icon: FiGithub, href: site.github, label: 'GitHub' },
  { icon: FiLinkedin, href: site.linkedin, label: 'LinkedIn' },
  site.email && { icon: FiMail, href: `mailto:${site.email}`, label: 'Email' },
].filter(Boolean)

export const contactLinks = [
  { icon: FiGithub, label: 'GitHub', href: site.github, value: 'github.com/dev-arpita20' },
  { icon: FiLinkedin, label: 'LinkedIn', href: site.linkedin, value: 'linkedin.com/in/arpita-gupta' },
  site.email && { icon: FiMail, label: 'Email', href: `mailto:${site.email}`, value: site.email },
  { icon: FiMapPin, label: 'Location', href: '#', value: 'Bengaluru, India 🇮🇳' },
].filter(Boolean)
