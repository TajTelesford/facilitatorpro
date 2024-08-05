import { ArrowLeft, ArrowRight } from "lucide-react";
import instagram from "../public/instagram.svg";
const DashboardIntegrationCard = () => {
  return (
    <div className="flex outline justify-between w-3/4 p-6">
      <div className="flex gap-5">
        <instagram />
        <span>Sync With Instagram</span>
      </div>
      <ArrowRight />
    </div>
  );
};

export default DashboardIntegrationCard;
