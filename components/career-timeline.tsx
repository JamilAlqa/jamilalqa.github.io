"use client"

import { motion } from "framer-motion"
import { useRef, useEffect, useState, createRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GradientText } from "@/components/ui/gradient-text"

export default function CareerTimeline() {
  const careerSteps = [
    {
      period: "January 2023 - Present",
      role: "Chief Technical Officer",
      company: "Damodi",
      description:
        "Leading development of mobile app and technology infrastructure. Designed and deployed machine learning models for user preference prediction. Directed team of developers on application launch for Android and iOS using Node.js and Flutter/Dart.",
      icon: "🚀",
    },
    {
      period: "June - December 2022",
      role: "Analysis and Logistics Intern",
      company: "Copper Star Gaming",
      description:
        "Conducted market research and analysis of multivariate demographic studies. Used Alteryx and Tableau for data processing and visualizations with integration of 3rd party APIs. Created detailed maps and algorithms for determining market properties.",
      icon: "📊",
    },
    {
      period: "June - August 2021",
      role: "Analysis and Logistics Intern",
      company: "Copper Star Gaming",
      description:
        "Modeling of site plans using Sketchup and Geolocation plug-ins. Employed financial analysis models for data driven property assessment. Generated revenue models for financial analysis.",
      icon: "🗺️",
    },
    {
      period: "May - December 2021",
      role: "Data Infrastructure Intern",
      company: "Consequential Flowers",
      description:
        "Planned infrastructure for capturing and utilizing data from social media site. Operated and optimized data capture, storage, and querying using AWS systems including DynamoDB, S3, and Lambda.",
      icon: "⚙️",
    },
  ]

  // Create an array of refs at the component level
  const itemRefs = useRef(careerSteps.map(() => createRef<HTMLDivElement>()))
  const [inViewStates, setInViewStates] = useState<boolean[]>(Array(careerSteps.length).fill(false))

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Find the index of the entry in our refs array
          const index = itemRefs.current.findIndex((ref) => ref.current === entry.target)

          if (index !== -1 && entry.isIntersecting) {
            setInViewStates((prev) => {
              const newState = [...prev]
              newState[index] = true
              return newState
            })
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.5,
      },
    )

    // Observe all our refs
    itemRefs.current.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current)
      }
    })

    return () => {
      itemRefs.current.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current)
        }
      })
    }
  }, [])

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="space-y-8"
    >
      {careerSteps.map((step, index) => {
        const isInView = inViewStates[index]
        const isEven = index % 2 === 0

        return (
          <motion.div key={index} variants={item} className="relative" ref={itemRefs.current[index]}>
            {index !== careerSteps.length - 1 && (
              <div className="absolute left-[24px] top-[60px] bottom-0 w-[2px] bg-gradient-to-b from-blue-500 to-violet-500" />
            )}

            <motion.div
              initial={{ x: isEven ? -50 : 50, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : { x: isEven ? -50 : 50, opacity: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                scale: 1.03,
                transition: { type: "spring", stiffness: 300 },
              }}
            >
              <Card className="bg-gradient-card border-2 border-white/20 shadow-card hover:shadow-card-hover transition-all overflow-hidden">
                <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between pb-2 bg-gradient-to-r from-blue-500/10 to-violet-500/10">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{step.icon}</span>
                    <div>
                      <CardTitle className="text-xl font-heading">
                        <GradientText variant={isEven ? "vibrant" : "fun"}>{step.role}</GradientText>
                      </CardTitle>
                      <CardDescription className="text-lg">{step.company}</CardDescription>
                    </div>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <span
                      className={`inline-block ${isEven ? "bg-blue-500/10 text-blue-600" : "bg-violet-500/10 text-violet-600"} px-3 py-1 rounded-full text-sm font-medium shadow-sm font-mono`}
                    >
                      {step.period}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="p-4 font-sans">
                  <p>{step.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        )
      })}
    </motion.div>
  )
}
