"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GradientText } from "@/components/ui/gradient-text"
import { BookOpen } from "lucide-react"

export default function Education() {
  const activities = ["Club Tennis", "Student Physics Society"]

  return (
    <Card className="overflow-hidden bg-gradient-card shadow-card">
      <CardHeader className="bg-gradient-to-r from-blue-500/5 to-indigo-500/5 border-b border-white/20">
        <CardTitle className="text-2xl flex items-center gap-2">
          <motion.span
            initial={{ backgroundPosition: "0% 100%" }}
            whileHover={{ backgroundPosition: "100% 100%" }}
            style={{
              backgroundImage: "linear-gradient(to right, #2563eb, #4f46e5)",
              backgroundSize: "100% 2px",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "0% 100%",
              paddingBottom: "2px",
            }}
          >
            <GradientText variant="accent" className="font-heading">
              The Pennsylvania State University
            </GradientText>
          </motion.span>
          <motion.div
            animate={{ rotate: [0, 5, -5, 5, 0] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          >
            <BookOpen className="h-5 w-5 text-indigo-600" />
          </motion.div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2 p-6">
        <div className="flex items-center space-x-2">
          <div className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 shadow-blue-glow" />
          <p className="font-medium font-heading">Data Science Degree in Progress</p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 shadow-blue-glow" />
          <p className="text-muted-foreground">University Park</p>
        </div>
        <div className="mt-6">
          <p className="font-medium mb-2 text-gradient-accent font-heading">Clubs and Activities:</p>
          <ul className="space-y-2">
            {activities.map((activity, index) => (
              <motion.li
                key={activity}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{
                  x: 5,
                  transition: { type: "spring", stiffness: 300 },
                }}
                className="flex items-center space-x-2"
              >
                <div className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-indigo-600 to-indigo-800 shadow-purple-glow" />
                <span className="font-sans">{activity}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
