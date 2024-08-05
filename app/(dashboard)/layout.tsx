import Navbar from "@/components/navbar";
import { auth } from "@clerk/nextjs/server";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full relative">
      <div>
        <Navbar />
      </div>
      <main>{children}</main>
    </div>
  );
};

export default DashboardLayout;
