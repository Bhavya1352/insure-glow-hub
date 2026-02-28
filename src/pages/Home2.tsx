import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
    ShieldCheck,
    Zap,
    ArrowRight,
    Activity,
    FileCheck,
    Bell,
    Database,
    Globe,
    Lock,
    Cpu,
    LineChart,
    Clock,
    Users,
    CheckCircle,
    HeartPulse,
    Building2,
    Smartphone
} from "lucide-react";
import { useDirection } from "@/contexts/DirectionContext";

const Home2 = () => {
    const { direction } = useDirection();
    const isRTL = direction === "rtl";

    return (
        <div className="relative bg-[#050608]">

            {/* Hero — Centered + Policy Terminal Panel */}
            <section className="relative pt-28 md:pt-44 pb-16 md:pb-24 overflow-hidden">
                <div className="absolute top-0 start-0 end-0 h-full pointer-events-none">
                    <div className="absolute top-[-5%] start-1/2 w-[60%] h-[60%] bg-emerald-600/8 blur-[180px] rounded-full" />
                    <div className="absolute bottom-[10%] end-1/4 w-[30%] h-[30%] bg-purple-600/8 blur-[120px] rounded-full" />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-black uppercase tracking-widest text-emerald-500 mb-8"
                    >
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> IRDAI Licensed · Real-time Claims
                    </motion.div>

                    <motion.h1
                        key={direction}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        dir={direction}
                        className="text-center text-4xl sm:text-6xl md:text-8xl lg:text-[7rem] font-display font-black text-white leading-[0.9] tracking-tighter mb-8"
                    >
                        {isRTL ? (
                            <>Protection for. <br /><span className="text-gradient-purple">modern families,</span></>
                        ) : (
                            <>Protection for. <br /><span className="text-gradient-purple">modern families,</span></>
                        )}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12"
                    >
                        The complete coverage platform. Build your protection matrix, activate instantly, and manage every claim in real-time.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
                    >
                        <Link to="/signup" className="px-10 py-5 rounded-[2rem] bg-emerald-500 text-black font-black uppercase tracking-widest text-[11px] shadow-premium hover:scale-105 active:scale-95 transition-all">
                            Get My Free Quote
                        </Link>
                        <Link to="/solutions" className="px-10 py-5 rounded-[2rem] bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest text-[11px] hover:bg-white/10 transition-all flex items-center gap-2">
                            Explore Coverage <ArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>

                    {/* Policy Terminal Panel */}
                    <motion.div
                        initial={{ opacity: 0, y: 30, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ delay: 0.4 }}
                        className="relative max-w-3xl mx-auto rounded-[2rem] bg-[#0a0c10] border border-white/10 overflow-hidden shadow-glass"
                    >
                        {/* Terminal Header */}
                        <div className="flex items-center gap-2 px-6 py-4 border-b border-white/5 bg-white/[0.02]">
                            <div className="w-3 h-3 rounded-full bg-red-500/60" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                            <div className="w-3 h-3 rounded-full bg-emerald-500/60" />
                            <span className="ms-4 text-[10px] font-black text-white/20 uppercase tracking-widest">Protection DNA Matrix — Live</span>
                        </div>
                        {/* Terminal Body */}
                        <div className="p-6 font-mono text-sm text-start">
                            <div className="text-emerald-500/60 mb-1"><span className="text-white/20">$</span> orbit policy init --family --ai-assess</div>
                            <div className="text-white/30 mb-1 ps-4">✓ Scanning risk profile...</div>
                            <div className="text-white/30 mb-1 ps-4">✓ Matching 240+ coverage plans...</div>
                            <div className="text-white/30 mb-3 ps-4">✓ Protection Matrix generated in 1.2s</div>
                            <div className="text-purple-400/80 mb-1"><span className="text-white/20">$</span> orbit claim submit --policy POL-2024-881</div>
                            <div className="text-white/30 mb-1 ps-4">✓ Claim ID: CLM-9942 created</div>
                            <div className="text-emerald-400 ps-4 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse inline-block" />
                                Settlement dispatched — ETA: 14 hours
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Trusted By */}
            <section className="py-10 border-y border-white/5">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <p className="text-[10px] font-black uppercase tracking-widest text-white/20 mb-8">Trusted by India's largest insurers</p>
                    <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
                        {['HDFC Ergo', 'Star Health', 'Bajaj Allianz', 'ICICI Lombard', 'Max Life', 'Tata AIG'].map(brand => (
                            <span key={brand} className="text-sm font-black text-white/20 hover:text-white/50 transition-colors tracking-widest uppercase">{brand}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Split — Claims at Speed of Light */}
            <section className="py-32 border-t border-white/5 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="order-2 lg:order-1 relative p-8 rounded-[2.5rem] bg-[#0a0c10] border border-white/5 overflow-hidden"
                        >
                            <div className="flex items-center justify-between mb-8">
                                <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">Claim Status</span>
                                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-[9px] font-black text-emerald-400 uppercase tracking-widest">Live</span>
                            </div>
                            <div className="space-y-4">
                                {[
                                    { label: "Hospitalisation — Priya M.", amount: "₹3,20,000", status: "Approved", color: "emerald" },
                                    { label: "Term Life — Arjun K.", amount: "₹50,00,000", status: "Processing", color: "yellow" },
                                    { label: "Vehicle — Rohit S.", amount: "₹85,000", status: "Approved", color: "emerald" },
                                    { label: "Critical Illness — Neha T.", amount: "₹10,00,000", status: "Approved", color: "emerald" },
                                ].map(item => (
                                    <div key={item.label} className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                                        <div>
                                            <p className="text-white text-sm font-bold">{item.label}</p>
                                            <p className="text-white/30 text-xs mt-0.5">{item.amount}</p>
                                        </div>
                                        <div className={`flex items-center gap-2 text-${item.color}-400 text-[10px] font-black uppercase tracking-wider`}>
                                            <div className={`w-1.5 h-1.5 rounded-full bg-${item.color}-400 ${item.color === 'emerald' ? 'animate-pulse' : ''}`} />
                                            {item.status}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="order-1 lg:order-2"
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-[10px] font-black uppercase tracking-widest text-purple-400 mb-6">
                                Instant Claims
                            </div>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-white leading-[0.9] tracking-tight mb-6">
                                Claims at the <br /><span className="text-gradient-purple">speed of light.</span>
                            </h2>
                            <p className="text-muted-foreground text-base leading-relaxed mb-10">
                                AI-powered claim processing that eliminates paperwork and manual follow-ups. Submit, track, and receive settlements without leaving your phone.
                            </p>
                            <div className="space-y-4">
                                {[
                                    { icon: Zap, title: "Lightning Fast", desc: "Average claim settled in under 14 hours — industry record." },
                                    { icon: CheckCircle, title: "Zero Paperwork", desc: "Upload once. Our AI extracts, verifies, and approves automatically." },
                                    { icon: Bell, title: "Real-time Alerts", desc: "Every status update pushed to your phone instantly — no follow-up calls needed." },
                                ].map(item => (
                                    <div key={item.title} className="flex items-start gap-4">
                                        <div className="w-8 h-8 rounded-xl bg-purple-900/30 text-purple-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <item.icon className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <p className="text-white font-bold text-sm">{item.title}</p>
                                            <p className="text-white/40 text-xs mt-0.5">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Integrations Grid */}
            <section className="py-24 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <div className="mb-16">
                        <h2 className="text-4xl md:text-5xl font-display font-black text-white leading-tight mb-4">
                            Connect with your <span className="text-gradient-purple">favorite tools</span>
                        </h2>
                        <p className="text-muted-foreground text-sm max-w-xl mx-auto">
                            Seamlessly integrates with apps and services your team already uses every day.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        {[
                            { icon: HeartPulse, title: "Health Record Sync", desc: "Auto-import medical records from Apollo, Fortis, and 200+ hospital networks for instant claim verification.", color: "emerald" },
                            { icon: Bell, title: "WhatsApp Alerts", desc: "Receive instant claim updates, renewal reminders, and policy alerts directly on WhatsApp.", color: "purple" },
                            { icon: Database, title: "Policy Vault Sync", desc: "Connect to DigiLocker and store all your policies, certificates, and receipts in one encrypted vault.", color: "indigo" },
                        ].map((item, i) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="p-8 rounded-[2rem] bg-[#0a0c10] border border-white/5 hover:border-white/10 transition-all text-start group"
                            >
                                <div className={`w-12 h-12 rounded-2xl bg-${item.color}-900/30 text-${item.color}-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-white font-display font-black text-lg mb-2">{item.title}</h3>
                                <p className="text-white/40 text-xs leading-relaxed">{item.desc}</p>
                                <button className="mt-6 text-[10px] font-black text-purple-400 uppercase tracking-widest flex items-center gap-1 hover:gap-2 transition-all">
                                    Learn more <ArrowRight className="w-3 h-3" />
                                </button>
                            </motion.div>
                        ))}
                    </div>
                    <div className="flex flex-wrap justify-center gap-8 opacity-30">
                        {['Apollo', 'Fortis', 'DigiLocker', 'Aarogya Setu', 'WhatsApp', 'UPI'].map(tool => (
                            <span key={tool} className="text-sm font-black text-white uppercase tracking-widest">{tool}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Performance Split */}
            <section className="py-32 border-t border-white/5 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-black uppercase tracking-widest text-emerald-400 mb-6">
                                System Performance
                            </div>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-white leading-[0.9] tracking-tight mb-6">
                                Performance that <br /><span className="text-gradient-purple">speaks volumes.</span>
                            </h2>
                            <p className="text-muted-foreground text-base leading-relaxed mb-10">
                                Built on enterprise infrastructure with 99.99% uptime, military-grade encryption, and real-time settlement engines processing millions of claims.
                            </p>
                            <div className="space-y-4">
                                {[
                                    { icon: Globe, title: "Edge Deployment", desc: "Claims processed from 12 regional hubs — under 100ms response globally." },
                                    { icon: LineChart, title: "Real-time Monitoring", desc: "Track every claim metric with millisecond precision in your dashboard." },
                                    { icon: Lock, title: "99.99% SLA", desc: "IRDAI-compliant enterprise-grade reliability — guaranteed uptime." },
                                ].map(item => (
                                    <div key={item.title} className="flex items-start gap-4">
                                        <div className="w-8 h-8 rounded-xl bg-emerald-900/30 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <item.icon className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <p className="text-white font-bold text-sm">{item.title}</p>
                                            <p className="text-white/40 text-xs mt-0.5">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="relative p-8 rounded-[2.5rem] bg-[#0a0c10] border border-white/5 overflow-hidden"
                        >
                            <div className="flex items-center justify-between mb-8">
                                <div>
                                    <p className="text-[10px] font-black text-white/20 uppercase tracking-widest mb-1">Settlement Dashboard</p>
                                    <p className="text-white font-black text-xl italic">4.7ms avg response</p>
                                </div>
                                <div className="px-3 py-1.5 rounded-full bg-emerald-500/20 text-emerald-400 font-black text-xs">99.99% UP</div>
                            </div>
                            {/* Fake chart bars */}
                            <div className="flex items-end gap-2 h-32 mb-8">
                                {[60, 80, 55, 90, 70, 95, 75, 100, 65, 88, 72, 92].map((h, i) => (
                                    <div key={i} className="flex-1 rounded-t-lg bg-purple-500/20 hover:bg-purple-500/40 transition-colors" style={{ height: `${h}%` }} />
                                ))}
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                                    <p className="text-[9px] font-black text-white/20 uppercase tracking-widest mb-1">Claims Today</p>
                                    <p className="text-white font-black text-2xl italic">18.2k</p>
                                </div>
                                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                                    <p className="text-[9px] font-black text-white/20 uppercase tracking-widest mb-1">Settled Today</p>
                                    <p className="text-emerald-400 font-black text-2xl italic">17.8k</p>
                                </div>
                            </div>
                            <div className="absolute top-[-30%] end-[-20%] w-64 h-64 bg-emerald-500/5 blur-[80px] rounded-full pointer-events-none" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Feature Grid */}
            <section className="py-24 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-6xl font-display font-black text-white leading-[0.9] mb-4 tracking-tight">
                        .Everything you need to ship
                    </h2>
                    <p className="text-muted-foreground uppercase tracking-widest text-[10px] font-black mb-20 italic">Complete coverage. Wrapped in a single platform.</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { icon: Globe, title: "Pan-India Network", desc: "6,000+ hospital cashless network covering every major city and tier-2 town.", wide: true },
                            { icon: ShieldCheck, title: "IRDAI Compliance", desc: "Fully licensed and regulated. Every policy backed by government guarantee." },
                            { icon: Cpu, title: "AI Risk Engine", desc: "Machine learning risk profiling for ultra-accurate premiums tailored to you." },
                            { icon: Smartphone, title: "Mobile-first Claims", desc: "Submit, track, and receive claims entirely from your smartphone." },
                            { icon: FileCheck, title: "Instant Policy PDF", desc: "Policy documents generated and delivered in under 30 seconds after checkout." },
                            { icon: Building2, title: "Group Enterprise", desc: "Bulk employee enrollment, consolidated billing, and HR dashboard built-in." },
                            { icon: Lock, title: "AES-256 Vault", desc: "Your medical records and policy data encrypted at rest and in transit.", wide: true },
                        ].map((f) => (
                            <motion.div
                                key={f.title}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className={`text-start p-8 rounded-[2rem] bg-[#0a0c10] border border-white/5 hover:border-white/15 transition-all group ${f.wide ? 'sm:col-span-2' : ''}`}
                            >
                                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5 text-white group-hover:rotate-[360deg] transition-transform duration-700">
                                    <f.icon className="w-5 h-5" />
                                </div>
                                <h3 className="text-base font-display font-black text-white mb-2 italic">{f.title}</h3>
                                <p className="text-muted-foreground text-xs italic leading-relaxed">{f.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Bar */}
            <section className="py-20 border-y border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { val: "14h", label: "Avg settlement time", sub: "Industry record" },
                            { val: "99.4%", label: "Claims success rate", sub: "Verified payouts" },
                            { val: "50k+", label: "Families protected", sub: "Active coverage" },
                            { val: "240+", label: "Plans available", sub: "From 18+ insurers" },
                        ].map((s, i) => (
                            <motion.div
                                key={s.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <p className="text-4xl md:text-5xl font-display font-black text-white italic mb-2 tracking-tighter">{s.val}</p>
                                <p className="text-[10px] font-black text-white uppercase tracking-widest leading-none mb-1">{s.label}</p>
                                <p className="text-[9px] text-white/30 uppercase italic">{s.sub}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] bg-emerald-600/8 blur-[150px] rounded-full" />
                </div>
                <div className="max-w-5xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="p-10 md:p-16 rounded-[3rem] bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-500/20 text-center relative overflow-hidden"
                    >
                        <ShieldCheck className="w-14 h-14 text-emerald-500 mx-auto mb-10" />
                        <h2 className="text-4xl md:text-6xl font-display font-black text-white leading-[0.9] mb-6 uppercase italic">
                            Don't leave your <br /><span className="text-gradient-purple">family to chance</span>
                        </h2>
                        <p className="text-muted-foreground text-lg mb-12 italic max-w-xl mx-auto">
                            Get your free protection matrix today and join 50,000+ families secured by OrbitScale.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link to="/signup" className="w-full sm:w-auto px-10 py-5 rounded-[2rem] bg-white text-black font-black uppercase tracking-widest text-[11px] shadow-premium hover:scale-105 active:scale-95 transition-all text-center">
                                Build My Shield
                            </Link>
                            <Link to="/solutions" className="w-full sm:w-auto px-10 py-5 rounded-[2rem] bg-emerald-600 text-white font-black uppercase tracking-widest text-[11px] hover:scale-105 active:scale-95 transition-all text-center">
                                Explore Plans
                            </Link>
                        </div>
                        <div className="absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />
                    </motion.div>
                </div>
            </section>

        </div>
    );
};

export default Home2;
