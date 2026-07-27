"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface InteractiveCardProps {
  title: string
  description?: string
  children: React.ReactNode
  className?: string
  variant?: "default" | "gradient" | "glass"
  [x: string]: any
}

export default function InteractiveCard({
  title,
  description,
  children,
  className = "",
  variant = "default",
  ...props
}: InteractiveCardProps) {
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [scale, setScale] = useState(1)

  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

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
    setScale(1.02)
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
    setScale(1)
  }

  const variantClasses = {
    default: "bg-card border shadow-card hover:shadow-card-hover",
    gradient: "bg-gradient-card border border-white/20 shadow-card hover:shadow-card-hover",
    glass: "bg-glass border border-white/20 shadow-card hover:shadow-card-hover backdrop-blur-lg",
  }

  return (
    <motion.div
      ref={cardRef}
      className={cn("rounded-lg overflow-hidden", className)}
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
      <Card className={cn(variantClasses[variant], "border-none")}>
        <CardHeader>
          <CardTitle className="text-gradient-primary">{title}</CardTitle>
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
        <CardContent>{children}</CardContent>
      </Card>
    </motion.div>
  )
}
