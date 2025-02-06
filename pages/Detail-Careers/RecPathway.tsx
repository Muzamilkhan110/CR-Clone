import Pathway from "@/components/requirePathway/Pathway";
import React from "react";

const pathwayData = [
  {
    number: "01",
    title: "Apply",
    description:
      "Kick-start your journey with a simple application process—submit your resume to start the conversation.",
    color: "bg-blue-500", // Customize color here
  },
  {
    number: "02",
    title: "Review",
    description:
      "Our team will carefully review your application and get back to you with next steps.",
    color: "bg-green-500",
  },
  {
    number: "03",
    title: "Interview",
    description:
      "If selected, you’ll be invited for an interview to discuss your qualifications and fit.",
    color: "bg-yellow-500",
  },
  {
    number: "04",
    title: "Offer",
    description:
      "If successful, we’ll extend a formal offer for you to join our team!",
    color: "bg-red-500",
  },
];

const PathwaySection = () => {
  return (
    <div className="py-5 md:py-14">
      <section className="text-white flex justify-center gap-1 text-lg font-bold lg:text-[34px] md:text-2xl mb-6">
        Our
        <h2 className="useclass">Recuritment</h2>
        Pathway
      </section>
    <div className="container-custom py-7 relative">
      <div className="w-[3px] h-[74%] left-[25px] top-12 md:top-[53px] md:w-[80%] md:h-[2px] md:left-[8%] bg-bguseclass absolute"></div>
      {/* Pathway items inside bordered container */}
      <div className="md:flex justify-between">
        {pathwayData.map((item, index) => (
          <div key={index} className="md:w-[20%]">
            <Pathway
              icon={item.number}
              title={item.title}
              field={item.description}
            />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default PathwaySection;
