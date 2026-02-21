import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, Star, HelpCircle, ChevronDown, Plus, Globe, Mail, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
    const [isYearly, setIsYearly] = useState(true);

    const tiers = [
        {
            name: "Enterprise",
            subtitle: "For large organizations",
            price: "99",
            features: ["Unlimited Projects", "Unlimited Requests", "Custom SLAs", "Dedicated Account Manager"],
            button: "Contact Sales",
            popular: false,
            color: "blue"
        },
        {
            name: "Growth",
            subtitle: "For growing teams and startups",
            price: "29",
            features: ["Projects 12", "7M API Requests", "Analytics Dashboard", "Priority Email Support"],
            button: "Start Free Trial",
            popular: true,
            color: "purple"
        },
        {
            name: "Starter",
            subtitle: "For individuals and hobbyists",
            price: "0",
            features: ["Project 1", "1M API Requests", "Community Support"],
            button: "Get Started",
            popular: false,
            color: "slate"
        }
    ];

    const testimonials = [
        {
            name: "Thomas Wright",
            role: "Lead Developer",
            text: "The support team is phenomenal. They helped us migrate our legacy infrastructure in record time. It feels like an extension of our team.",
            avatar: "https://i.pravatar.cc/150?u=thomas",
            color: "blue"
        },
        {
            name: "Maria Adrian",
            role: "CTO at Stealth AI",
            text: "The scalability is unmatched. We hit 1M concurrent connections during our launch and OrbitScale didn't even blink. Highly recommend for fast growth.",
            avatar: "https://i.pravatar.cc/150?u=maria",
            color: "orange"
        },
        {
            name: "Raju Sahrawat",
            role: "Project Manager",
            text: "OrbitScale completely transformed how we handle deployment. What used to take days now takes minutes. The SDK is a lifesaver.",
            avatar: "https://i.pravatar.cc/150?u=raju",
            color: "purple"
        }
    ];

    return (
        <div className="pt-24 md:pt-32 pb-16 md:pb-24 bg-[#f8fafc]">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-12 md:mb-24">
                    <h1 className="text-3xl sm:text-5xl md:text-7xl font-display font-black text-[#0f172a] tracking-tight mb-8 leading-none">
                        Simple, transparent pricing
                    </h1>
                    <p className="text-slate-500 text-lg font-medium mb-12">.Start for free, scale as you grow. No hidden fees</p>

                    <div className="flex items-center justify-center gap-4">
                        <span className={`text-[10px] font-black uppercase tracking-widest ${isYearly ? 'text-[#0f172a]' : 'text-slate-300'}`}>Yearly</span>
                        <button
                            onClick={() => setIsYearly(!isYearly)}
                            className="w-14 h-7 rounded-full bg-slate-100 border border-slate-200 p-1 relative transition-all"
                        >
                            <motion.div
                                animate={{ x: isYearly ? 0 : 28 }}
                                className="w-5 h-5 rounded-full bg-emerald-500 shadow-sm"
                            />
                        </button>
                        <span className={`text-[10px] font-black uppercase tracking-widest ${!isYearly ? 'text-[#0f172a]' : 'text-slate-300'}`}>Monthly</span>
                    </div>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-20 md:mb-40">
                    {tiers.map((tier) => (
                        <div
                            key={tier.name}
                            className={`relative p-6 md:p-10 rounded-2xl md:rounded-[2.5rem] bg-white border flex flex-col ${tier.popular ? 'border-purple-500 shadow-2xl md:scale-105 z-10' : 'border-slate-100 shadow-sm'}`}
                        >
                            {tier.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-lg bg-purple-600 text-[9px] font-black uppercase tracking-widest text-white">
                                    Most Popular
                                </div>
                            )}

                            <div className="text-center mb-10">
                                <h3 className="text-3xl font-display font-black text-[#0f172a] mb-2">{tier.name}</h3>
                                <p className="text-xs text-slate-400 font-medium">{tier.subtitle}</p>
                            </div>

                            <div className="text-center mb-10 border-b border-slate-50 pb-10">
                                <div className="flex items-center justify-center gap-1">
                                    <span className="text-[10px] font-black text-slate-300 uppercase mb-4">TRA</span>
                                    <span className="text-5xl font-display font-black text-[#0f172a] tracking-tighter">{tier.price}$</span>
                                </div>
                            </div>

                            <div className="mb-12 flex-grow">
                                <button className={`w-full py-4 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all mb-8 ${tier.popular ? 'bg-purple-600 text-white shadow-premium' : 'bg-white border border-slate-200 text-[#0f172a] hover:bg-slate-50'}`}>
                                    {tier.button}
                                </button>

                                <ul className="space-y-4">
                                    {tier.features.map(f => (
                                        <li key={f} className="flex items-center justify-center gap-3 text-xs font-bold text-slate-500">
                                            {f} <Check className="w-4 h-4 text-purple-400" />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Feature Comparison */}
                <div className="mb-20 md:mb-40">
                    <div className="text-center mb-12 md:mb-20">
                        <h2 className="text-2xl sm:text-4xl font-display font-black text-[#0f172a] tracking-tight mb-4">Feature Comparison</h2>
                    </div>

                    <div className="overflow-x-auto rounded-2xl md:rounded-[2rem] border border-slate-100 shadow-sm">
                        <table className="w-full text-left border-collapse bg-white">
                            <thead>
                                <tr className="border-b border-slate-100">
                                    <th className="p-8 text-[11px] font-black uppercase tracking-widest text-slate-400">Enterprise</th>
                                    <th className="p-8 text-[11px] font-black uppercase tracking-widest text-purple-600">Growth</th>
                                    <th className="p-8 text-[11px] font-black uppercase tracking-widest text-slate-400">Starter</th>
                                    <th className="p-8 text-[11px] font-black uppercase tracking-widest text-[#0f172a]">Feature</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm font-bold text-slate-500">
                                {[
                                    { f: "Team Members", e: "Unlimited", g: "5", s: "1" },
                                    { f: "API Rate Limit", e: "Unlimited", g: "10/min", s: "min/100" },
                                    { f: "Support", e: "Phone 24/7", g: "Priority Email", s: "Community" },
                                    { f: "Audit Logs", e: <Check className="w-5 h-5 text-emerald-500" />, g: "X", s: "X" }
                                ].map((row, i) => (
                                    <tr key={i} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                                        <td className="p-8">{row.e}</td>
                                        <td className="p-8 text-purple-600/70">{row.g}</td>
                                        <td className="p-8 text-slate-400">{row.s}</td>
                                        <td className="p-8 text-[#0f172a]">{row.f}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Testimonials */}
                <div className="mb-20 md:mb-40">
                    <div className="text-center mb-12 md:mb-20">
                        <h2 className="text-4xl font-display font-black text-[#0f172a] tracking-tight mb-2">Trusted by developers like you</h2>
                        <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Join thousands of satisfied customers who have scaled with us.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((t, i) => (
                            <div key={i} className="p-5 md:p-8 rounded-2xl md:rounded-[2.5rem] bg-white border border-slate-100 shadow-sm relative group overflow-hidden">
                                {/* Top Floating Icon */}
                                <div className={`absolute top-6 left-6 w-10 h-10 rounded-xl bg-${t.color}-500 flex items-center justify-center text-white shadow-lg`}>
                                    <Shield className="w-5 h-5" />
                                </div>

                                <p className="text-sm text-slate-500 leading-relaxed font-medium mb-10 mt-12">
                                    “{t.text}”
                                </p>

                                <div className="flex items-center gap-4">
                                    <img src={t.avatar} className="w-12 h-12 rounded-full border-2 border-white shadow-md" alt={t.name} />
                                    <div>
                                        <p className="text-sm font-black text-[#0f172a]">{t.name}</p>
                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{t.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Logos Bar */}
                <div className="text-center mb-20 md:mb-40 border-t border-slate-100 pt-12 md:pt-20">
                    <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.5em] mb-12">Trusted by industry leaders</p>
                    <div className="flex flex-wrap justify-center items-center gap-16 opacity-30 grayscale saturate-0">
                        {['p', 'C', 'X', 'p', 'O', 'E'].map((l, i) => (
                            <span key={i} className="text-3xl font-display font-black text-[#0f172a]">{l}</span>
                        ))}
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="max-w-4xl mx-auto mb-20 md:mb-40">
                    <h2 className="text-2xl sm:text-4xl font-display font-black text-[#0f172a] tracking-tight text-center mb-12 md:mb-20 uppercase italic">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {[
                            "Can I cancel at any time?",
                            "What happens if I exceed my usage limits?",
                            "Do you offer discounts for open source projects?",
                            "Can I switch plans later?"
                        ].map((q, i) => (
                            <div key={i} className="p-4 md:p-8 rounded-xl md:rounded-[1.5rem] bg-white border border-slate-100 flex items-center justify-between group cursor-pointer hover:border-purple-100 hover:shadow-lg transition-all">
                                <div className="flex items-center gap-6">
                                    <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-purple-50 transition-colors">
                                        <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-purple-500" />
                                    </div>
                                    <p className="text-base font-black text-[#0f172a] italic">{q}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
