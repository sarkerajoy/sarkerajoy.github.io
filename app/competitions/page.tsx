"use client"

import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import Image from "next/image"

export default function CompetitionsPage() {
  const controls1 = useAnimation()
  const controls2 = useAnimation()
  const ref1 = useRef(null)
  const ref2 = useRef(null)
  const isInView1 = useInView(ref1, { once: true })
  const isInView2 = useInView(ref2, { once: true })

  useEffect(() => {
    if (isInView1) controls1.start("visible")
    if (isInView2) controls2.start("visible")
  }, [isInView1, isInView2, controls1, controls2])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  }

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <div className="min-h-screen bg-[#0a1929] text-white pt-16 pb-20 relative overflow-hidden">
      {/* Layered Starfields for Parallax */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 animate-parallax-slow opacity-10">
          <Image src="/stars-bg.jpg" alt="Stars 1" fill className="object-cover" />
        </div>
        <div className="absolute inset-0 animate-parallax-fast opacity-20">
          <Image src="/stars-bg.jpg" alt="Stars 2" fill className="object-cover" />
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Glowing Title */}
        <motion.h1
          className="text-4xl font-bold mb-16 text-center text-white drop-shadow-[0_0_20px_#00ffff] animate-pulse-slow"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Competitions I have participated
        </motion.h1>

        {/* European Rover Challenge */}
        <motion.div ref={ref1} variants={containerVariants} initial="hidden" animate={controls1} className="mb-32">
          <motion.div variants={itemVariants} className="mb-2 text-center">
            <span className="text-amber-400 font-semibold text-lg tracking-widest animate-fade-glow">8th position</span>
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-2xl font-bold mb-8 text-amber-400 text-center animate-pulse-fast drop-shadow-[0_0_10px_#facc15]"
          >
            European Rover Challenge, 2022
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div variants={itemVariants} className="relative h-64 md:h-80 rounded-lg overflow-hidden animate-float-slow">
              <Image
                src="/erc.jpeg"
                alt="European Rover Challenge"
                fill
                className="object-cover object-bottom"
              />
            </motion.div>

            <motion.ul variants={containerVariants} className="space-y-4 text-lg">
              {[
                "More than 64 teams around the world participated in this competition",
                "19 teams participated in the final onsite round",
                "We completed different tasks given by the jury",
                "Our team achieved 8th position globally",
                "Besides, 4th position in Remote Edition",
              ].map((text, idx) => (
                <motion.li key={idx} variants={itemVariants} className="flex items-start gap-3">
                  <span className="text-amber-400 mr-2">•</span>
                  <span>{text}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.div>

        {/* IPAS */}
        <motion.div ref={ref2} variants={containerVariants} initial="hidden" animate={controls2}>
          <motion.div variants={itemVariants} className="mb-2 text-center">
            <span className="text-amber-400 font-semibold text-lg tracking-widest animate-fade-glow">Innovation Award</span>
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-2xl font-bold mb-8 text-amber-400 text-center animate-pulse-fast drop-shadow-[0_0_10px_#facc15]"
          >
            International Planetary Ariel System, 2021
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div variants={itemVariants} className="relative h-64 md:h-80 rounded-lg overflow-hidden animate-float-slow">
              <Image
                src="/ipas.jpeg"
                alt="International Planetary Ariel System"
                fill
                className="object-cover object-bottom"
              />
            </motion.div>

            <motion.ul variants={containerVariants} className="space-y-4 text-lg">
              {[
                "More than 100 teams around the world participated",
                "Received Innovation Award for Gas Compression System",
                "Designed a concept drone for Mars environment",
              ].map((text, idx) => (
                <motion.li key={idx} variants={itemVariants} className="flex items-start gap-3">
                  <span className="text-amber-400 mr-2">•</span>
                  <span>{text}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
