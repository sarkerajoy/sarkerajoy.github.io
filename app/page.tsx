"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { CurveDivider } from "@/components/wave-divider"
import Image from "next/image"
import GeometricIntro from "@/components/geometric-intro"
import { motion } from "framer-motion"

export default function Home() {
  const [showIntro, setShowIntro] = useState(true)
  const [introComplete, setIntroComplete] = useState(false)

  // Check if intro has been shown before
  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem("hasSeenIntro")
    if (hasSeenIntro) {
      setShowIntro(false)
      setIntroComplete(true)
    } else {
      setShowIntro(true)
    }
  }, [])

  const handleIntroComplete = () => {
    setIntroComplete(true)
    // Save to session storage so intro only shows once per session
    sessionStorage.setItem("hasSeenIntro", "true")
  }

  const projects = [
    {
      title: "RENAISSANCE - Mars Rover",
      description: "A Mars rover for the European Rover Challenge 2022, achieving 8th place globally and 1st in Asia.",
      image: "/erc.jpeg?height=300&width=600",
    },
    {
      title: "HILSHA BOT - Bio-inspired Robotic Fish",
      description:
        "The first soft robotic fish in Bangladesh designed for deep-sea scientific exploration and surveillance.",
      image: "/hilsha.jpg?height=300&width=600",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      {/* Geometric Intro Animation */}
      {showIntro && <GeometricIntro onComplete={handleIntroComplete} />}

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
        {/* Background with gradient */}
        <div className="absolute inset-0 gradient-primary opacity-90"></div>

        {/* Animated background shapes - positioned with z-index to avoid text overlap */}
        <div className="bg-shapes">
          <div className="absolute top-20 left-20 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
          <div
            className="absolute bottom-20 right-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-violet-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"
            style={{ animationDelay: "4s" }}
          ></div>
        </div>

        {/* Content - with higher z-index to ensure it's above the background shapes */}
        <div className="relative z-10 text-center px-4 max-w-3xl content-wrapper">
          <h1 className="hero-title text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight leading-tight">
            Ajoy Kumar Sarker
          </h1>
          <h2 className="hero-subtitle text-xl md:text-2xl text-white/90 mb-10 font-light">
            Mechanical Engineer & Researcher
          </h2>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in-bottom"
            style={{ animationDelay: "1.2s" }}
          >
            <Button asChild variant="outline" className="glass-effect text-white border-white/40 hover:bg-white/20">
              <Link href="/about">Learn More</Link>
            </Button>
            <Button asChild className="bg-white text-purple-700 hover:bg-white/90 animate-pulse-shadow">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 animate-bounce z-10">
          <Link href="#featured-projects">
            <ChevronDown className="h-10 w-10 text-white" />
          </Link>
        </div>

        {/* Wave divider - keep this one */}
        <CurveDivider position="bottom" className="text-background" />
      </section>

      {/* Featured section preview */}
      <section id="featured-projects" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text font-heading">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore some of my recent engineering projects and research work.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-2xl gradient-border"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="aspect-video relative overflow-hidden rounded-2xl">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2 font-heading">{project.title}</h3>
                      <p className="text-white/80 text-sm">{project.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button asChild variant="outline" className="gradient-border">
              <Link href="/creative-work">View All Projects</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
