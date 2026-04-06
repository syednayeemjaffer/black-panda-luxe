import AnimatedSection from "./AnimatedSection";

interface Props {
  subtitle: string;
  title: string;
  description?: string;
}

const SectionHeading = ({ subtitle, title, description }: Props) => (
  <AnimatedSection className="text-center mb-12 md:mb-16">
    <span className="text-primary font-medium text-sm tracking-[0.2em] uppercase">{subtitle}</span>
    <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 mb-4 text-foreground">{title}</h2>
    {description && (
      <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg leading-relaxed">{description}</p>
    )}
    <div className="w-16 h-[2px] bg-primary mx-auto mt-6" />
  </AnimatedSection>
);

export default SectionHeading;
