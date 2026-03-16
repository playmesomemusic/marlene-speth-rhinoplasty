import SurgeryPageTemplate from "@/components/SurgeryPageTemplate";

const Septoplasty = () => (
  <SurgeryPageTemplate
    title="Septoplasty"
    subtitle="Surgical correction of the deviated nasal septum to restore nasal breathing and improve quality of life."
    overview="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Septoplasty is a surgical procedure to straighten the nasal septum — the partition between the two nasal cavities. A deviated septum can cause breathing difficulties, recurrent sinus infections, and snoring. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    procedure="Lorem ipsum dolor sit amet. The procedure is performed under general anaesthesia and typically takes 45–90 minutes. Through incisions inside the nose, the deviated portions of the septum are repositioned or removed. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. No external incisions are required, and the outer shape of the nose remains unchanged."
    timeline={[
      { title: "Pre-operative Assessment", description: "Endoscopic examination and discussion of symptoms. Lorem ipsum dolor sit amet." },
      { title: "Day of Surgery", description: "Procedure under general anaesthesia (45–90 min). Same-day discharge in most cases." },
      { title: "Day 1–3 Post-op", description: "Nasal congestion and mild discomfort. Saline irrigation begins. Sed do eiusmod tempor." },
      { title: "Week 1", description: "Follow-up appointment. Gradual improvement in nasal airflow. Ut enim ad minim veniam." },
      { title: "Week 2–6", description: "Progressive improvement. Return to full activity by week 3–4. Duis aute irure dolor." },
    ]}
    recovery="Lorem ipsum dolor sit amet. Most patients return to work within 5–7 days. Nasal breathing typically improves significantly within the first 2–4 weeks. Full healing of the internal structures takes approximately 3 months. Sed do eiusmod tempor incididunt ut labore."
    faqs={[
      { question: "Does septoplasty change the shape of my nose?", answer: "No. Septoplasty addresses only the internal nasal septum and does not alter the external appearance. Lorem ipsum dolor sit amet." },
      { question: "Is this procedure covered by insurance?", answer: "Septoplasty for a deviated septum is generally considered a medically necessary procedure and is typically covered. Ut enim ad minim veniam." },
      { question: "How long does the surgery take?", answer: "The procedure usually takes 45–90 minutes. Sed do eiusmod tempor incididunt." },
    ]}
  />
);

export default Septoplasty;
