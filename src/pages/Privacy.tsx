import AnimatedSection from "@/components/AnimatedSection";
import { useLanguage } from "@/i18n/LanguageContext";

const Privacy = () => {
  const { language } = useLanguage();

  return (
    <div className="pt-24">
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
          <AnimatedSection>
            <p className="text-gold text-sm tracking-[0.2em] uppercase font-body mb-4">
              {language === "de" ? "Datenschutz" : "Privacy"}
            </p>
            <h1 className="font-display text-4xl lg:text-5xl text-primary font-semibold mb-10">
              {language === "de" ? "Datenschutzerklärung" : "Privacy Policy"}
            </h1>

            <div className="prose prose-neutral max-w-none font-body text-foreground/80 leading-relaxed space-y-8">
              <section>
                <h2 className="font-display text-2xl text-primary mb-3">
                  1. {language === "de" ? "Allgemeine Hinweise" : "General Information"}
                </h2>
                <p>
                  {language === "de"
                    ? "Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Die Verarbeitung Ihrer personenbezogenen Daten erfolgt im Einklang mit der Datenschutzgrundverordnung (DSGVO) sowie den geltenden nationalen Datenschutzbestimmungen."
                    : "The protection of your personal data is of particular importance to us. The processing of your personal data is carried out in accordance with the General Data Protection Regulation (GDPR) and applicable national data protection laws."}
                </p>
                <p className="mt-3">
                  {language === "de"
                    ? "Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können, z. B. Name, E-Mail-Adresse oder Inhalte Ihrer Nachricht."
                    : "Personal data is any data that can be used to identify you personally, e.g. name, email address, or the content of your message."}
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-primary mb-3">
                  2. {language === "de" ? "Verantwortliche Stelle" : "Responsible Party"}
                </h2>
                <p className="whitespace-pre-line">
                  {`Dr. med. Marlene Speth\n[Adresse]\n[Telefonnummer]\n[E-Mail-Adresse]`}
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-primary mb-3">
                  3. {language === "de" ? "Datenerfassung auf dieser Website" : "Data Collection on this Website"}
                </h2>
                <h3 className="font-display text-lg text-primary mt-4 mb-2">
                  a) {language === "de" ? "Kontaktformular" : "Contact form"}
                </h3>
                <p>
                  {language === "de"
                    ? "Wenn Sie uns über das Kontaktformular Anfragen zukommen lassen, werden folgende Daten erhoben:"
                    : "When you send enquiries via the contact form, the following data is collected:"}
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>{language === "de" ? "Name" : "Name"}</li>
                  <li>{language === "de" ? "E-Mail-Adresse" : "Email address"}</li>
                  <li>{language === "de" ? "Inhalt der Nachricht" : "Content of the message"}</li>
                </ul>
                <p className="mt-3">
                  {language === "de"
                    ? "Diese Daten werden ausschließlich zum Zweck der Bearbeitung Ihrer Anfrage und für den Fall von Anschlussfragen gespeichert und verarbeitet."
                    : "This data is stored and processed exclusively for the purpose of handling your enquiry and for any follow-up questions."}
                </p>
                <p className="mt-3">
                  <strong>{language === "de" ? "Rechtsgrundlage:" : "Legal basis:"}</strong>{" "}
                  {language === "de"
                    ? "Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO (Einwilligung) und/oder Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen)."
                    : "Processing is based on Art. 6 (1) (a) GDPR (consent) and/or Art. 6 (1) (b) GDPR (pre-contractual measures)."}
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-primary mb-3">
                  4. {language === "de" ? "Verarbeitung besonderer Kategorien personenbezogener Daten" : "Processing of Special Categories of Personal Data"}
                </h2>
                <p>
                  {language === "de"
                    ? "Da diese Website medizinische Leistungen (z. B. Rhinoplastik) betrifft, können die von Ihnen übermittelten Informationen auch gesundheitsbezogene Daten enthalten. Diese zählen gemäß Art. 9 DSGVO zu den besonderen Kategorien personenbezogener Daten."
                    : "Since this website concerns medical services (e.g. rhinoplasty), the information you submit may also contain health-related data. Under Art. 9 GDPR these are considered special categories of personal data."}
                </p>
                <p className="mt-3">
                  {language === "de" ? "Die Verarbeitung erfolgt nur:" : "Processing takes place only:"}
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>
                    {language === "de" ? "mit Ihrer ausdrücklichen Einwilligung, und" : "with your explicit consent, and"}
                  </li>
                  <li>
                    {language === "de" ? "ausschließlich zur Bearbeitung Ihrer Anfrage" : "exclusively for the purpose of handling your enquiry"}
                  </li>
                </ul>
                <p className="mt-3">
                  {language === "de"
                    ? "Wir empfehlen, keine sensiblen medizinischen Details über das Kontaktformular zu übermitteln, sofern dies nicht erforderlich ist."
                    : "We recommend not to share sensitive medical details via the contact form unless necessary."}
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-primary mb-3">
                  5. {language === "de" ? "Speicherdauer" : "Storage Period"}
                </h2>
                <p>
                  {language === "de"
                    ? "Ihre personenbezogenen Daten werden nur so lange gespeichert, wie dies zur Bearbeitung Ihrer Anfrage erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen."
                    : "Your personal data will only be stored for as long as necessary to process your enquiry or to comply with statutory retention obligations."}
                </p>
                <p className="mt-3">
                  {language === "de"
                    ? "Sofern keine weitere Kommunikation erfolgt, werden Ihre Daten in der Regel nach 12 Monaten gelöscht."
                    : "If no further communication takes place, your data will generally be deleted after 12 months."}
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-primary mb-3">
                  6. {language === "de" ? "Weitergabe von Daten" : "Disclosure of Data"}
                </h2>
                <p>
                  {language === "de" ? "Eine Weitergabe Ihrer Daten an Dritte erfolgt nur, wenn:" : "Your data will only be passed on to third parties if:"}
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>
                    {language === "de" ? "dies zur Bearbeitung Ihrer Anfrage erforderlich ist (z. B. internes Personal)," : "it is necessary for processing your enquiry (e.g. internal staff),"}
                  </li>
                  <li>
                    {language === "de" ? "Sie ausdrücklich eingewilligt haben, oder" : "you have expressly consented, or"}
                  </li>
                  <li>
                    {language === "de" ? "eine gesetzliche Verpflichtung besteht" : "there is a legal obligation"}
                  </li>
                </ul>
                <p className="mt-3">
                  {language === "de"
                    ? "Sofern externe Dienstleister eingesetzt werden (z. B. E-Mail-Hosting), sind diese vertraglich zur Einhaltung der Datenschutzvorschriften verpflichtet."
                    : "If external service providers are used (e.g. email hosting), they are contractually obliged to comply with data protection regulations."}
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-primary mb-3">
                  7. {language === "de" ? "Ihre Rechte" : "Your Rights"}
                </h2>
                <p>
                  {language === "de" ? "Sie haben im Rahmen der DSGVO folgende Rechte:" : "Under the GDPR, you have the following rights:"}
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>{language === "de" ? "Recht auf Auskunft über Ihre gespeicherten Daten" : "Right to information about your stored data"}</li>
                  <li>{language === "de" ? "Recht auf Berichtigung unrichtiger Daten" : "Right to rectification of inaccurate data"}</li>
                  <li>{language === "de" ? "Recht auf Löschung („Recht auf Vergessenwerden")" : "Right to erasure ('right to be forgotten')"}</li>
                  <li>{language === "de" ? "Recht auf Einschränkung der Verarbeitung" : "Right to restriction of processing"}</li>
                  <li>{language === "de" ? "Recht auf Datenübertragbarkeit" : "Right to data portability"}</li>
                  <li>{language === "de" ? "Recht auf Widerruf Ihrer Einwilligung jederzeit" : "Right to withdraw consent at any time"}</li>
                </ul>
                <p className="mt-3">
                  {language === "de"
                    ? "Zur Ausübung Ihrer Rechte können Sie uns jederzeit kontaktieren."
                    : "To exercise your rights, you can contact us at any time."}
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-primary mb-3">
                  8. {language === "de" ? "Beschwerderecht bei der Aufsichtsbehörde" : "Right to Lodge a Complaint with a Supervisory Authority"}
                </h2>
                <p>
                  {language === "de"
                    ? "Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren, wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer personenbezogenen Daten rechtswidrig erfolgt."
                    : "You have the right to lodge a complaint with a data protection supervisory authority if you believe that the processing of your personal data is unlawful."}
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-primary mb-3">
                  9. {language === "de" ? "Datensicherheit" : "Data Security"}
                </h2>
                <p>
                  {language === "de"
                    ? "Wir setzen geeignete technische und organisatorische Maßnahmen ein, um Ihre Daten zu schützen, insbesondere durch Verschlüsselung (SSL/HTTPS) und sichere Speicherung."
                    : "We use appropriate technical and organisational measures to protect your data, in particular through encryption (SSL/HTTPS) and secure storage."}
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-primary mb-3">
                  10. {language === "de" ? "Aktualität und Änderungen dieser Datenschutzerklärung" : "Currency and Changes to this Privacy Policy"}
                </h2>
                <p>
                  {language === "de"
                    ? "Wir behalten uns vor, diese Datenschutzerklärung anzupassen, um sie an geänderte Rechtslagen oder bei Änderungen unserer Leistungen anzupassen."
                    : "We reserve the right to update this privacy policy to reflect changes in the legal situation or in our services."}
                </p>
              </section>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
