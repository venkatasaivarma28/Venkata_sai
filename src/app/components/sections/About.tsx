'use client'

import Image from 'next/image'
import { getImagePath } from '@/utils/imagePath'
import { useLanguage } from '@/app/components/providers/LanguageProvider'

export default function About() {
  const { t } = useLanguage()

  const quickFacts = [
    { key: 'about.facts.graduate' },
    { key: 'about.facts.fullstack' },
    { key: 'about.facts.software' },
    { key: 'about.facts.security' },
    { key: 'about.facts.learner' },
    { key: 'about.facts.team' },
  ]

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-foreground to-foreground/70 text-transparent bg-clip-text">
          {t('about.title')}
        </h2>
        <div className="grid md:grid-cols-[2fr,1fr] gap-12 items-start">
          <div className="space-y-6 order-2 md:order-1">
            <p className="text-lg text-foreground/80">
              {t('about.p1')}
            </p>
            <p className="text-lg text-foreground/80">
              {t('about.p2')}
            </p>
            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-4">{t('about.quickFacts')}</h3>
              <ul className="grid grid-cols-2 gap-3">
                {quickFacts.map((fact, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-foreground/70 rounded-full" />
                    {t(fact.key)}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="relative order-1 md:order-2">
            <div className="aspect-square relative rounded-2xl overflow-hidden border-2 border-foreground/10">
              <Image
                src={getImagePath('/profile.jpg')}
                alt="Sri Gudibandi"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
              />
            </div>
            <div className="absolute -z-10 -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-2xl rounded-3xl" />
          </div>
        </div>
      </div>
    </section>
  )
}