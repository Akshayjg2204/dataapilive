"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Moon, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = ["Home", "About", "Services", "Pricing", "FAQ", "Contact"];

function getHref(item: string) {
    const map: Record<string, string> = {
        Home: "/",
        About: "/about",
        Services: "/services",
        Pricing: "/pricing",
        FAQ: "/faq",
        Contact: "/contact",
    };
    return map[item] ?? `/#${item.toLowerCase()}`;
}

export default function Navbar() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Lock body scroll when menu open
    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [isMenuOpen]);

    if (pathname === "/login" || pathname === "/signup") return null;

    const isActive = (item: string) => {
        if (item === "Home" && pathname === "/") return true;
        if (item === "About" && pathname === "/about") return true;
        if (item === "Services" && pathname === "/services") return true;
        if (item === "Pricing" && pathname === "/pricing") return true;
        return false;
    };

    // Mobile menu rendered via portal – completely outside the nav stacking context
    const mobileMenuPortal = mounted
        ? createPortal(
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        key="mobile-menu"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.18 }}
                        style={{
                            position: "fixed",
                            inset: 0,
                            zIndex: 99999,
                            display: "flex",
                            flexDirection: "column",
                            background: "#0f0728",
                        }}
                    >
                        {/* Top bar with logo + close */}
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                padding: "0 24px",
                                height: "85px",
                                borderBottom: "1px solid rgba(255,255,255,0.08)",
                                flexShrink: 0,
                            }}
                        >
                            <Link
                                href="/"
                                style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none" }}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <img
                                    src="https://res.cloudinary.com/dffu1ungl/image/upload/v1759645205/Data_API_Logo_u4xvkl.png"
                                    alt="DataAPI Logo"
                                    style={{ width: "40px", height: "40px", objectFit: "contain" }}
                                />
                                <span
                                    style={{
                                        fontSize: "22px",
                                        fontWeight: 700,
                                        background: "linear-gradient(to right, #8b5cf6, #00e5d0)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                    }}
                                >
                                    DataAPI
                                </span>
                            </Link>
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                style={{ background: "none", border: "none", color: "white", cursor: "pointer", padding: "8px" }}
                                aria-label="Close menu"
                            >
                                <X size={28} />
                            </button>
                        </div>

                        {/* Nav links */}
                        <div style={{ flex: 1, overflowY: "auto", padding: "16px 24px" }}>
                            {NAV_LINKS.map((item, idx) => (
                                <motion.div
                                    key={item}
                                    initial={{ opacity: 0, x: -16 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.04 + idx * 0.06 }}
                                >
                                    <Link
                                        href={getHref(item)}
                                        onClick={() => setIsMenuOpen(false)}
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            fontSize: "20px",
                                            fontWeight: 600,
                                            color: isActive(item) ? "#ffffff" : "rgba(255,255,255,0.6)",
                                            paddingTop: "18px",
                                            paddingBottom: "18px",
                                            borderBottom: "1px solid rgba(255,255,255,0.08)",
                                            textDecoration: "none",
                                            width: "100%",
                                        }}
                                    >
                                        {item}
                                    </Link>
                                </motion.div>
                            ))}

                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.42 }}
                                style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "32px" }}
                            >
                                <Link
                                    href="/login"
                                    onClick={() => setIsMenuOpen(false)}
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        padding: "16px 24px",
                                        fontSize: "16px",
                                        fontWeight: 600,
                                        color: "#c4b5fd",
                                        background: "rgba(139,92,246,0.15)",
                                        border: "1px solid rgba(139,92,246,0.3)",
                                        borderRadius: "12px",
                                        textDecoration: "none",
                                    }}
                                >
                                    Log In
                                </Link>
                                <Link
                                    href="/signup"
                                    onClick={() => setIsMenuOpen(false)}
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        padding: "16px 24px",
                                        fontSize: "16px",
                                        fontWeight: 700,
                                        color: "#ffffff",
                                        background: "linear-gradient(135deg, #7c3aed, #4c0d95)",
                                        borderRadius: "12px",
                                        textDecoration: "none",
                                        boxShadow: "0 4px 14px rgba(89,25,145,0.4)",
                                    }}
                                >
                                    Get Started
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>,
            document.body
        )
        : null;

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[rgba(15,7,40,0.95)] border-b border-[var(--homepage-border-light)]">
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
                        {NAV_LINKS.map((item) => (
                            <Link
                                key={item}
                                href={getHref(item)}
                                className={`relative px-5 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300 ${isActive(item)
                                        ? "text-white shadow-[0_2px_8px_rgba(89,25,145,0.2)]"
                                        : "text-[var(--homepage-text-secondary)] hover:text-white"
                                    }`}
                            >
                                {isActive(item) && (
                                    <motion.span
                                        layoutId="navbar-active-bg"
                                        className="absolute inset-0 bg-[rgba(139,92,246,0.2)] rounded-xl"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <span className="relative z-10">
                                    {item}
                                    {isActive(item) && (
                                        <motion.span
                                            layoutId="navbar-active-underline"
                                            className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-[var(--homepage-primary)] to-[var(--homepage-primary-light)] rounded-full"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                </span>
                            </Link>
                        ))}
                    </div>

                    {/* Right Actions */}
                    <div className="flex items-center gap-4">
                        {/* Theme Toggle */}
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
                            onClick={() => setIsMenuOpen(true)}
                            aria-label="Open menu"
                        >
                            <Menu size={28} />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Portal renders mobile menu directly on document.body */}
            {mobileMenuPortal}
        </>
    );
}
