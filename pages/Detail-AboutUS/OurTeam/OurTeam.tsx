import React from "react";
import Heading from "@/components/component-heading/Heading";
import PicHead from "@/components/PicHead/PicHead";

const chiefHead = [
  {
    row: 1,
    imageSrc: "/Mubasshir.webp",
    imageAlt: "CEO image",
    heading: "Mubasshir Hussain",
    text: "Chief Executive Officer",
    svgSrc: "/download.svg",
    svgAlt: "mail svg",
  },
  {
    row: 1,
    imageSrc: "/Faheem.webp",
    imageAlt: "COO image",
    heading: "Faheem Bhuj",
    text: "Chief Operating Officer",
    svgSrc: "/download.svg",
    svgAlt: "mail svg",
  },
  {
    row: 1,
    imageSrc: "/Ali.webp",
    imageAlt: "CFO image",
    heading: "Ali Ahmed",
    text: "Chief Executive Officer",
    svgSrc: "/download.svg",
    svgAlt: "mail svg",
  },
  {
    row: 2,
    imageSrc: "/Tariq.webp",
    imageAlt: "CMO image",
    heading: "Tariq Khan",
    text: "Chief Executive Officer",
    svgSrc: "/download.svg",
    svgAlt: "mail svg",
  },
  {
    row: 2,
    imageSrc: "/Hamza.webp",
    imageAlt: "CTO image",
    heading: "Hamza Asif",
    text: "Chief Executive Officer",
    svgSrc: "/download.svg",
    svgAlt: "mail svg",
  },
  {
    row: 2,
    imageSrc: "/Usama.webp",
    imageAlt: "Software Architect image",
    heading: "Usama Ashraf",
    text: "Chief Executive Officer",
    svgSrc: "/download.svg",
    svgAlt: "mail svg",
  },
  {
    row: 2,
    imageSrc: "/waqar.webp",
    imageAlt: "CUH image",
    heading: "Waqar Ahmed",
    text: "Chief Executive Officer",
    svgSrc: "/download.svg",
    svgAlt: "mail svg",
  },
];

const OurTeam = () => {
  return (
    <div className="container m-auto ">
      <div className="lg:px-[7%] py-10">
       <div className="py-8">
        <Heading
          tittle="Introducing Our"
          text="Get to know the passionate individuals behind ConceptRecall, each bringing unique expertise and creativity to our collective success."
          dynamic="Team"
        /></div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3  xl:grid-cols-12  justify-items-center gap-2  w-full max-w-[90%]  mx-auto">
          {chiefHead.slice(0,3).map((data , index) =>(
            <div   key={index} className="col-span-1 sm:col-span-1 md:col-span-1  xl:col-span-4">
              <PicHead
              imageSrc={data.imageSrc}
              imageAlt={data.imageAlt}
              heading={data.heading}
              text={data.text}
              svgSrc={data.svgSrc}
              svgAlt={data.svgAlt}
              />
            </div>
          ))
          }
          {chiefHead.slice(3).map((data , index) =>(
            <div   key={index} className="col-span-1 sm:col-span-1 md:col-span-1 xl:col-span-3 ">
              <PicHead
              imageSrc={data.imageSrc}
              imageAlt={data.imageAlt}
              heading={data.heading}
              text={data.text}
              svgSrc={data.svgSrc}
              svgAlt={data.svgAlt}
              />
            </div>
          ))
          }
          </div>
    </div>
    </div>
  );
};

export default OurTeam;
 