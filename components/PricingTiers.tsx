"use client";
import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface PricingTiersProps {
    billingCycle: 'monthly' | 'annual';
}

export default function PricingTiers({ billingCycle }: PricingTiersProps) {
    const calculatePrice = (monthlyPrice: number) => {
        if (billingCycle === 'annual') {
            return Math.floor(monthlyPrice * 0.8);
        }
        return monthlyPrice;
    };

    const cardClasses = "bg-[#150a2e] rounded-3xl p-8 border-2 border-[#8b5cf6] flex flex-col relative overflow-hidden shadow-[inset_0_0_50px_rgba(139,92,246,0.3)] hover:shadow-[inset_0_0_100px_rgba(139,92,246,0.6)] transition-shadow duration-300 h-full group text-left";

    const topGlow = (
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#8b5cf6]/30 to-transparent pointer-events-none" />
    );

    // Reusable Feature Item Component with Hover Animation
    const FeatureItem = ({ text }: { text: string }) => (
        <div className="group/item relative flex items-center gap-3 p-3 rounded-lg bg-[#1e103f] border border-[#2e1065]/50 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[#8b5cf6]/30 hover:bg-[#251b4f]">
            {/* Glowing Side Line */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#8b5cf6] shadow-[0_0_15px_rgba(139,92,246,0.8)] opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />

            <div className="w-5 h-5 rounded-full bg-[#3b1c6d] flex items-center justify-center flex-shrink-0 group-hover/item:bg-[#8b5cf6] transition-colors duration-300">
                <Check className="w-3 h-3 text-[#a78bfa] group-hover/item:text-white transition-colors duration-300" />
            </div>
            <span className="text-gray-300 text-xs font-medium group-hover/item:text-white transition-colors duration-300">{text}</span>
        </div>
    );

    return (
        <section className="pb-32 relative z-10">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Starter Plan */}
                    <div className="relative group/card">
                        <motion.div
                            whileHover={{ y: -8 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className={cardClasses}
                        >
                            {topGlow}

                            <div className="mb-8 mt-10">
                                <h3 className="text-3xl font-extrabold text-white text-center mb-4">Starter</h3>
                                <p className="text-gray-300 text-sm text-center px-4 leading-relaxed">
                                    Perfect for individual developers and small projects
                                </p>
                            </div>

                            <div className="mb-8 text-center border-b border-[#2e1065] pb-8 mx-4">
                                <div className="flex items-start justify-center gap-1 group-hover/card:scale-105 transition-transform duration-300 text-center">
                                    <span className="text-3xl font-bold text-[#8b5cf6] mt-2">$</span>
                                    <span className="text-7xl font-extrabold text-white tracking-tighter">
                                        {calculatePrice(49)}
                                    </span>
                                    <span className="text-gray-400 self-end mb-2">/month</span>
                                </div>
                            </div>

                            <Link href="/signup?plan=starter" className="w-full py-4 rounded-xl bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-bold text-center transition-all duration-300 shadow-[0_0_25px_rgba(139,92,246,0.5)] hover:shadow-[0_0_40px_rgba(139,92,246,0.7)] mb-10 flex items-center justify-center gap-2 hover:-translate-y-1">
                                Start Free Trial <ArrowRight className="w-4 h-4" />
                            </Link>

                            <div className="space-y-3 flex-grow">
                                <p className="text-[10px] font-bold text-white uppercase tracking-widest mb-4 pl-1">WHAT'S INCLUDED:</p>
                                {[
                                    "10,000 API calls/month",
                                    "5 concurrent requests",
                                    "Basic AutoEx™ extraction",
                                    "Email support",
                                    "7-day data retention",
                                    "Standard rate limits",
                                    "Community access"
                                ].map((feature, i) => (
                                    <FeatureItem key={i} text={feature} />
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Professional Plan */}
                    <div className="relative text-center group/card">
                        <div className="relative inline-block w-full h-full">
                            {/* Most Popular Badge - Floating above */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
                                <div className="bg-[#8b5cf6] text-white text-[12px] font-extrabold px-6 py-2 rounded-full uppercase tracking-wider shadow-[0_0_20px_rgba(139,92,246,0.6)] ring-4 ring-[#0a051e]">
                                    Most Popular
                                </div>
                            </div>

                            <motion.div
                                whileHover={{ y: -8 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                className={cardClasses}
                            >
                                {topGlow}

                                <div className="mb-8 mt-10">
                                    <h3 className="text-4xl font-extrabold text-white text-center mb-4">Professional</h3>
                                    <p className="text-gray-300 text-sm text-center px-4 leading-relaxed">
                                        For growing teams and businesses
                                    </p>
                                </div>

                                <div className="mb-8 text-center border-b border-[#2e1065] pb-8 mx-4">
                                    <div className="flex items-start justify-center gap-1 group-hover/card:scale-105 transition-transform duration-300 text-center">
                                        <span className="text-3xl font-bold text-[#8b5cf6] mt-2">$</span>
                                        <span className="text-8xl font-extrabold text-white tracking-tighter">
                                            {calculatePrice(199)}
                                        </span>
                                        <span className="text-gray-400 self-end mb-2">/month</span>
                                    </div>
                                </div>

                                <Link href="/signup?plan=pro" className="w-full py-4 rounded-xl bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-bold text-center transition-all duration-300 shadow-[0_0_25px_rgba(139,92,246,0.5)] hover:shadow-[0_0_40px_rgba(139,92,246,0.7)] mb-10 flex items-center justify-center gap-2 hover:-translate-y-1">
                                    Start Free Trial <ArrowRight className="w-4 h-4" />
                                </Link>

                                <div className="space-y-3 flex-grow">
                                    <p className="text-[10px] font-bold text-white uppercase tracking-widest mb-4 pl-1">WHAT'S INCLUDED:</p>
                                    {[
                                        "100,000 API calls/month",
                                        "20 concurrent requests",
                                        "Advanced AutoEx™ features",
                                        "Priority email support",
                                        "30-day data retention",
                                        "Higher rate limits",
                                        "Webhook integrations",
                                        "Analytics dashboard",
                                        "Custom extraction rules"
                                    ].map((feature, i) => (
                                        <FeatureItem key={i} text={feature} />
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Enterprise Plan */}
                    <div className="relative group/card">
                        <motion.div
                            whileHover={{ y: -8 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className={cardClasses}
                        >
                            {topGlow}

                            <div className="mb-8 mt-10">
                                <h3 className="text-3xl font-extrabold text-white text-center mb-4">Enterprise</h3>
                                <p className="text-gray-400 text-sm text-center px-4 leading-relaxed">
                                    Custom solutions for large organizations
                                </p>
                            </div>

                            <div className="mb-8 text-center flex flex-col justify-center h-[120px] border-b border-[#2e1065] pb-8 mx-4">
                                <span className="text-6xl font-extrabold text-[#a78bfa] tracking-tight">
                                    Custom
                                </span>
                            </div>

                            <Link href="/contact" className="w-full py-4 rounded-xl bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-bold text-center transition-all duration-300 shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] mb-10 flex items-center justify-center gap-2 hover:-translate-y-1">
                                Contact Sales <ArrowRight className="w-4 h-4" />
                            </Link>

                            <div className="space-y-3 flex-grow">
                                <p className="text-[10px] font-bold text-white uppercase tracking-widest mb-4 pl-1">WHAT'S INCLUDED:</p>
                                {[
                                    "Unlimited API calls",
                                    "Unlimited concurrent requests",
                                    "Full AutoEx™ platform access",
                                    "24/7 priority support",
                                    "Custom data retention",
                                    "Dedicated infrastructure",
                                    "Custom SLA agreements",
                                    "SOC 2 compliance",
                                    "Dedicated account manager",
                                    "Custom integrations",
                                    "Advanced analytics",
                                    "White-label options"
                                ].map((feature, i) => (
                                    <FeatureItem key={i} text={feature} />
                                ))}
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
