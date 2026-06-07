/**
 * TRANSLATIONS FILE — Single source of truth for EN/DE content.
 * 
 * When you update text in one language, update the other language
 * in the same object to keep both versions in sync.
 * 
 * Usage: const { t } = useLanguage(); t('key')
 */

export type Language = "en" | "de";

type TranslationValue = string | string[];
type Translations = Record<string, Record<Language, TranslationValue>>;

// ─── GENERAL / NAVIGATION ───────────────────────────────────────────
export const general: Translations = {
  siteTitle: {
    en: "Dr. med. Marlene Speth",
    de: "Dr. med. Marlene Speth",
  },
  siteSubtitle: {
    en: "Rhinology & Facial Plastic Surgery",
    de: "Rhinologie & Plastische Gesichtschirurgie",
  },
  navHome: { en: "Home", de: "Home" },
  navAbout: { en: "About", de: "Über mich" },
  navNews: { en: "Congresses", de: "Kongresse" },
  navProcedures: { en: "Procedures", de: "Eingriffe" },
  navContact: { en: "Contact", de: "Kontakt" },
  bookConsultation: { en: "Get in Touch", de: "Kontakt aufnehmen" },
  bookAConsultation: { en: "Get in Touch", de: "Kontakt aufnehmen" },
  linkedinProfile: { en: "LinkedIn Profile", de: "LinkedIn-Profil" },
  linkedinUrl: { en: "https://www.linkedin.com/in/marlene-speth/", de: "https://www.linkedin.com/in/marlene-speth/" },
  learnMore: { en: "Learn more →", de: "Mehr erfahren →" },
  readMore: { en: "Read more →", de: "Weiterlesen →" },
  procedure: { en: "Procedure", de: "Eingriff" },
};

// ─── PROCEDURE NAMES (used in nav, cards, footer) ───────────────────
export const procedureNames: Translations = {
  septorhinoplasty: { en: "Septorhinoplasty", de: "Septorhinoplastik" },
  septoplasty: { en: "Septoplasty", de: "Septumplastik" },
  sinusSurgery: { en: "Sinus Surgery", de: "Nasennebenhöhlen-OP" },
  turbinateSurgery: { en: "Turbinate Surgery", de: "Muschelchirurgie" },
  skullBase: { en: "Skull Base Surgery", de: "Schädelbasischirurgie" },
  revisionCases: { en: "Revision Cases", de: "Revisionseingriffe" },
  furtherENT: { en: "Further ENT", de: "Weitere HNO-Leistungen" },
};

// ─── HOMEPAGE ───────────────────────────────────────────────────────
export const homepage: Translations = {
  heroTagline: {
    en: "Rhinology · Facial Plastic Surgery · Munich",
    de: "Rhinologie · Plastische Gesichtschirurgie · München",
  },
  heroDescription: {
    en: "Consultant ENT Surgeon specialising in rhinoplasty, revision nasal surgery, and complex rhinological conditions.",
    de: "Fachärztin für HNO-Heilkunde mit Schwerpunkt Rhinoplastik, Revisions-Nasenchirurgie und komplexe rhinologische Erkrankungen.",
  },
  academicProfile: { en: "Academic Profile", de: "Akademisches Profil" },
  philosophyTitle: { en: "Precision Meets Aesthetics", de: "Präzision trifft Ästhetik" },
  philosophyText: {
    en: "With a subspecialty focus on rhinology and facial plastic surgery, Dr. Speth combines meticulous surgical technique with an understanding of facial harmony. Every procedure is approached with the goal of achieving balanced, natural, and long-lasting results — whether functional, cosmetic, or both.",
    de: "Mit einem Subspezialisierungsschwerpunkt auf Rhinologie und plastischer Gesichtschirurgie verbindet Dr. Speth sorgfältige chirurgische Technik mit einem Verständnis für Gesichtsharmonie. Jeder Eingriff wird mit dem Ziel durchgeführt, ausgewogene, natürliche und langanhaltende Ergebnisse zu erzielen — ob funktionell, kosmetisch oder beides.",
  },
  expertiseLabel: { en: "Expertise", de: "Fachgebiete" },
  proceduresTitle: { en: "Procedures", de: "Eingriffe" },
  credentialsLabel: { en: "Credentials", de: "Qualifikationen" },
  credentialsTitle: { en: "International Expertise", de: "Internationale Expertise" },
  credentialsText: {
    en: "Dr. Speth completed her specialist training in Switzerland and a Royal College–approved fellowship in rhinology at Charing Cross Hospital, Imperial College London. She serves on the Executive Committee of the European Rhinologic Society and chairs its Educational Committee.",
    de: "Dr. Speth absolvierte ihre Facharztausbildung in der Schweiz und ein vom Royal College anerkanntes Fellowship in Rhinologie am Charing Cross Hospital, Imperial College London. Sie ist Mitglied des Vorstands der European Rhinologic Society und leitet deren Bildungskomitee.",
  },
  viewProfile: { en: "View full academic profile →", de: "Vollständiges Profil ansehen →" },
  ctaTitle: { en: "Get in Touch", de: "Kontakt aufnehmen" },
  ctaText: {
    en: "Have a question about nasal function, facial harmony, or a complex rhinological case? Reach out to Dr. Speth and her team in Munich.",
    de: "Haben Sie eine Frage zur Nasenfunktion, Gesichtsharmonie oder zu einem komplexen rhinologischen Fall? Wenden Sie sich an Dr. Speth und ihr Team in München.",
  },
  yearsExp: { en: "Years Experience", de: "Jahre Erfahrung" },
  instagramTitle: { en: "Follow on Instagram", de: "Folgen Sie auf Instagram" },
  instagramSubtitle: {
    en: "Latest updates from the practice",
    de: "Aktuelle Neuigkeiten aus der Praxis",
  },
  viewOnInstagram: { en: "View on Instagram", de: "Auf Instagram ansehen" },
  // Trust badges
  trustSpecialist: { en: "Rhinology Specialist", de: "Rhinologie-Spezialistin" },
  trustExperience: { en: "15+ Years Experience", de: "15+ Jahre Erfahrung" },
  trustUniversity: { en: "University-trained Surgeon", de: "Universitär ausgebildete Chirurgin" },
  trustMunich: { en: "Based in Munich", de: "Standort München" },
  // Homepage FAQ
  homeFaqTitle: { en: "Frequently Asked Questions", de: "Häufig gestellte Fragen" },
  homeFaq1Q: { en: "What is the difference between functional and cosmetic rhinoplasty?", de: "Was ist der Unterschied zwischen funktioneller und kosmetischer Rhinoplastik?" },
  homeFaq1A: {
    en: "Functional rhinoplasty focuses on improving nasal breathing by correcting structural issues such as a deviated septum or enlarged turbinates. Cosmetic rhinoplasty addresses the external appearance of the nose. In many cases, both can be combined in a single procedure.",
    de: "Funktionelle Rhinoplastik konzentriert sich auf die Verbesserung der Nasenatmung durch Korrektur struktureller Probleme wie einer Nasenscheidewandverkrümmung oder vergrößerter Nasenmuscheln. Kosmetische Rhinoplastik behandelt das äußere Erscheinungsbild der Nase. In vielen Fällen können beide in einem einzigen Eingriff kombiniert werden.",
  },
  homeFaq2Q: { en: "How long does recovery take after nasal surgery?", de: "Wie lange dauert die Erholung nach einer Nasenoperation?" },
  homeFaq2A: {
    en: "Most patients can return to desk work within 1–2 weeks. Swelling gradually subsides over several months, with final results typically visible after 12–18 months. Dr. Speth will provide a personalised recovery timeline during your consultation.",
    de: "Die meisten Patienten können innerhalb von 1–2 Wochen an einen Schreibtischarbeitsplatz zurückkehren. Schwellungen klingen über mehrere Monate hinweg ab, die endgültigen Ergebnisse sind in der Regel nach 12–18 Monaten sichtbar. Dr. Speth erstellt Ihnen einen individuellen Erholungsplan während der Beratung.",
  },
  homeFaq3Q: { en: "Can rhinoplasty improve my breathing?", de: "Kann eine Rhinoplastik meine Atmung verbessern?" },
  homeFaq3A: {
    en: "Yes. Many patients who undergo rhinoplasty experience significant improvement in nasal airflow, particularly when the procedure addresses a deviated septum, nasal valve collapse, or enlarged turbinates.",
    de: "Ja. Viele Patienten, die sich einer Rhinoplastik unterziehen, erfahren eine deutliche Verbesserung des Luftstroms durch die Nase, insbesondere wenn der Eingriff eine Nasenscheidewandverkrümmung, einen Nasenklappendefekt oder vergrößerte Nasenmuscheln behandelt.",
  },
  homeFaq4Q: { en: "What should I expect during a consultation?", de: "Was erwartet mich bei einer Beratung?" },
  homeFaq4A: {
    en: "During your consultation, Dr. Speth will perform a thorough examination, discuss your concerns and goals, review imaging if needed, and explain treatment options including expected outcomes and recovery. There is no obligation to proceed.",
    de: "Während Ihrer Beratung führt Dr. Speth eine gründliche Untersuchung durch, bespricht Ihre Anliegen und Ziele, überprüft bei Bedarf Bildgebungen und erläutert Behandlungsoptionen einschließlich erwarteter Ergebnisse und Erholung. Es besteht keine Verpflichtung, fortzufahren.",
  },
  homeFaq5Q: { en: "How much does rhinoplasty cost in Munich?", de: "Wie viel kostet eine Rhinoplastik in München?" },
  homeFaq5A: {
    en: "Costs vary depending on the complexity of the procedure. Dr. Speth will provide a detailed cost estimate after your consultation, once the scope of surgery has been determined. Both private insurance and self-pay options are available.",
    de: "Die Kosten variieren je nach Komplexität des Eingriffs. Dr. Speth erstellt Ihnen einen detaillierten Kostenvoranschlag nach Ihrer Beratung, sobald der Umfang der Operation festgelegt wurde. Sowohl Privatversicherung als auch Selbstzahler-Optionen sind verfügbar.",
  },
};

