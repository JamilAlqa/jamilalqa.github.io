"use client"

import { useEffect, useRef } from "react"

export default function FunBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Create subtle shapes
    class Shape {
      x: number
      y: number
      size: number
      color: string
      type: string
      speed: number
      angle: number
      rotation: number
      rotationSpeed: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 20 + 5

        // More reserved colors
        const colors = [
          "rgba(37, 99, 235, 0.1)", // Blue
          "rgba(79, 70, 229, 0.1)", // Indigo
          "rgba(67, 56, 202, 0.1)", // Indigo darker
          "rgba(30, 64, 175, 0.1)", // Blue darker
        ]
        this.color = colors[Math.floor(Math.random() * colors.length)]

        // Different shapes
        const shapes = ["circle", "square"]
        this.type = shapes[Math.floor(Math.random() * shapes.length)]

        this.speed = Math.random() * 0.3 + 0.05
        this.angle = Math.random() * Math.PI * 2
        this.rotation = 0
        this.rotationSpeed = (Math.random() - 0.5) * 0.01
      }

      update() {
        // Move in random direction
        this.x += Math.cos(this.angle) * this.speed
        this.y += Math.sin(this.angle) * this.speed

        // Rotate
        this.rotation += this.rotationSpeed

        // Bounce off edges
        if (this.x < 0 || this.x > canvas.width) {
          this.angle = Math.PI - this.angle
        }
        if (this.y < 0 || this.y > canvas.height) {
          this.angle = -this.angle
        }
      }

      draw() {
        if (!ctx) return

        ctx.save()
        ctx.translate(this.x, this.y)
        ctx.rotate(this.rotation)
        ctx.fillStyle = this.color

        switch (this.type) {
          case "circle":
            ctx.beginPath()
            ctx.arc(0, 0, this.size / 2, 0, Math.PI * 2)
            ctx.fill()
            break

          case "square":
            ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size)
            break
        }

        ctx.restore()
      }
    }

    // Create shapes
    const shapes: Shape[] = []
    for (let i = 0; i < 15; i++) {
      shapes.push(new Shape())
    }

    // Animation loop
    const animate = () => {
      // Clear canvas with semi-transparent white for trail effect
      ctx.fillStyle = "rgba(255, 255, 255, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw shapes
      shapes.forEach((shape) => {
        shape.update()
        shape.draw()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-[-1] opacity-20" />
}
