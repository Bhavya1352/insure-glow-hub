import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Users,
    ShieldCheck,
    Activity,
    Zap,
    CheckCircle2,
    Plus,
    ChevronRight,
    TrendingUp,
    AlertCircle,
    Heart,
    Car,
    CreditCard,
    X,
    Download,
    Eye,
    Lock
} from "lucide-react";

const Home2 = () => {
    const [claimSettled, setClaimSettled] = useState(48300);
    const [selectedPolicy, setSelectedPolicy] = useState<any>(null);
    const [showWellnessModal, setShowWellnessModal] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setClaimSettled(prev => prev + Math.floor(Math.random() * 5));
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const policies = [
        { id: 1, name: "Family Health DNA", sub: "₹25L Active Shield Matrix", updated: "Verified 3m ago", icon: Heart, color: "purple", premium: 1299, status: "Active" },
        { id: 2, name: "SafeDrive Matrix", sub: "Full Zero-Dep DriveZero Layer", updated: "Secured for 1y", icon: Car, color: "orange", premium: 899, status: "Active" },
        { id: 3, name: "ShieldLife Legacy", sub: "₹1.5Cr Protection DNA", updated: "System Check 2h ago", icon: ShieldCheck, color: "pink", premium: 2499, status: "Active" }
    ];

    return (
        <div className="pt-24 pb-20 px-6 max-w-7xl mx-auto">
            {/* Welcome Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12"
            >
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-[10px] font-black uppercase tracking-wider">
                            <Lock className="w-3 h-3" /> All Matrix Active
                        </div>
                        <span className="px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-500 text-[10px] font-black uppercase tracking-wider">Tier: Elite Shield</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-display font-black text-white">
                        Initialize, <span className="text-gradient-purple">Aditya</span>
                    </h1>
                    <p className="text-muted-foreground mt-2 max-w-lg text-sm">Your Protection DNA is running at peak integrity. All regulatory layers are active and verified for the current cycle.</p>
                </div>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <button className="px-5 py-2.5 rounded-xl border border-white/5 bg-white/5 font-black uppercase tracking-widest text-[10px] transition-all hover:bg-white/10">Advocacy Desk</button>
                    <button className="px-5 py-2.5 rounded-xl bg-white text-black font-black uppercase tracking-widest text-[10px] shadow-premium flex items-center justify-center gap-2 transition-transform hover:scale-105 active:scale-95"><Plus className="w-4 h-4" /> Expand Matrix</button>
                </div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column - Stats & Policies */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { label: "Active Layers", value: "4", icon: ShieldCheck, color: "purple" },
                            { label: "Matrix Integrity", value: "99.2%", icon: Activity, color: "orange" },
                            { label: "Total DNA Value", value: "₹2.5Cr", icon: Zap, color: "emerald" },
                            { label: "Advocacy Solves", value: claimSettled.toLocaleString(), icon: TrendingUp, color: "pink" }
                        ].map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-[#0a0c10]/40 backdrop-blur-xl border border-white/5 rounded-[2rem] p-6 relative overflow-hidden group hover:bg-white/[0.04] transition-all"
                            >
                                <div className={`absolute top-0 left-0 w-1 h-full bg-${stat.color === 'emerald' ? 'emerald' : stat.color === 'pink' ? 'pink' : stat.color === 'orange' ? 'orange' : 'purple'}-500`} />
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em]">{stat.label}</span>
                                    <stat.icon className="w-4 h-4 text-white/20 group-hover:text-white transition-colors" />
                                </div>
                                <div className="text-3xl font-display font-black text-white">{stat.value}</div>
                                {stat.label === "Advocacy Solves" && <div className="text-[9px] text-emerald-500 font-black mt-2 uppercase tracking-widest flex items-center gap-2 italic">● Live Advocacy Feed</div>}
                            </motion.div>
                        ))}
                    </div>

                    {/* Matrix Dashboard */}
                    <div className="grid grid-cols-1 gap-8">
                        {/* Active Policies Matrix */}
                        <div>
                            <div className="flex items-center justify-between mb-8">
                                <h3 className="text-[12px] font-black uppercase tracking-[0.3em] text-white/60">Your Protection Matrix</h3>
                                <button className="text-[10px] text-purple-500 font-black uppercase tracking-widest hover:underline">Full Disclosure</button>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                                {policies.map((policy, i) => (
                                    <motion.div
                                        key={policy.name}
                                        layoutId={`policy-${policy.id}`}
                                        onClick={() => setSelectedPolicy(policy)}
                                        whileHover={{ y: -5 }}
                                        className="bg-[#0a0c10]/40 backdrop-blur-3xl border border-white/5 rounded-[2.5rem] p-8 group transition-all cursor-pointer hover:border-purple-500/30 shadow-premium"
                                    >
                                        <div className="flex items-center justify-between mb-6">
                                            <div className={`w-12 h-12 rounded-2xl bg-${policy.color}-500/10 flex items-center justify-center border border-${policy.color}-500/20`}>
                                                <policy.icon className={`w-6 h-6 text-${policy.color}-500`} />
                                            </div>
                                            <span className="text-[9px] text-white/40 font-black uppercase tracking-widest">{policy.updated}</span>
                                        </div>
                                        <h4 className="text-lg font-black text-white mb-2 italic">{policy.name}</h4>
                                        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-6">{policy.sub}</p>
                                        <div className="flex items-center justify-between border-t border-white/5 pt-4">
                                            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-white/20 group-hover:text-white transition-all">Command Matrix</span>
                                            <ChevronRight className="w-4 h-4 text-white/20" />
                                        </div>
                                    </motion.div>
                                ))}
                                <button className="border-2 border-dashed border-white/5 rounded-[2.5rem] p-8 flex flex-col items-center justify-center gap-4 hover:bg-white/[0.02] transition-all group">
                                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:scale-110 transition-all bg-white/5">
                                        <Plus className="w-6 h-6 text-white/40 group-hover:text-white" />
                                    </div>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-white/40 group-hover:text-white transition-all">Import DNA Registry</span>
                                </button>
                            </div>
                        </div>

                        {/* Regulatory Roadmap */}
                        <div className="bg-[#0a0c10]/20 border border-white/10 rounded-[3rem] p-8 md:p-12 relative overflow-hidden">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                                <div>
                                    <h3 className="text-2xl font-display font-black text-white">Verification Trail</h3>
                                    <p className="text-sm text-muted-foreground mt-1">Strengthen your regulatory standing for better settlement odds.</p>
                                </div>
                                <div className="px-4 py-2 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-500 text-[10px] font-black uppercase tracking-[0.2em]">60% Integrity DNA</div>
                            </div>

                            <div className="space-y-4">
                                {[
                                    { title: "Biometric KYC Sync", date: "Jan 12, 2024", done: true },
                                    { title: "Direct Settlement Link", sub: "Required for instant accidental DNA payouts", done: false },
                                    { title: "Nominee Matrix Upload", date: "Jan 1, 2024", done: true }
                                ].map((step, i) => (
                                    <div key={step.title} className={`flex items-center justify-between p-6 rounded-3xl border transition-all hover:bg-white/[0.04] ${step.done ? 'bg-emerald-500/5 border-emerald-500/20' : 'bg-[#0a0c10] border-white/5'}`}>
                                        <div className="flex items-center gap-6">
                                            <div className={`w-10 h-10 rounded-2xl flex items-center justify-center ${step.done ? 'bg-emerald-500 text-[#0a0c10]' : 'bg-white/5 border border-white/10 text-white/20'}`}>
                                                {step.done ? <CheckCircle2 className="w-6 h-6" /> : <Activity className="w-6 h-6" />}
                                            </div>
                                            <div>
                                                <p className={`font-black uppercase tracking-wider text-sm ${step.done ? 'text-white' : 'text-white/40'}`}>{step.title}</p>
                                                {step.sub && <p className="text-[10px] font-bold text-muted-foreground tracking-wide mt-1 italic">{step.sub}</p>}
                                                {step.date && <p className="text-[9px] font-black text-emerald-500 uppercase tracking-widest mt-1">Verified: {step.date}</p>}
                                            </div>
                                        </div>
                                        {step.done && <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column - Status & Analytics */}
                <div className="space-y-8">
                    {/* Wellness Score Matrix */}
                    <div
                        onClick={() => setShowWellnessModal(true)}
                        className="bg-[#0a0c10]/40 backdrop-blur-3xl border border-white/10 rounded-[3rem] p-10 relative overflow-hidden group shadow-premium cursor-pointer transition-transform hover:scale-[1.02]"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500 opacity-10 rounded-full blur-3xl -mr-16 -mt-16" />
                        <h3 className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em] mb-12 text-center italic">DNA Integrity</h3>

                        <div className="relative w-56 h-56 mx-auto mb-10">
                            <svg className="w-full h-full transform -rotate-90">
                                <circle cx="112" cy="112" r="100" stroke="currentColor" strokeWidth="16" fill="transparent" className="text-white/5" />
                                <circle cx="112" cy="112" r="100" stroke="currentColor" strokeWidth="16" fill="transparent" strokeDasharray={628} strokeDashoffset={628 * (1 - 0.82)} strokeLinecap="round" className="text-purple-500 transition-all duration-1000" />
                            </svg>
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <span className="text-6xl font-display font-black text-white">82%</span>
                                <span className="text-[10px] font-black text-purple-500 uppercase tracking-widest mt-2">Integrity Score</span>
                            </div>
                        </div>

                        <p className="text-[10px] font-bold text-muted-foreground text-center mb-10 px-4 uppercase tracking-widest leading-relaxed">Optimization required: <br /> sync health data for +10% booster.</p>
                        <button className="w-full py-5 rounded-2xl bg-white text-black font-black uppercase tracking-widest text-[10px] shadow-premium pointer-events-none">Optimize DNA</button>
                    </div>

                    {/* Claims Advocacy Monitor */}
                    <div className="bg-[#0a0c10]/40 backdrop-blur-3xl border border-white/5 rounded-[3rem] p-10">
                        <div className="flex items-center justify-between mb-10">
                            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-white">Advocacy Feed</h3>
                            <Activity className="w-4 h-4 text-emerald-500" />
                        </div>
                        <div className="space-y-8">
                            {[
                                { label: "Under DNA Review", value: 1, color: "pink" },
                                { label: "Fully Approved", value: 4, color: "emerald" },
                                { label: "Document Gap", value: 2, color: "orange" },
                                { label: "Settled (30d Cycle)", value: 12, color: "purple" }
                            ].map(item => (
                                <div key={item.label}>
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">{item.label}</span>
                                        <span className="text-xs font-black text-white">{item.value}</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                        <div className={`h-full bg-${item.color === 'emerald' ? 'emerald' : item.color === 'pink' ? 'pink' : item.color === 'orange' ? 'orange' : 'purple'}-500`} style={{ width: `${(item.value / 19) * 100}%` }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-10 pt-8 border-t border-white/5 text-center">
                            <a href="#" className="text-[10px] font-black text-purple-500 uppercase tracking-widest hover:underline">View History Trail</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Matrix Command Modals */}
            <AnimatePresence>
                {selectedPolicy && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedPolicy(null)}
                            className="absolute inset-0 bg-background/80 backdrop-blur-xl"
                        />
                        <motion.div
                            layoutId={`policy-${selectedPolicy.id}`}
                            className="relative w-full max-w-xl bg-[#0a0c10] border border-white/10 rounded-[3.5rem] p-12 shadow-premium"
                        >
                            <button onClick={() => setSelectedPolicy(null)} className="absolute top-10 right-10 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-all"><X className="w-5 h-5" /></button>
                            <div className="flex items-center gap-6 mb-12">
                                <div className={`w-16 h-16 rounded-[1.5rem] bg-${selectedPolicy.color}-500/10 flex items-center justify-center border border-${selectedPolicy.color}-500/20`}>
                                    <selectedPolicy.icon className={`w-8 h-8 text-${selectedPolicy.color}-500`} />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-3xl font-display font-black text-white italic">{selectedPolicy.name}</h3>
                                    <div className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                        <span className="text-[10px] text-emerald-500 font-black uppercase tracking-[0.2em]">{selectedPolicy.status} LAYER</span>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-4 mb-12">
                                <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 flex justify-between items-center group hover:bg-white/5 transition-all">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Cycle Premium</span>
                                    <span className="text-xl font-display font-black text-white">₹{selectedPolicy.premium.toLocaleString()}</span>
                                </div>
                                <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 flex justify-between items-center group hover:bg-white/5 transition-all">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Verification Date</span>
                                    <span className="text-xl font-display font-black text-white">Oct 12, 2024</span>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <button className="flex items-center justify-center gap-3 py-5 rounded-[1.5rem] bg-white text-[#0a0c10] font-black uppercase tracking-widest text-[10px] shadow-premium hover:scale-105 transition-all"><CreditCard className="w-4 h-4" /> Initialize Pay</button>
                                <button className="flex items-center justify-center gap-3 py-5 rounded-[1.5rem] bg-[#0a0c10] text-white font-black uppercase tracking-widest text-[10px] border border-white/10 hover:bg-white/5 transition-all"><Download className="w-4 h-4" /> DNA Registry</button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* Wellness DNA Modal */}
            <AnimatePresence>
                {showWellnessModal && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setShowWellnessModal(false)}
                            className="absolute inset-0 bg-background/80 backdrop-blur-xl"
                        />
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative w-full max-w-2xl bg-[#0a0c10] border border-white/10 rounded-[4rem] p-12 md:p-20 shadow-premium text-center overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 blur-[100px] rounded-full -mr-32 -mt-32" />

                            <button onClick={() => setShowWellnessModal(false)} className="absolute top-10 right-10 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-all"><X className="w-5 h-5" /></button>
                            <div className="w-20 h-20 rounded-[2rem] bg-purple-500/10 border border-purple-500/30 flex items-center justify-center mx-auto mb-10">
                                <TrendingUp className="w-10 h-10 text-purple-500" />
                            </div>
                            <h3 className="text-4xl font-display font-black mb-4 text-white uppercase tracking-tight">Your Integrity Trail</h3>
                            <p className="text-muted-foreground mb-12 uppercase tracking-widest text-[10px] font-bold">Protocol Integrity: 82.4% Verified</p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12 text-left">
                                <div className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5">
                                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-3">Next DNA Sync</p>
                                    <p className="text-xl font-black text-white italic">Annual Health Checkup</p>
                                </div>
                                <div className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5">
                                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-3">Premium Alpha</p>
                                    <p className="text-xl font-black text-emerald-500">-15% DNA Applied</p>
                                </div>
                            </div>
                            <button className="w-full py-6 rounded-[2rem] bg-white text-[#0a0c10] font-black uppercase tracking-widest text-[12px] shadow-premium hover:scale-[1.02] transition-all flex items-center justify-center gap-3">
                                <Zap className="w-5 h-5" /> Initialize Reward Claim
                            </button>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Home2;
