"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Aperture, Maximize2 } from "lucide-react"
import ScrollReveal from "@/components/scroll-reveal"

// Animation component for camera shutter effect
const CameraShutterAnimation = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: [0, 1.2, 1],
          opacity: [0, 1, 1],
        }}
        transition={{
          duration: 1.5,
          times: [0, 0.6, 1],
          ease: "easeInOut",
        }}
        className="w-32 h-32 md:w-48 md:h-48 relative"
      >
        <Aperture className="w-full h-full text-white" />
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <div className="w-4 h-4 bg-white rounded-full" />
        </motion.div>
      </motion.div>
    </div>
  )
}

// Photo modal component
const PhotoModal = ({ photo, onClose }: { photo: any; onClose: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 25 }}
        className="relative max-w-5xl max-h-[90vh] overflow-hidden rounded-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-full">
          <Image
            src={photo.url_l || photo.url_m}
            alt={photo.title}
            width={photo.width_l || photo.width_m}
            height={photo.height_l || photo.height_m}
            className="object-contain max-h-[80vh]"
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 bg-black/50 text-white hover:bg-black/70"
            onClick={onClose}
          >
            <Maximize2 className="h-5 w-5" />
          </Button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
          <h3 className="text-white text-lg font-medium">{photo.title}</h3>
          {photo.description && <p className="text-white/80 text-sm mt-1">{photo.description._content}</p>}
        </div>
      </motion.div>
    </motion.div>
  )
}

// Main component
export default function PhotographyPage() {
  const [photos, setPhotos] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedPhoto, setSelectedPhoto] = useState<any | null>(null)
  const [animationComplete, setAnimationComplete] = useState(false)

  // Ref for the intro animation
  const introRef = useRef<HTMLDivElement>(null)

  // Fetch photos from Flickr
  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        // In a real implementation, you would use the Flickr API
        // For now, we'll simulate the response with placeholder images
        const mockPhotos = Array.from({ length: 12 }, (_, i) => ({
          id: `photo-${i}`,
          title: `Creative Photo ${i + 1}`,
          url_m: `/placeholder.svg?height=400&width=600`,
          url_l: `/placeholder.svg?height=800&width=1200`,
          width_m: 600,
          height_m: 400,
          width_l: 1200,
          height_l: 800,
          description: { _content: "A beautiful creative photograph showcasing artistic vision." },
        }))

        setTimeout(() => {
          setPhotos(mockPhotos)
          setLoading(false)
        }, 2000) // Simulate loading time
      } catch (err) {
        setError("Failed to load photos. Please try again later.")
        setLoading(false)
      }
    }

    fetchPhotos()
  }, [])

  // Handle animation completion
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen pt-16 pb-10 bg-background">
      {/* Intro animation */}
      <AnimatePresence>
        {!animationComplete && (
          <motion.div
            ref={introRef}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black"
            exit={{
              opacity: 0,
              transition: { duration: 0.8, ease: "easeInOut" },
            }}
          >
            <CameraShutterAnimation />
            <motion.div
              className="absolute bottom-10 text-center text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-2">Photography</h2>
              <p className="text-white/80">Capturing moments through the lens</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-purple-900 opacity-90 -z-10"></div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute inset-0"
          >
            <div className="absolute top-10 left-10 w-40 h-40 rounded-full border-4 border-white/20 opacity-30"></div>
            <div className="absolute bottom-20 right-20 w-60 h-60 rounded-full border-4 border-white/20 opacity-30"></div>
            <div className="absolute top-1/3 right-1/4 w-20 h-20 rounded-full border-2 border-white/20 opacity-30"></div>
          </motion.div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 content-wrapper">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: animationComplete ? 0 : 3 }}
          >
            <h1 className="text-4xl font-bold mb-6 text-white font-heading">Photography</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Exploring the world through creative lenses and artistic vision
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {/* Photo gallery */}
        <div className="mb-12">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-20">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="mb-4"
              >
                <Aperture className="h-12 w-12 text-primary" />
              </motion.div>
              <p className="text-muted-foreground">Loading your creative photographs...</p>
            </div>
          ) : error ? (
            <div className="text-center py-20">
              <p className="text-destructive mb-4">{error}</p>
              <Button variant="outline" onClick={() => window.location.reload()}>
                Try Again
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {photos.map((photo, index) => (
                <ScrollReveal key={photo.id} animation="scale" delay={index * 100} className="h-full">
                  <Card
                    className="overflow-hidden border-none shadow-xl h-full cursor-pointer group"
                    onClick={() => setSelectedPhoto(photo)}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={photo.url_m || "/placeholder.svg"}
                        alt={photo.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4">
                          <h3 className="text-lg font-medium text-white">{photo.title}</h3>
                        </div>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button variant="ghost" size="icon" className="bg-black/50 text-white hover:bg-black/70">
                          <Maximize2 className="h-5 w-5" />
                        </Button>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-medium truncate">{photo.title}</h3>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>

        {/* Artist statement */}
        <ScrollReveal animation="fade" className="mb-16">
          <Card className="overflow-hidden border-none shadow-xl bg-gradient-to-br from-background to-muted">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 gradient-text font-heading">Artist Statement</h2>
              <p className="text-justify">
                Explore my world through the lens. Each photograph is a blend of passion and artistry, capturing moments
                that ​inspire and tell unique stories. Dive in and experience the visual journey.
              </p>
            </CardContent>
          </Card>
        </ScrollReveal>

        {/* Photography platforms */}
        <ScrollReveal animation="fade" className="text-center mb-16">
          <h3 className="text-lg font-medium mb-4">Find my work on</h3>
          <div className="flex items-center justify-center gap-8">
            <Link
              href="https://www.flickr.com/photos/194343679@N02/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 group"
            >
              <div className="w-12 h-12 rounded-full bg-[#0063DC] flex items-center justify-center transition-transform group-hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <circle cx="8" cy="12" r="4" fill="#0063DC" />
                  <circle cx="16" cy="12" r="4" fill="#FF0084" />
                </svg>
              </div>
              <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">Flickr</span>
            </Link>

            <Link href="#" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 group">
              <div className="w-12 h-12 rounded-full bg-[#34bf49] flex items-center justify-center transition-transform group-hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <path d="M6.5 7h11" />
                  <path d="M9 11h6" />
                  <path d="M11 15h2" />
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                </svg>
              </div>
              <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">500px</span>
            </Link>
          </div>
        </ScrollReveal>
      </div>

      {/* Photo modal */}
      <AnimatePresence>
        {selectedPhoto && <PhotoModal photo={selectedPhoto} onClose={() => setSelectedPhoto(null)} />}
      </AnimatePresence>
    </div>
  )
}
