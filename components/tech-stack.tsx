"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function TechStack() {
  const [activeTab, setActiveTab] = useState("languages")

  const techCategories = {
    languages: ["Python", "JavaScript", "R", "SQL", "Java", "Flutter/Dart"],
    frontend: ["React", "Node.js"],
    backend: ["Django", "AWS", "Google Cloud Platform"],
    data: ["PyTorch", "ML Algorithms", "Data Modeling"],
    tools: ["Git/GitHub", "Alteryx", "Tableau", "Power BI", "RStudio"],
  }

  const categoryColors = {
    languages: {
      gradient: "from-blue-600 to-blue-800",
      shadow: "shadow-blue-glow",
      icon: "🚀",
    },
    frontend: {
      gradient: "from-blue-700 to-indigo-600",
      shadow: "shadow-blue-glow",
      icon: "🎨",
    },
    backend: {
      gradient: "from-indigo-600 to-indigo-800",
      shadow: "shadow-purple-glow",
      icon: "⚙️",
    },
    data: {
      gradient: "from-indigo-700 to-purple-700",
      shadow: "shadow-purple-glow",
      icon: "📊",
    },
    tools: {
      gradient: "from-slate-600 to-slate-800",
      shadow: "shadow-slate-glow",
      icon: "🛠️",
    },
  }

  return (
    <Tabs defaultValue="languages" className="w-full" onValueChange={setActiveTab}>
      <TabsList className="grid grid-cols-3 md:grid-cols-5 mb-8 bg-white/50 backdrop-blur-sm shadow-card rounded-full p-1">
        {Object.keys(techCategories).map((category) => (
          <TabsTrigger
            key={category}
            value={category}
            className="relative overflow-hidden group rounded-full font-heading"
          >
            <span className="mr-1">{categoryColors[category as keyof typeof categoryColors].icon}</span>
            <span>{category.charAt(0).toUpperCase() + category.slice(1)}</span>
            <motion.div
              className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${
                categoryColors[category as keyof typeof categoryColors].gradient
              }`}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: activeTab === category ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            />
          </TabsTrigger>
        ))}
      </TabsList>

      <AnimatePresence mode="wait">
        {Object.entries(techCategories).map(([category, technologies]) => (
          <TabsContent key={category} value={category} className="mt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-wrap gap-3 justify-center"
            >
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{
                    scale: 1.05,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                >
                  <Badge
                    variant="secondary"
                    className={`text-base py-2 px-4 bg-gradient-to-r ${
                      categoryColors[category as keyof typeof categoryColors].gradient
                    } text-white hover:opacity-90 cursor-pointer transition-all ${
                      categoryColors[category as keyof typeof categoryColors].shadow
                    } font-heading`}
                  >
                    {tech}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        ))}
      </AnimatePresence>
    </Tabs>
  )
}
