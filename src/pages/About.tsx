import { Star, MapPin, Phone } from "lucide-react";

const reviews = [
  {
    name: "Mike D.",
    text: "Joe came out the same day I called and fixed a tricky wiring issue in my basement. He explained everything clearly and the price was very fair. Highly recommend Ramos Electric!",
  },
  {
    name: "Sarah K.",
    text: "We had Joe install a new panel and several outlets in our kitchen renovation. He was on time, professional, and cleaned up after himself. Joe is our go-to electrician now.",
  },
  {
    name: "Tom R.",
    text: "Needed an EV charger installed at my home in Allentown. Joe walked me through the options, got it done quickly, and the price was better than two other quotes I got. Five stars!",
  },
];

const serviceAreas = ["Bethlehem", "Allentown", "Easton", "Lehigh Valley & Surrounding Areas"];

const About = () => {
  return (
    <div>
      <section className="bg-primary py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading font-black text-3xl md:text-5xl text-primary-foreground mb-4">
            About Ramos Electric
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Joe Ramos is a trusted, licensed electrician proudly serving Bethlehem and the greater Lehigh Valley. With years of experience in both residential and commercial electrical work, Joe has earned a reputation for being prompt, professional, and honest.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            What sets Joe apart is his commitment to communication — he takes the time to explain every step of the process so you know exactly what's being done and why. Whether it's a simple outlet repair or a full panel upgrade, Joe treats every job with the same level of care and attention. His pricing is straightforward and reasonable, with no surprises or hidden fees.
          </p>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-black text-3xl text-foreground text-center mb-12">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {reviews.map((review) => (
              <div key={review.name} className="bg-background p-6 rounded-xl shadow-sm">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">"{review.text}"</p>
                <p className="font-heading font-bold text-foreground text-sm">— {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-black text-3xl text-foreground mb-8">Service Area</h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
            {serviceAreas.map((area) => (
              <div
                key={area}
                className="inline-flex items-center gap-2 bg-primary/5 text-foreground px-5 py-3 rounded-full font-medium"
              >
                <MapPin className="w-4 h-4 text-secondary" />
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-black text-2xl md:text-3xl text-primary-foreground mb-6">
            Call Joe Today for a Free Estimate
          </h2>
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

export default About;
