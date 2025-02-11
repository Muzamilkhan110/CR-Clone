import Heading from '@/components/component-heading/Heading'
import Platform from '@/components/socialplatform/Platform'
import React from 'react'

const SocialLink = () => {
  return (
    <div className='container-custom m-auto py-8 md:py-14 flex flex-col gap-5'>
       <div className='flex justify-center gap-1 text-white text-lg md:text-xl xl:text-3xl font-bold'>
        <h2>Social</h2>
        <h2 className='useclass'>Links</h2>
       </div>
       <div className='flex justify-center'>
        <Platform />
       </div>
    </div>
  )
}

export default SocialLink