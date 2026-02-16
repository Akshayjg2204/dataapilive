"use client";
import React from "react";
import { Globe, BarChart3, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function AdditionalFeaturesSection() {
    return (
        <section className="py-24 relative overflow-hidden bg-[#1f163b]">
            <div className="max-w-[1200px] mx-auto px-6 relative z-10">

                {/* Section Header */}
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Additional <span className="text-[#a78bfa]">Features</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Every service includes these powerful features at no extra cost
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="bg-[#150a2e] rounded-3xl p-8 border border-[#2e1065] relative overflow-hidden group cursor-default"
                            initial="initial"
                            whileHover="hover"
                            variants={{
                                initial: { y: 0, borderColor: "#2e1065", boxShadow: "none" },
                                hover: {
                                    y: -10,
                                    borderColor: "rgba(139,92,246,0.5)",
                                    boxShadow: "0 20px 40px -10px rgba(139,92,246,0.15)"
                                }
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* Top Gradient Line */}
                            <motion.div
                                className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-purple-500"
                                variants={{
                                    initial: { opacity: 0, scaleX: 0 },
                                    hover: { opacity: 1, scaleX: 1 }
                                }}
                                transition={{ duration: 0.3 }}
                            />

                            {/* Icon Container */}
                            <div className="flex justify-center mb-6">
                                <motion.div
                                    className="w-16 h-16 rounded-2xl bg-[#2e1065]/50 flex items-center justify-center border border-[#8b5cf6]/20 shadow-inner"
                                    variants={{
                                        initial: { rotate: 0, scale: 1, backgroundColor: "rgba(46, 16, 101, 0.5)", boxShadow: "none" },
                                        hover: {
                                            rotate: 12,
                                            scale: 1.1,
                                            backgroundColor: "rgba(46, 16, 101, 1)",
                                            boxShadow: "0 0 30px rgba(139,92,246,0.6)"
                                        }
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {feature.icon}
                                </motion.div>
                            </div>

                            {/* Text Content */}
                            <div className="text-center">
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#a78bfa] transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

const features = [
    {
        title: "Multi-Language Support",
        description: "Extract data from websites in any language with intelligent character encoding",
        icon: <Globe className="w-8 h-8 text-[#4ade80] drop-shadow-[0_0_8px_rgba(74,222,128,0.5)]" />
    },
    {
        title: "Analytics Dashboard",
        description: "Real-time monitoring and comprehensive usage analytics at your fingertips",
        icon: <BarChart3 className="w-8 h-8 text-[#60a5fa] drop-shadow-[0_0_8px_rgba(96,165,250,0.5)]" />
    },
    {
        title: "Data Validation",
        description: "Automatic quality checks and validation to ensure data accuracy",
        icon: <CheckCircle2 className="w-8 h-8 text-[#f472b6] drop-shadow-[0_0_8px_rgba(244,114,182,0.5)]" />
    }
];
