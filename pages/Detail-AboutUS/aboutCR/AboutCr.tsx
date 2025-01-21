import React from 'react'
import Heading from '@/components/component-heading/Heading'
import AboutCard from '@/components/aboutcard/AboutCard'
import Button from '@/components/button/Button'

const aboutdetails = [
    {
        imageSrc:"/our-mission-dark.svg",
        imageAlt:"image",
        text: "Our",
        text1: "Mission",
        description: "Our mission at ConceptRecall is to empower businesses to achieve unprecedented success and growth. We strive to deliver innovative solutions that drive revenue and elevate business profiles. Our approach is rooted in simplicity and effectiveness, making us a trusted partner in our clients’ journeys. We are committed to maintaining a customer-first ethos, reflected in our high client satisfaction rates. As we move forward, our focus remains on sustainable success, adapting to market changes, and enhancing our services to meet evolving needs. We aim to be not just a service provider but a growth partner, helping clients navigate the complexities of modern markets. Through dedication and expertise, we work tirelessly to see our clients thrive and achieve their fullest potential.",

    },
    {
        imageSrc:"/our-vision-dark.svg",
        imageAlt:"image",
        text: "Our",
        text1: "Vision",
        description: "At ConceptRecall, our vision is to be the leading force in the marketing industry, known for transforming the trajectory of businesses around the globe. We envision a future where our strategies become the cornerstone of client success stories. Our goal is to continue refining our methods to stay ahead of industry trends, ensuring our clients always receive the most effective solutions. We see ourselves as pioneers in fostering innovation and excellence in every project. As we grow, we aim to expand our reach, impacting more businesses across various sectors. Our commitment to excellence drives us to set new standards in the marketing field, always pushing the boundaries of what is possible. In the long term, we aspire to not only achieve but also set the benchmarks for success within the industry, making ConceptRecall synonymous with outstanding results and client satisfaction.",
    }
]

const AboutCr = () => {
  return (
    <div className='bg-black container py-[5%] '>
        <div className='md:px-4 lg:px-7 xl:px-[11%] '>
        <Heading tittle='About ' dynamic='ConceptRecall' />
        <p className='pb-8 text-xs md:text-sm xl:text-base text-neutral-300 text-center px-[1%]'>ConceptRecall is dedicated to elevating businesses, enhancing revenue, and propelling companies to new levels of success. Our straightforward yet effective strategies have earned us recognition as a client-focused marketing agency with over 95.5% satisfied clientele. With a decade of experience, we have a rich history of completing numerous projects and cultivating client happiness.</p>
        <div  className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4 text-white">
            {
               aboutdetails.map((card, index)=>(
                <AboutCard 
                key={index}
                imageSrc={card.imageSrc}
                imageAlt={card.imageAlt}
                text={card.text}
                text1={card.text1}
                description={
                <span className=" lg:line-clamp-[20]">
                {card.description}
                </span>
                }
                />
              ))
            }
          </div>
          </div>
          <div className='flex justify-center py-3'>
          <Button className='' text='Discover Our Works' />
          </div>
    </div>
  )
}

export default AboutCr