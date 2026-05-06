import AnimatedSection from "./AnimatedSection";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { surgeryLabels, general, type SurgeryContent } from "@/i18n/translations";
import { Check, AlertTriangle, ClipboardList, Stethoscope, HeartPulse, CalendarCheck } from "lucide-react";

// Procedure images
import septorhinoplastyImg from "@/assets/procedures/septorhinoplasty.jpg";
import septoplastyImg from "@/assets/procedures/septoplasty.jpg";
import sinusSurgeryImg from "@/assets/procedures/sinus-surgery.jpg";
import turbinateSurgeryImg from "@/assets/procedures/turbinate-surgery.jpg";
import skullBaseImg from "@/assets/procedures/skull-base.jpg";
import revisionCasesImg from "@/assets/procedures/revision-cases.jpg";
import furtherEntImg from "@/assets/procedures/further-ent.jpg";

const procedureImages: Record<string, string> = {
  septorhinoplasty: septorhinoplastyImg,
  septoplasty: septoplastyImg,
  sinusSurgery: sinusSurgeryImg,
  turbinateSurgery: turbinateSurgeryImg,
  skullBase: skullBaseImg,
  revisionCases: revisionCasesImg,
  furtherENT: furtherEntImg,
};

interface Props {
  surgeryKey: string;
  data: SurgeryContent;
}

