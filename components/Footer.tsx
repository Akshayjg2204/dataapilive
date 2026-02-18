import Link from "next/link";
import { Youtube, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative bg-[#1b113c] border-t border-white/5 pt-20 pb-10 px-6 overflow-hidden">
            <div className="max-w-[1200px] mx-auto relative z-10">
                {/* Top Section */}
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 mb-20 border-b border-white/5 pb-16">
                    {/* Brand & Description - Spans 5 columns */}
                    <div className="lg:col-span-5 space-y-8 pr-8">
                        <Link href="/" className="inline-block">
                            <div className="flex items-center gap-3">
                                <div className="text-3xl font-bold text-[#8b5cf6]">∞</div>
                                <span className="text-2xl font-bold text-white tracking-tight">DataAPI</span>
                            </div>
                        </Link>
                        <p className="text-gray-400 leading-relaxed text-sm max-w-sm">
                            Transform web data extraction with our intelligent AutoEx™ technology. Powered by advanced AI, DataAPI delivers unmatched accuracy and reliability for businesses worldwide. Experience zero-maintenance data extraction that adapts automatically to any website changes.
                        </p>
                    </div>

                    {/* Links Columns */}
                    <div className="lg:col-span-2">
                        <h4 className="font-bold text-white mb-8 text-sm">Product</h4>
                        <ul className="space-y-6 text-sm">
                            {["Services", "Pricing", "FAQ"].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={item === "Services" ? "/services" : item === "Pricing" ? "/pricing" : item === "FAQ" ? "/faq" : "#"}
                                        className="text-gray-400 hover:text-[#8b5cf6] transition-colors"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-2">
                        <h4 className="font-bold text-white mb-8 text-sm">Company</h4>
                        <ul className="space-y-6 text-sm">
                            {["About Us", "Contact"].map((item) => (
                                <li key={item}>
                                    <Link href="/about" className="text-gray-400 hover:text-[#8b5cf6] transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-3">
                        <h4 className="font-bold text-white mb-8 text-sm">Get in Touch</h4>
                        <a href="mailto:connect@dataapi.live" className="inline-flex items-center gap-3 px-6 py-4 rounded-xl bg-[#1a103c]/50 border border-[#8b5cf6]/20 text-gray-300 hover:text-white hover:border-[#8b5cf6]/50 hover:bg-[#1a103c] transition-all group w-full">
                            <Mail className="w-5 h-5 text-[#8b5cf6]" />
                            <span className="text-sm">connect@dataapi.live</span>
                        </a>
                    </div>
                </div>

                {/* Middle Section: Socials & Newsletter */}
                <div className="grid lg:grid-cols-2 gap-12 items-end mb-20">
                    {/* Socials */}
                    <div>
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-6">FOLLOW US</h4>
                        <div className="flex gap-4">
                            {[Youtube, Linkedin, Mail].map((Icon, i) => (
                                <a key={i} href="#" className="w-12 h-12 rounded-full bg-[#1e103f] hover:bg-[#8b5cf6] flex items-center justify-center text-white transition-all duration-300 border border-[#8b5cf6]/20">
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Newsletter Card */}
                    <div className="bg-[#0f0a24] border border-[#2e1d5b] rounded-2xl p-8 lg:p-10 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#8b5cf6]/5 rounded-full blur-[80px] pointer-events-none -translate-y-1/2 translate-x-1/2" />

                        <h3 className="text-xl font-bold text-white mb-6 relative z-10">Stay Updated</h3>
                        <div className="flex flex-col sm:flex-row gap-4 relative z-10">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="flex-1 bg-[#090515] border border-[#2e1d5b] rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#8b5cf6] transition-colors text-sm"
                            />
                            <button className="px-8 py-3 rounded-lg bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-bold transition-all shadow-lg shadow-purple-600/30 text-sm whitespace-nowrap">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-gray-500">
                    <p>&copy; 2026 <span className="text-[#a78bfa]">DataAPI</span>. All rights reserved.</p>
                    <div className="flex gap-8">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                        <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
