import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronDown, Shield, X } from "lucide-react";
import { Link } from "react-router-dom";

const tiers = [
    {
        name: "Basic",
        subtitle: "For individuals starting out",
        monthlyPrice: "₹0",
        yearlyPrice: "₹0",
        isFreemium: true,
        features: ["1 Active Policy", "AI Risk Analysis", "Community Support", "Digital Policy PDF"],
        button: "Get Started Free",
        popular: false,
        cta: "/signup",
    },
    {
        name: "Shield",
        subtitle: "For individuals & families",
        monthlyPrice: "₹999",
        yearlyPrice: "₹799",
        isFreemium: false,
        features: ["5 Active Policies", "1hr Claim Response", "WhatsApp Alerts", "24/7 Human Support", "Family Pool Coverage"],
        button: "Start Free Trial",
        popular: true,
        cta: "/signup",
    },
    {
        name: "Enterprise",
        subtitle: "For large organizations",
        monthlyPrice: "Custom",
        yearlyPrice: "Custom",
        isFreemium: false,
        features: ["Unlimited Policies", "30-min SLA Response", "Dedicated Advisor", "Custom IRDAI Reports", "Group HR Dashboard"],
        button: "Contact Sales",
        popular: false,
        cta: "/contact",
    },
];

const comparison = [
    { feature: "Active Policies", basic: "1", shield: "5", enterprise: "Unlimited" },
    { feature: "Claim Response", basic: "24-48 hr", shield: "1 hr", enterprise: "30 min" },
    { feature: "Human Support", basic: "Community", shield: "24/7 Chat", enterprise: "Phone + Chat" },
    { feature: "Dedicated Advisor", basic: false, shield: false, enterprise: true },
    { feature: "IRDAI Compliance Reports", basic: false, shield: true, enterprise: true },
];

const testimonials = [
    { name: "Priya Mehta", role: "Senior Engineer, Bengaluru", text: "Claimed ₹8L in under 48 hours after surgery. Zero follow-ups. The fastest insurance I've ever experienced.", color: "purple" },
    { name: "Arjun Kapoor", role: "Founder, Delhi NCR", text: "The scalability is unmatched. We enrolled our team of 40 in one morning. Pricing was 30% better than our broker.", color: "orange" },
    { name: "Neha Sharma", role: "HR Director, Mumbai", text: "The support team is incredible. They helped us migrate our entire group policy in a single afternoon.", color: "blue" },
];

const faqs = [
    { q: "Can I cancel my plan at any time?", a: "Yes. Every plan is month-to-month with no cancellation fees. Your coverage continues until the end of the billing cycle." },
    { q: "What happens if I exceed my policy limit?", a: "Our team will immediately notify you and help you upgrade your plan or add a rider to ensure continued coverage." },
    { q: "Do you offer discounts for families or groups?", a: "Yes. Family pool plans get up to 20% off. Group plans for 10+ members get custom pricing with a dedicated advisor." },
    { q: "Can I switch plans later?", a: "Absolutely. You can upgrade or downgrade at any time. Pro-rated credits are applied automatically." },
];

