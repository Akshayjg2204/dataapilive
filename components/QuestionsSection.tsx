"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function QuestionsSection() {
    return (
        <section className="py-24 relative z-10">
            <div className="max-w-4xl mx-auto px-6 text-center">

                {/* Floating 3D Icon */}
                <div className="flex justify-center mb-8">
                    <motion.div
                        animate={{ y: [-10, 10, -10] }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="relative"
                    >
                        {/* Icon Background Glow */}
                        <div className="absolute inset-0 bg-[#8b5cf6] blur-[40px] opacity-40 rounded-full" />

                        {/* 3D-ish Icon Container */}
                        <div className="relative w-24 h-24 bg-gradient-to-br from-[#a78bfa] to-[#6d28d9] rounded-[2rem] flex items-center justify-center shadow-[0_10px_30px_rgba(109,40,217,0.5),inset_0_2px_10px_rgba(255,255,255,0.3)] transform rotate-12 border border-[#c4b5fd]/30">
                            <MessageCircle className="w-12 h-12 text-white drop-shadow-md" strokeWidth={2.5} />
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
                        Still Have Questions?
                    </h2>
                    <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                        Our team is here to help you find the perfect plan for your needs. Get in touch for a personalized consultation.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">

                        {/* Contact Sales Button - Shine Effect */}
                        <Link href="/contact" className="group relative px-8 py-4 rounded-xl bg-[#8b5cf6] text-white font-bold text-lg overflow-hidden shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-transform duration-300 hover:-translate-y-1">
                            {/* Shine Element - Updated to use standard CSS transition */}
                            <div className="absolute top-0 h-full w-[60%] bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-[-25deg] left-[-100%] group-hover:left-[200%] transition-[left] duration-[700ms] ease-in-out" />

                            <span className="relative z-10 flex items-center gap-2">
                                Contact Sales <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </Link>

                        {/* Schedule Demo Button - Border Glow */}
                        <Link href="/demo" className="group relative px-8 py-4 rounded-xl bg-[#150a2e] text-white font-bold text-lg border border-[#2e1065] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[#8b5cf6] hover:shadow-[0_0_20px_rgba(139,92,246,0.5)]">
                            <span className="relative z-10">Schedule Demo</span>
                        </Link>

                    </div>
                </motion.div>

            </div>
        </section>
    );
}
