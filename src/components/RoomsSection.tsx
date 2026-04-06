import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import roomSuite from "@/assets/room-suite.jpg";
import roomDeluxe from "@/assets/room-deluxe.jpg";
import roomExecutive from "@/assets/room-executive.jpg";

const rooms = [
  { name: "Imperial Suite", price: "$580", desc: "Panoramic city views, silk furnishings, and a private lounge area.", image: roomSuite },
  { name: "Deluxe Room", price: "$320", desc: "Warm golden tones with premium amenities and Chinese-inspired elegance.", image: roomDeluxe },
  { name: "Executive Room", price: "$420", desc: "A serene retreat featuring calligraphy art and a tatami-inspired corner.", image: roomExecutive },
];

const RoomsSection = () => (
  <section id="rooms" className="section-padding">
    <div className="max-w-7xl mx-auto">
      <SectionHeading
        subtitle="Accommodation"
        title="Your Sanctuary Awaits"
        description="Each room is a masterpiece of comfort and culture, designed to make every stay extraordinary."
      />

      <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
        {rooms.map((room, i) => (
          <AnimatedSection key={room.name} delay={i * 0.15}>
            <div className="group glass-card rounded-2xl overflow-hidden hover-lift">
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  width={800}
                  height={600}
                />
                <div className="absolute top-4 right-4 px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm font-semibold">
                  {room.price}<span className="text-xs font-normal opacity-80">/night</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">{room.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{room.desc}</p>
                <a href="#contact" className="text-primary text-sm font-medium hover:underline">
                  Reserve →
                </a>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default RoomsSection;
