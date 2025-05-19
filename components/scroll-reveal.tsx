"use client"

import { useEffect, useRef, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  animation?: "fade" | "fade-left" | "fade-right" | "scale"
  delay?: number
}

export default function ScrollReveal({ children, className, animation = "fade", delay = 0 }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("active")
            }, delay)
          }
        })
      },
      {
        threshold: 0.1,
      },
    )

    const element = ref.current
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [delay])

  const getAnimationClass = () => {
    switch (animation) {
      case "fade-left":
        return "reveal-left"
      case "fade-right":
        return "reveal-right"
      case "scale":
        return "reveal-scale"
      case "fade":
      default:
        return "reveal"
    }
  }

  return (
    <div ref={ref} className={cn(getAnimationClass(), className)}>
      {children}
    </div>
  )
}
