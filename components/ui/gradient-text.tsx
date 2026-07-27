import type React from "react"
import { cn } from "@/lib/utils"

interface GradientTextProps {
  children: React.ReactNode
  className?: string
  variant?: "default" | "primary" | "accent"
}

export function GradientText({ children, className, variant = "default" }: GradientTextProps) {
  const variantClasses = {
    default: "text-gradient",
    primary: "text-gradient-primary",
    accent: "text-gradient-accent",
  }

  return <span className={cn(variantClasses[variant], className)}>{children}</span>
}
