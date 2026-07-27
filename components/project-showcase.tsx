"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { GradientButton } from "@/components/ui/gradient-button"
import { GradientText } from "@/components/ui/gradient-text"
import { ChevronLeft, ChevronRight, ExternalLink, Lightbulb } from "lucide-react"

export default function ProjectShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const constraintsRef = useRef(null)

  const projects = [
    {
      title: "ML Model for Travel Preferences",
      description:
        "Designed, developed, and deployed a machine learning model for user preference prediction in Python. Created data capture operations to model travel preferences and automated journey booking by outputting desirable end-to-end trips for travelers.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Python", "Machine Learning", "Data Modeling", "AWS"],
      gradient: "from-blue-600 to-blue-800",
      icon: "🧠",
    },
    {
      title: "Mobile App Development",
      description:
        "Directed team of developers on application launch for Android and iOS using Node.js and Flutter/Dart. Deployed native frontend libraries for enhanced performance and focused on user-centric design by iterating after test trials and feedback.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Node.js", "Flutter", "Dart", "API Integration"],
      gradient: "from-indigo-600 to-indigo-800",
      icon: "📱",
    },
    {
      title: "LLM Training for Grant Applications",
      description:
        "Trained a Large Language Model to handle grant application reviews and suggestions, streamlining the review process and improving efficiency in application handling.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["AI", "LLM", "Python", "NLP"],
      gradient: "from-slate-600 to-slate-800",
      icon: "🤖",
    },
  ]

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length)
  }

  return (
    <div className="relative" ref={constraintsRef}>
      <div className="overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="border-none shadow-lg bg-gradient-card overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    className="relative aspect-video overflow-hidden rounded-l-lg"
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${projects[currentIndex].gradient} opacity-10`}
                    />
                    <Image
                      src={projects[currentIndex].image || "/placeholder.svg"}
                      alt={projects[currentIndex].title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4 text-4xl">{projects[currentIndex].icon}</div>
                  </motion.div>
                  <div className="p-6 flex flex-col justify-between">
                    <div>
                      <motion.h3
                        className="text-2xl font-bold mb-4 font-heading flex items-center gap-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <GradientText variant={currentIndex === 0 ? "default" : "accent"}>
                          {projects[currentIndex].title}
                        </GradientText>
                        <motion.div
                          animate={{ rotate: [0, 5, -5, 5, 0] }}
                          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                        >
                          <Lightbulb className="h-5 w-5 text-blue-600" />
                        </motion.div>
                      </motion.h3>
                      <motion.p
                        className="text-muted-foreground mb-6 font-sans"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        {projects[currentIndex].description}
                      </motion.p>
                      <motion.div
                        className="flex flex-wrap gap-2 mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        {projects[currentIndex].tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="outline"
                            className={`hover:bg-${
                              currentIndex === 0 ? "blue" : "indigo"
                            }-500/10 transition-colors cursor-pointer shadow-sm font-mono`}
                          >
                            {tag}
                          </Badge>
                        ))}
                      </motion.div>
                    </div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <GradientButton
                        variant={currentIndex === 0 ? "default" : "accent"}
                        className="self-start flex items-center gap-2 rounded-full font-heading"
                      >
                        <span>View Case Study</span>
                        <ExternalLink className="h-4 w-4" />
                      </GradientButton>
                    </motion.div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center mt-8 gap-4">
        <Button
          variant="outline"
          size="icon"
          onClick={prevProject}
          aria-label="Previous project"
          className="hover:scale-110 transition-transform shadow-card hover:shadow-blue-glow rounded-full"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <div className="flex gap-2">
          {projects.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex
                  ? index === 0
                    ? "bg-blue-600 shadow-blue-glow"
                    : "bg-indigo-600 shadow-purple-glow"
                  : "bg-muted-foreground/30"
              }`}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
        <Button
          variant="outline"
          size="icon"
          onClick={nextProject}
          aria-label="Next project"
          className="hover:scale-110 transition-transform shadow-card hover:shadow-blue-glow rounded-full"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
