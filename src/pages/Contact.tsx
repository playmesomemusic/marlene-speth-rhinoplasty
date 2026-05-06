import { useState } from "react";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import { Mail, Phone, Linkedin } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { contactPage, procedureNames, general } from "@/i18n/translations";

const Contact = () => {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [privacyError, setPrivacyError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let valid = true;
    if (!email.trim()) {
      setEmailError(t({ en: "Email is required.", de: "E-Mail ist erforderlich." }) as string);
      valid = false;
    }
    if (!privacyAccepted) {
      setPrivacyError(t(contactPage.privacyError) as string);
      valid = false;
    }
    if (!valid) return;
    setEmailError("");
    setPrivacyError("");
  };

  return (
    <div className="pt-24">
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <AnimatedSection>
              <p className="text-gold text-sm tracking-[0.2em] uppercase font-body mb-4">{t(contactPage.label)}</p>
              <h1 className="font-display text-4xl lg:text-5xl text-primary font-semibold mb-6">
                {t(contactPage.title)}
              </h1>
              <p className="text-foreground/70 font-body leading-relaxed mb-10">
                {t(contactPage.intro)}
              </p>

              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <Phone className="text-accent mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-display text-lg text-primary mb-1">{t(contactPage.phoneTitle)}</h3>
                    <p className="text-foreground/70 font-body text-sm">{t(contactPage.phone)}</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <Mail className="text-accent mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-display text-lg text-primary mb-1">{t(contactPage.emailTitle)}</h3>
                    <p className="text-foreground/70 font-body text-sm">{t(contactPage.email)}</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <Linkedin className="text-accent mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-display text-lg text-primary mb-1">{t(general.linkedinProfile)}</h3>
                    <a
                      href={t(general.linkedinUrl) as string}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-accent/80 transition-colors font-body text-sm"
                    >
                      linkedin.com/in/marlene-speth
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <form onSubmit={handleSubmit} noValidate className="bg-card border border-border rounded-sm p-8 space-y-6">
                <div>
                  <label className="block text-sm font-body font-medium text-foreground mb-2">{t(contactPage.formName)}</label>
                  <input type="text" className="w-full px-4 py-3 border border-input rounded-sm text-sm font-body bg-background focus:outline-none focus:ring-1 focus:ring-ring" placeholder={t(contactPage.formNamePlaceholder) as string} />
                </div>
                <div>
                  <label className="block text-sm font-body font-medium text-foreground mb-2">
                    {t(contactPage.formEmail)} <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    aria-required="true"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); if (emailError) setEmailError(""); }}
                    className={`w-full px-4 py-3 border rounded-sm text-sm font-body bg-background focus:outline-none focus:ring-1 focus:ring-ring ${
                      emailError ? "border-destructive" : "border-input"
                    }`}
                    placeholder="your@email.com"
                  />
                  {emailError && (
                    <p className="mt-2 text-xs text-destructive font-body">{emailError}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-body font-medium text-foreground mb-2">{t(contactPage.formPhone)}</label>
                  <input type="tel" className="w-full px-4 py-3 border border-input rounded-sm text-sm font-body bg-background focus:outline-none focus:ring-1 focus:ring-ring" placeholder="+49 ..." />
                </div>
                <div>
                  <label className="block text-sm font-body font-medium text-foreground mb-2">{t(contactPage.formEnquiry)}</label>
                  <select className="w-full px-4 py-3 border border-input rounded-sm text-sm font-body bg-background focus:outline-none focus:ring-1 focus:ring-ring">
                    <option>{t(contactPage.enquiryGeneral)}</option>
                    <option>{t(procedureNames.septorhinoplasty)}</option>
                    <option>{t(procedureNames.septoplasty)}</option>
                    <option>{t(procedureNames.sinusSurgery)}</option>
                    <option>{t(procedureNames.revisionCases)}</option>
                    <option>{t(contactPage.enquiryOther)}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-body font-medium text-foreground mb-2">{t(contactPage.formMessage)}</label>
                  <textarea rows={4} className="w-full px-4 py-3 border border-input rounded-sm text-sm font-body bg-background focus:outline-none focus:ring-1 focus:ring-ring resize-none" placeholder={t(contactPage.formMessagePlaceholder) as string} />
                </div>
                <div>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={privacyAccepted}
                      onChange={(e) => {
                        setPrivacyAccepted(e.target.checked);
                        if (privacyError && e.target.checked) setPrivacyError("");
                      }}
                      required
                      aria-required="true"
                      className="mt-1 h-4 w-4 rounded border-input text-primary focus:ring-1 focus:ring-ring"
                    />
                    <span className="text-sm font-body text-foreground/80 leading-relaxed">
                      {t(contactPage.privacyConsent)}{" "}
                      <Link to="/privacy" className="text-accent hover:text-accent/80 underline">
                        {t(contactPage.privacyConsentLink)}
                      </Link>
                      {t(contactPage.privacyConsentSuffix)} <span className="text-destructive">*</span>
                    </span>
                  </label>
                  {privacyError && (
                    <p className="mt-2 text-xs text-destructive font-body">{privacyError}</p>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-3.5 bg-primary text-primary-foreground font-body font-medium text-sm rounded-sm hover:bg-primary/90 transition-colors"
                >
                  {t(contactPage.formSubmit)}
                </button>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
