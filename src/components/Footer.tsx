import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Linkedin, Mail, Phone } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { general, procedureNames, footer, contactPage } from "@/i18n/translations";

const Footer = () => {
  const { t } = useLanguage();
  const [imprintOpen, setImprintOpen] = useState(false);

  const procedureLinks = [
    { key: "septorhinoplasty", path: "/septorhinoplasty" },
    { key: "septoplasty", path: "/septoplasty" },
    { key: "sinusSurgery", path: "/sinus-surgery" },
    { key: "turbinateSurgery", path: "/turbinate-surgery" },
    { key: "skullBase", path: "/skull-base" },
    { key: "revisionCases", path: "/revision-cases" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main footer — single cohesive grid */}
      <div className="container mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <h3 className="font-display text-xl mb-4">{t(general.siteTitle)}</h3>
            <p className="text-sm text-primary-foreground/70 leading-relaxed font-body mb-6">
              {t(footer.description)}
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-accent-foreground font-body font-medium text-sm rounded-sm hover:bg-accent/90 transition-colors"
            >
              {t(general.bookAConsultation)}
              <span aria-hidden>→</span>
            </Link>
          </div>

          {/* Procedures */}
          <div className="lg:col-span-4">
            <h4 className="font-display text-lg mb-4">{t(footer.proceduresTitle)}</h4>
            <ul className="space-y-2 text-sm font-body text-primary-foreground/70">
              {procedureLinks.map((proc) => (
                <li key={proc.path}>
                  <Link to={proc.path} className="hover:text-gold transition-colors">
                    {t(procedureNames[proc.key])}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in touch */}
          <div className="lg:col-span-4">
            <h4 className="font-display text-lg mb-4">{t(footer.getInTouchTitle)}</h4>
            <ul className="space-y-3 text-sm font-body text-primary-foreground/80">
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-gold flex-shrink-0" />
                <span>{t(contactPage.phone)}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-gold flex-shrink-0" />
                <span>{t(contactPage.email)}</span>
              </li>
              <li className="flex items-center gap-3">
                <Linkedin size={16} className="text-gold flex-shrink-0" />
                <a
                  href={t(general.linkedinUrl) as string}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors"
                >
                  {t(footer.linkedin)}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar with collapsible Imprint */}
      <div className="border-t border-primary-foreground/15">
        <div className="container mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-primary-foreground/60 font-body">
            <p>© {new Date().getFullYear()} {t(general.siteTitle)}. {t(footer.rights)}</p>
            <div className="flex flex-wrap gap-6 items-center">
              <button
                onClick={() => setImprintOpen((v) => !v)}
                aria-expanded={imprintOpen}
                className="flex items-center gap-1 hover:text-primary-foreground/90 transition-colors"
              >
                {t(footer.imprint)}
                <ChevronDown
                  size={14}
                  className={`transition-transform ${imprintOpen ? "rotate-180" : ""}`}
                />
              </button>
              <Link to="/privacy" className="hover:text-primary-foreground/90 transition-colors">
                {t(footer.privacy)}
              </Link>
            </div>
          </div>

          {imprintOpen && (
            <div className="mt-4 pt-4 border-t border-primary-foreground/10 text-xs text-primary-foreground/70 font-body space-y-1 leading-relaxed">
              {(t(footer.address) as string).split("\n").map((line: string, i: number) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
