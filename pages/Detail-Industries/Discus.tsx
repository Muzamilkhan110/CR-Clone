import Button from '@/components/button/Button'
import React from 'react'

const Discus = () => {
  return (
    <section
        className="flex  justify-center items-center flex-col h-[calc(100vh-400px)]  max-lg:h-[calc(100vh-500px)] max-sm:h-[calc(100vh-500px)] overflow-hidden object-cover md:shrink-0"
        style={{ backgroundImage: "url('/industry-hero-banner.webp')" }}
      >
  <div className=''>        
    <div className=' container m-auto'>
       <div className='flex gap-1 justify-center text-white text-xl sm:text-xl md:text-2xl xl:text-3xl font-bold' >
        Ready to discuss your
        <h1 className='useclass'>Project</h1>
       </div>
       <p className='text-neutral-300 text-sm text-center py-8 px-6 lg:px-[20%] md:px-40 lg:text-lg'>Let s turn your vision into reality. Connect with us to explore how our tailored app solutions can elevate your business. Our team is here to guide you through every phase of development, from initial concept to final launch. Schedule your consultation today and start your journey towards digital transformation. We’re excited to partner with you and bring your ideas to life.</p>
    </div>
    <div className='flex justify-center'>
      <Button text='Book a Quick Call' />
    </div>
    </div>
      </section>
  )
}

export default Discus