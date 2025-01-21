import React from 'react'
import Card from '@/components/cards/Crads'
import Heading from '@/components/component-heading/Heading'
import { cardDescription1 } from '@/app/data/second/page'

const Area = () => {
  return (
    <div>
     <section className="bg-zinc-900">
        <div className="container m-auto max-w-screen-lg py-10">
          <div className="px-[1%]">
           <Heading tittle="Our Area of" dynamic="Differentiation:" tittlee='' />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 py-10 text-white">
            {
               cardDescription1.map((card, index)=>(
                <Card 
                
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

export default Area