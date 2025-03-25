import Navbar from '@/app/components/ui/Navbar'
import Hero from '@/app/components/sections/Hero'
import About from '@/app/components/sections/About'
import Experience from '@/app/components/sections/Experience'
import Projects from '@/app/components/sections/Projects'
import Education from '@/app/components/sections/Education'
import Skills from '@/app/components/sections/Skills'
import Certifications from '@/app/components/sections/Certifications' 
export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <About />
        <Skills />
        <Certifications />
        <Experience />
        <Projects />
        <Education />
      </main>
    </>
  )
}