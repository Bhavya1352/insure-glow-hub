import { motion } from "framer-motion";
import { Shield, Target, Zap, HeartHandshake, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const team = [
    { name: "Arjun Mehta", role: "CEO & Co-founder", prev: "ex-Bajaj Allianz", initials: "AM" },
    { name: "Priya Sharma", role: "Chief Actuary", prev: "ex-LIC India", initials: "PS" },
    { name: "Rahul Gupta", role: "CTO", prev: "ex-Razorpay", initials: "RG" },
    { name: "Neha Joshi", role: "Head of Claims", prev: "ex-Star Health", initials: "NJ" },
];

const values = [
    { icon: Zap, title: "Act Fast", desc: "We believe every claim minute matters. Our systems are built to respond in hours, not weeks. Speed is our north star." },
    { icon: HeartHandshake, title: "Family First", desc: "Every decision we make is through the lens of the policyholder and their family. We work as your advocate, always." },
    { icon: Shield, title: "Stay Humble", desc: "We are lifelong learners in a complex industry. We listen, adapt, and never stop improving our coverage and advocacy." },
];

const timeline = [
    { year: "2020", title: "The Inception", desc: "OrbitScale launched with a mission to make insurance claims digital-first in India, partnering with 3 initial insurers." },
    { year: "2021", title: "IRDAI License", desc: "Received full IRDAI broker license. Expanded to 18 coverage partners. First ₹100Cr in claims processed." },
    { year: "2022", title: "AI Claims Engine", desc: "Launched our proprietary AI claims engine cutting average settlement from 30 days to 14 hours." },
    { year: "2024", title: "50,000 Families & Beyond", desc: "Crossed 50,000 active policyholders. Building the future of protection for every Indian family — one policy at a time." },
];

const About = () => {
    return (
        <div className="bg-[#050608] pt-24 md:pt-36 pb-0">

            {/* Hero */}
            <section className="text-center px-6 mb-20 md:mb-28">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-[10px] font-black uppercase tracking-widest text-purple-400 mb-8"
                >
                    Our Mission & Story
                </motion.div>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black text-white leading-[0.9] tracking-tighter mb-8 max-w-5xl mx-auto"
                >
                    Protecting the next generation<br />
                    <span className="text-gradient-purple">of Indian families.</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
                >
                    We believe insurance claims should be invisible — settled instantly, without paperwork, without follow-up calls. OrbitScale is building that future.
                </motion.p>
            </section>

            {/* Stats Bar */}
            <section className="border-y border-white/5 py-12 mb-20 md:mb-32">
                <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {[
                        { val: "50k+", label: "Families Protected" },
                        { val: "99.99%", label: "Uptime SLA" },
                        { val: "₹2.4B+", label: "Claims Settled" },
                        { val: "24/7", label: "Human Support" },
                    ].map((s, i) => (
                        <motion.div
                            key={s.label}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <p className="text-3xl md:text-4xl font-display font-black text-purple-400 mb-1">{s.val}</p>
                            <p className="text-[10px] font-black text-white/30 uppercase tracking-widest">{s.label}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Meet the Team */}
            <section className="max-w-7xl mx-auto px-6 mb-24 md:mb-40 text-center">
                <div className="mb-16">
                    <p className="text-[10px] font-black uppercase tracking-widest text-purple-400 mb-4">The Outline</p>
                    <h2 className="text-4xl md:text-6xl font-display font-black text-white tracking-tight mb-4">Meet the builders</h2>
                    <p className="text-muted-foreground text-sm max-w-xl mx-auto">
                        Our team works day and night to build and scale your protection.
                    </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {team.map((member, i) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex flex-col items-center group"
                        >
                            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500/30 to-indigo-600/30 border border-white/10 flex items-center justify-center text-white text-xl font-black mb-4 group-hover:scale-110 transition-transform group-hover:border-purple-500/40">
                                {member.initials}
                            </div>
                            <h4 className="text-white font-display font-black text-base">{member.name}</h4>
                            <p className="text-white/40 text-[10px] uppercase tracking-widest font-black mt-1">{member.role}</p>
                            <span className="mt-3 px-3 py-1 rounded-full bg-white/5 text-[9px] font-black text-white/20 uppercase tracking-widest">{member.prev}</span>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* What Drives Us Forward */}
            <section className="border-t border-white/5 py-24 md:py-32 bg-[#050608]">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <p className="text-[10px] font-black uppercase tracking-widest text-purple-400 mb-4">Our DNA</p>
                    <h2 className="text-4xl md:text-5xl font-display font-black text-white tracking-tight mb-16">
                        What drives us forward
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {values.map((v, i) => (
                            <motion.div
                                key={v.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="p-8 rounded-[2rem] bg-[#0a0c10] border border-white/5 hover:border-purple-500/20 transition-all text-start"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-purple-900/30 text-purple-400 flex items-center justify-center mb-6">
                                    <v.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-white font-display font-black text-xl mb-3">{v.title}</h3>
                                <p className="text-white/40 text-sm leading-relaxed">{v.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Journey — Timeline */}
            <section className="border-t border-white/5 py-24 md:py-32 bg-[#040507]">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-display font-black text-white tracking-tight mb-4">Our Journey</h2>
                        <p className="text-muted-foreground text-sm">From a garage team to a national platform.</p>
                    </div>
                    <div className="relative">
                        {/* Vertical line */}
                        <div className="absolute start-[7px] top-2 bottom-2 w-px bg-white/5" />
                        <div className="space-y-12">
                            {timeline.map((item, i) => (
                                <motion.div
                                    key={item.year}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex gap-8 ps-8 relative"
                                >
                                    {/* Dot */}
                                    <div className={`absolute start-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 ${i === timeline.length - 1 ? 'border-purple-500 bg-purple-500' : 'border-white/20 bg-[#040507]'}`} />
                                    <div>
                                        <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">{item.year}</span>
                                        <h3 className="text-white font-display font-black text-xl mt-1 mb-2">{item.title}</h3>
                                        <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Footer Strip */}
            <section className="border-t border-white/5 py-20 px-6 text-center bg-[#050608]">
                <h2 className="text-3xl md:text-5xl font-display font-black text-white mb-6">
                    Ready to protect what<br /><span className="text-gradient-purple">matters most?</span>
                </h2>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                    <Link to="/signup" className="px-10 py-4 rounded-[2rem] bg-purple-600 text-white font-black uppercase tracking-widest text-[11px] hover:scale-105 transition-all">
                        Get Free Quote
                    </Link>
                    <Link to="/solutions" className="px-10 py-4 rounded-[2rem] bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest text-[11px] hover:bg-white/10 transition-all flex items-center gap-2">
                        View Plans <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default About;
