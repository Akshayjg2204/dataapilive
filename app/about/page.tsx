"use client";
import React, { useState } from 'react';
import JourneySection from '@/components/JourneySection';
import ValuesSection from '@/components/ValuesSection';
import TeamSection from '@/components/TeamSection';
import JoinSection from '@/components/JoinSection';

const stats = [
    { value: "5M+", label: "Daily Extractions" },
    { value: "195+", label: "Countries Served" },
    { value: "50+", label: "Team Members" },
    { value: "5,000+", label: "Happy Customers" },
];

export default function AboutPage() {
    const [activeIdx, setActiveIdx] = useState<number | null>(null);

    const handleTap = (idx: number) => {
        setActiveIdx(prev => (prev === idx ? null : idx));
    };

    return (
        <main className="min-h-screen bg-[#0a051e] text-white">

            {/* Hero Section */}
            <section className="pt-32 pb-20 relative overflow-hidden">
                <div className="max-w-[1400px] mx-auto px-6 relative z-10 text-center">

                    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight" data-aos="fade-up">
                        Building the Future of <br />
                        <span className="bg-gradient-to-r from-[#8b5cf6] to-[#c4b5fd] bg-clip-text text-transparent">
                            Web Data Extraction
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-16 leading-relaxed" data-aos="fade-up" data-aos-delay="100">
                        We're on a mission to democratize web data extraction through intelligent automation.
                        Founded by developers who experienced the pain of maintaining web scrapers firsthand,
                        we built the solution we wished existed.
                    </p>

                    {/*
                     * PATTERN (same as InnovationSection):
                     *   Outer div  → data-aos only, NO transforms from interaction
                     *   Inner div  → onClick + CSS transitions, NO data-aos
                     * This separates the two stacking contexts entirely.
                     */}

                    {/* ── Stats Card — outer AOS shell ── */}
                    <div data-aos="fade-up" data-aos-delay="200">
                        {/* Inner interactive shell — no data-aos */}
                        <div className="bg-[#100826] rounded-3xl shadow-[0_0_50px_rgba(139,92,246,0.1)] border border-white/5">

                            {/* ── MOBILE: vertical tappable list ── */}
                            <div className="md:hidden flex flex-col">
                                {stats.map((stat, idx) => {
                                    const isActive = activeIdx === idx;
                                    return (
                                        /* Outer AOS wrapper per-item — no click */
                                        <div key={idx} className="border-b border-white/5 last:border-b-0">
                                            {/* Inner interactive div — no data-aos */}
                                            <div
                                                onClick={() => handleTap(idx)}
                                                className={`
                                                    w-full text-left px-8 py-5 flex flex-col gap-1
                                                    cursor-pointer select-none rounded-xl
                                                    transition-all duration-300
                                                    ${isActive
                                                        ? '-translate-y-1.5 bg-[#1a1040] shadow-[0_10px_35px_rgba(139,92,246,0.28)] border border-[rgba(139,92,246,0.25)]'
                                                        : 'translate-y-0 bg-transparent border border-transparent'
                                                    }
                                                `}
                                            >
                                                <span className={`
                                                    text-4xl font-black transition-all duration-300
                                                    ${isActive
                                                        ? 'text-[#a78bfa] drop-shadow-[0_0_16px_rgba(167,139,250,0.7)]'
                                                        : 'text-[#7c3aed]'
                                                    }
                                                `}>
                                                    {stat.value}
                                                </span>
                                                <span className={`text-sm font-medium transition-colors duration-300 ${isActive ? 'text-white/80' : 'text-gray-400'}`}>
                                                    {stat.label}
                                                </span>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* ── DESKTOP: 4-col grid ── */}
                            <div className="hidden md:grid grid-cols-4 gap-0 divide-x divide-white/5 p-10 md:p-16">
                                {stats.map((stat, idx) => (
                                    <div key={idx} className="text-center px-6 group cursor-default">
                                        <div className="text-4xl md:text-5xl font-black text-[#8b5cf6] mb-2 group-hover:drop-shadow-[0_0_14px_rgba(139,92,246,0.7)] transition-all duration-300">
                                            {stat.value}
                                        </div>
                                        <div className="text-sm font-medium text-gray-400">
                                            {stat.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <JourneySection />
            <ValuesSection />
            <TeamSection />
            <JoinSection />

        </main>
    );
}
