"use client";
import Link from "next/link";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md bg-[rgba(15,7,40,0.95)] border-b border-[var(--homepage-border-light)]">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-[85px] flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative w-10 h-10">
                        <img
                            src="https://res.cloudinary.com/dffu1ungl/image/upload/v1759645205/Data_API_Logo_u4xvkl.png"
                            alt="DataAPI Logo"
                            className="w-full h-full object-contain filter drop-shadow-[0_0_10px_rgba(139,92,246,0.3)] transition-transform duration-300 group-hover:scale-110"
                        />
                    </div>
                    <span className="text-2xl font-bold bg-gradient-to-r from-[var(--homepage-primary)] to-[var(--homepage-accent)] bg-clip-text text-transparent group-hover:tracking-wider transition-all duration-300">
                        DataAPI
                    </span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-1 bg-[rgba(139,92,246,0.15)] p-1.5 rounded-2xl border border-[var(--homepage-border-light)]">
                    {["Home", "About", "Services", "Pricing", "FAQ", "Contact"].map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className={`px-5 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300 ${item === "Home"
                                ? "bg-[rgba(139,92,246,0.2)] text-white shadow-[0_2px_8px_rgba(89,25,145,0.2)]"
                                : "text-[var(--homepage-text-secondary)] hover:text-white hover:bg-[rgba(139,92,246,0.1)]"
                                }`}
                        >
                            <span className="relative inline-block">
                                {item}
                                {item === "Home" && (
                                    <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-[var(--homepage-primary)] to-[var(--homepage-primary-light)] rounded-full shadow-[0_0_8px_var(--homepage-primary)]"></span>
                                )}
                            </span>
                        </Link>
                    ))}
                </div>

                {/* Right Actions */}
                <div className="flex items-center gap-4">
                    {/* Theme Toggle (Mock) */}
                    <button className="flex items-center gap-2 p-1 bg-[#1a1a2e] border border-[var(--homepage-border-light)] rounded-full w-[56px] h-[28px] relative">
                        <div className="w-5 h-5 bg-gradient-to-br from-white to-gray-300 rounded-full shadow-md ml-0.5" />
                        <Moon className="w-4 h-4 text-[#a78bfa] absolute right-1.5" />
                    </button>

                    <Link
                        href="/login"
                        className="hidden md:flex items-center px-6 py-2.5 text-sm font-semibold text-[var(--homepage-primary-light)] bg-[rgba(139,92,246,0.15)] border border-[var(--homepage-border)] rounded-xl hover:border-[var(--homepage-primary)] hover:text-[var(--homepage-accent)] hover:-translate-y-0.5 transition-all duration-300"
                    >
                        Log In
                    </Link>

                    <Link
                        href="/signup"
                        className="hidden md:flex items-center px-6 py-2.5 text-sm font-bold text-white bg-gradient-to-br from-[var(--homepage-primary)] to-[var(--homepage-primary-dark)] rounded-xl shadow-[0_4px_14px_rgba(89,25,145,0.4)] hover:shadow-[0_6px_20px_rgba(89,25,145,0.6)] hover:-translate-y-0.5 transition-all duration-300"
                    >
                        Get Started
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-white hover:text-[var(--homepage-primary)] transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="md:hidden fixed top-[85px] left-0 right-0 bottom-0 bg-[#0f0728] z-40 p-6 overflow-y-auto animate-fade-in border-t border-[var(--homepage-border-light)]">
                    <div className="flex flex-col gap-4">
                        {["Home", "About", "Services", "Pricing", "FAQ", "Contact"].map((item) => (
                            <Link
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-lg font-semibold text-[var(--homepage-text-secondary)] hover:text-white py-3 border-b border-[var(--homepage-border-light)] transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item}
                            </Link>
                        ))}
                        <div className="flex flex-col gap-4 mt-6">
                            <Link
                                href="/login"
                                className="flex items-center justify-center px-6 py-3 text-base font-semibold text-[var(--homepage-primary-light)] bg-[rgba(139,92,246,0.15)] border border-[var(--homepage-border)] rounded-xl hover:bg-[rgba(139,92,246,0.25)] transition-all duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Log In
                            </Link>
                            <Link
                                href="/signup"
                                className="flex items-center justify-center px-6 py-3 text-base font-bold text-white bg-gradient-to-br from-[var(--homepage-primary)] to-[var(--homepage-primary-dark)] rounded-xl shadow-[0_4px_14px_rgba(89,25,145,0.4)] transition-all duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}

