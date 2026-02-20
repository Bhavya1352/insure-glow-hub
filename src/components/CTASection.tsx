import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Lock, Zap, TrendingUp } from "lucide-react";

const plans = [
  {
    name: "Starter DNA",
    monthly: 499,
    annual: 399,
    desc: "Essential protection core for first-time policyholders.",
    features: [
      "₹5 Lakh Matrix Cover",
      "IRDAI Verified Core",
      "Digital Vault Access",
      "24/7 Phone Support",
    ],
    missing: ["Advocacy Squad", "Dedicated Manager"],
    featured: false,
  },
  {
    name: "Family Matrix",
    monthly: 1299,
    annual: 1039,
    desc: "The standard for modern household security and health.",
    features: [
      "₹25 Lakh Matrix Cover",
      "Full Advocacy Trail",
      "Child Protection Add-on",
      "Instant Cashless",
      "Priority Claim TTR",
      "Global Virtual OPD",
    ],
    missing: [],
    featured: true,
  },
  {
    name: "Elite Shield",
    monthly: 2499,
    annual: 1999,
    desc: "The ultimate protection layer with infinite scalability.",
    features: [
      "₹1 Crore Liquid Cover",
      "Global Hospital Matrix",
      "Dedicated Advocate",
      "Concierge Claim Desk",
      "All Booster Units",
      "Annual DNA Checkup",
    ],
    missing: [],
    featured: false,
  },
];

const CTASection = () => {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="py-32 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-6 relative text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-purple-500 mb-6"
        >
          <Lock className="w-3 h-3" /> Rates Locked for 2024
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-white mb-8"
        >
          Secure your <span className="text-gradient-purple font-italic">Protection Tier</span>
        </motion.h2>

        {/* Pricing Selection Context */}
        <p className="text-muted-foreground max-w-xl mx-auto text-sm leading-relaxed mb-12">
          "Transparent pricing audited by regulatory standards. Select your core tier and lock in your lifelong premium protection."
        </p>

        {/* Billing Toggle */}
        <div className="flex items-center justify-center gap-4 mb-20">
          <span className={`text-[10px] font-black uppercase tracking-widest ${!annual ? 'text-white' : 'text-muted-foreground'}`}>Cycle: Monthly</span>
          <button
            onClick={() => setAnnual(!annual)}
            className="w-14 h-8 rounded-full bg-white/5 border border-white/10 relative p-1 transition-colors hover:border-purple-500/50"
          >
            <motion.div
              animate={{ x: annual ? 24 : 0 }}
              className="w-6 h-6 rounded-full bg-purple-500 shadow-premium"
            />
          </button>
          <span className={`text-[10px] font-black uppercase tracking-widest ${annual ? 'text-white' : 'text-muted-foreground'}`}>
            Cycle: Annual <span className="text-purple-500 ml-1">(-20%)</span>
          </span>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`group relative rounded-[3rem] p-10 border transition-all duration-500 ${plan.featured
                ? 'bg-[#0a0c10] border-purple-500/30'
                : 'bg-white/[0.02] border-white/5 hover:border-white/10'
                }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full bg-purple-500 text-white text-[10px] font-black uppercase tracking-widest shadow-premium">
                  Most Optimized DNA
                </div>
              )}

              <div className="mb-10 text-left">
                <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-[0.1em]">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-display font-black text-white">
                    ₹{annual ? plan.annual.toLocaleString() : plan.monthly.toLocaleString()}
                  </span>
                  <span className="text-muted-foreground text-xs uppercase font-bold tracking-widest">/mo</span>
                </div>
              </div>

              <p className="text-muted-foreground text-xs leading-relaxed mb-10 text-left font-medium">
                {plan.desc}
              </p>

              <ul className="space-y-4 mb-12 text-left">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-xs font-bold text-white/80 uppercase tracking-wide">
                    <ShieldCheck className="w-4 h-4 text-purple-500" />
                    {f}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all ${plan.featured
                ? 'bg-purple-500 text-white shadow-premium'
                : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'
                }`}>
                {plan.featured ? 'Secure My Matrix' : 'Lock Membership'}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Global Protection Lock Banner */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="relative rounded-[4rem] overflow-hidden bg-gradient-to-br from-[#0a0c10] via-[#1a0b2e] to-[#0a0c10] border-2 border-white/5 p-16 md:p-24 text-center group"
        >
          {/* Animated Matrix Grid Background */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

          <div className="relative z-10">
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="w-20 h-20 rounded-[2rem] bg-purple-500/20 border border-purple-500/30 flex items-center justify-center mx-auto mb-10"
            >
              <Lock className="w-10 h-10 text-purple-500" />
            </motion.div>

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-white mb-8 leading-[1.1]">
              Initialize your <br />
              <span className="text-gradient-purple italic">Security DNA</span>
            </h2>

            <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto mb-12 uppercase tracking-[0.2em] font-black">
              2,400,000+ Profiles Active Since 2024
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="w-full sm:w-auto px-12 py-6 rounded-2xl bg-white text-black font-black text-lg shadow-premium hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3">
                <Zap className="w-5 h-5" /> Start Initialization
              </button>
              <button className="w-full sm:w-auto px-12 py-6 rounded-2xl bg-transparent text-white font-black text-lg border border-white/10 hover:bg-white/5 transition-all">
                Request Advocacy
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
