import { title } from "process";
import React from "react";

interface HeadingProps {
  tittle?: string;
  tittlee?: string;
  dynamic?: string;
  text?: string;
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({ tittle, dynamic, text, className='', tittlee }) => {
  return (
    <div className="text-center">
      <div className="flex justify-center gap-2 flex-wrap sm:flex-row">
        <h1 className="text-lg sm:text-2xl md:text-2xl xl:text-4xl text-white font-bold">
          {tittle}{tittlee}
        </h1>
        
        <p className="text-lg sm:text-2xl md:text-2xl xl:text-4xl useclass font-bold">
          {dynamic}
        </p>
      </div>
      <div className={`text-center px-[2%] pt-3 lg:px-[15%] text-stone-400 mt-2 text-xs sm:text-base  ${className}`}>
        {text}
      </div>
    </div>
  );
};
export default Heading;
