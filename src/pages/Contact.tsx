import { motion } from "framer-motion";
import { Mail, MessageSquare, Phone, MapPin, Send, Globe, Github, Terminal } from "lucide-react";

const Contact = () => {
    return (
        <div className="pt-24 md:pt-32 pb-16 md:pb-24 bg-[#050608]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-start">
                    {/* Left: Info */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-purple-400 mb-8 inline-block"
                        >
                            Contact Support & Sales
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl sm:text-6xl md:text-7xl font-display font-black text-white leading-[0.9] tracking-tighter mb-8 uppercase italic"
                        >
                            Protecting your <br />
                            <span className="text-gradient-purple">Digital Legacy</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-muted-foreground text-lg mb-12 italic leading-relaxed max-w-lg"
                        >
                            Have questions about our Protection Matrix, Elite tiers, or Technical Advocacy? Our squad of advisors is ready to help you initialize.
                        </motion.p>

                        <div className="space-y-8">
                            {[
                                { icon: Mail, title: "Advocacy Info", value: "ops@glowinsure.com", sub: "Priority Support: < 15m" },
                                { icon: MessageSquare, title: "Vault Discord", value: "GlowHub Security Council", sub: "Live technical advocacy" },
                                { icon: Globe, title: "World HQ", value: "San Francisco, CA", sub: "Global Coordination Center" }
                            ].map((item, i) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 + 0.3 }}
                                    className="flex gap-6 items-start"
                                >
                                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 group-hover:text-white transition-colors">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-1">{item.title}</h4>
                                        <p className="text-lg font-bold text-white italic">{item.value}</p>
                                        <p className="text-[9px] text-white/20 uppercase tracking-widest font-black mt-1">{item.sub}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-16 flex items-center gap-6 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all">
                            <Github className="w-6 h-6 text-white cursor-pointer" />
                            <Terminal className="w-6 h-6 text-white cursor-pointer" />
                            <Globe className="w-6 h-6 text-white cursor-pointer" />
                        </div>
                    </div>

                    {/* Right: Form */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="p-6 md:p-10 rounded-2xl md:rounded-[3rem] bg-[#0a0c10] border border-white/5 shadow-glass w-full"
                    >
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-white/40 uppercase tracking-widest ms-1">Full Name</label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/5 focus:border-purple-500/50 outline-none text-sm text-white transition-all placeholder:text-white/10 italic"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-white/40 uppercase tracking-widest ms-1">Primary Email</label>
                                    <input
                                        type="email"
                                        placeholder="john@company.com"
                                        className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/5 focus:border-purple-500/50 outline-none text-sm text-white transition-all placeholder:text-white/10 italic"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-white/40 uppercase tracking-widest ms-1">Subject</label>
                                <select className="w-full px-6 py-4 rounded-2xl bg-[#0a0c10] border border-white/5 focus:border-purple-500/50 outline-none text-sm text-white transition-all appearance-none cursor-pointer italic">
                                    <option>General Support</option>
                                    <option>Elite Tier Inquiry</option>
                                    <option>Claim Advocacy</option>
                                    <option>Security Matrix Audit</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-white/40 uppercase tracking-widest ms-1">Safety Requirements</label>
                                <textarea
                                    rows={5}
                                    placeholder="Describe your architecture and requirements..."
                                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/5 focus:border-purple-500/50 outline-none text-sm text-white transition-all placeholder:text-white/10 italic resize-none"
                                />
                            </div>

                            <button className="w-full py-5 rounded-[2rem] bg-white text-black font-black uppercase tracking-widest text-[11px] shadow-premium hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3">
                                Send Transmission <Send className="w-4 h-4" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
