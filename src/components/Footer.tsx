import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-secondary/50 border-t border-border">
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="Black Panda" className="w-10 h-10 rounded-full" />
            <span className="font-display text-lg font-bold text-foreground">
              Black <span className="text-primary">Panda</span>
            </span>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Authentic Chinese cuisine crafted with passion and tradition.
          </p>
        </div>

        <div>
          <h4 className="font-display font-semibold text-foreground mb-4">Quick Links</h4>
          <div className="space-y-2">
            {["About", "Menu", "Gallery", "Reviews", "Contact"].map((link) => (
              <a key={link} href={`#${link.toLowerCase() === "menu" ? "cuisine" : link.toLowerCase() === "reviews" ? "testimonials" : link.toLowerCase()}`} className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display font-semibold text-foreground mb-4">Follow Us</h4>
          <div className="flex gap-3">
            {["Instagram", "WeChat", "Facebook"].map((social) => (
              <span key={social} className="px-3 py-1.5 text-xs border border-border rounded-full text-muted-foreground hover:text-primary hover:border-primary transition-colors cursor-pointer">
                {social}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-border pt-6 text-center">
        <p className="text-muted-foreground text-xs">© 2026 Black Panda Restaurant. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
