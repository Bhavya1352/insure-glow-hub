import { motion } from "framer-motion";
import { Heart, Home, Car, Briefcase, Umbrella, Shield } from "lucide-react";

const coverages = [
  {
    icon: Heart,
    title: "Health Insurance",
    description:
      "Cashless treatment at 10,000+ hospitals. Covers pre & post hospitalisation.",
    highlight: true,
  },
  {
    icon: Home,
    title: "Home Insurance",
    description:
      "Protect your home from fire, flood, and theft with comprehensive coverage.",
    highlight: false,
  },
  {
    icon: Car,
    title: "Motor Insurance",
    description:
      "Bumper-to-bumper protection for your car and two-wheeler. Instant claims.",
    highlight: false,
  },
  {
    icon: Briefcase,
    title: "Business Insurance",
    description:
      "Shield your business from liabilities, property damage, and employee claims.",
    highlight: false,
  },
  {
    icon: Umbrella,
    title: "Life Insurance",
    description:
      "Secure your family's financial future with flexible term & endowment plans.",
    highlight: true,
  },
  {
    icon: Shield,
    title: "Travel Insurance",
    description:
      "Travel worry-free with coverage for medical emergencies, lost baggage & more.",
    highlight: false,
  },
];

const CoverageSection = () => {
  return (
    <section id="coverage" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium uppercase tracking-wider text-accent mb-3">
            Our Coverage Plans
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
            Complete Protection for{" "}
            <span className="text-gradient-gold italic">Every Need</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From health to home, we offer tailored insurance solutions that
            provide peace of mind for you and your loved ones.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {coverages.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`group relative rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1 ${
                  item.highlight
                    ? "bg-hero-gradient border-primary/20 shadow-elevated"
                    : "bg-card border-border shadow-soft hover:shadow-card"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    item.highlight
                      ? "bg-primary-foreground/10"
                      : "bg-primary/10"
                  }`}
                >
                  <Icon
                    className={`w-6 h-6 ${
                      item.highlight ? "text-primary-foreground" : "text-primary"
                    }`}
                  />
                </div>
                <h3
                  className={`text-lg font-display font-bold mb-2 ${
                    item.highlight ? "text-primary-foreground" : "text-card-foreground"
                  }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
                    item.highlight
                      ? "text-primary-foreground/70"
                      : "text-muted-foreground"
                  }`}
                >
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

export default CoverageSection;
