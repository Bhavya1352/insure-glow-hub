import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
    ArrowRight,
    Play,
    Terminal,
    Database,
    Github,
    Activity,
    Zap,
    ShieldCheck,
    LineChart,
    Cpu,
    Layers,
    Globe,
    Users
} from "lucide-react";

const Home1 = () => {
    return (
        <div className="relative">
            {/* Hero Section */}
            <section className="relative pt-28 md:pt-48 pb-16 md:pb-32 overflow-hidden bg-[#050608]">
                {/* Abstract Background Glows */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                    <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-600/10 blur-[150px] rounded-full" />
                    <div className="absolute bottom-[20%] right-[-5%] w-[40%] h-[40%] bg-blue-600/10 blur-[150px] rounded-full" />
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
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl sm:text-6xl md:text-8xl lg:text-[7rem] font-display font-black text-white leading-[0.9] tracking-tighter mb-8"
                    >
                        .The API for <br />
                        <span className="text-gradient-purple">modern teams</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12"
                    >
                        A complete toolchain for developers. Build, test, and deploy in record <br className="hidden md:block" />
                        time with our unified API surface.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
                    >
                        <Link to="/signup" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-black font-black uppercase tracking-widest text-[11px] shadow-premium hover:scale-105 active:scale-95 transition-all text-center">
                            Get API Key
                        </Link>
                        <Link to="/solutions" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-purple-600 text-white font-black uppercase tracking-widest text-[11px] shadow-premium hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2">
                            Read The Docs <ArrowRight className="w-4 h-4" />
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
                            <div className="p-6 text-left font-mono text-sm sm:text-base leading-relaxed overflow-x-auto whitespace-nowrap scrollbar-hide">
                                <div className="flex gap-4">
                                    <span className="text-white/20 select-none">1</span>
                                    <span className="text-purple-400">npm install</span>
                                    <span className="text-white">@orbitscale/sdk</span>
                                </div>
                                <div className="flex gap-4 mt-2">
                                    <span className="text-white/20 select-none">2</span>
                                    <span className="text-white/40 italic">// Initialize protection layer</span>
                                </div>
                                <div className="flex gap-4">
                                    <span className="text-white/20 select-none">3</span>
                                    <span className="text-blue-400">const</span>
                                    <span className="text-white">shield =</span>
                                    <span className="text-blue-400">await</span>
                                    <span className="text-purple-400">Orbit.init()</span>
                                </div>
                                <div className="flex gap-4">
                                    <span className="text-white/20 select-none">4</span>
                                    <span className="text-white">shield.</span>
                                    <span className="text-purple-400">deploy()</span>
                                    <span className="text-white">.</span>
                                    <span className="text-purple-400">then</span>
                                    <span className="text-white">( ( ) ={">"} console.</span>
                                    <span className="text-purple-400">log</span>
                                    <span className="text-white">(</span>
                                    <span className="text-emerald-400">'Active'</span>
                                    <span className="text-white">) )</span>
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
                        Integrate with your <span className="text-gradient-purple">favorite tools</span>
                    </h2>
                    <p className="text-muted-foreground mb-16 uppercase tracking-widest text-[10px] font-black">
                        Connect seamlessly with the tools you already use and love.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: Database, label: "Database Sync", sub: "Connect to Postgres, MongoDB, and more with one-click setup.", color: "pink" },
                            { icon: Activity, label: "Slack Alerts", sub: "Get real-time notification about your deployments, errors, and performance.", color: "blue" },
                            { icon: Github, label: "GitHub Integration", sub: "Deploy automatically on every push to main. No configuration required.", color: "purple" }
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

                    <div className="mt-16 flex flex-wrap justify-center items-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all">
                        {['Redis', 'Docker', 'AWS', 'Stripe', 'Next.js', 'Vercel'].map(tool => (
                            <span key={tool} className="text-sm font-black text-white">{tool}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Performance Stats Section */}
            <section className="py-32 bg-[#050608]">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-black uppercase tracking-widest text-emerald-500 mb-6">
                            Cloud Native
                        </div>
                        <h2 className="text-4xl md:text-6xl font-display font-black text-white leading-[0.9] mb-8">
                            Performance that <br />
                            <span className="text-gradient-purple">speaks volumes</span>
                        </h2>
                        <p className="text-muted-foreground text-lg mb-12 italic">
                            Built on cutting-edge infrastructure with global CDN edge computing and intelligent caching. Your users get the fastest experience, everywhere.
                        </p>

                        <div className="space-y-6">
                            {[
                                { icon: Cpu, label: "Edge Deployment", sub: "Deploy globally in under 20s with effortless replication." },
                                { icon: Zap, label: "Real-time Monitoring", sub: "Track every request with 1ms interval precision." },
                                { icon: ShieldCheck, label: "SLA 99.99%", sub: "Enterprise grade reliability guaranteed." }
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
                            <h3 className="text-sm font-black uppercase tracking-widest text-white">Performance</h3>
                            <div className="px-3 py-1 rounded-md bg-emerald-500/10 text-[10px] font-black text-emerald-500 uppercase">
                                Healthy
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-6 mb-8">
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                                <p className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-1">Uptime</p>
                                <p className="text-2xl font-display font-black text-white italic">99.99%</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                                <p className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-1">Avg TTR</p>
                                <p className="text-2xl font-display font-black text-white italic">47ms</p>
                            </div>
                        </div>

                        {/* Visual Chart Placeholder */}
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
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 py-2 rounded-xl bg-purple-600 shadow-premium font-black text-[10px] text-white uppercase tracking-widest">
                            +18% Optimization
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Feature Grids */}
            <section className="py-24 bg-[#050608] border-t border-white/5 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-6xl font-display font-black text-white leading-[0.9] mb-12 tracking-tight">
                        .Everything you need to ship
                    </h2>
                    <p className="text-muted-foreground uppercase tracking-widest text-[10px] font-black mb-20 italic">Powerful features integrated into a single API</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        <div className="p-6 md:p-12 rounded-2xl md:rounded-[3.5rem] bg-gradient-to-br from-white/5 to-transparent border border-white/10 text-left group overflow-hidden relative">
                            <div className="relative z-10">
                                <ShieldCheck className="w-10 h-10 text-emerald-500 mb-6" />
                                <h3 className="text-2xl font-display font-black text-white mb-4 italic">DDoS Protection</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">Built-in high-volume traffic filtering and auto-scaling to keep your applications online even under massive attacks.</p>
                            </div>
                            <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-emerald-500/5 blur-[80px] rounded-full group-hover:scale-110 transition-transform" />
                        </div>

                        <div className="p-6 md:p-12 rounded-2xl md:rounded-[3.5rem] bg-gradient-to-br from-white/5 to-transparent border border-white/10 text-left group overflow-hidden relative">
                            <div className="relative z-10">
                                <Globe className="w-10 h-10 text-blue-500 mb-6" />
                                <h3 className="text-2xl font-display font-black text-white mb-4 italic">Global Edge Network</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">Cache content closer to users with our over 40+ global points of presence for zero-latency dynamic content.</p>
                            </div>
                            <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-500/5 blur-[80px] rounded-full group-hover:scale-110 transition-transform" />
                            {/* Abstract Map Nodes Visualization */}
                            <div className="absolute bottom-10 right-10 flex flex-col gap-2 items-end">
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
                            <div className="text-left">
                                <h3 className="text-xl font-display font-black text-white mb-2 italic">Real-time Analytics</h3>
                                <p className="text-muted-foreground text-xs leading-relaxed max-w-xs italic">Monitor your API usage, latency, and errors in real-time with zero configuration.</p>
                                <Link to="/dashboard" className="mt-6 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-purple-500 group">
                                    View Dashboard <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                            <div className="w-full md:w-auto flex items-end gap-1.5 h-24 px-4 border-l border-white/5">
                                {[30, 50, 40, 80, 60, 70, 40, 60].map((h, i) => (
                                    <div key={i} style={{ height: `${h}%` }} className="w-4 bg-purple-500/20 rounded-t-md" />
                                ))}
                            </div>
                        </div>

                        <div className="p-6 md:p-10 rounded-2xl md:rounded-[2.5rem] bg-[#0a0c10] border border-white/5 text-center group">
                            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-6 text-white group-hover:rotate-[360deg] transition-transform duration-700">
                                <Layers className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-display font-black text-white mb-2 italic">Type-Safe SDK</h3>
                            <p className="text-muted-foreground text-xs italic">Full TypeScript support with auto-generated documentation for every endpoint.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Branding Override? No, we use global footer. 
          But let's add a small 'Teams using OrbitScale' section. */}
            <section className="py-20 bg-[#050608] border-t border-white/5 text-center px-6">
                <div className="max-w-4xl mx-auto flex flex-col items-center">
                    <Users className="w-12 h-12 text-white/10 mb-8" />
                    <h3 className="text-xl font-display font-black text-white/40 mb-12 italic uppercase tracking-widest">Joining 12,000+ modern engineering teams</h3>
                    <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale">
                        {['p', 'X', 'o', 'E'].map(l => <span key={l} className="text-4xl font-display font-black text-white">{l}</span>)}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home1;
