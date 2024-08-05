import { LucideIcon } from "lucide-react";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface PricingCardProps {
  icon: LucideIcon;
  BillingPlan: string;
  YearlyToggle?: boolean;
  MonthlyBilling: number;
  YearlyBilling: number;
  TierOffers: [string];
}

const PricingCard = ({
  icon: Icon,
  BillingPlan: BillingPlan,
  YearlyToggle: YearlyToggle,
  MonthlyBilling: MonthlyBilling,
  YearlyBilling: YearlyBilling,
  TierOffers: TierOffers,
}: PricingCardProps) => {
  return (
    <Card>
      <CardHeader className="flex flex-col items-center gap-2">
        <Icon />
        <CardTitle>{BillingPlan}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center">
        {YearlyToggle ? <p>{YearlyBilling}</p> : <p>{MonthlyBilling}</p>}
        <div className="relative items-center gap-2">
          {TierOffers && TierOffers.map((offer) => <p>{offer}</p>)}
        </div>
      </CardContent>
    </Card>
  );
};

export default PricingCard;
