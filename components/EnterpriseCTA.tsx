"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

export default function EnterpriseCTA() {
    const features = [
        "Dedicated Infrastructure",
        "Custom SLA",
        "24/7 Support",
        "SOC 2 Compliant"
    ];

    return (
        <section className="py-24 relative z-10 px-6">
            <div className="max-w-[1000px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative bg-[#0a051e] border border-[#2e1065] rounded-[3rem] p-12 md:p-20 text-center overflow-hidden shadow-[0_0_50px_rgba(139,92,246,0.1)] group"
                >
                    {/* Background Glow Effects */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-[#8b5cf6]/5 to-transparent pointer-events-none" />
                    <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#8b5cf6]/10 rounded-full blur-[100px] pointer-events-none" />

                    {/* Badge */}
                    <div className="inline-block mb-8 px-4 py-1.5 rounded-full border border-[#2e1065] bg-[#150a2e] text-[#8b5cf6] text-xs font-bold tracking-widest uppercase shadow-[0_0_20px_rgba(139,92,246,0.1)]">
                        Enterprise
                    </div>

                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
                        Need a Custom Solution?
                    </h2>

                    <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
                        Get dedicated infrastructure, custom SLAs, and 24/7 priority support tailored to your organization's needs.
                    </p>

                    {/* Features Grid */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12 max-w-3xl mx-auto">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#2e1065] bg-[#150a2e]/50 text-white font-medium text-sm hover:border-[#8b5cf6] hover:bg-[#150a2e] transition-all duration-300"
                            >
                                <Check className="w-4 h-4 text-[#00e5d0]" />
                                {feature}
                            </div>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-[#8b5cf6] to-[#7c3aed] text-white font-bold px-8 py-4 rounded-xl shadow-[0_0_30px_rgba(139,92,246,0.3)] hover:shadow-[0_0_50px_rgba(139,92,246,0.5)] transition-all group/btn"
                    >
                        Contact Enterprise Team
                        <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                    </motion.button>

                </motion.div>
            </div>
        </section>
    );
}
