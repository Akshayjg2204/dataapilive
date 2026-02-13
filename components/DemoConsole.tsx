"use client";
import { useState } from "react";
import { Globe, ArrowRight } from "lucide-react";

export default function DemoConsole() {
    const [activeTab, setActiveTab] = useState("People");

    return (
        <div className="relative z-10 w-full max-w-4xl mx-auto mt-16 animate-fade-up [animation-delay:800ms]">
            <div className="bg-[rgba(26,16,60,0.8)] backdrop-blur-xl border border-[var(--homepage-border)] rounded-2xl p-3 md:p-4 shadow-2xl">
                {/* URL Input */}
                <div className="flex items-center gap-3 bg-[#0a051e] border border-[var(--homepage-border-light)] rounded-xl px-4 py-3.5 mb-4">
                    <Globe className="w-5 h-5 text-[var(--homepage-text-secondary)]" />
                    <input
                        type="text"
                        value="https://example.com"
                        readOnly
                        className="w-full bg-transparent border-none focus:outline-none text-[var(--homepage-text-secondary)] placeholder-[var(--homepage-text-secondary)] font-medium"
                    />
                </div>

                {/* Controls */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    {/* Tabs */}
                    <div className="flex items-center gap-1 bg-[#0a051e] p-1.5 rounded-xl border border-[var(--homepage-border-light)] w-full md:w-auto overflow-x-auto">
                        {["People", "Products", "Articles", "Business"].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${activeTab === tab
                                        ? "bg-[rgba(139,92,246,0.2)] text-white shadow-sm"
                                        : "text-[var(--homepage-text-secondary)] hover:text-white hover:bg-white/5"
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Extract Button */}
                    <button className="w-full md:w-auto flex items-center justify-center gap-2 px-8 py-2.5 bg-gradient-to-r from-[var(--homepage-primary)] to-[#a78bfa] hover:from-[#7c3aed] hover:to-[#8b5cf6] text-white font-bold rounded-xl shadow-[0_0_15px_rgba(139,92,246,0.3)] hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] transition-all duration-300 transform hover:-translate-y-0.5">
                        <span>Extract</span>
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
}
