import React from 'react'

const IndusBaner = () => {
  return (
    <section
        className="flex  justify-center items-center flex-col h-[calc(100vh-85px)]  max-lg:h-[calc(100vh-66px)] max-sm:h-[calc(100vh-350px)] overflow-hidden object-cover md:shrink-0"
        style={{ backgroundImage: "url('/industry-hero-banner.webp')" }}
      >
     <div className=''>
        <div className='px-[4%]'>
            <div className='text-2xl md:text-4xl xl:text-5xl text-center text-white font-bold pb-6'>
              Our Apps have consistently been
              <h1 className='useclass'>popular and trending</h1>
              on the App Store.
            </div>
            <p className='text-sm md:text-base text-neutral-300 text-wrap text-center max-w-[1100px]'>
                At ConceptRecall, we're proud to see our apps consistently trending on the App Store. Our team’s dedication to quality and innovation ensures that every app we create resonates with users and stands out in a crowded market. We focus on crafting engaging and intuitive user experiences that captivate audiences and keep them coming back. Our apps aren't just popular; they’re highly rated and frequently featured for their exceptional design and functionality. This success reflects our commitment to excellence and our ability to deliver top-tier digital solutions.
            </p>
        </div>
      </div>
    </section>
  )
}

export default IndusBaner