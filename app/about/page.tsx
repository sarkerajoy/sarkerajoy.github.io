"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import ScrollReveal from "@/components/scroll-reveal"
import { motion } from "framer-motion"
import { useRef } from "react"

export default function AboutPage() {
  const skills = [
    "Mechanical Design",
    "CAD/CAM",
    "Materials Science",
    "FEM Analysis",
    "Additive Manufacturing",
    "Machine Learning",
    "Process Optimization",
  ]

  const researchInterests = [
    {
      title: "Additive Manufacturing",
      description:
        "Exploring advanced 3D printing techniques to optimize material properties and manufacturing processes for high-performance applications.",
      bgClass: "from-purple-700 to-purple-900",
    },
    {
      title: "High Temp Materials",
      description:
        "Research on materials capable of withstanding extreme temperatures for aerospace, energy, and industrial applications.",
      bgClass: "from-red-700 to-red-900",
    },
    {
      title: "Machine Learning",
      description:
        "Applying ML algorithms to predict material behavior, optimize design parameters, and enhance manufacturing efficiency.",
      bgClass: "from-blue-700 to-blue-900",
    },
    {
      title: "Soft Robotics",
      description:
        "Developing flexible and adaptive robotic systems inspired by biological organisms, focusing on novel materials and actuation methods.",
      bgClass: "from-green-600 to-green-800",
    },
  ]

  const scrollRef = useRef<HTMLDivElement>(null)

  // Width of ONE card plus gap, must match CSS
  const cardWidth = 320 + 24 // card min-width + gap between cards (24px from space-x-6)

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: cardWidth, behavior: "smooth" })
    }
  }

  return (
    <>
      <div className="min-h-screen pt-16 pb-10 bg-background">
        {/* Hero section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 gradient-secondary opacity-90 -z-10"></div>

          {/* Animated background shapes */}
          <div className="bg-shapes">
            <div className="absolute top-20 left-10 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
            <div
              className="absolute bottom-10 right-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 content-wrapper">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl font-bold mb-6 text-white font-heading">About Me</h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Engineer & Researcher with a focus on innovative materials and computational mechanics.
              </p>
            </motion.div>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <ScrollReveal animation="fade-left" className="md:col-span-1 flex justify-center">
              <div className="relative w-64 h-64 rounded-full overflow-hidden gradient-border animate-pulse-shadow">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-violet-500 to-indigo-500 opacity-20"></div>
                <Image src="/DP.jpg?height=256&width=256" alt="Ajoy Kumar Sarker" fill className="object-cover" />
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-right" className="md:col-span-2">
              <Card className="overflow-hidden border-none shadow-xl bg-gradient-to-br from-background to-muted">
                <CardHeader>
                  <CardTitle className="text-2xl gradient-text font-heading">Ajoy Kumar Sarker</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-justify">
                    Hi, I’m Ajoy Kumar Sarker. I’m a curious mind and lifelong learner now starting my PhD in Aerospace Engineering at the University of Central Florida. I’m excited to work with Dr. Jihua Gou as I explore how advanced materials can shape the future of aerospace.
                  </p>
                  <p className="mb-4 text-justify">
                    My current research topics focus on high temperature materials and machine learning. I enjoy combining these fields to solve complex challenges in aerospace engineering.
                  </p>
                  <p className="mb-4 text-justify">
                    My journey began with a mechanical engineering degree where I discovered the joy of building meaningful things from smart cooling systems to bio-inspired robots. Over time my passion grew where robotics, materials science and innovative design meet.
                  </p>
                  <p className="mb-4 text-justify">
                    What drives me is solving real world problems with science, creativity and purpose. I enjoy working on ideas that blend engineering and imagination.
                  </p>
                  <p className="text-justify">
                    Outside the lab I have an artistic side and love photography especially portraits fine art and miniature photography. Capturing moments through my lens lets me see the world differently and balance my technical work with creativity.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>

          {/* Skills Section */}
          <ScrollReveal className="mb-16">
            <div className="relative p-8 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 gradient-accent opacity-90 -z-10"></div>
              <h2 className="text-2xl font-semibold mb-6 text-white font-heading">Skills & Expertise</h2>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="text-sm py-1.5 px-4 bg-white/20 backdrop-blur-sm text-white border-none hover:bg-white/30 transition-all duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Research Interest Section with horizontal scroll and buttons */}
          <ScrollReveal animation="scale" delay={100}>
            <div className="mb-8">
              <h2 className="text-2xl font-heading font-semibold mb-4 text-white flex items-center justify-between">
                Research Interest
                <div className="space-x-2">
                  <Button variant="outline" size="sm" onClick={scrollLeft} aria-label="Scroll Left">
                    &#8592;
                  </Button>
                  <Button variant="outline" size="sm" onClick={scrollRight} aria-label="Scroll Right">
                    &#8594;
                  </Button>
                </div>
              </h2>
              <div
                ref={scrollRef}
                className="flex space-x-6 overflow-x-auto scrollbar-hide scroll-smooth no-scrollbar px-2"
                style={{ scrollSnapType: "x mandatory" }}
              >
                {researchInterests.map(({ title, description, bgClass }) => (
                  <Card
                    key={title}
                    className={`flex-shrink-0 w-[48%] min-w-[320px] border-none shadow-md bg-gradient-to-br ${bgClass} text-white scroll-snap-align-start`}
                  >
                    <CardHeader>
                      <CardTitle className="text-lg font-semibold">{title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>{description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* CV Section */}
          <ScrollReveal className="mb-16">
            <div className="relative p-8 rounded-2xl overflow-hidden text-center">
              <div className="absolute inset-0 gradient-secondary opacity-90 -z-10"></div>
              <h2 className="text-2xl font-semibold mb-4 text-white font-heading">Download My CV</h2>
              <p className="text-white/80 mb-6">
                Interested in my full academic and professional background? Feel free to download my CV below.
              </p>
              <Button
                asChild
                className="bg-white text-background hover:bg-gray-100 font-semibold px-6 py-2 rounded-full shadow-lg transition duration-300"
              >
                <a href="/ajoy-kumar-sarker-cv.pdf" download>
                  Download CV
                </a>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <style jsx>{`
        /* Hide scrollbar for all browsers */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </>
  )
}
