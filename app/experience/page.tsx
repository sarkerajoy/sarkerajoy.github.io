"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function ExperiencePage() {
  const [activeTab, setActiveTab] = useState<"technical" | "leadership">("technical")

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <div className="min-h-screen bg-[#0a1929] text-white">
      <div className="container mx-auto px-4 py-20">
        {/* Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold tracking-wider">EXPERIENCE</h1>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-16 space-x-6">
          <button
            onClick={() => setActiveTab("technical")}
            className={`px-6 py-2 font-semibold text-lg rounded-md border-2 transition-colors
              ${
                activeTab === "technical"
                  ? "border-amber-400 text-amber-400"
                  : "border-white/30 text-white/70 hover:text-amber-400 hover:border-amber-400"
              }`}
          >
            Technical
          </button>

          <button
            onClick={() => setActiveTab("leadership")}
            className={`px-6 py-2 font-semibold text-lg rounded-md border-2 transition-colors
              ${
                activeTab === "leadership"
                  ? "border-purple-400 text-purple-400"
                  : "border-white/30 text-white/70 hover:text-purple-400 hover:border-purple-400"
              }`}
          >
            Leadership
          </button>
        </div>

        {/* Content Section */}
        <motion.div
          key={activeTab} // Animate on tab change
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-0"
        >
          {activeTab === "technical" && (
            <>
              {/* Research Assistant (Current) */}
              <motion.div
                className="p-8 border-r border-white/20 relative overflow-hidden group"
                variants={fadeIn}
                whileHover={{
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  transition: { duration: 0.3 },
                }}
              >
                <motion.div
                  className="absolute top-0 left-0 w-1 h-0 bg-amber-400"
                  initial={{ height: 0 }}
                  whileInView={{ height: "100%" }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                />

                <h2 className="text-2xl font-bold mb-2">Research Assistant</h2>
                <p className="text-white/80 mb-1 text-justify">
                  Composite Materials and Structures Laboratory, UCF
                </p>
                <p className="text-white/60 text-sm mb-4 text-justify">May 2024 - Present</p>

                <div className="space-y-4 mb-6">
                  <p className="text-white/80 text-justify">
                    The CMSL focuses on advanced composite materials research, structural mechanics, and multi-scale
                    material behavior for aerospace and mechanical applications.
                  </p>
                  <p className="text-white/80 text-justify">
                    Conducting experimental and computational research on materials characterization and mechanical
                    testing.
                  </p>
                </div>

                <p className="text-white/70 italic text-justify">
                  Lab:{" "}
                  <a
                    href="https://mae.ucf.edu/CMSL/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-400 underline"
                  >
                    CMSL
                  </a>
                </p>
                <p className="text-white/70 italic text-justify">
                  Mentor:{" "}
                  <a
                    href="https://mae.ucf.edu/faculty/jihua-gou/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-400 underline"
                  >
                    Jihua "Jan" Gou
                  </a>
                </p>
              </motion.div>

              {/* Sub Team Leader */}
              <motion.div
                className="p-8 border-r border-white/20 relative overflow-hidden group"
                variants={fadeIn}
                whileHover={{
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  transition: { duration: 0.3 },
                }}
              >
                <motion.div
                  className="absolute top-0 left-0 w-1 h-0 bg-amber-400"
                  initial={{ height: 0 }}
                  whileInView={{ height: "100%" }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                />

                <h2 className="text-2xl font-bold mb-2">Sub Team Leader</h2>
                <p className="text-white/80 mb-1 text-justify">Team Interplanetar BUET</p>
                <p className="text-white/60 text-sm mb-6 text-justify">Feb 2021 - Dec 2023</p>

                <div className="space-y-4">
                  <p className="text-white/80 text-justify">
                    Design & Development of a new suspension system for better modularity.
                  </p>
                  <p className="text-white/80 text-justify">Attended ERC 2022 onsite in Kielce, Poland.</p>
                </div>
              </motion.div>

              {/* SolidWorks Instructor */}
              <motion.div
                className="p-8 border-r border-white/20 relative overflow-hidden group"
                variants={fadeIn}
                whileHover={{
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  transition: { duration: 0.3 },
                }}
              >
                <motion.div
                  className="absolute top-0 left-0 w-1 h-0 bg-purple-400"
                  initial={{ height: 0 }}
                  whileInView={{ height: "100%" }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  viewport={{ once: true }}
                />

                <h2 className="text-2xl font-bold mb-2">SolidWorks Instructor</h2>
                <p className="text-white/80 mb-1 text-justify">BAC Skill Development Program</p>
                <p className="text-white/60 text-sm mb-6 text-justify">June 2021 - Jan 2023</p>

                <div className="space-y-4">
                  <p className="text-white/80 text-justify">Mentored 200+ students on SolidWorks from beginner to Pro.</p>
                  <p className="text-white/80 text-justify">Judge of BAC Autofest 2024.</p>
                </div>
              </motion.div>

              {/* Industrial Trainee */}
              <motion.div
                className="p-8 relative overflow-hidden group"
                variants={fadeIn}
                whileHover={{
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  transition: { duration: 0.3 },
                }}
              >
                <motion.div
                  className="absolute top-0 left-0 w-1 h-0 bg-indigo-400"
                  initial={{ height: 0 }}
                  whileInView={{ height: "100%" }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                  viewport={{ once: true }}
                />

                <h2 className="text-2xl font-bold mb-2">Industrial Trainee</h2>
                <p className="text-white/80 mb-1 text-justify">Ashuganj Power Station Company Ltd (APSCL)</p>
                <p className="text-white/60 text-sm mb-6 text-justify">October 2023 - Nov 2023</p>

                <div className="space-y-4">
                  <p className="text-white/80 text-justify">Assigned Department: Mechanical Maintenance.</p>
                </div>
              </motion.div>
            </>
          )}

          {activeTab === "leadership" && (
            <>
              {/* General Secretary */}
              <motion.div
                className="p-8 border-r border-white/20 relative overflow-hidden group"
                variants={fadeIn}
                whileHover={{
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  transition: { duration: 0.3 },
                }}
              >
                <motion.div
                  className="absolute top-0 left-0 w-1 h-0 bg-purple-400"
                  initial={{ height: 0 }}
                  whileInView={{ height: "100%" }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                />

                <h2 className="text-2xl font-bold mb-2">General Secretary</h2>
                <p className="text-white/80 mb-1">BUET Film Society</p>
                <p className="text-white/60 text-sm mb-6">January 2023 - August 2024</p>
              </motion.div>

              {/* Joint Secretary */}
              <motion.div
                className="p-8 border-r border-white/20 relative overflow-hidden group"
                variants={fadeIn}
                whileHover={{
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  transition: { duration: 0.3 },
                }}
              >
                <motion.div
                  className="absolute top-0 left-0 w-1 h-0 bg-purple-400"
                  initial={{ height: 0 }}
                  whileInView={{ height: "100%" }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                />

                <h2 className="text-2xl font-bold mb-2">Joint Secretary</h2>
                <p className="text-white/80 mb-1">BUET Automobile Club</p>
                <p className="text-white/60 text-sm mb-6">July 2023 - September 2024</p>
              </motion.div>

              {/* Association Representative */}
              <motion.div
                className="p-8 relative overflow-hidden group"
                variants={fadeIn}
                whileHover={{
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  transition: { duration: 0.3 },
                }}
              >
                <motion.div
                  className="absolute top-0 left-0 w-1 h-0 bg-purple-400"
                  initial={{ height: 0 }}
                  whileInView={{ height: "100%" }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  viewport={{ once: true }}
                />

                <h2 className="text-2xl font-bold mb-2">Association Representative</h2>
                <p className="text-white/80 mb-1">Mechanical Engineering Association, BUET</p>
                <p className="text-white/60 text-sm mb-6">February 2020 - December 2022</p>
              </motion.div>
            </>
          )}
        </motion.div>
      </div>
    </div>
  )
}
