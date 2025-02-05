import React from "react";
import FormWithGrid from "@/components/label/Label";
import Heading from "@/components/component-heading/Heading";
import CareersBanner from "@/pages/Detail-Careers/CareersBanner";
import Benefit from "@/pages/Detail-Careers/Benefit";
const careers = () => {
  return (
    <main className="bg-black">
      <CareersBanner />
      <Benefit />
      <div className="py-6">
        <Heading tittle="Contact" dynamic="Us" />
        <FormWithGrid />
      </div>
    </main>
  );
};
export default careers;
