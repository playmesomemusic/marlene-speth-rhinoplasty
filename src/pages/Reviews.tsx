import AnimatedSection from "@/components/AnimatedSection";
import { useLanguage } from "@/i18n/LanguageContext";
import { reviewsPage, procedureNames } from "@/i18n/translations";

const reviews = [
  {
    initials: "A.M.",
    text: { en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dr. Speth was incredibly thorough and caring throughout the entire process.", de: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dr. Speth war unglaublich gründlich und fürsorglich während des gesamten Prozesses." },
    procedureKey: "septorhinoplasty",
  },
  {
    initials: "K.S.",
    text: { en: "The results exceeded my expectations — both functionally and aesthetically. I can finally breathe freely.", de: "Die Ergebnisse haben meine Erwartungen übertroffen — sowohl funktionell als auch ästhetisch. Ich kann endlich frei atmen." },
    procedureKey: "revisionCases",
  },
  {
    initials: "M.W.",
    text: { en: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.", de: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident." },
    procedureKey: "sinusSurgery",
  },
  {
    initials: "T.B.",
    text: { en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Highly professional and empathetic approach.", de: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hochprofessioneller und einfühlsamer Ansatz." },
    procedureKey: "septoplasty",
  },
  {
    initials: "L.H.",
    text: { en: "Excepteur sint occaecat cupidatat non proident. I could not have been in better hands.", de: "Excepteur sint occaecat cupidatat non proident. Ich hätte nicht in besseren Händen sein können." },
    procedureKey: "turbinateSurgery",
  },
];

const Reviews = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-24">
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <AnimatedSection>
            <p className="text-gold text-sm tracking-[0.2em] uppercase font-body mb-4">{t(reviewsPage.label)}</p>
            <h1 className="font-display text-4xl lg:text-5xl text-primary font-semibold mb-6">{t(reviewsPage.title)}</h1>
            <p className="text-foreground/70 font-body leading-relaxed mb-16 max-w-2xl">{t(reviewsPage.intro)}</p>
          </AnimatedSection>

          <div className="space-y-8">
            {reviews.map((review, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="bg-card border border-border rounded-sm p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-body font-medium">
                      {review.initials}
                    </div>
                    <span className="text-accent text-xs font-body font-medium tracking-wider uppercase">
                      {t(procedureNames[review.procedureKey])}
                    </span>
                  </div>
                  <p className="text-foreground/70 font-body leading-relaxed italic">"{t(review.text)}"</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
