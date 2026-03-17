import { useState } from "react";
import { Phone, MapPin, Clock, Send, Mail } from "lucide-react";
import { toast } from "sonner";

const jobTypes = [
  "Service Panel Upgrades",
  "Outlet & Circuit Installation",
  "Ceiling Fan Installation",
  "Breaker & Fuse Replacement",
  "Lighting Design & Installation",
  "Security & Landscape Lighting",
  "EV Charger Installation",
  "Exhaust Fan Installation",
  "Surge Protector Installation",
  "Code Corrections",
  "Single & Multi-Family Home Wiring",
  "Commercial Retrofits",
  "Dedicated Computer & AC Circuits",
  "Electric Water Heater & Dryer Hookups",
  "Ground Fault Interrupt (GFCI) Circuits",
  "Emergency Electrical Service",
  "Other",
];

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    jobType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! Joe will get back to you shortly.");
    setForm({ name: "", phone: "", email: "", jobType: "", message: "" });
  };

  return (
    <div>
      <section className="bg-primary py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading font-black text-3xl md:text-5xl text-primary-foreground mb-4">
            Get a Free Quote
          </h1>
          <p className="text-primary-foreground/70 max-w-xl mx-auto text-lg">
            Fill out the form below and Joe will get back to you as soon as possible.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-1.5">Full Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition"
                  placeholder="John Smith"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-1.5">Phone Number</label>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition"
                  placeholder="(610) 555-1234"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-1.5">Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-1.5">Type of Job</label>
                <select
                  required
                  value={form.jobType}
                  onChange={(e) => setForm({ ...form, jobType: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition"
                >
                  <option value="">Select a service...</option>
                  {jobTypes.map((job) => (
                    <option key={job} value={job}>{job}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-1.5">Message</label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground font-heading font-bold px-8 py-4 rounded-lg text-lg hover:bg-yellow-light transition-colors"
              >
                <Send className="w-5 h-5" />
                Send Request
              </button>
            </form>

            {/* Info + Map */}
            <div className="space-y-8">
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-secondary mt-1" />
                  <div>
                    <h3 className="font-heading font-bold text-foreground">Phone</h3>
                    <a href="tel:6109548195" className="text-muted-foreground hover:text-secondary transition-colors">
                      (610) 954-8195
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-secondary mt-1" />
                  <div>
                    <h3 className="font-heading font-bold text-foreground">Address</h3>
                    <p className="text-muted-foreground">722 Wyandotte St, Bethlehem, PA 18015</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-secondary mt-1" />
                  <div>
                    <h3 className="font-heading font-bold text-foreground">Hours</h3>
                    <p className="text-muted-foreground">Mon–Fri: 7AM–7PM</p>
                    <p className="text-muted-foreground">Saturday: 7AM–7PM</p>
                    <p className="text-muted-foreground">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden border border-border shadow-sm">
                <iframe
                  title="Ramos Electric Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48484.95328827736!2d-75.41!3d40.62!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c43f84e0e4a92f%3A0xa85de8d6b0a4a2c6!2sBethlehem%2C%20PA!5e0!3m2!1sen!2sus!4v1710000000000"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
