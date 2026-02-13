import React from 'react';
import AutoExSection from '@/components/AutoExSection';

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-[#0a051e] text-white">

            {/* Hero Section */}
            <section className="pt-40 pb-20 relative overflow-hidden">
                <div className="max-w-[1200px] mx-auto px-6 relative z-10 text-center">

                    {/* Background Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#8b5cf6] rounded-full blur-[120px] opacity-10 -z-10"></div>

                    {/* Headline */}
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight leading-tight" data-aos="fade-up">
                        Services Built for <br />
                        <span className="bg-gradient-to-r from-[#8b5cf6] via-[#a78bfa] to-[#60a5fa] bg-clip-text text-transparent">
                            Every Scale
                        </span>
                    </h1>

                    {/* Subtext */}
                    <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed" data-aos="fade-up" data-aos-delay="100">
                        Comprehensive data extraction solutions designed to meet every need, from startups to enterprises. Choose the perfect service for your requirements.
                    </p>
                </div>
            </section>

            <AutoExSection />

        </main>
    );
}
