import { motion } from "framer-motion";

const logos = [
  "HDFC Ergo",
  "LIC India",
  "Star Health",
  "ICICI Lombard",
  "Bajaj Allianz",
];

const TrustBar = () => {
  return (
    <section className="py-12 bg-secondary/50 border-y border-border">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-sm text-muted-foreground mb-8 font-medium uppercase tracking-wider">
          Partnered with India's Leading Insurers
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {logos.map((logo, i) => (
            <motion.div
              key={logo}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-lg font-display font-bold text-muted-foreground/40"
            >
              {logo}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
