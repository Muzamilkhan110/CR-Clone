"use client";
import React from "react";
import FormWithGrid from "@/components/label/Label";
import Heading from "@/components/component-heading/Heading";
import RecentNews from "../pathCompononet/RecentNews/RecentNews";
import AboutBanner from "@/pages/Detail-AboutUS/aboutBanner/AboutBanner";
import AchieveTales from "@/pages/Detail-AboutUS/AchieveTales/AchieveTales";
import AboutCr from "@/pages/Detail-AboutUS/aboutCR/AboutCr";
import Values from "@/pages/Detail-AboutUS/OurValues/Values";
import FAQ from "@/pages/Detail-AboutUS/FAQs/FAQs";
import Area from "@/pages/Detail-AboutUS/OurArea/Area";
import PicSlide from "@/pages/Detail-AboutUS/Gitex/PicSlide";
import CRtime from "@/pages/Detail-AboutUS/CRtimeline/CRtime";
import OurTeam from "@/pages/Detail-AboutUS/OurTeam/OurTeam";
const about = () => {
  return (
    <main className="bg-black">
      <AboutBanner />
      <AchieveTales />
      <AboutCr />
      <CRtime />
      <OurTeam />
      <Values />
      <PicSlide />
      <Area />
      <FAQ />
      <RecentNews />
      <section className="py-10 container m-auto">
        <Heading dynamic="Us" tittle="Contact" />
        <div>
          <FormWithGrid />
        </div>
      </section>
    </main>
  );
};
export default about;
