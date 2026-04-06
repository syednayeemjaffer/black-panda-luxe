import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

const HeroSection = () => (
  <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
    {/* Abstract decorative elements */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary/5 rounded-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary/[0.03] rounded-full" />
    </div>

    <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
      <motion.img
        src={logo}
        alt="Black Panda Logo"
        className="w-28 h-28 md:w-36 md:h-36 mx-auto mb-8 rounded-full shadow-2xl gold-glow"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      <motion.h1
        className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Black <span className="text-primary">Panda</span>
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        Authentic Chinese cuisine crafted with passion. Experience the art of flavour in every dish.
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row gap-4 justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <a
          href="#contact"
          className="px-8 py-3.5 bg-primary text-primary-foreground rounded-full font-semibold text-base hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105"
        >
          Reserve a Table
        </a>
        <a
          href="#cuisine"
          className="px-8 py-3.5 border border-foreground/20 text-foreground rounded-full font-semibold text-base hover:bg-foreground/5 hover:border-primary/50 transition-all duration-300"
        >
          Explore Menu
        </a>
      </motion.div>
    </div>

    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center pt-2">
        <div className="w-1.5 h-3 bg-primary rounded-full" />
      </div>
    </motion.div>
  </section>
);

export default HeroSection;
