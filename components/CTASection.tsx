"use client";
import React from "react";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CTASection() {
    return (
        <section className="py-32 relative overflow-hidden bg-[#160c34]">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#8b5cf6]/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-[1000px] mx-auto px-6 relative z-10 text-center">

                <div data-aos="fade-up">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Not Sure Which Service is Right?
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12">
                        Our team can help you choose the perfect solution for your needs. Get in touch for a personalized consultation.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16" data-aos="fade-up" data-aos-delay="100">
                    {/* Primary Button */}
                    <motion.div
                        whileHover="hover"
                        initial="initial"
                        variants={{
                            initial: { y: 0 },
                            hover: { y: -4 }
                        }}
                    >
                        <Link
                            href="/contact"
                            className="group relative px-8 py-4 bg-[#8b5cf6] text-white font-bold rounded-2xl flex items-center gap-2 overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Contact Us <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                            {/* Button Glow Effect */}
                            <motion.div
                                className="absolute inset-0 rounded-2xl"
                                variants={{
                                    initial: { boxShadow: "0 0 0 rgba(139,92,246,0)" },
                                    hover: { boxShadow: "0 0 30px rgba(139,92,246,0.6)" }
                                }}
                                transition={{ duration: 0.3 }}
                            />
                            {/* Gradient Overlay for extra shine */}
                            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
                        </Link>
                    </motion.div>

                    {/* Secondary Button */}
                    <motion.div
                        whileHover="hover"
                        initial="initial"
                        variants={{
                            initial: { y: 0 },
                            hover: { y: -4 }
                        }}
                    >
                        <Link
                            href="/demo"
                            className="group relative px-8 py-4 bg-[#1a103c] text-white font-bold rounded-2xl border border-[#8b5cf6]/30 flex items-center justify-center"
                        >
                            <span className="relative z-10">Schedule Demo</span>
                            {/* Border Glow Effect */}
                            <motion.div
                                className="absolute inset-0 rounded-2xl border border-[#8b5cf6]"
                                variants={{
                                    initial: { opacity: 0, boxShadow: "0 0 0 rgba(139,92,246,0)" },
                                    hover: { opacity: 1, boxShadow: "0 0 20px rgba(139,92,246,0.4)" }
                                }}
                                transition={{ duration: 0.3 }}
                            />
                        </Link>
                    </motion.div>
                </div>

                {/* Trust Indicators */}
                <div className="flex flex-wrap justify-center gap-4 md:gap-8" data-aos="fade-up" data-aos-delay="200">
                    {[
                        "Free consultation",
                        "Custom pricing available",
                        "14-day free trial"
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1a103c]/50 border border-[#8b5cf6]/20 text-gray-300 text-sm md:text-base cursor-default"
                            initial="initial"
                            whileHover="hover"
                            variants={{
                                initial: { y: 0, borderColor: "rgba(139,92,246,0.2)", boxShadow: "0 0 0 rgba(139,92,246,0)" },
                                hover: {
                                    y: -2,
                                    borderColor: "rgba(139,92,246,0.6)",
                                    boxShadow: "0 0 15px rgba(139,92,246,0.2)"
                                }
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="w-5 h-5 rounded-full bg-[#8b5cf6]/20 flex items-center justify-center">
                                <Check className="w-3 h-3 text-[#8b5cf6]" />
                            </div>
                            {item}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
