import SurgeryPageTemplate from "@/components/SurgeryPageTemplate";

const TurbinateSurgery = () => (
  <SurgeryPageTemplate
    title="Turbinate Surgery"
    subtitle="Reduction of enlarged turbinates to restore nasal airflow and relieve chronic nasal obstruction."
    overview="Lorem ipsum dolor sit amet, consectetur adipiscing elit. The turbinates are structures inside the nose that humidify and warm the air we breathe. When enlarged, they can significantly obstruct nasal breathing. Turbinate reduction surgery addresses this by decreasing the size of the turbinates while preserving their essential function. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    procedure="Lorem ipsum dolor sit amet. Various techniques are available including radiofrequency reduction, submucosal resection, and outfracturing. Dr. Speth selects the most appropriate method based on the individual anatomy. The procedure is often performed in conjunction with septoplasty. Sed do eiusmod tempor incididunt."
    timeline={[
      { title: "Consultation", description: "Endoscopic assessment of turbinate size and nasal airway. Lorem ipsum dolor sit amet." },
      { title: "Day of Surgery", description: "Procedure typically 20–40 minutes. Often combined with septoplasty. Sed do eiusmod tempor." },
      { title: "Week 1", description: "Nasal congestion due to swelling. Saline irrigations recommended. Ut enim ad minim veniam." },
      { title: "Week 2–4", description: "Significant improvement in nasal breathing. Return to normal activities. Duis aute irure dolor." },
    ]}
    recovery="Lorem ipsum dolor sit amet. Recovery is typically straightforward with most patients returning to work within 3–5 days. Full improvement in nasal breathing is usually apparent by 4–6 weeks. Sed do eiusmod tempor."
    faqs={[
      { question: "Can turbinates grow back?", answer: "Lorem ipsum dolor sit amet. In some cases, turbinate tissue can partially regrow, though this is less common with modern techniques." },
      { question: "Is this combined with other procedures?", answer: "Yes, turbinate reduction is frequently performed alongside septoplasty or sinus surgery. Ut enim ad minim veniam." },
    ]}
  />
);

export default TurbinateSurgery;
