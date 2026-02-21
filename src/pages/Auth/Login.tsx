import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Shield, Eye, EyeOff, Github, ArrowRight } from "lucide-react";
import { useState } from "react";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="min-h-screen bg-[#050608] flex items-center justify-center p-6 relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-600/10 blur-[150px] rounded-full" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[150px] rounded-full" />

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-md relative z-10"
            >
                <div className="text-center mb-12">
                    <Link to="/" className="inline-flex items-center gap-2 mb-8 group">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white shadow-premium group-hover:rotate-12 transition-transform">
                            <Shield className="w-5 h-5" />
                        </div>
                        <span className="text-2xl font-display font-black text-white italic tracking-tighter uppercase">Orbit<span className="text-gradient-purple">Scale</span></span>
                    </Link>
                    <h1 className="text-3xl font-display font-black text-white italic tracking-tight uppercase">Access <span className="text-gradient-purple">Shield</span></h1>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest font-black mt-2 italic">Connect to your secure protection matrix.</p>
                </div>

                <div className="p-8 rounded-[2.5rem] bg-[#0a0c10] border border-white/5 shadow-glass">
                    <form className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-white/40 uppercase tracking-widest ml-1">Terminal handle (Email)</label>
                            <input
                                type="email"
                                placeholder="operator@orbitscale.dev"
                                className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/5 focus:border-purple-500/50 outline-none text-sm text-white transition-all placeholder:text-white/10"
                            />
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <label className="text-[10px] font-black text-white/40 uppercase tracking-widest ml-1">Access Code (Password)</label>
                                <button type="button" className="text-[9px] font-black text-purple-500 uppercase tracking-widest hover:text-purple-400 transition-colors">Forgot?</button>
                            </div>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="••••••••"
                                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/5 focus:border-purple-500/50 outline-none text-sm text-white transition-all placeholder:text-white/10"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white/20 hover:text-white transition-colors"
                                >
                                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                </button>
                            </div>
                        </div>

                        <button className="w-full py-5 rounded-[2rem] bg-white text-black font-black uppercase tracking-widest text-[11px] shadow-premium hover:scale-[1.02] active:scale-[0.98] transition-all">
                            Initialize Connection
                        </button>
                    </form>

                    <div className="relative my-8">
                        <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/5"></div></div>
                        <div className="relative flex justify-center text-[9px] uppercase font-black text-white/20 tracking-widest"><span className="px-4 bg-[#0a0c10]">Or sync with</span></div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <button className="flex items-center justify-center gap-3 py-4 rounded-2xl bg-white/5 border border-white/5 text-[10px] font-black text-white uppercase tracking-widest hover:bg-white/10 transition-all">
                            <Github className="w-4 h-4" /> GitHub
                        </button>
                        <button className="flex items-center justify-center gap-3 py-4 rounded-2xl bg-white/5 border border-white/5 text-[10px] font-black text-white uppercase tracking-widest hover:bg-white/10 transition-all">
                            <span className="text-blue-500 font-bold">G</span> Google
                        </button>
                    </div>
                </div>

                <p className="text-center mt-8 text-xs text-muted-foreground font-black uppercase tracking-widest italic">
                    New to the matrix? <Link to="/signup" className="text-purple-500 hover:text-purple-400 transition-colors">Request Initialization</Link>
                </p>
            </motion.div>
        </div>
    );
};

export default Login;
