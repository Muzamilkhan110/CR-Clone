import React from 'react'
import IndusComp from '@/components/Industries-comp/IndusComp'

const ProjectReview = () => {
  return (
    <div className='bg-zinc-900 py-8'>
    <div className='container m-auto'>
        <div className='flex justify-center'>
        <IndusComp 
        tags='okay'
        svgSrc={'/Big-Data.svg'}
        svgAlt='svg'
        heading='Big Data'
        descriptions='mskdmnjdhfdjkhfdjfhdjkfsdjkfhjkashfjksd'
        imageSrc='/1.png'
        imageAlt='image'
        />

    </div>
    </div>
    </div>
  )
}

export default ProjectReview