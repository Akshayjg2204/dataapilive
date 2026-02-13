"use client";
import React from "react";
import { Server, Star, Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AutoExSection() {
    const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

    const handleInteraction = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="py-20 relative overflow-hidden bg-[#0a051e]">
            <div className="max-w-[1200px] mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

                    {/* Left Column: Product Info */}
                    <div className="w-full lg:w-1/2" data-aos="fade-right">
                        <div className="flex items-center gap-6 mb-8">
                            {/* Icon Box */}
                            <motion.div
                                className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#8b5cf6] to-[#a78bfa] p-[1px] shadow-[0_0_30px_rgba(139,92,246,0.5)]"
                                animate={{
                                    y: [0, -10, 0],
                                    boxShadow: [
                                        "0 0 30px rgba(139,92,246,0.5)",
                                        "0 0 50px rgba(139,92,246,0.7)",
                                        "0 0 30px rgba(139,92,246,0.5)"
                                    ]
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                <div className="w-full h-full bg-[#1e1b4b] rounded-2xl flex items-center justify-center backdrop-blur-xl">
                                    <Server className="w-10 h-10 text-[#a78bfa]" />
                                </div>
                            </motion.div>

                            {/* Badge */}
                            <div className="px-4 py-1.5 rounded-full bg-[#1a103c] border border-[#a78bfa]/30 flex items-center gap-2">
                                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                <span className="text-sm font-semibold text-[#a78bfa]">Most Popular</span>
                            </div>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            AutoEx™ API
                        </h2>
                        <h3 className="text-xl md:text-2xl font-bold text-[#a78bfa] mb-6">
                            Intelligent data extraction without the headache
                        </h3>

                        <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl">
                            Our flagship API service uses AI to automatically extract structured data from any website. No selectors to maintain, no breaking when sites update.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Link href="/pricing" className="px-8 py-3.5 bg-gradient-to-r from-[#8b5cf6] to-[#a78bfa] text-white font-bold rounded-xl shadow-[0_4px_14px_rgba(139,92,246,0.4)] hover:shadow-[0_6px_20px_rgba(139,92,246,0.6)] hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2">
                                View Pricing
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link href="/docs" className="px-8 py-3.5 bg-[#1a103c] border border-[#a78bfa]/30 text-white font-semibold rounded-xl hover:bg-[#a78bfa]/10 hover:border-[#a78bfa] transition-all duration-300">
                                Documentation
                            </Link>
                        </div>
                    </div>

                    {/* Right Column: Key Features */}
                    <div className="w-full lg:w-1/2" data-aos="fade-left">
                        <div className="mb-8 flex items-center gap-4">
                            <div className="w-1 h-8 bg-[#8b5cf6] rounded-full"></div>
                            <h3 className="text-2xl font-bold text-white">Key Features</h3>
                        </div>

                        <div className="flex flex-col gap-4">
                            {([
                                "99.9% extraction accuracy",
                                "Self-adapting to website changes",
                                "Real-time data processing",
                                "Support for dynamic JavaScript content",
                                "Structured JSON output",
                                "Batch processing available"
                            ] as const).map((feature, index) => {
                                const isActive = activeIndex === index;
                                return (
                                    <motion.div
                                        key={index}
                                        className={`p-4 rounded-xl border flex items-center gap-4 cursor-pointer relative overflow-hidden ${isActive
                                            ? "bg-[#150a2e] border-[rgba(139,92,246,0.5)] shadow-[0_0_20px_rgba(139,92,246,0.1)]"
                                            : "bg-[#150a2e]/50 border-[rgba(139,92,246,0.1)] hover:bg-[#150a2e] hover:border-[rgba(139,92,246,0.3)]"
                                            }`}
                                        onClick={() => handleInteraction(index)}
                                        layout
                                        whileHover={{ scale: 1.02, x: 5 }}
                                        whileTap={{ scale: 0.98 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    >
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors z-10 ${isActive ? "bg-[#8b5cf6]/20" : "bg-[#1a103c] group-hover:bg-[#8b5cf6]/20"
                                            }`}>
                                            <Check className={`w-4 h-4 transition-colors ${isActive ? "text-[#8b5cf6]" : "text-[#a78bfa] group-hover:text-[#8b5cf6]"
                                                }`} />
                                        </div>
                                        <span className={`font-medium transition-colors z-10 ${isActive ? "text-white" : "text-gray-300 group-hover:text-white"
                                            }`}>{feature}</span>

                                        {/* Active Indicator Glow */}
                                        {isActive && (
                                            <motion.div
                                                layoutId="activeFeatureGlow"
                                                className="absolute inset-0 bg-gradient-to-r from-[rgba(139,92,246,0.1)] to-transparent"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                            />
                                        )}
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