const Pricing = () => {
    const [isYearly, setIsYearly] = useState(true);
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <div className="pt-24 md:pt-32 pb-0 bg-[#050608] relative overflow-hidden">
            {/* Background glows */}
            <div className="absolute top-0 start-1/2 w-[60%] h-[50%] bg-purple-600/6 blur-[200px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-14 md:mb-20 relative">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl sm:text-6xl md:text-7xl font-display font-black text-white tracking-tighter leading-[0.9] mb-6"
                    >
                        Simple, transparent pricing
                    </motion.h1>
                    <p className="text-muted-foreground text-lg mb-10">Start for free, scale as you grow. No hidden fees.</p>

                    {/* Toggle */}
                    <div className="inline-flex items-center gap-4 p-1 rounded-full bg-white/5 border border-white/10">
                        <button
                            onClick={() => setIsYearly(false)}
                            className={`px-5 py-2 rounded-full text-[11px] font-black uppercase tracking-widest transition-all ${!isYearly ? 'bg-white text-black' : 'text-white/40'}`}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => setIsYearly(true)}
                            className={`px-5 py-2 rounded-full text-[11px] font-black uppercase tracking-widest transition-all flex items-center gap-2 ${isYearly ? 'bg-white text-black' : 'text-white/40'}`}
                        >
                            Yearly
                            {isYearly && <span className="bg-emerald-500 text-white text-[8px] px-2 py-0.5 rounded-full font-black">Save 20%</span>}
                        </button>
                    </div>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 md:mb-32">
                    {tiers.map((tier, i) => (
                        <motion.div
                            key={tier.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className={`relative flex flex-col p-8 rounded-[2rem] border transition-all ${tier.popular ? 'border-purple-500 bg-[#0a0c10] md:scale-105 z-10 shadow-[0_0_40px_rgba(168,85,247,0.15)]' : 'border-white/5 bg-[#0a0c10]'}`}
                        >
                            {tier.popular && (
                                <div className="absolute -top-4 start-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full bg-purple-600 text-[9px] font-black uppercase tracking-widest text-white whitespace-nowrap">
                                    Most Popular
                                </div>
                            )}
                            <div className="mb-6">
                                <h3 className="text-2xl font-display font-black text-white">{tier.name}</h3>
                                <p className="text-white/40 text-xs mt-1">{tier.subtitle}</p>
                            </div>

                            <div className="mb-8 pb-8 border-b border-white/5">
                                <div className="flex items-end gap-1">
                                    <span className="text-5xl font-display font-black text-white tracking-tighter">
                                        {isYearly ? tier.yearlyPrice : tier.monthlyPrice}
                                    </span>
                                    {!tier.isFreemium && tier.monthlyPrice !== "Custom" && (
                                        <span className="text-white/30 text-xs mb-2 font-black">/mo</span>
                                    )}
                                </div>
                            </div>

                            <Link
                                to={tier.cta}
                                className={`w-full py-4 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all text-center mb-8 ${tier.popular ? 'bg-purple-600 text-white hover:bg-purple-500' : 'bg-white text-black hover:bg-slate-100'}`}
                            >
                                {tier.button}
                            </Link>

                            <ul className="space-y-3 flex-1">
                                {tier.features.map(f => (
                                    <li key={f} className="flex items-center gap-3 text-xs text-white/60">
                                        <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                                        {f}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Feature Comparison */}
                <div className="mb-20 md:mb-32">
                    <h2 className="text-4xl md:text-5xl font-display font-black text-white text-center mb-14 tracking-tight">Feature Comparison</h2>
                    <div className="rounded-[2rem] border border-white/5 overflow-hidden">
                        <table className="w-full text-start border-collapse">
                            <thead>
                                <tr className="border-b border-white/5 bg-white/[0.02]">
                                    <th className="px-8 py-5 text-[11px] font-black uppercase tracking-widest text-white/40 text-start">Feature</th>
                                    <th className="px-8 py-5 text-[11px] font-black uppercase tracking-widest text-white/40 text-center">Basic</th>
                                    <th className="px-8 py-5 text-[11px] font-black uppercase tracking-widest text-purple-400 text-center">Shield</th>
                                    <th className="px-8 py-5 text-[11px] font-black uppercase tracking-widest text-white/40 text-center">Enterprise</th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparison.map((row, i) => (
                                    <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                                        <td className="px-8 py-5 text-sm font-bold text-white">{row.feature}</td>
                                        <td className="px-8 py-5 text-sm text-white/40 text-center">
                                            {typeof row.basic === 'boolean' ? (row.basic ? <Check className="w-4 h-4 text-emerald-500 mx-auto" /> : <X className="w-4 h-4 text-white/10 mx-auto" />) : row.basic}
                                        </td>
                                        <td className="px-8 py-5 text-sm text-purple-300 text-center font-bold">
                                            {typeof row.shield === 'boolean' ? (row.shield ? <Check className="w-4 h-4 text-emerald-500 mx-auto" /> : <X className="w-4 h-4 text-white/10 mx-auto" />) : row.shield}
                                        </td>
                                        <td className="px-8 py-5 text-sm text-white/60 text-center">
                                            {typeof row.enterprise === 'boolean' ? (row.enterprise ? <Check className="w-4 h-4 text-emerald-500 mx-auto" /> : <X className="w-4 h-4 text-white/10 mx-auto" />) : row.enterprise}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Testimonials */}
                <div className="mb-20 md:mb-32">
                    <div className="text-center mb-14">
                        <h2 className="text-4xl md:text-5xl font-display font-black text-white tracking-tight mb-3">Trusted by policyholders like you</h2>
                        <p className="text-muted-foreground text-sm">Join thousands of satisfied members who chose OrbitScale.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {testimonials.map((t, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="relative p-8 rounded-[2rem] bg-[#0a0c10] border border-white/5 hover:border-white/10 transition-all"
                            >
                                <div className={`absolute top-6 start-6 w-10 h-10 rounded-xl bg-${t.color}-500 flex items-center justify-center text-white shadow-lg`}>
                                    <Shield className="w-5 h-5" />
                                </div>
                                <p className="text-white/60 text-sm leading-relaxed mt-14 mb-8 italic">"{t.text}"</p>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white font-black text-sm flex-shrink-0">
                                        {t.name[0]}
                                    </div>
                                    <div>
                                        <p className="text-white font-bold text-sm">{t.name}</p>
                                        <p className="text-white/30 text-[10px]">{t.role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Logos Bar */}
                <div className="text-center border-t border-white/5 pt-16 mb-20 md:mb-32">
                    <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.5em] mb-10">Trusted by industry leaders</p>
                    <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-30">
                        {['HDFC Ergo', 'Star Health', 'Bajaj', 'Tata AIG', 'Max Life', 'ICICI'].map(brand => (
                            <span key={brand} className="text-sm font-black text-white uppercase tracking-widest">{brand}</span>
                        ))}
                    </div>
                </div>

                {/* FAQ */}
                <div className="max-w-3xl mx-auto mb-24 md:mb-32">
                    <h2 className="text-4xl md:text-5xl font-display font-black text-white text-center tracking-tight mb-14">Frequently Asked Questions</h2>
                    <div className="space-y-3">
                        {faqs.map((faq, i) => (
                            <div
                                key={i}
                                className="rounded-2xl bg-[#0a0c10] border border-white/5 hover:border-white/10 transition-all overflow-hidden cursor-pointer"
                                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                            >
                                <div className="flex items-center justify-between px-8 py-5">
                                    <p className="text-white font-bold text-sm">{faq.q}</p>
                                    <motion.div
                                        animate={{ rotate: openFaq === i ? 180 : 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 ms-4"
                                    >
                                        <ChevronDown className="w-4 h-4 text-white/40" />
                                    </motion.div>
                                </div>
                                <AnimatePresence>
                                    {openFaq === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <p className="px-8 pb-6 text-white/40 text-sm leading-relaxed">{faq.a}</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
