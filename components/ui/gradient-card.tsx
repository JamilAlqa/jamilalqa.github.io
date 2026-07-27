"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface GradientCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  interactive?: boolean
}

const GradientCard = React.forwardRef<HTMLDivElement, GradientCardProps>(
  ({ className, children, interactive = true, ...props }, ref) => {
    const [rotateX, setRotateX] = React.useState(0)
    const [rotateY, setRotateY] = React.useState(0)
    const [scale, setScale] = React.useState(1)

    const cardRef = React.useRef<HTMLDivElement>(null)

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!interactive || !cardRef.current) return

      const card = cardRef.current
      const rect = card.getBoundingClientRect()

      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const mouseX = e.clientX
      const mouseY = e.clientY

      const rotateXFactor = 10
      const rotateYFactor = 10

      const newRotateY = ((mouseX - centerX) / (rect.width / 2)) * rotateYFactor
      const newRotateX = ((centerY - mouseY) / (rect.height / 2)) * rotateXFactor

      setRotateX(newRotateX)
      setRotateY(newRotateY)
    }

    const handleMouseEnter = () => {
      if (!interactive) return
      setScale(1.02)
    }

    const handleMouseLeave = () => {
      if (!interactive) return
      setRotateX(0)
      setRotateY(0)
      setScale(1)
    }

    return (
      <motion.div
        ref={cardRef}
        className={cn(
          "rounded-lg bg-gradient-card border border-white/20 shadow-card hover:shadow-card-hover transition-shadow",
          className,
        )}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transformStyle: "preserve-3d",
        }}
        animate={{
          rotateX: rotateX,
          rotateY: rotateY,
          scale: scale,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
        {...props}
      >
        {children}
      </motion.div>
    )
  },
)
GradientCard.displayName = "GradientCard"

export { GradientCard }
