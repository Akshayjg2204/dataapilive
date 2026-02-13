"use client";
import { X, Check } from "lucide-react";

const problems = [
    {
        title: "Brittle Selectors",
        description: "CSS and XPath selectors break when websites change their structure",
    },
    {
        title: "Constant Maintenance",
        description: "Engineers spend hours updating scrapers for each website change",
    },
    {
        title: "Dynamic Content",
        description: "JavaScript-rendered content is difficult to extract reliably",
    },
    {
        title: "Inconsistent Data",
        description: "Different websites structure similar data in different ways",
    },
];

const solutions = [
    {
        title: "Intelligent Structure Recognition",
        description: "Automatically identifies data patterns regardless of HTML structure",
    },
    {
        title: "Self-Adapting Extraction",
        description: "Adapts to website changes automatically without manual updates",
    },
    {
        title: "Full JavaScript Rendering",
        description: "Captures dynamically loaded content just like a real browser",
    },
    {
        title: "Structured JSON Output",
        description: "Clean, consistent data ready for immediate integration",
    },
];

export default function ComparisonSection() {
    return (
        <section className="py-16 relative overflow-hidden" id="comparison">
            <div className="max-w-[1400px] mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-12" data-aos="fade-up">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
                        Meet <span className="bg-gradient-to-r from-[var(--homepage-accent)] to-[#22c55e] bg-clip-text text-transparent">AutoEx™</span> Technology
                    </h2>
                    <p className="text-lg text-[var(--homepage-text-secondary)] max-w-2xl mx-auto">
                        Our flagship product that revolutionizes web data extraction with intelligent automation.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    {/* Problems Column */}
                    <div>
                        <h3 className="text-2xl font-bold text-[#ef4444] mb-8 text-center md:text-left" data-aos="fade-right">
                            The Problem with Traditional Extraction
                        </h3>
                        <div className="space-y-6">
                            {problems.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="group relative bg-[#0a051e] border border-white/5 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(239,68,68,0.15)]"
                                    data-aos="fade-up"
                                    data-aos-delay={idx * 100}
                                >
                                    {/* Left Gradient Border */}
                                    <div className="absolute left-0 top-4 bottom-4 w-1 bg-gradient-to-b from-[#ef4444] to-transparent rounded-r-full opacity-50 group-hover:opacity-100 transition-opacity" />

                                    {/* Hover Glow Background */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#ef4444]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                                    <div className="flex items-start gap-5 relative z-10">
                                        <div className="flex-shrink-0 w-12 h-12 bg-[#2a0e0e] border border-[rgba(239,68,68,0.2)] rounded-xl flex items-center justify-center shadow-none transition-all duration-500 group-hover:bg-[#ef4444] group-hover:shadow-[0_0_20px_rgba(239,68,68,0.6)] group-hover:border-transparent">
                                            <X className="w-6 h-6 text-[#ef4444] transition-all duration-500 group-hover:rotate-180 group-hover:text-white" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-white mb-2 group-hover:text-[#ef4444] transition-colors duration-300">
                                                {item.title}
                                            </h4>
                                            <p className="text-[var(--homepage-text-secondary)] leading-relaxed text-sm md:text-base">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Solutions Column */}
                    <div>
                        <h3 className="text-2xl font-bold text-[var(--homepage-accent)] mb-8 text-center md:text-left" data-aos="fade-left">
                            The AutoEx™ Solution
                        </h3>
                        <div className="space-y-6">
                            {solutions.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="group relative bg-[#0a051e] border border-white/5 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(0,229,208,0.15)]"
                                    data-aos="fade-up"
                                    data-aos-delay={idx * 100 + 400}
                                >
                                    {/* Left Gradient Border */}
                                    <div className="absolute left-0 top-4 bottom-4 w-1 bg-gradient-to-b from-[var(--homepage-accent)] to-transparent rounded-r-full opacity-50 group-hover:opacity-100 transition-opacity" />

                                    {/* Hover Glow Background */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-[var(--homepage-accent)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                                    <div className="flex items-start gap-5 relative z-10">
                                        <div className="flex-shrink-0 w-12 h-12 bg-[#0e2a25] border border-[rgba(16,185,129,0.2)] rounded-xl flex items-center justify-center shadow-none transition-all duration-500 group-hover:bg-[var(--homepage-accent)] group-hover:shadow-[0_0_20px_rgba(0,229,208,0.6)] group-hover:border-transparent">
                                            <Check className="w-6 h-6 text-[var(--homepage-accent)] transition-colors duration-300 group-hover:text-[#0f0728]" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-white mb-2 group-hover:text-[var(--homepage-accent)] transition-colors duration-300">
                                                {item.title}
                                            </h4>
                                            <p className="text-[var(--homepage-text-secondary)] leading-relaxed text-sm md:text-base">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
