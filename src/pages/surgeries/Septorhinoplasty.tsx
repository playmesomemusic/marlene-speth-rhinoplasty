import SurgeryPageTemplate from "@/components/SurgeryPageTemplate";

const Septorhinoplasty = () => (
  <SurgeryPageTemplate
    title="Septorhinoplasty"
    subtitle="Combining functional nasal correction with aesthetic refinement for natural, harmonious results."
    overview="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Septorhinoplasty addresses both the internal nasal structures and the external shape of the nose simultaneously, allowing Dr. Speth to optimise breathing while creating a balanced and natural facial profile. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    procedure="Lorem ipsum dolor sit amet, consectetur adipiscing elit. The procedure is typically performed under general anaesthesia and takes approximately 2–3 hours. Dr. Speth utilises both open and closed techniques, depending on the complexity of the case. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cartilage grafting may be employed to provide structural support and improve long-term stability. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    timeline={[
      { title: "Pre-operative Consultation", description: "Detailed assessment, photography, and discussion of goals and expectations. Lorem ipsum dolor sit amet." },
      { title: "Day of Surgery", description: "Admission, procedure under general anaesthesia (2–3 hours), and recovery in hospital. Sed do eiusmod tempor." },
      { title: "Day 1–2 Post-op", description: "Nasal packing removal, initial follow-up. Mild swelling and bruising expected. Lorem ipsum dolor sit amet." },
      { title: "Week 1", description: "Splint removal. Most external bruising resolves. Patients may return to light desk work. Ut enim ad minim veniam." },
      { title: "Week 2–4", description: "Gradual improvement in breathing. Avoid strenuous activity. Duis aute irure dolor in reprehenderit." },
      { title: "3–12 Months", description: "Final results become apparent as residual swelling subsides. Follow-up appointments to monitor progress." },
    ]}
    recovery="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Most patients can return to desk work within 7–10 days. Strenuous exercise should be avoided for 4–6 weeks. The nose will continue to refine over 6–12 months as internal swelling resolves. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hospital stay is typically 1 night. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
    faqs={[
      { question: "Is septorhinoplasty covered by insurance?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. When the procedure is medically indicated (e.g., for breathing obstruction), the functional component may be covered. The aesthetic component is typically self-funded." },
      { question: "How long is the hospital stay?", answer: "Most patients stay 1 night in hospital. In some cases, the procedure can be performed as a day case. Sed do eiusmod tempor incididunt." },
      { question: "When can I fly after surgery?", answer: "Ut enim ad minim veniam, quis nostrud exercitation. We generally recommend waiting 2–3 weeks before flying, though this may vary." },
      { question: "Will there be visible scarring?", answer: "In open rhinoplasty, a small incision is made across the columella. This scar typically heals very well and is barely visible. Lorem ipsum dolor." },
    ]}
  />
);

export default Septorhinoplasty;
