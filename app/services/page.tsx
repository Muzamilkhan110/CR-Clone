import React from 'react'
import FormWithGrid from "@/components/label/Label"
import Heading from "@/components/component-heading/Heading"
import CreationService from '@/pages/Detail-Sevices/CreationService'

export default function page() {
  return (
    <main className="bg-black"> 
      <CreationService />
      <Heading tittle="Contact" dynamic="Us" />
      <FormWithGrid />
    </main>
  )
}
