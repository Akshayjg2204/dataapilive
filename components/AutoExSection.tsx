"use client";
import React, { useRef } from "react";
import { Server, Star, Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

/** 3-D tilt icon: tracks mouse position → rotateX / rotateY via spring physics.
 *  The outer motion.div handles the floating bob; the inner wrapper handles the tilt.
 */
function TiltIcon() {
    const ref = useRef<HTMLDivElement>(null);

    const rawX = useMotionValue(0);
    const rawY = useMotionValue(0);

    const rotateX = useSpring(useTransform(rawY, [-0.5, 0.5], [18, -18]), { stiffness: 300, damping: 30 });
    const rotateY = useSpring(useTransform(rawX, [-0.5, 0.5], [-18, 18]), { stiffness: 300, damping: 30 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const el = ref.current;
        if (!el) return;
        const { left, top, width, height } = el.getBoundingClientRect();
        rawX.set((e.clientX - left) / width - 0.5);
        rawY.set((e.clientY - top) / height - 0.5);
    };

    const handleMouseLeave = () => {
        rawX.set(0);
        rawY.set(0);
    };

    return (
        /* Floating bob animation */
        <motion.div
            animate={{
                y: [0, -10, 0],
                boxShadow: [
                    "0 0 30px rgba(139,92,246,0.5)",
                    "0 0 50px rgba(139,92,246,0.7)",
                    "0 0 30px rgba(139,92,246,0.5)"
                ]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            style={{ perspective: 600 }}
            className="rounded-2xl"
        >
            {/* Tilt layer */}
            <motion.div
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#8b5cf6] to-[#a78bfa] p-[1px] cursor-pointer"
            >
                <div className="w-full h-full bg-[#1e1b4b] rounded-2xl flex items-center justify-center backdrop-blur-xl">
                    <Server className="w-10 h-10 text-[#a78bfa]" style={{ transform: "translateZ(20px)" }} />
                </div>
            </motion.div>
        </motion.div>
    );
}

export default function AutoExSection() {
    const [activeIndex, setActiveIndex] = React.useState<number | null>(null);


    const handleInteraction = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="py-20 relative overflow-hidden bg-[#160c34]">
            <div className="max-w-[1200px] mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

                    {/* Left Column: Product Info */}
                    <div className="w-full lg:w-1/2" data-aos="fade-right">
                        <div className="flex items-center gap-6 mb-8">
                            {/* Icon Box — 3D tilt on hover */}
                            <TiltIcon />


                            {/* Badge */}
                            <div className="px-4 py-1.5 rounded-full bg-[#1a103c] border border-[#a78bfa]/30 flex items-center gap-2">
                                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                <span className="text-sm font-semibold text-[#a78bfa]">Most Popular</span>
                            </div>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            AutoEx™ API
                        </h2>
                        <h3 className="text-xl md:text-2xl font-bold text-[#a78bfa] mb-6">
                            Intelligent data extraction without the headache
                        </h3>

                        <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl">
                            Our flagship API service uses AI to automatically extract structured data from any website. No selectors to maintain, no breaking when sites update.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Link href="/pricing" className="px-8 py-3.5 bg-gradient-to-r from-[#8b5cf6] to-[#a78bfa] text-white font-bold rounded-xl shadow-[0_4px_14px_rgba(139,92,246,0.4)] hover:shadow-[0_6px_20px_rgba(139,92,246,0.6)] hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2">
                                View Pricing
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link href="/docs" className="px-8 py-3.5 bg-[#1a103c] border border-[#a78bfa]/30 text-white font-semibold rounded-xl hover:bg-[#a78bfa]/10 hover:border-[#a78bfa] transition-all duration-300">
                                Documentation
                            </Link>
                        </div>
                    </div>

                    {/* Right Column: Key Features */}
                    <div className="w-full lg:w-1/2" data-aos="fade-left">
                        <div className="mb-8 flex items-center gap-4">
                            <div className="w-1 h-8 bg-[#8b5cf6] rounded-full"></div>
                            <h3 className="text-2xl font-bold text-white">Key Features</h3>
                        </div>

                        <div className="flex flex-col gap-4">
                            {([
                                "99.9% extraction accuracy",
                                "Self-adapting to website changes",
                                "Real-time data processing",
                                "Support for dynamic JavaScript content",
                                "Structured JSON output",
                                "Batch processing available"
                            ] as const).map((feature, index) => {
                                const isActive = activeIndex === index;
                                return (
                                    <motion.div
                                        key={index}
                                        className={`p-4 rounded-xl border flex items-center gap-4 cursor-pointer relative overflow-hidden ${isActive
                                            ? "bg-[#21183c] border-[rgba(139,92,246,0.5)] shadow-[0_0_20px_rgba(139,92,246,0.1)]"
                                            : "bg-[#21183c]/50 border-[rgba(139,92,246,0.1)] hover:bg-[#21183c] hover:border-[rgba(139,92,246,0.3)]"
                                            }`}
                                        onClick={() => handleInteraction(index)}
                                        layout
                                        initial="initial"
                                        whileHover="hover"
                                        whileTap="tap"
                                        animate={isActive ? "active" : "initial"}
                                        variants={{
                                            initial: { scale: 1, x: 0 },
                                            hover: { scale: 1.02, x: 5 },
                                            tap: { scale: 0.98 },
                                            active: { scale: 1.02, x: 5, borderColor: "rgba(139,92,246,0.5)" }
                                        }}
                                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    >
                                        {/* Left Border Accent */}
                                        <motion.div
                                            className="absolute left-0 top-0 bottom-0 w-1 bg-[#8b5cf6]"
                                            variants={{
                                                initial: { opacity: 0, scaleY: 0 },
                                                hover: { opacity: 1, scaleY: 1 },
                                                active: { opacity: 1, scaleY: 1 }
                                            }}
                                            transition={{ duration: 0.3 }}
                                        />

                                        <motion.div
                                            className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors z-10 ${isActive ? "bg-[#8b5cf6]/20" : "bg-[#1a103c] group-hover:bg-[#8b5cf6]/20"
                                                }`}
                                            variants={{
                                                hover: { rotate: 360 },
                                                active: { rotate: 360 }
                                            }}
                                            transition={{ duration: 0.5, ease: "easeInOut" }}
                                        >
                                            <Check className={`w-4 h-4 transition-colors ${isActive ? "text-[#8b5cf6]" : "text-[#a78bfa] group-hover:text-[#8b5cf6]"
                                                }`} />
                                        </motion.div>
                                        <span className={`font-medium transition-colors z-10 ${isActive ? "text-white" : "text-gray-300 group-hover:text-white"
                                            }`}>{feature}</span>

                                        {/* Active Indicator Glow */}
                                        {isActive && (
                                            <motion.div
                                                layoutId="activeFeatureGlow"
                                                className="absolute inset-0 bg-gradient-to-r from-[rgba(139,92,246,0.1)] to-transparent"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                            />
                                        )}
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
