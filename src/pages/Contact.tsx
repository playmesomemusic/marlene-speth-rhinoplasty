import AnimatedSection from "@/components/AnimatedSection";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { contactPage, procedureNames } from "@/i18n/translations";

const Contact = () => {
  const { t } = useLanguage();

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
                  <MapPin className="text-accent mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-display text-lg text-primary mb-1">{t(contactPage.locationTitle)}</h3>
                    <p className="text-foreground/70 font-body text-sm whitespace-pre-line">
                      {t(contactPage.locationAddress)}
                    </p>
                  </div>
                </div>
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
                  <Clock className="text-accent mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-display text-lg text-primary mb-1">{t(contactPage.hoursTitle)}</h3>
                    <p className="text-foreground/70 font-body text-sm whitespace-pre-line">
                      {t(contactPage.hours)}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <form className="bg-card border border-border rounded-sm p-8 space-y-6">
                <div>
                  <label className="block text-sm font-body font-medium text-foreground mb-2">{t(contactPage.formName)}</label>
                  <input type="text" className="w-full px-4 py-3 border border-input rounded-sm text-sm font-body bg-background focus:outline-none focus:ring-1 focus:ring-ring" placeholder={t(contactPage.formNamePlaceholder)} />
                </div>
                <div>
                  <label className="block text-sm font-body font-medium text-foreground mb-2">{t(contactPage.formEmail)}</label>
                  <input type="email" className="w-full px-4 py-3 border border-input rounded-sm text-sm font-body bg-background focus:outline-none focus:ring-1 focus:ring-ring" placeholder="your@email.com" />
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
                  <textarea rows={4} className="w-full px-4 py-3 border border-input rounded-sm text-sm font-body bg-background focus:outline-none focus:ring-1 focus:ring-ring resize-none" placeholder={t(contactPage.formMessagePlaceholder)} />
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
