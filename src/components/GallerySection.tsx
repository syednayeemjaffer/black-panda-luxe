import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import galleryDining from "@/assets/gallery-dining.jpg";
import gallerySpa from "@/assets/gallery-spa.jpg";
import dishPeking from "@/assets/dish-peking-duck.jpg";
import dishDimSum from "@/assets/dish-dim-sum.jpg";
import dishHotpot from "@/assets/dish-hotpot.jpg";
import dishNoodles from "@/assets/dish-noodles.jpg";

const images = [
  { src: galleryDining, alt: "Dining Ambience", span: "col-span-2 row-span-2" },
  { src: dishPeking, alt: "Peking Duck", span: "" },
  { src: dishDimSum, alt: "Dim Sum", span: "" },
  { src: gallerySpa, alt: "Restaurant Interior", span: "" },
  { src: dishNoodles, alt: "Hand-Pulled Noodles", span: "" },
  { src: dishHotpot, alt: "Sichuan Hotpot", span: "col-span-2" },
];

const GallerySection = () => (
  <section id="gallery" className="section-padding">
    <div className="max-w-7xl mx-auto">
      <SectionHeading
        subtitle="Gallery"
        title="A Feast for the Eyes"
        description="A glimpse into the world of Black Panda — where every dish and every detail is a work of art."
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {images.map((img, i) => (
          <AnimatedSection key={img.alt} delay={i * 0.08} className={img.span}>
            <div className="group relative rounded-xl overflow-hidden h-full min-h-[180px] md:min-h-[220px] cursor-pointer">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/30 transition-colors duration-500 flex items-end p-4">
                <span className="text-foreground text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {img.alt}
                </span>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
