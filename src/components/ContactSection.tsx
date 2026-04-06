import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { toast } from "sonner";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", date: "", guests: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Reservation request sent! We'll confirm shortly.");
    setForm({ name: "", email: "", date: "", guests: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          subtitle="Reservations"
          title="Begin Your Experience"
          description="Book your stay or table at Black Panda. We look forward to welcoming you."
        />

        <div className="grid lg:grid-cols-2 gap-12">
          <AnimatedSection delay={0.1}>
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors text-sm"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors text-sm"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="date"
                  required
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-xl text-foreground focus:outline-none focus:border-primary transition-colors text-sm"
                />
                <input
                  type="number"
                  placeholder="Number of Guests"
                  min="1"
                  required
                  value={form.guests}
                  onChange={(e) => setForm({ ...form, guests: e.target.value })}
                  className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors text-sm"
                />
              </div>
              <textarea
                placeholder="Special Requests..."
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors text-sm resize-none"
              />
              <button
                type="submit"
                className="w-full py-3.5 bg-primary text-primary-foreground rounded-xl font-semibold text-base hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:scale-[1.02]"
              >
                Send Reservation Request
              </button>
            </form>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="space-y-6">
              {[
                { icon: MapPin, label: "Location", value: "88 Golden Dragon Avenue, Shanghai, China" },
                { icon: Phone, label: "Phone", value: "+86 21 8888 8888" },
                { icon: Mail, label: "Email", value: "reservations@blackpanda.com" },
                { icon: Clock, label: "Restaurant Hours", value: "Lunch: 11:30 AM – 2:30 PM\nDinner: 5:30 PM – 10:30 PM" },
              ].map((item) => (
                <div key={item.label} className="flex gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="text-foreground font-medium whitespace-pre-line">{item.value}</p>
                  </div>
                </div>
              ))}

              <div className="mt-8 rounded-2xl overflow-hidden border border-border h-48">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3412.123!2d121.4737!3d31.2304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDEzJzQ5LjQiTiAxMjHCsDI4JzI1LjMiRQ!5e0!3m2!1sen!2s!4v1"
                  className="w-full h-full grayscale opacity-80"
                  loading="lazy"
                  title="Black Panda Location"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
