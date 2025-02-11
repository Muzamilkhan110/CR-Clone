import React from "react";
import Link from "next/link"
import Image from "next/image";
const DropMail = () => {
  return (
    <div className="bg-zinc-900">
      <div className="container-custom m-auto py-8">
        <div className="text-white text-[19px] font-bold md:text-[31px] xl:text-[40px] md:max-w-[66%]">
          Drop us an email to explore for <br /> Business
          <span className="useclass px-1 xl:px-3">collaborations</span>
          or&nbsp;career
          <br />
          <span className="useclass">opportunities.</span>
        </div>
        <div>
          <div className="flex flex-col xl:flex-row xl:justify-center xl:gap-14  mt-14 gap-6">
            <div>
              <Link
                href={"tel:+923167856990"}
                className="text-white text-sm md:text-lg xl:text-[22px] font-bold underline-offset-[9px] underline decoration-white hover:useclass transition duration-200"
              >
                (+92) 316 7856 990
              </Link>
              <div className="mt-4 text-xs md:text-sm xl:text-base text-neutral-400">
                Projects, collaborations and queries.
              </div>
            </div>
            <div>
              <Link
                href={"mailto:info@conceptrecall.com"}
                className="text-white text-sm md:text-lg font-bold xl:text-[22px] underline-offset-[9px] underline decoration-white  hover:useclass transition duration-200"
              >
                info@conceptrecall.com
              </Link>
              <div className="mt-4 text-xs md:text-sm xl:text-base text-neutral-400">
                Projects, collaborations and queries.
              </div>
            </div>
            <div>
              <Link
                href={"/careers"}
                className="text-white text-sm md:text-lg font-bold xl:text-[22px] underline-offset-[9px] underline decoration-white  hover:useclass transition duration-200"
              >
                career@conceptrecall.com
              </Link>
              <div className="mt-4 text-xs md:text-sm xl:text-base text-neutral-400">
                join our dynamic team
              </div>
              <div className="flex gap-4 items-center font-bold  mt-4 useclass text-sm md:text-sm xl:text-base">
                <p>View Open Posotions</p>
                <Image  src={'/arrowright.svg'} alt="image" width={30} height={10} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropMail;
