import { motion, AnimatePresence } from "framer-motion";
import {
    Users,
    ShieldCheck,
    TrendingUp,
    Activity,
    Search,
    Bell,
    Settings,
    Download,
    BarChart3,
    FileText,
    Globe,
    Menu,
    X,
    ArrowUpRight,
    ArrowDownRight,
    CheckCircle2,
    AlertCircle,
    Clock
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDirection } from "@/contexts/DirectionContext";

const AdminDashboard = () => {
    const [activeNav, setActiveNav] = useState("Overview");
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const { direction, toggleDirection } = useDirection();
    const navigate = useNavigate();

    const sidebarLinks = [
        { label: "Overview", icon: BarChart3 },
        { label: "Policyholders", icon: Users },
        { label: "Claims", icon: ShieldCheck },
        { label: "Revenue", icon: TrendingUp },
        { label: "Reports", icon: FileText },
        { label: "Settings", icon: Settings }
    ];

    const stats = [
        { label: "Total Policies", value: "12,480", change: "+8.2%", isPositive: true, icon: ShieldCheck, color: "emerald" },
        { label: "Active Users", value: "9,840", change: "1,204 online", isPositive: true, icon: Users, color: "orange" },
        { label: "Claims Rate", value: "3.2%", change: "-0.6%", isPositive: true, icon: Activity, color: "purple" },
        { label: "Gross Premium", value: "₹18.4Cr", change: "+12.1%", isPositive: true, icon: TrendingUp, color: "blue" }
    ];

    const recentClaims = [
        { name: "Priya Mehta", policy: "Family Health", amount: "₹2.4L", date: "Jan 3, 2026", status: "Settled", statusColor: "text-emerald-500" },
        { name: "Arjun Kapoor", policy: "Motor Comprehensive", amount: "₹45K", date: "Jan 2, 2026", status: "Under Review", statusColor: "text-amber-500" },
        { name: "Neha Sharma", policy: "Star Health", amount: "₹1.1L", date: "Dec 31, 2025", status: "Settled", statusColor: "text-emerald-500" },
        { name: "Rohit Verma", policy: "Home Shield", amount: "₹3.8L", date: "Dec 30, 2025", status: "Pending Docs", statusColor: "text-rose-500" }
    ];

    const openIssues = [
        { title: "3 claims pending KYC documents", severity: "High", time: "4m ago", badge: "New", badgeColor: "bg-rose-500" },
        { title: "HDFC Ergo API latency spike detected", severity: "Medium", time: "22m ago", badge: "Investigating", badgeColor: "bg-amber-500" },
        { title: "Renewal reminders queue delayed", severity: "Low", time: "1h ago", badge: "Open", badgeColor: "bg-white/10" },
        { title: "Duplicate Aadhaar detected for 2 policies", severity: "Low", time: "2h ago", badge: "Review", badgeColor: "bg-white/10" }
    ];

    return (
        <div className="min-h-screen bg-[#050608] flex pt-16 lg:pt-24">

            {/* Mobile Overlay */}
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

            {/* Mobile Sidebar Drawer */}
            <AnimatePresence>
                {sidebarOpen && (
                    <motion.aside
                        initial={{ x: -280 }}
                        animate={{ x: 0 }}
                        exit={{ x: -280 }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed start-0 top-0 bottom-0 w-72 bg-[#070810] border-e border-white/5 px-6 py-8 z-50 flex flex-col lg:hidden"
                    >
                        <div className="flex items-center justify-between mb-8">
                            <span className="text-white font-black text-lg">Admin Panel</span>
                            <button onClick={() => setSidebarOpen(false)} className="p-2 rounded-xl bg-white/5 text-white/40 hover:text-white">
                                <X className="w-4 h-4" />
                            </button>
                        </div>
                        <AdminSidebarContent sidebarLinks={sidebarLinks} activeNav={activeNav} setActiveNav={(l) => { setActiveNav(l); setSidebarOpen(false); }} />
                    </motion.aside>
                )}
            </AnimatePresence>

            {/* Desktop Sidebar */}
            <aside className="hidden lg:flex w-64 flex-col fixed start-0 top-24 bottom-0 bg-[#050608] border-e border-white/5 px-6 py-8 z-20">
                <AdminSidebarContent sidebarLinks={sidebarLinks} activeNav={activeNav} setActiveNav={setActiveNav} />
            </aside>

            {/* Main Content */}
            <div className="flex-1 lg:ms-64 min-h-screen w-full">
                {/* Top Bar */}
                <header className="sticky top-16 lg:top-24 z-30 bg-[#050608]/90 backdrop-blur-xl border-b border-white/5 px-4 lg:px-10 py-3 lg:py-4 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
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
                        >
                            <Globe className="w-4 h-4" />
                        </button>
                        <button className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-white/40 hover:text-white transition-all relative">
                            <Bell className="w-4 h-4" />
                            <span className="absolute top-1.5 end-1.5 w-1.5 h-1.5 bg-rose-500 rounded-full" />
                        </button>
                        <button onClick={() => navigate('/login')} className="text-[10px] font-black text-white/40 uppercase tracking-widest hover:text-red-400 transition-colors hidden sm:block">Logout</button>
                        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-rose-500 to-orange-500 flex items-center justify-center text-[10px] font-black text-white shrink-0">AD</div>
                    </div>
                </header>

                {/* Admin Content */}
                <main className="p-4 lg:p-10 space-y-6 lg:space-y-8 pb-20">
                    {/* Admin Banner */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="relative p-6 lg:p-10 rounded-[1.5rem] lg:rounded-[2rem] bg-gradient-to-br from-[#1a1c24] to-[#0d0f14] border border-white/5 overflow-hidden"
                    >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
                            <div>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-[9px] font-black text-rose-400 uppercase tracking-widest mb-3">
                                    Admin Panel <span className="text-white/30">●</span> IRDAI Certified
                                </div>
                                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-display font-black text-white italic tracking-tight mb-2">
                                    Good morning, Admin 👑
                                </h1>
                                <p className="text-white/40 text-sm max-w-md leading-relaxed">
                                    4 claims need your attention today. Platform performance is nominal.
                                </p>
                            </div>
                            <div className="flex items-center gap-3 shrink-0">
                                <button className="px-4 lg:px-5 py-3 rounded-xl bg-rose-600 text-white font-bold text-[10px] uppercase tracking-widest shadow-lg hover:scale-105 active:scale-95 transition-all flex items-center gap-2">
                                    <ShieldCheck className="w-4 h-4" /> Review Claims
                                </button>
                                <button className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-[10px] uppercase tracking-widest hover:bg-white/10 transition-all flex items-center gap-2 hidden sm:flex">
                                    <Download className="w-4 h-4" /> Export
                                </button>
                            </div>
                        </div>
                        <div className="absolute top-[-20%] end-[-10%] w-96 h-96 bg-rose-500/5 blur-[120px] rounded-full" />
                    </motion.section>

                    {/* Stats Grid */}
                    <section className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6">
                        {stats.map((s, i) => (
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
                                    <span className={`text-[9px] font-black uppercase tracking-widest flex items-center gap-1 ${s.isPositive ? 'text-emerald-500' : 'text-rose-500'}`}>
                                        {s.isPositive ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                                        {s.change}
                                    </span>
                                </div>
                                <p className="text-xl lg:text-2xl font-black text-white italic tracking-tight mb-1">{s.value}</p>
                                <p className="text-[10px] font-black text-white/20 uppercase tracking-widest">{s.label}</p>
                            </motion.div>
                        ))}
                    </section>

                    {/* Claims Table + Issues */}
                    <section className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
                        {/* Recent Claims */}
                        <div className="lg:col-span-7 p-5 lg:p-8 rounded-[1.5rem] lg:rounded-[2rem] bg-[#0a0c10] border border-white/5">
                            <div className="flex items-center justify-between mb-6">
                                <div>
                                    <h2 className="text-base lg:text-lg font-black text-white italic">Recent Claims</h2>
                                    <p className="text-[10px] text-white/30 uppercase tracking-widest mt-1">Latest submissions</p>
                                </div>
                                <button className="text-[9px] font-black text-purple-500 uppercase tracking-widest hover:text-purple-400">View All</button>
                            </div>
                            <div className="space-y-3">
                                {recentClaims.map((c, i) => (
                                    <div key={i} className="flex items-center justify-between p-3 lg:p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all gap-3">
                                        <div className="flex items-center gap-3 min-w-0">
                                            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white font-black text-[11px] shrink-0">
                                                {c.name[0]}
                                            </div>
                                            <div className="min-w-0">
                                                <p className="text-sm font-bold text-white truncate">{c.name}</p>
                                                <p className="text-[9px] text-white/30 uppercase tracking-widest truncate">{c.policy}</p>
                                            </div>
                                        </div>
                                        <div className="text-end shrink-0">
                                            <p className="text-sm font-black text-white italic">{c.amount}</p>
                                            <p className={`text-[9px] font-black uppercase tracking-widest ${c.statusColor}`}>{c.status}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Open Issues */}
                        <div className="lg:col-span-5 p-5 lg:p-8 rounded-[1.5rem] lg:rounded-[2rem] bg-[#0a0c10] border border-white/5">
                            <div className="flex items-center justify-between mb-6">
                                <div>
                                    <h2 className="text-base font-black text-white italic">Open Issues</h2>
                                    <p className="text-[10px] text-white/30 uppercase tracking-widest mt-1">Needs attention</p>
                                </div>
                                <span className="px-2.5 py-1 rounded-lg bg-rose-500/10 border border-rose-500/20 text-[9px] font-black text-rose-400 uppercase">{openIssues.length} Open</span>
                            </div>
                            <div className="space-y-3">
                                {openIssues.map((issue, i) => (
                                    <div key={i} className="p-3 lg:p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all">
                                        <div className="flex items-start justify-between gap-3">
                                            <p className="text-xs font-bold text-white leading-relaxed">{issue.title}</p>
                                            <span className={`px-2 py-0.5 rounded-md text-[9px] font-black text-white uppercase shrink-0 ${issue.badgeColor}`}>{issue.badge}</span>
                                        </div>
                                        <div className="flex items-center gap-3 mt-2">
                                            <span className={`text-[9px] font-black uppercase tracking-widest ${issue.severity === 'High' ? 'text-rose-500' : issue.severity === 'Medium' ? 'text-amber-500' : 'text-white/30'}`}>{issue.severity}</span>
                                            <span className="text-[9px] text-white/20">{issue.time}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Revenue Chart + Claims by Type */}
                    <section className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
                        <div className="lg:col-span-7 p-5 lg:p-8 rounded-[1.5rem] lg:rounded-[2rem] bg-[#0a0c10] border border-white/5">
                            <div className="flex items-center justify-between mb-6 lg:mb-8">
                                <div>
                                    <h3 className="text-base font-black text-white italic">Premium Revenue</h3>
                                    <p className="text-[10px] text-white/20 uppercase tracking-widest mt-1">Gross Written Premium, monthly</p>
                                </div>
                                <button className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[9px] font-bold text-white/60">2026</button>
                            </div>
                            <div className="h-36 lg:h-44 w-full">
                                <svg className="w-full h-full" viewBox="0 0 400 100" preserveAspectRatio="none">
                                    <defs>
                                        <linearGradient id="adminAreaGrad" x1="0" x2="0" y1="0" y2="1">
                                            <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.25" />
                                            <stop offset="100%" stopColor="#f43f5e" stopOpacity="0" />
                                        </linearGradient>
                                    </defs>
                                    <path d="M0,85 Q50,80 100,65 T200,55 T300,35 T400,30 L400,100 L0,100 Z" fill="url(#adminAreaGrad)" />
                                    <path d="M0,85 Q50,80 100,65 T200,55 T300,35 T400,30" fill="none" stroke="#f43f5e" strokeWidth="2.5" strokeLinecap="round" />
                                </svg>
                            </div>
                        </div>

                        <div className="lg:col-span-5 p-5 lg:p-8 rounded-[1.5rem] lg:rounded-[2rem] bg-[#0a0c10] border border-white/5">
                            <h3 className="text-base font-black text-white italic mb-2">Claims by Type</h3>
                            <p className="text-[10px] text-white/20 uppercase tracking-widest mb-6">This quarter</p>
                            <div className="space-y-4">
                                {[
                                    { type: "Health", count: 284, pct: 72, color: "bg-emerald-500" },
                                    { type: "Motor", count: 91, pct: 23, color: "bg-blue-500" },
                                    { type: "Home / Property", count: 19, pct: 5, color: "bg-orange-500" }
                                ].map(item => (
                                    <div key={item.type}>
                                        <div className="flex justify-between text-xs mb-2">
                                            <span className="font-bold text-white">{item.type}</span>
                                            <span className="text-white/40">{item.count} claims · {item.pct}%</span>
                                        </div>
                                        <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${item.pct}%` }}
                                                transition={{ duration: 1 }}
                                                className={`h-full ${item.color} rounded-full`}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="grid grid-cols-3 gap-3 mt-6">
                                {[
                                    { label: "Settled", val: "92%", icon: CheckCircle2, color: "text-emerald-500" },
                                    { label: "Pending", val: "6%", icon: Clock, color: "text-amber-500" },
                                    { label: "Rejected", val: "2%", icon: AlertCircle, color: "text-rose-500" }
                                ].map(r => (
                                    <div key={r.label} className="text-center p-3 rounded-xl bg-white/[0.02] border border-white/5">
                                        <r.icon className={`w-4 h-4 mx-auto mb-2 ${r.color}`} />
                                        <p className={`text-base font-black italic ${r.color}`}>{r.val}</p>
                                        <p className="text-[9px] text-white/20 uppercase tracking-widest mt-1">{r.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
};

function AdminSidebarContent({ sidebarLinks, activeNav, setActiveNav }: {
    sidebarLinks: { label: string; icon: React.ElementType }[];
    activeNav: string;
    setActiveNav: (l: string) => void;
}) {
    return (
        <>
            <p className="text-[9px] font-black text-white/20 uppercase tracking-[0.3em] mb-6">Admin Navigation</p>
            <nav className="space-y-1 flex-1">
                {sidebarLinks.map(link => (
                    <button
                        key={link.label}
                        onClick={() => setActiveNav(link.label)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-[11px] font-bold uppercase tracking-wider transition-all ${activeNav === link.label
                            ? "bg-rose-600 text-white shadow-lg shadow-rose-600/20"
                            : "text-white/40 hover:text-white hover:bg-white/5"
                            }`}
                    >
                        <link.icon className="w-4 h-4 shrink-0" />
                        {link.label}
                    </button>
                ))}
            </nav>
            <div className="mt-6 flex items-center gap-2 px-3 py-2 rounded-lg bg-rose-500/10 border border-rose-500/20">
                <span className="text-[9px] font-black text-rose-400 uppercase tracking-wide">Admin</span>
                <span className="text-[9px] text-white/30 font-bold">IRDAI Certified</span>
            </div>
        </>
    );
}

export default AdminDashboard;
