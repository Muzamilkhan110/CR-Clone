import React from "react"
import FormWithGrid from "@/components/label/Label"
import Heading from "@/components/component-heading/Heading"
import RecentNews from "../pathCompononet/RecentNews/RecentNews"
import AboutBanner from "@/pages/Detail-AboutUS/aboutBanner/AboutBanner"
import AchieveTales from "@/pages/Detail-AboutUS/AchieveTales/AchieveTales"
const about = () =>{
  return(
    <main className="bg-black"> 
      {/* <AboutBanner /> */}
      <AchieveTales />
      <RecentNews />
      <Heading tittle="Contact" dynamic="Us" />
      <FormWithGrid />
    </main>
  )
}
export default about