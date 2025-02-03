import React from "react";
import OurApproach from "./OurApproach";
import FAQ from "@/components/ServiceFAQ/ServiceFAQ";
import { ourData } from "@/app/data/OurApproachData/page";
const ApproachComp = () => {
  return (
    <div>
      <OurApproach data={""} />
      <div className="xl:py-6 pb-4">
        {ourData.map((data , index) => (
          <div key={index}>
            {data.question?.map((question) => (
              <FAQ question={question?.question} answer={question?.answer} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApproachComp;
