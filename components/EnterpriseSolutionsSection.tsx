"use client";
import React from "react";
import { Shield, Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const featureVariants = {
    initial: { scale: 1, x: 0 },
    active: { scale: 1.02, x: 5 },
};

const borderAccentVariants = {
    initial: { opacity: 0, scaleY: 0 },
    active: { opacity: 1, scaleY: 1 },
};

export default function EnterpriseSolutionsSection() {
    const [activeIndex, setActiveIndex] = React.useState<number | null>(null);
    const [iconTilted, setIconTilted] = React.useState(false);

    const handleInteraction = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="py-20 relative overflow-hidden bg-[#160c34]">
            <div className="max-w-[1200px] mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

                    {/* Left Column: Feature List */}
                    <div className="w-full lg:w-1/2 order-2 lg:order-1" data-aos="fade-right">
                        <div className="mb-8 flex items-center gap-4 lg:hidden">
                            <div className="w-1 h-8 bg-[#8b5cf6] rounded-full"></div>
                            <h3 className="text-2xl font-bold text-white">Key Features</h3>
                        </div>

                        <div className="flex flex-col gap-4">
                            {([
                                "SOC 2 Type II compliant",
                                "Custom SLA agreements",
                                "Dedicated infrastructure",
                                "GDPR and CCPA compliant",
                                "Advanced security features",
                                "24/7 enterprise support"
                            ] as const).map((feature, index) => {
                                const isActive = activeIndex === index;
                                return (
                                    <motion.div
                                        key={index}
                                        className={`p-4 rounded-xl border flex items-center gap-4 cursor-pointer relative overflow-hidden transition-colors ${isActive
                                            ? "bg-[#21183c] border-[rgba(139,92,246,0.5)] shadow-[0_0_20px_rgba(139,92,246,0.1)]"
                                            : "bg-[#21183c]/50 border-[rgba(139,92,246,0.1)] hover:bg-[#21183c] hover:border-[rgba(139,92,246,0.3)]"
                                            }`}
                                        onClick={() => handleInteraction(index)}
                                        animate={isActive ? "active" : "initial"}
                                        whileTap={{ scale: 0.98 }}
                                        variants={featureVariants}
                                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    >
                                        <motion.div
                                            className="absolute left-0 top-0 bottom-0 w-1 bg-[#8b5cf6]"
                                            variants={borderAccentVariants}
                                            transition={{ duration: 0.3 }}
                                        />
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 z-10 transition-colors ${isActive ? "bg-[#8b5cf6]/20" : "bg-[#1a103c]"}`}>
                                            <Check className={`w-4 h-4 transition-colors ${isActive ? "text-[#8b5cf6]" : "text-[#a78bfa]"}`} />
                                        </div>
                                        <span className={`font-medium transition-colors z-10 ${isActive ? "text-white" : "text-gray-300"}`}>{feature}</span>

                                        {isActive && (
                                            <motion.div
                                                layoutId="activeEnterpriseGlow"
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

                    {/* Right Column: Info & Icon */}
                    <div className="w-full lg:w-1/2 order-1 lg:order-2" data-aos="fade-left">
                        <div className="mb-8">
                            {/* Icon Box — toggle on tap */}
                            <motion.div
                                className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#1e3a8a] to-[#1d4ed8] p-[1px] mb-8 relative z-10 shadow-lg cursor-pointer"
                                onClick={() => setIconTilted(p => !p)}
                                animate={iconTilted
                                    ? { rotate: 12, scale: 1.1, boxShadow: "0 0 50px rgba(59, 130, 246, 0.5)" }
                                    : { rotate: 0, scale: 1, boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)" }
                                }
                                whileHover={{ rotate: 12, scale: 1.1, boxShadow: "0 0 50px rgba(59, 130, 246, 0.5)" }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                            >
                                <div className="w-full h-full bg-[#172554] rounded-2xl flex items-center justify-center backdrop-blur-xl border border-[#3b82f6]/20">
                                    <Shield className="w-10 h-10 text-[#60a5fa] fill-[#3b82f6] drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                                </div>
                            </motion.div>

                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                                Enterprise Solutions
                            </h2>
                            <h3 className="text-xl md:text-2xl font-bold text-[#a78bfa] mb-6">
                                Security and compliance at scale
                            </h3>

                            <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl">
                                Enterprise-grade security, SLAs, and compliance features for organizations with demanding requirements.
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
                    </div>

                </div>
            </div>
        </section>
    );
}
