import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const reviews = [
  { name: "Elena Zhang", role: "Food Blogger", text: "The Peking Duck at Black Panda is hands down the best I've ever had. Every dish is a masterpiece — the flavours are bold yet perfectly balanced.", rating: 5 },
  { name: "James Carter", role: "Regular Guest", text: "From the dim sum to the hand-pulled noodles, every visit feels like a culinary journey through China. The ambience is unmatched.", rating: 5 },
  { name: "Mei Lin Wu", role: "Food Critic", text: "The dim sum alone is worth the trip. Every dish tells a story of tradition and craftsmanship. The chefs here are genuine artists.", rating: 5 },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c === 0 ? reviews.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === reviews.length - 1 ? 0 : c + 1));

  return (
    <section id="testimonials" className="section-padding bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <SectionHeading subtitle="Reviews" title="What Our Guests Say" />

        <AnimatedSection>
          <div className="relative glass-card rounded-2xl p-8 md:p-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
                className="text-center"
              >
                <div className="flex justify-center gap-1 mb-6">
                  {Array.from({ length: reviews[current].rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <blockquote className="font-display text-lg md:text-xl text-foreground leading-relaxed mb-6 italic">
                  "{reviews[current].text}"
                </blockquote>
                <p className="font-semibold text-foreground">{reviews[current].name}</p>
                <p className="text-muted-foreground text-sm">{reviews[current].role}</p>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center gap-4 mt-8">
              <button onClick={prev} className="p-2 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300">
                <ChevronLeft className="w-5 h-5 text-foreground" />
              </button>
              <div className="flex items-center gap-2">
                {reviews.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${i === current ? "bg-primary w-6" : "bg-muted-foreground/30"}`}
                  />
                ))}
              </div>
              <button onClick={next} className="p-2 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300">
                <ChevronRight className="w-5 h-5 text-foreground" />
              </button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default TestimonialsSection;
