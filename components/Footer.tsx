import Link from "next/link";
import { Youtube, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative bg-[#050210] border-t border-white/5 pt-20 pb-10 px-6 overflow-hidden">
            <div className="max-w-[1200px] mx-auto relative z-10">
                {/* Top Section */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 mb-10 lg:mb-20">
                    {/* Brand */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-2">
                            {/* Logo Icon (Using text or simple svg if image not available, but user had image before. I'll use the text/icon combo style) */}
                            <div className="text-2xl font-bold text-white flex items-center gap-2">
                                <span className="text-[#8b5cf6]">∞</span> DataAPI
                            </div>
                        </Link>
                        <p className="text-gray-400 leading-relaxed max-w-md">
                            Transform web data extraction with our intelligent AutoEx™ technology. Powered by advanced AI, DataAPI delivers unmatched accuracy and reliability for businesses worldwide. Experience zero-maintenance data extraction that adapts automatically to any website changes.
                        </p>
                    </div>

                    {/* Links Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                        <div>
                            <h4 className="font-bold text-white mb-6">Product</h4>
                            <ul className="space-y-4">
                                {["Services", "Pricing", "FAQ"].map((item) => (
                                    <li key={item}>
                                        <Link href="#" className="text-gray-400 hover:text-[#8b5cf6] transition-colors">
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-white mb-6">Company</h4>
                            <ul className="space-y-4">
                                {["About Us", "Contact"].map((item) => (
                                    <li key={item}>
                                        <Link href="#" className="text-gray-400 hover:text-[#8b5cf6] transition-colors">
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-white mb-6">Get in Touch</h4>
                            <a href="mailto:connect@dataapi.live" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-[#8b5cf6] transition-all group">
                                <Mail className="w-4 h-4 text-[#8b5cf6]" />
                                <span className="text-sm">connect@dataapi.live</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="w-full h-px bg-white/5 mb-16" />

                {/* Middle Section: Socials & Newsletter */}
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-10 lg:mb-20">
                    {/* Socials */}
                    <div>
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-6">Follow Us</h4>
                        <div className="flex gap-4">
                            {[Youtube, Linkedin, Mail].map((Icon, i) => (
                                <a key={i} href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#8b5cf6] transition-all duration-300">
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Newsletter Card */}
                    <div className="bg-[#0f0a1f] border border-white/5 rounded-2xl p-8 lg:p-10">
                        <h3 className="text-xl font-bold text-white mb-2">Stay Updated</h3>
                        <div className="flex flex-col sm:flex-row gap-4 mt-6">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#8b5cf6] transition-colors"
                            />
                            <button className="px-6 py-3 rounded-xl bg-[#8b5cf6] text-white font-bold hover:bg-[#7c3aed] transition-colors shadow-lg shadow-purple-500/20">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                <div className="w-full h-px bg-white/5 mb-8" />

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
                    <p>&copy; 2026 DataAPI. All rights reserved.</p>
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
