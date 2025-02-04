import React from 'react'
import FormWithGrid from "@/components/label/Label"
import Heading from "@/components/component-heading/Heading"
import CreationService from '@/pages/Detail-Sevices/CreationService'
import WeServe from '@/pages/Detail-Sevices/WeServe'
import { ServiceProj } from '@/pages/Detail-Sevices/ServiceProjects/ServiceProj'
import { AgileService } from '@/pages/Detail-Sevices/AgileService/AgileService'
import Message from '@/pages/Detail-Sevices/CeoMessage/Message'

export default function page() {
  return (
    <main className="bg-black"> 
      <CreationService />
      <WeServe />
      {/* <PageService /> */}
      <ServiceProj />
      <AgileService />
      <Message />
      <Heading tittle="Contact" dynamic="Us" />
      <FormWithGrid />
    </main>
  )
}
