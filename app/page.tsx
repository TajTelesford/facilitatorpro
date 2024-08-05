import DescriptionCardWithIcon from "@/components/descriptioncardicon";
import Navbar from "@/components/navbar";

import { Button } from "@/components/ui/button";
import { Building2, ChartNoAxesCombined, Repeat2 } from "lucide-react";
import Image from "next/image";
import { FacilitatorProTiers, PricingCardProps } from "./api/util";
import PricingCard from "@/components/pricingcard";

export default function Home() {
  const pricingInfo: PricingCardProps[] = FacilitatorProTiers();

  return (
    <div>
      <Navbar />
      <div className="mt-60 p-6 flex flex-col items-center  max-h-screen ">
        <div className="flex flex-col items-center p-10">
          <h1 className="text-center text-3xl font-bold md:text-5xl lg:text-6xl mb-4">
            Automate your social media with Notion
          </h1>
          <span className="text-center text-sm">
            One stop shop for your social media automation, plug and play Notion
            integration
          </span>
        </div>
        <Button variant="outline">Start Automating Now</Button>
      </div>
      {/* How My Service Works */}
      <div className="border-t border-b border-white-200 m-10">
        <div className="flex flex-col flex-start space-evenly justify-content-center gap-20 p-10">
          <DescriptionCardWithIcon
            icon={Building2}
            label="Seamless Social Media Management"
            description="Managing multiple social media accounts can be a daunting task, especially when it comes to posting consistently. Our tool allows you to create and schedule posts directly from Notion, simplifying the process and saving you time. No more juggling between different platforms—manage everything from one central hub."
          />
          <DescriptionCardWithIcon
            icon={Repeat2}
            label="Automated Scheduling and Posting"
            description="With our automation tool, you can plan your content calendar in advance and set specific dates and times for your posts to go live. Once scheduled, the tool takes care of the rest, ensuring your content is published exactly when you want it. This automation allows you to maintain a consistent online presence without the need for manual posting."
          />
          <DescriptionCardWithIcon
            icon={ChartNoAxesCombined}
            label="Enhanced Productivity and Efficiency"
            description="By integrating with Notion, our tool leverages the powerful features of this versatile workspace to streamline your social media workflow. Collaborate with your team, store all your media assets, and manage your post ideas in one place. This integration enhances your productivity and ensures that your social media strategy is both organized and efficient."
          />
        </div>
      </div>
      {/* Pricing Section */}
      <div className="flex flex-wrap md:flex-nowrap items-center space-between justify-center  gap-5 m-10">
        {pricingInfo &&
          pricingInfo.map((info) => (
            <PricingCard
              icon={info.icon}
              BillingPlan={info.BillingPlan}
              MonthlyBilling={info.MonthlyBilling}
              YearlyBilling={info.YearlyBilling}
              TierOffers={info.TierOffers}
            />
          ))}
      </div>
      {/* TODO: Contact Section */}
      <div></div>
    </div>
  );
}
