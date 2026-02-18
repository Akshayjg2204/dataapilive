"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Search } from 'lucide-react';

const faqCategories = [
    {
        title: "Getting Started",
        faqs: [
            {
                q: "What is DataAPI and how does it work?",
                a: "DataAPI is an intelligent web data extraction service powered by our proprietary AutoEx™ technology. Instead of writing brittle CSS selectors that break when websites change, our AI automatically identifies and extracts structured data from any webpage. Simply provide a URL and tell us what type of data you want, and we handle the rest."
            },
            {
                q: "How do I get started with DataAPI?",
                a: "Getting started is easy! Sign up for a free account, get your API key from the dashboard, and install our SDK (npm install @dataapi/sdk). You can make your first extraction in under 5 minutes. Check our Quick Start guide in the documentation for a step-by-step walkthrough."
            },
            {
                q: "Do I need to write code to use DataAPI?",
                a: "Yes, DataAPI is an API service designed for developers. You'll need basic programming knowledge to integrate it into your application. However, we provide SDKs for popular languages (JavaScript, Python, Ruby, PHP) and comprehensive examples to make integration as simple as possible."
            },
            {
                q: "What programming languages are supported?",
                a: "We offer official SDKs for JavaScript/Node.js, Python, Ruby, and PHP. Since DataAPI is a REST API, you can also use it with any language that can make HTTP requests. We provide complete API documentation with examples for multiple languages."
            }
        ]
    },
    {
        title: "Pricing & Plans",
        faqs: [
            {
                q: "How much does DataAPI cost?",
                a: "We offer three plans: Starter ($49/month for 10,000 API calls), Professional ($199/month for 100,000 calls), and Enterprise (custom pricing). All plans include a 14-day free trial. Annual billing saves you 20%. Check our Pricing page for full details."
            },
            {
                q: "What happens if I exceed my API call limit?",
                a: "If you exceed your monthly limit, additional calls are billed at $0.005 per call. We'll send notifications at 80% and 100% of your limit. You can also upgrade to a higher tier at any time, and the new limit takes effect immediately."
            },
            {
                q: "Can I change my plan at any time?",
                a: "Yes! You can upgrade or downgrade your plan whenever you need. Upgrades take effect immediately, and you'll be pro-rated for the remaining time in your billing cycle. Downgrades take effect at the start of your next billing period."
            },
            {
                q: "Is there a free trial?",
                a: "Yes! All paid plans include a 14-day free trial with full access to features. No credit card required to start the trial. You can cancel anytime during the trial period without being charged."
            },
            {
                q: "Do you offer refunds?",
                a: "Yes, we offer a 14-day money-back guarantee. If you're not satisfied with our service for any reason, contact us within 14 days of your first payment for a full refund."
            }
        ]
    },
    {
        title: "Technical",
        faqs: [
            {
                q: "What types of data can AutoEx™ extract?",
                a: "AutoEx™ can extract virtually any structured data from websites, including: product information (prices, descriptions, images), people data (names, contact info, bios), article content, business information, job listings, and more. We offer specialized endpoints for common data types, plus a custom extraction endpoint for unique use cases."
            },
            {
                q: "How accurate is the data extraction?",
                a: "Our AutoEx™ technology achieves 99.9% accuracy for most extraction types. Each extraction includes a confidence score in the metadata, so you can validate the quality of results. For edge cases, you can provide custom extraction rules to fine-tune accuracy."
            },
            {
                q: "What happens when a website changes its structure?",
                a: "This is where AutoEx™ shines! Unlike traditional scrapers, our AI automatically adapts to website structure changes without requiring updates to your code. We continuously monitor extraction quality and self-adjust our algorithms to maintain accuracy."
            },
            {
                q: "Can DataAPI handle JavaScript-heavy websites?",
                a: "Yes! Our infrastructure fully renders JavaScript using real browser engines, so we can extract data from modern single-page applications and dynamically-loaded content. This includes React, Vue, Angular, and other JavaScript frameworks."
            },
            {
                q: "What are the rate limits?",
                a: "Rate limits vary by plan: Starter (5 req/sec), Professional (20 req/sec), Enterprise (custom). We also limit concurrent requests: Starter (5), Professional (20), Enterprise (unlimited). These limits reset every second, so you can batch requests efficiently."
            },
            {
                q: "Do you provide webhooks?",
                a: "Yes! Professional and Enterprise plans include webhook support. You can configure webhooks to receive extraction results asynchronously, perfect for long-running batch operations or integrating with your existing workflows."
            }
        ]
    },
    {
        title: "AutoEx™ Technology",
        faqs: [
            {
                q: "How does AutoEx™ differ from traditional web scraping?",
                a: "Traditional scrapers use brittle CSS/XPath selectors that break when websites change. AutoEx™ uses AI to understand the semantic meaning of web content, automatically identifying data patterns regardless of HTML structure. This means zero maintenance and higher reliability."
            },
            {
                q: "Does AutoEx™ learn from my extractions?",
                a: "Yes! Our machine learning models continuously improve based on extraction patterns. While we don't share data between customers, each extraction helps AutoEx™ better understand your specific use cases and improves accuracy over time."
            },
            {
                q: "Can I customize AutoEx™ behavior?",
                a: "Professional and Enterprise plans allow you to define custom extraction rules, field mappings, and validation logic. You can also provide example data to guide the extraction process for highly specialized use cases."
            },
            {
                q: "Is AutoEx™ technology patented?",
                a: "Yes, our core AutoEx™ algorithms and adaptive extraction methods are patent-pending. We've invested heavily in R&D to create the most reliable web data extraction technology available."
            }
        ]
    },
    {
        title: "Security & Compliance",
        faqs: [
            {
                q: "How do you handle my API keys and credentials?",
                a: "API keys are encrypted at rest and in transit using AES-256 encryption. We follow security best practices including key rotation, access logging, and the principle of least privilege. Enterprise customers can also use OAuth 2.0 for enhanced security."
            },
            {
                q: "Are you GDPR compliant?",
                a: "Yes, DataAPI is fully GDPR compliant. We provide data processing agreements (DPAs), maintain comprehensive audit logs, and support data deletion requests. We only process data as instructed by you and never share customer data with third parties."
            },
            {
                q: "What about CCPA compliance?",
                a: "Yes, we're compliant with the California Consumer Privacy Act (CCPA). We provide transparent data practices, honor opt-out requests, and maintain detailed privacy policies. Enterprise customers receive dedicated compliance support."
            },
            {
                q: "Do you have SOC 2 certification?",
                a: "Yes, our Enterprise plan includes SOC 2 Type II compliance. We undergo annual audits and maintain comprehensive security controls. Contact sales for our latest audit report."
            },
            {
                q: "Where is my data stored?",
                a: "Extracted data is stored in secure, encrypted databases in US-based data centers (AWS). Enterprise customers can request specific geographic storage locations. All data is encrypted at rest and in transit."
            }
        ]
    },
    {
        title: "Support",
        faqs: [
            {
                q: "What support do you offer?",
                a: "Starter plans include email support (24-48 hour response). Professional plans get priority email support (4-8 hour response). Enterprise customers receive 24/7 support via email, phone, and dedicated Slack channels with a guaranteed 1-hour response time."
            },
            {
                q: "Do you offer implementation assistance?",
                a: "Yes! Professional and Enterprise plans include onboarding calls to help you get started. Enterprise customers get dedicated technical account managers who can assist with architecture planning, integration, and optimization."
            },
            {
                q: "Can I request new features?",
                a: "Absolutely! We actively listen to customer feedback. While we can't guarantee every request will be implemented, many of our best features came from customer suggestions. Enterprise customers can request custom development for specific needs."
            }
        ]
    }
];

