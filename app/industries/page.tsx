import React from 'react'
import FormWithGrid from "@/components/label/Label"
import Heading from "@/components/component-heading/Heading"
import ProjectReview from '@/pages/Detail-Industries/ProjectReview'
const page = () => {
  return (
    <main className="bg-black">
      <ProjectReview />
      <div>
      <Heading tittle="Contact" dynamic="Us" />
      <FormWithGrid />
      </div> 
    </main>
  )
}

export default page