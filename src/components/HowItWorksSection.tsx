import { motion } from "framer-motion";
import { ClipboardList, CreditCard, ShieldCheck } from "lucide-react";

const steps = [
  {
    Icon: ClipboardList,
    step: "01",
    title: "Answer a Few Questions",
    desc: "Tell us about yourself, your family, and what you want to protect. Our smart engine personalizes plans for you — takes under 60 seconds.",
    tag: "60 seconds",
    accent: "text-sky-400",
    accentBg: "bg-sky-400/10",
    glow: "shadow-[0_0_24px_hsl(199_89%_48%/0.2)]",
  },
  {
    Icon: CreditCard,
    step: "02",
    title: "Pick a Plan & Pay Securely",
    desc: "Compare transparent plans with no hidden clauses. Pay via UPI, card, netbanking, or EMI. 256-bit encrypted from end to end.",
    tag: "100% secure",
    accent: "text-primary",
    accentBg: "bg-primary/10",
    glow: "shadow-[0_0_24px_hsl(158_64%_40%/0.2)]",
  },
  {
    Icon: ShieldCheck,
    step: "03",
    title: "Stay Protected, Always",
    desc: "Receive instant digital policy. Raise claims in minutes via app. A dedicated claim manager handles everything — from filing to settlement.",
    tag: "Instant policy",
    accent: "text-amber-400",
    accentBg: "bg-amber-400/10",
    glow: "shadow-[0_0_24px_hsl(43_96%_56%/0.2)]",
  },
];

const timelineSteps = [
  {
    number: "1",
    title: "Policy Discovery .1",
    desc: "We analyze your risk profile and family needs to create a detailed protection roadmap.",
    side: "right"
  },
  {
    number: "2",
    title: "AI Risk Assessment .2",
    desc: "Our proprietary algorithms analyze millions of data points to offer the most competitive premiums.",
    side: "left"
  },
  {
    number: "3",
    title: "Digital Implementation .3",
    desc: "Your policy is issued instantly with zero paperwork and stored in your secure digital vault.",
    side: "right"
  },
  {
    number: "4",
    title: "Claims Advocacy .4",
    desc: "Dedicated support team handles your emergencies for a 100% cashless, friction-free experience.",
    side: "left"
  }
];

const HowItWorksSection = () => {
  return (
    <section id="how-we-work" className="py-32 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            How we work with you
          </h2>
          <p className="text-muted-foreground text-sm font-medium uppercase tracking-[0.2em]">
            Our proven methodology for comprehensive family protection
          </p>
        </div>

        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-orange-500 to-emerald-500 -translate-x-1/2 hidden md:block" />

          <div className="space-y-24">
            {timelineSteps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: step.side === 'left' ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className={`flex items-center justify-between w-full ${step.side === 'left' ? 'flex-row-reverse' : ''}`}
              >
                {/* Text Side */}
                <div className="w-full md:w-[45%] text-left md:text-right group">
                  <div className={`p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all hover:border-white/10 ${step.side === 'right' ? 'md:text-left' : ''}`}>
                    <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-[15px] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>

                {/* Number Side */}
                <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center z-10">
                  <div className="w-12 h-12 rounded-full bg-background border-4 border-[#0a0c10] flex items-center justify-center shadow-premium">
                    <div className={`w-full h-full rounded-full flex items-center justify-center text-white font-bold text-sm ${i === 0 ? 'bg-purple-500' :
                      i === 1 ? 'bg-orange-500' :
                        i === 2 ? 'bg-pink-500' : 'bg-emerald-500'
                      }`}>
                      {step.number}
                    </div>
                  </div>
                </div>

                {/* Empty Side (Desktop) */}
                <div className="hidden md:block w-[45%]" />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="px-10 py-4 rounded-full bg-orbit-purple text-white font-bold text-sm shadow-premium hover:scale-105 active:scale-95 transition-all"
          >
            Start Your Protection Journey
          </motion.button>
        </div>
      </div>
    </section>
  );
};


export default HowItWorksSection;
