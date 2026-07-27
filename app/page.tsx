import Image from "next/image"
import { Github, Linkedin, Mail, Download, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GradientButton } from "@/components/ui/gradient-button"
import { GradientText } from "@/components/ui/gradient-text"
import TechStack from "@/components/tech-stack"
import CareerTimeline from "@/components/career-timeline"
import ProjectShowcase from "@/components/project-showcase"
import Education from "@/components/education"
import InteractiveBackground from "@/components/interactive-background"
import CustomCursor from "@/components/custom-cursor"
import InteractiveCard from "@/components/interactive-card"
import FloatingIcons from "@/components/floating-icons"
import ScrollProgress from "@/components/scroll-progress"
import FunBackground from "@/components/fun-background"
import FunText from "@/components/fun-text"

export default function Home() {
  return (
    <main className="min-h-screen bg-mesh">
      <CustomCursor />
      <ScrollProgress />
      <FloatingIcons />
      <FunBackground />

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center px-4 md:px-6">
        <InteractiveBackground />

        <div className="container relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary/20 shadow-blue-glow animate-float">
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="Jamil Alqatanani"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="space-y-4">
            <FunText text="Jamil Alqatanani" variant="vibrant" size="2xl" className="font-bold tracking-tight" />
            <p className="text-xl md:text-2xl font-heading">
              <GradientText variant="accent">Chief Technical Officer</GradientText>
            </p>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              Building the future of technology at <span className="font-semibold text-gradient">Damodi</span>
              <span className="inline-block ml-2">
                <Sparkles className="h-5 w-5 text-blue-600" />
              </span>
            </p>
          </div>

          <div className="flex gap-4">
            <Button
              variant="outline"
              size="icon"
              asChild
              className="hover:scale-110 transition-transform shadow-card hover:shadow-blue-glow rounded-full"
            >
              <a href="https://github.com/JamilAlqa" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              asChild
              className="hover:scale-110 transition-transform shadow-card hover:shadow-purple-glow rounded-full"
            >
              <a href="https://linkedin.com/in/jamil-alqatanani-002992209/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="hover:scale-110 transition-transform shadow-card hover:shadow-slate-glow rounded-full"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Button>
          </div>

          <GradientButton className="mt-8 rounded-full font-heading flex items-center gap-2 shadow-blue-glow">
            <Download className="h-4 w-4" />
            Download Resume
          </GradientButton>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-primary shadow-blue-glow"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 md:px-6 bg-confetti">
        <div className="container max-w-4xl mx-auto">
          <FunText text="About Me" className="mb-12 text-center" variant="default" size="xl" />

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square rounded-lg overflow-hidden shadow-card">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 mix-blend-overlay" />
              <Image src="/placeholder.svg?height=600&width=600" alt="Jamil working" fill className="object-cover" />
            </div>

            <div className="space-y-6 font-sans">
              <p className="text-lg">
                As the CTO of <GradientText variant="default">Damodi</GradientText>, I lead the development of mobile
                applications and technology infrastructure, focusing on machine learning models for user preference
                prediction.
              </p>

              <p className="text-lg">
                Currently pursuing a Data Science degree at{" "}
                <GradientText variant="accent">The Pennsylvania State University</GradientText>, I combine academic
                knowledge with practical experience in building scalable systems and leading development teams.
              </p>

              <p className="text-lg">
                I strive to have a positive impact in every endeavor I partake in. My{" "}
                <span className="text-gradient font-bold">youth</span> and{" "}
                <span className="text-gradient-accent font-bold">fresh perspective</span> allow me to approach problems
                with creativity and innovation that sets me apart professionally.
              </p>

              <div className="pt-4">
                <GradientButton variant="accent" asChild className="rounded-full font-heading shadow-purple-glow">
                  <a href="tel:+12158136565">Contact: (215) 813-6565</a>
                </GradientButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 md:px-6 bg-dots">
        <div className="container max-w-4xl mx-auto">
          <FunText text="Education" className="mb-12 text-center" variant="accent" size="xl" />
          <InteractiveCard title="Education" className="max-w-2xl mx-auto" variant="glass">
            <Education />
          </InteractiveCard>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="skills" className="py-20 px-4 md:px-6 bg-stripes">
        <div className="container max-w-4xl mx-auto">
          <FunText text="Tech Stack" className="mb-12 text-center" variant="default" size="xl" />
          <div className="bg-glass rounded-lg shadow-card p-6">
            <TechStack />
          </div>
        </div>
      </section>

      {/* Career Timeline */}
      <section id="experience" className="py-20 px-4 md:px-6 bg-confetti">
        <div className="container max-w-4xl mx-auto">
          <FunText text="Career Journey" className="mb-12 text-center" variant="accent" size="xl" />
          <CareerTimeline />
        </div>
      </section>

      {/* Project Showcase */}
      <section id="projects" className="py-20 px-4 md:px-6 bg-dots">
        <div className="container max-w-4xl mx-auto">
          <FunText text="Key Projects" className="mb-12 text-center" variant="default" size="xl" />
          <ProjectShowcase />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 md:px-6 bg-stripes">
        <div className="container max-w-4xl mx-auto text-center">
          <FunText text="Get In Touch" className="mb-6" variant="accent" size="xl" />
          <p className="text-lg mb-8 max-w-2xl mx-auto font-sans">
            Interested in discussing technology, innovation, or potential collaborations? I'd love to connect.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GradientButton className="flex items-center gap-2 rounded-full font-heading shadow-blue-glow" asChild>
              <a href="tel:+12158136565">
                <Mail className="h-4 w-4" />
                (215) 813-6565
              </a>
            </GradientButton>
            <GradientButton
              variant="accent"
              className="flex items-center gap-2 rounded-full font-heading shadow-purple-glow"
              asChild
            >
              <a href="https://linkedin.com/in/jamil-alqatanani-002992209/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
                Connect on LinkedIn
              </a>
            </GradientButton>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-6 border-t bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container max-w-4xl mx-auto text-center">
          <p className="font-mono text-sm">© {new Date().getFullYear()} Jamil Alqatanani. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
