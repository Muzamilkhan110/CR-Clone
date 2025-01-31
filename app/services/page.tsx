import React from 'react'
import FormWithGrid from "@/components/label/Label"
import Heading from "@/components/component-heading/Heading"
import CreationService from '@/pages/Detail-Sevices/CreationService'
import WeServe from '@/pages/Detail-Sevices/WeServe'
import PageService from '@/pages/Detail-Sevices/PageService/PageService'
export default function page() {
  return (
    <main className="bg-black"> 
      <CreationService />
      <WeServe />
      <PageService />
      <Heading tittle="Contact" dynamic="Us" />
      <FormWithGrid />
    </main>
  )
}
