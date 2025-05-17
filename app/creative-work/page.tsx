"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Lightbulb, Award, Link2, BookOpen, Trophy, FlaskConical } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import ScrollReveal from "@/components/scroll-reveal"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function CreativeWorkPage() {
  const [activeTab, setActiveTab] = useState<"competitions" | "academic" | "research">("competitions")

  // Competitions Projects
  const competitionsProjects = [
    {
      title: "RENAISSANCE - Mars Rover",
      category: "Robotics & Space Exploration",
      description:
        "A Mars rover developed for the University Rover Challenge (URC)-2022, USA & European Rover Challenge (ERC)-2022, Poland. As part of Team Interplanetar from BUET, I contributed to the 3rd generation rover designed to solve various challenges including probing and collecting samples, maintenance task automation, and connecting plugs.",
      image: "/inter.jpg?height=300&width=600",
      technologies: ["Mechanical Design", "Chassis Manufacturing", "Modular Systems", "Robotics", "Space Technology"],
      achievements: [
        "8th position globally & 1st in Asia at European Rover Challenge (Onsite) 2022, Poland",
        "4th position globally in European Rover Challenge (Remote)-2022",
      ],
      contributions: [
        "Manufactured the main chassis of the rover",
        "Designed a modular science module (Probing & testing) for Science & Research Sub team",
        "Led the Body Structure & Modularity sub-team",
      ],
      links: {
        demo: "https://buetinterplanetar.com/",
        github: "https://www.youtube.com/@teaminterplanetar6940",
      },
    },
    {
      title: "NIRVEEK V1.0 - Mars Aerial System",
      category: "Aerospace Engineering",
      description:
        "A concept drone developed for the International Planetary Aerial Systems (IPAS) Challenge-2021. This 128x128x35 cm quadcopter with a mass of 5.1 kg was designed to fly in the Martian environment at altitudes up to 30 meters for 10 minutes continuously. Equipped with 360° vision and autonomous capabilities, it was designed to complete various missions on Mars.",
      image: "/placeholder.svg?height=300&width=600",
      technologies: [
        "Airfoil Design",
        "Xflr5 Simulation",
        "System Architecture",
        "Thermal Management",
        "Gas Compression",
      ],
      achievements: ["Secured 8th position globally", "Won Innovation Award for Gas Compression System"],
      contributions: [
        "Conducted Xflr5 simulation for creating airfoil data",
        "Designed the system architecture & algorithm",
      ],
      links: {
        demo: "https://buetinterplanetar.com/",
        github: "https://www.youtube.com/@teaminterplanetar6940",
      },
    },
  ]

  // Academic Projects
  const academicProjects = [
    {
      title: "HILSHA BOT - Bio-inspired Robotic Fish",
      category: "Biomimetic Robotics",
      description:
        "A bio-inspired robotic fish designed for deep-sea scientific exploration and surveillance of the ocean. This project was developed under the academic course 'Electro-mechanical System' with the goal of building a small robot that mimics biological nature. Our team successfully built the first soft robotic fish in Bangladesh.",
      image: "/placeholder.svg?height=300&width=600",
      technologies: ["SolidWorks", "Soft Fluidic Actuator", "Injection Molding", "Buoyancy Control", "Biomimetics"],
      contributions: [
        "Designed the main body of the fish",
        "Manufactured the soft fluidic actuator, especially the negative/female copy for injection molding",
        "Manufactured the spur gear system for Buoyancy Control Unit (BCU)",
        "Led the Media & Outreach Team",
      ],
    },
    {
      title: "Cooling Tower Nozzle Optimization",
      category: "Mechanical Engineering",
      description:
        "A variable water flow cooling tower designed to control water flow according to industrial needs, reducing input power loss. This academic project addressed the limitations of conventional cooling towers with fixed water flow and nozzle numbers by implementing a double sheet mechanism and feedback system for efficient water usage and conservation.",
      image: "/placeholder.svg?height=300&width=600",
      technologies: [
        "Water Conservation",
        "Flow Control",
        "Double Sheet Mechanism",
        "Feedback Systems",
        "Sustainable Design",
      ],
      contributions: ["Designed & manufactured the cooling tower & double sheet nozzle system"],
    },
  ]

  // Research Projects
  const researchProjects = [
    {
      title: "Analysis of Sintering Behavior and Thermal Properties of Tungsten-Copper Functionally Graded Materials",
      category: "Materials Science & Molecular Dynamics",
      description:
        "A comprehensive molecular dynamics study on the sintering behavior and thermal properties of Tungsten-Copper (W-Cu) Functionally Graded Materials (FGMs) fabricated using Spark Plasma Sintering (SPS). This research investigated how particle size affects the sintering process and resulting thermal properties, providing valuable insights for applications in aerospace, nuclear, and defense sectors.",
      image: "/md.png?height=300&width=600",
      technologies: [
        "Molecular Dynamics",
        "LAMMPS",
        "Functionally Graded Materials",
        "Spark Plasma Sintering",
        "Thermal Analysis",
      ],
      findings: [
        "Discovered that thermal conductivity increases with particle size due to more extensive copper networks",
        "Identified a two-step change in the gradient axis during sintering, driven by differing melting points",
        "Found that smaller particles (20Å and 25Å) reach equilibrium faster during sintering",
        "Observed significant amorphization of crystal structures due to inter-particle contacts",
      ],
      contributions: [
        "Developed a novel particle-by-particle grading approach to model FGMs more realistically",
        "Conducted systematic analysis of size-dependent effects on thermal properties",
        "Implemented Finnis-Sinclair potential for accurate interatomic interactions",
        "Analyzed thermal conductivity and expansion coefficients across different particle sizes",
      ],
      collaborators: ["M. Abrar Muhit", "Ajoy Kumar Sarker"],
      institution: "Department of Mechanical Engineering, Bangladesh University of Engineering and Technology",
      supervisor: "Dr. Md Afsar Ali, Professor",
      methodology: [
        "Created custom interatomic potential files for W-Cu systems",
        "Simulated spark plasma sintering process with five stages: equilibration, cold pressing, increasing pressure, dwell, and cooling",
        "Conducted uniaxial tensile testing to evaluate mechanical properties",
        "Measured thermal conductivity and expansion coefficients at various temperatures",
      ],
      results: {
        thermal: [
          "Thermal conductivity generally increased with particle size (except for 20Å particles)",
          "100Å particles showed highest thermal conductivity (548.967 W/mK)",
          "Thermal expansion coefficients varied with particle size and direction",
        ],
      },
    },
  ]

  return (
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

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 content-wrapper">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6 text-white font-heading">Projects & Research</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              A showcase of my engineering innovations and research contributions.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center mb-8 gap-2">
          <Button
            variant="ghost"
            className={cn(
              "flex items-center gap-2 rounded-full px-6",
              activeTab === "competitions" && "bg-primary text-white hover:bg-primary/90",
            )}
            onClick={() => setActiveTab("competitions")}
          >
            <Trophy className="h-4 w-4" />
            Competitions
          </Button>
          <Button
            variant="ghost"
            className={cn(
              "flex items-center gap-2 rounded-full px-6",
              activeTab === "academic" && "bg-primary text-white hover:bg-primary/90",
            )}
            onClick={() => setActiveTab("academic")}
          >
            <BookOpen className="h-4 w-4" />
            Academic
          </Button>
          <Button
            variant="ghost"
            className={cn(
              "flex items-center gap-2 rounded-full px-6",
              activeTab === "research" && "bg-primary text-white hover:bg-primary/90",
            )}
            onClick={() => setActiveTab("research")}
          >
            <FlaskConical className="h-4 w-4" />
            Research
          </Button>
        </div>

        {/* Competitions Projects */}
        {activeTab === "competitions" && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold gradient-text font-heading">Competition Projects</h2>
              <p className="text-muted-foreground mt-2">
                Projects developed for international engineering competitions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {competitionsProjects.map((project, index) => (
                <ScrollReveal key={index} animation="scale" delay={index * 100}>
                  <Card className="overflow-hidden flex flex-col h-full border-none shadow-xl">
                    <div className="relative h-48 w-full">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-xl font-heading">{project.title}</CardTitle>
                          <CardDescription>{project.category}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="mb-4 text-sm text-justify">{project.description}</p>

                      {project.achievements && project.achievements.length > 0 && (
                        <div className="mb-4">
                          <h3 className="text-sm font-semibold flex items-center gap-2 mb-2">
                            <Award className="h-4 w-4 text-yellow-500" />
                            Achievements
                          </h3>
                          <ul className="list-disc list-inside space-y-3 text-sm pl-1">
                            {project.achievements.map((achievement, i) => (
                              <li key={i}>{achievement}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div className="mb-4">
                        <h3 className="text-sm font-semibold flex items-center gap-2 mb-2">
                          <Lightbulb className="h-4 w-4" />
                          My Contributions
                        </h3>
                        <ul className="list-disc list-inside space-y-3 text-sm pl-1">
                          {project.contributions.map((contribution, i) => (
                            <li key={i}>{contribution}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-4">
                        <h3 className="text-sm font-semibold mb-2">Technologies Used</h3>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, i) => (
                            <Badge key={i} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between pt-4">
                      {project.links.demo !== "#" ? (
                        <Link
                          href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm flex items-center gap-1 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
                        >
                          <Link2 className="h-4 w-4" />
                          Project Website
                        </Link>
                      ) : (
                        <span className="text-sm text-slate-400">No website available</span>
                      )}

                      {project.links.github !== "#" ? (
                        <Link
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm flex items-center gap-1 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
                        >
                          <ExternalLink className="h-4 w-4" />
                          More Details
                        </Link>
                      ) : (
                        <span className="text-sm text-slate-400">No details link</span>
                      )}
                    </CardFooter>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        )}

        {/* Academic Projects */}
        {activeTab === "academic" && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold gradient-text font-heading">Academic Projects</h2>
              <p className="text-muted-foreground mt-2">
                Projects developed during academic coursework and university studies
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {academicProjects.map((project, index) => (
                <ScrollReveal key={index} animation="scale" delay={index * 100}>
                  <Card className="overflow-hidden flex flex-col h-full border-none shadow-xl">
                    <div className="relative h-48 w-full">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-xl font-heading">{project.title}</CardTitle>
                          <CardDescription>{project.category}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="mb-4 text-sm text-justify">{project.description}</p>

                      <div className="mb-4">
                        <h3 className="text-sm font-semibold flex items-center gap-2 mb-2">
                          <Lightbulb className="h-4 w-4" />
                          My Contributions
                        </h3>
                        <ul className="list-disc list-inside space-y-3 text-sm pl-1">
                          {project.contributions.map((contribution, i) => (
                            <li key={i}>{contribution}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-4">
                        <h3 className="text-sm font-semibold mb-2">Technologies Used</h3>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, i) => (
                            <Badge key={i} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        )}

        {/* Research Projects */}
        {activeTab === "research" && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold gradient-text font-heading">Research Work</h2>
              <p className="text-muted-foreground mt-2">Scientific research and academic investigations</p>
            </div>

            <div className="mb-16">
              {researchProjects.map((project, index) => (
                <ScrollReveal key={index} animation="fade" delay={index * 100}>
                  <Card className="overflow-hidden border-none shadow-xl mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="md:col-span-1">
                        <div className="relative h-48 md:h-full w-full">
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <div className="md:col-span-2 p-6">
                        <h3 className="text-2xl font-bold mb-2 font-heading">{project.title}</h3>
                        <p className="text-muted-foreground mb-4">{project.category}</p>
                        <p className="mb-6 text-justify">{project.description}</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="text-sm font-semibold flex items-center gap-2 mb-2">
                              <FlaskConical className="h-4 w-4 text-primary" />
                              Key Findings
                            </h4>
                            <ul className="list-disc list-inside space-y-3 text-sm pl-1">
                              {project.findings.map((finding, i) => (
                                <li key={i}>{finding}</li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="text-sm font-semibold flex items-center gap-2 mb-2">
                              <Lightbulb className="h-4 w-4" />
                              My Contributions
                            </h4>
                            <ul className="list-disc list-inside space-y-3 text-sm pl-1">
                              {project.contributions.map((contribution, i) => (
                                <li key={i}>{contribution}</li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="mt-6">
                          <h4 className="text-sm font-semibold mb-2">Research Methodology</h4>
                          <ul className="list-disc list-inside space-y-3 text-sm pl-1">
                            {project.methodology.map((method, i) => (
                              <li key={i}>{method}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="mt-6">
                          <h4 className="text-sm font-semibold mb-2">Thermal Properties</h4>
                          <ul className="list-disc list-inside space-y-3 text-sm pl-1">
                            {project.results.thermal.map((result, i) => (
                              <li key={i}>{result}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="mt-6">
                          <h4 className="text-sm font-semibold mb-2">Technologies & Methods</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, i) => (
                              <Badge key={i} variant="outline" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="mt-6 pt-4 flex flex-wrap justify-between items-center gap-4">
                          <div>
                            <p className="text-sm text-muted-foreground">
                              <span className="font-medium">Collaborators:</span> {project.collaborators.join(", ")}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              <span className="font-medium">Supervisor:</span> {project.supervisor}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              <span className="font-medium">Institution:</span> {project.institution}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
