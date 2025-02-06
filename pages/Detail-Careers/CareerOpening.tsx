import React from "react";
import Vacancy from "@/components/Vacancy/Vacancy";
import { dataFlow } from "@/app/data/CareerOpening/page";

const CareerOpening = () => {
  return (
    <div className="bg-zinc-900 py-12">
      <div className="container-custom m-auto">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-3 gap-10">
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
