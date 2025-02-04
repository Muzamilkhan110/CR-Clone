import React from "react";
import FormWithGrid from "@/components/label/Label";
import Heading from "@/components/component-heading/Heading";
import BannerPage from "@/pages/Detail-CaseStudy/HeroPage/BannerPage";
import CaseStudyProject from "@/pages/Detail-CaseStudy/CaseStudyProjects/CaseStudyProject";
const page = () => {
  return (
    <main className="bg-black">
      <BannerPage />
      <CaseStudyProject />
      <div className="py-6">
        <Heading tittle="Contact" dynamic="Us" />
        <FormWithGrid />
      </div>
    </main>
  );
};

export default page;
