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
    Search,
    Bell,
    Globe,
    Activity,
    LogOut,
    ExternalLink,
    ChevronDown,
    CheckCircle2,
    Zap,
    Clock,
    Database,
    TrendingUp,
    MessageSquare
} from "lucide-react";
import { Link } from "react-router-dom";

const UserDashboard = () => {
    const projects = [
        { name: "Nebula AI", desc: "Batch processing with GPU acceleration", status: "Active", updated: "Updated 3d ago", color: "purple" },
        { name: "Atlas Edge", desc: "Edge caching layer for static assets", status: "Active", updated: "Updated 1d ago", color: "orange" },
        { name: "Mercury API", desc: "Realtime ingestion for fintech partners", status: "Active", updated: "Updated 2h ago", color: "blue" }
    ];

    const sidebarLinks = [
        { label: "Dashboard", icon: LayoutDashboard, active: true, href: "/dashboard" },
        { label: "Projects", icon: Folder, href: "#" },
        { label: "API Keys", icon: Key, href: "#" },
        { label: "Billing", icon: CreditCard, href: "#" },
        { label: "Team", icon: Users, href: "#" },
        { label: "Settings", icon: Settings, href: "#" }
    ];

    return (
        <div className="min-h-screen bg-[#050608] flex font-display text-white overflow-hidden">
            {/* Main Content Area */}
            <div className="flex-1 flex flex-col h-screen overflow-y-auto custom-scrollbar">
                {/* Top Navigation */}
                <header className="sticky top-0 z-30 bg-[#050608]/80 backdrop-blur-xl border-b border-white/5 px-8 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-8">
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                            <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center text-[10px] font-black">YS</div>
                            <button className="flex items-center gap-2 text-xs font-bold text-white/80 hover:text-white">Logout <ChevronDown className="w-3 h-3" /></button>
                        </div>
                        <button className="text-white/40 hover:text-white transition-colors"><Bell className="w-5 h-5" /></button>
                        <button className="text-white/40 hover:text-white transition-colors"><Globe className="w-5 h-5" /></button>
                    </div>

                    <div className="flex items-center gap-10">
                        <div className="relative group">
                            <button className="flex items-center gap-1.5 text-xs font-bold text-white/60 hover:text-white transition-colors py-2">
                                Dashboards <ChevronDown className="w-4 h-4" />
                            </button>
                        </div>
                        <Link to="/about" className="text-xs font-bold text-white/60 hover:text-white">Company</Link>
                        <Link to="/pricing" className="text-xs font-bold text-white/60 hover:text-white">Pricing</Link>
                        <Link to="/solutions" className="text-xs font-bold text-white/60 hover:text-white">Solutions</Link>
                        <Link to="/" className="text-xs font-bold text-white/60 hover:text-white">Home</Link>

                        <Link to="/" className="flex items-center gap-2 group ml-4">
                            <span className="text-xl font-black italic tracking-tighter uppercase leading-none">Orbit<span className="text-purple-500">Scale</span></span>
                            <div className="w-8 h-8 rounded-lg bg-purple-500 flex items-center justify-center text-white shadow-premium">
                                <CheckCircle2 className="w-5 h-5" />
                            </div>
                        </Link>
                    </div>
                </header>

                {/* Dashboard Panels */}
                <main className="p-8 space-y-8 pb-20">
                    {/* Welcome Panel */}
                    <section className="relative p-12 rounded-[3.5rem] bg-gradient-to-br from-[#1a1c24] to-[#0a0c10] border border-white/5 overflow-hidden">
                        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
                            <div>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[9px] font-black text-emerald-500 uppercase tracking-widest mb-6">
                                    Active <span className="text-white/40">●</span> Pro Plan
                                </div>
                                <h1 className="text-4xl md:text-5xl font-black text-white mb-4 italic tracking-tight leading-[0.9]">👋 Welcome back, Riley</h1>
                                <p className="text-white/40 text-sm max-w-md font-medium leading-relaxed">Your workspace is running smoothly. Here's a quick overview of your usage and projects.</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <button className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-xs hover:bg-white/10 transition-all flex items-center gap-2">
                                    Upgrade
                                </button>
                                <button className="px-6 py-3 rounded-xl bg-purple-600 text-white font-bold text-xs shadow-premium hover:scale-105 active:scale-95 transition-all flex items-center gap-2 ring-4 ring-purple-600/20">
                                    <Plus className="w-4 h-4" /> New Project
                                </button>
                            </div>
                        </div>
                        {/* Abstract Glow */}
                        <div className="absolute top-[-20%] right-[-10%] w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full" />
                    </section>

                    {/* Stats Grid */}
                    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { label: "Active Projects", val: "3", icon: Folder, color: "purple" },
                            { label: "Team Members", val: "4", icon: Users, color: "orange", sub: "4/5" },
                            { label: "Storage Used", val: "GB 2.4", icon: Database, color: "emerald", sub: "48%" },
                            { label: "API Requests", val: "24.5k", icon: Zap, color: "blue", sub: "12%+" }
                        ].map((s, i) => (
                            <div key={s.label} className="p-8 rounded-[2rem] bg-[#0a0c10] border border-white/5 relative overflow-hidden group hover:border-white/10 transition-all cursor-default">
                                <div className="flex items-center justify-between mb-8">
                                    <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.2em]">{s.label}</p>
                                    <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-white/10 transition-colors">
                                        <s.icon className="w-4 h-4" />
                                    </div>
                                </div>
                                <div className="flex items-end justify-between">
                                    <p className="text-4xl font-black text-white italic tracking-tighter">{s.val}</p>
                                    {s.sub && (
                                        <p className={`text-[9px] font-black ${s.sub.includes('+') ? 'text-emerald-500' : 'text-white/20'} uppercase tracking-widest`}>
                                            {s.sub}
                                        </p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </section>

                    {/* Middle Row: Usage & Quick Start */}
                    <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        {/* Plan Usage Doughnut */}
                        <div className="lg:col-span-4 p-8 rounded-[3rem] bg-[#0a0c10] border border-white/5 flex flex-col items-center">
                            <h3 className="text-[10px] font-black text-white/40 uppercase tracking-[0.5em] mb-12">Plan Usage</h3>
                            <div className="relative w-48 h-48 mb-8">
                                <svg className="w-full h-full transform -rotate-90">
                                    <circle cx="96" cy="96" r="86" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-white/5" />
                                    <circle cx="96" cy="96" r="86" stroke="currentColor" strokeWidth="12" fill="transparent" strokeDasharray={540} strokeDashoffset={540 * (1 - 0.82)} strokeLinecap="round" className="text-pink-500" />
                                </svg>
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <p className="text-5xl font-black text-white italic tracking-tight leading-none mb-1">82%</p>
                                    <p className="text-[9px] font-black text-white/20 uppercase tracking-widest">of quota</p>
                                </div>
                            </div>
                            <p className="text-[10px] text-white/40 text-center mb-10 max-w-[200px] leading-relaxed italic font-medium">Consider upgrading for unlimited access and premium support matrix.</p>
                            <button className="w-full py-4 rounded-xl bg-purple-600 text-white font-black uppercase tracking-widest text-[9px] shadow-premium hover:scale-[1.02] active:scale-[0.98] transition-all">
                                Upgrade Plan
                            </button>
                        </div>

                        {/* Quick Start Checklist */}
                        <div className="lg:col-span-8 p-12 rounded-[3rem] bg-[#0a0c10] border border-white/5">
                            <div className="flex items-center justify-between mb-12">
                                <div>
                                    <h2 className="text-2xl font-black text-white italic tracking-tight mb-1">Quick Start</h2>
                                    <p className="text-[10px] text-white/40 font-medium uppercase tracking-widest">Complete these steps to get the most out of OrbitScale</p>
                                </div>
                                <div className="px-3 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-[9px] font-black text-purple-500 uppercase tracking-widest">Complete 60%</div>
                            </div>

                            <div className="space-y-4">
                                {[
                                    { title: "Create your first project", detail: "Completed on Jan 2, 2026", done: true },
                                    { title: "Invite your team members", detail: "Collaborate with up to 5 members on Pro", done: false },
                                    { title: "Setup billing", detail: "Completed on Jan 1, 2026", done: true }
                                ].map((step, i) => (
                                    <div key={i} className={`p-6 rounded-[1.5rem] border flex items-center justify-between group transition-all cursor-pointer ${step.done ? 'bg-white/[0.02] border-white/5' : 'bg-[#0a0c10] border-white/10 hover:border-white/20 hover:bg-white/[0.04]'}`}>
                                        <div className="flex items-center gap-6">
                                            {!step.done && <motion.div animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}><ChevronRight className="w-5 h-5 text-purple-500" /></motion.div>}
                                            <div>
                                                <p className={`text-base font-bold italic ${step.done ? 'text-white' : 'text-white/60'}`}>{step.title}</p>
                                                <p className="text-[9px] text-white/20 uppercase font-black mt-1 tracking-widest">{step.detail}</p>
                                            </div>
                                        </div>
                                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center border transition-all ${step.done ? 'bg-emerald-500 border-emerald-500 text-[#0a0c10]' : 'bg-white/5 border-white/10 group-hover:border-white/20 text-white/10'}`}>
                                            <CheckCircle2 className="w-5 h-5" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Your Projects Grid */}
                    <section>
                        <div className="flex items-center justify-between mb-10">
                            <Link to="#" className="text-xs font-bold text-white/40 hover:text-white transition-all flex items-center gap-2 uppercase tracking-widest">
                                View all <TrendingUp className="w-4 h-4" />
                            </Link>
                            <h2 className="text-2xl font-black text-white italic tracking-tight uppercase">Your <span className="text-purple-500">Projects</span></h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {projects.map((p, i) => (
                                <div key={p.name} className="p-8 rounded-[2.5rem] bg-[#0a0c10] border border-white/5 hover:border-white/10 transition-all group relative overflow-hidden cursor-default">
                                    <div className="flex items-center justify-between mb-10">
                                        <div className={`w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:scale-110 transition-transform`}>
                                            <div className={`w-2 h-2 rounded-full bg-${p.color}-500 shadow-[0_0_15px_rgba(139,92,246,0.5)]`} />
                                        </div>
                                        <div className="flex gap-1.5">
                                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                        </div>
                                    </div>
                                    <h4 className="text-xl font-black text-white mb-2 italic tracking-tight leading-none">{p.name}</h4>
                                    <p className="text-[11px] text-white/40 leading-relaxed font-medium mb-12 h-8">{p.desc}</p>

                                    <div className="flex items-center justify-between border-t border-white/5 pt-6">
                                        <button className="text-[10px] font-black text-white uppercase tracking-widest px-4 py-2 rounded-xl bg-purple-600/10 border border-purple-500/20 hover:bg-purple-600 hover:text-white transition-all">Manage</button>
                                        <p className="text-[9px] text-white/20 uppercase tracking-[0.2em] font-black">{p.updated}</p>
                                    </div>
                                </div>
                            ))}

                            <button className="group border-2 border-dashed border-white/5 rounded-[2.5rem] p-8 flex flex-col items-center justify-center gap-6 hover:border-white/20 hover:bg-white/[0.02] transition-all">
                                <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center text-white/20 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all shadow-inner">
                                    <Plus className="w-8 h-8" />
                                </div>
                                <div className="text-center">
                                    <p className="text-base font-black text-white italic leading-none">Create New Project</p>
                                    <p className="text-[9px] text-white/20 uppercase font-black tracking-widest mt-2 px-4">Start from scratch or template</p>
                                </div>
                            </button>
                        </div>
                    </section>

                    {/* Bottom Row: Error Budget & Usage Trend */}
                    <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        {/* Error Budget Panel */}
                        <div className="lg:col-span-5 p-10 rounded-[3rem] bg-[#0a0c10] border border-white/5 relative overflow-hidden">
                            <div className="flex items-center justify-between mb-12">
                                <div>
                                    <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.5em] mb-1">This month</p>
                                    <h3 className="text-2xl font-black text-white italic tracking-tight">Error Budget</h3>
                                </div>
                                <div className="text-right">
                                    <p className="text-[10px] text-white/40 uppercase tracking-widest font-black leading-none mb-1">Incidents</p>
                                    <p className="text-[9px] text-white/20 font-medium">by severity</p>
                                </div>
                            </div>

                            <div className="space-y-6">
                                {[
                                    { level: "Critical", count: 3, color: "rose" },
                                    { level: "High", count: 8, color: "orange" },
                                    { level: "Medium", count: 18, color: "amber" },
                                    { level: "Low", count: 12, color: "blue" }
                                ].map(item => (
                                    <div key={item.level} className="flex items-center justify-between group">
                                        <span className="text-xs font-bold italic text-white/60 uppercase tracking-widest w-20">{item.level}</span>
                                        <div className="flex items-center gap-6 flex-1 mx-4">
                                            <div className="h-1.5 flex-1 bg-white/5 rounded-full overflow-hidden shadow-inner">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${(item.count / 25) * 100}%` }}
                                                    transition={{ duration: 1, ease: "easeOut" }}
                                                    className={`h-full bg-${item.color}-500 shadow-[0_0_10px_rgba(255,255,255,0.1)]`}
                                                />
                                            </div>
                                            <span className="text-sm font-black text-white w-4 text-right">{item.count}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Usage Trend Area Chart */}
                        <div className="lg:col-span-7 p-10 rounded-[3rem] bg-[#0a0c10] border border-white/5">
                            <div className="flex items-center justify-between mb-12">
                                <button className="flex items-center gap-2 outline-none px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-[10px] font-black text-white/60 hover:text-white transition-colors">
                                    Last 14 days <ChevronDown className="w-4 h-4" />
                                </button>
                                <div className="text-right">
                                    <h3 className="text-24 font-black text-white italic tracking-tight leading-none mb-1">Usage Trend</h3>
                                    <p className="text-[10px] text-white/20 uppercase tracking-[0.3em] font-black">API requests over time</p>
                                </div>
                            </div>

                            <div className="h-52 w-full relative group">
                                <svg className="w-full h-full" viewBox="0 0 400 100" preserveAspectRatio="none">
                                    <defs>
                                        <linearGradient id="areaGradient" x1="0" x2="0" y1="0" y2="1">
                                            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.4" />
                                            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
                                        </linearGradient>
                                    </defs>
                                    <path d="M0,80 Q50,85 100,70 T200,60 T300,40 T400,45 L400,100 L0,100 Z" fill="url(#areaGradient)" />
                                    <path d="M0,80 Q50,85 100,70 T200,60 T300,40 T400,45" fill="none" stroke="#8b5cf6" strokeWidth="3" strokeLinecap="round" className="drop-shadow-[0_0_10px_rgba(139,92,246,0.5)]" />

                                    {[0, 50, 100, 150, 200, 250, 300, 350, 400].map((x, i) => {
                                        const y = [80, 85, 70, 75, 60, 65, 40, 50, 45][i];
                                        return (
                                            <circle key={i} cx={x} cy={y} r="3" fill="#8b5cf6" className="cursor-pointer hover:r-5 transition-all" />
                                        );
                                    })}
                                </svg>
                                <div className="absolute inset-0 bg-gradient-to-r from-[#0a0c10] via-transparent to-[#0a0c10] opacity-50 pointer-events-none" />
                            </div>
                        </div>
                    </section>

                    {/* API Key Panel Footer */}
                    <section className="p-8 rounded-[3rem] bg-gradient-to-r from-[#0d0f14] via-[#0a0c10] to-[#0d0f14] border border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="flex items-center gap-8">
                            <div className="w-16 h-16 rounded-[1.5rem] bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-500 shadow-lg">
                                <Key className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-xl font-black text-white italic tracking-tight mb-1 flex items-center gap-3">
                                    API Key <span className="text-white/10 text-[9px] uppercase tracking-[0.5em] font-black">Secure Matrix</span>
                                </h3>
                                <p className="text-[10px] text-white/40 font-medium uppercase tracking-widest">Use this key to authenticate your requests in any env.</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-6 w-full md:w-auto">
                            <div className="flex-1 md:w-80 px-8 py-5 rounded-2xl bg-[#050608] border border-white/5 font-mono text-xs text-white/40 tracking-tighter shadow-inner overflow-hidden whitespace-nowrap">
                                sk_live_orbitscale_8k2n9f2m0k2l4h1j9x0s3d2f1g8h9j1
                            </div>
                            <div className="flex gap-3">
                                <button className="p-4 rounded-2xl bg-purple-600 text-white shadow-premium hover:scale-110 active:scale-95 transition-all ring-4 ring-purple-600/10" title="Copy Key">
                                    <CheckCircle2 className="w-5 h-5" />
                                </button>
                                <button className="p-4 rounded-2xl bg-white/5 border border-white/10 text-white/40 hover:text-white transition-all">
                                    <LogOut className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </section>
                </main>
            </div>

            {/* Right Sidebar - Sticky Navigation */}
            <aside className="hidden lg:flex w-80 h-screen bg-[#050608] border-l border-white/5 flex-col p-10 sticky top-0">
                <div className="flex flex-col h-full">
                    <p className="text-[9px] font-black text-white/20 uppercase tracking-[0.6em] mb-16 text-right leading-none">Management Matrix</p>

                    <nav className="flex-1 space-y-3">
                        {sidebarLinks.map((link) => (
                            <Link
                                key={link.label}
                                to={link.href}
                                className={`flex items-center justify-between px-8 py-5 rounded-[1.8rem] transition-all group ${link.active ? 'bg-white/5 border border-white/10 text-white shadow-premium' : 'text-white/30 hover:text-white hover:bg-white/[0.02]'}`}
                            >
                                <span className="text-[11px] font-black uppercase tracking-[0.2em]">{link.label}</span>
                                <link.icon className={`w-5 h-5 ${link.active ? 'text-white shadow-glow' : 'text-white/10 group-hover:text-white transition-colors'}`} />
                            </Link>
                        ))}
                    </nav>

                    {/* Quick Action Buttons */}
                    <div className="pt-16 border-t border-white/5 space-y-6">
                        <p className="text-[9px] font-black text-white/10 uppercase tracking-[0.5em] text-right mb-6">Quick Actions</p>

                        <button className="w-full flex items-center justify-between group py-2">
                            <span className="text-[11px] font-black text-white/60 uppercase tracking-widest group-hover:text-purple-500 transition-colors">Start New Project</span>
                            <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-purple-600 transition-all">
                                <Plus className="w-4 h-4 text-white" />
                            </div>
                        </button>

                        <button className="w-full flex items-center justify-between group py-2">
                            <span className="text-[11px] font-black text-white/60 uppercase tracking-widest group-hover:text-purple-500 transition-colors">API Documentation</span>
                            <ExternalLink className="w-4 h-4 text-white/20 group-hover:text-white transition-colors" />
                        </button>

                        <button className="w-full flex items-center justify-between group py-2">
                            <span className="text-[11px] font-black text-white/60 uppercase tracking-widest group-hover:text-purple-500 transition-colors">Mission Control</span>
                            <MessageSquare className="w-4 h-4 text-white/20 group-hover:text-white transition-colors" />
                        </button>

                        {/* Status Badge */}
                        <div className="mt-12 flex items-center justify-end gap-3 px-4 py-2 rounded-full bg-emerald-500/5 border border-emerald-500/10 w-fit ml-auto">
                            <span className="text-[8px] font-black text-emerald-500 uppercase tracking-tighter">System Active</span>
                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                        </div>
                    </div>
                </div>
            </aside>
        </div>
    );
};

export default UserDashboard;
