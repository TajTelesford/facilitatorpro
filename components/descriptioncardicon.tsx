import { LucideIcon } from "lucide-react";
import React from "react";

interface DescriptionCardIconProps {
  icon: LucideIcon;
  label: string;
  description: string;
}

const DescriptionCardWithIcon = ({
  icon: Icon,
  label,
  description,
}: DescriptionCardIconProps) => {
  return (
    <div className="flex flex-wrap gap-8">
      <h1 className="flex flex-nowrap gap-4 text-center font-bold md:2xl lg:3xl whitespace-nowrap">
        {/*Icon*/}
        <Icon />
        {label}
      </h1>
      <span className="text-left font-small">{description}</span>
    </div>
  );
};

export default DescriptionCardWithIcon;
