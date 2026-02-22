import { motion } from "framer-motion";
import { Quote, Star, ShieldCheck, Activity, Zap, TrendingUp } from "lucide-react";

const settlementStories = [
  {
    amount: "₹18,40,000",
    time: "14 Hours",
    quote: "When my father needed emergency cardiac surgery, OrbitScale processed our claim before he even reached the OT. The advocacy squad handled every hospital query.",
    name: "Rahul Sharma",
    plan: "Family Elite Matrix",
    category: "Health Claim",
    color: "rose",
  },
  {
    amount: "₹1,20,000",
    time: "48 Mins",
    quote: "Minor accident on the highway, expected days of survey. OrbitScale's AI survey settled it in under an hour. Walked away with cashless repairs.",
    name: "Priya Krishnan",
    plan: "DriveZero Core",
    category: "Motor Claim",
    color: "sky",
  },
  {
    amount: "₹7,25,000",
    time: "2 Days",
    quote: "Monsoon floods caused severe structural damage to my office. The settlement was handled professionally, allowing us to resume business instantly.",
    name: "Arjun Mehta",
    plan: "Asset Shield Layer",
    category: "Business Claim",
    color: "violet",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-32 relative overflow-hidden bg-background">
      {/* Background Glow */}
      <div className="absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-purple-500 mb-6"
        >
          <TrendingUp className="w-3 h-3" /> Real Impact
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-4xl md:text-6xl font-display font-black text-white mb-6"
        >
          Resolved Claims & <br />
          <span className="text-gradient-purple">Settlement Stories</span>
        </motion.h2>

        <p className="text-muted-foreground max-w-xl mx-auto text-sm leading-relaxed mb-20 italic">
          "Numbers build trust, but stories prove our advocacy DNA. See how we've stood by our members during critical hours."
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-start">
          {settlementStories.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-[#0a0c10]/60 backdrop-blur-xl border border-white/5 rounded-2xl md:rounded-[3rem] p-6 md:p-10 hover:bg-white/[0.04] transition-all hover:border-white/10 overflow-hidden"
            >
              {/* Claim Amount Badge */}
              <div className="flex justify-between items-start mb-6 md:mb-10">
                <div className="space-y-1">
                  <p className={`text-[10px] font-black text-${item.color}-500 uppercase tracking-widest`}>Claim Settled</p>
                  <h3 className="text-xl md:text-3xl font-display font-black text-white">{item.amount}</h3>
                </div>
                <div className={`w-14 h-14 rounded-2xl bg-${item.color}-500/10 flex items-center justify-center border border-${item.color}-500/20`}>
                  <ShieldCheck className={`w-8 h-8 text-${item.color}-500`} />
                </div>
              </div>

              <div className="relative mb-10">
                <Quote className="absolute -top-4 -start-4 w-12 h-12 text-white/5" />
                <p className="text-muted-foreground text-sm leading-relaxed relative z-10 italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-8 border-t border-white/5 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-white text-sm">{item.name}</h4>
                  <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mt-1">{item.plan}</p>
                </div>
                <div className="text-end">
                  <div className="flex items-center gap-1.5 justify-end">
                    <Zap className="w-3 h-3 text-emerald-500" />
                    <span className="text-xs font-black text-white">{item.time}</span>
                  </div>
                  <p className="text-[8px] font-black text-muted-foreground uppercase tracking-widest mt-1">Resolution TTR</p>
                </div>
              </div>

              {/* Decorative Corner Glow */}
              <div className={`absolute bottom-0 end-0 w-32 h-32 bg-${item.color}-500 blur-3xl opacity-0 group-hover:opacity-10 transition-opacity`} />
            </motion.div>
          ))}
        </div>

        {/* Global CSR Metric Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 md:mt-20 flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-12 border-t border-white/5 pt-10 md:pt-12"
        >
          <div className="text-center">
            <p className="text-4xl font-display font-black text-white">99.2%</p>
            <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mt-2">Claim Settlement Ratio</p>
          </div>
          <div className="hidden md:block w-px h-12 bg-white/10" />
          <div className="text-center">
            <p className="text-4xl font-display font-black text-white">2.4 Hours</p>
            <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mt-2">Avg. Health TTR</p>
          </div>
          <div className="hidden md:block w-px h-12 bg-white/10" />
          <div className="text-center">
            <p className="text-4xl font-display font-black text-white">₹2,400 Cr+</p>
            <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mt-2">Claims Disbursed</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
