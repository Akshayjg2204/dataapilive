"use client";
import { Check, ArrowUpRight, Terminal, Activity, Zap, Server, Shield } from "lucide-react";

const apis = [
    {
        id: "01",
        method: "GET",
        title: "People Information",
        description: "Extract structured data about people from profiles, directories, and contact pages with AI-powered accuracy",
        endpoint: "/api/v1/autoex/get_people",
        features: ["Names and titles", "Contact information", "Biographical details"],
    },
    {
        id: "02",
        method: "GET",
        title: "Product Data",
        description: "Automatically extract product details from e-commerce sites and catalogs with real-time pricing",
        endpoint: "/api/v1/autoex/get_prod",
        features: ["Prices and descriptions", "Images and specifications", "Inventory status"],
    },
    {
        id: "03",
        method: "GET",
        title: "Article Content",
        description: "Extract clean article text, metadata, and structured content from any publication instantly",
        endpoint: "/api/v1/autoex/get_article",
        features: ["Headlines and authors", "Publication dates", "Full article text"],
    },
    {
        id: "04",
        method: "GET",
        title: "Business Information",
        description: "Gather comprehensive business data from company pages and directories with location intelligence",
        endpoint: "/api/v1/autoex/get_business",
        features: ["Contact details", "Business hours", "Locations and reviews"],
    },
    {
        id: "05",
        method: "POST",
        title: "Custom Extraction",
        description: "Define your own extraction patterns for any type of structured data with flexible field mapping",
        endpoint: "/api/v1/autoex/extract",
        features: ["Flexible field mapping", "Custom validation rules", "Batch processing"],
    },
];

const metrics = [
    { icon: Activity, value: "99.9%", label: "Success Rate" },
    { icon: Zap, value: "50ms", label: "Avg Latency" },
    { icon: Server, value: "5", label: "API Endpoints" },
    { icon: Shield, value: "24/7", label: "Support" },
];

export default function SpecializedAPIs() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-900/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-900/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-[1400px] mx-auto px-6 relative z-10">

                {/* Header */}
                <div className="text-center mb-20" data-aos="fade-up">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-[var(--homepage-accent)] mb-6">
                        <Terminal className="w-4 h-4" />
                        <span>API Endpoints</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
                        Specialized extraction <br />
                        <span className="bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] bg-clip-text text-transparent">APIs</span> for every need
                    </h2>
                    <p className="text-lg text-[var(--homepage-text-secondary)] max-w-2xl mx-auto">
                        Purpose-built extraction APIs for different data types, all powered by our intelligent AutoEx™ technology with enterprise-grade reliability
                    </p>
                </div>

                {/* API Cards Grid */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                    {apis.slice(0, 4).map((api, idx) => (
                        <ApiCard key={idx} api={api} index={idx} />
                    ))}
                </div>

                {/* Full Width Card for Custom Extraction */}
                <div className="mb-20">
                    <ApiCard api={apis[4]} index={4} fullWidth />
                </div>

                {/* Performance Metrics Dashboard */}
                <div className="bg-[#0f0718] border border-white/10 rounded-3xl p-6 md:p-12" data-aos="fade-up">
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="text-2xl font-bold text-white">Performance Metrics</h3>
                        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase border border-emerald-500/20">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            Live
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {metrics.map((metric, idx) => (
                            <div key={idx} className="bg-white/5 rounded-2xl p-4 md:p-6 border border-white/5 hover:border-white/10 transition-colors group">
                                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#1a152e] to-[#2a2540] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <metric.icon className="w-5 h-5 text-[#8b5cf6]" />
                                </div>
                                <div className="text-3xl font-bold text-white mb-1 group-hover:text-[#8b5cf6] transition-colors">{metric.value}</div>
                                <div className="text-sm text-[var(--homepage-text-secondary)]">{metric.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}

function ApiCard({ api, index, fullWidth = false }: { api: any, index: number, fullWidth?: boolean }) {
    return (
        <div
            className={`group relative bg-[#0a051e] border border-white/5 rounded-3xl p-8 hover:border-[#8b5cf6]/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(139,92,246,0.15)] ${fullWidth ? 'md:grid md:grid-cols-2 md:gap-12 md:items-center' : ''}`}
            style={{ transitionDelay: '0ms' }}
            data-aos="fade-up"
            data-aos-delay={index * 100}
        >
            <div className={fullWidth ? 'order-2' : ''}>
                <div className="flex justify-between items-start mb-6">
                    <div className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-[#8b5cf6] uppercase tracking-wider">
                        {api.method}
                    </div>
                    <div className="text-4xl font-extrabold text-white/5 group-hover:text-white/10 transition-colors">
                        {api.id}
                    </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#8b5cf6] transition-colors">
                    {api.title}
                </h3>
                <p className="text-[var(--homepage-text-secondary)] text-sm mb-6 leading-relaxed">
                    {api.description}
                </p>

                {/* Endpoint Code Box */}
                <div className="bg-[#0f0a25] rounded-xl p-4 mb-6 border border-white/5 font-mono text-xs text-gray-400 group-hover:border-[#8b5cf6]/30 transition-colors relative overflow-hidden">
                    <span className="text-[#8b5cf6]">ENDPOINT</span>
                    <div className="mt-2 text-white overflow-x-auto whitespace-nowrap">
                        {api.endpoint}
                    </div>
                </div>

                <div className="space-y-2 mb-8">
                    {api.features.map((feature: string, idx: number) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-[var(--homepage-text-secondary)]">
                            <Check className="w-4 h-4 text-[#8b5cf6]" />
                            {feature}
                        </div>
                    ))}
                </div>

                <button className="w-full py-3 rounded-xl bg-[#8b5cf6] text-white font-bold text-sm hover:bg-[#7c3aed] transition-colors flex items-center justify-center gap-2 group/btn">
                    View Docs <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </button>
            </div>

            {/* For custom extraction full width card, maybe add an image or visual on the left? 
                The prompt image for #05 just shows it as a wide card but content is similar. 
                I'll stick to simple layout but spread if needed. 
                Actually looking at the image #05 is just below #03 and #04, it might be same width or centered?
                Image shows #01 #02 on row 1, #03 #04 on row 2, and #05 on row 3 (centered or left aligned? looks like it takes half width visual but usually these are centered or full. 
                Wait, looking at the crop images, #05 is in a grid. The prompts says "add THIS section", implying the whole block.
                I will make #05 max-w-2xl mx-auto if it's single, or just put it in the grid if I want 3 rows.
                But the design typically is 2 cols. 5 items -> 2, 2, 1.
                I'll make the 5th item half-width centered or full width. 
                Let's make it full width distinct card or just centered. 
                The current code makes it full width div wrapper, and inside I can style it.
                I'll keep it simple: 2 columns, last one spans 2 cols? Or just centered.
                Let's try spans 2 cols.
            */}
        </div>
    );
}
