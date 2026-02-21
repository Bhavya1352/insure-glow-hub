import { motion } from "framer-motion";
import {
    Users,
    ShieldCheck,
    TrendingUp,
    Activity,
    Search,
    Bell,
    Settings,
    ArrowUpRight,
    ArrowDownRight,
    MoreVertical,
    Calendar,
    Download,
    BarChart3,
    Heart,
    Eye,
    Plus,
    FileText,
    Terminal
} from "lucide-react";
import { useState } from "react";

const AdminDashboard = () => {
    const [activeNav, setActiveNav] = useState("Overview");

    const sidebarLinks = [
        { label: "Overview", icon: BarChart3 },
        { label: "Users", icon: Users },
        { label: "Revenue", icon: TrendingUp },
        { label: "System Health", icon: Activity },
        { label: "Settings", icon: Settings }
    ];

    const quickActions = [
        { label: "Add User", icon: Plus },
        { label: "Export Data", icon: Download },
        { label: "View Logs", icon: Terminal }
    ];

    const stats = [
        { label: "Total Revenue", value: "$1.8M", change: "+8.2%", isPositive: true, icon: TrendingUp, color: "emerald" },
        { label: "Active Users", value: "48.3k", change: "1,204 live", isPositive: true, icon: Users, color: "orange" },
        { label: "Churn Rate", value: "2.4%", change: "-0.6%", isPositive: true, icon: Activity, color: "purple" },
        { label: "Server Load", value: "72%", change: "54% avg", isPositive: true, icon: ShieldCheck, color: "blue" }
    ];

    const recentSignups = [
        { name: "Amelia Stone", email: "amelia@north.io", plan: "Pro", planColor: "bg-purple-500", date: "Jan 3, 2026", status: "Active", statusColor: "text-emerald-500" },
        { name: "Khalid Rahman", email: "k.rahman@aurora.dev", plan: "Free", planColor: "bg-gray-500", date: "Jan 2, 2026", status: "Trial", statusColor: "text-amber-500" },
        { name: "Sofia Lima", email: "sofia.l@mercury.io", plan: "Pro", planColor: "bg-purple-500", date: "Dec 31, 2025", status: "Active", statusColor: "text-emerald-500" },
        { name: "Diego Martins", email: "d.martins@echo.app", plan: "Free", planColor: "bg-gray-500", date: "Dec 30, 2025", status: "Trial", statusColor: "text-amber-500" }
    ];

    const supportTickets = [
        { title: "Payments failing on EU region", severity: "High", time: "4m ago", badge: "New", badgeColor: "bg-rose-500" },
        { title: "SSO redirect loop", severity: "Medium", time: "22m ago", badge: "Investigating", badgeColor: "bg-amber-500" },
        { title: "Webhook retries spiking", severity: "Low", time: "1h ago", badge: "Open", badgeColor: "bg-white/10" },
        { title: "Org invite limits", severity: "Low", time: "2h ago", badge: "Open", badgeColor: "bg-white/10" }
    ];

    return (
        <div className="min-h-screen bg-[#050608] flex pt-24 lg:pt-28">
            {/* Left Sidebar */}
            <aside className="hidden lg:flex w-64 flex-col fixed left-0 top-24 bottom-0 bg-[#050608] border-r border-white/5 px-6 py-8 z-20">
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

                <div className="mt-6 text-[9px] text-white/10 uppercase tracking-widest font-bold">
                    Admin Panel v1.7.2
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 lg:ml-64 min-h-screen">
                {/* Top Bar */}
                <header className="sticky top-24 z-30 bg-[#050608]/80 backdrop-blur-xl border-b border-white/5 px-6 lg:px-10 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="relative hidden sm:block">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                            <input
                                type="text"
                                placeholder="Search policies or claims..."
                                className="pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/5 text-xs text-white outline-none focus:border-purple-500/50 w-64 transition-all"
                            />
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-white/40 hover:text-white transition-all relative">
                            <Bell className="w-4 h-4" />
                            <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-rose-500" />
                        </button>
                        <button className="text-[10px] font-black text-white/40 uppercase tracking-widest hover:text-white transition-colors">Logout</button>
                        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-rose-500 to-purple-500 flex items-center justify-center text-[10px] font-black text-white">AD</div>
                    </div>
                </header>

                {/* Dashboard Content */}
                <main className="p-6 lg:p-10 space-y-8 pb-20">
                    {/* Welcome Banner */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="relative p-8 lg:p-10 rounded-[2rem] bg-gradient-to-br from-[#1a1020] to-[#0d0f14] border border-white/5 overflow-hidden"
                    >
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                            <div>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-[9px] font-black text-rose-500 uppercase tracking-widest mb-4">
                                    Admin Access <span className="text-white/30">●</span> Orbital Command
                                </div>
                                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-display font-black text-white italic tracking-tight mb-2">
                                    Welcome, Administrator 🛡
                                </h1>
                                <p className="text-white/40 text-sm max-w-md leading-relaxed">
                                    Monitor platform health, manage users, and track revenue from your command center.
                                </p>
                            </div>
                            <div className="flex items-center gap-3">
                                <button className="px-5 py-3 rounded-xl bg-rose-600 text-white font-bold text-[10px] uppercase tracking-widest shadow-lg shadow-rose-600/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-2">
                                    <Plus className="w-4 h-4" /> Add User
                                </button>
                                <button className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-[10px] uppercase tracking-widest hover:bg-white/10 transition-all flex items-center gap-2">
                                    <Download className="w-4 h-4" /> Export Data
                                </button>
                            </div>
                        </div>
                        <div className="absolute top-[-20%] right-[-10%] w-96 h-96 bg-rose-500/10 blur-[120px] rounded-full" />
                    </motion.section>

                    {/* Stats Cards */}
                    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                        {stats.map((s, i) => (
                            <motion.div
                                key={s.label}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="p-6 rounded-[1.5rem] bg-[#0a0c10] border border-white/5 hover:border-white/10 transition-all group relative overflow-hidden"
                            >
                                <div className="flex items-center justify-between mb-6">
                                    <div className={`w-10 h-10 rounded-xl bg-${s.color}-500/10 border border-${s.color}-500/20 flex items-center justify-center text-${s.color}-500`}>
                                        <s.icon className="w-5 h-5" />
                                    </div>
                                    <div className={`flex items-center gap-1 text-[9px] font-black uppercase tracking-widest ${s.isPositive ? 'text-emerald-500' : 'text-rose-500'}`}>
                                        {s.isPositive ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                                        {s.change}
                                    </div>
                                </div>
                                <p className="text-2xl font-black text-white italic tracking-tight mb-1">{s.value}</p>
                                <p className="text-[10px] font-black text-white/20 uppercase tracking-widest">{s.label}</p>
                                <div className={`absolute bottom-[-10%] right-[-10%] w-20 h-20 bg-${s.color}-500/5 blur-[30px] rounded-full`} />
                            </motion.div>
                        ))}
                    </section>

                    {/* Revenue Chart + Support Queue */}
                    <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                        {/* Revenue Growth */}
                        <div className="lg:col-span-7 p-6 lg:p-8 rounded-[2rem] bg-[#0a0c10] border border-white/5">
                            <div className="flex items-center justify-between mb-8">
                                <div>
                                    <h3 className="text-base font-black text-white italic tracking-tight">Revenue Growth</h3>
                                    <p className="text-[10px] text-white/20 uppercase tracking-widest mt-1">ARR & MRR trajectory</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-emerald-500" />
                                        <span className="text-[9px] text-white/30 font-bold">ARR</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-purple-500" />
                                        <span className="text-[9px] text-white/30 font-bold">MRR</span>
                                    </div>
                                </div>
                            </div>
                            <div className="h-56 w-full relative">
                                {/* Y-axis labels */}
                                <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-[8px] text-white/15 font-bold pr-2">
                                    <span>$1500k</span>
                                    <span>$1000k</span>
                                    <span>$500k</span>
                                    <span>$0k</span>
                                </div>
                                <svg className="w-full h-full pl-12" viewBox="0 0 400 120" preserveAspectRatio="none">
                                    <defs>
                                        <linearGradient id="adminAreaGrad" x1="0" x2="0" y1="0" y2="1">
                                            <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
                                            <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                                        </linearGradient>
                                    </defs>
                                    <path d="M0,100 Q60,95 120,80 T240,50 T360,25 L400,20 L400,120 L0,120 Z" fill="url(#adminAreaGrad)" />
                                    <path d="M0,100 Q60,95 120,80 T240,50 T360,25 L400,20" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" />
                                    <path d="M0,110 Q60,105 120,95 T240,80 T360,60 L400,55" fill="none" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeDasharray="5,5" />
                                </svg>
                            </div>
                            {/* X-axis */}
                            <div className="flex justify-between mt-2 px-12 text-[8px] text-white/15 font-bold">
                                {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map(m => (
                                    <span key={m}>{m}</span>
                                ))}
                            </div>
                        </div>

                        {/* Support Queue */}
                        <div className="lg:col-span-5 p-6 lg:p-8 rounded-[2rem] bg-[#0a0c10] border border-white/5">
                            <div className="flex items-center justify-between mb-6">
                                <div>
                                    <h3 className="text-base font-black text-white italic tracking-tight">Support Queue</h3>
                                    <p className="text-[10px] text-white/20 uppercase tracking-widest mt-1">Recent tickets</p>
                                </div>
                                <button className="text-[9px] font-black text-purple-500 uppercase tracking-widest">View all</button>
                            </div>
                            <div className="space-y-3">
                                {supportTickets.map((ticket, i) => (
                                    <div key={i} className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all">
                                        <div className="flex items-center justify-between mb-1">
                                            <p className="text-xs font-bold text-white">{ticket.title}</p>
                                            <span className={`text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded-md ${ticket.badgeColor} ${ticket.badgeColor === 'bg-rose-500' ? 'text-white' : ticket.badgeColor === 'bg-amber-500' ? 'text-black' : 'text-white/60'}`}>{ticket.badge}</span>
                                        </div>
                                        <p className="text-[9px] text-white/30"><span className={`${ticket.severity === 'High' ? 'text-rose-500' : ticket.severity === 'Medium' ? 'text-amber-500' : 'text-blue-500'} font-bold`}>{ticket.severity}</span> • {ticket.time}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Recent Signups Table */}
                    <section className="p-6 lg:p-8 rounded-[2rem] bg-[#0a0c10] border border-white/5">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                            <div>
                                <h3 className="text-base font-black text-white italic tracking-tight">Recent Signups</h3>
                                <p className="text-[10px] text-white/20 uppercase tracking-widest mt-1">User management table</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3 h-3 text-white/20" />
                                    <input type="text" placeholder="Search..." className="pl-8 pr-4 py-2 rounded-lg bg-white/5 border border-white/5 text-[10px] text-white outline-none w-40" />
                                </div>
                                <button className="px-4 py-2 rounded-lg bg-rose-600 text-white text-[9px] font-black uppercase tracking-widest flex items-center gap-2 hover:scale-105 active:scale-95 transition-all">
                                    <Download className="w-3 h-3" /> Export
                                </button>
                            </div>
                        </div>

                        {/* Table */}
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="border-b border-white/5">
                                        <th className="text-[9px] font-black text-white/20 uppercase tracking-widest pb-4 pr-4">User</th>
                                        <th className="text-[9px] font-black text-white/20 uppercase tracking-widest pb-4 pr-4 hidden sm:table-cell">Email</th>
                                        <th className="text-[9px] font-black text-white/20 uppercase tracking-widest pb-4 pr-4">Plan</th>
                                        <th className="text-[9px] font-black text-white/20 uppercase tracking-widest pb-4 pr-4 hidden md:table-cell">Signup</th>
                                        <th className="text-[9px] font-black text-white/20 uppercase tracking-widest pb-4 pr-4">Status</th>
                                        <th className="text-[9px] font-black text-white/20 uppercase tracking-widest pb-4">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {recentSignups.map((user, i) => (
                                        <tr key={i} className="border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-all">
                                            <td className="py-4 pr-4">
                                                <div className="flex items-center gap-3">
                                                    <div className={`w-8 h-8 rounded-full ${i === 0 ? 'bg-emerald-500' : i === 1 ? 'bg-rose-500' : i === 2 ? 'bg-purple-500' : 'bg-orange-500'} flex items-center justify-center text-[9px] font-black text-white`}>
                                                        {user.name.split(' ').map(n => n[0]).join('')}
                                                    </div>
                                                    <span className="text-xs font-bold text-white">{user.name}</span>
                                                </div>
                                            </td>
                                            <td className="py-4 pr-4 text-[10px] text-white/30 hidden sm:table-cell">{user.email}</td>
                                            <td className="py-4 pr-4">
                                                <span className={`text-[8px] font-black text-white uppercase px-2 py-1 rounded-md ${user.planColor}`}>{user.plan}</span>
                                            </td>
                                            <td className="py-4 pr-4 text-[10px] text-white/30 hidden md:table-cell">{user.date}</td>
                                            <td className="py-4 pr-4">
                                                <span className={`text-[10px] font-bold ${user.statusColor}`}>● {user.status}</span>
                                            </td>
                                            <td className="py-4">
                                                <div className="flex items-center gap-2">
                                                    <button className="text-[9px] font-bold text-white/40 hover:text-white transition-colors">Edit</button>
                                                    <button className="text-[9px] font-bold text-rose-500 hover:text-rose-400 transition-colors">Suspend</button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/5">
                            <p className="text-[9px] text-white/20 uppercase tracking-widest">Showing 1-4 of 48 users</p>
                            <div className="flex items-center gap-2">
                                <button className="text-[9px] text-white/20 font-bold px-2 py-1 hover:text-white transition-colors">Prev</button>
                                <button className="w-7 h-7 rounded-lg bg-purple-600 text-white text-[9px] font-black flex items-center justify-center">1</button>
                                <button className="w-7 h-7 rounded-lg bg-white/5 text-white/30 text-[9px] font-bold flex items-center justify-center hover:text-white">2</button>
                                <button className="w-7 h-7 rounded-lg bg-white/5 text-white/30 text-[9px] font-bold flex items-center justify-center hover:text-white">3</button>
                                <button className="text-[9px] text-white/20 font-bold px-2 py-1 hover:text-white transition-colors">Next</button>
                            </div>
                        </div>
                    </section>

                    {/* System Status + Quick Actions + Activity Log */}
                    <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* System Status */}
                        <div className="p-6 rounded-[2rem] bg-[#0a0c10] border border-white/5">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-sm font-black text-white italic tracking-tight">System Status</h3>
                                <span className="text-[8px] font-black text-emerald-500 uppercase tracking-widest px-2 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20">All Operational</span>
                            </div>
                            <div className="space-y-4">
                                {[
                                    { name: "API Gateway", uptime: "99.99%", ok: true },
                                    { name: "Database", uptime: "99.97%", ok: true },
                                    { name: "CDN Network", uptime: "100%", ok: true },
                                    { name: "Background Jobs", uptime: "Degraded", ok: false }
                                ].map(s => (
                                    <div key={s.name} className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className={`w-2 h-2 rounded-full ${s.ok ? 'bg-emerald-500' : 'bg-amber-500'}`} />
                                            <span className="text-[10px] font-bold text-white/60">{s.name}</span>
                                        </div>
                                        <span className={`text-[9px] font-black ${s.ok ? 'text-white/30' : 'text-amber-500'} uppercase tracking-widest`}>{s.uptime}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Quick Actions Grid */}
                        <div className="p-6 rounded-[2rem] bg-[#0a0c10] border border-white/5">
                            <h3 className="text-sm font-black text-white italic tracking-tight mb-6">Quick Actions</h3>
                            <div className="grid grid-cols-2 gap-3">
                                {[
                                    { label: "Add User", icon: Plus },
                                    { label: "Reports", icon: FileText },
                                    { label: "Settings", icon: Settings },
                                    { label: "Support", icon: Heart }
                                ].map(a => (
                                    <button key={a.label} className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-white/10 transition-all flex flex-col items-center gap-2">
                                        <a.icon className="w-5 h-5 text-white/30" />
                                        <span className="text-[9px] font-black text-white/40 uppercase tracking-widest">{a.label}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Activity Log */}
                        <div className="p-6 rounded-[2rem] bg-[#0a0c10] border border-white/5">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-sm font-black text-white italic tracking-tight">Activity Log</h3>
                                <button className="text-[9px] font-black text-purple-500 uppercase tracking-widest">View all</button>
                            </div>
                            <div className="space-y-4">
                                {[
                                    { text: "New user signup", detail: "Amelia Stone • 4m ago", icon: Users, color: "text-purple-500" },
                                    { text: "Plan upgraded to Pro", detail: "Sofia Lima • 22m ago", icon: TrendingUp, color: "text-emerald-500" },
                                    { text: "Server alert triggered", detail: "System • 1h ago", icon: Activity, color: "text-amber-500" }
                                ].map((log, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <div className={`w-8 h-8 rounded-full bg-white/5 flex items-center justify-center ${log.color} flex-shrink-0 mt-0.5`}>
                                            <log.icon className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-white">{log.text}</p>
                                            <p className="text-[9px] text-white/20 mt-0.5">{log.detail}</p>
                                        </div>
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

export default AdminDashboard;
