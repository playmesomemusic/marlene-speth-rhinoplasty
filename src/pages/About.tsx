import AnimatedSection from "@/components/AnimatedSection";
import drSpethPortrait from "@/assets/dr-speth-portrait.webp";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { aboutPage, general } from "@/i18n/translations";

const memberships = [
  { en: "Executive Committee, European Rhinologic Society (ERS)", de: "Vorstandsmitglied, European Rhinologic Society (ERS)" },
  { en: "Chair, ERS Educational Committee", de: "Vorsitzende, ERS Bildungskomitee" },
  { en: "Member, ERS Scientific Committee", de: "Mitglied, ERS Wissenschaftskomitee" },
  { en: "Rhinology team, Young Confederation of European ORL-HNS (Y-CEORL)", de: "Rhinologie-Team, Young Confederation of European ORL-HNS (Y-CEORL)" },
  { en: "Board member, EUSICA", de: "Vorstandsmitglied, EUSICA" },
];

const timelineItems = [
  { year: { en: "2024–2025", de: "2024–2025" }, title: { en: "Rhinology Fellowship", de: "Rhinologie-Fellowship" }, desc: { en: "Royal College–approved fellowship at Charing Cross Hospital, Imperial College London, under Prof. Hesam Saleh.", de: "Vom Royal College anerkanntes Fellowship am Charing Cross Hospital, Imperial College London, unter Prof. Hesam Saleh." } },
  { year: { en: "Present", de: "Aktuell" }, title: { en: "Consultant ENT Surgeon", de: "Fachärztin für HNO-Heilkunde" }, desc: { en: "Subspecialty focus on rhinology and facial plastic surgery.", de: "Subspezialisierung auf Rhinologie und plastische Gesichtschirurgie." } },
  { year: { en: "Ongoing", de: "Laufend" }, title: { en: "European Rhinologic Society", de: "European Rhinologic Society" }, desc: { en: "Executive Committee member, Chair of the Educational Committee, member of the Scientific Committee.", de: "Vorstandsmitglied, Vorsitzende des Bildungskomitees, Mitglied des Wissenschaftskomitees." } },
  { year: { en: "Ongoing", de: "Laufend" }, title: { en: "Academic & Research", de: "Akademik & Forschung" }, desc: { en: "Collaboration with research groups in the US and Austria, focusing on chronic rhinosinusitis and patient quality of life.", de: "Zusammenarbeit mit Forschungsgruppen in den USA und Österreich, Fokus auf chronische Rhinosinusitis und Lebensqualität der Patienten." } },
  { year: { en: "Prior", de: "Zuvor" }, title: { en: "Specialist Training", de: "Facharztausbildung" }, desc: { en: "Completed ENT specialist training in Switzerland with a developing focus on revision nasal surgery.", de: "Abgeschlossene HNO-Facharztausbildung in der Schweiz mit sich entwickelndem Schwerpunkt auf Revisions-Nasenchirurgie." } },
  { year: { en: "Co-Founder", de: "Mitgründerin" }, title: { en: "Carematters e.V.", de: "Carematters e.V." }, desc: { en: "International initiative providing ENT education and support to physicians in conflict-affected countries.", de: "Internationale Initiative zur HNO-Fortbildung und Unterstützung von Ärzten in Krisengebieten." } },
];

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <p className="text-gold text-sm tracking-[0.2em] uppercase font-body mb-4">{t(aboutPage.label)}</p>
            <h1 className="font-display text-4xl lg:text-5xl text-primary font-semibold mb-6">
              {t(aboutPage.title)}
            </h1>
            <p className="text-foreground/70 font-body leading-relaxed mb-4">{t(aboutPage.bio1)}</p>
            <p className="text-foreground/70 font-body leading-relaxed mb-4">{t(aboutPage.bio2)}</p>
            <p className="text-foreground/70 font-body leading-relaxed">{t(aboutPage.bio3)}</p>
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
            <h2 className="font-display text-3xl text-primary mb-8">{t(aboutPage.membershipsTitle)}</h2>
            <ul className="space-y-4 text-foreground/70 font-body leading-relaxed">
              {memberships.map((m, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span>{t(m)}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
          <AnimatedSection>
            <h2 className="font-display text-3xl text-primary mb-12">{t(aboutPage.careerTitle)}</h2>
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
                    <span className="text-accent text-xs font-body font-medium tracking-wider uppercase">{t(item.year)}</span>
                    <h3 className="font-display text-lg text-primary mt-1">{t(item.title)}</h3>
                    <p className="text-foreground/70 font-body text-sm leading-relaxed mt-1">{t(item.desc)}</p>
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
            <h2 className="font-display text-3xl text-primary-foreground mb-4">{t(aboutPage.ctaTitle)}</h2>
            <p className="text-primary-foreground/60 font-body max-w-xl mx-auto mb-8">
              {t(aboutPage.ctaText)}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-block px-8 py-3 bg-accent text-accent-foreground font-body font-medium rounded-sm hover:bg-accent/90 transition-colors"
              >
                {t(general.navContact)}
              </Link>
              <a
                href={t(general.linkedinUrl) as string}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 border border-primary-foreground/30 text-primary-foreground font-body font-medium rounded-sm hover:border-primary-foreground/60 transition-colors"
              >
                {t(general.linkedinProfile)}
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default About;
