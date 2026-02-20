import { motion } from "framer-motion";
import { BadgeCheck, Award, Globe, Landmark, ShieldCheck, Activity, Users } from "lucide-react";

const trustMarkers = [
  { label: "IRDAI REG. #142", desc: "Government Licensed", icon: ShieldCheck, color: "emerald" },
  { label: "99.2% CSR", desc: "Settlement Ratio", icon: Activity, color: "purple" },
  { label: "ISO 27001", desc: "Data Security DNA", icon: Award, color: "rose" },
  { label: "2M+ SECURED", desc: "Active Families", icon: Users, color: "sky" },
];

const partners = ["HDFC ERGO", "LIC", "STAR HEALTH", "ICICI LOMBARD", "BAJAJ ALLIANZ", "TATA AIG"];

const TrustBar = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Regulatory Vault Container */}
        <div className="bg-[#0a0c10]/40 backdrop-blur-2xl border border-white/5 rounded-[3rem] p-8 md:p-12 shadow-premium relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 blur-3xl rounded-full -mr-32 -mt-32" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {trustMarkers.map((marker, i) => (
              <motion.div
                key={marker.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-5"
              >
                <div className={`w-14 h-14 rounded-2xl bg-${marker.color === 'emerald' ? 'emerald' : marker.color === 'rose' ? 'rose' : marker.color === 'sky' ? 'sky' : 'purple'}-500/10 flex items-center justify-center border border-${marker.color === 'emerald' ? 'emerald' : marker.color === 'rose' ? 'rose' : marker.color === 'sky' ? 'sky' : 'purple'}-500/20`}>
                  <marker.icon className={`w-6 h-6 text-${marker.color === 'emerald' ? 'emerald' : marker.color === 'rose' ? 'rose' : marker.color === 'sky' ? 'sky' : 'purple'}-500`} />
                </div>
                <div>
                  <h4 className="text-xl font-display font-black text-white">{marker.label}</h4>
                  <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">{marker.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 pt-10 border-t border-white/5">
            <p className="text-center text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground/40 mb-10">
              Trusted Carriers & Underwriters
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
              {partners.map((p) => (
                <span key={p} className="text-sm font-display font-black tracking-widest text-white hover:text-purple-500 transition-colors cursor-default">
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Floating IRDAI DNA Badge */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-6 left-1/2 -translate-x-1/2 px-6 py-2 rounded-xl bg-background border border-white/10 shadow-premium flex items-center gap-3 z-20"
        >
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[10px] font-black text-white uppercase tracking-widest leading-none">IRDAI Certified DNA • 2024 Compliance</span>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustBar;
