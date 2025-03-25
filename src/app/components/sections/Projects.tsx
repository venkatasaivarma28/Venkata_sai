'use client'

import Image from 'next/image'
import { useState } from 'react'
import { useLanguage } from '@/app/components/providers/LanguageProvider'
import { getImagePath } from '@/utils/imagePath'

interface Project {
  title: string
  description: string
  tech: string[]
  url: string
  image: string
  github: string
  categories: string[]
  titleKey: string
  descriptionKey: string
}

const projects: Project[] = [
  {
    title: "Time Bridge AI",
    description: "An intelligent calendar management system powered by Google Gemini AI that helps users schedule events, create study plans, and set reminders through natural language processing. Features include Google Calendar integration, secure Firebase authentication, interactive chat interface, and smart intent recognition for different types of events.",
    tech: ["Next.js", "FastAPI", "Google Gemini AI", "Firebase", "TypeScript", "Python"],
    url: "https://timebridgeai.web.app/",
    image: getImagePath('/projects/AICalendarAssistant.webp'),
    github: "https://github.com/srinikhil0/timebridgeai",
    categories: ["Machine Learning", "Full Stack", "Web Development"],
    titleKey: 'projects.timeBridgeAI',
    descriptionKey: 'projects.timeBridgeAIDescription'
  },
  {
    title: "Periodic Table AI",
    description: "An interactive periodic table application powered by AI, developed in collaboration with MXEnergy Labs and Shizuoka University, Japan. Features real-time chemical data integration with RSC API, AI-powered insights, and 3D visualizations of chemical elements.",
    tech: ["Next.js", "Three.js", "Google AI", "Firebase", "TypeScript"],
    url: "https://periodictableai.web.app/",
    image: getImagePath('/projects/periodicTableAi.webp'),
    github: "https://github.com/srinikhil0/PeriodicTableAIAgent",
    categories: ["Full Stack", "Machine Learning", "Web Development", "Research"],
    titleKey: 'projects.periodicTableAI',
    descriptionKey: 'projects.periodicTableAIDescription'
  },
  {
    title: "PawsitiveId",
    description: "A web application designed to estimate dog breeds from user-uploaded photos. Uses machine learning to approximate breed makeup based on physical characteristics, providing a quick alternative to genetic tests.",
    tech: ["Angular", "Machine Learning", "Firebase", "Web Development"],
    url: "https://pawsitiveid-10f0e.web.app/home",
    image: getImagePath('/projects/pawsitive_id.webp'),
    github: "https://github.com/srinikhil0/pawsitive_id_Angular",
    categories: ["Full Stack", "Machine Learning", "Web Development"],
    titleKey: 'projects.pawsitiveId',
    descriptionKey: 'projects.pawsitiveIdDescription'
  },
  {
    title: "Vocal Based Parkinson's Disease Detection",
    description: "A research study analyzing algorithm accuracy for Parkinson's disease prediction using vocal data. XGBoost achieved 96% accuracy in classification, demonstrating superior performance.",
    tech: ["Python", "Machine Learning", "Research", "Healthcare"],
    url: "",
    image: getImagePath('/projects/parkinson.webp'),
    github: "https://github.com/srinikhil0/Vocal-based-parkinson-disease-detection-using-machine-learning-algorithms",
    categories: ["Machine Learning", "Research", "Healthcare"],
    titleKey: 'projects.vocalBasedParkinsonsDiseaseDetection',
    descriptionKey: 'projects.vocalBasedParkinsonsDiseaseDetectionDescription'
  },
  {
    title: "PiviWatch",
    description: "An innovative project designed to revolutionize video surveillance through advanced motion detection and encryption technology. Enhances privacy by selectively encrypting areas within video frames where motion is detected.",
    tech: ["Python", "Machine Learning", "Encryption", "OpenCV"],
    url: "",
    image: getImagePath('/projects/piviwatch.png'),
    github: "https://github.com/srinikhil0/PiviWatch",
    categories: ["Machine Learning", "Computer Vision", "Cybersecurity"],
    titleKey: 'projects.piviWatch',
    descriptionKey: 'projects.piviWatchDescription'
  }
]

const PROJECTS_PER_PAGE = 6
const CATEGORIES = [
  { key: 'projects.filter.all', value: 'All' },
  { key: 'projects.filter.cybersecurity', value: 'Cybersecurity' },
  { key: 'projects.filter.ml', value: 'Machine Learning' },
  { key: 'projects.filter.fullstack', value: 'Full Stack' },
  { key: 'projects.filter.web', value: 'Web Development' }
]
const DEFAULT_IMAGE = getImagePath('/placeholder.jpg')

const ProjectImage = ({ src, alt, priority }: { src: string; alt: string; priority?: boolean }) => {
  const [imgSrc, setImgSrc] = useState(src)

  return (
    <div className="relative h-48 overflow-hidden">
      <Image
        src={imgSrc}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
        priority={priority}
        onError={() => {
          if (imgSrc !== DEFAULT_IMAGE) {
            setImgSrc(DEFAULT_IMAGE)
          }
        }}
      />
    </div>
  );
};

export default function Projects() {
  const { t } = useLanguage()
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProjects = projects.filter(project => 
    selectedCategory === "All" ? true : project.categories.includes(selectedCategory)
  )

  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE)
  const currentProjects = filteredProjects.slice(
    (currentPage - 1) * PROJECTS_PER_PAGE,
    currentPage * PROJECTS_PER_PAGE
  )

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-start/5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-foreground to-foreground/70 text-transparent bg-clip-text">
          {t('projects.title')}
        </h2>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {CATEGORIES.map((category) => (
            <button
              key={category.value}
              onClick={() => {
                setSelectedCategory(category.value)
                setCurrentPage(1)
              }}
              className={`px-4 py-2 rounded-full transition-all ${
                selectedCategory === category.value
                  ? 'bg-foreground text-background'
                  : 'bg-foreground/5 hover:bg-foreground/10'
              }`}
            >
              {t(category.key)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProjects.map((project, index) => (
            <div 
              key={index} 
              className="group bg-background border border-foreground/10 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <ProjectImage 
                src={project.image} 
                alt={project.title}
                priority={index === 0 && currentPage === 1}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{t(project.titleKey)}</h3>
                <p className="text-foreground/60 mb-4 text-sm">
                  {t(project.descriptionKey)}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-foreground/5 text-foreground/80 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-4">
                  {project.url && (
                    <a 
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/60 hover:text-foreground transition flex items-center gap-2"
                      title={t('projects.liveDemo')}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3m-2 16H5V5h7V3H5c-1.11 0-2 .89-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7h-2v7z"/>
                      </svg>
                      <span>{t('projects.liveDemo')}</span>
                    </a>
                  )}
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/60 hover:text-foreground transition flex items-center gap-2"
                    title={t('projects.sourceCode')}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.747-1.026 2.747-1.026.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                    </svg>
                    <span>{t('projects.sourceCode')}</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-12">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-10 h-10 rounded-full transition-all ${
                  currentPage === i + 1
                    ? 'bg-foreground text-background'
                    : 'bg-foreground/5 hover:bg-foreground/10'
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}