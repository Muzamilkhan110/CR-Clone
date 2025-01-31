import React from "react";
import OurApproach from "../OurApproach";
import OurApp from "../OurApp";
import { ourData } from "@/app/data/OurApproachData/page";

const PageService = () => {
  return (
    <div>
      {ourData.map((data, index) => (
        <div key={index}>{data.id % 2 !== 0 ? <OurApproach /> : <OurApp />}</div>
      ))}
    </div>
  );
};

export default PageService;
