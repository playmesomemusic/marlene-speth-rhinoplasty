import SurgeryPageTemplate from "@/components/SurgeryPageTemplate";

const FurtherENT = () => (
  <SurgeryPageTemplate
    title="Further ENT Services"
    subtitle="Comprehensive ear, nose, and throat care beyond rhinology and facial plastic surgery."
    overview="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In addition to her subspecialty focus on rhinology and facial plastic surgery, Dr. Speth offers a full range of ENT services. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. These include the management of general ENT conditions, diagnostic endoscopy, and referral pathways for conditions requiring multidisciplinary care."
    procedure="Lorem ipsum dolor sit amet. The specific approach depends on the condition being treated. Dr. Speth conducts a thorough clinical examination and may arrange additional investigations such as audiometry, imaging, or allergy testing as appropriate. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    timeline={[
      { title: "Initial Consultation", description: "Comprehensive ENT examination and discussion of symptoms and concerns. Lorem ipsum dolor sit amet." },
      { title: "Investigations", description: "Appropriate tests and imaging as required. Sed do eiusmod tempor incididunt." },
      { title: "Treatment", description: "Medical or surgical management depending on the diagnosis. Ut enim ad minim veniam." },
      { title: "Follow-up", description: "Ongoing care and monitoring as needed. Duis aute irure dolor in reprehenderit." },
    ]}
    recovery="Lorem ipsum dolor sit amet. Recovery timelines vary depending on the specific condition and treatment. Dr. Speth will discuss expected recovery with you during your consultation. Sed do eiusmod tempor incididunt."
    faqs={[
      { question: "What conditions are treated?", answer: "Lorem ipsum dolor sit amet. Dr. Speth manages a broad range of ENT conditions including nasal polyps, allergic rhinitis, epistaxis, and more." },
      { question: "Do I need a referral?", answer: "A referral from your GP or another specialist is helpful but not always required. Please contact the practice for guidance. Ut enim ad minim veniam." },
    ]}
  />
);

export default FurtherENT;
