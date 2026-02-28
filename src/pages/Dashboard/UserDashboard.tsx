import { motion, AnimatePresence } from "framer-motion";
import {
    LayoutDashboard,
    FileText,
    ShieldCheck,
    CreditCard,
    Users,
    Settings,
    Bell,
    Activity,
    CheckCircle2,
    TrendingUp,
    MessageSquare,
    Search,
    Globe,
    X,
    Menu,
    Heart,
    Car,
    Home,
    Plus,
    ArrowRight
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDirection } from "@/contexts/DirectionContext";

const UserDashboard = () => {
    const [activeNav, setActiveNav] = useState("Dashboard");
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const { direction, toggleDirection } = useDirection();
    const navigate = useNavigate();

    const sidebarLinks = [
        { label: "Dashboard", icon: LayoutDashboard },
        { label: "My Policies", icon: FileText },
        { label: "Claims", icon: ShieldCheck },
        { label: "Payments", icon: CreditCard },
        { label: "Family", icon: Users },
        { label: "Settings", icon: Settings }
    ];

    const policies = [
        { name: "Family Health Plan", desc: "₹50L cover · 4 members · Star Health", renewed: "Renews Apr 2026", color: "bg-emerald-500", icon: Heart },
        { name: "Motor Insurance", desc: "Honda City · Comprehensive · Bajaj Allianz", renewed: "Renews Jul 2026", color: "bg-blue-500", icon: Car },
        { name: "Home Shield", desc: "2BHK · Structure + Contents · HDFC Ergo", renewed: "Renews Jan 2027", color: "bg-orange-500", icon: Home }
    ];

    const claimsChecklist = [
        { title: "Upload hospital bills", detail: "Required for health claim reimbursement", done: true },
        { title: "Link Aadhaar via DigiLocker", detail: "For faster KYC verification", done: true },
        { title: "Add nominee details", detail: "Ensures faster claim settlement", done: false },
    ];

    return (
        <div className="min-h-screen bg-[#050608] flex pt-16 lg:pt-24">

            {/* Mobile Sidebar Overlay */}
            <AnimatePresence>
                {sidebarOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSidebarOpen(false)}
                        className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
                    />
                )}
            </AnimatePresence>

            {/* Left Sidebar */}
            <AnimatePresence>
                {(sidebarOpen) && (
                    <motion.aside
                        initial={{ x: -280 }}
                        animate={{ x: 0 }}
                        exit={{ x: -280 }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed start-0 top-0 bottom-0 w-72 bg-[#070810] border-e border-white/5 px-6 py-8 z-50 flex flex-col lg:hidden"
                    >
                        <div className="flex items-center justify-between mb-8">
                            <span className="text-white font-black text-lg">OrbitScale</span>
                            <button onClick={() => setSidebarOpen(false)} className="p-2 rounded-xl bg-white/5 text-white/40 hover:text-white">
                                <X className="w-4 h-4" />
                            </button>
                        </div>
                        <SidebarContent sidebarLinks={sidebarLinks} activeNav={activeNav} setActiveNav={(l) => { setActiveNav(l); setSidebarOpen(false); }} />
                    </motion.aside>
                )}
            </AnimatePresence>

            {/* Desktop Sidebar */}
            <aside className="hidden lg:flex w-64 flex-col fixed start-0 top-24 bottom-0 bg-[#050608] border-e border-white/5 px-6 py-8 z-20">
                <SidebarContent sidebarLinks={sidebarLinks} activeNav={activeNav} setActiveNav={setActiveNav} />
            </aside>

            {/* Main Content */}
            <div className="flex-1 lg:ms-64 min-h-screen w-full">
                {/* Top Bar */}
                <header className="sticky top-16 lg:top-24 z-30 bg-[#050608]/90 backdrop-blur-xl border-b border-white/5 px-4 lg:px-10 py-3 lg:py-4 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                        {/* Mobile hamburger */}
                        <button
                            onClick={() => setSidebarOpen(true)}
                            className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-white/40 hover:text-white transition-all lg:hidden"
                        >
                            <Menu className="w-4 h-4" />
                        </button>
                        <div className="relative hidden sm:block">
                            <Search className="absolute start-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                            <input
                                type="text"
                                placeholder="Search policies, claims..."
                                className="ps-10 pe-4 py-2.5 rounded-xl bg-white/5 border border-white/5 text-xs text-white outline-none focus:border-purple-500/50 w-48 lg:w-56 transition-all"
                            />
                        </div>
                    </div>
                    <div className="flex items-center gap-2 lg:gap-4">
                        <button
                            onClick={toggleDirection}
                            className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-white/40 hover:text-white transition-all"
                            title={direction === "ltr" ? "Switch to RTL" : "Switch to LTR"}
                        >
                            <Globe className="w-4 h-4" />
                        </button>
                        <button className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-white/40 hover:text-white transition-all relative">
                            <Bell className="w-4 h-4" />
                            <span className="absolute top-1.5 end-1.5 w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                        </button>
                        <button onClick={() => navigate('/login')} className="text-[10px] font-black text-white/40 uppercase tracking-widest hover:text-red-400 transition-colors hidden sm:block">Logout</button>
                        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-[10px] font-black text-white shrink-0">YS</div>
                    </div>
                </header>

                {/* Dashboard Content */}
                <main className="p-4 lg:p-10 space-y-6 lg:space-y-8 pb-20">
                    {/* Welcome Banner */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="relative p-6 lg:p-10 rounded-[1.5rem] lg:rounded-[2rem] bg-gradient-to-br from-[#1a1c24] to-[#0d0f14] border border-white/5 overflow-hidden"
                    >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 lg:gap-6 relative z-10">
                            <div>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[9px] font-black text-emerald-500 uppercase tracking-widest mb-3">
                                    Family Shield Plan <span className="text-white/30">●</span> Active
                                </div>
                                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-display font-black text-white italic tracking-tight mb-2">
                                    Welcome back, Yash 👋
                                </h1>
                                <p className="text-white/40 text-sm max-w-md leading-relaxed">
                                    Your coverage is up to date. You have 1 pending action — add nominee details for faster claims.
                                </p>
                            </div>
                            <div className="flex items-center gap-3 shrink-0">
                                <button className="px-4 lg:px-5 py-3 rounded-xl bg-emerald-600 text-white font-bold text-[10px] uppercase tracking-widest shadow-lg shadow-emerald-600/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-2">
                                    <Plus className="w-4 h-4" /> Add Policy
                                </button>
                                <button className="px-4 lg:px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-[10px] uppercase tracking-widest hover:bg-white/10 transition-all flex items-center gap-2 hidden sm:flex">
                                    <FileText className="w-4 h-4" /> File Claim
                                </button>
                            </div>
                        </div>
                        <div className="absolute top-[-20%] end-[-10%] w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full" />
                    </motion.section>

                    {/* Stats Cards */}
                    <section className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6">
                        {[
                            { label: "Active Policies", val: "3", icon: ShieldCheck, change: "All Active", color: "purple" },
                            { label: "Total Coverage", val: "₹1.1Cr", icon: TrendingUp, change: "+₹50L", color: "emerald" },
                            { label: "Family Members", val: "4", icon: Users, change: "Covered", color: "orange" },
                            { label: "Claims Filed", val: "1", icon: Activity, change: "Settled", color: "blue" }
                        ].map((s, i) => (
                            <motion.div
                                key={s.label}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="p-4 lg:p-6 rounded-[1.25rem] lg:rounded-[1.5rem] bg-[#0a0c10] border border-white/5 hover:border-white/10 transition-all"
                            >
                                <div className="flex items-center justify-between mb-4 lg:mb-6">
                                    <div className={`w-9 h-9 lg:w-10 lg:h-10 rounded-xl bg-${s.color}-500/10 border border-${s.color}-500/20 flex items-center justify-center text-${s.color}-500`}>
                                        <s.icon className="w-4 h-4 lg:w-5 lg:h-5" />
                                    </div>
                                    <span className="text-[9px] font-black text-emerald-500 uppercase tracking-widest">{s.change}</span>
                                </div>
                                <p className="text-xl lg:text-2xl font-black text-white italic tracking-tight mb-1">{s.val}</p>
                                <p className="text-[10px] font-black text-white/20 uppercase tracking-widest">{s.label}</p>
                            </motion.div>
                        ))}
                    </section>

                    {/* Checklist + Coverage Donut */}
                    <section className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
                        {/* Claims Checklist */}
                        <div className="lg:col-span-7 p-5 lg:p-8 rounded-[1.5rem] lg:rounded-[2rem] bg-[#0a0c10] border border-white/5">
                            <div className="flex items-center justify-between mb-6 lg:mb-8">
                                <div>
                                    <h2 className="text-base lg:text-lg font-black text-white italic tracking-tight">Claim Readiness</h2>
                                    <p className="text-[10px] text-white/30 uppercase tracking-widest mt-1">Complete these to ensure instant claim settlement</p>
                                </div>
                                <span className="px-3 py-1 rounded-lg bg-purple-500/10 border border-purple-500/20 text-[9px] font-black text-purple-500 uppercase">67% Ready</span>
                            </div>
                            <div className="space-y-3">
                                {claimsChecklist.map((step, i) => (
                                    <div key={i} className={`p-4 rounded-xl border flex items-center justify-between transition-all ${step.done ? 'bg-white/[0.02] border-white/5' : 'bg-[#0d0f14] border-white/10 hover:border-white/20'}`}>
                                        <div className="flex items-center gap-3 lg:gap-4">
                                            <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${step.done ? 'bg-emerald-500 text-white' : 'bg-white/5 border border-white/10 text-white/20'}`}>
                                                <CheckCircle2 className="w-4 h-4" />
                                            </div>
                                            <div>
                                                <p className={`text-sm font-bold ${step.done ? 'text-white' : 'text-white/60'}`}>{step.title}</p>
                                                <p className="text-[9px] text-white/20 uppercase tracking-widest mt-0.5 hidden sm:block">{step.detail}</p>
                                            </div>
                                        </div>
                                        {!step.done && <ArrowRight className="w-4 h-4 text-purple-500 shrink-0" />}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Coverage Ring */}
                        <div className="lg:col-span-5 p-5 lg:p-8 rounded-[1.5rem] lg:rounded-[2rem] bg-[#0a0c10] border border-white/5 flex flex-col items-center justify-center">
                            <h3 className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em] mb-6 self-start">Coverage Health</h3>
                            <div className="relative w-36 h-36 lg:w-40 lg:h-40 mb-5">
                                <svg className="w-full h-full transform -rotate-90">
                                    <circle cx="72" cy="72" r="62" stroke="currentColor" strokeWidth="10" fill="transparent" className="text-white/5" />
                                    <circle cx="72" cy="72" r="62" stroke="currentColor" strokeWidth="10" fill="transparent" strokeDasharray={390} strokeDashoffset={390 * (1 - 0.88)} strokeLinecap="round" className="text-emerald-500" />
                                </svg>
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <p className="text-3xl lg:text-4xl font-black text-white italic">88%</p>
                                    <p className="text-[9px] font-black text-white/20 uppercase tracking-widest mt-1">Covered</p>
                                </div>
                            </div>
                            <p className="text-[10px] text-white/30 text-center mb-5 max-w-[180px] leading-relaxed">Add critical illness rider to reach 100% coverage</p>
                            <button className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-500 text-white font-black uppercase tracking-widest text-[9px] shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all">
                                Upgrade Coverage
                            </button>
                        </div>
                    </section>

                    {/* Active Policies */}
                    <section>
                        <div className="flex items-center justify-between mb-4 lg:mb-6">
                            <div>
                                <h2 className="text-base lg:text-lg font-black text-white italic tracking-tight">Active Policies</h2>
                                <p className="text-[10px] text-white/30 uppercase tracking-widest mt-1">Your current insurance coverage</p>
                            </div>
                            <button className="text-[10px] font-black text-purple-500 uppercase tracking-widest hover:text-purple-400 transition-colors flex items-center gap-1">
                                View all <ArrowRight className="w-3 h-3" />
                            </button>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6">
                            {/* Add New */}
                            <button className="border-2 border-dashed border-white/5 rounded-[1.25rem] lg:rounded-[1.5rem] p-5 lg:p-6 flex flex-col items-center justify-center gap-3 hover:border-white/20 hover:bg-white/[0.02] transition-all min-h-[160px] lg:min-h-[180px]">
                                <div className="w-11 h-11 rounded-full bg-white/5 flex items-center justify-center text-white/20 hover:bg-purple-600 hover:text-white transition-all">
                                    <Plus className="w-5 h-5" />
                                </div>
                                <div className="text-center">
                                    <p className="text-sm font-black text-white italic">Add Policy</p>
                                    <p className="text-[9px] text-white/20 uppercase tracking-widest mt-1">Get new coverage</p>
                                </div>
                            </button>

                            {policies.map(p => (
                                <div key={p.name} className="p-5 lg:p-6 rounded-[1.25rem] lg:rounded-[1.5rem] bg-[#0a0c10] border border-white/5 hover:border-white/10 transition-all">
                                    <div className="flex items-center justify-between mb-4 lg:mb-6">
                                        <div className={`w-10 h-10 rounded-xl ${p.color} flex items-center justify-center text-white`}>
                                            <p.icon className="w-5 h-5" />
                                        </div>
                                        <div className="w-2 h-2 rounded-full bg-emerald-500" />
                                    </div>
                                    <h4 className="text-sm lg:text-base font-black text-white italic tracking-tight mb-1">{p.name}</h4>
                                    <p className="text-[10px] text-white/30 leading-relaxed mb-4 lg:mb-6">{p.desc}</p>
                                    <div className="flex items-center justify-between border-t border-white/5 pt-3 lg:pt-4">
                                        <p className="text-[9px] text-white/20 uppercase tracking-widest">{p.renewed}</p>
                                        <button className="text-[9px] font-black text-purple-500 uppercase tracking-widest px-3 py-1.5 rounded-lg bg-purple-500/10 border border-purple-500/20 hover:bg-purple-600 hover:text-white transition-all">View</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Claims Trend */}
                    <section className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
                        <div className="lg:col-span-7 p-5 lg:p-8 rounded-[1.5rem] lg:rounded-[2rem] bg-[#0a0c10] border border-white/5">
                            <div className="flex items-center justify-between mb-6 lg:mb-8">
                                <div>
                                    <h3 className="text-base font-black text-white italic tracking-tight">Premium Trend</h3>
                                    <p className="text-[10px] text-white/20 uppercase tracking-widest mt-1">Monthly premium paid this year</p>
                                </div>
                                <button className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[9px] font-bold text-white/60">2026</button>
                            </div>
                            <div className="h-36 lg:h-44 w-full">
                                <svg className="w-full h-full" viewBox="0 0 400 100" preserveAspectRatio="none">
                                    <defs>
                                        <linearGradient id="premGrad" x1="0" x2="0" y1="0" y2="1">
                                            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.3" />
                                            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
                                        </linearGradient>
                                    </defs>
                                    <path d="M0,70 Q50,65 100,60 T200,55 T300,45 T400,40 L400,100 L0,100 Z" fill="url(#premGrad)" />
                                    <path d="M0,70 Q50,65 100,60 T200,55 T300,45 T400,40" fill="none" stroke="#8b5cf6" strokeWidth="2.5" strokeLinecap="round" />
                                </svg>
                            </div>
                        </div>

                        <div className="lg:col-span-5 p-5 lg:p-8 rounded-[1.5rem] lg:rounded-[2rem] bg-[#0a0c10] border border-white/5">
                            <div className="flex items-center justify-between mb-6 lg:mb-8">
                                <div>
                                    <h3 className="text-base font-black text-white italic tracking-tight">Claim Summary</h3>
                                    <p className="text-[10px] text-white/20 uppercase tracking-widest mt-1">This year</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4 text-center">
                                {[
                                    { level: "Filed", count: 1, color: "text-blue-500" },
                                    { level: "Settled", count: 1, color: "text-emerald-500" },
                                    { level: "Pending", count: 0, color: "text-amber-500" },
                                    { level: "Rejected", count: 0, color: "text-rose-500" }
                                ].map(item => (
                                    <div key={item.level} className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                                        <p className="text-[9px] font-black text-white/20 uppercase tracking-widest mb-2">{item.level}</p>
                                        <p className={`text-2xl font-black italic ${item.color}`}>{item.count}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Quick Support */}
                    <section className="p-5 lg:p-8 rounded-[1.5rem] lg:rounded-[2rem] bg-[#0a0c10] border border-white/5">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-500 shrink-0">
                                    <MessageSquare className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="text-base font-black text-white italic tracking-tight">Need Help?</h3>
                                    <p className="text-[10px] text-white/30 uppercase tracking-widest">Talk to your dedicated claims advisor</p>
                                </div>
                            </div>
                            <button className="px-5 py-3 rounded-xl bg-purple-600 text-white text-[9px] font-black uppercase tracking-widest shadow-lg hover:scale-105 active:scale-95 transition-all flex items-center gap-2 self-start sm:self-auto">
                                <MessageSquare className="w-3 h-3" /> Chat Now
                            </button>
                        </div>
                        <div className="px-5 py-4 rounded-xl bg-[#050608] border border-white/5 text-xs text-white/30 tracking-tight">
                            Advisor available: Mon–Sat, 9AM–7PM IST · Avg response &lt; 2 min
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
};

// Extracted sidebar content component
function SidebarContent({ sidebarLinks, activeNav, setActiveNav }: {
    sidebarLinks: { label: string; icon: React.ElementType }[];
    activeNav: string;
    setActiveNav: (l: string) => void;
}) {
    return (
        <>
            <p className="text-[9px] font-black text-white/20 uppercase tracking-[0.3em] mb-6">Navigation</p>
            <nav className="space-y-1 mb-10">
                {sidebarLinks.map(link => (
                    <button
                        key={link.label}
                        onClick={() => setActiveNav(link.label)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-[11px] font-bold uppercase tracking-wider transition-all ${activeNav === link.label
                            ? "bg-purple-600 text-white shadow-lg shadow-purple-600/20"
                            : "text-white/40 hover:text-white hover:bg-white/5"
                            }`}
                    >
                        <link.icon className="w-4 h-4 shrink-0" />
                        {link.label}
                    </button>
                ))}
            </nav>
            <div className="mt-auto pt-6 flex items-center gap-2 px-3 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                <span className="text-[9px] font-black text-emerald-500 uppercase tracking-wide">Family Shield</span>
                <span className="text-[9px] text-white/30 font-bold">Active</span>
            </div>
        </>
    );
}

export default UserDashboard;
