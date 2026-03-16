import { Link } from "react-router-dom";
import {
  Zap, Plug, Fan, Shield, Lightbulb, Lock, Car, Wind,
  ShieldCheck, FileCheck, Home, Building, Monitor, Droplets,
  AlertTriangle, Phone, ArrowRight
} from "lucide-react";

const services = [
  { icon: Zap, title: "Service Panel Upgrades", desc: "Upgrade your electrical panel to handle modern power demands safely and efficiently." },
  { icon: Plug, title: "Outlet & Circuit Installation", desc: "Add new outlets or circuits wherever you need more power in your home or business." },
  { icon: Fan, title: "Ceiling Fan Installation", desc: "Professional ceiling fan installation for comfort and energy savings in any room." },
  { icon: Shield, title: "Breaker & Fuse Replacement", desc: "Replace outdated breakers and fuses to protect your property from electrical hazards." },
  { icon: Lightbulb, title: "Lighting Design & Installation", desc: "Custom lighting solutions to enhance the look and function of your space." },
  { icon: Lock, title: "Security & Landscape Lighting", desc: "Keep your property safe and beautiful with professional security and landscape lighting." },
  { icon: Car, title: "EV Charger Installation", desc: "Charge your electric vehicle at home with a professionally installed Level 2 charger." },
  { icon: Wind, title: "Exhaust Fan Installation", desc: "Improve ventilation in bathrooms, kitchens, and utility areas with new exhaust fans." },
  { icon: ShieldCheck, title: "Surge Protector Installation", desc: "Protect your electronics and appliances from power surges with whole-home surge protection." },
  { icon: FileCheck, title: "Code Corrections", desc: "Bring your electrical system up to current code for safety and compliance." },
  { icon: Home, title: "Single & Multi-Family Home Wiring", desc: "Complete electrical wiring for new construction, renovations, and multi-unit properties." },
  { icon: Building, title: "Commercial Retrofits", desc: "Modernize your commercial space with updated electrical systems and energy-efficient solutions." },
  { icon: Monitor, title: "Dedicated Computer & AC Circuits", desc: "Install dedicated circuits for computers, servers, and AC units to prevent overloads." },
  { icon: Droplets, title: "Electric Water Heater & Dryer Hookups", desc: "Safe, code-compliant hookups for electric water heaters and dryers." },
  { icon: AlertTriangle, title: "Ground Fault Interrupt (GFCI) Circuits", desc: "Install GFCI protection in kitchens, bathrooms, and outdoor areas for shock prevention." },
  { icon: Phone, title: "Emergency Electrical Service", desc: "Electrical emergency? Call Joe for fast, reliable emergency electrical repairs." },
];

const Services = () => {
  return (
    <div>
      <section className="bg-primary py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading font-black text-3xl md:text-5xl text-primary-foreground mb-4">
            Our Electrical Services
          </h1>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg">
            Residential and commercial electrical services across Bethlehem, Allentown, Easton, and the Lehigh Valley.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="group p-6 bg-background rounded-xl border border-border hover:shadow-lg hover:border-secondary/30 transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-heading font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-black text-2xl md:text-3xl text-foreground mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Call Joe for a free estimate or fill out our contact form.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:6109548195"
              className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground font-heading font-bold px-8 py-4 rounded-lg hover:bg-yellow-light transition-colors"
            >
              <Phone className="w-5 h-5" />
              (610) 954-8195
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-heading font-bold px-8 py-4 rounded-lg hover:opacity-90 transition-colors"
            >
              Get a Free Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
