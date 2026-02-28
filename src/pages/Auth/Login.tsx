import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Shield, Eye, EyeOff, Github, ShieldCheck, Clock, LineChart, Lock } from "lucide-react";
import { useState } from "react";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <main className="flex-grow flex items-center justify-center px-4 py-6 relative z-10 pt-20 sm:pt-24 min-h-screen bg-slate-950">
            <div className="w-full max-w-5xl grid lg:grid-cols-5 gap-6 lg:gap-8 items-stretch">
                {/* Login Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="lg:col-span-3 bg-[#0a0c10]/80 backdrop-blur-xl w-full p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl relative z-10 shadow-premium border border-white/5"
                >
                    <div className="text-center mb-6 sm:mb-10 flex flex-col items-center">
                        <Link to="/" className="inline-flex items-center gap-2 mb-4 sm:mb-6 hover:opacity-80 transition group">
                            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-700 flex items-center justify-center text-white shadow-lg shadow-purple-500/30 group-hover:scale-110 transition-transform duration-300">
                                <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
                            </div>
                            <span className="font-display font-bold text-xl sm:text-2xl tracking-tight text-white">Orbit<span className="text-purple-500">Scale</span></span>
                        </Link>
                        <h1 className="text-xl sm:text-2xl font-bold text-white mb-2">Client Portal Access</h1>
                        <p className="text-white/40 text-sm sm:text-base">Securely view your protection matrix and manage your policies.</p>
                    </div>

                    <form className="space-y-4 sm:space-y-6">
                        <div className="relative">
                            <input type="email" id="email" name="email"
                                className="peer block w-full px-4 py-3 sm:py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-transparent focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition text-base"
                                placeholder="Email" required />
                            <label htmlFor="email"
                                className="absolute left-4 -top-2.5 bg-[#0a0c10] px-1 text-white/40 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white/30 peer-placeholder-shown:top-3 sm:peer-placeholder-shown:top-3.5 peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:text-emerald-400 peer-focus:text-sm peer-focus:bg-[#0a0c10]">Email Address</label>
                        </div>

                        <div className="relative">
                            <input type={showPassword ? "text" : "password"} id="password" name="password"
                                className="peer block w-full pr-12 px-4 py-3 sm:py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-transparent focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition text-base"
                                placeholder="Password" required />
                            <label htmlFor="password"
                                className="absolute left-4 -top-2.5 bg-[#0a0c10] px-1 text-white/40 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white/30 peer-placeholder-shown:top-3 sm:peer-placeholder-shown:top-3.5 peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:text-emerald-400 peer-focus:text-sm peer-focus:bg-[#0a0c10]">Password</label>
                            <button type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 right-3 my-1 px-3 rounded-lg text-white/40 hover:text-white hover:bg-white/10 focus:outline-none flex items-center justify-center transition-colors"
                                aria-label="Toggle password visibility">
                                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                            </button>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm">
                            <label className="flex items-center text-white/40 cursor-pointer">
                                <input type="checkbox"
                                    className="rounded border-white/10 bg-white/5 text-emerald-500 focus:ring-emerald-500 focus:ring-offset-[#0a0c10] mr-2 w-4 h-4" />
                                <span className="ms-2">Remember me</span>
                            </label>
                            <Link to="#" className="text-emerald-400 hover:text-emerald-300 font-medium transition-colors">Forgot password?</Link>
                        </div>

                        <div className="flex items-start gap-3 rounded-xl sm:rounded-2xl bg-white/5 border border-white/5 p-3 sm:p-4 text-sm text-slate-300">
                            <Lock className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                            <div>
                                <p className="font-semibold text-white text-sm">SAML/SSO ready</p>
                                <p className="text-white/40 text-xs sm:text-sm">Enterprise logins and MFA are enforced for protected routes.</p>
                            </div>
                        </div>

                        <Link to="/dashboard"
                            className="block w-full py-3 sm:py-3.5 px-6 text-center rounded-xl bg-emerald-600 font-bold text-white hover:bg-emerald-500 transition shadow-lg shadow-emerald-500/25 text-base hover:scale-[1.02] active:scale-[0.98]">
                            Sign In
                        </Link>
                    </form>

                    <div className="relative my-6 sm:my-8">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-white/10"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-[#0a0c10] text-white/40">Or continue with</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                        <button className="flex items-center justify-center gap-2 py-2.5 sm:py-3 px-4 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition text-sm sm:text-base">
                            <Github className="w-5 h-5" /> <span className="hidden xs:inline">GitHub</span><span className="xs:hidden">Git</span>
                        </button>
                        <button className="flex items-center justify-center gap-2 py-2.5 sm:py-3 px-4 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition text-sm sm:text-base">
                            <span className="text-red-500 font-bold text-xl leading-none">G</span> Google
                        </button>
                    </div>

                    <p className="mt-6 sm:mt-8 text-center text-sm text-white/40">
                        Don't have an account? <Link to="/signup" className="text-emerald-400 hover:text-emerald-300 font-medium transition-colors">Sign up</Link>
                    </p>
                </motion.div>

                {/* Sidebar CTA - Hidden on mobile, shown on lg */}
                <motion.aside
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="lg:col-span-2 hidden lg:block bg-[#0a0c10]/40 border border-white/5 rounded-3xl p-8 shadow-2xl relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/10 via-teal-500/10 to-indigo-500/10 pointer-events-none"></div>
                    <div className="relative space-y-6">
                        <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-black">What you get</p>
                        <h2 className="text-3xl font-display font-black text-white leading-tight">Secure your peace of mind.</h2>
                        <ul className="space-y-4 text-slate-200">
                            <li className="flex gap-4">
                                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 border border-white/10">
                                    <ShieldCheck className="w-5 h-5 text-emerald-400" />
                                </div>
                                <div>
                                    <p className="font-bold text-sm text-white mb-1">IRDAI compliant protection</p>
                                    <p className="text-white/40 text-xs">Device checks, IP allowlists, and session anomaly alerts baked in.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 border border-white/10">
                                    <Clock className="w-5 h-5 text-emerald-400" />
                                </div>
                                <div>
                                    <p className="font-bold text-sm text-white mb-1">24/7 Claims Assistance</p>
                                    <p className="text-white/40 text-xs">Under 15 minute response from our on-call success team.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 border border-white/10">
                                    <LineChart className="w-5 h-5 text-emerald-400" />
                                </div>
                                <div>
                                    <p className="font-bold text-sm text-white mb-1">Live Coverage DNA Tracking</p>
                                    <p className="text-white/40 text-xs">Track usage, billing, and rollout status from a single console.</p>
                                </div>
                            </li>
                        </ul>
                        <div className="rounded-2xl bg-white/5 border border-white/10 p-5 mt-8">
                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-2">Security status</p>
                            <p className="text-white/80 text-xs">Last security review: <span className="text-emerald-400 font-bold">Feb 2025</span>. SOC2 Type II & ISO 27001 aligned.</p>
                        </div>
                    </div>
                </motion.aside>
            </div>
        </main>
    );
};

export default Login;
