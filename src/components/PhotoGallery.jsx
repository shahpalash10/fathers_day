"use client"

import { motion } from "motion/react"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCards, Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/effect-cards"
import "swiper/css/pagination"

export default function PhotoGallery() {
    const photos = [
        {
            src: "/fd1.jpeg",
            caption: "Exploring new places together. Always ready for the next adventure with you!",
        },
        {
            src: "/fd2.jpeg",
            caption: "Matchy-matchy crew! Still can't believe we got you to wear this.",
        },
        {
            src: "/fd3.jpeg",
            caption: "Double trouble 'Little Macho' crew. You're the original Macho Man, Dad!",
        },
        {
            src: "/fd4.jpeg",
            caption: "Look how much we've grown! Same height now, but we still look up to you.",
        },
    ]

    return (
        <section className="min-h-screen flex items-center justify-center py-8 sm:py-12 px-4 relative">
            <motion.div
                className="max-w-6xl mx-auto text-center w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <motion.h2
                    className="text-4xl sm:text-5xl font-serif font-bold mb-4 text-paper-text"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    Our Favorite Memories
                </motion.h2>

                <motion.p
                    className="text-paper-text/80 text-lg sm:text-xl mb-10 sm:mb-14 font-handwritten font-semibold px-4 max-w-xl mx-auto text-accent-terracotta"
                    initial={{ y: 15, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    "Every single moment with you is a memory we cherish."
                </motion.p>

                {/* Photo gallery with cards effect */}
                <motion.div
                    className="w-full max-w-xs sm:max-w-sm mx-auto mb-8 relative"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                >
                    <Swiper
                        effect={"cards"}
                        grabCursor={true}
                        modules={[EffectCards, Pagination, Autoplay]}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                        }}
                        autoplay={{
                            delay: 4500,
                            disableOnInteraction: false,
                        }}
                        className="w-72 h-[380px] sm:w-[320px] sm:h-[430px]"
                    >
                        {photos.map((photo, index) => (
                            <SwiperSlide key={index} className="overflow-visible">
                                <div className="relative w-full h-full bg-white p-3 pb-8 polaroid-shadow border border-stone-200/50 rounded-sm flex flex-col justify-between">
                                    {/* Washi tape decoration at the top */}
                                    <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 w-28 h-7 bg-accent-gold/25 border-l border-r border-accent-gold/20 backdrop-blur-[0.5px] rotate-[-2deg] z-20 shadow-sm pointer-events-none"></div>

                                    {/* Image frame */}
                                    <div className="w-full aspect-[4/3] sm:aspect-square overflow-hidden bg-stone-100 border border-stone-200/80 rounded-sm">
                                        <img
                                            src={photo.src}
                                            alt={photo.caption}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    {/* Caption area mimicking handwriting */}
                                    <div className="mt-4 px-2 text-center flex items-center justify-center min-h-[50px] sm:min-h-[60px]">
                                        <p className="font-handwritten text-xl sm:text-2xl font-bold text-stone-800 leading-snug">
                                            {photo.caption}
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>

                <motion.div
                    className="text-3xl sm:text-4xl select-none"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                >
                    <motion.span
                        initial={{ rotate: 0 }}
                        animate={{
                            rotate: [0, 6, -6, 0],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="inline-block"
                    >
                        📸✨
                    </motion.span>
                </motion.div>
            </motion.div>
        </section>
    )
}

