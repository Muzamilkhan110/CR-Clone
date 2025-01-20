import React from "react"
import FormWithGrid from "@/components/label/Label"
import Heading from "@/components/component-heading/Heading"
import RecentNews from "../pathCompononet/RecentNews/RecentNews"
import Banner from "@/components/banner/Banner"
const about = () =>{
  return(
    <main className="bg-black"> 
      <Banner  />
      <RecentNews />
      <Heading tittle="Contact" dynamic="Us" />
      <FormWithGrid />
    </main>
  )
}
export default about