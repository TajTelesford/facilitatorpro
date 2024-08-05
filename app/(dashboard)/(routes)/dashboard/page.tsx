import DashboardIntegrationCard from "@/components/dashboardintegrationcard";
import { SignedIn } from "@clerk/nextjs";
import React from "react";

export default function Dashboard() {
  return (
    <div className="mt-60 p-6 flex flex-col items-center">
      <DashboardIntegrationCard />
    </div>
  );
}