// ─── PROCEDURE CARD DESCRIPTIONS (homepage grid) ────────────────────
export const procedureDescriptions: Translations = {
  septorhinoplasty: {
    en: "Functional and aesthetic nasal surgery for balanced, long-term results.",
    de: "Funktionelle und ästhetische Nasenchirurgie für ausgewogene, langfristige Ergebnisse.",
  },
  septoplasty: {
    en: "Correction of the deviated nasal septum to restore nasal breathing.",
    de: "Korrektur der Nasenscheidewand zur Wiederherstellung der Nasenatmung.",
  },
  sinusSurgery: {
    en: "Endoscopic surgery for chronic sinusitis and complex sinus conditions.",
    de: "Endoskopische Chirurgie bei chronischer Sinusitis und komplexen Nasennebenhöhlenerkrankungen.",
  },
  turbinateSurgery: {
    en: "Reduction of enlarged turbinates to improve nasal airflow.",
    de: "Verkleinerung vergrößerter Nasenmuscheln zur Verbesserung des Luftstroms.",
  },
  skullBase: {
    en: "Advanced surgical management of skull base pathologies.",
    de: "Fortgeschrittene chirurgische Behandlung von Schädelbasiserkrankungen.",
  },
  revisionCases: {
    en: "Complex revision surgery for patients with prior nasal procedures.",
    de: "Komplexe Revisionschirurgie für Patienten mit vorherigen Naseneingriffen.",
  },
  furtherENT: {
    en: "Comprehensive ear, nose, and throat care.",
    de: "Umfassende Hals-Nasen-Ohren-Versorgung.",
  },
};

// ─── SURGERY PAGE TEMPLATE LABELS ───────────────────────────────────
export const surgeryLabels: Translations = {
  overview: { en: "Overview", de: "Überblick" },
  theProcedure: { en: "The Procedure", de: "Der Eingriff" },
  whatToExpect: { en: "What to Expect", de: "Was Sie erwartet" },
  recovery: { en: "Recovery", de: "Genesung" },
  faq: { en: "Frequently Asked Questions", de: "Häufig gestellte Fragen" },
  ctaTitle: { en: "Have a Question?", de: "Haben Sie eine Frage?" },
  ctaText: {
    en: "Get in touch with Dr. Speth to discuss your individual situation and learn more about possible treatment options.",
    de: "Nehmen Sie Kontakt zu Dr. Speth auf, um Ihre individuelle Situation zu besprechen und mehr über mögliche Behandlungsoptionen zu erfahren.",
  },
  indications: { en: "Indications & Symptoms", de: "Indikationen & Symptome" },
  indicationsIntro: { en: "When is this procedure recommended?", de: "Wann wird dieser Eingriff empfohlen?" },
  diagnostics: { en: "Diagnostics & Assessment", de: "Diagnostik & Untersuchung" },
  results: { en: "Expected Results", de: "Erwartete Ergebnisse" },
  aftercare: { en: "Aftercare & Recovery Guidelines", de: "Nachsorge & Verhaltenshinweise" },
  aftercareCanDo: { en: "You can do immediately:", de: "Sie können sofort:" },
  aftercareAvoid: { en: "Please avoid:", de: "Bitte vermeiden Sie:" },
  // Before/After gallery
  beforeAfterTitle: { en: "Results & Expectations", de: "Ergebnisse & Erwartungen" },
  beforeAfterText: {
    en: "Every patient is unique, and results vary based on individual anatomy and healing. Dr. Speth is committed to achieving natural, balanced outcomes that respect each patient's facial harmony. A detailed discussion of realistic expectations is an essential part of every consultation.",
    de: "Jeder Patient ist einzigartig, und die Ergebnisse variieren je nach individueller Anatomie und Heilungsverlauf. Dr. Speth ist bestrebt, natürliche, ausgewogene Ergebnisse zu erzielen, die die Gesichtsharmonie jedes Patienten respektieren. Eine ausführliche Besprechung realistischer Erwartungen ist ein wesentlicher Bestandteil jeder Beratung.",
  },
  beforeAfterPlaceholder: {
    en: "Patient gallery coming soon. Contact us to see case examples during your consultation.",
    de: "Patientengalerie demnächst verfügbar. Kontaktieren Sie uns, um Fallbeispiele während Ihrer Beratung zu sehen.",
  },
  // Consultation process
  consultationTitle: { en: "Your Path to Treatment", de: "Ihr Weg zur Behandlung" },
  consultStep1Title: { en: "Initial Consultation", de: "Erstberatung" },
  consultStep1Text: {
    en: "A thorough examination, discussion of your concerns, and review of your medical history.",
    de: "Eine gründliche Untersuchung, Besprechung Ihrer Anliegen und Überprüfung Ihrer Krankengeschichte.",
  },
  consultStep2Title: { en: "Personalised Planning", de: "Individuelle Planung" },
  consultStep2Text: {
    en: "Imaging, facial analysis, and a tailored surgical plan aligned with your goals.",
    de: "Bildgebung, Gesichtsanalyse und ein maßgeschneiderter Operationsplan entsprechend Ihrer Ziele.",
  },
  consultStep3Title: { en: "The Procedure", de: "Der Eingriff" },
  consultStep3Text: {
    en: "Surgery performed with precision in a modern clinical setting under specialist care.",
    de: "Durchführung des Eingriffs mit Präzision in einem modernen klinischen Umfeld unter fachärztlicher Betreuung.",
  },
  consultStep4Title: { en: "Recovery & Follow-up", de: "Erholung & Nachsorge" },
  consultStep4Text: {
    en: "Structured aftercare with regular follow-up appointments to ensure optimal healing.",
    de: "Strukturierte Nachsorge mit regelmäßigen Kontrollterminen für eine optimale Heilung.",
  },
};

// ─── ABOUT PAGE ─────────────────────────────────────────────────────
export const aboutPage: Translations = {
  label: { en: "About", de: "Über mich" },
  title: { en: "Dr. med. Marlene M. Speth, M.A.", de: "Dr. med. Marlene M. Speth, M.A." },
  bio1: {
    en: "Dr. Marlene M. Speth is a Consultant in Otolaryngology (ENT), with a subspecialty focus on rhinology and facial plastic surgery.",
    de: "Dr. Marlene M. Speth ist Fachärztin für Hals-Nasen-Ohren-Heilkunde mit Subspezialisierung in Rhinologie und plastischer Gesichtschirurgie.",
  },
  bio2: {
    en: "Her clinical practice focuses in particular on revision nasal surgery, addressing both nasal function and appearance, and on the management of complex rhinological conditions. Her academic work centres on rhinology and facial plastic surgery, with a strong emphasis on achieving balanced and long-term outcomes.",
    de: "Ihre klinische Praxis konzentriert sich insbesondere auf Revisions-Nasenchirurgie, die sowohl Nasenfunktion als auch Ästhetik behandelt, sowie auf die Behandlung komplexer rhinologischer Erkrankungen. Ihre akademische Arbeit konzentriert sich auf Rhinologie und plastische Gesichtschirurgie mit starkem Fokus auf ausgewogene und langfristige Ergebnisse.",
  },
  bio3: {
    en: "In recent years, she has collaborated closely with research groups in the United States and Austria, focusing on chronic rhinosinusitis and the quality of life of affected patients.",
    de: "In den letzten Jahren hat sie eng mit Forschungsgruppen in den USA und Österreich zusammengearbeitet, mit Fokus auf chronische Rhinosinusitis und die Lebensqualität betroffener Patienten.",
  },
  membershipsTitle: { en: "Professional Memberships", de: "Mitgliedschaften" },
  careerTitle: { en: "Career & Achievements", de: "Karriere & Erfolge" },
  ctaTitle: { en: "Get in Touch", de: "Kontakt aufnehmen" },
  ctaText: {
    en: "Whether you are a patient seeking consultation or a colleague exploring collaboration, Dr. Speth welcomes your enquiry.",
    de: "Ob Sie als Patient eine Beratung suchen oder als Kollege eine Zusammenarbeit erkunden — Dr. Speth freut sich auf Ihre Anfrage.",
  },
};

