import { motion } from "framer-motion";
import { AlertCircle, Search, FileCheck, CheckCircle2, PhoneCall, Zap, ShieldAlert, HeartHandshake } from "lucide-react";

const trailSteps = [
    {
        id: 1,
        title: "Incident Awareness",
        time: "0 min",
        desc: "One-tap alert via app or call. Our AI instantly activates your advocacy squad.",
        icon: ShieldAlert,
        status: "critical",
        metric: "Immediate Response"
    },
    {
        id: 2,
        title: "Cashless Admission",
        time: "15 min",
        desc: "We coordinate directly with the hospital/garage. No deposit required from you.",
        icon: Zap,
        status: "active",
        metric: "₹0 Upfront Cost"
    },
    {
        id: 3,
        title: "Real-time Advocacy",
        time: "Ongoing",
        desc: "A dedicated human advocate handles documentation and hospital queries for you.",
        icon: HeartHandshake,
        status: "active",
        metric: "100% Paperless"
    },
    {
        id: 4,
        title: "Final Settlement",
        time: "Exit",
        desc: "Claim settled before you even leave. Walk out with absolute peace of mind.",
        icon: CheckCircle2,
        status: "complete",
        metric: "Friction-free Exit"
    }
];

const WhyUsSection = () => {
    return (
        <section id="how-it-works" className="py-32 relative overflow-hidden bg-background">
            {/* Background Decorative Element */}
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-y-1/2" />

            <div className="max-w-7xl mx-auto px-6 relative">
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-black uppercase tracking-widest text-emerald-500 mb-6"
                    >
                        <PhoneCall className="w-3 h-3" /> 24/7 Human Advocacy
                    </motion.div>
                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-display font-black text-white mb-6">
                        The Claims <br />
                        <span className="text-gradient-purple">Advocacy Trail</span>
                    </h2>
                    <p className="text-muted-foreground max-w-xl mx-auto text-sm leading-relaxed">
                        Don't fight claims alone. From the moment of incident to final settlement, we take the burden off your shoulders.
                    </p>
                </div>

                <div className="relative">
                    {/* Progress Track (Desktop) */}
                    <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-[2px] bg-white/5">
                        <motion.div
                            initial={{ width: "0%" }}
                            whileInView={{ width: "100%" }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                            className="h-full bg-gradient-to-r from-emerald-500 via-purple-500 to-pink-500 opacity-30"
                        />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        {trailSteps.map((step, i) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="relative group"
                            >
                                {/* Step Node */}
                                <div className="flex justify-center mb-12 relative lg:z-10">
                                    <div className={`w-20 h-20 rounded-[2rem] bg-background border-2 flex items-center justify-center shadow-premium transition-all duration-500 ${step.status === 'critical' ? 'border-rose-500/50 shadow-rose-500/10' :
                                        step.status === 'complete' ? 'border-emerald-500/50 shadow-emerald-500/10' :
                                            'border-purple-500/50 shadow-purple-500/10'
                                        }`}>
                                        <step.icon className={`w-8 h-8 ${step.status === 'critical' ? 'text-rose-500' :
                                            step.status === 'complete' ? 'text-emerald-500' :
                                                'text-purple-500'
                                            }`} />
                                    </div>
                                    <div className="absolute -top-2 -right-2 px-2 py-1 rounded-md bg-white/5 border border-white/10 text-[8px] font-black text-white/60">
                                        {step.time}
                                    </div>
                                </div>

                                {/* Content Card */}
                                <div className="p-5 md:p-8 rounded-2xl md:rounded-[2.5rem] bg-[#0a0c10]/60 backdrop-blur-xl border border-white/5 group-hover:border-white/10 transition-all text-center">
                                    <h3 className="text-xl font-display font-black text-white mb-4">{step.title}</h3>
                                    <p className="text-xs text-muted-foreground leading-relaxed mb-6">
                                        {step.desc}
                                    </p>

                                    <div className="pt-4 border-t border-white/5">
                                        <div className="inline-flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                            <span className="text-[10px] font-black text-white/80 uppercase tracking-widest">{step.metric}</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Trail Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-16 md:mt-20 p-5 md:p-8 rounded-2xl md:rounded-[3rem] bg-gradient-to-r from-purple-500/5 to-emerald-500/5 border border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8"
                >
                    <div className="flex items-center gap-6">
                        <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center">
                            <ShieldAlert className="w-8 h-8 text-purple-500" />
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-white">Need emergency help?</h4>
                            <p className="text-sm text-muted-foreground">Our Rapid Response Unit is standing by 24/7/365.</p>
                        </div>
                    </div>
                    <button
                        onClick={() => window.dispatchEvent(new CustomEvent('open-advocacy-chat'))}
                        className="px-8 py-4 rounded-2xl bg-white text-black font-black text-sm shadow-premium hover:scale-105 active:scale-95 transition-all flex items-center gap-3"
                    >
                        <PhoneCall className="w-4 h-4" /> Call Advocate Now
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default WhyUsSection;
