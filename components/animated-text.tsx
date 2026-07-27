"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedTextProps {
  text: string
  className?: string
  once?: boolean
  gradient?: boolean
  variant?: "default" | "primary" | "accent"
}

export default function AnimatedText({
  text,
  className = "",
  once = false,
  gradient = false,
  variant = "default",
}: AnimatedTextProps) {
  const [isHovered, setIsHovered] = useState(false)
  const words = text.split(" ")

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  }

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  }

  const gradientClasses = {
    default: "text-gradient",
    primary: "text-gradient-primary",
    accent: "text-gradient-accent",
  }

  return (
    <motion.div
      className={cn(
        "w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden",
        gradient && gradientClasses[variant],
        className,
      )}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
    >
      <div className="flex flex-wrap justify-center items-center">
        {words.map((word, index) => (
          <motion.span key={word + "-" + index} className="inline-block mx-1" variants={child}>
            <span className="inline-block">
              {word.split("").map((char, charIndex) => (
                <motion.span
                  key={char + "-" + charIndex}
                  className="inline-block"
                  whileHover={{
                    y: -5,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                  onHoverStart={() => setIsHovered(true)}
                  onHoverEnd={() => setIsHovered(false)}
                >
                  {char}
                </motion.span>
              ))}
            </span>
          </motion.span>
        ))}
      </div>
    </motion.div>
  )
}
