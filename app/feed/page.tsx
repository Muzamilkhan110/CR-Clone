import React from 'react'
import FormWithGrid from "@/components/label/Label"
import Heading from "@/components/component-heading/Heading"
import BannerFeed from '@/pages/Detail-Feed/BannerFeed'
import NewsFeed from '@/pages/Detail-Feed/NewsFeed/NewsFeed'
const page = () => {
  return (
    <main className="bg-black"> 
      <BannerFeed />
      <NewsFeed />
      <div className='py-6'>
      <Heading tittle="Contact" dynamic="Us" />
      <FormWithGrid />
      </div>
    </main>
  )
}

export default page