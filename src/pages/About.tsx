import { motion } from "framer-motion";
import { Shield, Target, Users, Globe, ExternalLink, ArrowRight } from "lucide-react";

const About = () => {
    return (
        <div className="pt-32 pb-24 bg-[#050608]">
            <div className="max-w-7xl mx-auto px-6">
                {/* Hero Section */}
                <div className="mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-purple-400 mb-8"
                    >
                        Our Mission & Story
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-6xl md:text-[8rem] font-display font-black text-white leading-[0.8] tracking-tighter mb-12"
                    >
                        Protecting the <br />
                        <span className="text-gradient-purple">internet's core</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-muted-foreground text-xl md:text-2xl max-w-3xl leading-relaxed italic"
                    >
                        We believe that security shouldn't be a bottleneck. OrbitScale was born from a simple idea: make the world's most powerful protection matrix accessible through a single, elegant API.
                    </motion.p>
                </div>

                {/* Vision & Values */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-24 mb-32 items-center">
                    <div className="space-y-12">
                        {[
                            {
                                icon: Target,
                                title: "Unified Precision",
                                desc: "We build tools that are surgically precise. Every line of code in our SDK is optimized for performance and cognitive clarity."
                            },
                            {
                                icon: Shield,
                                title: "Zero Compromise",
                                desc: "Security is non-negotiable. We implement the latest cryptographic standards by default, so you don't have to."
                            },
                            {
                                icon: Globe,
                                title: "Global Resilience",
                                desc: "Our network is built to withstand the unexpected. From 10Tbps DDoS attacks to regional outages, we keep you online."
                            }
                        ].map((v, i) => (
                            <motion.div
                                key={v.title}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="flex gap-6"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-purple-500 shrink-0">
                                    <v.icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-display font-black text-white mb-2 italic tracking-tight">{v.title}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed italic">{v.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="p-10 rounded-[3.5rem] bg-[#0a0c10] border border-white/5 relative overflow-hidden aspect-square flex items-center justify-center"
                    >
                        <div className="absolute inset-0 opacity-20">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] border-[1px] border-white/10 rounded-full animate-spin-slow" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] border-[1px] border-white/10 rounded-full animate-spin-slow reverse" />
                        </div>
                        <div className="relative text-center">
                            <Shield className="w-24 h-24 text-purple-500 mx-auto mb-8 animate-pulse" />
                            <p className="text-[10px] font-black uppercase tracking-[0.5em] text-white/40">Verified Architecture</p>
                        </div>
                    </motion.div>
                </div>

                {/* Team / Leadership Preview */}
                <div className="mb-32">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-6xl font-display font-black text-white italic tracking-tighter uppercase mb-6">Built by <span className="text-gradient-purple">engineers</span></h2>
                        <p className="text-muted-foreground uppercase tracking-widest text-[10px] font-black">Our team comes from background at some of the world's leading tech firms.</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { name: "Alex Rivers", role: "CEO & Co-founder", prev: "ex-Stripe" },
                            { name: "Sarah Chen", role: "CTO", prev: "ex-Cloudflare" },
                            { name: "David Kim", role: "Head of Infrastructure", prev: "ex-Google" },
                            { name: "Elena Rossi", role: "Head of Security", prev: "ex-Apple" }
                        ].map((member, i) => (
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="group p-8 rounded-[2rem] bg-[#0a0c10] border border-white/5 text-center hover:border-white/20 transition-all"
                            >
                                <div className="w-20 h-20 rounded-full bg-white/5 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <Users className="w-8 h-8 text-white/20" />
                                </div>
                                <h4 className="text-lg font-display font-black text-white italic tracking-tight">{member.name}</h4>
                                <p className="text-[10px] font-black text-white/40 uppercase tracking-widest mt-1 mb-4">{member.role}</p>
                                <span className="px-3 py-1 rounded-md bg-white/5 text-[9px] font-black text-white/20 uppercase tracking-widest">{member.prev}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Global Stats */}
                <div className="p-16 rounded-[4rem] bg-gradient-to-br from-purple-600/20 to-transparent border border-white/10 relative overflow-hidden overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center relative z-10">
                        <div>
                            <p className="text-5xl font-display font-black text-white mb-2 italic">40+</p>
                            <p className="text-[10px] font-black text-white/40 uppercase tracking-widest">Global Edge Nodes</p>
                        </div>
                        <div>
                            <p className="text-5xl font-display font-black text-white mb-2 italic">20M+</p>
                            <p className="text-[10px] font-black text-white/40 uppercase tracking-widest">Threats Blocked Daily</p>
                        </div>
                        <div>
                            <p className="text-5xl font-display font-black text-white mb-2 italic">12k+</p>
                            <p className="text-[10px] font-black text-white/40 uppercase tracking-widest">Modern Teams Scaling</p>
                        </div>
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-purple-500/5 blur-[120px] rounded-full" />
                </div>
            </div>
        </div>
    );
};

export default About;
