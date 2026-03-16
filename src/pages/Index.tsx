import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import InstagramFeed from "@/components/InstagramFeed";
import drSpethPortrait from "@/assets/dr-speth-portrait.webp";
import heroBg from "@/assets/hero-bg.jpg";
import { useLanguage } from "@/i18n/LanguageContext";
import { general, homepage, procedureNames, procedureDescriptions } from "@/i18n/translations";

// Procedure images
import septorhinoplastyImg from "@/assets/procedures/septorhinoplasty.jpg";
import septoplastyImg from "@/assets/procedures/septoplasty.jpg";
import sinusSurgeryImg from "@/assets/procedures/sinus-surgery.jpg";
import turbinateSurgeryImg from "@/assets/procedures/turbinate-surgery.jpg";
import skullBaseImg from "@/assets/procedures/skull-base.jpg";
import revisionCasesImg from "@/assets/procedures/revision-cases.jpg";
import furtherEntImg from "@/assets/procedures/further-ent.jpg";

const procedures = [
  { key: "septorhinoplasty", path: "/septorhinoplasty", image: septorhinoplastyImg },
  { key: "septoplasty", path: "/septoplasty", image: septoplastyImg },
  { key: "sinusSurgery", path: "/sinus-surgery", image: sinusSurgeryImg },
  { key: "turbinateSurgery", path: "/turbinate-surgery", image: turbinateSurgeryImg },
  { key: "skullBase", path: "/skull-base", image: skullBaseImg },
  { key: "revisionCases", path: "/revision-cases", image: revisionCasesImg },
  { key: "furtherENT", path: "/further-ent", image: furtherEntImg },
];

const Index = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-10" />
        </div>
        <div className="container mx-auto px-6 lg:px-8 relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <p className="text-gold text-sm tracking-[0.2em] uppercase font-body mb-6">
              {t(homepage.heroTagline)}
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground font-semibold leading-tight mb-6">
              Dr. med.<br />Marlene Speth
            </h1>
            <p className="text-primary-foreground/70 font-body text-lg max-w-lg mb-10 leading-relaxed">
              {t(homepage.heroDescription)}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="px-8 py-3.5 bg-accent text-accent-foreground font-body font-medium text-sm rounded-sm hover:bg-accent/90 transition-colors"
              >
                {t(general.bookAConsultation)}
              </Link>
              <Link
                to="/about"
                className="px-8 py-3.5 border border-primary-foreground/30 text-primary-foreground font-body font-medium text-sm rounded-sm hover:border-primary-foreground/60 transition-colors"
              >
                {t(homepage.academicProfile)}
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

      {/* Philosophy */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl text-center">
          <AnimatedSection>
            <div className="w-12 h-px bg-accent mx-auto mb-8" />
            <h2 className="font-display text-3xl lg:text-4xl text-primary mb-6">
              {t(homepage.philosophyTitle)}
            </h2>
            <p className="text-foreground/70 font-body text-lg leading-relaxed max-w-2xl mx-auto">
              {t(homepage.philosophyText)}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Procedures Grid — visual cards with images */}
      <section className="py-20 lg:py-28 bg-section-alt">
        <div className="container mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="text-gold text-sm tracking-[0.2em] uppercase font-body mb-4">{t(homepage.expertiseLabel)}</p>
              <h2 className="font-display text-3xl lg:text-4xl text-primary">{t(homepage.proceduresTitle)}</h2>
            </div>
          </AnimatedSection>

          {/* Featured large cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {procedures.slice(0, 2).map((proc, i) => (
              <AnimatedSection key={proc.path} delay={i * 0.08}>
                <Link
                  to={proc.path}
                  className="block relative h-80 rounded-sm overflow-hidden group"
                >
                  <img
                    src={proc.image}
                    alt={t(procedureNames[proc.key])}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-display text-2xl text-primary-foreground mb-2">
                      {t(procedureNames[proc.key])}
                    </h3>
                    <p className="text-primary-foreground/70 font-body text-sm leading-relaxed">
                      {t(procedureDescriptions[proc.key])}
                    </p>
                    <span className="inline-block mt-3 text-gold text-sm font-body font-medium">
                      {t(general.learnMore)}
                    </span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          {/* Smaller grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {procedures.slice(2).map((proc, i) => (
              <AnimatedSection key={proc.path} delay={(i + 2) * 0.08}>
                <Link
                  to={proc.path}
                  className="block relative h-64 rounded-sm overflow-hidden group"
                >
                  <img
                    src={proc.image}
                    alt={t(procedureNames[proc.key])}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-display text-lg text-primary-foreground mb-1">
                      {t(procedureNames[proc.key])}
                    </h3>
                    <span className="text-gold text-xs font-body font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      {t(general.learnMore)}
                    </span>
                  </div>
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
              <p className="text-gold text-sm tracking-[0.2em] uppercase font-body mb-4">{t(homepage.credentialsLabel)}</p>
              <h2 className="font-display text-3xl text-primary mb-6">{t(homepage.credentialsTitle)}</h2>
              <p className="text-foreground/70 font-body leading-relaxed mb-6">
                {t(homepage.credentialsText)}
              </p>
              <Link to="/about" className="text-accent font-body font-medium text-sm hover:text-accent/80 transition-colors">
                {t(homepage.viewProfile)}
              </Link>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { num: "15+", label: t(homepage.yearsExp) },
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

      {/* Instagram */}
      <InstagramFeed />

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl lg:text-4xl text-primary-foreground mb-4">
              {t(homepage.ctaTitle)}
            </h2>
            <p className="text-primary-foreground/60 font-body max-w-xl mx-auto mb-8">
              {t(homepage.ctaText)}
            </p>
            <Link
              to="/contact"
              className="inline-block px-10 py-4 bg-accent text-accent-foreground font-body font-medium text-sm rounded-sm hover:bg-accent/90 transition-colors"
            >
              {t(general.bookAConsultation)}
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Index;
