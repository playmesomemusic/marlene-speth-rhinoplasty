import AnimatedSection from "./AnimatedSection";
import { Link } from "react-router-dom";

interface TimelineStep {
  title: string;
  description: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface SurgeryPageProps {
  title: string;
  subtitle: string;
  overview: string;
  procedure: string;
  timeline: TimelineStep[];
  recovery: string;
  faqs: FAQItem[];
}

const SurgeryPageTemplate = ({
  title,
  subtitle,
  overview,
  procedure,
  timeline,
  recovery,
  faqs,
}: SurgeryPageProps) => {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="bg-primary py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-gold text-sm tracking-[0.2em] uppercase font-body mb-4">Procedure</p>
            <h1 className="font-display text-4xl lg:text-5xl text-primary-foreground font-semibold mb-4">
              {title}
            </h1>
            <p className="text-primary-foreground/70 font-body text-lg max-w-2xl">{subtitle}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
          <AnimatedSection>
            <h2 className="font-display text-3xl text-primary mb-6">Overview</h2>
            <p className="text-foreground/80 font-body leading-relaxed">{overview}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* The Procedure */}
      <section className="py-16 lg:py-24 bg-section-alt">
        <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
          <AnimatedSection>
            <h2 className="font-display text-3xl text-primary mb-6">The Procedure</h2>
            <p className="text-foreground/80 font-body leading-relaxed">{procedure}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
          <AnimatedSection>
            <h2 className="font-display text-3xl text-primary mb-10">What to Expect</h2>
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

      {/* Recovery */}
      <section className="py-16 lg:py-24 bg-section-alt">
        <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
          <AnimatedSection>
            <h2 className="font-display text-3xl text-primary mb-6">Recovery</h2>
            <p className="text-foreground/80 font-body leading-relaxed">{recovery}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
          <AnimatedSection>
            <h2 className="font-display text-3xl text-primary mb-10">Frequently Asked Questions</h2>
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
            <h2 className="font-display text-3xl text-primary-foreground mb-4">Ready to Take the Next Step?</h2>
            <p className="text-primary-foreground/70 font-body mb-8 max-w-xl mx-auto">
              Schedule a personal consultation with Dr. Speth to discuss your individual needs and treatment options.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-3 bg-accent text-accent-foreground font-body font-medium rounded-sm hover:bg-accent/90 transition-colors"
            >
              Book a Consultation
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default SurgeryPageTemplate;
