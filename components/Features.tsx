import { Shield, Zap, Globe, Code, Layers, MousePointer } from "lucide-react";

const features = [
    {
        icon: <Globe className="w-6 h-6 text-white" />,
        title: "Global Proxy Network",
        desc: "Access millions of residential and datacenter IPs from 190+ countries. Never get blocked again.",
        color: "from-blue-500 to-indigo-500"
    },
    {
        icon: <Shield className="w-6 h-6 text-white" />,
        title: "Anti-Bot Bypass",
        desc: "Automatically handle captchas, fingerprinting, and behavioral analysis with our AI-driven system.",
        color: "from-purple-500 to-pink-500"
    },
    {
        icon: <Zap className="w-6 h-6 text-white" />,
        title: "Lightning Fast",
        desc: "Average response time of <200ms. Built for high-concurrency and real-time applications.",
        color: "from-amber-400 to-orange-500"
    },
    {
        icon: <Code className="w-6 h-6 text-white" />,
        title: "Simple Integration",
        desc: "One simple API endpoint for all your needs. Compatible with Python, Node.js, Go, and more.",
        color: "from-emerald-400 to-cyan-500"
    },
    {
        icon: <Layers className="w-6 h-6 text-white" />,
        title: "Structured Data",
        desc: "Get clean JSON responses. Our AI automatically parses products, articles, and listings.",
        color: "from-pink-500 to-rose-500"
    },
    {
        icon: <MousePointer className="w-6 h-6 text-white" />,
        title: "Headless Browser",
        desc: "Full JavaScript rendering support. Click, scroll, and interact with complex SPAs effortlessly.",
        color: "from-cyan-400 to-blue-500"
    }
];

export default function Features() {
    return (
        <section id="services" className="py-[140px] relative overflow-hidden">
            {/* Background Mesh */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(139,92,246,0.1),transparent_50%)]" />

            <div className="max-w-[1200px] mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-up">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
                        Everything you need to <br />
                        <span className="bg-gradient-to-r from-[var(--homepage-primary)] to-[var(--homepage-accent)] bg-clip-text text-transparent">Scale your Scraping</span>
                    </h2>
                    <p className="text-lg text-[var(--homepage-text-secondary)]">
                        Built by developers for developers. We handle the infrastructure so you can focus on the data.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, idx) => (
                        <div
                            key={idx}
                            className="group relative p-[1px] rounded-3xl bg-transparent hover:bg-gradient-to-b hover:from-[var(--homepage-primary)] hover:to-[var(--homepage-accent)] transition-all duration-500 animate-fade-up"
                            style={{ animationDelay: `${idx * 100}ms` }}
                        >
                            <div className="relative h-full bg-[rgba(26,15,58,0.6)] backdrop-blur-xl border border-[var(--homepage-border)] rounded-3xl p-8 transition-all duration-300 group-hover:translate-y-[-4px] overflow-hidden">
                                {/* Inner Glow */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[rgba(139,92,246,0.1)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                    {feature.icon}
                                </div>

                                <h3 className="text-xl font-bold mb-3 group-hover:text-[var(--homepage-primary-light)] transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-[var(--homepage-text-secondary)] leading-relaxed">
                                    {feature.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
