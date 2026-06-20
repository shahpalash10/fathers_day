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
      <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
        <div className="w-[90%] h-[90%] border-2 border-dashed border-accent-gold/40 rounded-3xl"></div>
      </div>

      <motion.div
        className="text-center max-w-4xl mx-auto w-full relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="text-4xl sm:text-6xl font-serif font-bold mb-6 text-accent-terracotta leading-tight"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Happy Father's Day!
        </motion.h2>

        <motion.div
          className="text-5xl sm:text-6xl mb-6 sm:mb-8 select-none"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <motion.span
            animate={{
              rotate: [0, 6, -6, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="inline-block"
          >
            🎉❤️💐
          </motion.span>
        </motion.div>

        <motion.p
          className="text-xl sm:text-2xl md:text-3xl text-stone-700 mb-6 font-serif font-normal px-4 max-w-2xl mx-auto"
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          You are the best dad in the world, and we're so lucky to be your sons.
        </motion.p>

        <motion.p
          className="text-2xl sm:text-3xl text-accent-terracotta mb-2 font-handwritten font-bold px-4"
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          With all our love and gratitude!
        </motion.p>

        <motion.p
          className="text-lg sm:text-xl text-accent-sage mb-8 font-serif italic px-4"
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          - Palash and Manthan
        </motion.p>

        {/* Celebration button */}
        <motion.button
          className="bg-accent-sage hover:bg-accent-sage/90 text-white font-medium py-3 sm:py-4 px-6 sm:px-8 rounded-xl text-base sm:text-lg shadow-md hover:shadow-lg transition-all duration-300 mb-10 border border-accent-sage/20"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleCelebrate}
        >
          Celebrate More! 🎊
        </motion.button>

        {/* Thank you message styled as a scrapbook pocket/note */}
        <motion.div
          className="p-6 sm:p-8 bg-accent-gold/10 rounded-2xl border border-accent-gold/30 mx-4 sm:mx-0 max-w-2xl mx-auto relative shadow-sm"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <div className="absolute -top-3 left-10 w-20 h-6 bg-accent-gold/20 backdrop-blur-[0.5px] border-l border-r border-accent-gold/15 rotate-[-5deg] z-20 pointer-events-none"></div>
          <p className="text-base sm:text-lg text-stone-700 font-serif leading-relaxed">
            Thank you for being the amazing father you are. Your love, guidance, and support mean everything to us.
            <br />
            <span className="text-accent-terracotta font-handwritten text-3xl font-bold block mt-2">Happy Father's Day, Dad!</span>
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}

