import AnimatedSection from "@/components/AnimatedSection";
import { useLanguage } from "@/i18n/LanguageContext";
import { newsPage } from "@/i18n/translations";
import { ExternalLink, MapPin, Calendar } from "lucide-react";

import ersImg from "@/assets/congresses/ers-2026.jpg";
import rhinoSummitImg from "@/assets/congresses/rhinoplasty-summit.jpg";
import iferssImg from "@/assets/congresses/iferss-vienna.jpg";
import aaoImg from "@/assets/congresses/aao-hns.jpg";

type Bilingual = { en: string; de: string };

interface Congress {
  date: Bilingual;
  location: Bilingual;
  title: Bilingual;
  role: Bilingual;
  description: Bilingual;
  image: string;
  url?: string;
}

const congresses: Congress[] = [
  {
    date: { en: "April 2026", de: "April 2026" },
    location: { en: "Berlin, Germany", de: "Berlin, Deutschland" },
    title: {
      en: "European Rhinologic Society — Annual Congress 2026",
      de: "European Rhinologic Society — Jahreskongress 2026",
    },
    role: { en: "Faculty & Executive Committee", de: "Faculty & Vorstandsmitglied" },
    description: {
      en: "Chaired educational sessions on revision rhinoplasty and presented research on long-term outcomes following functional septorhinoplasty.",
      de: "Leitung von Fortbildungssitzungen zur Revisions-Rhinoplastik und Vorstellung von Forschungsergebnissen zu Langzeitergebnissen nach funktioneller Septorhinoplastik.",
    },
    image: ersImg,
    url: "https://www.europeanrhinologicsociety.org/",
  },
  {
    date: { en: "February 2026", de: "Februar 2026" },
    location: { en: "London, United Kingdom", de: "London, Vereinigtes Königreich" },
    title: {
      en: "International Rhinoplasty Summit",
      de: "Internationaler Rhinoplastik-Gipfel",
    },
    role: { en: "Invited Speaker", de: "Eingeladene Referentin" },
    description: {
      en: "Lectured on cartilage grafting techniques in complex revision cases and joined a panel discussion on patient-reported outcome measures.",
      de: "Vortrag zu Knorpeltransplantationstechniken in komplexen Revisionsfällen sowie Teilnahme an einer Paneldiskussion zu patientenberichteten Ergebnismessungen.",
    },
    image: rhinoSummitImg,
  },
  {
    date: { en: "November 2025", de: "November 2025" },
    location: { en: "Vienna, Austria", de: "Wien, Österreich" },
    title: {
      en: "IFERSS — International Forum on Endoscopic Sinus Surgery",
      de: "IFERSS — Internationales Forum für endoskopische Nasennebenhöhlenchirurgie",
    },
    role: { en: "Delegate & Poster Presenter", de: "Delegierte & Poster-Präsentation" },
    description: {
      en: "Presented collaborative research on quality-of-life outcomes in chronic rhinosinusitis patients undergoing endoscopic sinus surgery.",
      de: "Präsentation gemeinsamer Forschungsarbeiten zu Lebensqualitäts-Ergebnissen bei Patienten mit chronischer Rhinosinusitis nach endoskopischer Nasennebenhöhlenchirurgie.",
    },
    image: iferssImg,
  },
  {
    date: { en: "September 2025", de: "September 2025" },
    location: { en: "Boston, USA", de: "Boston, USA" },
    title: {
      en: "AAO-HNS Annual Meeting",
      de: "AAO-HNS Jahrestagung",
    },
    role: { en: "Visiting Faculty", de: "Gast-Faculty" },
    description: {
      en: "Participated in transatlantic research exchange and contributed to sessions on facial plastic surgery education and skull base techniques.",
      de: "Teilnahme am transatlantischen Forschungsaustausch und Mitwirkung bei Sitzungen zur Ausbildung in plastischer Gesichtschirurgie und Schädelbasis-Techniken.",
    },
    image: aaoImg,
    url: "https://www.entnet.org/",
  },
];

const News = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-24">
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
          <AnimatedSection>
            <p className="text-gold text-sm tracking-[0.2em] uppercase font-body mb-4">{t(newsPage.label)}</p>
            <h1 className="font-display text-4xl lg:text-5xl text-primary font-semibold mb-6">{t(newsPage.title)}</h1>
            <p className="text-foreground/70 font-body leading-relaxed mb-16 max-w-2xl">{t(newsPage.intro)}</p>
          </AnimatedSection>

          <div className="space-y-16">
            {congresses.map((c, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <article className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start border-b border-border pb-16 last:border-b-0">
                  <div className="md:col-span-2">
                    <img
                      src={c.image}
                      alt={t(c.title) as string}
                      loading="lazy"
                      width={1024}
                      height={640}
                      className="w-full h-56 md:h-64 object-cover rounded-sm shadow-md"
                    />
                  </div>
                  <div className="md:col-span-3">
                    <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs font-body text-accent uppercase tracking-wider mb-3">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar size={12} /> {t(c.date)}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin size={12} /> {t(c.location)}
                      </span>
                    </div>
                    <h2 className="font-display text-2xl text-primary mb-2">{t(c.title)}</h2>
                    <p className="text-foreground/60 font-body text-sm italic mb-4">{t(c.role)}</p>
                    <p className="text-foreground/75 font-body text-sm leading-relaxed mb-4">
                      {t(c.description)}
                    </p>
                    {c.url && (
                      <a
                        href={c.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-accent text-sm font-body font-medium hover:text-accent/80 transition-colors"
                      >
                        {t(newsPage.visitWebsite)}
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
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
