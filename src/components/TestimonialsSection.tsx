import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const reviews = [
  { name: "Elena Zhang", role: "Travel Blogger", text: "An absolutely magical experience. The attention to detail in every room, every dish, every interaction — it's unmatched. Black Panda redefines luxury hospitality.", rating: 5 },
  { name: "James Carter", role: "Business Executive", text: "The Imperial Suite was breathtaking. I've stayed in five-star hotels worldwide, but Black Panda's blend of Chinese elegance and modern comfort is truly one of a kind.", rating: 5 },
  { name: "Mei Lin Wu", role: "Food Critic", text: "The dim sum alone is worth the trip. Every dish tells a story of tradition and craftsmanship. The chefs here are genuine artists.", rating: 5 },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c === 0 ? reviews.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === reviews.length - 1 ? 0 : c + 1));

  return (
    <section id="testimonials" className="section-padding bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <SectionHeading subtitle="Guest Reviews" title="Words of Praise" />

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
