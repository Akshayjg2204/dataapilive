import Link from "next/link";
import { ArrowRight, Zap, Shield, Activity } from "lucide-react";
import DemoConsole from "./DemoConsole";

export default function Hero() {
    return (
        <section className="relative w-full min-h-[calc(100vh-80px)] pt-[120px] pb-20 overflow-hidden flex flex-col items-center justify-center text-center px-6">
            {/* Background Gradients/Orbs */}
            <div className="absolute top-[-200px] right-[-100px] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.3),transparent_70%)] blur-[100px] animate-float" />
            <div className="absolute bottom-[-150px] left-[-100px] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(0,229,208,0.2),transparent_70%)] blur-[100px] animate-float opacity-70" style={{ animationDelay: "5s" }} />

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(var(--homepage-border-light)_1px,transparent_1px),linear-gradient(90deg,var(--homepage-border-light)_1px,transparent_1px)] bg-[size:50px_50px] opacity-40 pointer-events-none" />

            {/* Badge */}
            <div className="relative z-10" data-aos="fade-down">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--homepage-border)] bg-[var(--homepage-surface)] backdrop-blur-md mb-7 shadow-sm hover:border-[var(--homepage-primary)] hover:shadow-[0_4px_12px_rgba(139,92,246,0.3)] transition-all duration-300 cursor-default">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--homepage-primary)] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--homepage-primary)]"></span>
                    </span>
                    <span className="text-[13px] font-medium text-[var(--homepage-text-secondary)]">
                        Powered by AutoEx™ Technology
                    </span>
                </div>
            </div>

            {/* Headline */}
            <h1 className="relative z-10 text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight mb-4" data-aos="fade-up" data-aos-delay="200">
                Automatic Web Data <br />
                Extraction <span className="bg-gradient-to-r from-[#3b82f6] to-[#00e5d0] bg-clip-text text-transparent">API</span>
            </h1>

            <p className="relative z-10 text-2xl md:text-3xl font-bold bg-gradient-to-r from-[var(--homepage-primary-light)] to-[var(--homepage-accent)] bg-clip-text text-transparent mb-5" data-aos="fade-up" data-aos-delay="300">
                Real Time Every Time
            </p>

            {/* Description */}
            <p className="relative z-10 text-lg text-[var(--homepage-text-secondary)] max-w-[680px] mx-auto mb-8 leading-relaxed" data-aos="fade-up" data-aos-delay="400">
                Extract structured data from any website automatically with our intelligent AutoEx technology. No more broken selectors or constant maintenance. Just the data you need, when you need it.
            </p>

            {/* Buttons */}
            <div className="relative z-10 flex flex-wrap items-center justify-center gap-4 mb-8" data-aos="fade-up" data-aos-delay="500">
                <Link href="/signup" className="group relative flex items-center gap-2 px-8 py-3.5 bg-gradient-to-br from-[var(--homepage-primary-dark)] to-[var(--homepage-primary)] rounded-xl font-semibold text-base shadow-[0_4px_14px_rgba(139,92,246,0.4)] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(139,92,246,0.5)] transition-all duration-300 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:animate-[shimmer_1.5s_infinite]" />
                    <span>Start Free Trial</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/docs" className="flex items-center px-8 py-3.5 bg-[rgba(255,255,255,0.05)] border border-[var(--homepage-border)] rounded-xl font-semibold text-base hover:bg-[rgba(255,255,255,0.08)] hover:border-[var(--homepage-primary)] hover:text-[var(--homepage-primary)] transition-all duration-300 backdrop-blur-sm">
                    View Documentation
                </Link>
            </div>

            {/* Trust Badges */}
            <div className="relative z-10 flex flex-wrap items-center justify-center gap-8 mb-12 text-sm font-medium text-[var(--homepage-text-secondary)]" data-aos="fade-up" data-aos-delay="600">
                <div className="flex items-center gap-2 hover:text-white transition-colors">
                    <Activity className="w-5 h-5 text-[var(--homepage-primary)]" />
                    99.9% Uptime
                </div>
                <div className="flex items-center gap-2 hover:text-white transition-colors">
                    <Shield className="w-5 h-5 text-[var(--homepage-primary)]" />
                    SOC 2 Certified
                </div>
                <div className="flex items-center gap-2 hover:text-white transition-colors">
                    <Zap className="w-5 h-5 text-[var(--homepage-primary)]" />
                    Lightning Fast
                </div>
            </div>

            {/* Demo Console */}
            <div data-aos="zoom-in" data-aos-delay="700">
                <DemoConsole />
            </div>
        </section>
    );
}
