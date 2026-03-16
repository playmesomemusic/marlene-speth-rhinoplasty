import SurgeryPageTemplate from "@/components/SurgeryPageTemplate";

const RevisionCases = () => (
  <SurgeryPageTemplate
    title="Revision Cases"
    subtitle="Expert management of complex revision nasal surgery for patients with prior procedures."
    overview="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Revision nasal surgery is Dr. Speth's particular area of expertise. Patients who have undergone previous rhinoplasty or septal surgery and are dissatisfied with the functional or aesthetic outcome require careful assessment and a tailored surgical plan. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Revision surgery is inherently more complex and demands extensive experience."
    procedure="Lorem ipsum dolor sit amet. Each revision case is unique. Dr. Speth performs a thorough analysis including high-resolution imaging, endoscopy, and detailed discussion of previous surgical records. Cartilage grafting (from septum, ear, or rib) may be required to reconstruct the nasal framework. The procedure typically takes 3–4 hours. Sed do eiusmod tempor."
    timeline={[
      { title: "Detailed Assessment", description: "Comprehensive evaluation including review of previous surgery records, photography, and CT imaging." },
      { title: "Surgical Planning", description: "Individualised surgical plan based on the specific challenges of the revision case. Lorem ipsum dolor sit amet." },
      { title: "Surgery", description: "Procedure under general anaesthesia (3–4 hours). Open approach typically preferred for revision cases." },
      { title: "Week 1–2", description: "Splint removal, initial healing. More swelling expected than in primary surgery. Sed do eiusmod tempor." },
      { title: "3–18 Months", description: "Gradual refinement of results. Revision cases may take longer to reach the final outcome. Ut enim ad minim veniam." },
    ]}
    recovery="Lorem ipsum dolor sit amet. Recovery from revision surgery may be slightly longer than from primary rhinoplasty. Most patients return to work within 10–14 days. Final results may take 12–18 months to fully manifest due to the complexity of the tissue. Sed do eiusmod tempor."
    faqs={[
      { question: "How soon after my first surgery can I have revision?", answer: "We generally recommend waiting at least 12 months after the initial procedure to allow complete healing before considering revision surgery. Lorem ipsum dolor sit amet." },
      { question: "Is revision surgery more risky?", answer: "Revision surgery is more complex due to altered anatomy and scar tissue. However, in experienced hands, excellent results can be achieved. Ut enim ad minim veniam." },
      { question: "Will cartilage grafts be needed?", answer: "In many revision cases, additional cartilage is required for reconstruction. This may be harvested from the septum, ear, or in some cases, the rib. Sed do eiusmod tempor." },
    ]}
  />
);

export default RevisionCases;
