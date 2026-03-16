import AnimatedSection from "@/components/AnimatedSection";
import { Link } from "react-router-dom";

const posts = [
  {
    date: "March 2026",
    title: "Advances in Revision Rhinoplasty: A Review",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    date: "February 2026",
    title: "ERS Annual Congress 2026 — Highlights",
    excerpt: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
  },
  {
    date: "January 2026",
    title: "Understanding Chronic Rhinosinusitis: Patient Guide",
    excerpt: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
  },
  {
    date: "December 2025",
    title: "Fellowship Experience at Imperial College London",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const News = () => {
  return (
    <div className="pt-24">
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
          <AnimatedSection>
            <p className="text-gold text-sm tracking-[0.2em] uppercase font-body mb-4">News & Blog</p>
            <h1 className="font-display text-4xl lg:text-5xl text-primary font-semibold mb-6">Latest Updates</h1>
            <p className="text-foreground/70 font-body leading-relaxed mb-16">
              Insights, research updates, and news from the world of rhinology and facial plastic surgery.
            </p>
          </AnimatedSection>

          <div className="space-y-12">
            {posts.map((post, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <article className="border-b border-border pb-12">
                  <span className="text-accent text-xs font-body font-medium tracking-wider uppercase">{post.date}</span>
                  <h2 className="font-display text-2xl text-primary mt-2 mb-3">{post.title}</h2>
                  <p className="text-foreground/60 font-body text-sm leading-relaxed mb-4">{post.excerpt}</p>
                  <span className="text-accent text-sm font-body font-medium cursor-pointer hover:text-accent/80 transition-colors">
                    Read more →
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
