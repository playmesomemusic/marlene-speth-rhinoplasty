import AnimatedSection from "@/components/AnimatedSection";
import drSpethPortrait from "@/assets/dr-speth-portrait.webp";
import { Link } from "react-router-dom";

const timelineItems = [
  { year: "2024–2025", title: "Rhinology Fellowship", desc: "Royal College–approved fellowship at Charing Cross Hospital, Imperial College London, under Prof. Hesam Saleh." },
  { year: "Present", title: "Consultant ENT Surgeon", desc: "Klinikum rechts der Isar, Technical University of Munich (TUM). Subspecialty focus on rhinology and facial plastic surgery." },
  { year: "Ongoing", title: "European Rhinologic Society", desc: "Executive Committee member, Chair of the Educational Committee, member of the Scientific Committee." },
  { year: "Ongoing", title: "Academic & Research", desc: "Collaboration with research groups in the US and Austria, focusing on chronic rhinosinusitis and patient quality of life." },
  { year: "Prior", title: "Specialist Training", desc: "Completed ENT specialist training in Switzerland with a developing focus on revision nasal surgery." },
  { year: "Co-Founder", title: "Carematters e.V.", desc: "International initiative providing ENT education and support to physicians in conflict-affected countries." },
];

const About = () => {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <p className="text-gold text-sm tracking-[0.2em] uppercase font-body mb-4">About</p>
            <h1 className="font-display text-4xl lg:text-5xl text-primary font-semibold mb-6">
              Dr. med. Marlene M. Speth, M.A.
            </h1>
            <p className="text-foreground/70 font-body leading-relaxed mb-4">
              Dr. Marlene M. Speth is a Consultant in Otolaryngology (ENT) at the Technical University 
              of Munich (TUM), with a subspecialty focus on rhinology and facial plastic surgery.
            </p>
            <p className="text-foreground/70 font-body leading-relaxed mb-4">
              Her clinical practice focuses in particular on revision nasal surgery, addressing both nasal 
              function and appearance, and on the management of complex rhinological conditions. Her academic 
              work centres on rhinology and facial plastic surgery, with a strong emphasis on achieving 
              balanced and long-term outcomes.
            </p>
            <p className="text-foreground/70 font-body leading-relaxed">
              In recent years, she has collaborated closely with research groups in the United States and 
              Austria, focusing on chronic rhinosinusitis and the quality of life of affected patients.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2} className="flex justify-center">
            <img
              src={drSpethPortrait}
              alt="Dr. med. Marlene Speth"
              className="w-full max-w-md h-auto object-cover rounded-sm shadow-lg"
            />
          </AnimatedSection>
        </div>
      </section>

      {/* Memberships */}
      <section className="py-16 lg:py-24 bg-section-alt">
        <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
          <AnimatedSection>
            <h2 className="font-display text-3xl text-primary mb-8">Professional Memberships</h2>
            <ul className="space-y-4 text-foreground/70 font-body leading-relaxed">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <span>Executive Committee, European Rhinologic Society (ERS)</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <span>Chair, ERS Educational Committee</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <span>Member, ERS Scientific Committee</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <span>Rhinology team, Young Confederation of European ORL-HNS (Y-CEORL)</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <span>Board member, EUSICA</span>
              </li>
            </ul>
          </AnimatedSection>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
          <AnimatedSection>
            <h2 className="font-display text-3xl text-primary mb-12">Career & Achievements</h2>
          </AnimatedSection>
          <div className="space-y-0">
            {timelineItems.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                    {i < timelineItems.length - 1 && <div className="w-px flex-1 bg-border" />}
                  </div>
                  <div className="pb-8">
                    <span className="text-accent text-xs font-body font-medium tracking-wider uppercase">{item.year}</span>
                    <h3 className="font-display text-lg text-primary mt-1">{item.title}</h3>
                    <p className="text-foreground/70 font-body text-sm leading-relaxed mt-1">{item.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl text-primary-foreground mb-4">Get in Touch</h2>
            <p className="text-primary-foreground/60 font-body max-w-xl mx-auto mb-8">
              Whether you are a patient seeking consultation or a colleague exploring collaboration, 
              Dr. Speth welcomes your enquiry.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-3 bg-accent text-accent-foreground font-body font-medium rounded-sm hover:bg-accent/90 transition-colors"
            >
              Contact
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default About;
