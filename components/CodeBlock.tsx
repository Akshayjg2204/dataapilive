"use client";
import { useState } from "react";
import { Check, Copy } from "lucide-react";

export default function CodeBlock() {
    const [copied, setCopied] = useState(false);

    const code = `curl -X POST https://api.dataapi.live/v1/extract \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -d '{
    "url": "https://example.com/products",
    "render_js": true,
    "waiting_network": true,
    "premium_proxy": true
  }'`;

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section className="py-20 relative px-6">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Simple, Powerful <span className="text-[var(--homepage-primary-light)]">API</span>
                    </h2>
                    <p className="text-[var(--homepage-text-secondary)]">
                        Integrate in minutes with our clean and well-documented API.
                    </p>
                </div>

                <div className="relative rounded-2xl overflow-hidden border border-[var(--homepage-border)] bg-[#0d0d0d] shadow-2xl">
                    <div className="flex items-center justify-between px-4 py-3 bg-[rgba(255,255,255,0.05)] border-b border-[var(--homepage-border-light)]">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/80" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                            <div className="w-3 h-3 rounded-full bg-green-500/80" />
                        </div>
                        <button
                            onClick={handleCopy}
                            className="flex items-center gap-2 text-xs font-medium text-[var(--homepage-text-secondary)] hover:text-white transition-colors"
                        >
                            {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                            {copied ? "Copied!" : "Copy"}
                        </button>
                    </div>
                    <div className="p-6 overflow-x-auto">
                        <pre className="font-mono text-sm leading-relaxed text-gray-300">
                            <code>
                                <span className="text-purple-400">curl</span> -X POST <span className="text-green-400">https://api.dataapi.live/v1/extract</span> \<br />
                                &nbsp;&nbsp;-H <span className="text-yellow-300">"Content-Type: application/json"</span> \<br />
                                &nbsp;&nbsp;-H <span className="text-yellow-300">"Authorization: Bearer YOUR_API_KEY"</span> \<br />
                                &nbsp;&nbsp;-d <span className="text-blue-300">'{"{"}</span><br />
                                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-cyan-300">"url"</span>: <span className="text-green-300">"https://example.com/products"</span>,<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-cyan-300">"render_js"</span>: <span className="text-orange-400">true</span>,<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-cyan-300">"waiting_network"</span>: <span className="text-orange-400">true</span>,<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-cyan-300">"premium_proxy"</span>: <span className="text-orange-400">true</span><br />
                                &nbsp;&nbsp;<span className="text-blue-300">{"}"}'</span>
                            </code>
                        </pre>
                    </div>
                </div>
            </div>
        </section>
    );
}
