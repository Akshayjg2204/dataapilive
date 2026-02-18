"use client";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const features = [
    {
        id: "01",
        title: "AI-Powered Extraction",
        description: "Intelligent data extraction using advanced machine learning algorithms that adapt to any website structure automatically",
        gradient: "from-pink-500 to-rose-500",
    },
    {
        id: "02",
        title: "Lightning Fast",
        description: "Average response time under 500ms with global CDN infrastructure and optimized processing pipelines",
        gradient: "from-blue-500 to-indigo-500",
    },
    {
        id: "03",
        title: "Enterprise Security",
        description: "Bank-grade encryption, SOC 2 Type II certified, and GDPR compliant with advanced data protection",
        gradient: "from-cyan-400 to-blue-500",
    },
    {
        id: "04",
        title: "Multiple Formats",
        description: "Get data in JSON, Markdown, HTML, CSV, or custom formats tailored to your specific needs",
        gradient: "from-orange-500 to-red-500",
    },
    {
        id: "05",
        title: "Global Coverage",
        description: "Extract data from websites in any language or region with automatic translation and localization support",
        gradient: "from-blue-400 to-cyan-300",
    },
    {
        id: "06",
        title: "Real-time Processing",
        description: "Process and extract data in real-time with webhooks, streaming APIs, and instant notifications",
        gradient: "from-pink-500 to-orange-400",
    },
];

export default function ModernDevelopers() {
    const [activeId, setActiveId] = useState<number | null>(null);

    const handleInteraction = (idx: number) => {
        setActiveId(prev => prev === idx ? null : idx);
    };

    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-purple-900/10 blur-[100px] rounded-full" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-900/10 blur-[100px] rounded-full" />

            <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-20" data-aos="fade-up">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
                        Built for modern <br />
                        <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">developers</span>
                    </h2>
                    <p className="text-lg text-[var(--homepage-text-secondary)] max-w-2xl mx-auto leading-relaxed">
                        Everything you need to extract, process, and integrate web data at scale with enterprise-grade reliability and performance
                    </p>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, idx) => {
                        const isActive = activeId === idx;
                        return (
                            <div
                                key={idx}
                                data-aos="fade-up"
                                data-aos-delay={idx * 100}
                            >
                                <div
                                    onClick={() => handleInteraction(idx)}
                                    className={`group relative bg-[#0f0718] rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 overflow-hidden cursor-pointer h-full ${isActive ? '-translate-y-2' : ''}`}
                                >
                                    {/* Gradient Border Effect via Pseudo-element */}
                                    <div className={`absolute inset-0 rounded-3xl p-[1px] bg-gradient-to-br from-white/10 to-white/5 group-hover:from-blue-500 group-hover:to-purple-500 transition-colors duration-500 -z-10 ${isActive ? 'from-blue-500 to-purple-500' : ''}`} />

                                    {/* Inner Background to cover the gradient p-[1px] */}
                                    <div className="absolute inset-[1px] bg-[#0f0718] rounded-[23px] -z-10" />

                                    <div className="relative">
                                        {/* Number Container with Spin and Ring */}
                                        <div className="w-16 h-16 mb-6 relative flex items-center justify-center">
                                            {/* Ring Effect */}
                                            <div className={`absolute inset-0 rounded-full border border-white/20 scale-100 group-hover:scale-150 group-hover:opacity-0 transition-all duration-700 ease-out ${isActive ? 'scale-150 opacity-0' : ''}`} />

                                            {/* Spinning Gradient Circle */}
                                            <div className={`w-full h-full rounded-full bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white font-bold text-xl shadow-lg relative z-10 transition-transform duration-700 ease-in-out group-hover:rotate-[360deg] ${isActive ? 'rotate-[360deg]' : ''}`}>
                                                {feature.id}
                                            </div>
                                        </div>

                                        <h3 className={`text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors ${isActive ? 'text-blue-400' : ''}`}>
                                            {feature.title}
                                        </h3>
                                        <p className="text-[var(--homepage-text-secondary)] leading-relaxed text-sm lg:text-base mb-4">
                                            {feature.description}
                                        </p>

                                        {/* Arrow Icon in Bottom Right */}
                                        <div className={`absolute -bottom-4 -right-4 w-12 h-12 bg-white/5 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bottom-0 group-hover:right-0 transition-all duration-300 ${isActive ? 'opacity-100 bottom-0 right-0' : ''}`}>
                                            <ArrowUpRight className="w-5 h-5 text-white" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* CTA Card */}
                <div className="mt-12 group relative bg-[#0f0718] rounded-3xl p-8 md:p-12 overflow-hidden" data-aos="fade-up">
                    {/* Gradient Border Effect */}
                    <div className="absolute inset-0 rounded-3xl p-[1px] bg-gradient-to-r from-white/10 to-white/5 group-hover:from-purple-500 group-hover:to-blue-500 transition-colors duration-500 -z-10" />
                    <div className="absolute inset-[1px] bg-[#0f0718] rounded-[23px] -z-10" />

                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="text-center md:text-left">
                            <h3 className="text-3xl font-extrabold text-white mb-4">
                                Ready to experience the power?
                            </h3>
                            <p className="text-[var(--homepage-text-secondary)] max-w-xl">
                                Start extracting data in minutes with our comprehensive API documentation and SDKs
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#8b5cf6] to-[#6366f1] text-white font-bold hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] hover:scale-105 transition-all duration-300 flex items-center gap-2 group/btn">
                                Get Started Free <ArrowUpRight className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                            </button>
                            <button className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all duration-300">
                                View Documentation
                            </button>
                        </div>
                    </div>

                    {/* Decorative Dots */}
                    <div className="absolute bottom-6 right-6 flex gap-1">
                        {[...Array(8)].map((_, i) => (
                            <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/10" />
                        ))}
                    </div>
                    <div className="absolute bottom-4 right-6 flex gap-1">
                        {[...Array(8)].map((_, i) => (
                            <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/5" />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
