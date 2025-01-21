import React from "react"
import FormWithGrid from "@/components/label/Label"
import Heading from "@/components/component-heading/Heading"
import RecentNews from "../pathCompononet/RecentNews/RecentNews"
import AboutBanner from "@/pages/Detail-AboutUS/aboutBanner/AboutBanner"
import AchieveTales from "@/pages/Detail-AboutUS/AchieveTales/AchieveTales"
import AboutCr from "@/pages/Detail-AboutUS/aboutCR/AboutCr"
import Values from "@/pages/Detail-AboutUS/OurValues/Values"
import FAQ from "@/pages/Detail-AboutUS/FAQs/FAQs"
import Area from "@/pages/Detail-AboutUS/OurArea/Area"
const about = () =>{
  return(
    <main className="bg-black"> 
      {/* <AboutBanner /> */}
      <AchieveTales />
      <AboutCr />
      <Values />
      <Area />
      <FAQ />
      <RecentNews />
      <section className="py-10">
        <Heading dynamic="Us" tittle="Contact" />
        <div><FormWithGrid /></div>
      </section>
    </main>
  )
}
export default about