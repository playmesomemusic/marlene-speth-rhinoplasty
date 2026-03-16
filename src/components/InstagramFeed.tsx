import AnimatedSection from "./AnimatedSection";
import { useLanguage } from "@/i18n/LanguageContext";
import { homepage } from "@/i18n/translations";
import { Instagram } from "lucide-react";

// Placeholder Instagram posts — replace with real API integration later
const placeholderPosts = [
  { id: 1, caption: "Behind the scenes at the ERS Congress 2026 #rhinology #ENT", color: "from-accent/30 to-primary/20" },
  { id: 2, caption: "Patient outcome — improved breathing & natural aesthetics #septorhinoplasty", color: "from-primary/20 to-accent/30" },
  { id: 3, caption: "Teaching workshop on revision rhinoplasty techniques #education", color: "from-accent/20 to-muted/50" },
  { id: 4, caption: "New publication on quality of life after sinus surgery #research", color: "from-muted/30 to-accent/20" },
  { id: 5, caption: "Team presentation at international rhinology meeting #conference", color: "from-primary/15 to-accent/25" },
  { id: 6, caption: "Modern endoscopic techniques for better outcomes #innovation", color: "from-accent/25 to-primary/15" },
];

// TODO: Replace PLACEHOLDER_INSTAGRAM_HANDLE with real Instagram username
const INSTAGRAM_HANDLE = "dr.marlene.speth";
const INSTAGRAM_URL = `https://www.instagram.com/${INSTAGRAM_HANDLE}`;

const InstagramFeed = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <div className="flex items-center justify-center gap-3 mb-4">
            <Instagram className="text-accent" size={24} />
            <p className="text-gold text-sm tracking-[0.2em] uppercase font-body">
              @{INSTAGRAM_HANDLE}
            </p>
          </div>
          <h2 className="font-display text-3xl lg:text-4xl text-primary text-center mb-4">
            {t(homepage.instagramTitle)}
          </h2>
          <p className="text-foreground/60 font-body text-center mb-12 max-w-lg mx-auto">
            {t(homepage.instagramSubtitle)}
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {placeholderPosts.map((post, i) => (
            <AnimatedSection key={post.id} delay={i * 0.06}>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block aspect-square bg-gradient-to-br rounded-sm overflow-hidden group relative cursor-pointer"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${post.color}`} />
                <div className="absolute inset-0 flex items-center justify-center p-3">
                  <Instagram className="text-foreground/20" size={32} />
                </div>
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-3">
                  <p className="text-primary-foreground text-xs font-body text-center leading-relaxed">
                    {post.caption}
                  </p>
                </div>
              </a>
            </AnimatedSection>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent font-body font-medium text-sm hover:text-accent/80 transition-colors"
          >
            <Instagram size={16} />
            {t(homepage.viewOnInstagram)}
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
