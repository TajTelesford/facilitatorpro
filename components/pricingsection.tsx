"use client";
import { useState } from "react";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";
import PricingCard from "./pricingcard";
import { FacilitatorProTiers, PricingCardProps } from "@/app/api/util";

const PricingSection = () => {
  const pricingInfo: PricingCardProps[] = FacilitatorProTiers();

  const [annualBilling, isAnnualBilling] = useState(false);

  return (
    <div className="border-b border-white-200 m-10">
      <div className="flex items-center justify-center m-5  space-x-2">
        <Switch
          id="annual-billing"
          onCheckedChange={() => {
            isAnnualBilling(!annualBilling);
          }}
        />
        <Label htmlFor="annual-pricing">Annual Billing</Label>
      </div>
      <div
        id="pricing"
        className="flex flex-wrap md:flex-nowrap items-center space-between justify-center  gap-5 m-10 "
      >
        {pricingInfo &&
          pricingInfo.map((info, idx) => (
            <PricingCard
              key={idx}
              icon={info.icon}
              YearlyToggle={annualBilling}
              BillingPlan={info.BillingPlan}
              MonthlyBilling={info.MonthlyBilling}
              YearlyBilling={info.YearlyBilling}
              TierOffers={info.TierOffers}
            />
          ))}
      </div>
    </div>
  );
};

export default PricingSection;
