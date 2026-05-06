import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { general, procedureNames } from "@/i18n/translations";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [proceduresOpen, setProceduresOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const procedureLinks = [
    { key: "septorhinoplasty", path: "/septorhinoplasty" },
    { key: "septoplasty", path: "/septoplasty" },
    { key: "sinusSurgery", path: "/sinus-surgery" },
    { key: "turbinateSurgery", path: "/turbinate-surgery" },
    { key: "skullBase", path: "/skull-base" },
    { key: "revisionCases", path: "/revision-cases" },
    { key: "furtherENT", path: "/further-ent" },
  ];

  const navItems = [
    { label: t(general.navHome), path: "/" },
    { label: t(general.navAbout), path: "/about" },
    { label: t(general.navNews), path: "/news" },
    { label: t(general.navProcedures), children: procedureLinks },
    { label: t(general.navContact), path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-4 px-6 lg:px-8">
        <Link to="/" className="flex flex-col">
          <span className="font-display text-lg font-semibold tracking-wide text-primary">
            {t(general.siteTitle)}
          </span>
          <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
            {t(general.siteSubtitle)}
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => setProceduresOpen(true)}
                onMouseLeave={() => setProceduresOpen(false)}
              >
                <button className="px-4 py-2 text-sm font-body font-medium text-foreground/80 hover:text-accent transition-colors">
                  {item.label}
                </button>
                {proceduresOpen && (
                  <div className="absolute top-full left-0 mt-0 w-56 bg-card border border-border rounded-md shadow-lg py-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        className="block px-4 py-2.5 text-sm text-foreground/80 hover:text-accent hover:bg-secondary transition-colors"
                      >
                        {t(procedureNames[child.key])}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.path}
                to={item.path!}
                className={`px-4 py-2 text-sm font-body font-medium transition-colors ${
                  location.pathname === item.path
                    ? "text-accent"
                    : "text-foreground/80 hover:text-accent"
                }`}
              >
                {item.label}
              </Link>
            )
          )}

          {/* Language Toggle */}
          <button
            onClick={() => setLanguage(language === "en" ? "de" : "en")}
            className="ml-2 flex items-center gap-1.5 px-3 py-2 text-sm font-body text-foreground/60 hover:text-accent transition-colors"
          >
            <Globe size={14} />
            {language === "en" ? "DE" : "EN"}
          </button>

          <Link
            to="/contact"
            className="ml-2 px-5 py-2.5 text-sm font-medium bg-primary text-primary-foreground rounded-sm hover:bg-primary/90 transition-colors"
          >
            {t(general.bookConsultation)}
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={() => setLanguage(language === "en" ? "de" : "en")}
            className="p-2 text-foreground/60"
          >
            <Globe size={20} />
          </button>
          <button
            className="p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <nav className="container mx-auto px-6 py-4 flex flex-col gap-1">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <span className="block py-2 text-sm font-medium text-muted-foreground uppercase tracking-wider">
                    {item.label}
                  </span>
                  {item.children.map((child) => (
                    <Link
                      key={child.path}
                      to={child.path}
                      onClick={() => setMobileOpen(false)}
                      className="block py-2 pl-4 text-sm text-foreground/80 hover:text-accent"
                    >
                      {t(procedureNames[child.key])}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={item.path}
                  to={item.path!}
                  onClick={() => setMobileOpen(false)}
                  className="block py-2 text-sm font-medium text-foreground/80 hover:text-accent"
                >
                  {item.label}
                </Link>
              )
            )}
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 text-center px-5 py-2.5 text-sm font-medium bg-primary text-primary-foreground rounded-sm"
            >
              {t(general.bookConsultation)}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
