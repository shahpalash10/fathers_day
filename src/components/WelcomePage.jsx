"use client"

import { motion } from "motion/react"
import { BookOpen } from "lucide-react"

export default function WelcomePage({ onStartMusic }) {
    return (
        <section className="min-h-screen flex items-center justify-center px-4 py-8 relative">
            {/* Scrapbook page cover background decorations */}
            <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
                <div className="w-[90%] h-[90%] border-2 border-dashed border-accent-gold/40 rounded-3xl"></div>
            </div>

            <div className="text-center max-w-4xl mx-auto w-full relative z-10">
                {/* Floating illustrations / Emojis */}
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 15,
                        duration: 1,
                    }}
                    className="mb-6 sm:mb-8"
                >
                    <motion.div
                        className="text-7xl sm:text-9xl mb-2 filter drop-shadow-md select-none"
                        animate={{
                            y: [0, -10, 0],
                            rotate: [0, 1, -1, 0],
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        👨‍👦‍👦
                    </motion.div>
                </motion.div>

                {/* Handwritten Tag */}
                <motion.div
                    className="inline-block mb-3 sm:mb-4 px-4 py-1.5 bg-accent-gold/15 text-accent-terracotta rounded-full text-lg sm:text-xl font-handwritten font-semibold border border-accent-gold/30 rotate-[-1.5deg]"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    Happy Father's Day 2026
                </motion.div>

                <motion.h1
                    className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold mb-6 text-paper-text leading-tight"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
                >
                    To the Best Dad <br className="hidden sm:block" />
                    <span className="text-accent-terracotta relative">
                        in the World
                        <span className="absolute bottom-1 left-0 w-full h-1 bg-accent-gold/40 rounded-full"></span>
                    </span>
                </motion.h1>

                <motion.p
                    className="text-lg sm:text-xl md:text-2xl text-paper-text/80 mb-8 sm:mb-12 leading-relaxed font-sans font-light px-4 max-w-2xl mx-auto"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
                >
                    Thank you for being our hero, our guide, and our biggest supporter.
                    <br className="hidden sm:block" />
                    <span className="font-handwritten text-2xl sm:text-3xl text-accent-sage font-bold block mt-3">
                        We made this scrapbook to show you how much we love you!
                    </span>
                </motion.p>

                {/* Scrapbook Start button */}
                <motion.button
                    className="group bg-accent-terracotta hover:bg-accent-terracotta/90 text-white font-medium py-3 sm:py-4 px-6 sm:px-8 rounded-xl text-base sm:text-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2 sm:gap-3 mx-auto relative overflow-hidden border border-accent-terracotta/20"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={onStartMusic}
                >
                    <BookOpen className="w-5 h-5 relative z-10" />
                    <span className="relative z-10 font-medium">Open Our Scrapbook</span>
                </motion.button>

                {/* Hand-drawn decoration */}
                <motion.div
                    className="mt-8 sm:mt-12 text-3xl sm:text-4xl select-none"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                >
                    <motion.span
                        className="inline-block"
                        animate={{
                            scale: [1, 1.08, 1],
                            rotate: [0, 4, -4, 0],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                        }}
                    >
                        🎨✨❤️
                    </motion.span>
                </motion.div>
            </div>
        </section>
    )
}

