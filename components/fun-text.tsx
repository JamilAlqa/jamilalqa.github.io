"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface FunTextProps {
  text: string
  className?: string
  variant?: "default" | "vibrant" | "fun"
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl"
  animate?: boolean
}

export default function FunText({ text, className, variant = "default", size = "lg", animate = true }: FunTextProps) {
  const letters = text.split("")

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
    }),
  }

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  }

  const gradientClasses = {
    default: "text-gradient",
    vibrant: "text-gradient-vibrant",
    fun: "text-gradient-fun",
  }

  const sizeClasses = {
    sm: "text-xl md:text-2xl",
    md: "text-2xl md:text-3xl",
    lg: "text-3xl md:text-4xl",
    xl: "text-4xl md:text-5xl",
    "2xl": "text-5xl md:text-6xl",
    "3xl": "text-6xl md:text-7xl",
  }

  return (
    <motion.h2
      className={cn("font-heading font-bold tracking-tight", gradientClasses[variant], sizeClasses[size], className)}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={child}
          className="inline-block"
          whileHover={
            animate
              ? {
                  y: -3,
                  scale: 1.1,
                  transition: { type: "spring", stiffness: 300 },
                }
              : undefined
          }
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.h2>
  )
}
