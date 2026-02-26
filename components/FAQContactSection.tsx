"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FAQContactSection() {
    const [activeButton, setActiveButton] = useState<string | null>(null);

    return (
        <section className="py-24 relative z-10 bg-[#0f0728]" onClick={() => setActiveButton(null)}>
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
                        <div
                            onClick={(e) => { e.stopPropagation(); setActiveButton(activeButton === 'contact' ? null : 'contact'); }}
                            className="w-full sm:w-auto"
                        >
                            <Link href="/contact" className={`block w-full sm:w-auto group relative px-8 py-4 rounded-xl text-white font-bold text-lg overflow-hidden transition-all duration-300 ${activeButton === 'contact' ? 'bg-[#7c3aed] shadow-[0_0_30px_rgba(139,92,246,0.6)] -translate-y-1' : 'bg-[#8b5cf6] shadow-[0_0_20px_rgba(139,92,246,0.4)] lg:hover:-translate-y-1'}`}>
                                {/* Shine Element */}
                                <div className={`absolute top-0 h-full w-[60%] bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-25deg] transition-[left] duration-[700ms] ease-in-out ${activeButton === 'contact' ? 'left-[200%]' : 'left-[-100%] lg:group-hover:left-[200%]'}`} />

                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    Contact Support <ArrowRight className={`w-5 h-5 transition-transform ${activeButton === 'contact' ? 'translate-x-1' : 'lg:group-hover:translate-x-1'}`} />
                                </span>
                            </Link>
                        </div>

                        {/* View Documentation Button */}
                        <div
                            onClick={(e) => { e.stopPropagation(); setActiveButton(activeButton === 'docs' ? null : 'docs'); }}
                            className="w-full sm:w-auto"
                        >
                            <Link href="/docs" className={`block w-full sm:w-auto px-8 py-4 rounded-xl text-lg font-bold border transition-colors duration-300 ${activeButton === 'docs' ? 'bg-[#2e1065] text-white border-[#8b5cf6] shadow-[0_0_20px_rgba(139,92,246,0.3)]' : 'bg-[#1e103f] text-[#a78bfa] border-[#2e1065] lg:hover:bg-[#2e1065]'}`}>
                                View Documentation
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
