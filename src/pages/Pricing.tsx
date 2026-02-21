import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, Star, HelpCircle, ChevronDown, Plus, Globe, Mail, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
    const [isYearly, setIsYearly] = useState(true);

    const tiers = [
        {
            name: "Elite",
            subtitle: "For comprehensive family protection",
            price: "₹1,999",
            features: ["Unlimited Policies", "Priority Advocacy", "Global Coverage", "Dedicated Advisor"],
            button: "Contact Advisor",
            popular: false,
            color: "blue"
        },
        {
            name: "Shield",
            subtitle: "For active individuals & families",
            price: "₹799",
            features: ["5 Policies", "1hr Claim Response", "Digital Asset Protection", "24/7 Human Support"],
            button: "Start Free Protection",
            popular: true,
            color: "purple"
        },
        {
            name: "Core",
            subtitle: "Essential personal security",
            price: "₹499",
            features: ["1 Policy", "AI Risk Analysis", "Community Support"],
            button: "Get Covered",
            popular: false,
            color: "slate"
        }
    ];

    const testimonials = [
        {
            name: "Thomas Wright",
            role: "Lead Developer",
            text: "The support team is phenomenal. They helped us migrate our legacy infrastructure in record time. It feels like an extension of our team.",
            avatar: "https://i.pravatar.cc/150?u=thomas",
            color: "blue"
        },
        {
            name: "Maria Adrian",
            role: "CTO at Stealth AI",
            text: "The scalability is unmatched. We hit 1M concurrent connections during our launch and OrbitScale didn't even blink. Highly recommend for fast growth.",
            avatar: "https://i.pravatar.cc/150?u=maria",
            color: "orange"
        },
        {
            name: "Raju Sahrawat",
            role: "Project Manager",
            text: "OrbitScale completely transformed how we handle deployment. What used to take days now takes minutes. The SDK is a lifesaver.",
            avatar: "https://i.pravatar.cc/150?u=raju",
            color: "purple"
        }
    ];

    return (
        <div className="pt-24 md:pt-32 pb-16 md:pb-24 bg-background relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-0 inset-x-0 h-full pointer-events-none opacity-20">
                <div className="absolute top-[-10%] start-[-10%] w-[50%] h-[50%] bg-purple-600/10 blur-[150px] rounded-full" />
                <div className="absolute bottom-[20%] end-[-5%] w-[40%] h-[40%] bg-blue-600/10 blur-[150px] rounded-full" />
            </div>
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-12 md:mb-24 relative">
                    <h1 className="text-4xl sm:text-6xl md:text-8xl font-display font-black text-white tracking-tight mb-8 leading-none italic">
                        Transparent <br className="hidden sm:block" />
                        <span className="text-gradient-purple">Security Matrix</span>
                    </h1>
                    <p className="text-muted-foreground text-lg font-medium mb-12 italic">.Legacy protection with zero hidden costs. Automated precision.</p>

                    <div className="flex items-center justify-center gap-4">
                        <span className={`text-[10px] font-black uppercase tracking-widest ${isYearly ? 'text-white' : 'text-white/30'}`}>Yearly</span>
                        <button
                            onClick={() => setIsYearly(!isYearly)}
                            className="w-14 h-7 rounded-full bg-white/5 border border-white/10 p-1 relative transition-all"
                        >
                            <motion.div
                                animate={{ x: isYearly ? 0 : 28 }}
                                className="w-5 h-5 rounded-full bg-purple-500 shadow-glow"
                            />
                        </button>
                        <span className={`text-[10px] font-black uppercase tracking-widest ${!isYearly ? 'text-white' : 'text-white/30'}`}>Monthly</span>
                    </div>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-20 md:mb-40">
                    {tiers.map((tier) => (
                        <div
                            key={tier.name}
                            className={`relative p-6 md:p-10 rounded-2xl md:rounded-[2.5rem] bg-white/[0.02] border flex flex-col ${tier.popular ? 'border-purple-500 shadow-premium md:scale-105 z-10' : 'border-white/5 shadow-glass'}`}
                        >
                            {tier.popular && (
                                <div className="absolute -top-4 start-1/2 -translate-x-1/2 [dir=rtl]:translate-x-1/2 px-4 py-1.5 rounded-full bg-purple-600 text-[9px] font-black uppercase tracking-widest text-white">
                                    Most Popular
                                </div>
                            )}

                            <div className="text-center mb-10">
                                <h3 className="text-3xl font-display font-black text-white mb-2">{tier.name}</h3>
                                <p className="text-xs text-muted-foreground font-medium italic">{tier.subtitle}</p>
                            </div>

                            <div className="text-center mb-10 border-b border-white/5 pb-10">
                                <div className="flex items-center justify-center gap-1">
                                    <span className="text-[10px] font-black text-white/20 uppercase mb-4">PRE</span>
                                    <span className="text-5xl font-display font-black text-white tracking-tighter italic">{tier.price}</span>
                                </div>
                            </div>

                            <div className="mb-12 flex-grow">
                                <button className={`w-full py-4 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all mb-8 shadow-premium ${tier.popular ? 'bg-purple-600 text-white' : 'bg-white text-black'}`}>
                                    {tier.button}
                                </button>

                                <ul className="space-y-4 text-center">
                                    {tier.features.map(f => (
                                        <li key={f} className="flex items-center justify-center gap-3 text-xs font-bold text-muted-foreground italic">
                                            {f} <Check className="w-4 h-4 text-emerald-500" />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Feature Comparison */}
                <div className="mb-20 md:mb-40">
                    <div className="text-center mb-12 md:mb-20">
                        <h2 className="text-4xl md:text-5xl font-display font-black text-white tracking-tight mb-4 italic uppercase">Matrix Breakdown</h2>
                    </div>

                    <div className="overflow-x-auto rounded-[2.5rem] border border-white/5 shadow-premium">
                        <table className="w-full text-start border-collapse bg-[#0a0c10]/40 backdrop-blur-3xl">
                            <thead>
                                <tr className="border-b border-white/5">
                                    <th className="p-8 text-[11px] font-black uppercase tracking-widest text-white/30">Elite</th>
                                    <th className="p-8 text-[11px] font-black uppercase tracking-widest text-purple-600">Shield</th>
                                    <th className="p-8 text-[11px] font-black uppercase tracking-widest text-white/30">Core</th>
                                    <th className="p-8 text-[11px] font-black uppercase tracking-widest text-white">Feature</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm font-bold text-muted-foreground italic">
                                {[
                                    { f: "Active Policies", e: "Unlimited", g: "5", s: "1" },
                                    { f: "Claims Response", e: "< 30 min", g: "1 hr", s: "24-48 hr" },
                                    { f: "Digital Vault", e: "Personalized", g: "Standard", s: "Basic" },
                                    { f: "Advocacy Support", e: <Check className="w-5 h-5 text-emerald-500" />, g: <Check className="w-5 h-5 text-emerald-500/50" />, s: "X" }
                                ].map((row, i) => (
                                    <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                                        <td className="p-8">{row.e}</td>
                                        <td className="p-8 text-purple-600/70">{row.g}</td>
                                        <td className="p-8 text-white/20">{row.s}</td>
                                        <td className="p-8 text-white">{row.f}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Testimonials */}
                <div className="mb-20 md:mb-40">
                    <div className="text-center mb-12 md:mb-20">
                        <h2 className="text-4xl md:text-6xl font-display font-black text-white tracking-tight mb-2 italic">Trusted by the Secure</h2>
                        <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Join thousands of members who protect their legacy with GlowInsure.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((t, i) => (
                            <div key={i} className="p-5 md:p-8 rounded-2xl md:rounded-[2.5rem] bg-white/[0.02] border border-white/5 shadow-premium shadow-glass relative group overflow-hidden">
                                {/* Top Floating Icon */}
                                <div className={`absolute top-6 start-6 w-10 h-10 rounded-xl bg-${t.color}-500 flex items-center justify-center text-white shadow-premium`}>
                                    <Shield className="w-5 h-5" />
                                </div>

                                <p className="text-sm text-muted-foreground leading-relaxed font-medium mb-10 mt-12 italic">
                                    “{t.text}”
                                </p>

                                <div className="flex items-center gap-4">
                                    <img src={t.avatar} className="w-12 h-12 rounded-full border-2 border-white/10 shadow-premium" alt={t.name} />
                                    <div>
                                        <p className="text-sm font-black text-white">{t.name}</p>
                                        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{t.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Logos Bar */}
                <div className="text-center mb-20 md:mb-40 border-t border-white/5 pt-12 md:pt-20">
                    <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.5em] mb-12">Institutional Backing</p>
                    <div className="flex flex-wrap justify-center items-center gap-16 opacity-30 grayscale">
                        {['p', 'C', 'X', 'p', 'O', 'E'].map((l, i) => (
                            <span key={i} className="text-3xl font-display font-black text-white">{l}</span>
                        ))}
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="max-w-4xl mx-auto mb-20 md:mb-40 relative">
                    <h2 className="text-4xl md:text-6xl font-display font-black text-white tracking-tight text-center mb-12 md:mb-20 uppercase italic underline decoration-purple-500/30">Intelligence Hub</h2>
                    <div className="space-y-4">
                        {[
                            "How does the Advocacy Squad work?",
                            "Can I sync multiple family matrices?",
                            "Digital asset protection range?",
                            "Matrix settlement speed?"
                        ].map((q, i) => (
                            <div key={i} className="p-4 md:p-8 rounded-2xl md:rounded-[2.5rem] bg-white/[0.02] border border-white/5 flex items-center justify-between group cursor-pointer hover:border-purple-500/30 hover:shadow-premium transition-all">
                                <div className="flex items-center gap-6">
                                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-purple-500 transition-colors shadow-premium">
                                        <ChevronDown className="w-4 h-4 text-white/40 group-hover:text-black" />
                                    </div>
                                    <p className="text-base font-black text-white italic">{q}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