const SurgeryPageTemplate = ({ surgeryKey, data }: Props) => {
  const { t } = useLanguage();
  const image = procedureImages[surgeryKey];
  const title = t(data.title);
  const subtitle = t(data.subtitle);
  const overview = t(data.overview);
  const procedure = t(data.procedure);
  const indications = t(data.indications) as string[];
  const diagnostics = t(data.diagnostics) as string[];
  const results = t(data.results) as string;
  const aftercareDo = t(data.aftercareDo) as string[];
  const aftercareAvoid = t(data.aftercareAvoid) as string[];
  const timeline = t(data.timeline) as { title: string; description: string }[];
  const recovery = t(data.recovery) as string;
  const faqs = t(data.faqs) as { question: string; answer: string }[];

  return (
    <div className="pt-24">
      {/* Hero with image */}
      <section className="relative bg-primary py-20 lg:py-28 overflow-hidden">
        {image && (
          <div className="absolute inset-0">
            <img src={image} alt={title} className="w-full h-full object-cover opacity-15" />
          </div>
        )}
        <div className="container mx-auto px-6 lg:px-8 relative">
          <AnimatedSection>
            <p className="text-gold text-sm tracking-[0.2em] uppercase font-body mb-4">
              {t(general.procedure)}
            </p>
            <h1 className="font-display text-4xl lg:text-5xl text-primary-foreground font-semibold mb-4">
              {title}
            </h1>
            <p className="text-primary-foreground/70 font-body text-lg max-w-2xl">{subtitle}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Overview + Image side by side */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <AnimatedSection>
              <h2 className="font-display text-3xl text-primary mb-6">{t(surgeryLabels.overview)}</h2>
              <p className="text-foreground/80 font-body leading-relaxed">{overview}</p>
            </AnimatedSection>
            {image && (
              <AnimatedSection delay={0.15}>
                <img src={image} alt={title} className="w-full h-72 lg:h-80 object-cover rounded-sm shadow-md" />
              </AnimatedSection>
            )}
          </div>
        </div>
      </section>

      {/* Indications & Symptoms */}
      <section className="py-16 lg:py-24 bg-section-alt">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <AnimatedSection>
            <h2 className="font-display text-3xl text-primary mb-3">{t(surgeryLabels.indications)}</h2>
            <p className="text-foreground/60 font-body mb-8">{t(surgeryLabels.indicationsIntro)}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {indications.map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-card p-4 rounded-sm border border-border">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span className="text-foreground/80 font-body text-sm">{item}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Diagnostics */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
          <AnimatedSection>
            <h2 className="font-display text-3xl text-primary mb-8">{t(surgeryLabels.diagnostics)}</h2>
            <div className="space-y-4">
              {diagnostics.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-accent font-body text-sm font-semibold">{i + 1}</span>
                  </div>
                  <p className="text-foreground/80 font-body leading-relaxed pt-1">{item}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* The Procedure */}
      <section className="py-16 lg:py-24 bg-section-alt">
        <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
          <AnimatedSection>
            <h2 className="font-display text-3xl text-primary mb-6">{t(surgeryLabels.theProcedure)}</h2>
            <p className="text-foreground/80 font-body leading-relaxed">{procedure}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
          <AnimatedSection>
            <h2 className="font-display text-3xl text-primary mb-10">{t(surgeryLabels.whatToExpect)}</h2>
          </AnimatedSection>
          <div className="space-y-0">
            {timeline.map((step, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-accent mt-1.5" />
                    {i < timeline.length - 1 && <div className="w-px flex-1 bg-border" />}
                  </div>
                  <div className="pb-8">
                    <h3 className="font-display text-lg text-primary mb-1">{step.title}</h3>
                    <p className="text-foreground/70 font-body text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-section-alt">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <AnimatedSection>
            <h2 className="font-display text-3xl text-primary mb-12 text-center">{t(surgeryLabels.consultationTitle)}</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: ClipboardList, title: t(surgeryLabels.consultStep1Title), text: t(surgeryLabels.consultStep1Text) },
              { icon: Stethoscope, title: t(surgeryLabels.consultStep2Title), text: t(surgeryLabels.consultStep2Text) },
              { icon: HeartPulse, title: t(surgeryLabels.consultStep3Title), text: t(surgeryLabels.consultStep3Text) },
              { icon: CalendarCheck, title: t(surgeryLabels.consultStep4Title), text: t(surgeryLabels.consultStep4Text) },
            ].map((step, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="text-center">
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <step.icon className="text-accent" size={24} />
                  </div>
                  <div className="font-display text-sm text-accent mb-1">0{i + 1}</div>
                  <h3 className="font-display text-lg text-primary mb-2">{step.title}</h3>
                  <p className="text-foreground/70 font-body text-sm leading-relaxed">{step.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Aftercare */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <AnimatedSection>
            <h2 className="font-display text-3xl text-primary mb-10">{t(surgeryLabels.aftercare)}</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection delay={0.05}>
              <div className="bg-card border border-border rounded-sm p-6">
                <h3 className="font-display text-lg text-primary mb-4 flex items-center gap-2">
                  <Check className="text-accent" size={20} />
                  {t(surgeryLabels.aftercareCanDo)}
                </h3>
                <ul className="space-y-3">
                  {aftercareDo.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="text-accent mt-0.5 flex-shrink-0" size={14} />
                      <span className="text-foreground/70 font-body text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="bg-card border border-border rounded-sm p-6">
                <h3 className="font-display text-lg text-primary mb-4 flex items-center gap-2">
                  <AlertTriangle className="text-destructive" size={20} />
                  {t(surgeryLabels.aftercareAvoid)}
                </h3>
                <ul className="space-y-3">
                  {aftercareAvoid.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <AlertTriangle className="text-accent mt-0.5 flex-shrink-0" size={14} />
                      <span className="text-foreground/70 font-body text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Recovery */}
      <section className="py-16 lg:py-24 bg-section-alt">
        <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
          <AnimatedSection>
            <h2 className="font-display text-3xl text-primary mb-6">{t(surgeryLabels.recovery)}</h2>
            <p className="text-foreground/80 font-body leading-relaxed">{recovery}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
          <AnimatedSection>
            <h2 className="font-display text-3xl text-primary mb-10">{t(surgeryLabels.faq)}</h2>
          </AnimatedSection>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="border-b border-border pb-6">
                  <h3 className="font-display text-lg text-primary mb-2">{faq.question}</h3>
                  <p className="text-foreground/70 font-body text-sm leading-relaxed">{faq.answer}</p>
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
            <h2 className="font-display text-3xl text-primary-foreground mb-4">{t(surgeryLabels.ctaTitle)}</h2>
            <p className="text-primary-foreground/70 font-body mb-8 max-w-xl mx-auto">
              {t(surgeryLabels.ctaText)}
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-3 bg-accent text-accent-foreground font-body font-medium rounded-sm hover:bg-accent/90 transition-colors"
            >
              {t(general.bookAConsultation)}
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default SurgeryPageTemplate;
