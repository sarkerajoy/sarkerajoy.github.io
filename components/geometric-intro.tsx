"use client"

import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

interface GeometricIntroProps {
  onComplete?: () => void
  className?: string
}

export default function GeometricIntro({ onComplete, className }: GeometricIntroProps) {
  const [isComplete, setIsComplete] = useState(false)
  const [showName, setShowName] = useState(false)
  const introRef = useRef<HTMLDivElement>(null)

  const shapes = [
    { type: "circle", color: "bg-purple-500", size: "w-20 h-20 md:w-28 md:h-28", delay: 0 },
    { type: "square", color: "bg-indigo-500", size: "w-14 h-14 md:w-20 md:h-20", delay: 0.15 },
    { type: "triangle", color: "bg-violet-500", size: "w-24 h-24 md:w-32 md:h-32", delay: 0.3 },
    { type: "circle", color: "bg-fuchsia-500", size: "w-12 h-12 md:w-18 md:h-18", delay: 0.45 },
    { type: "square", color: "bg-blue-500", size: "w-16 h-16 md:w-22 md:h-22", delay: 0.6 },
  ]

  useEffect(() => {
    const nameTimer = setTimeout(() => {
      setShowName(true)
    }, 2200)

    const completeTimer = setTimeout(() => {
      setIsComplete(true)
      if (onComplete) onComplete()
    }, 5800)

    return () => {
      clearTimeout(nameTimer)
      clearTimeout(completeTimer)
    }
  }, [onComplete])

  // Improved triangle with a sharper CSS shape + stroke
  const Triangle = ({ className }: { className?: string }) => (
    <svg
      className={cn(className)}
      width="100%"
      height="100%"
      viewBox="0 0 60 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M30 0L60 52H0L30 0Z"
        fill="currentColor"
        stroke="white"
        strokeWidth="2"
      />
    </svg>
  )

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          ref={introRef}
          className={cn("fixed inset-0 z-50 flex items-center justify-center bg-slate-900 overflow-hidden", className)}
          exit={{ opacity: 0, y: -30, transition: { duration: 0.6, ease: "easeInOut" } }}
        >
          <div className="relative w-full h-full">
            {/* Animated shapes */}
            {shapes.map((shape, index) => {
              const randomX = Math.random() * 70 + 15
              const randomY = Math.random() * 70 + 15
              const randomXMove = (Math.random() - 0.5) * 80
              const randomYMove = (Math.random() - 0.5) * 80
              return (
                <motion.div
                  key={index}
                  className={cn(
                    `absolute ${shape.size} ${shape.color}`,
                    shape.type === "circle" ? "rounded-full" : shape.type === "square" ? "rounded-sm" : ""
                  )}
                  style={{
                    left: `${randomX}%`,
                    top: `${randomY}%`,
                  }}
                  initial={{ opacity: 0, scale: 0.3, rotate: -90 }}
                  animate={{
                    opacity: [0, 1, 1, 0],
                    scale: [0.3, 1, 1, 0.3],
                    rotate: [-90, 0, 0, 90],
                    x: [0, randomXMove, -randomXMove / 2, 0],
                    y: [0, randomYMove, -randomYMove / 2, 0],
                  }}
                  transition={{
                    duration: 4.2,
                    delay: shape.delay,
                    ease: "easeInOut",
                    times: [0, 0.35, 0.75, 1],
                  }}
                >
                  {shape.type === "triangle" && <Triangle className="text-current" />}
                </motion.div>
              )
            })}

            {/* Grid lines */}
            <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 opacity-10 pointer-events-none">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={`col-${i}`} className="border-r border-white/20 h-full"></div>
              ))}
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={`row-${i}`} className="border-b border-white/20 w-full"></div>
              ))}
            </div>

            {/* Name reveal */}
            <motion.div
              className="absolute inset-0 flex flex-col items-center justify-center z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: showName ? 1 : 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <motion.h1
                className="text-5xl md:text-8xl font-extrabold text-white mb-3 tracking-widest"
                initial={{ opacity: 0, y: 30, letterSpacing: 0 }}
                animate={{ opacity: showName ? 1 : 0, y: showName ? 0 : 30, letterSpacing: showName ? 0.25 : 0 }}
                transition={{ duration: 0.9, delay: 0.3 }}
              >
                AJOY KUMAR SARKER
              </motion.h1>
              <motion.p
                className="text-2xl md:text-3xl text-white/80"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: showName ? 1 : 0, y: showName ? 0 : 30 }}
                transition={{ duration: 0.9, delay: 0.6 }}
              >
                Engineer,Researcher & Photographer
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

