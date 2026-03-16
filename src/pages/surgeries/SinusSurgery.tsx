import SurgeryPageTemplate from "@/components/SurgeryPageTemplate";

const SinusSurgery = () => (
  <SurgeryPageTemplate
    title="Sinus Surgery"
    subtitle="Endoscopic sinus surgery for chronic sinusitis and complex sinus conditions."
    overview="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Functional endoscopic sinus surgery (FESS) is performed to improve sinus drainage and treat chronic rhinosinusitis that has not responded to medical therapy. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dr. Speth specialises in both primary and revision sinus surgery."
    procedure="Lorem ipsum dolor sit amet. Using high-definition endoscopes and specialised instruments, obstructing tissue and bone are carefully removed to restore natural sinus drainage pathways. The procedure is performed under general anaesthesia and typically takes 1–2 hours. Sed do eiusmod tempor incididunt ut labore."
    timeline={[
      { title: "Pre-operative Workup", description: "CT imaging and endoscopic assessment. Medical optimisation with topical therapies. Lorem ipsum." },
      { title: "Day of Surgery", description: "Endoscopic procedure under general anaesthesia (1–2 hours). Lorem ipsum dolor sit amet." },
      { title: "Week 1", description: "Nasal debridement and cleaning. Saline irrigations. Mild congestion expected. Sed do eiusmod." },
      { title: "Week 2–4", description: "Progressive improvement in sinus symptoms. Follow-up endoscopy. Ut enim ad minim veniam." },
      { title: "Month 2–3", description: "Ongoing healing. Most patients report significant symptom improvement. Duis aute irure dolor." },
    ]}
    recovery="Lorem ipsum dolor sit amet. Recovery from sinus surgery typically involves 1–2 weeks off work. Nasal saline irrigations are essential during the healing period. Follow-up visits for endoscopic debridement are scheduled over the first few weeks. Sed do eiusmod tempor."
    faqs={[
      { question: "What is FESS?", answer: "FESS stands for Functional Endoscopic Sinus Surgery. It is a minimally invasive technique using endoscopes to treat sinus disease. Lorem ipsum dolor sit amet." },
      { question: "Is sinus surgery painful?", answer: "Most patients experience pressure and congestion rather than significant pain. Discomfort is well managed with standard pain relief. Ut enim ad minim veniam." },
      { question: "How long until I feel better?", answer: "While initial improvement is often noticed within the first 2 weeks, full healing takes 2–3 months. Sed do eiusmod tempor incididunt." },
    ]}
  />
);

export default SinusSurgery;
