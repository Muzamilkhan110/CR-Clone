import React from 'react'
import IndusComp from '@/components/Industries-comp/IndusComp'
import { compData } from '@/app/data/projectsdata/page';

const App = () => {
  return (
    <div>
      {compData.map((data, index) => (
        <IndusComp
          key={index} // Key is important for React's reconciliation process
          tags={data.tags}
          tags1={data.tags1}
          tags2={data.tags2}
          svgSrc={data.svgSrc}
          svgAlt={data.svgAlt}
          heading={data.heading}
          descriptions={data.descriptions}
          imageSrc={data.imageSrc}
          imageAlt={data.imageAlt}
          bgColor={data.bgColor} // Pass bgColor dynamically
        />
      ))}
    </div>
  );
};

export default App;