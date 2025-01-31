"use client";
import React from "react";
import ServiceComponent from "@/components/ServiceComp/ServiceComp";
import { ourData } from "@/app/data/OurApproachData/page";
import { useState, useEffect } from "react";
import CompIndus from "@/components/CompIndus/CompIndus";



//   return (
//     <div>
//       <div>
//         {ourData.filter((member) => member.id % 2 === 1).map((data, index) => (
//           <div key={index} className="">
//             <ServiceComponent
//               heading1={data.heading1}
//               heading2={data.heading2}
//               paragraph={data.paragraph}
//               isBlackBackground={true}
//             />
//           </div>
//         ))}
//         {ourData.filter((member) => member.id % 2 === 0).map((data, index) => (
//           <div key={index} className="">
//             <ServiceComponent
//               id={2}
//               heading1={data.heading1}
//               heading2={data.heading2}
//               paragraph={data.paragraph}
//               heading3={data.heading3}
//               heading4={data.heading4}
//               paragraph1={data.paragraph1}
//               isBlackBackground={!true}
//             />

//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default OurApproach;

const OurApproach = () => {
  return (
    <div>
      {ourData.map((data, index) => {
        const isBlackBackground = data.id % 2 === 1;

        return (
          <div   key={index}>
            <ServiceComponent
            
              heading1={data.heading1}
              heading2={data.heading2}
              paragraph={data.paragraph}
              isBlackBackground={isBlackBackground}
            />
            
          </div>
        );
      })}
    </div>
  );
};

export default OurApproach;
