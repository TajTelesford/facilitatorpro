import { LucideIcon, SignalHigh, SignalLow, SignalMedium, SignalZero } from "lucide-react"

export interface PricingCardProps {
    icon: LucideIcon;
    BillingPlan: string;
    YearlyToggle?: boolean;
    MonthlyBilling: number;
    YearlyBilling: number;
    TierOffers: string[];
  }

export const FacilitatorProTiers = () : PricingCardProps[]=> {
    return [
        {
        icon: SignalLow,
        BillingPlan: "Hobby Creator",
        YearlyToggle: true,
        MonthlyBilling: 10,
        YearlyBilling: 7,
        TierOffers: ["Hobby1", "Hobby2", "Hobby3"]
    },
    {
        icon: SignalMedium,
        BillingPlan: "Content Creator",
        YearlyToggle: true,
        MonthlyBilling: 20,
        YearlyBilling: 15,
        TierOffers: ["Hobby1","Hobby1", "Hobby1"]
    },
    {
        icon: SignalHigh,
        BillingPlan: "Business",
        YearlyToggle: true,
        MonthlyBilling: 20,
        YearlyBilling: 15,
        TierOffers: ["Hobby1","Hobby1", "Hobby1"]
    },
]
        
    
}