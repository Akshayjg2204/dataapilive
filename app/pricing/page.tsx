"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PricingTiers from '@/components/PricingTiers';
import QuestionsSection from '@/components/QuestionsSection';

export default function PricingPage() {
    const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

    return (
        <main className="min-h-screen bg-[#0a051e] text-white pt-32 pb-20">
            <div className="max-w-[1200px] mx-auto px-6 relative z-10 text-center">

                {/* Background Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#8b5cf6]/20 rounded-full blur-[120px] pointer-events-none -z-10" />

                {/* Headline */}
                <h1 className="text-6xl md:text-8xl font-extrabold mb-8 tracking-tight leading-tight" data-aos="fade-up">
                    Simple, Transparent <br />
                    <span className="bg-gradient-to-r from-[#8b5cf6] to-[#a78bfa] bg-clip-text text-transparent">
                        Pricing
                    </span>
                </h1>

                {/* Subtext */}
                <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-16 leading-relaxed" data-aos="fade-up" data-aos-delay="100">
                    Choose the perfect plan for your needs. All plans include our core AutoEx™ technology and 14-day free trial.
                </p>

                {/* Toggle Switch */}
                <div className="flex justify-center mb-20" data-aos="fade-up" data-aos-delay="200">
                    <div className="relative p-2 bg-[#1a103c]/50 border border-[#8b5cf6]/20 rounded-full flex items-center gap-1">
                        {/* Monthly Button */}
                        <button
                            onClick={() => setBillingCycle('monthly')}
                            className={`relative z-10 px-10 py-4 rounded-full text-base font-bold transition-all duration-300 focus:outline-none ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400 hover:text-white'
                                }`}
                        >
                            Monthly
                            {billingCycle === 'monthly' && (
                                <motion.div
                                    layoutId="billingCycleHighlight"
                                    className="absolute inset-0 bg-[#8b5cf6] rounded-full -z-10 shadow-[0_0_20px_rgba(139,92,246,0.5)]"
                                    initial={false}
                                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                />
                            )}
                        </button>

                        {/* Annual Button */}
                        <button
                            onClick={() => setBillingCycle('annual')}
                            className={`relative z-10 px-10 py-4 rounded-full text-base font-bold transition-all duration-300 focus:outline-none flex items-center gap-3 ${billingCycle === 'annual' ? 'text-white' : 'text-gray-400 hover:text-white'
                                }`}
                        >
                            Annual
                            <span className="text-[11px] font-extrabold px-2.5 py-1 rounded-full bg-gray-600/50 text-gray-300 border border-gray-500/30">
                                Save 20%
                            </span>
                            {billingCycle === 'annual' && (
                                <motion.div
                                    layoutId="billingCycleHighlight"
                                    className="absolute inset-0 bg-[#8b5cf6] rounded-full -z-10 shadow-[0_0_20px_rgba(139,92,246,0.5)]"
                                    initial={false}
                                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                />
                            )}
                        </button>
                    </div>
                </div>

                {/* Pricing Tiers */}
                <div data-aos="fade-up" data-aos-delay="300">
                    <PricingTiers billingCycle={billingCycle} />
                </div>

                <QuestionsSection />

            </div>
        </main>
    );
}
