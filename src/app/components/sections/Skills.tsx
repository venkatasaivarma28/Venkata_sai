'use client'

import { IconType } from 'react-icons'
import { 
  SiPython, SiCplusplus, SiMysql, SiJavascript, SiHtml5, 
  SiCss3, SiReact, SiNodedotjs, SiExpress, SiFirebase,
  SiGit, SiGithubactions, SiPostgresql,
  SiGooglecloud, SiRedis, SiGnubash, SiLinux, SiKalilinux,
  SiAngular,
  SiSonar,
  SiZap,
  SiWireshark
} from 'react-icons/si'
import { useLanguage } from '@/app/components/providers/LanguageProvider'

interface SkillCategory {
  name: string;
  skills: {
    name: string;
    icon: IconType;
    color: string;
  }[];
}

export default function Skills() {
  const { t } = useLanguage()
  
  const skillCategories: SkillCategory[] = [
    {
      name: t('skills.categories.languages'),
      skills: [
        { name: "Python", icon: SiPython, color: "text-yellow-600" },
        { name: "C++", icon: SiCplusplus, color: "text-blue-600" },
        { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500" },
        { name: "HTML", icon: SiHtml5, color: "text-orange-500" },
        { name: "CSS", icon: SiCss3, color: "text-blue-500" },
        { name: "Bash", icon: SiGnubash, color: "text-gray-500" },
      ]
    },
    {
      name: t('skills.categories.frameworks'),
      skills: [
        { name: "React", icon: SiReact, color: "text-cyan-400" },
        { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
        { name: "Express.js", icon: SiExpress, color: "text-gray-500" },
        { name: "Angular", icon: SiAngular, color: "text-blue-500" },
      ]
    },
    {
      name: t('skills.categories.databases'),
      skills: [
        { name: "MySQL", icon: SiMysql, color: "text-blue-500" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
        { name: "Redis", icon: SiRedis, color: "text-red-600" },
        { name: "Firebase", icon: SiFirebase, color: "text-yellow-500" },
      ]
    },
    {
      name: t('skills.categories.tools'),
      skills: [
        { name: "Linux/Unix", icon: SiLinux, color: "text-yellow-500" },
        { name: "Kali Linux", icon: SiKalilinux, color: "text-blue-600" },
        { name: "Git", icon: SiGit, color: "text-orange-600" },
        { name: "GitHub Actions", icon: SiGithubactions, color: "text-blue-500" },
        { name: "Google Cloud Platform", icon: SiGooglecloud, color: "text-blue-400" },
        { name: "SonarQube", icon: SiSonar, color: "text-blue-500" },
        { name: "OWASP ZAP", icon: SiZap, color: "text-blue-500" },
        { name: "Wireshark", icon: SiWireshark, color: "text-blue-500" },
        
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-foreground to-foreground/70 text-transparent bg-clip-text">
          {t('skills.title')}
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-xl font-semibold">{category.name}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <div 
                    key={i}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-foreground/5 hover:bg-foreground/10 transition-colors"
                  >
                    <skill.icon className={`text-xl ${skill.color}`} />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 