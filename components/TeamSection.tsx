"use client";
import React, { useState } from "react";
import { Rocket } from "lucide-react";

const statItems = [
    { value: "50+", label: "Team Members" },
    { value: "15+", label: "Countries" },
    { value: "24/7", label: "Support" },
];

/** Standalone stat bar with click-to-float on each item.
 *  Uses the two-div pattern: the outer left column already has data-aos="fade-right"
 *  applied externally, so NO data-aos is added here — only onClick + CSS transitions.
 */
function StatBar() {
    const [activeIdx, setActiveIdx] = useState<number | null>(null);

    return (
        <div className="flex items-stretch gap-0 bg-[#150a2e] rounded-2xl border border-[rgba(139,92,246,0.2)] w-full overflow-hidden">
            {statItems.map((stat, idx) => {
                const isActive = activeIdx === idx;
                return (
                    <div
                        key={idx}
                        onClick={() => setActiveIdx(prev => prev === idx ? null : idx)}
                        className={`
                            flex-1 flex flex-col items-center justify-center py-7 px-4
                            cursor-pointer select-none transition-all duration-300
                            border-r border-white/5 last:border-r-0
                            ${isActive
                                ? "-translate-y-2 bg-[#1e1245] shadow-[0_-6px_20px_rgba(139,92,246,0.25)]"
                                : "translate-y-0 bg-transparent hover:-translate-y-1"
                            }
                        `}
                    >
                        <div className={`text-3xl font-bold mb-1 transition-all duration-300 ${isActive
                            ? "text-[#a78bfa] drop-shadow-[0_0_12px_rgba(167,139,250,0.7)]"
                            : "text-white"
                            }`}>
                            {stat.value}
                        </div>
                        <div className={`text-xs uppercase tracking-wider transition-colors duration-300 ${isActive ? "text-white/70" : "text-gray-400"
                            }`}>
                            {stat.label}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default function TeamSection() {
    return (
        <section className="py-20 bg-[#130a32] relative overflow-hidden border-y border-white/5">
            <div className="max-w-[1200px] mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Left Content — outer AOS wrapper, no onClick */}
                    <div className="w-full lg:w-1/2" data-aos="fade-right">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            Built by Developers, <br />
                            <span className="text-[#a78bfa]">For Developers</span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-12 leading-relaxed">
                            Our diverse team of engineers, data scientists, and product experts work together to push the boundaries of what's possible with web data extraction. We're passionate about solving hard problems and making developers' lives easier.
                        </p>

                        {/* Stats bar — StatBar handles its own state, no AOS conflict */}
                        <StatBar />
                    </div>

                    {/* Right Visual - Radar/Target */}
                    <div className="w-full lg:w-1/2 flex justify-center" data-aos="fade-left">
                        <div className="relative w-full max-w-[400px] aspect-square flex items-center justify-center">
                            {/* Concentric Circles */}
                            <div className="absolute inset-0 rounded-full border border-[rgba(139,92,246,0.1)] animate-[spin_10s_linear_infinite]"></div>
                            <div className="absolute inset-[12.5%] rounded-full border border-[rgba(139,92,246,0.15)] animate-[spin_15s_linear_infinite_reverse]"></div>
                            <div className="absolute inset-[25%] rounded-full border border-[rgba(139,92,246,0.2)] animate-[spin_20s_linear_infinite]"></div>

                            {/* Center Rocket */}
                            <div className="relative z-10 w-24 h-24 rounded-full bg-[#a78bfa] flex items-center justify-center shadow-[0_0_50px_rgba(167,139,250,0.5)]">
                                <Rocket className="w-10 h-10 text-white fill-white transform -rotate-45" />
                            </div>

                            {/* Orbiting Dot */}
                            <div className="absolute inset-0 animate-[spin_8s_linear_infinite] rounded-full">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#a78bfa] rounded-full shadow-[0_0_10px_#a78bfa]"></div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
}
