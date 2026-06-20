"use client"

import { motion } from "motion/react"
import { useEffect } from "react"
import confetti from "canvas-confetti"

export default function FinalPage() {
  // Scrapbook-themed warm color palette for confetti
  const scrapbookColors = ["#cc7a67", "#8fa88b", "#cfa864", "#f4e0c4", "#bda485", "#efd2b2"]

  // Auto-trigger confetti when page loads
  useEffect(() => {
    const timer = setTimeout(() => {
      const duration = 3000
      const animationEnd = Date.now() + duration
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 50 }

      function randomInRange(min, max) {
        return Math.random() * (max - min) + min
      }

      const interval = setInterval(() => {
        const timeLeft = animationEnd - Date.now()

        if (timeLeft <= 0) {
          return clearInterval(interval)
        }

        const particleCount = 50 * (timeLeft / duration)

        // Create confetti from multiple points
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
          colors: scrapbookColors,
        })
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
          colors: scrapbookColors,
        })
      }, 250)

      return () => clearInterval(interval)
    }, 800)

    return () => clearTimeout(timer)
  }, [])

  const handleCelebrate = () => {
    // Manual confetti trigger
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: scrapbookColors,
    })
  }

  return (
    <section className="min-h-screen flex items-center justify-center py-8 sm:py-12 px-4 relative">
      {/* Dashed scrapbook border */}
      <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
        <div className="w-[90%] h-[90%] border-2 border-dashed border-accent-gold/40 rounded-3xl"></div>
      </div>

      <motion.div
        className="text-center max-w-3xl mx-auto w-full relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Styled note page card for a clean, personal look */}
        <motion.div
          className="bg-[#fdfcf9] border border-stone-200 rounded-xl p-8 sm:p-12 polaroid-shadow relative mx-4 sm:mx-0 overflow-visible"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {/* Washi tape at the top center */}
          <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 w-32 h-7 bg-accent-gold/25 border-l border-r border-accent-gold/20 backdrop-blur-[0.5px] rotate-[1.5deg] z-20 shadow-sm pointer-events-none"></div>

          <motion.h2
            className="text-4xl sm:text-6xl font-serif font-bold mb-6 text-accent-terracotta leading-tight"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Happy Father's Day!
          </motion.h2>

          <motion.p
            className="text-xl sm:text-2xl text-stone-700 mb-8 font-serif leading-relaxed px-4 max-w-xl mx-auto"
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            We are so incredibly lucky to have you as our father. Thank you for always being there with endless support, patience, and love.
          </motion.p>

          <motion.div
            className="text-center mt-10"
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <p className="text-stone-500 font-serif italic text-base sm:text-lg">With all our love,</p>
            <p className="text-accent-sage font-handwritten text-4xl font-bold mt-2">
              Palash and Manthan
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

