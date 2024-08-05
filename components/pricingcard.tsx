import { LucideIcon } from "lucide-react";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { PricingCardProps } from "@/app/api/util";
import { Button } from "./ui/button";

const PricingCard = ({
  icon: Icon,
  BillingPlan: BillingPlan,
  YearlyToggle: YearlyToggle,
  MonthlyBilling: MonthlyBilling,
  YearlyBilling: YearlyBilling,
  TierOffers: TierOffers,
}: PricingCardProps) => {
  return (
    <Card className="w-full h-full rounded-lg shadow-lg overflow-hidden  hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="flex flex-col items-center gap-2 p-4 ">
        <div className="w-12 h-12 flex justify-center items-center rounded-full">
          <Icon className="w-6 h-6" />
        </div>
        <CardTitle className="text-xl font-semibold whitespace-nowrap">
          {BillingPlan}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center ">
        <p className="text-lg font-medium text-gray-700 mb-4">
          {YearlyToggle ? `${YearlyBilling}/mo` : `${MonthlyBilling}/mo`}
        </p>
        <div className="flex flex-col justify-center items-center gap-2 w-full">
          {TierOffers &&
            TierOffers.map((offer, index) => (
              <p key={index} className="text-sm text-white-600 mb-2">
                {offer}
              </p>
            ))}
        </div>
        <div>
          <Button className="mt-10">Get Started</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PricingCard;
