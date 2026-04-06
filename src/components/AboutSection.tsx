import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import galleryDining from "@/assets/gallery-dining.jpg";
import { Flame, Utensils, Crown } from "lucide-react";

const features = [
  { icon: Crown, title: "Heritage Recipes", desc: "Our chefs honour generations of Chinese culinary tradition, bringing centuries-old recipes to life with modern finesse." },
  { icon: Utensils, title: "Premium Ingredients", desc: "We source the finest ingredients — from hand-pulled noodles to aromatic spices — ensuring every bite is extraordinary." },
  { icon: Flame, title: "Wok-Fired Perfection", desc: "Each dish is prepared with masterful technique, from high-heat wok cooking to slow-simmered broths that captivate the senses." },
];

const AboutSection = () => (
  <section id="about" className="section-padding bg-secondary/30">
    <div className="max-w-7xl mx-auto">
      <SectionHeading
        subtitle="Our Story"
        title="The Art of Chinese Cuisine"
        description="Black Panda is more than a restaurant — it's a culinary journey through the heart of China, where every dish tells a story of tradition and craftsmanship."
      />

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-8">
        <AnimatedSection delay={0.1}>
          <div className="relative">
            <img
              src={galleryDining}
              alt="Black Panda Dining"
              className="rounded-2xl shadow-2xl w-full"
              loading="lazy"
              width={800}
              height={800}
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-2xl -z-10" />
          </div>
        </AnimatedSection>

        <div className="space-y-8">
          {features.map((f, i) => (
            <AnimatedSection key={f.title} delay={0.2 + i * 0.1}>
              <div className="flex gap-5 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <f.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">{f.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
