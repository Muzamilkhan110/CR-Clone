import React from 'react'
import Heading from '@/components/component-heading/Heading'
import PicHead from '@/components/PicHead/PicHead'

const chiefHead = 
       [
        { imageSrc: '/Mubasshir.webp' , imageAlt :'CEO image' , heading :'Mubasshir Hussain' , text:'Chief Executive Officer', svgSrc: '/download.svg' , svgAlt:'mail svg'},
        { imageSrc: '/Faheem.webp' , imageAlt :'COO image' , heading :'Faheem Bhuj' , text:'Chief Operating Officer', svgSrc: '/download.svg' , svgAlt:'mail svg'},
        { imageSrc: '/Ali.webp' , imageAlt :'CFO image' , heading :'Ali Ahmed' , text:'Chief Executive Officer', svgSrc: '/download.svg' , svgAlt:'mail svg'},
       ]
const chiefHead1 = [
    { imageSrc: '/Tariq.webp' , imageAlt :'CMO image' , heading :'Tariq Khan' , text:'Chief Executive Officer', svgSrc: '/download.svg' , svgAlt:'mail svg'},
    { imageSrc: '/Hamza.webp' , imageAlt :'CTO image' , heading :'Hamza Asif' , text:'Chief Executive Officer', svgSrc: '/download.svg' , svgAlt:'mail svg'},
    { imageSrc: '/Usama.webp' , imageAlt :'Software Architect image' , heading :'Usama Ashraf' , text:'Chief Executive Officer', svgSrc: '/download.svg' , svgAlt:'mail svg'},
    { imageSrc: '/waqar.webp' , imageAlt :'CUH image' , heading :'Waqar Ahmed' , text:'Chief Executive Officer', svgSrc: '/download.svg' , svgAlt:'mail svg'},
]

const OurTeam = () => {
  return (
    <div className='bg-black py-10'>
        <div className='px-[9%] '>
        <Heading tittle='Introducing Our' text='Get to know the passionate individuals behind ConceptRecall, each bringing unique expertise and creativity to our collective success.' dynamic='Team' />
        <div className='py-12'>
        <div className='flex justify-center gap-[70px]'>
          {
            chiefHead.map((head , index) => 
            <PicHead
            key={index}
            imageSrc={head.imageSrc} 
            imageAlt={head.imageAlt}
            heading={head.heading}
            text={head.text}
            svgSrc={head.svgSrc}
            svgAlt={head.svgAlt}
            />
            )}
        </div>
        <div className='flex justify-center gap-[42px] pt-7'>
          {
            chiefHead1.map((head , index) => 
            <PicHead 
            key={index}
            imageSrc={head.imageSrc} 
            imageAlt={head.imageAlt}
            heading={head.heading}
            text={head.text}
            svgSrc={head.svgSrc}
            svgAlt={head.svgAlt}
            />
            )}
        </div>
        </div> 
        </div> 
    </div>
  )
}

export default OurTeam