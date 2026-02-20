import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-3xl bg-hero-gradient overflow-hidden px-8 py-16 md:px-16 md:py-20 text-center"
        >
          {/* Decorative */}
          <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-accent/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full bg-primary-foreground/5 blur-2xl" />

          <div className="relative">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-6 max-w-2xl mx-auto leading-tight">
              Ready to Secure Your{" "}
              <span className="text-gradient-gold italic">Family's Future?</span>
            </h2>
            <p className="text-primary-foreground/70 max-w-lg mx-auto mb-8 text-lg">
              Join over 50,000 families who trust SafeNest for their insurance
              needs. Get your personalized quote today — it's free.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-gold font-semibold text-base px-8"
              >
                Get Free Quote <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 text-base"
              >
                Talk to an Advisor
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
