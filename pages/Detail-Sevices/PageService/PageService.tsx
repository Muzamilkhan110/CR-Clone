import React from "react";
import OurApproach from "../bothComp/OurApproach";
import OurApp from "../bothComp/OurApp";
import { ourData } from "@/app/data/OurApproachData/page";
import AppComp from "../bothComp/AppComp";
import ApproachComp from "../bothComp/ApproachComp";

const PageService = () => {
  return (
    <div>
    {ourData.filter((member) => member.id % 2 === 0).map((data, index) => (
      <div key={index}>
        {index % 2 === 0 ? <AppComp  /> : <ApproachComp  />}
      </div>
    ))}
  </div>
  );
};

export default PageService;
