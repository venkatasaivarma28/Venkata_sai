'use client'

import { SiGithub, SiLinkedin } from 'react-icons/si';
import { getImagePath } from '@/utils/imagePath';
import { useLanguage } from '@/app/components/providers/LanguageProvider'

export default function Hero() {
  const { t } = useLanguage()
  
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/srinikhil0',
      icon: SiGithub
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/sri-nikhil-reddy/',
      icon: SiLinkedin
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden bg-gradient-to-b from-gradient-start to-gradient-end">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-gradient-to-r from-pink-500 to-orange-500 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-tr from-background/90 via-background/50 to-transparent backdrop-blur-sm" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            {t('hero.greeting')}
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-foreground/80">
            {t('hero.title')}
          </p>
          <p className="text-lg md:text-xl mb-8 text-foreground/60 max-w-3xl mx-auto">
            {t('hero.description')}
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-8">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-foreground/60 hover:text-foreground transition-colors"
                aria-label={link.name}
              >
                <link.icon />
              </a>
            ))}
          </div>

          <div className="flex justify-center gap-4 flex-wrap">
            <a 
              href="#experience" 
              className="bg-foreground text-background px-6 py-3 rounded-lg hover:scale-105 hover:shadow-lg transition-all"
            >
              View Experience
            </a>
            <a 
              href="#projects" 
              className="border border-foreground px-6 py-3 rounded-lg hover:bg-foreground hover:text-background hover:scale-105 hover:shadow-lg transition-all"
            >
              View Projects
            </a>
            <a 
              href={getImagePath('/Sri_Nikhil_Reddy_Gudibandi_Resume.pdf')}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-foreground text-background px-6 py-3 rounded-lg hover:scale-105 hover:shadow-lg transition-all flex items-center gap-2"
            >
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              View Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}