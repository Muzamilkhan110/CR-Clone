import React from "react";

interface PathwayProps {
  icon?: string;
  title?: string;
  field?: string;
}

const Pathway: React.FC<PathwayProps> = ({ icon, title, field }) => {
  return (
    <div className="flex max-sm:flex-row md:flex-col gap-6 pb-12 md:text-center">
      {/* Icon */}
      <div className="flex justify-center items-center text-useclass">
        <div className="gradient-border bg-zinc-900 z-[9999] relative rounded-full p-[15px] font-extrabold">
          <div className="useclass min-w-6 text-center">{icon}</div>
        </div>
      </div>

      {/* Title and Field */}
      <div className="text-white ">
        <h1 className="text-sm md:text-base font-semibold mb-3">{title}</h1>
        <p className="text-neutral-400 text-xs md:text-sm leading-relaxed md:leading-loose">{field}</p>
      </div>
    </div>
  );
};

export default Pathway;
