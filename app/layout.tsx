import type React from "react"
import type { Metadata } from "next"
import { Poppins, Raleway } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import Script from "next/script"

// Font setup
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
})

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-raleway",
})

export const metadata: Metadata = {
  title: "Ajoy Kumar Sarker - Portfolio",
  description: "Personal portfolio of Ajoy Kumar Sarker, Mechanical Engineer & Researcher",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} ${raleway.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>

        {/* Animation library for text effects */}
        <Script src="https://unpkg.com/split-type" />
        <Script id="text-animation">
          {`
            document.addEventListener('DOMContentLoaded', function() {
              // Only run if SplitType is loaded
              if (typeof SplitType !== 'undefined') {
                // Initialize text animations
                const heroText = document.querySelector('.hero-title');
                const heroSubtitle = document.querySelector('.hero-subtitle');
                
                if (heroText) {
                  const heroSplit = new SplitType(heroText, { types: 'chars' });
                  const chars = heroSplit.chars;
                  
                  for (let i = 0; i < chars.length; i++) {
                    chars[i].style.animationDelay = (i * 0.05) + 's';
                  }
                }
                
                if (heroSubtitle) {
                  const subtitleSplit = new SplitType(heroSubtitle, { types: 'words' });
                  const words = subtitleSplit.words;
                  
                  for (let i = 0; i < words.length; i++) {
                    words[i].style.animationDelay = (i * 0.08 + 0.5) + 's';
                  }
                }
              }
            });
          `}
        </Script>
      </body>
    </html>
  )
}
