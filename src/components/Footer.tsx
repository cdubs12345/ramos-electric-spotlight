import { Phone, MapPin, Clock, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-heading font-bold text-secondary text-xl mb-4">RAMOS ELECTRIC</h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Licensed & insured electrician proudly serving Bethlehem, Allentown, Easton, and the greater Lehigh Valley.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-primary-foreground/80">
              <a href="tel:6109548195" className="flex items-center gap-2 hover:text-secondary transition-colors">
                <Phone className="w-4 h-4 text-secondary" />
                (610) 954-8195
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-secondary mt-0.5" />
                722 Wyandotte St, Bethlehem, PA 18015
              </div>
              <a href="mailto:info@Ramos-Electric.com" className="flex items-center gap-2 hover:text-secondary transition-colors">
                <Mail className="w-4 h-4 text-secondary" />
                info@Ramos-Electric.com
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider mb-4">Hours</h4>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-secondary mt-0.5" />
                <div>
                  <p>Mon–Fri: 7AM–7PM</p>
                  <p>Saturday: 7AM–7PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-10 pt-6 text-center text-xs text-primary-foreground/50">
          © {new Date().getFullYear()} Ramos Electric. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
