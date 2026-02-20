import { motion } from "framer-motion";
import { FileText, Search, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: FileText,
    step: "01",
    title: "Tell Us Your Needs",
    description:
      "Fill out a simple form with your requirements. It takes less than 2 minutes.",
  },
  {
    icon: Search,
    step: "02",
    title: "Compare Plans",
    description:
      "We show you the best plans from top insurers, tailored to your profile.",
  },
  {
    icon: CheckCircle,
    step: "03",
    title: "Get Covered Instantly",
    description:
      "Choose your plan, pay online, and receive your policy document in minutes.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium uppercase tracking-wider text-accent mb-3">
            How It Works
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
            Insurance Made{" "}
            <span className="text-gradient-gold italic">Simple</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Getting covered shouldn't be complicated. We've simplified the entire
            process into three easy steps.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative text-center"
              >
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-px border-t-2 border-dashed border-border" />
                )}

                <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-card shadow-card mb-6">
                  <Icon className="w-8 h-8 text-primary" />
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-accent-foreground text-sm font-bold flex items-center justify-center shadow-gold">
                    {item.step}
                  </span>
                </div>

                <h3 className="text-xl font-display font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm max-w-xs mx-auto">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
