"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import {
  Code,
  Database,
  Server,
  Cloud,
  Cpu,
  Globe,
  LineChart,
  Lock,
  Smartphone,
  Zap,
  Layers,
  GitBranch,
} from "lucide-react"

interface FloatingIcon {
  id: number
  Icon: React.ElementType
  x: number
  y: number
  size: number
  speed: number
  direction: number
  opacity: number
}

export default function FloatingIcons() {
  const [icons, setIcons] = useState<FloatingIcon[]>([])
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)

    const iconComponents = [
      Code,
      Database,
      Server,
      Cloud,
      Cpu,
      Globe,
      LineChart,
      Lock,
      Smartphone,
      Zap,
      Layers,
      GitBranch,
    ]

    const newIcons: FloatingIcon[] = []

    for (let i = 0; i < 15; i++) {
      const Icon = iconComponents[Math.floor(Math.random() * iconComponents.length)]
      newIcons.push({
        id: i,
        Icon,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 20 + 10,
        speed: Math.random() * 0.5 + 0.1,
        direction: Math.random() * Math.PI * 2,
        opacity: Math.random() * 0.3 + 0.1,
      })
    }

    setIcons(newIcons)

    return () => {
      window.removeEventListener("resize", updateDimensions)
    }
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setIcons((prevIcons) =>
        prevIcons.map((icon) => {
          let newX = icon.x + Math.cos(icon.direction) * icon.speed
          let newY = icon.y + Math.sin(icon.direction) * icon.speed
          let newDirection = icon.direction

          // Bounce off edges
          if (newX < 0 || newX > dimensions.width) {
            newDirection = Math.PI - newDirection
            newX = Math.max(0, Math.min(newX, dimensions.width))
          }

          if (newY < 0 || newY > dimensions.height) {
            newDirection = -newDirection
            newY = Math.max(0, Math.min(newY, dimensions.height))
          }

          return {
            ...icon,
            x: newX,
            y: newY,
            direction: newDirection,
          }
        }),
      )
    }, 50)

    return () => clearInterval(interval)
  }, [dimensions])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {icons.map((icon) => (
        <motion.div
          key={icon.id}
          className="absolute text-primary"
          animate={{
            x: icon.x,
            y: icon.y,
            opacity: icon.opacity,
            rotate: [0, 360],
          }}
          transition={{
            rotate: {
              repeat: Number.POSITIVE_INFINITY,
              duration: 20 + Math.random() * 10,
              ease: "linear",
            },
            x: { duration: 0.05 },
            y: { duration: 0.05 },
          }}
          style={{ width: icon.size, height: icon.size }}
        >
          <icon.Icon size={icon.size} />
        </motion.div>
      ))}
    </div>
  )
}
