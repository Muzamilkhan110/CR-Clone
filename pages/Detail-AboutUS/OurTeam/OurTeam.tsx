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
    <div className="container mx-auto">
      <div>
        <Heading
          tittle="Introducing Our"
          text="Get to know the passionate individuals behind ConceptRecall, each bringing unique expertise and creativity to our collective success."
          dynamic="Team"
        />
        <div className="flex justify-center">
          <div className="container mx-auto">
            <div className="grid grid-cols-12 gap-6 my-10">
              {/* First 3 pictures: Each spans 4 columns */}
              {chiefHead.slice(0, 3).map((head, index) => (
                <div
                  key={index}
                  className="col-span-12 sm:col-span-6 md:col-span-4"
                >
                  <PicHead
                    imageSrc={head.imageSrc}
                    imageAlt={head.imageAlt}
                    heading={head.heading}
                    text={head.text}
                    svgSrc={head.svgSrc}
                    svgAlt={head.svgAlt}
                  />
                </div>
              ))}

              {/* Remaining pictures: Responsive grid for 4 per row */}
              {chiefHead.slice(3).map((head, index) => (
                <div
                  key={index}
                  className="col-span-12 sm:col-span-6 md:col-span-4"
                >
                  <PicHead
                    imageSrc={head.imageSrc}
                    imageAlt={head.imageAlt}
                    heading={head.heading}
                    text={head.text}
                    svgSrc={head.svgSrc}
                    svgAlt={head.svgAlt}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
