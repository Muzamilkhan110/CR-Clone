import { StaticImport } from "next/dist/shared/lib/get-img-props";
import React from "react";
import Image from "next/image";
import Button from "../button/Button";
interface VacancyProps {
  mainTitle?: string;
  imageSrc?: string | StaticImport;
  imageAlt?: string;
  date?: string;
  heading1?: string;
  subject?: string;
  description?: string;
}

const Vacancy: React.FC<VacancyProps> = ({
  mainTitle,
  date,
  heading1,
  subject,
  description,
}) => {
  return (
    <div>
      
      <div className="bg-black border shadow-md text-neutral-400 p-6 rounded-xl py-10">
        <h1 className="useclass text-sm md:text-base xl:text-lg font-semibold">{mainTitle}</h1>
        <div className="flex gap-2 mt-3">
          <Image
            src={"/calender-dark.svg"}
            alt={"calenderIcon"}
            width={15}
            height={2}
          />
          <p className=" text-xs">{date}</p>
        </div>
        <h3 className="mt-8 text-xs md:text-sm lg:text-base">{heading1}</h3>
        <h4 className="mt-5 text-xs md:text-sm lg:text-base">{subject}</h4>
        <p className="line-clamp-3 mt-4 text-xs md:text-sm lg:text-base">{description}</p>
        <div className="flex justify-center mt-8 ">
          <Button className="lg:!w-56 md:!w-48  !w-44 md:!py-3 text-lg" text="Apply Now" />
        </div>
      </div>
    </div>
  );
};

export default Vacancy;
