export default function Stats() {
    return (
        <section className="py-20 relative">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                        { value: "90M+", label: "Requests / Day" },
                        { value: "190+", label: "Countries" },
                        { value: "99.9%", label: "Uptime SLA" },
                        { value: "0.2s", label: "Avg Latency" }
                    ].map((stat, idx) => (
                        <div key={idx} className="relative group bg-[rgba(255,255,255,0.03)] border border-[var(--homepage-border)] rounded-2xl p-8 flex flex-col items-center justify-center text-center transition-all duration-500 hover:border-[var(--homepage-primary)] hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(139,92,246,0.15)]">
                            <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-[var(--homepage-text-secondary)] mb-2 group-hover:from-[var(--homepage-primary)] group-hover:to-[var(--homepage-accent)] transition-all duration-300">
                                {stat.value}
                            </div>
                            <div className="text-sm font-semibold text-[var(--homepage-text-secondary)] uppercase tracking-wider group-hover:text-white transition-colors">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
