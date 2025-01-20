import React from 'react'
import Banner from '@/components/banner/Banner'

const AboutBanner = () => {
  return (

    <div  className="flex justify-center items-center flex-col h-[calc(100vh-85px)] 
          max-lg:h-[calc(100vh-66px)] max-sm:h-[max-content] overflow-hidden object-cover md:shrink-0"
          style={{ backgroundImage: "url('/homeBg.webp')", opacity:"0.2" }}>
      <div>
      <Banner className='useclass' title='Consistent insights' text='help guide your business choices with confidence.'  />
      </div>
             
    </div>
  )
}

export default AboutBanner