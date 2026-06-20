"use client"

import { motion } from "motion/react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Navigation({ currentPage, totalPages, onNext, onPrev, onGoTo }) {
    const pageNames = ["Welcome", "Memories", "Letter", "Celebration"]

    return (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
            <motion.div
                className="flex items-center gap-3 sm:gap-4 bg-white/90 backdrop-blur-md rounded-full px-4 sm:px-5 py-2 border border-stone-200 shadow-lg"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
            >
                {/* Previous button */}
                <motion.button
                    onClick={onPrev}
                    disabled={currentPage === 0}
                    className="p-1.5 rounded-full bg-stone-100 hover:bg-stone-200 disabled:opacity-30 disabled:hover:bg-stone-100 disabled:cursor-not-allowed transition-all duration-300 text-stone-700 border border-stone-200/50"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.button>

                {/* Page indicators */}
                <div className="flex items-center gap-1.5 sm:gap-2">
                    {Array.from({ length: totalPages }, (_, i) => (
                        <motion.button
                            key={i}
                            onClick={() => onGoTo(i)}
                            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === currentPage
                                    ? "bg-accent-terracotta scale-125"
                                    : "bg-stone-300 hover:bg-stone-400"
                                }`}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                        />
                    ))}
                </div>

                {/* Page name */}
                <div className="text-stone-700 text-xs sm:text-sm font-serif font-medium min-w-[70px] sm:min-w-[90px] text-center select-none">
                    {pageNames[currentPage]}
                </div>

                {/* Next button */}
                <motion.button
                    onClick={onNext}
                    disabled={currentPage === totalPages - 1}
                    className="p-1.5 rounded-full bg-stone-100 hover:bg-stone-200 disabled:opacity-30 disabled:hover:bg-stone-100 disabled:cursor-not-allowed transition-all duration-300 text-stone-700 border border-stone-200/50"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.button>
            </motion.div>
        </div>
    )
}

