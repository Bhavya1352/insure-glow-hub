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
        { title: "DevOps Engineering", icon: Terminal, desc: "Automate your CI/CD processes, implement IaC (Terraform, Pulumi), and optimize your deployment workflows.", color: "blue" },
        { title: "Security Audits", icon: ShieldCheck, desc: "Identify vulnerabilities before they become threats. Comprehensive penetration testing and compliance reviews (SOC2, HIPAA).", color: "rose" },
        { title: "Cloud Migration", icon: Cloud, desc: "Seamlessly move your legacy applications to the cloud with zero downtime. We handle the complexity of re-platforming.", color: "purple" },
        { title: "Team Training", icon: Users, desc: "Upskill your team with modern workshops on Kubernetes, Docker, and Cloud Native best practices. Hands-on labs included.", color: "emerald" },
        { title: "Database Management", icon: Database, desc: "Expert tuning for PostgreSQL, MySQL, and Redis. High availability setup, disaster recovery planning, and performance optimization.", color: "amber" },
        { title: "Cost Optimization", desc: "Stop paying for idle resources. We analyze your cloud bill and implement auto-scaling strategies to reduce costs by up to 40%.", icon: TrendingUp, color: "indigo" }
    ];

    const workflowSteps = [
        { id: 4, title: "Optimization", desc: "Continuous monitoring and improvement of performance." },
        { id: 3, title: "Execution", desc: "Our engineers implement the blueprint side-by-side with your team." },
        { id: 2, title: "Strategy", desc: "We design a custom roadmap and architectural plan." },
        { id: 1, title: "Discovery", desc: "We analyze your current infrastructure, identify bottlenecks." }
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
        <div className="pt-24 md:pt-32 pb-16 md:pb-24 bg-[#f8fafc]">
            <div className="max-w-7xl mx-auto px-6">
                {/* Solutions Hero */}
                <div className="text-center mb-16 md:mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="px-3 py-1 rounded-md bg-purple-100 border border-purple-200 text-[10px] font-black uppercase tracking-widest text-purple-600 mb-6 inline-block"
                    >
                        Our Expertise
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl sm:text-5xl md:text-7xl font-display font-black text-[#0f172a] leading-[1.1] tracking-tight mb-8"
                    >
                        .World-class engineering services
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto font-medium"
                    >
                        We don't just provide a platform; we partner with you to build scalable, secure, and efficient cloud infrastructure.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="mt-10"
                    >
                        <button className="px-8 py-4 rounded-xl bg-[#0f172a] text-white font-bold text-sm shadow-premium hover:scale-105 active:scale-95 transition-all">
                            Book a Consultation
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
                            className="p-6 md:p-10 rounded-2xl md:rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all group"
                        >
                            <div className={`w-14 h-14 rounded-2xl bg-${service.color}-50 flex items-center justify-center text-${service.color}-500 mb-8 transition-transform group-hover:scale-110`}>
                                <service.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-display font-bold text-[#0f172a] mb-4">{service.title}</h3>
                            <p className="text-slate-500 text-sm leading-relaxed mb-8">{service.desc}</p>
                            <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-bold text-purple-600 hover:gap-3 transition-all">
                                Learn more <ArrowRight className="w-4 h-4" />
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* How We Work Section (Reverse Step Grid) */}
                <div className="text-center mb-20 md:mb-40">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-[#0f172a] mb-4">How we work</h2>
                    <p className="text-slate-500 font-medium mb-12 md:mb-20 uppercase tracking-widest text-xs">A proven strategy for high growth</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 relative">
                        {/* Connector Line */}
                        <div className="absolute top-1/2 left-0 w-full h-px bg-slate-100 -translate-y-1/2 hidden md:block" />

                        {workflowSteps.map((step, i) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.1 }}
                                className="relative z-10 bg-white p-5 md:p-8 rounded-2xl md:rounded-[2rem] border border-slate-100 shadow-sm text-center"
                            >
                                <div className="w-12 h-12 rounded-full bg-[#0f172a] text-white flex items-center justify-center text-lg font-black mx-auto mb-6">
                                    {step.id}
                                </div>
                                <h4 className="text-lg font-bold text-[#0f172a] mb-2">{step.title}</h4>
                                <p className="text-xs text-slate-500 leading-relaxed px-4">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* How we work with you (Vertical Timeline) */}
                <div className="text-center mb-20 md:mb-40">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-[#0f172a] mb-4">How we work with you</h2>
                    <p className="text-slate-500 font-medium mb-12 md:mb-20 uppercase tracking-widest text-xs">Our proven methodology for successful cloud transformations</p>

                    <div className="max-w-4xl mx-auto relative px-6">
                        {/* Center Line */}
                        <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-emerald-500 -translate-x-1/2 hidden md:block" />

                        <div className="space-y-10 md:space-y-20">
                            {engagementTimeline.map((item, i) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    className={`relative flex flex-col md:flex-row items-center ${i % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}
                                >
                                    <div className={`w-full md:w-1/2 md:px-10 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                        <div className="p-5 md:p-8 rounded-2xl md:rounded-[2.5rem] bg-white border border-slate-100 shadow-lg relative overflow-hidden group">
                                            <h4 className="text-xl font-bold text-[#0f172a] mb-2">{item.title} .{item.id}</h4>
                                            <p className="text-sm text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                                        </div>
                                    </div>

                                    {/* Node Circle */}
                                    <div className="absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#8b5cf6] border-4 border-white flex items-center justify-center text-white text-xs font-black shadow-lg z-20 hidden md:flex">
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
