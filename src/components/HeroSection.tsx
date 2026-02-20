import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-family.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(40_85%_55%/0.1),transparent_60%)]" />

      {/* Decorative circles */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full border border-primary-foreground/5 animate-float" />
      <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full border border-primary-foreground/5" />

      <div className="relative max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-glass text-primary-foreground/80 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-accent" />
            Trusted by 50,000+ families
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight mb-6">
            Protecting What{" "}
            <span className="text-gradient-gold italic">Matters Most</span>{" "}
            to You
          </h1>

          <p className="text-lg text-primary-foreground/70 max-w-lg mb-8 font-body">
            Comprehensive insurance plans designed around your life. From health
            to home, we keep your family secure with plans that truly fit.
          </p>

          <div className="flex flex-wrap gap-4">
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
              <Play className="mr-2 w-4 h-4" /> Watch Story
            </Button>
          </div>

          {/* Stats */}
          <div className="flex gap-8 mt-12">
            {[
              { value: "50K+", label: "Happy Families" },
              { value: "98%", label: "Claims Settled" },
              { value: "24/7", label: "Support" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-display font-bold text-primary-foreground">
                  {stat.value}
                </p>
                <p className="text-sm text-primary-foreground/50">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-elevated">
            <img
              src={heroImage}
              alt="Happy family protected by SafeNest insurance"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
          </div>

          {/* Floating card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="absolute -bottom-6 -left-6 bg-card rounded-xl p-4 shadow-card"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <span className="text-lg">🛡️</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-card-foreground">
                  Claim Approved
                </p>
                <p className="text-xs text-muted-foreground">
                  ₹5,00,000 • 48 hrs
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
