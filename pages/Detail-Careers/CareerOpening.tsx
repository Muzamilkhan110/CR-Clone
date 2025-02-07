import React from "react";
import Vacancy from "@/components/Vacancy/Vacancy";
import { dataFlow } from "@/app/data/CareerOpening/page";

const CareerOpening = () => {
  return (
    <div className="bg-zinc-900 py-12">
      <section className="text-white flex justify-center py-7 gap-2 text-lg font-bold lg:text-[34px] md:text-2xl mb-6">
        <h2 className="useclass">Career</h2>
        Openings
      </section>
      <div className="container-custom max-md:w-[100vh] max-lg:w-[150vh] m-auto">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-9">
          {dataFlow.map((data, index) => (
            <Vacancy
              key={index}
              mainTitle={data.mainTitle}
              date={data.date}
              heading1={data.heading1}
              subject={data.subject}
              description={data.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerOpening;
