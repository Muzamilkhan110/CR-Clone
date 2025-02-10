import React from "react";

import CustomCalendar from "./Calender/Calender";
import TimeSlot from "./TimeSlot/TimeSlot";
import ClientDetail from "./ClientDetail/ClientDetail";

const DateTime = () => {
  return (
    <div className="container-custom m-auto py-6 ">
      <div className="text-white md:py-11 font-bold text-lg md:text-[22px] lg:text-[32px] xl:text-4xl flex flex-wrap justify-center gap-1">
        Let's Work-
        <h1 className="useclass">together.</h1>
      </div>
    <div className="flex flex-col md:flex-row lg:justify-between md:gap-3 gap-9 mt-6">
      <div>
        <CustomCalendar />
      </div>
      <div>
        <TimeSlot />
      </div>
    </div>
    <div className="text-base text-neutral-600 font-semibold  text-center mt-8 md:mt-12">
      <h1>All times are in (UTC-06:00) Central Time (US & Canada)</h1>
    </div>
    <div className="mt-8">
      <ClientDetail />
    </div>
    </div>
  );
};

export default DateTime;
