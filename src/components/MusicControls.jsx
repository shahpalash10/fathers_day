"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "motion/react"
import { Volume2, VolumeX } from "lucide-react"

export default function MusicControls() {
    const [isPlaying, setIsPlaying] = useState(true)
    const audioRef = useRef(null)

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = 0.4; // Adjust the song volume here
            if (isPlaying) {
                audioRef.current.play().catch(console.error)
            } else {
                audioRef.current.pause()
            }
        }
    }, [isPlaying])

    const toggleMusic = () => {
        setIsPlaying(!isPlaying);
    }

    return (
        <motion.div
            className="fixed top-4 sm:top-6 right-4 sm:right-6 z-50"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
        >
            <motion.button
                onClick={toggleMusic}
                className="bg-white/90 backdrop-blur-md text-stone-700 hover:bg-stone-100 p-3 sm:p-3.5 rounded-full shadow-md border border-stone-200 transition-all duration-300"
                title={isPlaying ? "Pause Music" : "Play Music"}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                {/* Change the audio src accordingly */}
                <audio ref={audioRef} src="/bg.mp3" loop preload="auto" />
                <div className="flex items-center justify-center">
                    {isPlaying ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
                </div>
            </motion.button>
        </motion.div>
    )
}