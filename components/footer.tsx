'use client'

import Link from "next/link"
import { Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Curved top shape */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180 -translate-y-full z-0">
        <svg
          viewBox="0 0 1440 100"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[100px]"
          preserveAspectRatio="none"
        >
          <path
            d="M0,32 C480,120 960,-40 1440,48 L1440,0 L0,0 Z"
            fill="#2e1065"
          />
        </svg>
      </div>

      {/* Footer main content */}
      <div className="relative pt-12 pb-12 bg-gradient-to-br from-purple-950 via-violet-950 to-indigo-950 z-10">
        {/* Decorative blurred shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-purple-600/10 blur-3xl"></div>
          <div className="absolute top-40 right-20 w-40 h-40 rounded-full bg-indigo-600/10 blur-3xl"></div>
          <div className="absolute bottom-10 left-1/3 w-80 h-80 rounded-full bg-violet-600/10 blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-y-0 gap-x-16 mb-12">
            <motion.div
              className="md:col-span-5 space-y-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white font-heading">Ajoy Kumar Sarker</h3>
              <p className="text-white/80 max-w-md">
                Mechanical engineer passionate about robotics, materials, and design innovation.
              </p>
              <div className="flex space-x-4 mt-6">
                <Link
                  href="https://www.linkedin.com/in/your-linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 text-white hover:bg-white/20 transition-colors"
                  aria-label="Visit LinkedIn profile of Ajoy Kumar Sarker"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link
                  href="mailto:ajoy.sarker@example.com"
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 text-white hover:bg-white/20 transition-colors"
                  aria-label="Send email to Ajoy Kumar Sarker"
                >
                  <Mail className="h-5 w-5" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="md:col-span-3 md:col-start-9 text-left"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4 text-white font-heading">Quick Links</h4>
              <ul className="space-y-2">
                {[
                  { name: "Home", path: "/" },
                  { name: "About", path: "/about" },
                  { name: "Projects", path: "/creative-work" },
                  { name: "Photography", path: "/photography" },
                  { name: "Contact", path: "/contact" },
                ].map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.path}
                      className="text-white/70 hover:text-white transition-colors flex items-center gap-1 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-white/40 group-hover:bg-white transition-colors"></span>
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p className="text-white/60 text-sm mb-4 sm:mb-0">
              © {new Date().getFullYear()} Ajoy Kumar Sarker. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
