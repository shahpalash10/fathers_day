"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import WelcomePage from "@/components/WelcomePage"
import PhotoGallery from "@/components/PhotoGallery"
import Letter from "@/components/Letter"
import FinalPage from "@/components/FinalPage"
import MusicControls from "@/components/MusicControls"
import Navigation from "@/components/Navigation"

const pages = [
  { id: "welcome", component: WelcomePage },
  { id: "photos", component: PhotoGallery },
  { id: "letter", component: Letter },
  { id: "final", component: FinalPage },
]



export default function HomePage() {
  const [currentPage, setCurrentPage] = useState(0)
  const [direction, setDirection] = useState(0)
  const [musicStarted, setMusicStarted] = useState(false)
  const [screenWidth, setScreenWidth] = useState(1000);

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setDirection(1)
      setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 0) {
      setDirection(-1)
      setCurrentPage(currentPage - 1)
    }
  }

  const goToPage = (index) => {
    setDirection(index > currentPage ? 1 : -1)
    setCurrentPage(index)
  }

  const startMusic = () => {
    setMusicStarted(true)
    nextPage()
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreenWidth(window.innerWidth);
    }
  }, []);

  const CurrentComponent = pages[currentPage].component

  return (
    <div className="min-h-screen bg-paper-bg text-paper-text overflow-hidden relative font-sans">
      {/* Warm watercolor background blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-accent-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-20 w-96 h-96 bg-accent-sage/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-accent-terracotta/5 rounded-full blur-3xl"></div>
      </div>

      {/* Background music controls */}
      {musicStarted && currentPage > 0 && <MusicControls />}

      {currentPage > 0 && (
        <Navigation
          currentPage={currentPage}
          totalPages={pages.length}
          onNext={nextPage}
          onPrev={prevPage}
          onGoTo={goToPage}
        />
      )}

      <main className="relative z-10 min-h-screen">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentPage}
            custom={direction}
            initial={{
              opacity: 0,
              x: direction > 0 ? 150 : -150,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              x: direction > 0 ? -150 : 150,
            }}
            transition={{
              type: "spring",
              stiffness: 240,
              damping: 22,
              duration: 0.4,
            }}
            className="min-h-screen"
          >
            <CurrentComponent onStartMusic={startMusic} musicStarted={musicStarted} />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Handcrafted sign off watermark */}
      <motion.div
        initial={{ x: 40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 1,
        }}
        className="fixed bottom-4 right-4 text-sm text-stone-400 pointer-events-none select-none z-50 font-handwritten font-bold">
        Handcrafted with ❤️ by Palash & Manthan
      </motion.div>
    </div>
  )
}

