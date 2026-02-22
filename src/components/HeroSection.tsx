import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ShieldCheck, Heart, Car, Umbrella, Zap, Lock, Activity, Users } from "lucide-react";
import { useDirection } from "@/contexts/DirectionContext";

const HeroSection = () => {
  const { direction } = useDirection();
  const isRTL = direction === "rtl";
  const [activeWord, setActiveWord] = useState(0);
  const words = ["DNA", "Family", "Health", "Wealth"];

  // Profile Builder State
  const [age, setAge] = useState(25);
  const [coverage, setCoverage] = useState(5000000); // 50L
  const [protectionFocus, setProtectionFocus] = useState("family"); // family, individual, elder

  const calculateRiskScore = () => {
    const ageImpact = age > 45 ? 15 : 5;
    const coverageImpact = coverage > 10000000 ? 20 : 10;
    return Math.min(95, 40 + ageImpact + coverageImpact);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveWord((prev) => (prev + 1) % words.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const getThemeColor = () => {
    switch (protectionFocus) {
      case "family": return "purple";
      case "individual": return "orange";
      case "elder": return "pink";
      default: return "purple";
    }
  };

  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden bg-background pt-24 md:pt-32 pb-12 md:pb-20">
      {/* Dynamic Background Mesh */}
      <div className={`absolute inset-0 opacity-20 pointer-events-none transition-colors duration-1000 ${protectionFocus === 'family' ? 'bg-purple-900/20' :
        protectionFocus === 'individual' ? 'bg-orange-900/20' : 'bg-pink-900/20'
        }`} />

      <div className="relative max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-center">

          {/* Left Column: Protection DNA Input */}
          <div className="lg:col-span-5 text-start order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-muted-foreground mb-8 shadow-glass transition-all"
            >
              <Activity className={`w-4 h-4 text-${getThemeColor()}-500`} />
              Build Your Protection DNA
            </motion.div>

            <h1 className="text-3xl sm:text-4xl md:text-7xl font-display font-black text-white leading-[1] mb-6 md:mb-8">
              Analyze your <br />
              <span className="text-gradient-purple">Security Matrix</span>
            </h1>

            <div className="space-y-6 md:space-y-10 mb-8 md:mb-12">
              {/* Focus Selector */}
              <div className="space-y-4">
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest block">1. I want to protect</label>
                <div className="flex gap-3">
                  {[
                    { id: 'family', label: 'Family', icon: Users },
                    { id: 'individual', label: 'Self', icon: Zap },
                    { id: 'elder', label: 'Elders', icon: Heart }
                  ].map(item => (
                    <button
                      key={item.id}
                      onClick={() => setProtectionFocus(item.id)}
                      className={`flex-1 py-4 rounded-2xl border transition-all flex flex-col items-center gap-2 ${protectionFocus === item.id
                        ? `bg-${getThemeColor()}-500/10 border-${getThemeColor()}-500 text-white shadow-premium`
                        : 'bg-white/5 border-white/5 text-muted-foreground hover:border-white/20'
                        }`}
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="text-[10px] font-black uppercase tracking-widest">{item.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Age DNA */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest">2. Age Profile</label>
                  <span className="text-lg font-display font-black text-white">{age} <span className="text-[10px] text-muted-foreground">YR</span></span>
                </div>
                <input
                  type="range" min="18" max="75" value={age}
                  onChange={(e) => setAge(parseInt(e.target.value))}
                  className={`w-full h-1.5 rounded-full appearance-none cursor-pointer bg-white/10 accent-${getThemeColor()}-500`}
                />
              </div>

              {/* Coverage Layer */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest">3. Protection Layer</label>
                  <span className="text-lg font-display font-black text-white">₹{(coverage / 100000).toFixed(0)} <span className="text-[10px] text-muted-foreground">LAKH</span></span>
                </div>
                <input
                  type="range" min="1000000" max="25000000" step="500000" value={coverage}
                  onChange={(e) => setCoverage(parseInt(e.target.value))}
                  className={`w-full h-1.5 rounded-full appearance-none cursor-pointer bg-white/10 accent-${getThemeColor()}-500`}
                />
              </div>
            </div>

            <button className={`w-full sm:w-auto px-10 py-5 rounded-2xl bg-${getThemeColor()}-500 text-white font-black text-lg shadow-premium hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3`}>
              <Lock className="w-5 h-5" /> Lock Current Rate
            </button>
          </div>

          {/* Right Column: The Security Shield Visualization */}
          <div className="lg:col-span-1 lg:block hidden" /> {/* Spacer */}

          <div className="lg:col-span-6 relative order-1 lg:order-2 flex justify-center lg:justify-end">
            <motion.div
              layout
              className="relative w-full max-w-[280px] sm:max-w-[400px] md:max-w-[500px] mx-auto"
            >
              {/* Outer Glowing Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className={`absolute inset-0 rounded-full border-2 border-dashed border-${getThemeColor()}-500/20 blur-[2px]`}
              />

              {/* Inner Shield Matrix */}
              <div className="relative aspect-square rounded-full bg-[#0a0c10]/40 backdrop-blur-3xl border border-white/5 p-4 sm:p-8 md:p-12 flex items-center justify-center overflow-hidden shadow-premium">
                {/* SVG Shield Visualization */}
                <svg className="w-full h-full relative z-10" viewBox="0 0 200 200">
                  <defs>
                    <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor={protectionFocus === 'family' ? '#a855f7' : protectionFocus === 'individual' ? '#fb923c' : '#f472b6'} />
                      <stop offset="100%" stopColor="#0a0c10" />
                    </linearGradient>
                  </defs>

                  {/* Hexagon Mesh Pattern */}
                  <pattern id="hexagons" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(30)">
                    <path d="M5 0 L10 2.5 L10 7.5 L5 10 L0 7.5 L0 2.5 Z" fill="none" stroke="white" strokeWidth="0.1" strokeOpacity="0.2" />
                  </pattern>
                  <circle cx="100" cy="100" r="100" fill="url(#hexagons)" opacity="0.5" />

                  {/* Dynamic Protection Shield Path */}
                  <motion.path
                    initial={false}
                    animate={{
                      d: `M100 20 C ${100 + calculateRiskScore()} 20, ${180} ${100 - calculateRiskScore()}, 100 180 C ${20} ${100 - calculateRiskScore()}, ${100 - calculateRiskScore()} 20, 100 20`
                    }}
                    transition={{ type: "spring", stiffness: 50, damping: 15 }}
                    fill="url(#shieldGradient)"
                    fillOpacity="0.1"
                    stroke={protectionFocus === 'family' ? '#a855f7' : protectionFocus === 'individual' ? '#fb923c' : '#f472b6'}
                    strokeWidth="2"
                    strokeDasharray="5,5"
                  />

                  {/* Center Node */}
                  <circle cx="100" cy="100" r="40" fill="#000" fillOpacity="0.5" stroke="white" strokeWidth="0.2" />
                </svg>

                {/* Real-time Stat Overlays */}
                <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
                  <motion.div
                    key={calculateRiskScore()}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center"
                  >
                    <span className="text-2xl sm:text-4xl md:text-6xl font-display font-black text-white">{calculateRiskScore()}%</span>
                    <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em] mt-2">Coverage DNA</p>
                  </motion.div>
                </div>

                {/* Floating Benefit Nodes */}
                <div className="absolute inset-0 pointer-events-none">
                  {[
                    { icon: ShieldCheck, label: "IRDAI SECURED", pos: "top-10 start-1/2 -translate-x-1/2 rtl:translate-x-1/2" },
                    { icon: Zap, label: "INSTANT ISSUANCE", pos: "bottom-10 start-10" },
                    { icon: Lock, label: "ENCRYPTED VAULT", pos: "bottom-10 end-10" }
                  ].map((node, i) => (
                    <motion.div
                      key={node.label}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + (i * 0.1) }}
                      className={`absolute ${node.pos} flex flex-col items-center gap-1`}
                    >
                      <div className="w-8 h-8 rounded-lg bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center">
                        <node.icon className={`w-4 h-4 text-${getThemeColor()}-500`} />
                      </div>
                      <span className="text-[7px] font-black text-white/40 tracking-widest">{node.label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Live Quote Indicator */}
              <motion.div
                className="absolute -bottom-8 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 w-[90%] max-w-[300px] py-3 px-4 md:py-4 md:px-6 rounded-xl md:rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 flex justify-between items-center shadow-premium"
              >
                <div>
                  <p className="text-[8px] font-black text-muted-foreground uppercase tracking-widest">Est. Premium</p>
                  <p className="text-2xl font-display font-black text-white">₹{((age * 20) + (coverage / 100000) * 10).toLocaleString()}<span className="text-xs text-muted-foreground">/mo</span></p>
                </div>
                <div className={`w-10 h-10 rounded-xl bg-${getThemeColor()}-500/20 flex items-center justify-center`}>
                  <Zap className={`w-5 h-5 text-${getThemeColor()}-500`} />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
