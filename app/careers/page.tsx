import React from "react";
import FormWithGrid from "@/components/label/Label";
import Heading from "@/components/component-heading/Heading";
import CareersBanner from "@/pages/Detail-Careers/CareersBanner";
import Benefit from "@/pages/Detail-Careers/Benefit";
import RecPathway from "@/pages/Detail-Careers/RecPathway";
import CareerOpening from "@/pages/Detail-Careers/CareerOpening";
import CareerMail from "@/pages/Detail-Careers/CareerMail";
const careers = () => {
  return (
    <main className="bg-black">
      <CareersBanner />
      <Benefit />
      <RecPathway />
      <CareerOpening />
      <CareerMail />
    </main>
  );
};
export default careers;
