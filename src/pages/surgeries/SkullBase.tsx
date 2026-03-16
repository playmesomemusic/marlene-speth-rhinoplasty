import SurgeryPageTemplate from "@/components/SurgeryPageTemplate";

const SkullBase = () => (
  <SurgeryPageTemplate
    title="Skull Base Surgery"
    subtitle="Advanced endoscopic management of skull base pathologies requiring precision and expertise."
    overview="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Endoscopic skull base surgery represents one of the most technically demanding areas of ENT surgery. Dr. Speth works as part of a multidisciplinary team to manage lesions at the interface between the nasal cavity and the brain. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Conditions treated include CSF leaks, encephaloceles, and selected tumours."
    procedure="Lorem ipsum dolor sit amet. Utilising state-of-the-art endoscopic techniques and neuro-navigation, the procedure is performed entirely through the nose, avoiding external incisions. Close collaboration with neurosurgical colleagues ensures optimal outcomes. The duration varies depending on the pathology but typically ranges from 2–4 hours. Sed do eiusmod tempor."
    timeline={[
      { title: "Multidisciplinary Assessment", description: "Imaging review and team discussion. Planning with neurosurgery colleagues. Lorem ipsum dolor sit amet." },
      { title: "Surgery", description: "Endoscopic transnasal approach under general anaesthesia. Duration varies by complexity (2–4 hours)." },
      { title: "Post-operative Care", description: "Hospital stay of 3–7 days. Close monitoring and imaging. Sed do eiusmod tempor." },
      { title: "Recovery", description: "Gradual return to normal activities over 4–8 weeks. Regular follow-up. Ut enim ad minim veniam." },
    ]}
    recovery="Lorem ipsum dolor sit amet. Hospital stay is typically 3–7 days depending on the complexity of the surgery. Recovery at home involves 2–4 weeks of restricted activity. Long-term follow-up with imaging is essential. Sed do eiusmod tempor incididunt."
    faqs={[
      { question: "Is skull base surgery performed through the nose?", answer: "Yes. Modern endoscopic techniques allow access to the skull base entirely through the nasal passages, avoiding external incisions. Lorem ipsum dolor sit amet." },
      { question: "How long is the hospital stay?", answer: "This varies by procedure but is typically 3–7 days. Sed do eiusmod tempor incididunt ut labore." },
    ]}
  />
);

export default SkullBase;
