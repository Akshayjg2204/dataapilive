"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Lock, Mail } from 'lucide-react';

export default function LoginPage() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate login
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsLoading(false);
        alert("Login functionality would be implemented here.");
    };

    return (
        <main className="min-h-screen grid lg:grid-cols-2 bg-[var(--contact-bg)] selection:bg-[var(--login-primary)] selection:text-white">
            {/* Left Side: Login Form */}
            <div className="flex flex-col justify-center items-center py-12 relative z-10 bg-[var(--login-left-bg)] border-r border-[#2e1065] border-opacity-0 overflow-hidden">
                {/* Glow Effects */}
                <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#8b5cf6]/20 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#591991]/20 rounded-full blur-[120px] pointer-events-none" />

                <div className="w-full max-w-[400px] pt-[50px] px-[40px] pb-[60px] relative z-10 flex flex-col justify-center">
                    {/* Logo Area */}
                    <Link href="/" className="inline-flex items-center gap-3 mb-12 group">
                        <div className="relative w-8 h-8">
                            <img
                                src="https://res.cloudinary.com/dffu1ungl/image/upload/v1759645205/Data_API_Logo_u4xvkl.png"
                                alt="DataAPI Logo"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <span className="text-xl font-bold text-white tracking-wide">DataAPI</span>
                    </Link>

                    <h1 className="text-4xl font-extrabold text-[var(--login-left-text)] mb-3 tracking-tight">Welcome Back</h1>
                    <p className="text-[var(--login-left-text-secondary)] mb-10">Sign in to access your dashboard</p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-bold text-[var(--login-left-text-muted)]">Email</label>
                            <div className="relative group">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--login-left-text-secondary)] group-focus-within:text-[var(--login-primary)] transition-colors" />
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="you@example.com"
                                    className="w-full bg-[var(--login-left-input-bg)] border border-[var(--login-left-input-border)] rounded-xl pl-12 pr-4 py-3.5 text-[var(--login-left-text)] placeholder-[var(--login-left-text-secondary)] focus:outline-none focus:border-[var(--login-primary)] focus:ring-1 focus:ring-[var(--login-primary)] transition-all"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <label htmlFor="password" className="text-sm font-bold text-[var(--login-left-text-muted)]">Password</label>
                                <Link href="#" className="text-sm font-medium text-[var(--login-primary)] hover:text-[var(--login-primary-light)] transition-colors">Forgot?</Link>
                            </div>
                            <div className="relative group">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--login-left-text-secondary)] group-focus-within:text-[var(--login-primary)] transition-colors" />
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="Enter your password"
                                    className="w-full bg-[var(--login-left-input-bg)] border border-[var(--login-left-input-border)] rounded-xl pl-12 pr-4 py-3.5 text-[var(--login-left-text)] placeholder-[var(--login-left-text-secondary)] focus:outline-none focus:border-[var(--login-primary)] focus:ring-1 focus:ring-[var(--login-primary)] transition-all"
                                    required
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-gradient-to-r from-[var(--login-primary)] to-[var(--login-primary-dark)] text-white font-bold py-3.5 rounded-xl shadow-[var(--login-shadow)] hover:shadow-[var(--login-shadow-hover)] hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group"
                        >
                            {isLoading ? (
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            ) : (
                                <>
                                    Sign In
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                        </button>
                    </form>


                    <p className="text-center mt-10 text-[var(--login-left-text-secondary)] text-sm">
                        Don't have an account? <Link href="/signup" className="text-[var(--login-primary)] font-bold hover:underline">Sign up</Link>
                    </p>
                </div>
            </div>

            {/* Right Side: Feature Showcase */}
            <div className="hidden lg:flex flex-col justify-center bg-[var(--login-right-bg)] p-16 md:p-24 relative overflow-hidden">
                {/* Background Decorations */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--login-orb-1)] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[var(--login-orb-2)] rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />

                <div className="max-w-[600px] mx-auto relative z-10">
                    <h2 className="text-4xl cmd:text-5xl font-extrabold text-[var(--login-right-text)] mb-6 leading-tight">
                        Thank You for Choosing <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--login-primary)] to-[var(--login-primary-light)]">DataAPI!</span>
                    </h2>

                    <p className="text-lg text-[var(--login-right-text-secondary)] mb-12 leading-relaxed">
                        We're excited to have you back. DataAPI is your trusted partner for intelligent web data extraction, powered by our revolutionary AutoEx™ technology that adapts automatically to website changes.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                        {/* Feature 1 */}
                        <motion.div
                            whileHover={{ y: -10 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="bg-[var(--login-right-card-bg)] border border-[var(--login-right-card-border)] rounded-2xl p-6 backdrop-blur-sm hover:border-[var(--login-primary)] transition-colors group cursor-default"
                        >
                            <div className="w-8 h-8 rounded-full bg-[var(--login-primary)] flex items-center justify-center text-white mb-4 shadow-[0_0_15px_rgba(139,92,246,0.3)]">
                                <Check className="w-4 h-4" />
                            </div>
                            <h3 className="font-bold text-[var(--login-right-text)] mb-2 group-hover:text-[var(--login-primary)] transition-colors">Zero Maintenance</h3>
                            <p className="text-xs text-[var(--login-right-text-secondary)] leading-relaxed">
                                Our AutoEx technology automatically adapts to website changes
                            </p>
                        </motion.div>

                        {/* Feature 2 */}
                        <motion.div
                            whileHover={{ y: -10 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="bg-[var(--login-right-card-bg)] border border-[var(--login-right-card-border)] rounded-2xl p-6 backdrop-blur-sm hover:border-[var(--login-primary)] transition-colors group cursor-default"
                        >
                            <div className="w-8 h-8 rounded-full bg-[var(--login-primary)] flex items-center justify-center text-white mb-4 shadow-[0_0_15px_rgba(139,92,246,0.3)]">
                                <Check className="w-4 h-4" />
                            </div>
                            <h3 className="font-bold text-[var(--login-right-text)] mb-2 group-hover:text-[var(--login-primary)] transition-colors">Lightning Fast Extraction</h3>
                            <p className="text-xs text-gray-400 leading-relaxed">
                                Average response time of 500ms with 99.9% accuracy
                            </p>
                        </motion.div>

                        {/* Feature 3 */}
                        <motion.div
                            whileHover={{ y: -10 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="bg-[var(--login-right-card-bg)] border border-[var(--login-right-card-border)] rounded-2xl p-6 backdrop-blur-sm hover:border-[var(--login-primary)] transition-colors group cursor-default"
                        >
                            <div className="w-8 h-8 rounded-full bg-[var(--login-primary)] flex items-center justify-center text-white mb-4 shadow-[0_0_15px_rgba(139,92,246,0.3)]">
                                <Check className="w-4 h-4" />
                            </div>
                            <h3 className="font-bold text-[var(--login-right-text)] mb-2 group-hover:text-[var(--login-primary)] transition-colors">Enterprise-Grade Security</h3>
                            <p className="text-xs text-[var(--login-right-text-secondary)] leading-relaxed">
                                SOC 2 compliant infrastructure with end-to-end encryption
                            </p>
                        </motion.div>
                    </div>

                    <div className="flex items-center gap-12 pt-8 border-t border-[var(--login-right-card-border)]">
                        <div>
                            <h4 className="text-3xl font-extrabold text-[var(--login-primary)] mb-1">3,000+</h4>
                            <p className="text-xs font-bold text-[var(--login-right-text-secondary)] uppercase tracking-widest">Active Customers</p>
                        </div>
                        <div>
                            <h4 className="text-3xl font-extrabold text-[var(--login-primary)] mb-1">10M+</h4>
                            <p className="text-xs font-bold text-[var(--login-right-text-secondary)] uppercase tracking-widest">Pages Processed Daily</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
