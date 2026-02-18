"use client";
import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FAQContactSection() {
    return (
        <section className="py-24 relative z-10 bg-[#0f0728]">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
                        Still Have Questions?
                    </h2>
                    <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                        Can't find the answer you're looking for? Our support team is ready to help you with any questions.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        {/* Contact Support Button */}
                        <Link href="/contact" className="group relative px-8 py-4 rounded-xl bg-[#8b5cf6] text-white font-bold text-lg overflow-hidden shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-transform duration-300 hover:-translate-y-1">
                            {/* Shine Element */}
                            <div className="absolute top-0 h-full w-[60%] bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-25deg] left-[-100%] group-hover:left-[200%] transition-[left] duration-[700ms] ease-in-out" />

                            <span className="relative z-10 flex items-center gap-2">
                                Contact Support <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </Link>

                        {/* View Documentation Button */}
                        <Link href="/docs" className="px-8 py-4 rounded-xl bg-[#1e103f] text-[#a78bfa] font-bold text-lg border border-[#2e1065] hover:bg-[#2e1065] transition-colors duration-300">
                            View Documentation
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
