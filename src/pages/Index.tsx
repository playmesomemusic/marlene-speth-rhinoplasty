import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import drSpethPortrait from "@/assets/dr-speth-portrait.webp";

const procedures = [
  { title: "Septorhinoplasty", description: "Functional and aesthetic nasal surgery for balanced, long-term results.", path: "/septorhinoplasty" },
  { title: "Septoplasty", description: "Correction of the deviated nasal septum to restore nasal breathing.", path: "/septoplasty" },
  { title: "Sinus Surgery", description: "Endoscopic surgery for chronic sinusitis and complex sinus conditions.", path: "/sinus-surgery" },
  { title: "Turbinate Surgery", description: "Reduction of enlarged turbinates to improve nasal airflow.", path: "/turbinate-surgery" },
  { title: "Skull Base Surgery", description: "Advanced surgical management of skull base pathologies.", path: "/skull-base" },
  { title: "Revision Cases", description: "Complex revision surgery for patients with prior nasal procedures.", path: "/revision-cases" },
];

const Index = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center bg-primary overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <p className="text-gold text-sm tracking-[0.2em] uppercase font-body mb-6">
              Rhinology · Facial Plastic Surgery · Munich
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground font-semibold leading-tight mb-6">
              Dr. med.<br />Marlene Speth
            </h1>
            <p className="text-primary-foreground/70 font-body text-lg max-w-lg mb-10 leading-relaxed">
              Consultant ENT Surgeon at the Technical University of Munich, 
              specialising in rhinoplasty, revision nasal surgery, and complex rhinological conditions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="px-8 py-3.5 bg-accent text-accent-foreground font-body font-medium text-sm rounded-sm hover:bg-accent/90 transition-colors"
              >
                Book a Consultation
              </Link>
              <Link
                to="/about"
                className="px-8 py-3.5 border border-primary-foreground/30 text-primary-foreground font-body font-medium text-sm rounded-sm hover:border-primary-foreground/60 transition-colors"
              >
                Academic Profile
              </Link>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2} className="hidden lg:flex justify-end">
            <div className="relative">
              <div className="absolute -inset-4 bg-accent/10 rounded-sm" />
              <img
                src={drSpethPortrait}
                alt="Dr. med. Marlene Speth — Rhinology & Facial Plastic Surgery"
                className="relative w-[420px] h-[520px] object-cover object-top rounded-sm"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Intro / Philosophy */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl text-center">
          <AnimatedSection>
            <div className="w-12 h-px bg-accent mx-auto mb-8" />
            <h2 className="font-display text-3xl lg:text-4xl text-primary mb-6">
              Precision Meets Aesthetics
            </h2>
            <p className="text-foreground/70 font-body text-lg leading-relaxed max-w-2xl mx-auto">
              With a subspecialty focus on rhinology and facial plastic surgery, Dr. Speth combines 
              meticulous surgical technique with an understanding of facial harmony. Every procedure 
              is approached with the goal of achieving balanced, natural, and long-lasting results — 
              whether functional, cosmetic, or both.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Procedures Grid */}
      <section className="py-20 lg:py-28 bg-section-alt">
        <div className="container mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="text-gold text-sm tracking-[0.2em] uppercase font-body mb-4">Expertise</p>
              <h2 className="font-display text-3xl lg:text-4xl text-primary">Procedures</h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {procedures.map((proc, i) => (
              <AnimatedSection key={proc.path} delay={i * 0.08}>
                <Link
                  to={proc.path}
                  className="block bg-card p-8 border border-border rounded-sm hover:border-accent/40 hover:shadow-lg transition-all duration-300 group h-full"
                >
                  <h3 className="font-display text-xl text-primary mb-3 group-hover:text-accent transition-colors">
                    {proc.title}
                  </h3>
                  <p className="text-foreground/60 font-body text-sm leading-relaxed">{proc.description}</p>
                  <span className="inline-block mt-4 text-accent text-sm font-body font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more →
                  </span>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <p className="text-gold text-sm tracking-[0.2em] uppercase font-body mb-4">Credentials</p>
              <h2 className="font-display text-3xl text-primary mb-6">International Expertise</h2>
              <p className="text-foreground/70 font-body leading-relaxed mb-6">
                Dr. Speth completed her specialist training in Switzerland and a Royal College–approved 
                fellowship in rhinology at Charing Cross Hospital, Imperial College London. She serves on the 
                Executive Committee of the European Rhinologic Society and chairs its Educational Committee.
              </p>
              <Link to="/about" className="text-accent font-body font-medium text-sm hover:text-accent/80 transition-colors">
                View full academic profile →
              </Link>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { num: "15+", label: "Years Experience" },
                  { num: "TUM", label: "Technical University Munich" },
                  { num: "ERS", label: "Executive Committee" },
                  { num: "UK", label: "Imperial College Fellowship" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center p-6 bg-section-alt rounded-sm">
                    <div className="font-display text-2xl text-accent mb-1">{stat.num}</div>
                    <div className="text-foreground/60 text-xs font-body">{stat.label}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl lg:text-4xl text-primary-foreground mb-4">
              Schedule Your Consultation
            </h2>
            <p className="text-primary-foreground/60 font-body max-w-xl mx-auto mb-8">
              Take the first step towards improved nasal function and facial harmony. 
              Dr. Speth offers personalised consultations in Munich.
            </p>
            <Link
              to="/contact"
              className="inline-block px-10 py-4 bg-accent text-accent-foreground font-body font-medium text-sm rounded-sm hover:bg-accent/90 transition-colors"
            >
              Book a Consultation
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Index;