// ─── CONTACT PAGE ───────────────────────────────────────────────────
export const contactPage: Translations = {
  label: { en: "Contact", de: "Kontakt" },
  title: { en: "Get in Touch", de: "Kontakt aufnehmen" },
  intro: {
    en: "Whether you have a question about nasal surgery or wish to discuss a complex rhinological condition, Dr. Speth and her team look forward to hearing from you.",
    de: "Ob Sie eine Frage zur Nasenchirurgie haben oder eine komplexe rhinologische Erkrankung besprechen möchten — Dr. Speth und ihr Team freuen sich auf Ihre Nachricht.",
  },
  locationTitle: { en: "Location", de: "Standort" },
  locationAddress: {
    en: "Private Practice\nMusterstraße 1\n80333 München",
    de: "Privatpraxis\nMusterstraße 1\n80333 München",
  },
  phoneTitle: { en: "Phone", de: "Telefon" },
  phone: { en: "+49 (0) 89 xxxx xxxx", de: "+49 (0) 89 xxxx xxxx" },
  emailTitle: { en: "Email", de: "E-Mail" },
  email: { en: "praxis@example.com", de: "praxis@example.com" },
  hoursTitle: { en: "Consultation Hours", de: "Sprechzeiten" },
  hours: {
    en: "Monday – Friday: 09:00 – 17:00\nBy appointment only",
    de: "Montag – Freitag: 09:00 – 17:00\nNur nach Terminvereinbarung",
  },
  formName: { en: "Name", de: "Name" },
  formNamePlaceholder: { en: "Your full name", de: "Ihr vollständiger Name" },
  formEmail: { en: "Email", de: "E-Mail" },
  formPhone: { en: "Phone", de: "Telefon" },
  formEnquiry: { en: "Enquiry Type", de: "Art der Anfrage" },
  formMessage: { en: "Message", de: "Nachricht" },
  formMessagePlaceholder: { en: "Tell us about your concern...", de: "Beschreiben Sie Ihr Anliegen..." },
  formSubmit: { en: "Send Enquiry", de: "Anfrage senden" },
  enquiryGeneral: { en: "General Enquiry", de: "Allgemeine Anfrage" },
  enquiryOther: { en: "Other", de: "Sonstiges" },
  privacyConsent: {
    en: "I have read and accept the",
    de: "Ich habe die",
  },
  privacyConsentLink: {
    en: "Privacy Policy",
    de: "Datenschutzerklärung",
  },
  privacyConsentSuffix: {
    en: ".",
    de: " gelesen und akzeptiere sie.",
  },
  privacyError: {
    en: "Please accept the privacy policy to continue.",
    de: "Bitte akzeptieren Sie die Datenschutzerklärung, um fortzufahren.",
  },
};

// ─── CONGRESSES PAGE ────────────────────────────────────────────────
export const newsPage: Translations = {
  label: { en: "Academic Activity", de: "Akademische Aktivität" },
  title: { en: "Congresses & Meetings", de: "Kongresse & Tagungen" },
  intro: {
    en: "An overview of the international congresses, symposia, and scientific meetings Dr. Speth has attended as a speaker, faculty member, or delegate.",
    de: "Ein Überblick über internationale Kongresse, Symposien und wissenschaftliche Tagungen, an denen Dr. Speth als Referentin, Faculty-Mitglied oder Delegierte teilgenommen hat.",
  },
  visitWebsite: { en: "Visit congress website →", de: "Kongress-Website besuchen →" },
};

// ─── REVIEWS PAGE ───────────────────────────────────────────────────
export const reviewsPage: Translations = {
  label: { en: "Testimonials", de: "Erfahrungsberichte" },
  title: { en: "Patient Reviews", de: "Patientenbewertungen" },
  intro: {
    en: "Hear from patients who have trusted Dr. Speth with their care.",
    de: "Erfahrungen von Patienten, die Dr. Speth ihr Vertrauen geschenkt haben.",
  },
};

// ─── FOOTER ─────────────────────────────────────────────────────────
export const footer: Translations = {
  description: {
    en: "Consultant in Otolaryngology (ENT), specialising in rhinology and facial plastic surgery.",
    de: "Fachärztin für HNO-Heilkunde mit Schwerpunkt Rhinologie und plastische Gesichtschirurgie.",
  },
  proceduresTitle: { en: "Procedures", de: "Eingriffe" },
  contactTitle: { en: "Contact", de: "Kontakt" },
  address: {
    en: "Dr. med. Marlene Speth\nKranzhornweg 1\n83064 Raubling\nGermany",
    de: "Dr. med. Marlene Speth\nKranzhornweg 1\n83064 Raubling",
  },
  imprint: { en: "Imprint", de: "Impressum" },
  privacy: { en: "Privacy Policy", de: "Datenschutz" },
  rights: { en: "All rights reserved.", de: "Alle Rechte vorbehalten." },
  getInTouchTitle: { en: "Get in Touch", de: "Kontakt aufnehmen" },
  getInTouchText: {
    en: "For consultation enquiries or professional collaboration, please reach out directly.",
    de: "Für Beratungsanfragen oder berufliche Zusammenarbeit nehmen Sie bitte direkt Kontakt auf.",
  },
  linkedin: { en: "LinkedIn", de: "LinkedIn" },
};

// ─── SURGERY PAGE DATA ──────────────────────────────────────────────
// Each surgery page's full content, side-by-side EN/DE

export interface SurgeryContent {
  title: Record<Language, string>;
  subtitle: Record<Language, string>;
  overview: Record<Language, string>;
  procedure: Record<Language, string>;
  indications: Record<Language, string[]>;
  diagnostics: Record<Language, string[]>;
  results: Record<Language, string>;
  aftercareDo: Record<Language, string[]>;
  aftercareAvoid: Record<Language, string[]>;
  timeline: Record<Language, { title: string; description: string }[]>;
  recovery: Record<Language, string>;
  faqs: Record<Language, { question: string; answer: string }[]>;
}

