import React from 'react';
import JourneySection from '@/components/JourneySection';
import ValuesSection from '@/components/ValuesSection';
import TeamSection from '@/components/TeamSection';
import JoinSection from '@/components/JoinSection';

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-[#0a051e] text-white">

            {/* Hero Section */}
            <section className="pt-32 pb-20 relative overflow-hidden">
                <div className="max-w-[1400px] mx-auto px-6 relative z-10 text-center">

                    {/* Headline */}
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight" data-aos="fade-up">
                        Building the Future of <br />
                        <span className="bg-gradient-to-r from-[#8b5cf6] to-[#c4b5fd] bg-clip-text text-transparent">
                            Web Data Extraction
                        </span>
                    </h1>

                    {/* Subtext */}
                    <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-16 leading-relaxed" data-aos="fade-up" data-aos-delay="100">
                        We're on a mission to democratize web data extraction through intelligent automation. Founded by developers who experienced the pain of maintaining web scrapers firsthand, we built the solution we wished existed.
                    </p>

                    {/* Stats Card */}
                    <div className="bg-[#100826] rounded-3xl p-10 md:p-16 shadow-[0_0_50px_rgba(139,92,246,0.1)] border border-white/5" data-aos="fade-up" data-aos-delay="200">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                            {/* Stat 1 */}
                            <div className="text-center">
                                <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400 mb-2">
                                    5M+
                                </div>
                                <div className="text-sm font-medium text-gray-400">
                                    Daily Extractions
                                </div>
                            </div>

                            {/* Stat 2 */}
                            <div className="text-center">
                                <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400 mb-2">
                                    195+
                                </div>
                                <div className="text-sm font-medium text-gray-400">
                                    Countries Served
                                </div>
                            </div>

                            {/* Stat 3 */}
                            <div className="text-center">
                                <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400 mb-2">
                                    50+
                                </div>
                                <div className="text-sm font-medium text-gray-400">
                                    Team Members
                                </div>
                            </div>

                            {/* Stat 4 */}
                            <div className="text-center">
                                <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400 mb-2">
                                    5,000+
                                </div>
                                <div className="text-sm font-medium text-gray-400">
                                    Happy Customers
                                </div>
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
