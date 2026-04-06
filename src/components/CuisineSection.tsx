import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import dishPeking from "@/assets/dish-peking-duck.jpg";
import dishDimSum from "@/assets/dish-dim-sum.jpg";
import dishHotpot from "@/assets/dish-hotpot.jpg";
import dishNoodles from "@/assets/dish-noodles.jpg";

const dishes = [
  { name: "Peking Roast Duck", price: "$38", desc: "Lacquered and slow-roasted to perfection, served with scallion wraps and hoisin sauce.", image: dishPeking },
  { name: "Imperial Dim Sum", price: "$24", desc: "Handcrafted dumplings filled with the freshest seasonal ingredients.", image: dishDimSum },
  { name: "Sichuan Hotpot", price: "$42", desc: "Rich, aromatic broth simmered for hours with premium herbs, spices, and your choice of meats.", image: dishHotpot },
  { name: "Hand-Pulled Noodles", price: "$18", desc: "Hand-pulled noodles in a delicate broth, topped with garden-fresh greens and slow-braised pork.", image: dishNoodles },
];

const CuisineSection = () => (
  <section id="cuisine" className="section-padding bg-secondary/30">
    <div className="max-w-7xl mx-auto">
      <SectionHeading
        subtitle="Our Menu"
        title="Signature Dishes"
        description="Our master chefs honour generations of Chinese culinary tradition, creating dishes that captivate every sense."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {dishes.map((dish, i) => (
          <AnimatedSection key={dish.name} delay={i * 0.1}>
            <div className="group relative rounded-2xl overflow-hidden aspect-[3/4] cursor-pointer">
              <img
                src={dish.image}
                alt={dish.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                width={800}
                height={600}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              <div className="absolute top-4 right-4 px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm font-semibold">
                {dish.price}
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5 transition-transform duration-500 group-hover:translate-y-0">
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">{dish.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {dish.desc}
                </p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default CuisineSection;
