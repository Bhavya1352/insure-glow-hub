import { motion } from "framer-motion";
import {
    Terminal,
    ShieldCheck,
    Cloud,
    Users,
    Database,
    TrendingUp,
    ArrowRight,
    Search,
    Zap,
    Activity,
    MessageSquare
} from "lucide-react";
import { Link } from "react-router-dom";

const Solutions = () => {
    const services = [
        { title: "Family Protection", icon: ShieldCheck, desc: "Comprehensive life coverage and inheritance planning to secure your family's future across generations.", color: "blue" },
        { title: "Asset Shield", icon: ShieldCheck, desc: "Protecting your high-value physical and digital assets with a technical security matrix.", color: "rose" },
        { title: "Health Alpha", icon: Activity, desc: "Immediate medical coordination and priority access to world-class healthcare facilities.", color: "purple" },
        { title: "Life Vault", icon: Users, desc: "Encrypted storage for vital policy documents and generation-to-generation legacy plans.", color: "emerald" },
        { title: "Risk Analysis", icon: Database, desc: "AI-driven risk mitigation and personalized premium optimization for your unique safety profile.", color: "amber" },
        { title: "Global Assist", desc: "Emergency medical and legal coordination in 40+ countries with 24/7 human advocacy support.", icon: TrendingUp, color: "indigo" }
    ];

    const workflowSteps = [
        { id: 4, title: "Advocacy", desc: "Continuous monitoring and human support during active claims." },
        { id: 3, title: "Activation", desc: "Immediate coordination with hospitals, garages, and authorities." },
        { id: 2, title: "Blueprint", desc: "We design a custom protection roadmap specific to your lifestyle." },
        { id: 1, title: "Risk Audit", desc: "We analyze your current safety exposure and identify gaps." }
    ];

    const engagementTimeline = [
        {
            id: 1,
            title: "Discovery & Assessment",
            desc: "We analyze your current infrastructure, identify bottlenecks, and create a detailed roadmap for optimization."
        },
        {
            id: 2,
            title: "Strategy & Planning",
            desc: "Develop a comprehensive migration strategy with clear milestones, timelines, and success metrics."
        },
        {
            id: 3,
            title: "Implementation",
            desc: "Execute the plan with zero downtime, continuous monitoring, and real-time communication with your team."
        },
        {
            id: 4,
            title: "Optimization & Support",
            desc: "Continuous optimization, 24/7 support, and regular performance reviews to ensure maximum efficiency."
        }
    ];

    return (
        <div className="pt-24 md:pt-32 pb-16 md:pb-24 bg-background overflow-hidden relative">
            {/* Background Glows */}
            <div className="absolute top-0 inset-x-0 h-full pointer-events-none opacity-20">
                <div className="absolute top-[10%] start-[-10%] w-[50%] h-[50%] bg-purple-600/10 blur-[150px] rounded-full" />
                <div className="absolute bottom-[10%] end-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[150px] rounded-full" />
            </div>
            <div className="max-w-7xl mx-auto px-6">
                {/* Solutions Hero */}
                <div className="text-center mb-16 md:mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-purple-500 mb-6 inline-block"
                    >
                        Elite Protection Suite
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl sm:text-5xl md:text-7xl font-display font-black text-white leading-[1.1] tracking-tight mb-8"
                    >
                        .The Future of <br />
                        <span className="text-gradient-purple">Technical Advocacy</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto font-medium italic"
                    >
                        We don't just provide coverage; we partner with you to build a resilient, secured, and automated safety matrix.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="mt-10"
                    >
                        <button className="px-10 py-5 rounded-2xl bg-white text-black font-black uppercase tracking-widest text-[11px] shadow-premium hover:scale-105 active:scale-95 transition-all">
                            Secure your Matrix
                        </button>
                    </motion.div>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-20 md:mb-40">
                    {services.map((service, i) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="p-6 md:p-10 rounded-2xl md:rounded-[2.5rem] bg-white/[0.02] border border-white/5 shadow-premium hover:border-white/20 transition-all group"
                        >
                            <div className={`w-14 h-14 rounded-2xl bg-${service.color}-500/10 border border-${service.color}-500/20 flex items-center justify-center text-${service.color}-500 mb-8 transition-transform group-hover:scale-110`}>
                                <service.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-display font-bold text-white mb-4">{service.title}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed mb-8 italic">{service.desc}</p>
                            <Link to="/contact" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-purple-500 hover:gap-3 transition-all">
                                Get Protected <ArrowRight className="w-4 h-4" />
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* How We Work Section (Reverse Step Grid) */}
                <div className="text-center mb-20 md:mb-40 relative">
                    <h2 className="text-4xl md:text-6xl font-display font-black text-white mb-4 italic">How we work</h2>
                    <p className="text-muted-foreground font-black mb-12 md:mb-20 uppercase tracking-widest text-[10px]">A technical approach to human safety</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 relative">
                        {/* Connector Line */}
                        <div className="absolute top-1/2 inset-x-0 h-px bg-white/5 -translate-y-1/2 hidden md:block" />

                        {workflowSteps.map((step, i) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.1 }}
                                className="relative z-10 bg-[#0a0c10]/40 backdrop-blur-3xl p-5 md:p-8 rounded-2xl md:rounded-[2rem] border border-white/5 shadow-glass text-center"
                            >
                                <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center text-lg font-black mx-auto mb-6 shadow-premium">
                                    {step.id}
                                </div>
                                <h4 className="text-xl font-black text-white mb-2 italic">{step.title}</h4>
                                <p className="text-xs text-muted-foreground leading-relaxed px-4 italic">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* How we work with you (Vertical Timeline) */}
                <div className="text-center mb-20 md:mb-40">
                    <h2 className="text-4xl md:text-6xl font-display font-black text-white mb-4 italic">The Advocacy Roadmap</h2>
                    <p className="text-muted-foreground font-black mb-12 md:mb-20 uppercase tracking-widest text-[10px]">Our proven methodology for generation-to-generation security</p>

                    <div className="max-w-4xl mx-auto relative ps-6 pe-6">
                        {/* Center Line */}
                        <div className="absolute top-0 bottom-0 start-1/2 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-emerald-500 -translate-x-1/2 [dir=rtl]:translate-x-1/2 hidden md:block" />

                        <div className="space-y-10 md:space-y-20">
                            {engagementTimeline.map((item, i) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    className={`relative flex flex-col md:flex-row items-center ${i % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}
                                >
                                    <div className={`w-full md:w-1/2 md:ps-10 md:pe-10 ${i % 2 === 0 ? 'md:text-end' : 'md:text-start'}`}>
                                        <div className="p-5 md:p-8 rounded-2xl md:rounded-[2.5rem] bg-white/[0.02] border border-white/5 shadow-premium shadow-glass relative overflow-hidden group">
                                            <h4 className="text-xl font-black text-white mb-2 italic">{item.title} <span className="opacity-20">#{item.id}</span></h4>
                                            <p className="text-sm text-muted-foreground leading-relaxed font-medium italic">{item.desc}</p>
                                        </div>
                                    </div>

                                    {/* Node Circle */}
                                    <div className="absolute start-1/2 -translate-x-1/2 [dir=rtl]:translate-x-1/2 w-10 h-10 rounded-full bg-purple-600 border-4 border-black flex items-center justify-center text-white text-xs font-black shadow-premium z-20 hidden md:flex">
                                        {item.id}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="mt-24"
                    >
                        <button className="px-10 py-5 rounded-[2rem] bg-purple-600 text-white font-black uppercase tracking-widest text-[11px] shadow-premium hover:scale-105 active:scale-95 transition-all">
                            Start Your Transformation
                        </button>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Solutions;
