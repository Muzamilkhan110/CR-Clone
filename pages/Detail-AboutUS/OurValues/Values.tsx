import React from 'react'
import Heading from '@/components/component-heading/Heading'
import Card2 from '@/components/card-2/Cards2'
import { cardDescription1 } from '@/app/data/second/page'

const Values = () => {
  return (
    <div className='bg-zinc-900 '>
        <section className="container m-auto">
        <div className="container m-auto max-w-screen-lg py-10">
          <div className="px-[1%]">
           <Heading tittle="Our" dynamic="Values" text="Our services are tailor-made and we are always striving to surpass your wildest expectations!" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 py-10 px-3 text-white">
            {
               cardDescription1.map((card, index)=>(
                <Card2 
                
                key={index}
                imageSrc={card.imageSrc}
                imageAlt={card.imageAlt}
                title={card.title}
                description={
                <span className="line-clamp-6 mb-4">
                  {card.description}
                </span>
                 }
                />
              ))
            }
          </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Values