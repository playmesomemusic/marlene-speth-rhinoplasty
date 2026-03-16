import SurgeryPageTemplate from "@/components/SurgeryPageTemplate";
import { surgeryData } from "@/i18n/translations";

interface Props {
  surgeryKey: string;
}

const SurgeryPage = ({ surgeryKey }: Props) => {
  const data = surgeryData[surgeryKey];
  if (!data) return null;
  return <SurgeryPageTemplate surgeryKey={surgeryKey} data={data} />;
};

export default SurgeryPage;
