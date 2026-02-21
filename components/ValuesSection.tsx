"use client";
import React from "react";
import { motion } from "framer-motion";
import { Target, Zap, Shield, Heart, Users, Lightbulb } from "lucide-react";

const values = [
    {
        icon: Target,
        title: "Mission-Driven",
        description: "We exist to make web data accessible to everyone, eliminating the complexity of data extraction.",
        color: "from-pink-500 to-rose-500",
    },
    {
        icon: Zap,
        title: "Innovation First",
        description: "Constantly pushing boundaries with AI and machine learning to solve hard problems.",
        color: "from-amber-400 to-orange-500",
    },
    {
        icon: Shield,
        title: "Reliability",
        description: "Our customers depend on us. We maintain 99.9% uptime and prioritize stability.",
        color: "from-blue-400 to-cyan-500",
    },
    {
        icon: Heart,
        title: "Customer Success",
        description: "Your success is our success. We go above and beyond to help you achieve your goals.",
        color: "from-red-400 to-pink-500",
    },
    {
        icon: Users,
        title: "Transparency",
        description: "Open communication, fair pricing, and honest relationships with our customers.",
        color: "from-purple-400 to-indigo-500",
    },
    {
        icon: Lightbulb,
        title: "Continuous Learning",
        description: "We learn from every extraction, constantly improving our algorithms and systems.",
        color: "from-yellow-400 to-amber-500",
    },
];

export default function ValuesSection() {
    const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

    const handleInteraction = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="py-20 relative overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Our <span className="text-[#a78bfa]">Values</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        These principles guide every decision we make and every line of code we write
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {values.map((item, index) => {
                        const isActive = activeIndex === index;
                        return (
                            /* Outer div: data-aos ONLY — no onClick, no transition transforms */
                            <div
                                key={index}
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                {/* Inner div: onClick + CSS transitions ONLY — no data-aos */}
                                <div
                                    className={`bg-[#150a2e] p-8 rounded-2xl border transition-all duration-300 group cursor-pointer h-full ${isActive
                                        ? "border-[rgba(139,92,246,0.8)] shadow-[0_0_30px_rgba(139,92,246,0.2)] -translate-y-2"
                                        : "border-[rgba(139,92,246,0.2)] hover:border-[rgba(139,92,246,0.5)] hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] hover:-translate-y-2"
                                        }`}
                                    onClick={() => handleInteraction(index)}
                                >
                                    <div className={`mb-6 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#1a103c] transition-transform duration-300 ${isActive ? "scale-110" : "group-hover:scale-110"}`}>
                                        <item.icon className="w-6 h-6 text-[#a78bfa]" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
