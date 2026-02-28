import { motion, useInView, useMotionValue, useSpring, animate } from "framer-motion";
import { Link } from "react-router-dom";
import {
    ArrowRight,
    Activity,
    Zap,
    ShieldCheck,
    LineChart,
    Layers,
    Globe,
    Users
} from "lucide-react";
import { useDirection } from "@/contexts/DirectionContext";
import { useEffect, useRef, useState } from "react";

// Animated counter component
function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true });
    const motionValue = useMotionValue(0);
    const spring = useSpring(motionValue, { duration: 2000, bounce: 0 });
    useEffect(() => {
        if (inView) motionValue.set(to);
    }, [inView, to, motionValue]);
    useEffect(() => {
        return spring.on("change", (v) => {
            if (ref.current) ref.current.textContent = Math.round(v).toLocaleString("en-IN") + suffix;
        });
    }, [spring, suffix]);
    return <span ref={ref}>0{suffix}</span>;
}

const Home1 = () => {
    const { direction } = useDirection();
    const isRTL = direction === "rtl";
    return (
        <div className="relative">
            {/* Hero Section */}
            <section className="relative pt-28 md:pt-48 pb-16 md:pb-32 overflow-hidden bg-[#050608]">
                {/* Animated Background Blobs */}
                <div className="absolute top-0 start-0 end-0 h-full pointer-events-none overflow-hidden">
                    <motion.div
                        animate={{ scale: [1, 1.15, 1], x: [0, 30, 0], y: [0, -20, 0] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-[-10%] start-1/4 w-[55%] h-[55%] bg-purple-600/10 blur-[160px] rounded-full"
                    />
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], x: [0, -25, 0], y: [0, 30, 0] }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute bottom-[10%] end-1/4 w-[45%] h-[45%] bg-indigo-600/10 blur-[160px] rounded-full"
                    />
                    <motion.div
                        animate={{ scale: [1, 1.1, 1], x: [0, 15, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                        className="absolute top-[40%] start-[10%] w-[30%] h-[30%] bg-emerald-600/5 blur-[120px] rounded-full"
                    />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-purple-400 mb-8"
                    >
                        <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" /> v2.0 is now live
                    </motion.div>

                    <motion.h1
                        key={direction}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        dir={direction}
                        className="text-center text-4xl sm:text-6xl md:text-8xl lg:text-[7rem] font-display font-black text-white leading-[0.9] tracking-tighter mb-8"
                    >
                        Coverage for. <br />
                        <span className="text-gradient-purple">modern families,</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12"
                    >
                        India's smartest insurance platform. Get covered in minutes, <br className="hidden md:block" />
                        file claims in hours — not weeks.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
                    >
                        <Link to="/signup" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-black font-black uppercase tracking-widest text-[11px] shadow-premium hover:scale-105 active:scale-95 transition-all text-center">
                            Get Free Quote
                        </Link>
                        <Link to="/solutions" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-purple-600 text-white font-black uppercase tracking-widest text-[11px] shadow-premium hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2">
                            View Plans <ArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>

                    {/* Code Terminal Visualization */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="max-w-3xl mx-auto px-4"
                    >
                        <div className="bg-[#0a0c10] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/5 bg-white/[0.02]">
                                <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                                <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                            </div>
                            <div className="p-6 text-start font-mono text-sm sm:text-base leading-relaxed overflow-x-auto whitespace-nowrap scrollbar-hide">
                                <div className="flex gap-4">
                                    <span className="text-white/20 select-none">1</span>
                                    <span className="text-purple-400">POST</span>
                                    <span className="text-white">/api/v2/policy/quote</span>
                                </div>
                                <div className="flex gap-4 mt-2">
                                    <span className="text-white/20 select-none">2</span>
                                    <span className="text-white/40 italic">// IRDAI compliant · Instant underwriting</span>
                                </div>
                                <div className="flex gap-4">
                                    <span className="text-white/20 select-none">3</span>
                                    <span className="text-blue-400">→</span>
                                    <span className="text-emerald-400">200 OK</span>
                                    <span className="text-white/40">· 47ms</span>
                                </div>
                                <div className="flex gap-4">
                                    <span className="text-white/20 select-none">4</span>
                                    <span className="text-white">{'{'} </span>
                                    <span className="text-purple-400">premium:</span>
                                    <span className="text-emerald-400">"₹799/mo"</span>
                                    <span className="text-white">,</span>
                                    <span className="text-purple-400">coverage:</span>
                                    <span className="text-emerald-400">"₹50L"</span>
                                    <span className="text-white"> {'}'}</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Integration Grid */}
            <section className="py-24 bg-[#050608] border-y border-white/5">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-5xl font-display font-black text-white mb-4">
                        Works with your <span className="text-gradient-purple">entire ecosystem</span>
                    </h2>
                    <p className="text-muted-foreground mb-16 uppercase tracking-widest text-[10px] font-black">
                        Seamlessly connected to India's healthcare, finance & government infrastructure.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: ShieldCheck, label: "DigiLocker Sync", sub: "Fetch your Aadhaar, PAN, and health records instantly. Zero manual uploads needed.", color: "pink" },
                            { icon: Activity, label: "WhatsApp Alerts", sub: "Receive real-time claim status updates, policy reminders, and premium receipts on WhatsApp.", color: "blue" },
                            { icon: LineChart, label: "ABHA Integration", sub: "Linked with Ayushman Bharat Health Account for seamless cashless hospital claims.", color: "purple" }
                        ].map((item, i) => (
                            <motion.div
                                key={item.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="group p-6 md:p-10 rounded-2xl md:rounded-[2.5rem] bg-[#0a0c10] border border-white/5 hover:border-white/20 transition-all text-center"
                            >
                                <div className={`w-14 h-14 rounded-2xl bg-${item.color}-500/10 border border-${item.color}-500/20 flex items-center justify-center mx-auto mb-8 text-${item.color}-500 group-hover:scale-110 transition-transform`}>
                                    <item.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-display font-black text-white mb-4">{item.label}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">{item.sub}</p>
                                <button className="text-[10px] font-black uppercase tracking-widest text-white/40 hover:text-white transition-colors">
                                    Learn more
                                </button>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-16 flex flex-wrap justify-center items-center gap-12 opacity-30 hover:opacity-60 transition-all">
                        {['HDFC Ergo', 'Star Health', 'Bajaj Allianz', 'Tata AIG', 'Max Life', 'ICICI Lombard'].map(tool => (
                            <span key={tool} className="text-sm font-black text-white uppercase tracking-widest">{tool}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Performance Stats Section */}
            <section className="py-32 bg-[#050608]">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-black uppercase tracking-widest text-emerald-500 mb-6">
                            IRDAI Certified
                        </div>
                        <h2 className="text-4xl md:text-6xl font-display font-black text-white leading-[0.9] mb-8">
                            Claims that settle. <br />
                            <span className="text-gradient-purple">in hours, not weeks</span>
                        </h2>
                        <p className="text-muted-foreground text-lg mb-12 italic">
                            Our AI-powered claims engine processes documents instantly and routes your case to the right insurer — with zero manual follow-up from your end.
                        </p>

                        <div className="space-y-6">
                            {[
                                { icon: Zap, label: "48-Hour Settlement", sub: "Most claims approved and paid within 48 hours of submission." },
                                { icon: ShieldCheck, label: "AI Document Scan", sub: "Instant OCR verification — no manual data entry or re-uploads." },
                                { icon: Users, label: "Dedicated Advisor", sub: "A real human advocates for your claim from filing to payout." }
                            ].map((feature, i) => (
                                <div key={feature.label} className="flex gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-purple-500 shrink-0">
                                        <feature.icon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white text-sm">{feature.label}</h4>
                                        <p className="text-xs text-muted-foreground mt-1">{feature.sub}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="p-8 rounded-[3rem] bg-[#0a0c10] border border-white/10 shadow-glass relative overflow-hidden"
                    >
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="text-sm font-black uppercase tracking-widest text-white">Claims Status</h3>
                            <div className="px-3 py-1 rounded-md bg-emerald-500/10 text-[10px] font-black text-emerald-500 uppercase">
                                Live
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-6 mb-8">
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                                <p className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-1">Settled Today</p>
                                <p className="text-2xl font-display font-black text-white italic">
                                    <CountUp to={1284} />
                                </p>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                                <p className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-1">Success Rate</p>
                                <p className="text-2xl font-display font-black text-white italic">
                                    <CountUp to={99} suffix=".8%" />
                                </p>
                            </div>
                        </div>

                        {/* Visual Chart */}
                        <div className="h-48 flex items-end gap-2 overflow-hidden">
                            {[40, 60, 45, 70, 55, 80, 65, 90, 75, 100, 85, 95].map((h, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ height: 0 }}
                                    whileInView={{ height: `${h}%` }}
                                    transition={{ delay: i * 0.05 }}
                                    className="flex-1 bg-gradient-to-t from-purple-500 to-pink-500/30 rounded-t-sm"
                                />
                            ))}
                        </div>
                        <div className="absolute top-1/2 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 -translate-y-1/2 px-6 py-2 rounded-xl bg-purple-600 shadow-premium font-black text-[10px] text-white uppercase tracking-widest">
                            99.8% Success Rate
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Feature Grids */}
            <section className="py-24 bg-[#050608] border-t border-white/5 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-6xl font-display font-black text-white leading-[0.9] mb-12 tracking-tight">
                        Everything you need to protect.
                    </h2>
                    <p className="text-muted-foreground uppercase tracking-widest text-[10px] font-black mb-20 italic">Powerful coverage tools built for modern India</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        <div className="p-6 md:p-12 rounded-2xl md:rounded-[3.5rem] bg-gradient-to-br from-white/5 to-transparent border border-white/10 text-start group overflow-hidden relative">
                            <div className="relative z-10">
                                <ShieldCheck className="w-10 h-10 text-emerald-500 mb-6" />
                                <h3 className="text-2xl font-display font-black text-white mb-4 italic">Instant Claims</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">File and track your claims entirely online. AI verification settles most health claims in under 48 hours — no hospital visits, no paperwork.</p>
                            </div>
                            <div className="absolute bottom-[-10%] end-[-10%] w-[60%] h-[60%] bg-emerald-500/5 blur-[80px] rounded-full group-hover:scale-110 transition-transform" />
                        </div>

                        <div className="p-6 md:p-12 rounded-2xl md:rounded-[3.5rem] bg-gradient-to-br from-white/5 to-transparent border border-white/10 text-start group overflow-hidden relative">
                            <div className="relative z-10">
                                <Globe className="w-10 h-10 text-blue-500 mb-6" />
                                <h3 className="text-2xl font-display font-black text-white mb-4 italic">Pan-India Network</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">8,500+ cashless hospitals across 720 districts. Your card works everywhere — from tier-1 cities to remote tehsils.</p>
                            </div>
                            <div className="absolute bottom-[-10%] end-[-10%] w-[60%] h-[60%] bg-blue-500/5 blur-[80px] rounded-full group-hover:scale-110 transition-transform" />
                            <div className="absolute bottom-10 end-10 flex flex-col gap-2 items-end">
                                <div className="w-32 h-1 bg-white/5 rounded-full overflow-hidden">
                                    <motion.div initial={{ width: 0 }} whileInView={{ width: '70%' }} className="h-full bg-blue-500" />
                                </div>
                                <div className="flex gap-2">
                                    {[1, 2, 3, 4].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-blue-500/40" />)}
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="md:col-span-2 p-6 md:p-10 rounded-2xl md:rounded-[2.5rem] bg-[#0a0c10] border border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-10">
                            <div className="text-start">
                                <h3 className="text-xl font-display font-black text-white mb-2 italic">Policy Analytics</h3>
                                <p className="text-muted-foreground text-xs leading-relaxed max-w-xs italic">Track your coverage health, renewal dates, premium history, and claim status — all in one live dashboard.</p>
                                <Link to="/dashboard" className="mt-6 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-purple-500 group">
                                    View Dashboard <ArrowRight className="w-3 h-3 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                                </Link>
                            </div>
                            <div className="w-full md:w-auto flex items-end gap-1.5 h-24 px-4 border-s border-white/5">
                                {[30, 50, 40, 80, 60, 70, 40, 60].map((h, i) => (
                                    <div key={i} style={{ height: `${h}%` }} className="w-4 bg-purple-500/20 rounded-t-md" />
                                ))}
                            </div>
                        </div>

                        <div className="p-6 md:p-10 rounded-2xl md:rounded-[2.5rem] bg-[#0a0c10] border border-white/5 text-center group">
                            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-6 text-white group-hover:rotate-[360deg] transition-transform duration-700">
                                <Layers className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-display font-black text-white mb-2 italic">Flexible Riders</h3>
                            <p className="text-muted-foreground text-xs italic">Add critical illness, maternity, accident, or OPD riders to any base plan — customize your shield.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trusted By — Infinite Marquee */}
            <section className="py-14 bg-[#050608] border-t border-white/5 overflow-hidden">
                <p className="text-[10px] font-black uppercase tracking-widest text-white/20 mb-10 text-center">Trusted by leading insurers &amp; enterprises</p>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 w-24 bg-gradient-to-r from-[#050608] to-transparent z-10 pointer-events-none" />
                    <div className="absolute inset-y-0 end-0 w-24 bg-gradient-to-l from-[#050608] to-transparent z-10 pointer-events-none" />
                    <motion.div
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="flex gap-16 whitespace-nowrap w-max py-2"
                    >
                        {[
                            'HDFC Ergo', 'Star Health', 'Bajaj Allianz', 'ICICI Lombard', 'Max Life', 'Tata AIG', 'New India', 'SBI Life',
                            'HDFC Ergo', 'Star Health', 'Bajaj Allianz', 'ICICI Lombard', 'Max Life', 'Tata AIG', 'New India', 'SBI Life'
                        ].map((brand, i) => (
                            <span key={i} className="text-sm font-black text-white/25 hover:text-white/70 transition-colors tracking-widest uppercase cursor-default">
                                {brand}
                            </span>
                        ))}
                    </motion.div>
                </div>
            </section>


            {/* How It Works */}
            <section className="py-32 bg-[#050608] border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-[10px] font-black uppercase tracking-widest text-purple-400 mb-6">
                            Simple Process
                        </div>
                        <h2 className="text-4xl md:text-6xl font-display font-black text-white leading-[0.9] tracking-tight mb-6">
                            Coverage in <span className="text-gradient-purple">3 steps.</span>
                        </h2>
                        <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto italic">
                            No agents. No paperwork. Get your protection matrix online in minutes.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                        {/* Connecting line */}
                        <div className="hidden md:block absolute top-10 left-1/3 right-1/3 h-px bg-gradient-to-r from-purple-500/50 to-indigo-500/50" />

                        {[
                            { step: '01', title: 'Build your Risk Profile', desc: 'Answer 3 questions about your age, family size, and coverage needs. Our AI calculates your exact Protection DNA.', color: 'purple' },
                            { step: '02', title: 'Compare & Customize', desc: 'Review tailored plans from top insurers side-by-side. Adjust coverage, riders, and terms with zero hidden fees.', color: 'indigo' },
                            { step: '03', title: 'Activate Instantly', desc: 'E-sign your policy in seconds. Coverage starts today. Your protection certificate lands in your inbox immediately.', color: 'emerald' },
                        ].map((item, i) => (
                            <motion.div
                                key={item.step}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.15 }}
                                className="relative p-8 rounded-[2.5rem] bg-[#0a0c10] border border-white/5 hover:border-white/20 transition-all group"
                            >
                                <div className={`text-[4rem] font-display font-black text-${item.color}-500/10 leading-none mb-6 group-hover:text-${item.color}-500/20 transition-colors`}>
                                    {item.step}
                                </div>
                                <h3 className="text-lg font-display font-black text-white mb-3">{item.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-32 bg-[#050608] border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-6xl font-display font-black text-white leading-[0.9] tracking-tight mb-4">
                            Clients who <span className="text-gradient-purple">trust us.</span>
                        </h2>
                        <p className="text-muted-foreground text-sm italic">Real stories from real policyholders.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { quote: "Claimed ₹8L in under 48 hours after my surgery. Zero follow-ups needed. The fastest insurance experience I've ever had.", name: "Priya Mehta", role: "Senior Engineer, Bengaluru", rating: 5 },
                            { quote: "Comparing 12 plans at once and seeing the exact coverage gaps — it felt like I finally had a financial advisor in my pocket.", name: "Arjun Kapoor", role: "Founder, Delhi NCR", rating: 5 },
                            { quote: "We enrolled our entire team of 60. The group policy setup took less than a morning and the pricing was 30% better than our broker offered.", name: "Neha Sharma", role: "HR Director, Mumbai", rating: 5 },
                        ].map((t, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="p-8 rounded-[2rem] bg-[#0a0c10] border border-white/5 hover:border-purple-500/20 transition-all flex flex-col gap-6"
                            >
                                <div className="flex gap-1">
                                    {Array(t.rating).fill(0).map((_, j) => (
                                        <span key={j} className="text-yellow-400 text-sm">★</span>
                                    ))}
                                </div>
                                <p className="text-white/70 text-sm leading-relaxed italic flex-1">"{t.quote}"</p>
                                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white font-black text-sm">
                                        {t.name[0]}
                                    </div>
                                    <div>
                                        <p className="text-white font-bold text-sm">{t.name}</p>
                                        <p className="text-white/30 text-xs">{t.role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 bg-[#050608] border-t border-white/5 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-purple-600/8 blur-[150px] rounded-full" />
                </div>
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-purple-400 mb-8">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Zero waiting period on select plans
                    </div>
                    <h2 className="text-5xl md:text-7xl font-display font-black text-white leading-[0.9] tracking-tighter mb-8">
                        Protect what<br /><span className="text-gradient-purple">matters most.</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-12 italic">
                        Join 50,000+ families and businesses covered by OrbitScale. Get your personalized quote in under 2 minutes.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link to="/signup" className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-purple-600 text-white font-black uppercase tracking-widest text-[11px] shadow-premium hover:scale-105 active:scale-95 transition-all">
                            Get Your Free Quote
                        </Link>
                        <Link to="/solutions" className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest text-[11px] hover:bg-white/10 transition-all">
                            View Coverage Plans
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home1;
