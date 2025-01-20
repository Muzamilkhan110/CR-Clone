import React from "react";

interface HeadingProps {
  tittle?: string;
  dynamic?: string;
  text?: string;
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({ tittle, dynamic, text, className='' }) => {
  return (
    <div className="text-center">
      <div className="flex justify-center gap-1 flex-wrap sm:flex-row">
        <h1 className="text-xl sm:text-2xl md:text-4xl  text-white font-bold">
          {tittle}
        </h1>
        <p className="text-xl sm:text-2xl md:text-4xl useclass font-bold">
          {dynamic}
        </p>
      </div>
      <div className={`text-center px-[2%] pt-3 lg:px-[15%] text-stone-400 mt-2 text-xs sm:text-base     md:text-lg ${className}`}>
        {text}
      </div>
    </div>
  );
};
export default Heading;
