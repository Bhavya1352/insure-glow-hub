import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
    ShieldCheck,
    Heart,
    Activity,
    Zap,
    ArrowRight,
    ShieldAlert,
    Headphones,
    FileCheck,
    TrendingUp,
    Star,
    Plus,
    Shield,
    Search,
    Lock
} from "lucide-react";
import CoverageSection from "@/components/CoverageSection";
import WhyUsSection from "@/components/WhyUsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";

const Home2 = () => {
    return (
        <div className="relative bg-[#050608]">
            {/* Insurance Hero - Protection DNA */}
            <section className="relative pt-28 md:pt-48 pb-16 md:pb-32 overflow-hidden">
                {/* Background Aesthetics */}
                <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-emerald-500/5 blur-[200px] rounded-full pointer-events-none" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 relative">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-black uppercase tracking-widest text-emerald-500 mb-8">
                                <ShieldCheck className="w-3 h-3" /> Licensed Claims Advocate Platform
                            </div>
                            <h1 className="text-4xl sm:text-6xl md:text-8xl font-display font-black text-white leading-[0.8] tracking-tighter mb-8 uppercase italic">
                                Protecting your <br />
                                <span className="text-gradient-purple">family's future</span>
                            </h1>
                            <p className="text-muted-foreground text-lg md:text-xl max-w-xl leading-relaxed italic mb-12">
                                OrbitScale isn't just insurance. It's a technical protection matrix that combines elite coverage with immediate human advocacy to secure your legacy.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link to="/signup" className="px-10 py-5 rounded-[2rem] bg-emerald-500 text-black font-black uppercase tracking-widest text-xs shadow-premium hover:scale-105 active:scale-95 transition-all text-center">
                                    Initialize My Shield
                                </Link>
                                <Link to="/solutions" className="px-10 py-5 rounded-[2rem] bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest text-xs hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                                    View Coverage DNA <Zap className="w-4 h-4" />
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="relative p-6 md:p-10 rounded-2xl md:rounded-[3.5rem] bg-[#0a0c10] border border-white/5 shadow-glass overflow-hidden group"
                        >
                            <div className="flex items-center justify-between mb-12">
                                <ShieldCheck className="w-12 h-12 text-emerald-500" />
                                <div className="text-right">
                                    <p className="text-[10px] font-black text-white/40 uppercase tracking-widest">Global Status</p>
                                    <p className="text-xl font-display font-black text-white italic tracking-tight">System Integrity 100%</p>
                                </div>
                            </div>

                            <div className="space-y-4 md:space-y-6 mb-8 md:mb-12">
                                {[
                                    { label: "Critical Health DNA", value: "₹2.5 Cr Coverage", status: "Active" },
                                    { label: "Legacy Life Shield", value: "₹5.0 Cr Protection", status: "Active" },
                                    { label: "Advocacy Response", value: "< 14 Hour Guarantee", status: "Priority" }
                                ].map(p => (
                                    <div key={p.label} className="p-5 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-between group-hover:bg-white/[0.08] transition-all">
                                        <div>
                                            <p className="text-[9px] font-black text-white/30 uppercase tracking-widest mb-1">{p.label}</p>
                                            <p className="text-base font-bold text-white italic leading-none">{p.value}</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-[8px] font-black text-emerald-500 uppercase tracking-widest">{p.status}</span>
                                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="absolute top-[-20%] right-[-20%] w-64 h-64 bg-emerald-500/5 blur-[60px] rounded-full group-hover:scale-110 transition-transform duration-1000" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* The Matrix Detail */}
            <CoverageSection />

            {/* The Advocacy Trail */}
            <WhyUsSection />

            {/* Real-time Stats */}
            <section className="py-24 bg-[#050608] border-y border-white/5 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center md:text-left">
                        {[
                            { label: "Settlement Velocity", val: "14h", sub: "Global Record" },
                            { label: "Claims Integrity", val: "99.4%", sub: "Verified Success" },
                            { label: "Protected Lives", val: "128k+", sub: "Family Coverage" },
                            { label: "Active Advocates", val: "852", sub: "On-call Specialists" }
                        ].map((s, i) => (
                            <motion.div
                                key={s.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <p className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white italic mb-2 tracking-tighter">{s.val}</p>
                                <p className="text-[10px] font-black text-white uppercase tracking-widest leading-none mb-1">{s.label}</p>
                                <p className="text-[9px] text-white/30 uppercase italic">{s.sub}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <TestimonialsSection />

            {/* Dynamic CTA */}
            <section className="py-32 bg-[#050608]">
                <div className="max-w-5xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="p-8 sm:p-12 md:p-16 rounded-2xl md:rounded-[4rem] bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-500/20 text-center relative overflow-hidden"
                    >
                        <ShieldCheck className="w-16 h-16 text-emerald-500 mx-auto mb-10" />
                        <h2 className="text-3xl sm:text-4xl md:text-6xl font-display font-black text-white leading-[0.9] mb-8 uppercase italic">
                            Don't leave your <br />
                            <span className="text-gradient-purple">legacy to chance</span>
                        </h2>
                        <p className="text-muted-foreground text-lg mb-12 italic max-w-xl mx-auto">
                            Initialize your protection matrix today and join the modern standard of insurance.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link to="/signup" className="w-full sm:w-auto px-10 py-5 rounded-[2rem] bg-white text-black font-black uppercase tracking-widest text-[11px] shadow-premium hover:scale-110 active:scale-95 transition-all text-center">
                                Build My Shield
                            </Link>
                            <Link to="/contact" className="w-full sm:w-auto px-10 py-5 rounded-[2rem] bg-emerald-600 text-white font-black uppercase tracking-widest text-[11px] shadow-premium hover:scale-110 active:scale-95 transition-all text-center">
                                Talk to an Advocate
                            </Link>
                        </div>
                        {/* Absolute Decorative */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-emerald-500/5 blur-[120px] rounded-full" />
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home2;
