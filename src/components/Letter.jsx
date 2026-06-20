"use client"

import { motion } from "motion/react"

export default function Letter() {
    return (
        <section className="min-h-screen flex items-center justify-center py-8 sm:py-12 px-4 pb-20 relative">
            <motion.div
                className="max-w-3xl mx-auto w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <motion.h2
                    className="text-4xl sm:text-5xl font-serif font-bold text-center mb-8 text-paper-text"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    A Letter From Our Hearts
                </motion.h2>

                <motion.div
                    className="bg-[#fdfcf9] border border-stone-200 rounded-xl p-8 sm:p-12 polaroid-shadow relative mx-4 sm:mx-0 overflow-visible"
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                >
                    {/* Washi tape decorations at the corners to make it feel stuck to the scrapbook page */}
                    <div className="absolute -top-4 -left-3 w-24 h-8 bg-accent-gold/20 backdrop-blur-[0.5px] border-l border-r border-accent-gold/15 rotate-[-15deg] z-20 shadow-sm pointer-events-none"></div>
                    <div className="absolute -top-4 -right-3 w-24 h-8 bg-accent-sage/20 backdrop-blur-[0.5px] border-l border-r border-accent-sage/15 rotate-[15deg] z-20 shadow-sm pointer-events-none"></div>

                    {/* Paper background design lines (subtle lined paper look) */}
                    <div className="absolute inset-0 opacity-5 pointer-events-none rounded-xl bg-[linear-gradient(#000_1px,transparent_1px)] bg-[size:100%_2.5rem] mt-10"></div>

                    <div className="text-left mb-6 sm:mb-8 relative z-10">
                        <motion.p
                            className="text-accent-terracotta text-3xl font-handwritten font-bold"
                            initial={{ x: 15, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                        >
                            Dear Dad,
                        </motion.p>
                    </div>

                    <motion.div
                        className="space-y-5 sm:space-y-6 text-stone-700 leading-relaxed font-serif text-base sm:text-lg md:text-xl relative z-10"
                        initial={{ y: 15, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                    >
                        <motion.p
                            initial={{ x: -15, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 1, duration: 0.5 }}
                        >
                            Words cannot express how grateful we are to have you as our father. You've been our rock, our inspiration, and
                            our biggest cheerleader through every single step of our journey.
                        </motion.p>

                        <motion.p
                            initial={{ x: -15, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 1.2, duration: 0.5 }}
                        >
                            Your strength has shown us how to be resilient, your kindness has taught us compassion, and your humor has
                            filled our home with laughter and joy.
                        </motion.p>

                        <motion.p
                            initial={{ x: -15, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 1.4, duration: 0.5 }}
                        >
                            Thank you for all the sacrifices you've made, the dreams you've helped us chase, and the love you've given
                            so freely. We are who we are today because of you.
                        </motion.p>

                        <motion.p
                            className="text-accent-terracotta font-handwritten text-3xl sm:text-4xl text-center py-4 font-bold"
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 1.6, duration: 0.6 }}
                        >
                            We love you more than words can say, Dad!
                        </motion.p>
                    </motion.div>

                    <div className="text-right mt-8 relative z-10">
                        <motion.div
                            className="inline-block text-left"
                            initial={{ x: 15, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 1.8, duration: 0.5 }}
                        >
                            <p className="text-stone-500 font-serif italic text-base sm:text-lg">With all our love,</p>
                            <p className="text-accent-sage font-handwritten text-3xl font-bold mt-1">
                                Palash and Manthan ❤️
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    )
}

