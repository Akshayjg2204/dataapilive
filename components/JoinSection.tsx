"use client";
import React from "react";
import { ArrowRight, Check } from "lucide-react";

export default function JoinSection() {
    return (
        <section className="py-20 relative overflow-hidden">
            <div className="max-w-[1000px] mx-auto px-6 relative z-10 text-center">
                <div data-aos="fade-up">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Join Us on This <span className="text-[#a78bfa]">Journey</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                        We're always looking for talented individuals who share our passion for making data extraction effortless. If you're interested in working with us, we'd love to hear from you.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
                        <a href="#careers" className="px-8 py-4 bg-gradient-to-r from-[#8b5cf6] to-[#a78bfa] text-white font-bold rounded-xl shadow-[0_4px_14px_rgba(139,92,246,0.4)] hover:shadow-[0_6px_20px_rgba(139,92,246,0.6)] hover:scale-105 transition-all duration-300 flex items-center gap-2">
                            View Open Positions
                            <ArrowRight className="w-5 h-5" />
                        </a>
                        <a href="mailto:careers@dataapi.com" className="text-[#a78bfa] font-semibold hover:text-white transition-colors underline decoration-2 underline-offset-4 decoration-[#a78bfa] hover:decoration-white">
                            careers@dataapi.com
                        </a>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                        {["Remote-first culture", "Competitive compensation", "Learning & development"].map((item, index) => (
                            <div key={index} className="flex items-center gap-2 px-5 py-2 rounded-full border border-[rgba(139,92,246,0.3)] bg-[rgba(139,92,246,0.1)]">
                                <div className="w-5 h-5 rounded-full bg-[#a78bfa] flex items-center justify-center">
                                    <Check className="w-3 h-3 text-white" />
                                </div>
                                <span className="text-sm text-gray-300 font-medium">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
