"use client";
import React from "react";
import { motion } from "framer-motion";
import { Rocket } from "lucide-react";

export default function TeamSection() {
    return (
        <section className="py-20 bg-[#130a32] relative overflow-hidden border-y border-white/5">
            <div className="max-w-[1200px] mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Left Content */}
                    <div className="w-full lg:w-1/2" data-aos="fade-right">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            Built by Developers, <br />
                            <span className="text-[#a78bfa]">For Developers</span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-12 leading-relaxed">
                            Our diverse team of engineers, data scientists, and product experts work together to push the boundaries of what's possible with web data extraction. We're passionate about solving hard problems and making developers' lives easier.
                        </p>

                        <div className="flex items-center gap-12 bg-[#150a2e] p-8 rounded-2xl border border-[rgba(139,92,246,0.2)] inline-flex w-full md:w-auto justify-between md:justify-start">
                            <div>
                                <div className="text-3xl font-bold text-white mb-1">50+</div>
                                <div className="text-xs text-gray-400 uppercase tracking-wider">Team Members</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-white mb-1">15+</div>
                                <div className="text-xs text-gray-400 uppercase tracking-wider">Countries</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-white mb-1">24/7</div>
                                <div className="text-xs text-gray-400 uppercase tracking-wider">Support</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Visual - Radar/Target */}
                    <div className="w-full lg:w-1/2 flex justify-center" data-aos="fade-left">
                        <div className="relative w-[400px] h-[400px] flex items-center justify-center">
                            {/* Concentric Circles */}
                            <div className="absolute inset-0 rounded-full border border-[rgba(139,92,246,0.1)] animate-[spin_10s_linear_infinite]"></div>
                            <div className="absolute inset-[50px] rounded-full border border-[rgba(139,92,246,0.15)] animate-[spin_15s_linear_infinite_reverse]"></div>
                            <div className="absolute inset-[100px] rounded-full border border-[rgba(139,92,246,0.2)] animate-[spin_20s_linear_infinite]"></div>

                            {/* Center Rocket */}
                            <div className="relative z-10 w-24 h-24 rounded-full bg-[#a78bfa] flex items-center justify-center shadow-[0_0_50px_rgba(167,139,250,0.5)]">
                                <Rocket className="w-10 h-10 text-white fill-white transform -rotate-45" />
                            </div>

                            {/* Orbiting Dot (Optional for extra effect) */}
                            <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] -translate-x-1/2 -translate-y-1/2 animate-[spin_8s_linear_infinite]">
                                <div className="absolute top-0 left-1/2 w-3 h-3 bg-[#a78bfa] rounded-full shadow-[0_0_10px_#a78bfa]"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
