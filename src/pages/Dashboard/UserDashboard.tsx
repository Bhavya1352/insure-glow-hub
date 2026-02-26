import { motion } from "framer-motion";
import {
    LayoutDashboard,
    Folder,
    Key,
    CreditCard,
    Users,
    Settings,
    Plus,
    ChevronRight,
    Bell,
    Activity,
    CheckCircle2,
    Zap,
    Database,
    TrendingUp,
    BookOpen,
    MessageSquare,
    Eye,
    Copy,
    Search,
    Globe
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDirection } from "@/contexts/DirectionContext";

const UserDashboard = () => {
    const [activeNav, setActiveNav] = useState("Dashboard");
    const { direction, toggleDirection } = useDirection();

    const sidebarLinks = [
        { label: "Dashboard", icon: LayoutDashboard },
        { label: "Projects", icon: Folder },
        { label: "API Keys", icon: Key },
        { label: "Billing", icon: CreditCard },
        { label: "Team", icon: Users },
        { label: "Settings", icon: Settings }
    ];

    const quickActions = [
        { label: "New Project", icon: Plus },
        { label: "Documentation", icon: BookOpen },
        { label: "Support", icon: MessageSquare }
    ];

    const projects = [
        { name: "Mercury API", desc: "Realtime ingestion for fintech partners.", updated: "Updated 2h ago", color: "bg-blue-500" },
        { name: "Atlas Edge", desc: "Edge caching layer for static assets.", updated: "Updated 1d ago", color: "bg-orange-500" },
        { name: "Nebula AI", desc: "Batch processing with GPU acceleration.", updated: "Updated 3d ago", color: "bg-purple-500" }
    ];

    const quickStartSteps = [
        { title: "Create your first project", detail: "Completed on Jan 2, 2026", done: true },
        { title: "Invite your team members", detail: "Collaborate with up to 5 members on Pro", done: false },
        { title: "Setup billing", detail: "Completed on Jan 1, 2026", done: true }
    ];

    return (
        <div className="min-h-screen bg-[#050608] flex pt-24 lg:pt-28">
            {/* Left Sidebar */}
            <aside className="hidden lg:flex w-64 flex-col fixed start-0 top-24 bottom-0 bg-[#050608] border-e border-white/5 px-6 py-8 z-20">
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
                            <link.icon className="w-4 h-4" />
                            {link.label}
                        </button>
                    ))}
                </nav>

                <p className="text-[9px] font-black text-white/20 uppercase tracking-[0.3em] mb-6">Quick Actions</p>
                <div className="space-y-1 mb-auto">
                    {quickActions.map(action => (
                        <button
                            key={action.label}
                            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-[11px] font-bold text-white/40 hover:text-white hover:bg-white/5 uppercase tracking-wider transition-all"
                        >
                            <action.icon className="w-4 h-4" />
                            {action.label}
                        </button>
                    ))}
                </div>

                <div className="mt-6 flex items-center gap-2 px-3 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                    <span className="text-[9px] font-black text-emerald-500 uppercase tracking-wide">Pro Plan</span>
                    <span className="text-[9px] text-white/30 font-bold">Active</span>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 lg:ms-64 min-h-screen">
                {/* Top Bar */}
                <header className="sticky top-24 z-30 bg-[#050608]/80 backdrop-blur-xl border-b border-white/5 px-6 lg:px-10 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="relative hidden sm:block">
                            <Search className="absolute start-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                            <input
                                type="text"
                                placeholder="Search..."
                                className="ps-10 pe-4 py-2.5 rounded-xl bg-white/5 border border-white/5 text-xs text-white outline-none focus:border-purple-500/50 w-56 transition-all"
                            />
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <button
                            onClick={toggleDirection}
                            className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-white/40 hover:text-white transition-all"
                            title={direction === "ltr" ? "Switch to RTL" : "Switch to LTR"}
                        >
                            <Globe className="w-4 h-4" />
                        </button>
                        <button className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-white/40 hover:text-white transition-all relative">
                            <Bell className="w-4 h-4" />
                        </button>
                        <button className="text-[10px] font-black text-white/40 uppercase tracking-widest hover:text-white transition-colors">Logout</button>
                        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center text-[10px] font-black text-white">YS</div>
                    </div>
                </header>

                {/* Dashboard Content */}
                <main className="p-6 lg:p-10 space-y-8 pb-20">
                    {/* Welcome Banner */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="relative p-8 lg:p-10 rounded-[2rem] bg-gradient-to-br from-[#1a1c24] to-[#0d0f14] border border-white/5 overflow-hidden"
                    >
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                            <div>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[9px] font-black text-emerald-500 uppercase tracking-widest mb-4">
                                    Pro Plan <span className="text-white/30">●</span> Active
                                </div>
                                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-display font-black text-white italic tracking-tight mb-2">
                                    Welcome back, Riley 👋
                                </h1>
                                <p className="text-white/40 text-sm max-w-md leading-relaxed">
                                    Your workspace is running smoothly. Here's a quick overview of your usage and projects.
                                </p>
                            </div>
                            <div className="flex items-center gap-3">
                                <button className="px-5 py-3 rounded-xl bg-emerald-600 text-white font-bold text-[10px] uppercase tracking-widest shadow-lg shadow-emerald-600/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-2">
                                    <Plus className="w-4 h-4" /> New Project
                                </button>
                                <button className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-[10px] uppercase tracking-widest hover:bg-white/10 transition-all flex items-center gap-2">
                                    <TrendingUp className="w-4 h-4" /> Upgrade
                                </button>
                            </div>
                        </div>
                        <div className="absolute top-[-20%] end-[-10%] w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full" />
                    </motion.section>

                    {/* Stats Cards */}
                    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                        {[
                            { label: "API Requests", val: "24.5k", icon: Zap, change: "+12%", color: "purple" },
                            { label: "Storage Used", val: "2.4 GB", icon: Database, change: "48%", color: "emerald" },
                            { label: "Team Members", val: "4", icon: Users, change: "4/5", color: "orange" },
                            { label: "Projects", val: "3", icon: Folder, change: "Active", color: "blue" }
                        ].map((s, i) => (
                            <motion.div
                                key={s.label}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="p-6 rounded-[1.5rem] bg-[#0a0c10] border border-white/5 hover:border-white/10 transition-all group"
                            >
                                <div className="flex items-center justify-between mb-6">
                                    <div className={`w-10 h-10 rounded-xl bg-${s.color}-500/10 border border-${s.color}-500/20 flex items-center justify-center text-${s.color}-500`}>
                                        <s.icon className="w-5 h-5" />
                                    </div>
                                    <span className="text-[9px] font-black text-emerald-500 uppercase tracking-widest">{s.change}</span>
                                </div>
                                <p className="text-2xl font-black text-white italic tracking-tight mb-1">{s.val}</p>
                                <p className="text-[10px] font-black text-white/20 uppercase tracking-widest">{s.label}</p>
                            </motion.div>
                        ))}
                    </section>

                    {/* Quick Start + Plan Usage */}
                    <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                        {/* Quick Start Checklist */}
                        <div className="lg:col-span-7 p-6 lg:p-8 rounded-[2rem] bg-[#0a0c10] border border-white/5">
                            <div className="flex items-center justify-between mb-8">
                                <div>
                                    <h2 className="text-lg font-black text-white italic tracking-tight">Quick Start</h2>
                                    <p className="text-[10px] text-white/30 uppercase tracking-widest mt-1">Complete these steps to get the most out of OrbitScale</p>
                                </div>
                                <span className="px-3 py-1 rounded-lg bg-purple-500/10 border border-purple-500/20 text-[9px] font-black text-purple-500 uppercase">60% Complete</span>
                            </div>
                            <div className="space-y-3">
                                {quickStartSteps.map((step, i) => (
                                    <div key={i} className={`p-4 lg:p-5 rounded-xl border flex items-center justify-between transition-all ${step.done ? 'bg-white/[0.02] border-white/5' : 'bg-[#0d0f14] border-white/10 hover:border-white/20'}`}>
                                        <div className="flex items-center gap-4">
                                            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step.done ? 'bg-emerald-500 text-white' : 'bg-white/5 border border-white/10 text-white/20'}`}>
                                                <CheckCircle2 className="w-4 h-4" />
                                            </div>
                                            <div>
                                                <p className={`text-sm font-bold ${step.done ? 'text-white' : 'text-white/60'}`}>{step.title}</p>
                                                <p className="text-[9px] text-white/20 uppercase tracking-widest mt-0.5">{step.detail}</p>
                                            </div>
                                        </div>
                                        {!step.done && <ChevronRight className="w-4 h-4 text-purple-500" />}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Plan Usage */}
                        <div className="lg:col-span-5 p-6 lg:p-8 rounded-[2rem] bg-[#0a0c10] border border-white/5 flex flex-col items-center justify-center">
                            <h3 className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em] mb-8 self-start">Plan Usage</h3>
                            <div className="relative w-40 h-40 mb-6">
                                <svg className="w-full h-full transform -rotate-90">
                                    <circle cx="80" cy="80" r="70" stroke="currentColor" strokeWidth="10" fill="transparent" className="text-white/5" />
                                    <circle cx="80" cy="80" r="70" stroke="currentColor" strokeWidth="10" fill="transparent" strokeDasharray={440} strokeDashoffset={440 * (1 - 0.82)} strokeLinecap="round" className="text-pink-500" />
                                </svg>
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <p className="text-4xl font-black text-white italic tracking-tight leading-none">82%</p>
                                    <p className="text-[9px] font-black text-white/20 uppercase tracking-widest mt-1">of quota</p>
                                </div>
                            </div>
                            <p className="text-[10px] text-white/30 text-center mb-6 max-w-[200px] leading-relaxed">Consider upgrading for unlimited access</p>
                            <button className="w-full py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white font-black uppercase tracking-widest text-[9px] shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all">
                                Upgrade Plan
                            </button>
                        </div>
                    </section>

                    {/* Your Projects */}
                    <section>
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <h2 className="text-lg font-black text-white italic tracking-tight">Your Projects</h2>
                                <p className="text-[10px] text-white/30 uppercase tracking-widest mt-1">Manage and monitor your workspaces</p>
                            </div>
                            <button className="text-[10px] font-black text-purple-500 uppercase tracking-widest hover:text-purple-400 transition-colors flex items-center gap-1">
                                View all <TrendingUp className="w-3 h-3" />
                            </button>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                            {/* Create New */}
                            <button className="border-2 border-dashed border-white/5 rounded-[1.5rem] p-6 flex flex-col items-center justify-center gap-4 hover:border-white/20 hover:bg-white/[0.02] transition-all min-h-[180px]">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white/20 hover:bg-purple-600 hover:text-white transition-all">
                                    <Plus className="w-6 h-6" />
                                </div>
                                <div className="text-center">
                                    <p className="text-sm font-black text-white italic">Create New Project</p>
                                    <p className="text-[9px] text-white/20 uppercase tracking-widest mt-1">Start from scratch or template</p>
                                </div>
                            </button>

                            {projects.map(p => (
                                <div key={p.name} className="p-6 rounded-[1.5rem] bg-[#0a0c10] border border-white/5 hover:border-white/10 transition-all group">
                                    <div className="flex items-center justify-between mb-6">
                                        <div className={`w-10 h-10 rounded-xl ${p.color} flex items-center justify-center text-white`}>
                                            <Activity className="w-5 h-5" />
                                        </div>
                                        <div className="w-2 h-2 rounded-full bg-emerald-500" />
                                    </div>
                                    <h4 className="text-base font-black text-white italic tracking-tight mb-1">{p.name}</h4>
                                    <p className="text-[10px] text-white/30 leading-relaxed mb-6">{p.desc}</p>
                                    <div className="flex items-center justify-between border-t border-white/5 pt-4">
                                        <p className="text-[9px] text-white/20 uppercase tracking-widest">{p.updated}</p>
                                        <button className="text-[9px] font-black text-purple-500 uppercase tracking-widest px-3 py-1.5 rounded-lg bg-purple-500/10 border border-purple-500/20 hover:bg-purple-600 hover:text-white transition-all">Manage</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Usage Trend + Error Budget */}
                    <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                        {/* Usage Trend */}
                        <div className="lg:col-span-7 p-6 lg:p-8 rounded-[2rem] bg-[#0a0c10] border border-white/5">
                            <div className="flex items-center justify-between mb-8">
                                <div>
                                    <h3 className="text-base font-black text-white italic tracking-tight">Usage Trend</h3>
                                    <p className="text-[10px] text-white/20 uppercase tracking-widest mt-1">API requests over time</p>
                                </div>
                                <button className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[9px] font-bold text-white/60">Last 14 days</button>
                            </div>
                            <div className="h-44 w-full relative">
                                <svg className="w-full h-full" viewBox="0 0 400 100" preserveAspectRatio="none">
                                    <defs>
                                        <linearGradient id="userAreaGrad" x1="0" x2="0" y1="0" y2="1">
                                            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.3" />
                                            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
                                        </linearGradient>
                                    </defs>
                                    <path d="M0,80 Q50,85 100,70 T200,60 T300,40 T400,45 L400,100 L0,100 Z" fill="url(#userAreaGrad)" />
                                    <path d="M0,80 Q50,85 100,70 T200,60 T300,40 T400,45" fill="none" stroke="#8b5cf6" strokeWidth="2.5" strokeLinecap="round" />
                                </svg>
                            </div>
                        </div>

                        {/* Error Budget */}
                        <div className="lg:col-span-5 p-6 lg:p-8 rounded-[2rem] bg-[#0a0c10] border border-white/5">
                            <div className="flex items-center justify-between mb-8">
                                <div>
                                    <h3 className="text-base font-black text-white italic tracking-tight">Error Budget</h3>
                                    <p className="text-[10px] text-white/20 uppercase tracking-widest mt-1">Incidents by severity</p>
                                </div>
                                <span className="text-[9px] text-white/20 uppercase tracking-widest font-bold">This month</span>
                            </div>
                            <div className="grid grid-cols-4 gap-4 text-center">
                                {[
                                    { level: "Low", count: 12, color: "text-blue-500" },
                                    { level: "Medium", count: 18, color: "text-amber-500" },
                                    { level: "High", count: 8, color: "text-orange-500" },
                                    { level: "Critical", count: 3, color: "text-rose-500" }
                                ].map(item => (
                                    <div key={item.level}>
                                        <p className="text-[9px] font-black text-white/20 uppercase tracking-widest mb-3">{item.level}</p>
                                        <p className={`text-2xl font-black italic ${item.color}`}>{item.count}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* API Key Panel */}
                    <section className="p-6 lg:p-8 rounded-[2rem] bg-[#0a0c10] border border-white/5">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-500">
                                    <Key className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="text-base font-black text-white italic tracking-tight">API Key</h3>
                                    <p className="text-[10px] text-white/30 uppercase tracking-widest">Use this key to authenticate your requests</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <button className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-[9px] font-black text-white uppercase tracking-widest hover:bg-white/10 transition-all flex items-center gap-2">
                                    <Eye className="w-3 h-3" /> Reveal
                                </button>
                                <button className="px-4 py-2.5 rounded-xl bg-purple-600 text-white text-[9px] font-black uppercase tracking-widest shadow-lg hover:scale-105 active:scale-95 transition-all flex items-center gap-2">
                                    <Copy className="w-3 h-3" /> Copy
                                </button>
                            </div>
                        </div>
                        <div className="px-6 py-4 rounded-xl bg-[#050608] border border-white/5 font-mono text-xs text-white/30 tracking-tight overflow-hidden">
                            sk_live_orbitscale_●●●●●●●●●●●●●●●●●●●●●●
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default UserDashboard;
