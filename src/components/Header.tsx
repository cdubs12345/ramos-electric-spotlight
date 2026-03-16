import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";
import logo from "@/assets/ramos-electric-logo.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-primary shadow-lg">
      <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-secondary font-heading font-black text-xl md:text-2xl tracking-tight">
            RAMOS ELECTRIC
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`nav-link text-sm uppercase tracking-wider ${
                location.pathname === link.to ? "text-secondary" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <a
          href="tel:6109548195"
          className="hidden md:flex items-center gap-2 bg-secondary text-secondary-foreground font-heading font-bold px-5 py-2.5 rounded-md hover:bg-yellow-light transition-colors text-sm"
        >
          <Phone className="w-4 h-4" />
          (610) 954-8195
        </a>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-3">
          <a
            href="tel:6109548195"
            className="flex items-center gap-1.5 bg-secondary text-secondary-foreground font-bold px-3 py-2 rounded-md text-sm"
          >
            <Phone className="w-4 h-4" />
            Call
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-primary-foreground p-1"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="md:hidden bg-primary border-t border-primary-foreground/10 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className={`block px-6 py-3 nav-link text-sm uppercase tracking-wider ${
                location.pathname === link.to ? "text-secondary" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
