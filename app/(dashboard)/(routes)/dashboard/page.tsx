"use client";
import DashboardIntegrationCard from "@/components/dashboardintegrationcard";
import { SignedIn } from "@clerk/nextjs";
import React from "react";

export default function Dashboard() {
  return (
    <div className="mt-60 p-6 flex flex-col items-center">
      <DashboardIntegrationCard
        onClick={() => console.log("CLICKED DIV")}
        apiCallback={() => console.log("API")}
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-instagram"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
        }
      />
    </div>
  );
}
