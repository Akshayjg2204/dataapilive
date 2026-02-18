"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Lock, Mail, User, Building, Eye, EyeOff } from 'lucide-react';

export default function SignupPage() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        company: '',
        password: '',
        confirmPassword: '',
        agreeToTerms: false
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setFormData({ ...formData, [e.target.name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate signup
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsLoading(false);
        alert("Signup functionality would be implemented here.");
    };

    return (
        <main className="min-h-screen grid lg:grid-cols-2 bg-[var(--contact-bg)] selection:bg-[var(--login-primary)] selection:text-white">
            {/* Left Side: Signup Form */}
            <div className="flex flex-col justify-center items-center py-12 relative z-10 bg-[var(--login-left-bg)] border-r border-[#2e1065] border-opacity-0 overflow-hidden">
                {/* Glow Effects */}
                <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#8b5cf6]/20 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#591991]/20 rounded-full blur-[120px] pointer-events-none" />

                <div className="w-full max-w-[400px] pt-[50px] px-[40px] pb-[60px] relative z-10 flex flex-col justify-center">
                    {/* Logo Area */}
                    <div className="flex flex-col items-center mb-8 group">
                        <Link href="/" className="inline-flex items-center gap-3">
                            <div className="relative w-8 h-8">
                                <img
                                    src="https://res.cloudinary.com/dffu1ungl/image/upload/v1759645205/Data_API_Logo_u4xvkl.png"
                                    alt="DataAPI Logo"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <span className="text-xl font-bold text-white tracking-wide">DataAPI</span>
                        </Link>
                        <h1 className="text-3xl font-extrabold text-[var(--login-left-text)] mt-4 tracking-tight">Signup</h1>
                        <p className="text-[var(--login-left-text-secondary)] mt-2 text-sm text-center">Create your account and start extracting data</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Full Name */}
                        <div className="space-y-1.5">
                            <label htmlFor="fullName" className="text-xs font-bold text-[var(--login-left-text-muted)]">Full Name</label>
                            <div className="relative group">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--login-left-text-secondary)] group-focus-within:text-[var(--login-primary)] transition-colors" />
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    placeholder="John Doe"
                                    className="w-full bg-[var(--login-left-input-bg)] border border-[var(--login-left-input-border)] rounded-xl pl-12 pr-4 py-3 text-sm text-[var(--login-left-text)] placeholder-[var(--login-left-text-secondary)] focus:outline-none focus:border-[var(--login-primary)] focus:ring-1 focus:ring-[var(--login-primary)] transition-all"
                                    required
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div className="space-y-1.5">
                            <label htmlFor="email" className="text-xs font-bold text-[var(--login-left-text-muted)]">Email</label>
                            <div className="relative group">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--login-left-text-secondary)] group-focus-within:text-[var(--login-primary)] transition-colors" />
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="you@example.com"
                                    className="w-full bg-[var(--login-left-input-bg)] border border-[var(--login-left-input-border)] rounded-xl pl-12 pr-4 py-3 text-sm text-[var(--login-left-text)] placeholder-[var(--login-left-text-secondary)] focus:outline-none focus:border-[var(--login-primary)] focus:ring-1 focus:ring-[var(--login-primary)] transition-all"
                                    required
                                />
                            </div>
                        </div>

                        {/* Company (Optional) */}
                        <div className="space-y-1.5">
                            <label htmlFor="company" className="text-xs font-bold text-[var(--login-left-text-muted)]">Company (Optional)</label>
                            <div className="relative group">
                                <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--login-left-text-secondary)] group-focus-within:text-[var(--login-primary)] transition-colors" />
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    placeholder="Acme Inc."
                                    className="w-full bg-[var(--login-left-input-bg)] border border-[var(--login-left-input-border)] rounded-xl pl-12 pr-4 py-3 text-sm text-[var(--login-left-text)] placeholder-[var(--login-left-text-secondary)] focus:outline-none focus:border-[var(--login-primary)] focus:ring-1 focus:ring-[var(--login-primary)] transition-all"
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div className="space-y-1.5">
                            <label htmlFor="password" className="text-xs font-bold text-[var(--login-left-text-muted)]">Password</label>
                            <div className="relative group">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--login-left-text-secondary)] group-focus-within:text-[var(--login-primary)] transition-colors" />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="••••••••"
                                    className="w-full bg-[var(--login-left-input-bg)] border border-[var(--login-left-input-border)] rounded-xl pl-12 pr-10 py-3 text-sm text-[var(--login-left-text)] placeholder-[var(--login-left-text-secondary)] focus:outline-none focus:border-[var(--login-primary)] focus:ring-1 focus:ring-[var(--login-primary)] transition-all"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--login-left-text-secondary)] hover:text-[var(--login-text)] transition-colors"
                                >
                                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                </button>
                            </div>
                        </div>

                        {/* Confirm Password */}
                        <div className="space-y-1.5">
                            <label htmlFor="confirmPassword" className="text-xs font-bold text-[var(--login-left-text-muted)]">Confirm Password</label>
                            <div className="relative group">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--login-left-text-secondary)] group-focus-within:text-[var(--login-primary)] transition-colors" />
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    placeholder="••••••••"
                                    className="w-full bg-[var(--login-left-input-bg)] border border-[var(--login-left-input-border)] rounded-xl pl-12 pr-10 py-3 text-sm text-[var(--login-left-text)] placeholder-[var(--login-left-text-secondary)] focus:outline-none focus:border-[var(--login-primary)] focus:ring-1 focus:ring-[var(--login-primary)] transition-all"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--login-left-text-secondary)] hover:text-[var(--login-text)] transition-colors"
                                >
                                    {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                </button>
                            </div>
                        </div>

                        {/* Terms Checkbox */}
                        <div className="flex items-start gap-2 pt-1">
                            <div className="relative flex items-center">
                                <input
                                    type="checkbox"
                                    id="agreeToTerms"
                                    name="agreeToTerms"
                                    checked={formData.agreeToTerms}
                                    onChange={handleChange}
                                    className="peer h-4 w-4 cursor-pointer appearance-none rounded border border-[var(--login-left-input-border)] bg-[var(--login-left-input-bg)] checked:border-[var(--login-primary)] checked:bg-[var(--login-primary)] transition-all"
                                    required
                                />
                                <Check className="pointer-events-none absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100 transition-opacity" />
                            </div>
                            <label htmlFor="agreeToTerms" className="text-xs text-[var(--login-left-text-secondary)] cursor-pointer select-none leading-tight">
                                I agree to the <Link href="/terms" className="text-[var(--login-primary)] hover:underline">Terms of Service</Link> and <Link href="/privacy" className="text-[var(--login-primary)] hover:underline">Privacy Policy</Link>
                            </label>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-gradient-to-r from-[var(--login-primary)] to-[var(--login-primary-dark)] text-white font-bold py-3.5 rounded-xl shadow-[var(--login-shadow)] hover:shadow-[var(--login-shadow-hover)] hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group mt-2"
                        >
                            {isLoading ? (
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            ) : (
                                <>
                                    Create Account
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                        </button>
                    </form>

                    <div className="relative my-8">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-[var(--login-left-input-border)]"></div>
                        </div>
                        <div className="relative flex justify-center text-xs">
                            <span className="px-2 bg-[var(--login-left-bg)] text-[var(--login-left-text-secondary)]">Or sign up with</span>
                        </div>
                    </div>

                    <p className="text-center text-[var(--login-left-text-secondary)] text-sm">
                        Already have an account? <Link href="/login" className="text-[var(--login-primary)] font-bold hover:underline">Sign in</Link>
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
                        Join 3,000+ Companies Using <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--login-primary)] to-[var(--login-primary-light)]">DataAPI</span>
                    </h2>

                    <p className="text-lg text-[var(--login-right-text-secondary)] mb-12 leading-relaxed">
                        Experience the future of web data extraction with our revolutionary AutoEx™ technology. Get started in minutes and transform how you collect data.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                        {/* Feature 1 */}
                        <motion.div
                            whileHover={{ y: -10 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="bg-[var(--login-right-card-bg)] border border-[var(--login-right-card-border)] rounded-2xl p-6 backdrop-blur-sm hover:border-[var(--login-primary)] transition-colors group cursor-default flex flex-col items-center text-center"
                        >
                            <div className="w-8 h-8 rounded-full bg-[var(--login-primary)] flex items-center justify-center text-white mb-4 shadow-[0_0_15px_rgba(139,92,246,0.3)]">
                                <Check className="w-4 h-4" />
                            </div>
                            <h3 className="font-bold text-[var(--login-right-text)] mb-2 group-hover:text-[var(--login-primary)] transition-colors">Instant API Access</h3>
                            <p className="text-xs text-[var(--login-right-text-secondary)] leading-relaxed">
                                Get your API keys immediately and start extracting data
                            </p>
                        </motion.div>

                        {/* Feature 2 */}
                        <motion.div
                            whileHover={{ y: -10 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="bg-[var(--login-right-card-bg)] border border-[var(--login-right-card-border)] rounded-2xl p-6 backdrop-blur-sm hover:border-[var(--login-primary)] transition-colors group cursor-default flex flex-col items-center text-center"
                        >
                            <div className="w-8 h-8 rounded-full bg-[var(--login-primary)] flex items-center justify-center text-white mb-4 shadow-[0_0_15px_rgba(139,92,246,0.3)]">
                                <Check className="w-4 h-4" />
                            </div>
                            <h3 className="font-bold text-[var(--login-right-text)] mb-2 group-hover:text-[var(--login-primary)] transition-colors">Scalable Infrastructure</h3>
                            <p className="text-xs text-[var(--login-right-text-secondary)] leading-relaxed">
                                From startups to enterprise, our platform grows with you
                            </p>
                        </motion.div>

                        {/* Feature 3 */}
                        <motion.div
                            whileHover={{ y: -10 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="bg-[var(--login-right-card-bg)] border border-[var(--login-right-card-border)] rounded-2xl p-6 backdrop-blur-sm hover:border-[var(--login-primary)] transition-colors group cursor-default flex flex-col items-center text-center"
                        >
                            <div className="w-8 h-8 rounded-full bg-[var(--login-primary)] flex items-center justify-center text-white mb-4 shadow-[0_0_15px_rgba(139,92,246,0.3)]">
                                <Check className="w-4 h-4" />
                            </div>
                            <h3 className="font-bold text-[var(--login-right-text)] mb-2 group-hover:text-[var(--login-primary)] transition-colors">24/7 Expert Support</h3>
                            <p className="text-xs text-[var(--login-right-text-secondary)] leading-relaxed">
                                Our team is always ready to help you succeed
                            </p>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-3 gap-8 pt-8 border-t border-[var(--login-right-card-border)]">
                        <div className="text-center">
                            <h4 className="text-2xl font-extrabold text-[var(--login-primary)] mb-1">99.9%</h4>
                            <p className="text-[10px] font-bold text-[var(--login-right-text-secondary)] uppercase tracking-widest">Uptime SLA</p>
                        </div>
                        <div className="text-center">
                            <h4 className="text-2xl font-extrabold text-[var(--login-primary)] mb-1">10M+</h4>
                            <p className="text-[10px] font-bold text-[var(--login-right-text-secondary)] uppercase tracking-widest">Pages/Day</p>
                        </div>
                        <div className="text-center">
                            <h4 className="text-2xl font-extrabold text-[var(--login-primary)] mb-1">&lt;500ms</h4>
                            <p className="text-[10px] font-bold text-[var(--login-right-text-secondary)] uppercase tracking-widest">Avg Response</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
