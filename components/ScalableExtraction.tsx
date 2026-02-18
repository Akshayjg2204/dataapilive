"use client";
import { useState } from "react";
import { ArrowRight, MessageSquare, CheckCircle, ShieldCheck } from "lucide-react";

const features = [
    {
        id: "01",
        title: "Lightning Fast",
        description: "Average response time under 500ms for most requests with global CDN infrastructure and optimized processing",
    },
    {
        id: "02",
        title: "Highly Reliable",
        description: "99.9% uptime SLA with automatic failover, redundant systems, and enterprise-grade infrastructure",
    },
    {
        id: "03",
        title: "Global Coverage",
        description: "Extract data from websites in any language or region with automatic localization and translation",
    },
    {
        id: "04",
        title: "Simple Integration",
        description: "RESTful API with SDKs for all major languages, comprehensive docs, and excellent developer experience",
    },
    {
        id: "05",
        title: "Enterprise Security",
        description: "Bank-grade encryption, SOC 2 Type II certified, GDPR compliant with advanced data protection",
    },
    {
        id: "06",
        title: "Smart Automation",
        description: "AI-powered extraction that adapts to website changes automatically without manual maintenance",
    },
];

const stats = [
    { value: "3,000+", label: "Active Users" },
    { value: "10M+", label: "API Calls Daily" },
    { value: "99.9%", label: "Uptime SLA" },
];

export default function ScalableExtraction() {
    const [activeId, setActiveId] = useState<number | null>(null);

    const handleInteraction = (idx: number) => {
        setActiveId(prev => prev === idx ? null : idx);
    };

    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-purple-900/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-[1200px] mx-auto px-6 relative z-10">

                {/* Header */}
                <div className="text-center mb-20 animate-fade-up">
                    <div className="inline-block px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-6">
                        Why Choose DataAPI
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
                        Built for developers who need <br />
                        <span className="text-cyan-400">reliable, scalable</span> data extraction
                    </h2>
                    <p className="text-lg text-[var(--homepage-text-secondary)] max-w-2xl mx-auto">
                        Experience the difference with enterprise-grade infrastructure, intelligent automation, and developer-first design
                    </p>
                </div>

                {/* Feature Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
                    {features.map((feature, idx) => {
                        const isActive = activeId === idx;
                        return (
                            <div
                                key={idx}
                                className="animate-fade-up" // Kept existing animation class on wrapper
                                style={{ animationDelay: `${idx * 100}ms` }}
                            >
                                <div
                                    onClick={() => handleInteraction(idx)}
                                    className={`group bg-[#0f0a1f] border border-white/5 rounded-2xl p-8 hover:border-[#8b5cf6]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer h-full ${isActive ? 'border-[#8b5cf6]/30 -translate-y-1 shadow-lg' : ''}`}
                                >
                                    <div className={`w-12 h-12 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-bold text-lg mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 ${isActive ? 'scale-110' : ''}`}>
                                        {feature.id}
                                    </div>
                                    <h3 className={`text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors ${isActive ? 'text-purple-400' : ''}`}>
                                        {feature.title}
                                    </h3>
                                    <p className="text-[var(--homepage-text-secondary)] text-sm leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* CTA Section */}
                <div className="text-center animate-fade-up">
                    <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-gray-300 text-xs font-semibold uppercase tracking-wider mb-8">
                        Start Your Journey
                    </div>

                    <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
                        Ready to transform your <br />
                        <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">data extraction</span>?
                    </h2>

                    <p className="text-lg text-[var(--homepage-text-secondary)] max-w-2xl mx-auto mb-10">
                        Join thousands of developers who trust DataAPI for their web scraping needs. Start extracting data in minutes with our comprehensive API.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                        <button className="px-8 py-4 rounded-xl bg-[#8b5cf6] text-white font-bold hover:bg-[#7c3aed] transition-all duration-300 flex items-center gap-2 hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:scale-105">
                            Start Free Trial <ArrowRight className="w-5 h-5" />
                        </button>
                        <button className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all duration-300 flex items-center gap-2">
                            Talk to Sales <MessageSquare className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 text-sm text-[var(--homepage-text-secondary)] mb-20">
                        <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-emerald-400" />
                            No credit card required
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-emerald-400" />
                            14-day free trial
                        </div>
                        <div className="flex items-center gap-2">
                            <ShieldCheck className="w-4 h-4 text-emerald-400" />
                            Cancel anytime
                        </div>
                    </div>

                    {/* Bottom Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="bg-[#130d25] border border-white/5 rounded-2xl p-8 hover:border-purple-500/30 transition-colors">
                                <div className="text-4xl font-extrabold text-white mb-2">{stat.value}</div>
                                <div className="text-sm text-[var(--homepage-text-secondary)] uppercase tracking-wide font-semibold">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
}
