import { Link } from "react-router-dom";
import { Phone, Shield, Home, Clock, DollarSign, Zap, ArrowRight } from "lucide-react";
import electricianImg from "@/assets/electrician-panel.jpg";
import wiringImg from "@/assets/electrical-wiring.jpg";

const trustBadges = [
  { icon: Shield, label: "Licensed & Insured" },
  { icon: Home, label: "Residential & Commercial" },
  { icon: Clock, label: "Prompt & Reliable" },
  { icon: DollarSign, label: "Reasonable Pricing" },
];

const Index = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-dark to-primary opacity-90" />
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              <Zap className="w-4 h-4" />
              Bethlehem's Trusted Electrician
            </div>
            <h1 className="font-heading font-black text-primary-foreground text-4xl md:text-6xl leading-tight mb-6">
              Licensed Electrician Serving Bethlehem & the Lehigh Valley
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl mb-10 max-w-2xl">
              Residential & Commercial Electrical Services — Fast, Reliable, Reasonably Priced
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:6109548195"
                className="inline-flex items-center justify-center gap-3 bg-secondary text-secondary-foreground font-heading font-bold px-8 py-4 rounded-lg text-lg hover:bg-yellow-light transition-colors"
              >
                <Phone className="w-5 h-5" />
                (610) 954-8195 — Call Now
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-primary-foreground/10 text-primary-foreground font-heading font-bold px-8 py-4 rounded-lg text-lg border-2 border-primary-foreground/20 hover:bg-primary-foreground/20 transition-colors"
              >
                Get a Free Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustBadges.map((badge) => (
              <div
                key={badge.label}
                className="flex flex-col items-center text-center gap-3 p-6 bg-background rounded-xl shadow-sm"
              >
                <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center">
                  <badge.icon className="w-7 h-7 text-secondary" />
                </div>
                <span className="font-heading font-bold text-sm text-foreground">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Joe */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground mb-6">
            Why Choose Joe?
          </h2>
          <div className="w-16 h-1 bg-secondary mx-auto mb-8 rounded-full" />
          <p className="text-muted-foreground text-lg leading-relaxed">
            Ramos Electric is a family-owned business right here in Bethlehem, PA. Joe Ramos brings years of hands-on electrical experience to every job — big or small. He takes the time to explain the process step by step so you always know what's happening and why. Known for being on time, professional, and reasonably priced, Joe has built a reputation across the Lehigh Valley for honest, quality electrical work you can trust.
          </p>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 mt-8 font-heading font-bold text-secondary hover:text-yellow-light transition-colors"
          >
            View Our Services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-black text-2xl md:text-3xl text-primary-foreground mb-4">
            Need an Electrician? Call Joe Today.
          </h2>
          <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto">
            Free estimates on all residential and commercial electrical work in Bethlehem, Allentown, Easton, and the Lehigh Valley.
          </p>
          <a
            href="tel:6109548195"
            className="inline-flex items-center gap-3 bg-secondary text-secondary-foreground font-heading font-bold px-8 py-4 rounded-lg text-lg hover:bg-yellow-light transition-colors"
          >
            <Phone className="w-5 h-5" />
            (610) 954-8195
          </a>
        </div>
      </section>
    </div>
  );
};

export default Index;
