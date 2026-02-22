import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Shield, Check, Github, ArrowRight } from "lucide-react";
import { useState } from "react";

const Signup = () => {
    return (
        <div className="min-h-screen bg-[#050608] flex items-center justify-center p-6 lg:p-12 relative overflow-hidden">
            {/* Background Aesthetics */}
            <div className="absolute top-0 end-0 w-[60%] h-[60%] bg-purple-600/10 blur-[200px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 start-0 w-[60%] h-[60%] bg-blue-600/10 blur-[200px] rounded-full pointer-events-none" />

            <div className="w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="hidden lg:block"
                >
                    <Link to="/" className="inline-flex items-center gap-2 mb-12 group">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white shadow-premium group-hover:rotate-12 transition-transform">
                            <Shield className="w-6 h-6" />
                        </div>
                        <span className="text-3xl font-display font-black text-white italic tracking-tighter uppercase">Orbit<span className="text-gradient-purple">Scale</span></span>
                    </Link>

                    <h1 className="text-6xl font-display font-black text-white leading-[0.9] tracking-tighter mb-8 italic">
                        Identity <br />
                        <span className="text-gradient-purple">Initialization</span>
                    </h1>
                    <p className="text-muted-foreground text-lg mb-12 italic leading-relaxed">
                        Join 12,000+ engineers building the future of protected architecture. Get started in minutes with our unified API.
                    </p>

                    <div className="space-y-6">
                        {[
                            "Real-time fraud detection advocacy",
                            "Unlimited project scaling",
                            "Enterprise-grade security matrix",
                            "Global edge deployment (40+ POPs)"
                        ].map(benefit => (
                            <div key={benefit} className="flex items-center gap-4">
                                <div className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                                    <Check className="w-3 h-3 text-emerald-500" />
                                </div>
                                <span className="text-sm font-black text-white/60 uppercase tracking-widest italic">{benefit}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="w-full max-w-md mx-auto"
                >
                    <div className="p-8 lg:p-10 rounded-[3rem] bg-[#0a0c10] border border-white/5 shadow-glass">
                        <h2 className="text-2xl font-display font-black text-white mb-2 italic tracking-tight">Create your account</h2>
                        <p className="text-[10px] text-white/30 uppercase tracking-widest font-black mb-8 italic">Start building for free. No credit card required.</p>

                        <form className="space-y-5">
                            <div className="space-y-2">
                                <label className="text-[9px] font-black text-white/40 uppercase tracking-widest ms-1">Access Code</label>
                                <input
                                    type="text"
                                    placeholder="John Operator"
                                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/5 focus:border-purple-500/50 outline-none text-sm text-white transition-all placeholder:text-white/10"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-[9px] font-black text-white/40 uppercase tracking-widest ms-1">Work Email</label>
                                <input
                                    type="email"
                                    placeholder="john@company.dev"
                                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/5 focus:border-purple-500/50 outline-none text-sm text-white transition-all placeholder:text-white/10"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-[9px] font-black text-white/40 uppercase tracking-widest ms-1">Access Code</label>
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/5 focus:border-purple-500/50 outline-none text-sm text-white transition-all placeholder:text-white/10"
                                />
                            </div>

                            <button className="w-full py-5 rounded-[2rem] bg-purple-600 text-white font-black uppercase tracking-widest text-[11px] shadow-premium hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 mt-4">
                                Initialize Account <ArrowRight className="w-4 h-4" />
                            </button>
                        </form>

                        <div className="relative my-8">
                            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/5"></div></div>
                            <div className="relative flex justify-center text-[8px] uppercase font-black text-white/20 tracking-widest"><span className="px-4 bg-[#0a0c10]">Or continue with</span></div>
                        </div>

                        <button className="w-full flex items-center justify-center gap-3 py-4 rounded-2xl bg-white/5 border border-white/5 text-[10px] font-black text-white uppercase tracking-widest hover:bg-white/10 transition-all">
                            <Github className="w-4 h-4" /> Sync GitHub Account
                        </button>

                        <p className="mt-8 text-center text-[9px] text-white/30 font-black uppercase tracking-widest leading-relaxed">
                            By initializing, you agree to our <br />
                            <Link to="/terms" className="text-white/50 hover:text-white transition-colors">Terms of Service</Link> and <Link to="/privacy" className="text-white/50 hover:text-white transition-colors">Privacy Privacy</Link>.
                        </p>
                    </div>

                    <p className="text-center mt-8 text-xs text-muted-foreground font-black uppercase tracking-widest italic">
                        Already in the matrix? <Link to="/login" className="text-purple-500 hover:text-purple-400 transition-colors">Access Shield</Link>
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default Signup;