export const surgeryData: Record<string, SurgeryContent> = {
  septorhinoplasty: {
    title: { en: "Septorhinoplasty", de: "Septorhinoplastik" },
    subtitle: {
      en: "Combining functional nasal correction with aesthetic refinement for natural, harmonious results.",
      de: "Kombination aus funktioneller Nasenkorrektur und ästhetischer Verfeinerung für natürliche, harmonische Ergebnisse.",
    },
    overview: {
      en: "Septorhinoplasty addresses both the internal nasal structures and the external shape of the nose simultaneously, allowing Dr. Speth to optimise breathing while creating a balanced and natural facial profile. This combined approach ensures that both form and function are addressed in a single procedure.",
      de: "Die Septorhinoplastik behandelt gleichzeitig die inneren Nasenstrukturen und die äußere Nasenform, sodass Dr. Speth die Atmung optimieren und ein ausgewogenes, natürliches Gesichtsprofil schaffen kann. Dieser kombinierte Ansatz stellt sicher, dass sowohl Form als auch Funktion in einem einzigen Eingriff behandelt werden.",
    },
    procedure: {
      en: "The procedure is typically performed under general anaesthesia and takes approximately 2–3 hours. Dr. Speth utilises both open and closed techniques, depending on the complexity of the case. Cartilage grafting may be employed to provide structural support and improve long-term stability.",
      de: "Der Eingriff wird in der Regel unter Vollnarkose durchgeführt und dauert ca. 2–3 Stunden. Dr. Speth verwendet sowohl offene als auch geschlossene Techniken, abhängig von der Komplexität des Falls. Knorpeltransplantate können zur strukturellen Unterstützung und Verbesserung der Langzeitstabilität eingesetzt werden.",
    },
    indications: {
      en: [
        "Difficulty breathing through one or both nostrils",
        "Visible deviation or asymmetry of the nose",
        "Previous nasal trauma causing functional or aesthetic concerns",
        "Chronic nasal congestion not responding to medication",
        "Dissatisfaction with the shape or proportion of the nose",
        "Snoring or sleep-disordered breathing related to nasal obstruction",
      ],
      de: [
        "Schwierigkeiten beim Atmen durch eine oder beide Nasenlöcher",
        "Sichtbare Abweichung oder Asymmetrie der Nase",
        "Vorangegangenes Nasentrauma mit funktionellen oder ästhetischen Bedenken",
        "Chronische Nasenverstopfung, die nicht auf Medikamente anspricht",
        "Unzufriedenheit mit Form oder Proportion der Nase",
        "Schnarchen oder schlafbezogene Atmungsstörung aufgrund von Nasenobstruktion",
      ],
    },
    diagnostics: {
      en: [
        "Detailed clinical examination with nasal endoscopy",
        "High-resolution photography and facial analysis",
        "CT imaging of the nasal and paranasal structures",
        "Discussion of patient goals and realistic expectations",
        "Review of any previous nasal surgery records",
      ],
      de: [
        "Detaillierte klinische Untersuchung mit Nasenendoskopie",
        "Hochauflösende Fotografie und Gesichtsanalyse",
        "CT-Bildgebung der nasalen und paranasalen Strukturen",
        "Besprechung der Patientenziele und realistischer Erwartungen",
        "Überprüfung früherer OP-Berichte",
      ],
    },
    results: {
      en: "Most patients experience significant improvement in nasal breathing within 2–4 weeks. The aesthetic result evolves over 6–12 months as residual swelling subsides. Final results are typically very long-lasting. Patient satisfaction rates for combined septorhinoplasty are high.",
      de: "Die meisten Patienten erfahren innerhalb von 2–4 Wochen eine deutliche Verbesserung der Nasenatmung. Das ästhetische Ergebnis entwickelt sich über 6–12 Monate, während die Restschwellung abklingt. Die endgültigen Ergebnisse sind in der Regel sehr langanhaltend. Die Zufriedenheitsrate bei kombinierter Septorhinoplastik ist hoch.",
    },
    aftercareDo: {
      en: [
        "Sleep with your head elevated for the first 2 weeks",
        "Use saline nasal sprays as directed",
        "Return to light desk work after 7–10 days",
        "Gentle walking from day 1",
      ],
      de: [
        "Schlafen Sie in den ersten 2 Wochen mit erhöhtem Kopf",
        "Verwenden Sie Kochsalz-Nasensprays wie angewiesen",
        "Kehren Sie nach 7–10 Tagen zu leichter Büroarbeit zurück",
        "Leichtes Spazierengehen ab Tag 1",
      ],
    },
    aftercareAvoid: {
      en: [
        "Strenuous exercise for 4–6 weeks",
        "Wearing glasses resting on the nose for 6 weeks",
        "Blowing your nose for 2 weeks",
        "Contact sports for 3 months",
        "Sun exposure to the nose for 3 months",
      ],
      de: [
        "Anstrengende körperliche Aktivität für 4–6 Wochen",
        "Tragen einer Brille auf der Nase für 6 Wochen",
        "Naseputzen für 2 Wochen",
        "Kontaktsport für 3 Monate",
        "Sonnenexposition der Nase für 3 Monate",
      ],
    },
    timeline: {
      en: [
        { title: "Pre-operative Consultation", description: "Detailed assessment, photography, and discussion of goals and expectations." },
        { title: "Day of Surgery", description: "Admission, procedure under general anaesthesia (2–3 hours), and recovery in hospital." },
        { title: "Day 1–2 Post-op", description: "Nasal packing removal, initial follow-up. Mild swelling and bruising expected." },
        { title: "Week 1", description: "Splint removal. Most external bruising resolves. Patients may return to light desk work." },
        { title: "Week 2–4", description: "Gradual improvement in breathing. Avoid strenuous activity." },
        { title: "3–12 Months", description: "Final results become apparent as residual swelling subsides. Follow-up appointments to monitor progress." },
      ],
      de: [
        { title: "Präoperative Beratung", description: "Detaillierte Untersuchung, Fotografie und Besprechung der Ziele und Erwartungen." },
        { title: "Tag der Operation", description: "Aufnahme, Eingriff unter Vollnarkose (2–3 Stunden), Erholung im Krankenhaus." },
        { title: "Tag 1–2 postoperativ", description: "Entfernung der Nasentamponade, erste Nachkontrolle. Leichte Schwellung und Blutergüsse zu erwarten." },
        { title: "Woche 1", description: "Schienenentfernung. Externe Blutergüsse klingen größtenteils ab. Rückkehr zu leichter Büroarbeit möglich." },
        { title: "Woche 2–4", description: "Allmähliche Verbesserung der Atmung. Anstrengende Aktivitäten vermeiden." },
        { title: "3–12 Monate", description: "Endergebnisse werden sichtbar, während die Restschwellung abklingt. Nachsorgetermine zur Kontrolle." },
      ],
    },
    recovery: {
      en: "Most patients can return to desk work within 7–10 days. Strenuous exercise should be avoided for 4–6 weeks. The nose will continue to refine over 6–12 months as internal swelling resolves. Hospital stay is typically 1 night.",
      de: "Die meisten Patienten können nach 7–10 Tagen wieder Büroarbeit aufnehmen. Anstrengende körperliche Aktivität sollte für 4–6 Wochen vermieden werden. Die Nase verfeinert sich über 6–12 Monate, während die innere Schwellung abklingt. Der Krankenhausaufenthalt beträgt in der Regel 1 Nacht.",
    },
    faqs: {
      en: [
        { question: "Is septorhinoplasty covered by insurance?", answer: "When the procedure is medically indicated (e.g., for breathing obstruction), the functional component may be covered. The aesthetic component is typically self-funded." },
        { question: "How long is the hospital stay?", answer: "Most patients stay 1 night in hospital. In some cases, the procedure can be performed as a day case." },
        { question: "When can I fly after surgery?", answer: "We generally recommend waiting 2–3 weeks before flying, though this may vary." },
        { question: "Will there be visible scarring?", answer: "In open rhinoplasty, a small incision is made across the columella. This scar typically heals very well and is barely visible." },
      ],
      de: [
        { question: "Wird die Septorhinoplastik von der Krankenkasse übernommen?", answer: "Wenn der Eingriff medizinisch indiziert ist (z.B. bei Atemwegsbehinderung), kann der funktionelle Anteil übernommen werden. Der ästhetische Anteil ist in der Regel selbst zu tragen." },
        { question: "Wie lange ist der Krankenhausaufenthalt?", answer: "Die meisten Patienten bleiben 1 Nacht im Krankenhaus. In einigen Fällen kann der Eingriff ambulant durchgeführt werden." },
        { question: "Wann kann ich nach der Operation fliegen?", answer: "Wir empfehlen in der Regel, 2–3 Wochen vor dem Fliegen zu warten, dies kann jedoch variieren." },
        { question: "Wird es sichtbare Narben geben?", answer: "Bei der offenen Rhinoplastik wird ein kleiner Schnitt an der Columella gemacht. Diese Narbe heilt in der Regel sehr gut und ist kaum sichtbar." },
      ],
    },
  },

  septoplasty: {
    title: { en: "Septoplasty", de: "Septumplastik" },
    subtitle: {
      en: "Surgical correction of the deviated nasal septum to restore nasal breathing and improve quality of life.",
      de: "Chirurgische Korrektur der Nasenscheidewandverkrümmung zur Wiederherstellung der Nasenatmung und Verbesserung der Lebensqualität.",
    },
    overview: {
      en: "Septoplasty is a surgical procedure to straighten the nasal septum — the partition between the two nasal cavities. A deviated septum can cause breathing difficulties, recurrent sinus infections, and snoring.",
      de: "Die Septumplastik ist ein chirurgischer Eingriff zur Begradigung der Nasenscheidewand — der Trennwand zwischen den beiden Nasenhöhlen. Eine verkrümmte Nasenscheidewand kann Atembeschwerden, wiederkehrende Nasennebenhöhlenentzündungen und Schnarchen verursachen.",
    },
    procedure: {
      en: "The procedure is performed under general anaesthesia and typically takes 45–90 minutes. Through incisions inside the nose, the deviated portions of the septum are repositioned or removed. No external incisions are required, and the outer shape of the nose remains unchanged.",
      de: "Der Eingriff wird unter Vollnarkose durchgeführt und dauert in der Regel 45–90 Minuten. Durch Schnitte innerhalb der Nase werden die abweichenden Teile der Nasenscheidewand neu positioniert oder entfernt. Äußere Schnitte sind nicht erforderlich, die äußere Nasenform bleibt unverändert.",
    },
    indications: {
      en: [
        "Chronic nasal obstruction on one or both sides",
        "Recurrent sinus infections",
        "Snoring or sleep-disordered breathing",
        "Frequent nosebleeds due to septal deviation",
        "Nasal congestion not relieved by medication",
      ],
      de: [
        "Chronische Nasenatmungsbehinderung ein- oder beidseitig",
        "Wiederkehrende Nasennebenhöhlenentzündungen",
        "Schnarchen oder schlafbezogene Atmungsstörungen",
        "Häufiges Nasenbluten durch Septumdeviation",
        "Nasenverstopfung, die nicht auf Medikamente anspricht",
      ],
    },
    diagnostics: {
      en: [
        "Clinical examination with anterior rhinoscopy",
        "Nasal endoscopy to assess degree of deviation",
        "CT scan if sinusitis is suspected",
        "Assessment of nasal airflow",
      ],
      de: [
        "Klinische Untersuchung mit vorderer Rhinoskopie",
        "Nasenendoskopie zur Beurteilung des Deviationsgrades",
        "CT-Scan bei Verdacht auf Sinusitis",
        "Beurteilung des nasalen Luftstroms",
      ],
    },
    results: {
      en: "Nasal breathing typically improves significantly within the first 2–4 weeks. Full healing of the internal structures takes approximately 3 months. Most patients report a substantial improvement in quality of life.",
      de: "Die Nasenatmung verbessert sich in der Regel deutlich innerhalb der ersten 2–4 Wochen. Die vollständige Heilung der inneren Strukturen dauert ca. 3 Monate. Die meisten Patienten berichten von einer deutlichen Verbesserung der Lebensqualität.",
    },
    aftercareDo: {
      en: [
        "Use saline nasal irrigations from day 1",
        "Sleep with head slightly elevated",
        "Return to light activities after 3–5 days",
        "Gentle walking encouraged",
      ],
      de: [
        "Nasenspülungen mit Kochsalzlösung ab Tag 1",
        "Schlafen mit leicht erhöhtem Kopf",
        "Rückkehr zu leichten Aktivitäten nach 3–5 Tagen",
        "Leichtes Spazierengehen empfohlen",
      ],
    },
    aftercareAvoid: {
      en: [
        "Blowing your nose for 10 days",
        "Strenuous physical activity for 2–3 weeks",
        "Hot baths or saunas for 2 weeks",
        "Swimming for 3 weeks",
      ],
      de: [
        "Naseputzen für 10 Tage",
        "Anstrengende körperliche Aktivität für 2–3 Wochen",
        "Heiße Bäder oder Sauna für 2 Wochen",
        "Schwimmen für 3 Wochen",
      ],
    },
    timeline: {
      en: [
        { title: "Pre-operative Assessment", description: "Endoscopic examination and discussion of symptoms." },
        { title: "Day of Surgery", description: "Procedure under general anaesthesia (45–90 min). Same-day discharge in most cases." },
        { title: "Day 1–3 Post-op", description: "Nasal congestion and mild discomfort. Saline irrigation begins." },
        { title: "Week 1", description: "Follow-up appointment. Gradual improvement in nasal airflow." },
        { title: "Week 2–6", description: "Progressive improvement. Return to full activity by week 3–4." },
      ],
      de: [
        { title: "Präoperative Untersuchung", description: "Endoskopische Untersuchung und Symptombesprechung." },
        { title: "Tag der Operation", description: "Eingriff unter Vollnarkose (45–90 Min.). Entlassung am selben Tag in den meisten Fällen." },
        { title: "Tag 1–3 postoperativ", description: "Nasenverstopfung und leichte Beschwerden. Beginn der Nasenspülung." },
        { title: "Woche 1", description: "Nachsorgetermin. Allmähliche Verbesserung des Luftstroms." },
        { title: "Woche 2–6", description: "Fortschreitende Verbesserung. Rückkehr zu voller Aktivität in Woche 3–4." },
      ],
    },
    recovery: {
      en: "Most patients return to work within 5–7 days. Nasal breathing typically improves significantly within the first 2–4 weeks. Full healing of the internal structures takes approximately 3 months.",
      de: "Die meisten Patienten kehren innerhalb von 5–7 Tagen zur Arbeit zurück. Die Nasenatmung verbessert sich in der Regel innerhalb der ersten 2–4 Wochen deutlich. Die vollständige Heilung der inneren Strukturen dauert ca. 3 Monate.",
    },
    faqs: {
      en: [
        { question: "Does septoplasty change the shape of my nose?", answer: "No. Septoplasty addresses only the internal nasal septum and does not alter the external appearance." },
        { question: "Is this procedure covered by insurance?", answer: "Septoplasty for a deviated septum is generally considered medically necessary and is typically covered." },
        { question: "How long does the surgery take?", answer: "The procedure usually takes 45–90 minutes." },
      ],
      de: [
        { question: "Verändert die Septumplastik die Form meiner Nase?", answer: "Nein. Die Septumplastik behandelt nur die innere Nasenscheidewand und verändert nicht das äußere Erscheinungsbild." },
        { question: "Wird dieser Eingriff von der Krankenkasse übernommen?", answer: "Die Septumplastik bei Nasenscheidewandverkrümmung wird in der Regel als medizinisch notwendig angesehen und üblicherweise übernommen." },
        { question: "Wie lange dauert die Operation?", answer: "Der Eingriff dauert in der Regel 45–90 Minuten." },
      ],
    },
  },

  sinusSurgery: {
    title: { en: "Sinus Surgery", de: "Nasennebenhöhlen-OP" },
    subtitle: {
      en: "Endoscopic sinus surgery for chronic sinusitis and complex sinus conditions.",
      de: "Endoskopische Nasennebenhöhlenchirurgie bei chronischer Sinusitis und komplexen Erkrankungen.",
    },
    overview: {
      en: "Functional endoscopic sinus surgery (FESS) is performed to improve sinus drainage and treat chronic rhinosinusitis that has not responded to medical therapy. Dr. Speth specialises in both primary and revision sinus surgery.",
      de: "Die funktionelle endoskopische Nasennebenhöhlenchirurgie (FESS) wird durchgeführt, um den Abfluss der Nasennebenhöhlen zu verbessern und chronische Rhinosinusitis zu behandeln, die nicht auf medikamentöse Therapie angesprochen hat. Dr. Speth ist auf primäre und Revisions-Nasennebenhöhlenoperationen spezialisiert.",
    },
    procedure: {
      en: "Using high-definition endoscopes and specialised instruments, obstructing tissue and bone are carefully removed to restore natural sinus drainage pathways. The procedure is performed under general anaesthesia and typically takes 1–2 hours.",
      de: "Mit hochauflösenden Endoskopen und spezialisierten Instrumenten werden obstruierende Gewebe und Knochen sorgfältig entfernt, um die natürlichen Drainagewege der Nasennebenhöhlen wiederherzustellen. Der Eingriff wird unter Vollnarkose durchgeführt und dauert in der Regel 1–2 Stunden.",
    },
    indications: {
      en: [
        "Chronic sinusitis not responding to medication",
        "Nasal polyps causing obstruction",
        "Recurrent acute sinus infections (4+ per year)",
        "Facial pain or pressure from sinus disease",
        "Loss of smell related to sinus pathology",
      ],
      de: [
        "Chronische Sinusitis, die nicht auf Medikamente anspricht",
        "Nasenpolypen, die eine Obstruktion verursachen",
        "Wiederkehrende akute Nasennebenhöhlenentzündungen (4+ pro Jahr)",
        "Gesichtsschmerzen oder -druck durch Nasennebenhöhlenerkrankung",
        "Geruchsverlust im Zusammenhang mit Nasennebenhöhlenpathologie",
      ],
    },
    diagnostics: {
      en: [
        "Nasal endoscopy to assess mucosal disease",
        "CT scan of the paranasal sinuses",
        "Allergy testing if indicated",
        "Assessment of response to medical therapy",
      ],
      de: [
        "Nasenendoskopie zur Beurteilung der Schleimhauterkrankung",
        "CT-Scan der Nasennebenhöhlen",
        "Allergietests bei Bedarf",
        "Beurteilung des Ansprechens auf medikamentöse Therapie",
      ],
    },
    results: {
      en: "Most patients report significant improvement in sinus symptoms within 2–4 weeks. Long-term success rates are high, particularly with ongoing topical therapy. Improvement in sense of smell is common.",
      de: "Die meisten Patienten berichten innerhalb von 2–4 Wochen von einer deutlichen Verbesserung der Symptome. Die langfristigen Erfolgsraten sind hoch, insbesondere bei fortgesetzter topischer Therapie. Eine Verbesserung des Geruchssinns ist häufig.",
    },
    aftercareDo: {
      en: [
        "Saline nasal irrigations several times daily",
        "Use prescribed nasal sprays",
        "Attend all follow-up appointments for debridement",
        "Rest for the first few days",
      ],
      de: [
        "Nasenspülungen mit Kochsalzlösung mehrmals täglich",
        "Verordnete Nasensprays verwenden",
        "Alle Nachsorgetermine zur Nachbehandlung wahrnehmen",
        "In den ersten Tagen ausruhen",
      ],
    },
    aftercareAvoid: {
      en: [
        "Blowing your nose forcefully for 1 week",
        "Flying for 2 weeks",
        "Swimming or diving for 4 weeks",
        "Strenuous exercise for 2 weeks",
      ],
      de: [
        "Kräftiges Naseputzen für 1 Woche",
        "Fliegen für 2 Wochen",
        "Schwimmen oder Tauchen für 4 Wochen",
        "Anstrengende körperliche Aktivität für 2 Wochen",
      ],
    },
    timeline: {
      en: [
        { title: "Pre-operative Workup", description: "CT imaging and endoscopic assessment. Medical optimisation with topical therapies." },
        { title: "Day of Surgery", description: "Endoscopic procedure under general anaesthesia (1–2 hours)." },
        { title: "Week 1", description: "Nasal debridement and cleaning. Saline irrigations. Mild congestion expected." },
        { title: "Week 2–4", description: "Progressive improvement in sinus symptoms. Follow-up endoscopy." },
        { title: "Month 2–3", description: "Ongoing healing. Most patients report significant symptom improvement." },
      ],
      de: [
        { title: "Präoperative Abklärung", description: "CT-Bildgebung und endoskopische Untersuchung. Medikamentöse Optimierung mit topischen Therapien." },
        { title: "Tag der Operation", description: "Endoskopischer Eingriff unter Vollnarkose (1–2 Stunden)." },
        { title: "Woche 1", description: "Nasale Nachbehandlung und Reinigung. Nasenspülungen. Leichte Verstopfung zu erwarten." },
        { title: "Woche 2–4", description: "Fortschreitende Verbesserung der Symptome. Kontrollendoskopie." },
        { title: "Monat 2–3", description: "Fortlaufende Heilung. Die meisten Patienten berichten von deutlicher Besserung." },
      ],
    },
    recovery: {
      en: "Recovery from sinus surgery typically involves 1–2 weeks off work. Nasal saline irrigations are essential during the healing period. Follow-up visits for endoscopic debridement are scheduled over the first few weeks.",
      de: "Die Erholung nach Nasennebenhöhlenchirurgie umfasst in der Regel 1–2 Wochen Arbeitsunfähigkeit. Nasenspülungen sind während der Heilungsphase essenziell. Nachsorgetermine zur endoskopischen Nachbehandlung werden in den ersten Wochen geplant.",
    },
    faqs: {
      en: [
        { question: "What is FESS?", answer: "FESS stands for Functional Endoscopic Sinus Surgery. It is a minimally invasive technique using endoscopes to treat sinus disease." },
        { question: "Is sinus surgery painful?", answer: "Most patients experience pressure and congestion rather than significant pain. Discomfort is well managed with standard pain relief." },
        { question: "How long until I feel better?", answer: "While initial improvement is often noticed within the first 2 weeks, full healing takes 2–3 months." },
      ],
      de: [
        { question: "Was ist FESS?", answer: "FESS steht für Funktionelle Endoskopische Sinus Surgery. Es handelt sich um eine minimal-invasive Technik mit Endoskopen zur Behandlung von Nasennebenhöhlenerkrankungen." },
        { question: "Ist eine Nasennebenhöhlen-OP schmerzhaft?", answer: "Die meisten Patienten erleben eher Druck und Verstopfung als starke Schmerzen. Beschwerden werden gut mit Standard-Schmerzmitteln behandelt." },
        { question: "Wie lange dauert es, bis ich mich besser fühle?", answer: "Erste Verbesserungen werden oft innerhalb der ersten 2 Wochen bemerkt, die vollständige Heilung dauert 2–3 Monate." },
      ],
    },
  },

  turbinateSurgery: {
    title: { en: "Turbinate Surgery", de: "Muschelchirurgie" },
    subtitle: {
      en: "Reduction of enlarged turbinates to restore nasal airflow and relieve chronic nasal obstruction.",
      de: "Verkleinerung vergrößerter Nasenmuscheln zur Wiederherstellung des Luftstroms und Linderung chronischer Nasenatmungsbehinderung.",
    },
    overview: {
      en: "The turbinates are structures inside the nose that humidify and warm the air we breathe. When enlarged, they can significantly obstruct nasal breathing. Turbinate reduction surgery addresses this by decreasing the size of the turbinates while preserving their essential function.",
      de: "Die Nasenmuscheln sind Strukturen in der Nase, die die eingeatmete Luft befeuchten und erwärmen. Wenn sie vergrößert sind, können sie die Nasenatmung erheblich behindern. Die Muschelreduktion verkleinert die Nasenmuscheln, während ihre wesentliche Funktion erhalten bleibt.",
    },
    procedure: {
      en: "Various techniques are available including radiofrequency reduction, submucosal resection, and outfracturing. Dr. Speth selects the most appropriate method based on the individual anatomy. The procedure is often performed in conjunction with septoplasty.",
      de: "Verschiedene Techniken stehen zur Verfügung, darunter Radiofrequenzreduktion, submuköse Resektion und Lateralisation. Dr. Speth wählt die geeignetste Methode basierend auf der individuellen Anatomie. Der Eingriff wird häufig in Kombination mit einer Septumplastik durchgeführt.",
    },
    indications: {
      en: [
        "Chronic nasal obstruction due to turbinate hypertrophy",
        "Nasal congestion not responding to nasal sprays",
        "Difficulty breathing through the nose, particularly at night",
        "Snoring related to nasal obstruction",
      ],
      de: [
        "Chronische Nasenatmungsbehinderung durch Muschelhypertrophie",
        "Nasenverstopfung, die nicht auf Nasensprays anspricht",
        "Schwierigkeiten beim Atmen durch die Nase, besonders nachts",
        "Schnarchen aufgrund von Nasenobstruktion",
      ],
    },
    diagnostics: {
      en: [
        "Nasal endoscopy to assess turbinate size",
        "Assessment of response to decongestant spray",
        "Review of medication history",
      ],
      de: [
        "Nasenendoskopie zur Beurteilung der Muschelgröße",
        "Beurteilung des Ansprechens auf abschwellendes Nasenspray",
        "Überprüfung der Medikamentenanamnese",
      ],
    },
    results: {
      en: "Full improvement in nasal breathing is usually apparent by 4–6 weeks. The vast majority of patients experience significant, lasting relief from nasal obstruction.",
      de: "Die volle Verbesserung der Nasenatmung zeigt sich in der Regel nach 4–6 Wochen. Die große Mehrheit der Patienten erlebt eine deutliche, dauerhafte Linderung der Nasenatmungsbehinderung.",
    },
    aftercareDo: {
      en: ["Saline irrigations from day 1", "Rest for 2–3 days", "Return to work after 3–5 days"],
      de: ["Nasenspülungen ab Tag 1", "2–3 Tage ausruhen", "Rückkehr zur Arbeit nach 3–5 Tagen"],
    },
    aftercareAvoid: {
      en: ["Blowing your nose for 1 week", "Strenuous exercise for 2 weeks", "Hot baths for 1 week"],
      de: ["Naseputzen für 1 Woche", "Anstrengende körperliche Aktivität für 2 Wochen", "Heiße Bäder für 1 Woche"],
    },
    timeline: {
      en: [
        { title: "Consultation", description: "Endoscopic assessment of turbinate size and nasal airway." },
        { title: "Day of Surgery", description: "Procedure typically 20–40 minutes. Often combined with septoplasty." },
        { title: "Week 1", description: "Nasal congestion due to swelling. Saline irrigations recommended." },
        { title: "Week 2–4", description: "Significant improvement in nasal breathing. Return to normal activities." },
      ],
      de: [
        { title: "Beratung", description: "Endoskopische Beurteilung der Muschelgröße und Nasenluftweg." },
        { title: "Tag der Operation", description: "Eingriff dauert in der Regel 20–40 Minuten. Oft in Kombination mit Septumplastik." },
        { title: "Woche 1", description: "Nasenverstopfung durch Schwellung. Nasenspülungen empfohlen." },
        { title: "Woche 2–4", description: "Deutliche Verbesserung der Nasenatmung. Rückkehr zu normalen Aktivitäten." },
      ],
    },
    recovery: {
      en: "Recovery is typically straightforward with most patients returning to work within 3–5 days. Full improvement in nasal breathing is usually apparent by 4–6 weeks.",
      de: "Die Erholung verläuft in der Regel unkompliziert, die meisten Patienten kehren innerhalb von 3–5 Tagen zur Arbeit zurück. Die volle Verbesserung der Nasenatmung zeigt sich nach 4–6 Wochen.",
    },
    faqs: {
      en: [
        { question: "Can turbinates grow back?", answer: "In some cases, turbinate tissue can partially regrow, though this is less common with modern techniques." },
        { question: "Is this combined with other procedures?", answer: "Yes, turbinate reduction is frequently performed alongside septoplasty or sinus surgery." },
      ],
      de: [
        { question: "Können Nasenmuscheln nachwachsen?", answer: "In einigen Fällen kann das Muschelgewebe teilweise nachwachsen, obwohl dies mit modernen Techniken seltener vorkommt." },
        { question: "Wird dies mit anderen Eingriffen kombiniert?", answer: "Ja, die Muschelreduktion wird häufig zusammen mit Septumplastik oder Nasennebenhöhlenoperationen durchgeführt." },
      ],
    },
  },

  skullBase: {
    title: { en: "Skull Base Surgery", de: "Schädelbasischirurgie" },
    subtitle: {
      en: "Advanced endoscopic management of skull base pathologies requiring precision and expertise.",
      de: "Fortgeschrittene endoskopische Behandlung von Schädelbasispathologien mit höchster Präzision.",
    },
    overview: {
      en: "Endoscopic skull base surgery represents one of the most technically demanding areas of ENT surgery. Dr. Speth works as part of a multidisciplinary team to manage lesions at the interface between the nasal cavity and the brain. Conditions treated include CSF leaks, encephaloceles, and selected tumours.",
      de: "Die endoskopische Schädelbasischirurgie ist einer der technisch anspruchsvollsten Bereiche der HNO-Chirurgie. Dr. Speth arbeitet als Teil eines multidisziplinären Teams zur Behandlung von Läsionen an der Schnittstelle zwischen Nasenhöhle und Gehirn. Behandelte Erkrankungen umfassen Liquorfisteln, Enzephalozelen und ausgewählte Tumoren.",
    },
    procedure: {
      en: "Utilising state-of-the-art endoscopic techniques and neuro-navigation, the procedure is performed entirely through the nose, avoiding external incisions. Close collaboration with neurosurgical colleagues ensures optimal outcomes. The duration varies depending on the pathology but typically ranges from 2–4 hours.",
      de: "Unter Einsatz modernster endoskopischer Techniken und Neuronavigation wird der Eingriff vollständig durch die Nase durchgeführt, ohne äußere Schnitte. Enge Zusammenarbeit mit neurochirurgischen Kollegen gewährleistet optimale Ergebnisse. Die Dauer variiert je nach Pathologie, liegt aber typischerweise bei 2–4 Stunden.",
    },
    indications: {
      en: [
        "Cerebrospinal fluid (CSF) leak from the nose",
        "Encephalocele",
        "Selected skull base tumours accessible via transnasal approach",
        "Mucoceles of the frontal or sphenoid sinus",
      ],
      de: [
        "Liquorfistel (Austritt von Gehirnflüssigkeit aus der Nase)",
        "Enzephalozele",
        "Ausgewählte Schädelbasistumoren, die über transnasalen Zugang erreichbar sind",
        "Mukozelen der Stirn- oder Keilbeinhöhle",
      ],
    },
    diagnostics: {
      en: [
        "High-resolution CT and MRI imaging",
        "Multidisciplinary team discussion",
        "Detailed nasal endoscopy",
        "Beta-2 transferrin testing for CSF leak confirmation",
      ],
      de: [
        "Hochauflösende CT- und MRT-Bildgebung",
        "Multidisziplinäre Teambesprechung",
        "Detaillierte Nasenendoskopie",
        "Beta-2-Transferrin-Test zur Bestätigung einer Liquorfistel",
      ],
    },
    results: {
      en: "Success rates for endoscopic skull base repair are excellent in experienced hands. CSF leak repair success rates exceed 90% at first attempt. Functional outcomes are typically very good with the minimally invasive approach.",
      de: "Die Erfolgsraten für endoskopische Schädelbasisreparaturen sind in erfahrenen Händen ausgezeichnet. Die Erfolgsrate bei Liquorfistelreparatur übersteigt 90% beim ersten Versuch. Die funktionellen Ergebnisse sind mit dem minimal-invasiven Ansatz in der Regel sehr gut.",
    },
    aftercareDo: {
      en: ["Strict bed rest as directed", "Gradual mobilisation under supervision", "Regular follow-up imaging"],
      de: ["Strikte Bettruhe nach Anweisung", "Schrittweise Mobilisation unter Aufsicht", "Regelmäßige Kontrollbildgebung"],
    },
    aftercareAvoid: {
      en: [
        "Straining, heavy lifting for 6–8 weeks",
        "Nose blowing for 4 weeks",
        "Flying for 4–6 weeks",
        "Strenuous activity for 4–8 weeks",
      ],
      de: [
        "Pressen, schweres Heben für 6–8 Wochen",
        "Naseputzen für 4 Wochen",
        "Fliegen für 4–6 Wochen",
        "Anstrengende Aktivitäten für 4–8 Wochen",
      ],
    },
    timeline: {
      en: [
        { title: "Multidisciplinary Assessment", description: "Imaging review and team discussion. Planning with neurosurgery colleagues." },
        { title: "Surgery", description: "Endoscopic transnasal approach under general anaesthesia. Duration varies by complexity (2–4 hours)." },
        { title: "Post-operative Care", description: "Hospital stay of 3–7 days. Close monitoring and imaging." },
        { title: "Recovery", description: "Gradual return to normal activities over 4–8 weeks. Regular follow-up." },
      ],
      de: [
        { title: "Multidisziplinäre Untersuchung", description: "Bildgebungsauswertung und Teambesprechung. Planung mit neurochirurgischen Kollegen." },
        { title: "Operation", description: "Endoskopischer transnasaler Zugang unter Vollnarkose. Dauer variiert je nach Komplexität (2–4 Stunden)." },
        { title: "Postoperative Versorgung", description: "Krankenhausaufenthalt von 3–7 Tagen. Engmaschige Überwachung und Bildgebung." },
        { title: "Erholung", description: "Schrittweise Rückkehr zu normalen Aktivitäten über 4–8 Wochen. Regelmäßige Nachsorge." },
      ],
    },
    recovery: {
      en: "Hospital stay is typically 3–7 days depending on the complexity of the surgery. Recovery at home involves 2–4 weeks of restricted activity. Long-term follow-up with imaging is essential.",
      de: "Der Krankenhausaufenthalt beträgt je nach Komplexität des Eingriffs in der Regel 3–7 Tage. Die Erholung zu Hause umfasst 2–4 Wochen eingeschränkter Aktivität. Langfristige Nachsorge mit Bildgebung ist essenziell.",
    },
    faqs: {
      en: [
        { question: "Is skull base surgery performed through the nose?", answer: "Yes. Modern endoscopic techniques allow access to the skull base entirely through the nasal passages, avoiding external incisions." },
        { question: "How long is the hospital stay?", answer: "This varies by procedure but is typically 3–7 days." },
      ],
      de: [
        { question: "Wird die Schädelbasischirurgie durch die Nase durchgeführt?", answer: "Ja. Moderne endoskopische Techniken ermöglichen den Zugang zur Schädelbasis vollständig durch die Nasenwege, ohne äußere Schnitte." },
        { question: "Wie lange ist der Krankenhausaufenthalt?", answer: "Dies variiert je nach Eingriff, beträgt aber in der Regel 3–7 Tage." },
      ],
    },
  },

  revisionCases: {
    title: { en: "Revision Cases", de: "Revisionseingriffe" },
    subtitle: {
      en: "Expert management of complex revision nasal surgery for patients with prior procedures.",
      de: "Fachkundige Behandlung komplexer Revisions-Nasenchirurgie für Patienten mit vorangegangenen Eingriffen.",
    },
    overview: {
      en: "Revision nasal surgery is Dr. Speth's particular area of expertise. Patients who have undergone previous rhinoplasty or septal surgery and are dissatisfied with the functional or aesthetic outcome require careful assessment and a tailored surgical plan. Revision surgery is inherently more complex and demands extensive experience.",
      de: "Die Revisions-Nasenchirurgie ist Dr. Speths besonderes Spezialgebiet. Patienten, die sich zuvor einer Rhinoplastik oder Septumoperation unterzogen haben und mit dem funktionellen oder ästhetischen Ergebnis unzufrieden sind, benötigen eine sorgfältige Beurteilung und einen maßgeschneiderten OP-Plan. Revisionschirurgie ist von Natur aus komplexer und erfordert umfangreiche Erfahrung.",
    },
    procedure: {
      en: "Each revision case is unique. Dr. Speth performs a thorough analysis including high-resolution imaging, endoscopy, and detailed discussion of previous surgical records. Cartilage grafting (from septum, ear, or rib) may be required to reconstruct the nasal framework. The procedure typically takes 3–4 hours.",
      de: "Jeder Revisionsfall ist einzigartig. Dr. Speth führt eine gründliche Analyse durch, einschließlich hochauflösender Bildgebung, Endoskopie und detaillierter Besprechung früherer OP-Berichte. Knorpeltransplantate (von Septum, Ohr oder Rippe) können zur Rekonstruktion des Nasengerüsts erforderlich sein. Der Eingriff dauert in der Regel 3–4 Stunden.",
    },
    indications: {
      en: [
        "Breathing difficulties after previous nasal surgery",
        "Cosmetic dissatisfaction with prior rhinoplasty result",
        "Nasal collapse or asymmetry following surgery",
        "Persistent or worsened nasal obstruction after septoplasty",
        "Visible deformity from previous procedure",
      ],
      de: [
        "Atembeschwerden nach früherer Nasenoperation",
        "Kosmetische Unzufriedenheit mit dem Ergebnis einer früheren Rhinoplastik",
        "Nasenkollaps oder Asymmetrie nach Operation",
        "Anhaltende oder verschlechterte Nasenatmungsbehinderung nach Septumplastik",
        "Sichtbare Deformität durch vorangegangenen Eingriff",
      ],
    },
    diagnostics: {
      en: [
        "Comprehensive review of previous surgical records",
        "High-resolution CT imaging",
        "Detailed nasal endoscopy",
        "Standardised photography and analysis",
        "Assessment of available cartilage donor sites",
      ],
      de: [
        "Umfassende Überprüfung früherer OP-Berichte",
        "Hochauflösende CT-Bildgebung",
        "Detaillierte Nasenendoskopie",
        "Standardisierte Fotografie und Analyse",
        "Beurteilung verfügbarer Knorpelentnahmestellen",
      ],
    },
    results: {
      en: "While revision surgery is more complex than primary procedures, excellent functional and aesthetic results can be achieved in experienced hands. Final results may take 12–18 months to fully manifest due to the complexity of the tissue.",
      de: "Obwohl Revisionschirurgie komplexer als primäre Eingriffe ist, können in erfahrenen Händen ausgezeichnete funktionelle und ästhetische Ergebnisse erzielt werden. Die endgültigen Ergebnisse können aufgrund der Gewebekomplexität 12–18 Monate brauchen, um sich vollständig zu zeigen.",
    },
    aftercareDo: {
      en: [
        "Follow all post-operative instructions carefully",
        "Sleep with head elevated for 2–3 weeks",
        "Use prescribed medications as directed",
        "Attend all follow-up appointments",
      ],
      de: [
        "Alle postoperativen Anweisungen sorgfältig befolgen",
        "2–3 Wochen mit erhöhtem Kopf schlafen",
        "Verordnete Medikamente wie angewiesen verwenden",
        "Alle Nachsorgetermine wahrnehmen",
      ],
    },
    aftercareAvoid: {
      en: [
        "Strenuous exercise for 6 weeks",
        "Glasses on the nose for 6–8 weeks",
        "Contact sports for 3–4 months",
        "Sun exposure for 3 months",
      ],
      de: [
        "Anstrengende körperliche Aktivität für 6 Wochen",
        "Brille auf der Nase für 6–8 Wochen",
        "Kontaktsport für 3–4 Monate",
        "Sonnenexposition für 3 Monate",
      ],
    },
    timeline: {
      en: [
        { title: "Detailed Assessment", description: "Comprehensive evaluation including review of previous surgery records, photography, and CT imaging." },
        { title: "Surgical Planning", description: "Individualised surgical plan based on the specific challenges of the revision case." },
        { title: "Surgery", description: "Procedure under general anaesthesia (3–4 hours). Open approach typically preferred for revision cases." },
        { title: "Week 1–2", description: "Splint removal, initial healing. More swelling expected than in primary surgery." },
        { title: "3–18 Months", description: "Gradual refinement of results. Revision cases may take longer to reach the final outcome." },
      ],
      de: [
        { title: "Detaillierte Untersuchung", description: "Umfassende Evaluation einschließlich Überprüfung früherer OP-Berichte, Fotografie und CT-Bildgebung." },
        { title: "OP-Planung", description: "Individueller OP-Plan basierend auf den spezifischen Herausforderungen des Revisionsfalls." },
        { title: "Operation", description: "Eingriff unter Vollnarkose (3–4 Stunden). Offener Zugang für Revisionen in der Regel bevorzugt." },
        { title: "Woche 1–2", description: "Schienenentfernung, erste Heilung. Mehr Schwellung als bei primärer Operation zu erwarten." },
        { title: "3–18 Monate", description: "Allmähliche Verfeinerung der Ergebnisse. Revisionsfälle können länger brauchen, um das Endergebnis zu erreichen." },
      ],
    },
    recovery: {
      en: "Recovery from revision surgery may be slightly longer than from primary rhinoplasty. Most patients return to work within 10–14 days. Final results may take 12–18 months to fully manifest due to the complexity of the tissue.",
      de: "Die Erholung nach Revisionschirurgie kann etwas länger dauern als nach primärer Rhinoplastik. Die meisten Patienten kehren innerhalb von 10–14 Tagen zur Arbeit zurück. Die endgültigen Ergebnisse können 12–18 Monate brauchen, um sich vollständig zu zeigen.",
    },
    faqs: {
      en: [
        { question: "How soon after my first surgery can I have revision?", answer: "We generally recommend waiting at least 12 months after the initial procedure to allow complete healing before considering revision surgery." },
        { question: "Is revision surgery more risky?", answer: "Revision surgery is more complex due to altered anatomy and scar tissue. However, in experienced hands, excellent results can be achieved." },
        { question: "Will cartilage grafts be needed?", answer: "In many revision cases, additional cartilage is required for reconstruction. This may be harvested from the septum, ear, or in some cases, the rib." },
      ],
      de: [
        { question: "Wie bald nach meiner ersten OP kann ich eine Revision haben?", answer: "Wir empfehlen in der Regel, mindestens 12 Monate nach dem ursprünglichen Eingriff zu warten, um eine vollständige Heilung zu ermöglichen." },
        { question: "Ist Revisionschirurgie risikoreicher?", answer: "Revisionschirurgie ist aufgrund veränderter Anatomie und Narbengewebe komplexer. In erfahrenen Händen können jedoch ausgezeichnete Ergebnisse erzielt werden." },
        { question: "Werden Knorpeltransplantate benötigt?", answer: "In vielen Revisionsfällen wird zusätzlicher Knorpel zur Rekonstruktion benötigt. Dieser kann vom Septum, Ohr oder in einigen Fällen von der Rippe entnommen werden." },
      ],
    },
  },

  furtherENT: {
    title: { en: "Further ENT Services", de: "Weitere HNO-Leistungen" },
    subtitle: {
      en: "Comprehensive ear, nose, and throat care beyond rhinology and facial plastic surgery.",
      de: "Umfassende Hals-Nasen-Ohren-Versorgung über Rhinologie und plastische Gesichtschirurgie hinaus.",
    },
    overview: {
      en: "In addition to her subspecialty focus on rhinology and facial plastic surgery, Dr. Speth offers a full range of ENT services. These include the management of general ENT conditions, diagnostic endoscopy, and referral pathways for conditions requiring multidisciplinary care.",
      de: "Zusätzlich zu ihrem Subspezialisierungsschwerpunkt auf Rhinologie und plastischer Gesichtschirurgie bietet Dr. Speth ein vollständiges Spektrum an HNO-Leistungen an. Dazu gehören die Behandlung allgemeiner HNO-Erkrankungen, diagnostische Endoskopie und Überweisungswege für Erkrankungen, die multidisziplinäre Versorgung erfordern.",
    },
    procedure: {
      en: "The specific approach depends on the condition being treated. Dr. Speth conducts a thorough clinical examination and may arrange additional investigations such as audiometry, imaging, or allergy testing as appropriate.",
      de: "Der spezifische Ansatz hängt von der zu behandelnden Erkrankung ab. Dr. Speth führt eine gründliche klinische Untersuchung durch und kann bei Bedarf zusätzliche Untersuchungen wie Audiometrie, Bildgebung oder Allergietests veranlassen.",
    },
    indications: {
      en: [
        "Nasal polyps and allergic rhinitis",
        "Recurrent nosebleeds (epistaxis)",
        "Ear conditions and hearing concerns",
        "Throat and voice disorders",
        "General ENT screening and assessment",
      ],
      de: [
        "Nasenpolypen und allergische Rhinitis",
        "Wiederkehrendes Nasenbluten (Epistaxis)",
        "Ohrerkrankungen und Hörbeschwerden",
        "Hals- und Stimmstörungen",
        "Allgemeine HNO-Untersuchung und -Abklärung",
      ],
    },
    diagnostics: {
      en: [
        "Comprehensive ENT examination",
        "Flexible and rigid endoscopy",
        "Audiometry and hearing tests",
        "Allergy testing",
        "Imaging referrals as needed",
      ],
      de: [
        "Umfassende HNO-Untersuchung",
        "Flexible und starre Endoskopie",
        "Audiometrie und Hörtests",
        "Allergietests",
        "Bildgebungsüberweisungen bei Bedarf",
      ],
    },
    results: {
      en: "Outcomes depend on the specific condition treated. Dr. Speth will discuss expected results during your consultation.",
      de: "Die Ergebnisse hängen von der spezifischen behandelten Erkrankung ab. Dr. Speth wird die erwarteten Ergebnisse während Ihrer Beratung besprechen.",
    },
    aftercareDo: {
      en: ["Follow prescribed treatment plan", "Attend follow-up appointments"],
      de: ["Verordneten Behandlungsplan befolgen", "Nachsorgetermine wahrnehmen"],
    },
    aftercareAvoid: {
      en: ["Varies by condition — discussed individually"],
      de: ["Variiert je nach Erkrankung — wird individuell besprochen"],
    },
    timeline: {
      en: [
        { title: "Initial Consultation", description: "Comprehensive ENT examination and discussion of symptoms and concerns." },
        { title: "Investigations", description: "Appropriate tests and imaging as required." },
        { title: "Treatment", description: "Medical or surgical management depending on the diagnosis." },
        { title: "Follow-up", description: "Ongoing care and monitoring as needed." },
      ],
      de: [
        { title: "Erstberatung", description: "Umfassende HNO-Untersuchung und Besprechung von Symptomen und Anliegen." },
        { title: "Untersuchungen", description: "Geeignete Tests und Bildgebung nach Bedarf." },
        { title: "Behandlung", description: "Medikamentöse oder chirurgische Behandlung je nach Diagnose." },
        { title: "Nachsorge", description: "Fortlaufende Versorgung und Überwachung nach Bedarf." },
      ],
    },
    recovery: {
      en: "Recovery timelines vary depending on the specific condition and treatment. Dr. Speth will discuss expected recovery with you during your consultation.",
      de: "Die Erholungszeiten variieren je nach spezifischer Erkrankung und Behandlung. Dr. Speth wird die erwartete Erholungszeit während Ihrer Beratung mit Ihnen besprechen.",
    },
    faqs: {
      en: [
        { question: "What conditions are treated?", answer: "Dr. Speth manages a broad range of ENT conditions including nasal polyps, allergic rhinitis, epistaxis, and more." },
        { question: "Do I need a referral?", answer: "A referral from your GP or another specialist is helpful but not always required. Please contact the practice for guidance." },
      ],
      de: [
        { question: "Welche Erkrankungen werden behandelt?", answer: "Dr. Speth behandelt ein breites Spektrum an HNO-Erkrankungen, darunter Nasenpolypen, allergische Rhinitis, Epistaxis und mehr." },
        { question: "Brauche ich eine Überweisung?", answer: "Eine Überweisung von Ihrem Hausarzt oder einem anderen Facharzt ist hilfreich, aber nicht immer erforderlich. Bitte kontaktieren Sie die Praxis für weitere Informationen." },
      ],
    },
  },
};