export default function FAQSection() {
    const [activeIndex, setActiveIndex] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState("");

    const toggleAccordion = (categoryIndex: number, faqIndex: number) => {
        const id = `${categoryIndex}-${faqIndex}`;
        setActiveIndex(activeIndex === id ? null : id);
    };

    const filteredCategories = faqCategories.map(category => ({
        ...category,
        faqs: category.faqs.filter(faq =>
            faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
            faq.a.toLowerCase().includes(searchQuery.toLowerCase())
        )
    })).filter(category => category.faqs.length > 0);

    return (
        <section className="py-24 relative z-10">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight flex flex-col items-center gap-1">
                        <span>Frequently Asked</span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8b5cf6] to-[#a78bfa]">Questions</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
                        Find answers to common questions about DataAPI, AutoEx™ technology, and our services
                    </p>

                    <div className="relative max-w-xl mx-auto">
                        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                            <Search className="h-5 w-5 text-[#8b5cf6]" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search FAQs..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-[#150a2e] border border-[#2e1065] text-white pl-12 pr-4 py-4 rounded-2xl focus:outline-none focus:border-[#8b5cf6] focus:ring-2 focus:ring-[#8b5cf6] focus:shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all placeholder-gray-500 shadow-lg"
                        />
                    </div>
                </div>

                <div className="space-y-12">
                    {filteredCategories.length > 0 ? (
                        filteredCategories.map((category, catIndex) => (
                            <div key={catIndex} className="space-y-6">
                                <h3 className="text-2xl font-bold text-white mb-4 pl-2 border-l-4 border-[#8b5cf6]">
                                    {category.title}
                                </h3>
                                <div className="space-y-4">
                                    {category.faqs.map((faq, faqIndex) => {
                                        const id = `${catIndex}-${faqIndex}`;
                                        const isActive = activeIndex === id;

                                        return (
                                            <div
                                                key={faqIndex}
                                                className={`group relative rounded-2xl border transition-all duration-500 overflow-hidden hover:-translate-x-2 ${isActive
                                                    ? 'bg-[#1a0f39] border-[#8b5cf6] shadow-[0_0_30px_rgba(139,92,246,0.3)]'
                                                    : 'bg-[#1a0f39] border-[#2e1065] hover:border-[#8b5cf6] hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]'
                                                    }`}
                                            >
                                                {/* Center Glow Effect */}
                                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.15),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                                {/* Left Loading Line Animation */}
                                                <div className="absolute left-0 top-0 w-[4px] bg-gradient-to-b from-[#8b5cf6] via-[#a78bfa] to-[#8b5cf6] h-0 group-hover:h-full transition-all duration-700 ease-in-out opacity-0 group-hover:opacity-100 shadow-[0_0_15px_rgba(139,92,246,0.8)]" />

                                                <button
                                                    onClick={() => toggleAccordion(catIndex, faqIndex)}
                                                    className="relative z-10 w-full flex items-center justify-between p-7 text-left focus:outline-none"
                                                >
                                                    <span className={`text-lg font-bold transition-colors duration-300 ${isActive ? 'text-white' : 'text-gray-300 group-hover:text-white'
                                                        }`}>
                                                        {faq.q}
                                                    </span>
                                                    <div className={`p-2 rounded-full transition-all duration-300 ${isActive ? 'bg-[#8b5cf6]/20 text-[#a78bfa]' : 'bg-[#1e103f] text-gray-400 group-hover:bg-[#8b5cf6]/20 group-hover:text-white'
                                                        }`}>
                                                        {isActive ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                                                    </div>
                                                </button>

                                                <AnimatePresence>
                                                    {isActive && (
                                                        <motion.div
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: "auto", opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                                        >
                                                            <div className="relative z-10 px-7 pb-7 text-gray-400 leading-relaxed border-t border-[#8b5cf6]/10 pt-4 mt-2">
                                                                {faq.a}
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center text-gray-400 py-12">
                            <p className="text-lg">No matching questions found.</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
