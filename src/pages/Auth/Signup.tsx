import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Shield, ShieldCheck, Eye, EyeOff, Github, Rocket, Users, Cloud, ArrowRight } from "lucide-react";
import { useState } from "react";

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <main className="flex-grow flex items-center justify-center px-4 py-6 relative z-10 pt-20 sm:pt-24 min-h-screen">
            <div className="w-full max-w-5xl grid lg:grid-cols-5 gap-6 lg:gap-8 items-stretch">
                {/* Signup Card */}
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
                        <h1 className="text-xl sm:text-2xl font-bold text-white mb-2">Initialize your Protection</h1>
                        <p className="text-white/40 text-sm sm:text-base">Get a custom risk assessment and instant issuance.</p>
                    </div>

                    <form className="space-y-4 sm:space-y-6">
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="relative">
                                <input type="text" id="name" name="name"
                                    className="peer block w-full px-4 py-3 sm:py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-transparent focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition text-base"
                                    placeholder="Full Name" required />
                                <label htmlFor="name"
                                    className="absolute left-4 -top-2.5 bg-[#0a0c10] px-1 text-white/40 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white/30 peer-placeholder-shown:top-3 sm:peer-placeholder-shown:top-3.5 peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:text-emerald-400 peer-focus:text-sm peer-focus:bg-[#0a0c10]">Full Name</label>
                            </div>
                            <div className="relative">
                                <input type="text" id="company" name="company"
                                    className="peer block w-full px-4 py-3 sm:py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-transparent focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition text-base"
                                    placeholder="Primary Insured or Company" required />
                                <label htmlFor="company"
                                    className="absolute left-4 -top-2.5 bg-[#0a0c10] px-1 text-white/40 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white/30 peer-placeholder-shown:top-3 sm:peer-placeholder-shown:top-3.5 peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:text-emerald-400 peer-focus:text-sm peer-focus:bg-[#0a0c10]">Insured Name</label>
                            </div>
                        </div>

                        <div className="relative">
                            <input type="email" id="email" name="email"
                                className="peer block w-full px-4 py-3 sm:py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-transparent focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition text-base"
                                placeholder="Work Email" required />
                            <label htmlFor="email"
                                className="absolute left-4 -top-2.5 bg-[#0a0c10] px-1 text-white/40 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white/30 peer-placeholder-shown:top-3 sm:peer-placeholder-shown:top-3.5 peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:text-emerald-400 peer-focus:text-sm peer-focus:bg-[#0a0c10]">Email Address</label>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
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
                            <div className="relative">
                                <input type={showConfirmPassword ? "text" : "password"} id="confirm-password" name="confirm-password"
                                    className="peer block w-full pr-12 px-4 py-3 sm:py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-transparent focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition text-base"
                                    placeholder="Confirm Password" required />
                                <label htmlFor="confirm-password"
                                    className="absolute left-4 -top-2.5 bg-[#0a0c10] px-1 text-white/40 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white/30 peer-placeholder-shown:top-3 sm:peer-placeholder-shown:top-3.5 peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:text-emerald-400 peer-focus:text-sm peer-focus:bg-[#0a0c10]">Confirm Password</label>
                                <button type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute inset-y-0 right-3 my-1 px-3 rounded-lg text-white/40 hover:text-white hover:bg-white/10 focus:outline-none flex items-center justify-center transition-colors"
                                    aria-label="Toggle password visibility">
                                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>
                        </div>

                        <div className="rounded-2xl bg-white/5 border border-white/5 p-4 text-sm text-slate-300 space-y-2">
                            <div className="flex items-center gap-2 text-slate-200">
                                <Shield className="w-4 h-4 text-emerald-400" />
                                <span className="font-semibold text-white">Security Checklist</span>
                            </div>
                            <ul className="grid sm:grid-cols-2 gap-2 text-white/40">
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>Use 12+ characters</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>Mix upper & lower case</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>Add a number</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>Add a symbol</li>
                            </ul>
                        </div>

                        <label className="flex items-start gap-3 text-sm text-white/40">
                            <input type="checkbox"
                                className="mt-1 rounded border-white/10 bg-white/5 text-emerald-500 focus:ring-emerald-500 focus:ring-offset-[#0a0c10]"
                                required />
                            <span>By creating an account, you agree to our <Link to="#" className="text-emerald-400 hover:text-emerald-300 font-semibold transition-colors">Terms</Link> and <Link to="#" className="text-emerald-400 hover:text-emerald-300 font-semibold transition-colors">Privacy Policy</Link>.</span>
                        </label>

                        <Link to="/dashboard"
                            className="block w-full py-3 sm:py-3.5 px-6 text-center rounded-xl bg-emerald-600 font-bold text-white hover:bg-emerald-500 transition shadow-lg shadow-emerald-500/25 text-base hover:scale-[1.02] active:scale-[0.98]">
                            Create Account
                        </Link>
                    </form>

                    <div className="relative my-6 sm:my-8">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-white/10"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-[#0a0c10] text-white/40">Or sign up with</span>
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
                        Already have an account? <Link to="/login" className="text-emerald-400 hover:text-emerald-300 font-medium transition-colors">Log in</Link>
                    </p>
                </motion.div>

                {/* Sidebar CTA - Hidden on mobile, shown on lg */}
                <motion.aside
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="lg:col-span-2 hidden lg:block bg-[#0a0c10]/40 border border-white/5 rounded-3xl p-8 shadow-2xl relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-emerald-500/10 to-blue-500/10 pointer-events-none"></div>
                    <div className="relative space-y-6">
                        <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-black">Built for your family's safety</p>
                        <h2 className="text-3xl font-display font-black text-white leading-tight">Secure coverage in minutes.</h2>
                        <ul className="space-y-4 text-slate-200">
                            <li className="flex gap-4">
                                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 border border-white/10">
                                    <Rocket className="w-5 h-5 text-purple-400" />
                                </div>
                                <div>
                                    <p className="font-bold text-sm text-white mb-1">Custom Risk Assessment</p>
                                    <p className="text-white/40 text-xs">Personalized protection matrix and DNA profiling in minutes.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 border border-white/10">
                                    <Users className="w-5 h-5 text-purple-400" />
                                </div>
                                <div>
                                    <p className="font-bold text-sm text-white mb-1">Family Pool Coverage</p>
                                    <p className="text-white/40 text-xs">Add beneficiaries and family members with shared coverage in a single step.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 border border-white/10">
                                    <Cloud className="w-5 h-5 text-purple-400" />
                                </div>
                                <div>
                                    <p className="font-bold text-sm text-white mb-1">Global Healthcare Access</p>
                                    <p className="text-white/40 text-xs">Access premium healthcare networks globally without restrictions.</p>
                                </div>
                            </li>
                        </ul>
                        <div className="rounded-2xl bg-white/5 border border-white/10 p-5 mt-8">
                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-2">Included in Premium</p>
                            <p className="text-white/80 text-xs">24/7 dedicated support, priority claim processing, and health concierges.</p>
                        </div>
                    </div>
                </motion.aside>
            </div>
        </main>
    );
};

export default Signup;
