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
    Filter,
    Download
} from "lucide-react";

const AdminDashboard = () => {
    const stats = [
        { label: "Active Policies", value: "48,290", change: "+12.5%", isPositive: true, icon: ShieldCheck, color: "blue" },
        { label: "Total Claims", value: "1,204", change: "-3.2%", isPositive: false, icon: Activity, color: "rose" },
        { label: "Revenue Growth", value: "₹4.2Cr", change: "+18.4%", isPositive: true, icon: TrendingUp, color: "emerald" },
        { label: "Active Advocates", value: "852", change: "+5.1%", isPositive: true, icon: Users, color: "purple" }
    ];

    const recentClaims = [
        { id: "CLM-9021", user: "Rahul Sharma", policy: "Family Elite", amount: "₹18,40,000", status: "Approved", date: "2 Hours ago" },
        { id: "CLM-9022", user: "Priya Patel", policy: "Health Core", amount: "₹1,20,000", status: "Pending", date: "5 Hours ago" },
        { id: "CLM-9023", user: "Amit Singh", policy: "Wealth Shield", amount: "₹5,60,000", status: "Processing", date: "1 Day ago" },
        { id: "CLM-9024", user: "Sonia Verma", policy: "Family Elite", amount: "₹2,10,000", status: "Approved", date: "2 Days ago" }
    ];

    return (
        <div className="min-h-screen bg-[#050608] pt-24 pb-12 px-6 lg:px-12">
            <div className="max-w-[1600px] mx-auto">
                {/* Header Area */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                    <div>
                        <h1 className="text-3xl font-display font-black text-white italic tracking-tight uppercase">Admin <span className="text-gradient-purple">Overview</span></h1>
                        <p className="text-xs text-muted-foreground uppercase tracking-widest font-black mt-2">Real-time system health and claim advocacy metrics.</p>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="relative group hidden sm:block">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-focus-within:text-purple-500 transition-colors" />
                            <input
                                type="text"
                                placeholder="Search policies or claims..."
                                className="pl-12 pr-6 py-3 rounded-xl bg-white/5 border border-white/5 focus:border-purple-500/50 outline-none text-xs text-white w-64 transition-all"
                            />
                        </div>
                        <button className="p-3 rounded-xl bg-white/5 border border-white/5 text-white hover:bg-white/10 transition-all relative">
                            <Bell className="w-5 h-5" />
                            <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-rose-500 border-2 border-[#050608]" />
                        </button>
                        <button className="flex items-center gap-3 pl-2 pr-4 py-2 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-[10px] font-black text-white italic">AD</div>
                            <div className="text-left hidden lg:block">
                                <p className="text-[10px] font-black text-white uppercase tracking-tight">Admin User</p>
                                <p className="text-[9px] text-white/40 uppercase">Global Ops</p>
                            </div>
                        </button>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="p-6 rounded-[2rem] bg-[#0a0c10] border border-white/5 relative overflow-hidden group hover:border-white/10 transition-all"
                        >
                            <div className="flex items-start justify-between mb-6">
                                <div className={`w-12 h-12 rounded-2xl bg-${stat.color}-500/10 border border-${stat.color}-500/20 flex items-center justify-center text-${stat.color}-500 transition-transform group-hover:scale-110`}>
                                    <stat.icon className="w-6 h-6" />
                                </div>
                                <div className={`flex items-center gap-1 px-2 py-1 rounded-md text-[9px] font-black uppercase tracking-widest ${stat.isPositive ? 'bg-emerald-500/10 text-emerald-500' : 'bg-rose-500/10 text-rose-500'}`}>
                                    {stat.isPositive ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                                    {stat.change}
                                </div>
                            </div>
                            <div>
                                <p className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-1 italic">{stat.label}</p>
                                <p className="text-2xl font-display font-black text-white tracking-tight">{stat.value}</p>
                            </div>
                            {/* Decorative Background Element */}
                            <div className={`absolute bottom-[-10%] right-[-10%] w-24 h-24 bg-${stat.color}-500/5 blur-[40px] rounded-full`} />
                        </motion.div>
                    ))}
                </div>

                {/* Main Content Area: Chart and Activity */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Chart Placeholder */}
                    <div className="lg:col-span-2 p-8 rounded-[2.5rem] bg-[#0a0c10] border border-white/5">
                        <div className="flex items-center justify-between mb-10">
                            <div>
                                <h3 className="text-sm font-black text-white uppercase tracking-widest italic">Payout Velocity</h3>
                                <p className="text-[10px] text-white/40 mt-1 uppercase">Claims processed vs settlement time (Last 30 Days)</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <button className="px-3 py-1.5 rounded-lg bg-white/5 text-[10px] font-black text-white uppercase border border-white/5 hover:bg-white/10 transition-all flex items-center gap-2">
                                    <Calendar className="w-3 h-3" /> This Month
                                </button>
                                <button className="p-1.5 rounded-lg bg-white/5 text-white/40 border border-white/5 hover:text-white transition-all">
                                    <MoreVertical className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        <div className="h-[300px] flex items-end gap-3 px-4">
                            {[60, 45, 80, 55, 90, 70, 40, 65, 85, 50, 75, 95, 40, 60, 80].map((h, i) => (
                                <div key={i} className="flex-1 group relative">
                                    <motion.div
                                        initial={{ height: 0 }}
                                        animate={{ height: `${h}%` }}
                                        transition={{ delay: i * 0.05 + 0.5, duration: 1 }}
                                        className={`w-full rounded-t-lg bg-gradient-to-t ${h > 70 ? 'from-purple-600 to-pink-500' : 'from-blue-600 to-blue-400/50'} opacity-30 hover:opacity-100 transition-opacity cursor-pointer`}
                                    />
                                    {/* Tooltip on hover simulation? Just a simple dot for now */}
                                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 text-[8px] font-black text-white transition-opacity">
                                        {h}k
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 flex items-center justify-between border-t border-white/5 pt-8">
                            <div className="flex gap-8">
                                <div>
                                    <p className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-1">Avg Settlement</p>
                                    <p className="text-lg font-display font-black text-white italic">14.2 Hours</p>
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-1">Success Rate</p>
                                    <p className="text-lg font-display font-black text-emerald-500 italic">98.4%</p>
                                </div>
                            </div>
                            <button className="flex items-center gap-2 text-[10px] font-black text-purple-500 uppercase tracking-widest group">
                                Download Detailed Report <ArrowUpRight className="w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </div>
                    </div>

                    {/* Recent Claims Table Overlay */}
                    <div className="p-8 rounded-[2.5rem] bg-[#0a0c10] border border-white/5">
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="text-sm font-black text-white uppercase tracking-widest italic">Live Claims</h3>
                            <button className="text-[10px] font-black text-white/40 uppercase tracking-widest hover:text-white transition-colors">View All</button>
                        </div>

                        <div className="space-y-4">
                            {recentClaims.map((claim, i) => (
                                <motion.div
                                    key={claim.id}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 + 0.8 }}
                                    className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-all cursor-pointer"
                                >
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-[10px] font-black text-purple-500 uppercase tracking-tighter">{claim.id}</span>
                                        <span className={`text-[8px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded ${claim.status === 'Approved' ? 'bg-emerald-500/10 text-emerald-500' :
                                                claim.status === 'Pending' ? 'bg-amber-500/10 text-amber-500' :
                                                    'bg-blue-500/10 text-blue-500'
                                            }`}>
                                            {claim.status}
                                        </span>
                                    </div>
                                    <h4 className="text-xs font-bold text-white italic">{claim.user}</h4>
                                    <div className="flex items-center justify-between mt-2">
                                        <span className="text-[10px] text-white/30 font-black uppercase tracking-widest">{claim.amount}</span>
                                        <span className="text-[8px] text-white/20 uppercase font-black">{claim.date}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <button className="w-full mt-8 py-3 rounded-xl bg-white/5 border border-white/5 text-[9px] font-black text-white uppercase tracking-widest hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                            <Download className="w-3 h-3" /> Export Logs
                        </button>
                    </div>
                </div>

                {/* Action Controls */}
                <div className="mt-8 flex flex-wrap gap-4">
                    {['Verification Queue', 'Advocacy Live Chat', 'Policy Modeler', 'Risk Assessment', 'System Logs'].map(action => (
                        <button key={action} className="px-6 py-3 rounded-xl bg-[#0a0c10] border border-white/5 text-[10px] font-black text-white/60 uppercase tracking-widest hover:text-white hover:border-white/20 transition-all">
                            {action}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
