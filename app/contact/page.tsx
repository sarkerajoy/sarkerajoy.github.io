"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Facebook, Linkedin, Mail, MapPin, Phone, Instagram } from "lucide-react"
import Link from "next/link"
import ScrollReveal from "@/components/scroll-reveal"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

  return (
    <div className="min-h-screen pt-16 pb-10 bg-background">
      {/* Hero section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 gradient-accent opacity-90 -z-10"></div>

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
            <h1 className="text-4xl font-bold mb-6 text-white font-heading">Contact Me</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Have a question or interested in collaboration? Feel free to reach out!
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <ScrollReveal animation="fade-left" className="lg:col-span-2">
            <Card className="border-none shadow-xl overflow-hidden bg-gradient-to-br from-background to-muted">
              <CardHeader>
                <CardTitle className="gradient-text text-2xl font-heading">Get in Touch</CardTitle>
                <CardDescription className="text-lg">
                  Fill out the form below and I'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300 p-4 rounded-md mb-4 animate-fade-in">
                    Thank you for your message! I'll respond as soon as possible.
                  </div>
                ) : null}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="border-primary/20 focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="border-primary/20 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="What is this regarding?"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="border-primary/20 focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message..."
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="border-primary/20 focus:border-primary"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full sm:w-auto gradient-primary text-white border-none hover:opacity-90 transition-opacity"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </ScrollReveal>

          <ScrollReveal animation="fade-right" delay={200}>
            <div className="space-y-6">
              <Card className="border-none shadow-xl overflow-hidden bg-gradient-to-br from-background to-muted">
                <CardHeader>
                  <CardTitle className="gradient-text text-xl font-heading">Contact Information</CardTitle>
                  <CardDescription>Here are the ways you can reach me directly.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-primary/10 text-primary">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium">Email</h3>
                      <a
                        href="mailto:ajoy.sarker@example.com"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        ajoyme18@gmail.com
                      </a>
                    </div>
                  </div>

                  

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-primary/10 text-primary">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium">Location</h3>
                      <p className="text-sm text-muted-foreground">Orlando, Florida</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <h3 className="text-sm font-medium mb-4">Connect with me</h3>
                    <div className="flex space-x-4">
                      {[
                        {
                          icon: <Facebook className="h-5 w-5" />,
                          href: "https://www.facebook.com/ajoy.sarker.BUET",
                          label: "GitHub",
                        },
                        { icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/in/ajoykumarsarker/", label: "LinkedIn" },
                        { icon: <Instagram className="h-5 w-5" />, href: "https://www.instagram.com/glubtabis_wepal/", label: "Twitter" },
                      ].map((social, index) => (
                        <Link
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full flex items-center justify-center bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all duration-300"
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          {social.icon}
                          <span className="sr-only">{social.label}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  )
}
