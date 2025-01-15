"use client";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Industries from "./pathCompononet/industries/Indistries";
import OverView from "@/components/overview/Overview";
import Project from "@/components/projectSlider/Project";
import SectionSlider from "./section-slider/page";
import Heading from "@/components/component-heading/Heading";
import FormWithGrid from "@/components/label/Label";
import '@fortawesome/fontawesome-free/css/all.min.css';
import BgDetails from "@/components/bg-Details.tsx/Bgdetails";
import Award from "./pathCompononet/awardwining/Award";
import AboutUS from "./pathCompononet/AboutUs/AboutUs";
import TestComp from "./pathCompononet/testimonalsCom/Test-Comp";
import RecentNews from "./pathCompononet/RecentNews/RecentNews";


export default function Home() {
  return (
    <main className="bg-black">
      <BgDetails/>
      <Award/>
      <OverView/>
      <AboutUS/>
      <Industries />
      <Project projects={[]}  />
      <SectionSlider />
      <TestComp />
      <RecentNews />
      <section className="py-10">
        <Heading dynamic="Us" tittle="Contact" />
        <div><FormWithGrid /></div>
      </section>
    </main>
  );
}
