import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "SafeNest made getting health insurance so easy. The claim was settled within 24 hours — truly impressive!",
    name: "Priya Sharma",
    role: "Homemaker, Delhi",
    rating: 5,
  },
  {
    quote:
      "After comparing several options, SafeNest offered the best motor insurance plan. Great value for money.",
    name: "Rahul Mehta",
    role: "Software Engineer, Bangalore",
    rating: 5,
  },
  {
    quote:
      "The support team guided me through every step. I felt confident and informed throughout the process.",
    name: "Anita Verma",
    role: "Business Owner, Mumbai",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium uppercase tracking-wider text-accent mb-3">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
            Loved by{" "}
            <span className="text-gradient-gold italic">Families</span> Across
            India
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card rounded-2xl p-6 border border-border shadow-soft hover:shadow-card transition-shadow"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, si) => (
                  <Star
                    key={si}
                    className="w-4 h-4 fill-accent text-accent"
                  />
                ))}
              </div>

              <p className="text-foreground mb-6 leading-relaxed italic">
                "{t.quote}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-display font-bold text-primary text-sm">
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {t.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
