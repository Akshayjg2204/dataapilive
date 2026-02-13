"use client";
import React from "react";
import { motion } from "framer-motion";

const milestones = [
    {
        year: "2025",
        quarter: "Q1",
        title: "Founded",
        description: "DataAPI launched with a vision to revolutionize web data extraction through intelligent automation",
        position: "right",
    },
    {
        year: "2025",
        quarter: "Q2",
        title: "AutoEx™ Technology",
        description: "Released our flagship AI-powered extraction engine with breakthrough accuracy",
        position: "left",
    },
    {
        year: "2025",
        quarter: "Q3",
        title: "Rapid Growth",
        description: "Onboarded 1,000+ customers and reached 5M daily API calls milestone",
        position: "right",
    },
    {
        year: "2025",
        quarter: "Q4",
        title: "Global Expansion",
        description: "Expanded to serve customers across 195+ countries with multi-language support",
        position: "left",
    },
];

export default function JourneySection() {
    return (
        <section className="py-20 relative overflow-hidden">
            <div className="max-w-[1000px] mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-20" data-aos="fade-up">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Our <span className="text-[#a78bfa]">Journey</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        From launch to global expansion, here's our 2025 journey of revolutionizing data extraction
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-[rgba(139,92,246,0.2)] hidden md:block"></div>

                    <div className="flex flex-col gap-12 md:gap-24">
                        {milestones.map((item, index) => (
                            <div
                                key={index}
                                className={`flex flex-col md:flex-row items-center gap-8 md:gap-0 ${item.position === "left" ? "md:flex-row-reverse" : ""
                                    }`}
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                {/* Content Side (Empty for opposite side) */}
                                <div className="w-full md:w-1/2 flex justify-center md:block hidden"></div>

                                {/* Center Node */}
                                <motion.div
                                    className="relative z-20 flex-shrink-0"
                                    whileHover={{ rotate: 15, scale: 1.1 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                                >
                                    <div className="w-24 h-24 rounded-full bg-[#150a2e] border-2 border-[rgba(139,92,246,0.5)] flex flex-col items-center justify-center shadow-[0_0_20px_rgba(139,92,246,0.4)] relative group cursor-pointer">
                                        <span className="text-xl font-bold text-white group-hover:text-[#a78bfa] transition-colors">{item.year}</span>
                                        <span className="text-xs font-bold text-[#a78bfa] group-hover:text-white transition-colors">{item.quarter}</span>

                                        {/* Glow effect */}
                                        <div className="absolute inset-0 rounded-full bg-[rgba(139,92,246,0.2)] animate-pulse-glow -z-10 blur-md"></div>
                                    </div>
                                </motion.div>

                                {/* Content Card */}
                                <div className={`w-full md:w-1/2 ${item.position === "left" ? "md:pr-12 md:text-right" : "md:pl-12 text-left"}`}>
                                    <motion.div
                                        className="bg-[#150a2e] p-8 rounded-2xl border border-[rgba(139,92,246,0.2)] shadow-lg cursor-pointer relative overflow-hidden group"
                                        whileHover={{
                                            y: -10,
                                            borderColor: "rgba(139,92,246,0.8)",
                                            boxShadow: "0 0 40px rgba(139,92,246,0.2)"
                                        }}
                                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    >
                                        <h3 className="text-2xl font-bold mb-3 text-[#a78bfa] group-hover:text-white transition-colors">{item.title}</h3>
                                        <p className="text-gray-400 leading-relaxed text-sm group-hover:text-gray-300 transition-colors">
                                            {item.description}
                                        </p>
                                    </motion.div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
