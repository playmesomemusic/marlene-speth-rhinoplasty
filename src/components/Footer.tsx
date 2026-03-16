import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { general, procedureNames, footer } from "@/i18n/translations";

const Footer = () => {
  const { t } = useLanguage();

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
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-display text-xl mb-4">{t(general.siteTitle)}</h3>
            <p className="text-sm text-primary-foreground/70 leading-relaxed font-body">
              {t(footer.description)}
            </p>
          </div>
          <div>
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
          <div>
            <h4 className="font-display text-lg mb-4">{t(footer.contactTitle)}</h4>
            <div className="text-sm font-body text-primary-foreground/70 space-y-2">
              {(t(footer.address) as string).split("\n").map((line: string, i: number) => (
                <p key={i}>{line}</p>
              ))}
              <div className="mt-4 pt-4 border-t border-primary-foreground/20">
                <Link to="/contact" className="text-gold hover:text-gold-light transition-colors font-medium">
                  {t(general.bookAConsultation)} →
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center text-xs text-primary-foreground/50 font-body">
          <p>© {new Date().getFullYear()} {t(general.siteTitle)}. {t(footer.rights)}</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/imprint" className="hover:text-primary-foreground/80 transition-colors">{t(footer.imprint)}</Link>
            <Link to="/privacy" className="hover:text-primary-foreground/80 transition-colors">{t(footer.privacy)}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
