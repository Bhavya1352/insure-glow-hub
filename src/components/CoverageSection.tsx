import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, ShieldCheck, Zap, Plus, ChevronRight, X, Umbrella, Car, Lock, ArrowRight } from "lucide-react";

const protectionLayers = [
  {
    id: "health",
    category: "Health & Vitality",
    base: {
      title: "Essential Core",
      desc: "₹10L Cashless Hospitalization + OPD Control.",
      price: "₹499/mo"
    },
    boosters: [
      { id: 'b1', title: "Critical DNA Booster", desc: "32 Critical illnesses covered with 2x payout.", add: "₹149" },
      { id: 'b2', title: "Mental Health layer", desc: "Unlimited psychiatric consultations & therapy.", add: "₹89" }
    ],
    color: "rose",
    icon: Heart
  },
  {
    id: "life",
    category: "Family & Legacy",
    base: {
      title: "SafeGuard Term",
      desc: "₹1.5Cr Pure Protection for your dependents.",
      price: "₹799/mo"
    },
    boosters: [
      { id: 'b3', title: "Income Shield", desc: "Monthly payouts to family for financial stability.", add: "₹249" },
      { id: 'b4', title: "Terminal Illness Top-up", desc: "Instant payout on diagnostic confirmation.", add: "₹199" }
    ],
    color: "violet",
    icon: Umbrella
  },
  {
    id: "asset",
    category: "Assets & Mobility",
    base: {
      title: "DriveZero Core",
      desc: "Full Zero-Depreciation & Engine Protection.",
      price: "₹599/mo"
    },
    boosters: [
      { id: 'b5', title: "RSA Platinum", desc: "24/7 Roadside assistance anywhere in India.", add: "₹99" },
      { id: 'b6', title: "No-Claim Protection", desc: "Maintain bonus even after multiple claims.", add: "₹129" }
    ],
    color: "amber",
    icon: Car
  }
];

const CoverageSection = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>("health");
  const activeData = protectionLayers.find(p => p.id === activeCategory);

  return (
    <section id="coverage" className="py-32 relative overflow-hidden bg-background">
      {/* Background Text Overlay */}
      <div className="absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-white/[0.02] pointer-events-none select-none">
        PROTECTION
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8 mb-12 md:mb-20">
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-purple-500 mb-6"
            >
              <Zap className="w-3 h-3" /> Level Up Your Safety
            </motion.div>
            <h2 className="text-2xl sm:text-3xl md:text-6xl font-display font-black text-white leading-[1.1]">
              The Layered <br />
              <span className="text-gradient-purple">Protection Matrix</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm text-sm leading-relaxed border-s border-white/10 ps-6">
            Generic insurance is a thing of the past. Build your tailored defense with our core layers and specialized boosters.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-12 items-start">
          {/* Category Selector Side */}
          <div className="lg:col-span-4 space-y-4">
            {protectionLayers.map((layer) => {
              const Icon = layer.icon;
              const isActive = activeCategory === layer.id;
              return (
                <button
                  key={layer.id}
                  onClick={() => setActiveCategory(layer.id)}
                  className={`w-full group relative p-5 md:p-8 rounded-2xl md:rounded-[2.5rem] border transition-all text-start overflow-hidden ${isActive
                    ? `bg-${layer.color}-500/10 border-${layer.color}-500/50 shadow-premium`
                    : 'bg-white/[0.02] border-white/5 hover:border-white/10'
                    }`}
                >
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border transition-all ${isActive ? `bg-${layer.color}-500 border-white/20 text-white` : 'bg-white/5 border-white/10 text-muted-foreground'
                        }`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-display font-black text-white">{layer.category}</h3>
                        <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Base Coverage Available</p>
                      </div>
                    </div>
                    <ChevronRight className={`w-5 h-5 transition-transform duration-500 ${isActive ? 'rotate-90 text-white' : 'text-muted-foreground group-hover:translate-x-1'}`} />
                  </div>

                  {isActive && (
                    <motion.div
                      layoutId="activeGlow"
                      className={`absolute inset-0 bg-gradient-to-br from-${layer.color}-500/20 to-transparent opacity-50`}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Matrix View Side */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-[#0a0c10]/40 backdrop-blur-3xl border border-white/10 rounded-2xl md:rounded-[2.5rem] lg:rounded-[3rem] p-4 sm:p-6 md:p-12 relative overflow-hidden"
              >
                {/* Base Layer Section */}
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">Foundation Layer (Active)</span>
                  </div>

                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 md:gap-6 p-4 sm:p-6 md:p-8 rounded-2xl md:rounded-3xl bg-white/5 border border-white/10 shadow-glass">
                    <div>
                      <h4 className="text-xl sm:text-2xl md:text-3xl font-display font-black text-white mb-2">{activeData?.base.title}</h4>
                      <p className="text-muted-foreground max-w-md">{activeData?.base.desc}</p>
                    </div>
                    <div className="text-end">
                      <p className="text-2xl md:text-4xl font-display font-black text-white">{activeData?.base.price}</p>
                      <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mt-1">Starting Premium</p>
                    </div>
                  </div>
                </div>

                {/* Boosters/SYnergy Section */}
                <div>
                  <div className="flex items-center gap-3 mb-8">
                    <Plus className={`w-4 h-4 text-${activeData?.color}-500`} />
                    <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Available Protection Boosters</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {activeData?.boosters.map((booster, idx) => (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        key={booster.id}
                        className="group p-4 md:p-6 rounded-2xl md:rounded-[2.5rem] border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all cursor-pointer relative overflow-hidden"
                      >
                        <div className={`absolute top-0 end-0 w-16 h-16 bg-${activeData?.color}-500 opacity-0 group-hover:opacity-10 blur-2xl transition-opacity`} />

                        <div className="flex justify-between items-start mb-4">
                          <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/5">
                            <ShieldCheck className={`w-5 h-5 text-${activeData?.color}-500`} />
                          </div>
                          <span className="text-sm font-black text-white/90">+{booster.add}</span>
                        </div>
                        <h5 className="text-lg font-bold text-white mb-2 group-hover:text-gradient-purple transition-all">{booster.title}</h5>
                        <p className="text-xs text-muted-foreground leading-relaxed">{booster.desc}</p>

                        <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-[10px] font-black text-white/40 uppercase tracking-widest group-hover:text-white transition-colors">
                          Learn More <ArrowRight className="w-3 h-3" />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Matrix Footer Call to Action */}
                <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-3 rtl:space-x-reverse">
                      {[1, 2, 3].map(i => (
                        <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0a0c10] bg-muted flex items-center justify-center text-[10px] font-bold">U{i}</div>
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground font-medium">Joined by 12,400+ members <br /> this week</p>
                  </div>
                  <button className={`px-10 py-5 rounded-2xl bg-${activeData?.color === 'rose' ? 'rose' : activeData?.color === 'violet' ? 'violet' : 'amber'}-500 text-white font-black text-sm shadow-premium hover:scale-105 active:scale-95 transition-all flex items-center gap-3`}>
                    <Lock className="w-4 h-4" /> Secure my Matrix
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverageSection;
