'use client'
import React from 'react'
import IndusServe from '@/pages/Detail-Industries/IndusServe'
import FormWithGrid from "@/components/label/Label"
import Heading from "@/components/component-heading/Heading"
import ProjectReview from '@/pages/Detail-Industries/ProjectReview'
import IndusBaner from '@/pages/Detail-Industries/IndusBaner'
import Discus from '@/pages/Detail-Industries/Discus'

const page = () => {
  return (
    <main className="bg-black">
      <IndusBaner />
      <IndusServe />
      <div className='bg-black py-10'>
      <div className='max-w-[1140px] m-auto'>
      <Heading tittle='Our' dynamic='Industries' text='ConceptRecall serves a diverse range of industries, including automotive, IoT, e-commerce, medical, education, and construction. We are dedicated to delivering innovative software that drives success and growth for our clients.' />
      </div>
      </div>
      <ProjectReview />
      <Discus />
      <div className='py-6'>
      <Heading tittle="Contact" dynamic="Us" />
      <FormWithGrid />
      </div> 
    </main>
  )
}

export default page