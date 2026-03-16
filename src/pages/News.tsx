import AnimatedSection from "@/components/AnimatedSection";
import { useLanguage } from "@/i18n/LanguageContext";
import { newsPage, general } from "@/i18n/translations";

const posts = [
  {
    date: "March 2026",
    title: { en: "Advances in Revision Rhinoplasty: A Review", de: "Fortschritte in der Revisions-Rhinoplastik: Ein Überblick" },
    excerpt: { en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", de: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  },
  {
    date: "February 2026",
    title: { en: "ERS Annual Congress 2026 — Highlights", de: "ERS Jahreskongress 2026 — Highlights" },
    excerpt: { en: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", de: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
  },
  {
    date: "January 2026",
    title: { en: "Understanding Chronic Rhinosinusitis: Patient Guide", de: "Chronische Rhinosinusitis verstehen: Patientenratgeber" },
    excerpt: { en: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", de: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  },
  {
    date: "December 2025",
    title: { en: "Fellowship Experience at Imperial College London", de: "Fellowship-Erfahrung am Imperial College London" },
    excerpt: { en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", de: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  },
];

const News = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-24">
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
          <AnimatedSection>
            <p className="text-gold text-sm tracking-[0.2em] uppercase font-body mb-4">{t(newsPage.label)}</p>
            <h1 className="font-display text-4xl lg:text-5xl text-primary font-semibold mb-6">{t(newsPage.title)}</h1>
            <p className="text-foreground/70 font-body leading-relaxed mb-16">{t(newsPage.intro)}</p>
          </AnimatedSection>

          <div className="space-y-12">
            {posts.map((post, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <article className="border-b border-border pb-12">
                  <span className="text-accent text-xs font-body font-medium tracking-wider uppercase">{post.date}</span>
                  <h2 className="font-display text-2xl text-primary mt-2 mb-3">{t(post.title)}</h2>
                  <p className="text-foreground/60 font-body text-sm leading-relaxed mb-4">{t(post.excerpt)}</p>
                  <span className="text-accent text-sm font-body font-medium cursor-pointer hover:text-accent/80 transition-colors">
                    {t(general.readMore)}
                  </span>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
