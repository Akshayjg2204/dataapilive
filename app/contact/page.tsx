"use client";
import React, { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Linkedin, Twitter } from 'lucide-react';
import EnterpriseCTA from "@/components/EnterpriseCTA";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate submission
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsSubmitting(false);
        alert("Message sent!");
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <main className="min-h-screen bg-[#0f0728] overflow-x-hidden selection:bg-[#8b5cf6] selection:text-white">
            <Navbar />

            <div className="pt-32 pb-24 px-6 relative z-10">
                {/* Background Gradients (Subtle) */}
                <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-[#1a0f39] to-transparent -z-10" />
                <div className="absolute top-20 right-0 w-96 h-96 bg-[#8b5cf6]/5 rounded-full blur-[120px] -z-10" />

                <div className="max-w-[1200px] mx-auto">
                    {/* Hero Section */}
                    <div className="text-center mb-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-block mb-6 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#8b5cf6] to-[#7c3aed] text-white text-xs font-bold tracking-wider uppercase shadow-[0_0_20px_rgba(139,92,246,0.5)]"
                        >
                            Get in Touch
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight leading-tight"
                        >
                            Let's Build Something <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8b5cf6] to-[#a78bfa]">Amazing</span> Together
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed"
                        >
                            Have a question or want to work together? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                        </motion.p>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                        {/* Left Column: Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="lg:col-span-5 space-y-10"
                        >
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-4">Contact Information</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    Reach out through any of these channels. We typically respond within 24 hours.
                                </p>
                            </div>

                            <div className="space-y-6">
                                {/* Email Card */}
                                <div className="bg-[#150a2e] border border-[#2e1065] rounded-2xl p-6 flex items-center gap-6 group hover:border-[#8b5cf6] transition-colors duration-300">
                                    <div className="w-12 h-12 rounded-xl bg-[#8b5cf6]/10 flex items-center justify-center text-[#8b5cf6] group-hover:bg-[#8b5cf6] group-hover:text-white transition-all duration-300">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Email</p>
                                        <a href="mailto:connect@dataapi.live" className="text-lg font-bold text-white hover:text-[#8b5cf6] transition-colors">connect@dataapi.live</a>
                                    </div>
                                </div>

                                {/* Phone Card */}
                                <div className="bg-[#150a2e] border border-[#2e1065] rounded-2xl p-6 flex items-center gap-6 group hover:border-[#8b5cf6] transition-colors duration-300">
                                    <div className="w-12 h-12 rounded-xl bg-[#8b5cf6]/10 flex items-center justify-center text-[#8b5cf6] group-hover:bg-[#8b5cf6] group-hover:text-white transition-all duration-300">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Phone</p>
                                        <p className="text-lg font-bold text-white">+1 (555) 847-9201</p>
                                    </div>
                                </div>

                                {/* Location Card */}
                                <div className="bg-[#150a2e] border border-[#2e1065] rounded-2xl p-6 flex items-center gap-6 group hover:border-[#8b5cf6] transition-colors duration-300">
                                    <div className="w-12 h-12 rounded-xl bg-[#8b5cf6]/10 flex items-center justify-center text-[#8b5cf6] group-hover:bg-[#8b5cf6] group-hover:text-white transition-all duration-300">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Location</p>
                                        <p className="text-lg font-bold text-white">San Francisco, CA</p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-8 border-t border-[#2e1065]">
                                <p className="text-sm font-bold text-gray-400 mb-4">Follow Us</p>
                                <div className="flex gap-4">
                                    <a href="#" className="w-10 h-10 rounded-lg bg-[#150a2e] border border-[#2e1065] flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#2e1065] transition-all">
                                        <Linkedin className="w-5 h-5" />
                                    </a>
                                    <a href="#" className="w-10 h-10 rounded-lg bg-[#150a2e] border border-[#2e1065] flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#2e1065] transition-all">
                                        {/* X Icon */}
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                        </svg>
                                    </a>
                                    <a href="mailto:connect@dataapi.live" className="w-10 h-10 rounded-lg bg-[#150a2e] border border-[#2e1065] flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#2e1065] transition-all">
                                        <Mail className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Column: Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="lg:col-span-7"
                        >
                            <div className="bg-[#150a2e] border border-[#2e1065] rounded-3xl p-8 md:p-10 shadow-2xl overflow-hidden relative">
                                <h3 className="text-2xl font-bold text-white mb-8">Send a Message</h3>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="text-sm font-bold text-white">Your Name <span className="text-[#8b5cf6]">*</span></label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="John Doe"
                                                className="w-full bg-[#0a051e] border border-[#2e1065] rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#8b5cf6] focus:ring-1 focus:ring-[#8b5cf6] transition-all"
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-sm font-bold text-white">Email Address <span className="text-[#8b5cf6]">*</span></label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="john@example.com"
                                                className="w-full bg-[#0a051e] border border-[#2e1065] rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#8b5cf6] focus:ring-1 focus:ring-[#8b5cf6] transition-all"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="subject" className="text-sm font-bold text-white">Subject <span className="text-[#8b5cf6]">*</span></label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            placeholder="How can we help?"
                                            className="w-full bg-[#0a051e] border border-[#2e1065] rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#8b5cf6] focus:ring-1 focus:ring-[#8b5cf6] transition-all"
                                            required
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-bold text-white">Message <span className="text-[#8b5cf6]">*</span></label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={6}
                                            placeholder="Tell us about your project or inquiry..."
                                            className="w-full bg-[#0a051e] border border-[#2e1065] rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#8b5cf6] focus:ring-1 focus:ring-[#8b5cf6] transition-all resize-none relative z-10"
                                            required
                                        />
                                        {/* Resize handle icon (aesthetic only as generic textarea resize works) */}
                                        <div className="absolute bottom-4 right-4 pointer-events-none text-gray-500">
                                            <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
                                                <path d="M8 2L2 8M9 5L5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                            </svg>
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-gradient-to-r from-[#8b5cf6] to-[#7c3aed] text-white font-bold py-4 rounded-xl shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group relative overflow-hidden"
                                    >
                                        {isSubmitting ? (
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        ) : (
                                            <>
                                                Send Message
                                                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                            </>
                                        )}
                                    </button>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            <EnterpriseCTA />
            <Footer />
        </main>
    );
}
