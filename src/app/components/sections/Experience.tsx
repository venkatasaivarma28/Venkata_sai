'use client'

import { useLanguage } from '@/app/components/providers/LanguageProvider'

interface Experience {
  titleKey: string;
  company: string;
  period: string;
  descriptionKey: string;
  technologies: string[];
}

export default function Experience() {
  const { t } = useLanguage()

  const experiences: Experience[] = [
    {
      titleKey: "experience.job1.title",
      company: "Boston University, MA",
      period: "01/2025 - 03/2025",
      descriptionKey: "experience.job1.description",
      technologies: ["Software Engineering", "Testing", "Security Management", "Agile"]
    },
    {
      titleKey: "experience.job2.title",
      company: "Stiisk LLC, MA",
      period: "07/2024 - 12/2024",
      descriptionKey: "experience.job2.description",
      technologies: ["Three.js", "Firebase", "Google Cloud Platform", "AI Agents", "Security"]
    },
    {
      titleKey: "experience.job3.title",
      company: "Boston University, MA",
      period: "09/2023 - 12/2023 | 09/2024 - 12/2024",
      descriptionKey: "experience.job3.description",
      technologies: ["Software Engineering", "Testing", "Security Management", "Agile"]
    },
    {
      titleKey: "experience.job4.title",
      company: "Capgemini, India",
      period: "01/2021 - 07/2022",
      descriptionKey: "experience.job4.description",
      technologies: ["Python", "MySQL", "Shell Scripting", "Informatica", "ETL", "Data Warehousing"]
    },
    {
      titleKey: "experience.job5.title",
      company: "Global Child Prodigy Awards, India",
      period: "01/2017 - 12/2020",
      descriptionKey: "experience.job5.description",
      technologies: ["React", "Node.js", "Firebase", "TypeScript"]
    },
    // Add more experiences as needed
  ]

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-foreground to-foreground/70 text-transparent bg-clip-text">
          {t('experience.title')}
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-2 border-foreground/20 pl-6 relative">
              <div className="absolute w-3 h-3 bg-foreground rounded-full -left-[7px] top-2" />
              <h3 className="text-xl font-semibold">{t(exp.titleKey)}</h3>
              <p className="text-foreground/60 mb-2">
                {exp.company} • {exp.period.includes('Present') ? t('experience.present') : exp.period}
              </p>
              <p className="mb-3">{t(exp.descriptionKey)}</p>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-foreground/5 text-foreground/80 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 