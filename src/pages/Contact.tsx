import AnimatedSection from "@/components/AnimatedSection";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="pt-24">
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <AnimatedSection>
              <p className="text-gold text-sm tracking-[0.2em] uppercase font-body mb-4">Contact</p>
              <h1 className="font-display text-4xl lg:text-5xl text-primary font-semibold mb-6">
                Book a Consultation
              </h1>
              <p className="text-foreground/70 font-body leading-relaxed mb-10">
                Whether you are seeking a consultation for nasal surgery or wish to discuss 
                a complex rhinological condition, Dr. Speth and her team are here to help.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <MapPin className="text-accent mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-display text-lg text-primary mb-1">Location</h3>
                    <p className="text-foreground/70 font-body text-sm">
                      Klinikum rechts der Isar<br />
                      Technical University of Munich<br />
                      Ismaninger Str. 22, 81675 München
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <Phone className="text-accent mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-display text-lg text-primary mb-1">Phone</h3>
                    <p className="text-foreground/70 font-body text-sm">+49 (0) 89 xxxx xxxx</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <Mail className="text-accent mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-display text-lg text-primary mb-1">Email</h3>
                    <p className="text-foreground/70 font-body text-sm">praxis@example.com</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <Clock className="text-accent mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-display text-lg text-primary mb-1">Consultation Hours</h3>
                    <p className="text-foreground/70 font-body text-sm">
                      Monday – Friday: 09:00 – 17:00<br />
                      By appointment only
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <form className="bg-card border border-border rounded-sm p-8 space-y-6">
                <div>
                  <label className="block text-sm font-body font-medium text-foreground mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-3 border border-input rounded-sm text-sm font-body bg-background focus:outline-none focus:ring-1 focus:ring-ring" placeholder="Your full name" />
                </div>
                <div>
                  <label className="block text-sm font-body font-medium text-foreground mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 border border-input rounded-sm text-sm font-body bg-background focus:outline-none focus:ring-1 focus:ring-ring" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-body font-medium text-foreground mb-2">Phone</label>
                  <input type="tel" className="w-full px-4 py-3 border border-input rounded-sm text-sm font-body bg-background focus:outline-none focus:ring-1 focus:ring-ring" placeholder="+49 ..." />
                </div>
                <div>
                  <label className="block text-sm font-body font-medium text-foreground mb-2">Enquiry Type</label>
                  <select className="w-full px-4 py-3 border border-input rounded-sm text-sm font-body bg-background focus:outline-none focus:ring-1 focus:ring-ring">
                    <option>General Consultation</option>
                    <option>Septorhinoplasty</option>
                    <option>Septoplasty</option>
                    <option>Sinus Surgery</option>
                    <option>Revision Surgery</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-body font-medium text-foreground mb-2">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 border border-input rounded-sm text-sm font-body bg-background focus:outline-none focus:ring-1 focus:ring-ring resize-none" placeholder="Tell us about your concern..." />
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-3.5 bg-primary text-primary-foreground font-body font-medium text-sm rounded-sm hover:bg-primary/90 transition-colors"
                >
                  Send Enquiry
                </button>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
