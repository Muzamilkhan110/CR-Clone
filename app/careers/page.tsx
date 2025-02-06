import React from "react";
import FormWithGrid from "@/components/label/Label";
import Heading from "@/components/component-heading/Heading";
import CareersBanner from "@/pages/Detail-Careers/CareersBanner";
import Benefit from "@/pages/Detail-Careers/Benefit";
import RecPathway from "@/pages/Detail-Careers/RecPathway";
import CareerOpening from "@/pages/Detail-Careers/CareerOpening";
const careers = () => {
  return (
    <main className="bg-black">
      <CareersBanner />
      <Benefit />
      <RecPathway />
      <CareerOpening />
      <div className="py-6">
        <Heading tittle="Contact" dynamic="Us" />
        <FormWithGrid />
      </div>
    </main>
  );
};
export default careers;
