'use client'

import { SiGithub, SiLinkedin } from 'react-icons/si'
import { useLanguage } from '@/app/components/providers/LanguageProvider'

export default function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()
  
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/srinikhil0',
      icon: SiGithub
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/sri-gudibandi/',
      icon: SiLinkedin
    }
  ]

  return (
    <footer className="bg-background py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">{t('footer.quickLinks')}</h3>
            <nav>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-foreground/70 hover:text-foreground transition-colors">
                    {t('nav.about')}
                  </a>
                </li>
                <li>
                  <a href="#experience" className="text-foreground/70 hover:text-foreground transition-colors">
                    {t('nav.experience')}
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-foreground/70 hover:text-foreground transition-colors">
                    {t('nav.projects')}
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-foreground/70 hover:text-foreground transition-colors">
                    {t('nav.skills')}
                  </a>
                </li>
                <li>
                  <a href="#certifications" className="text-foreground/70 hover:text-foreground transition-colors">
                    {t('nav.certifications')}
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">{t('footer.letsConnect')}</h3>
            <p className="text-foreground/70 mb-6">
              {t('footer.connectText')}
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-foreground/60 hover:text-foreground transition-colors"
                  aria-label={link.name}
                >
                  <link.icon />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-foreground/10 text-center text-foreground/60">
          <p>{t('footer.copyright').replace('{year}', currentYear.toString())}</p>
        </div>
      </div>
    </footer>
  )
} 