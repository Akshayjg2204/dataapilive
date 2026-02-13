"use client";

const stats = [
    {
        value: "99.9%",
        label: "Extraction Accuracy",
        description: "Industry-leading precision",
    },
    {
        value: "500ms",
        label: "Avg. Response Time",
        description: "Lightning-fast processing",
    },
    {
        value: "10M+",
        label: "Pages Daily",
        description: "Processed every day",
    },
    {
        value: "3,000+",
        label: "Active Customers",
        description: "Trust our platform",
    },
];

export default function InnovationSection() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Grid & Stars */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none" />

            {/* Random Stars (Decoration) */}
            <div className="absolute top-20 left-20 w-1 h-1 bg-purple-400 rounded-full animate-pulse" />
            <div className="absolute top-40 right-40 w-1 h-1 bg-cyan-400 rounded-full animate-pulse [animation-delay:1s]" />
            <div className="absolute bottom-20 left-1/3 w-1.5 h-1.5 bg-white/20 rounded-full animate-pulse [animation-delay:2s]" />

            <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                        Powering innovation for <br />
                        <span className="bg-gradient-to-r from-[#60a5fa] to-[#22d3ee] bg-clip-text text-transparent">thousands of developers</span>
                    </h2>
                    <p className="text-lg text-[var(--homepage-text-secondary)] max-w-2xl mx-auto">
                        Join the fastest-growing web data extraction platform with industry-leading performance and reliability metrics
                    </p>
                </div>

                {/* Stats Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, idx) => (
                        <div
                            key={idx}
                            className="group relative bg-[#1a152e] border border-white/5 rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#8b5cf6] hover:shadow-[0_0_50px_rgba(139,92,246,0.3)] overflow-hidden"
                            data-aos="fade-up"
                            data-aos-delay={idx * 100 + 200}
                        >
                            {/* Corner Accents */}
                            <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-[#8b5cf6] rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-[#8b5cf6] rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-[#8b5cf6] rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-[#8b5cf6] rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            <div className="text-5xl font-extrabold text-[#8b5cf6] mb-4 group-hover:scale-105 group-hover:text-white group-hover:drop-shadow-[0_0_15px_rgba(139,92,246,0.8)] transition-all duration-300">
                                {stat.value}
                            </div>
                            <div className="h-[1px] w-12 bg-white/10 mb-4 group-hover:bg-[#8b5cf6] transition-colors duration-300" />
                            <h3 className="text-white font-bold text-lg mb-1 group-hover:text-[#8b5cf6] transition-colors duration-300">
                                {stat.label}
                            </h3>
                            <p className="text-[var(--homepage-text-secondary)] text-sm group-hover:text-white/80 transition-colors duration-300">
                                {stat.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
