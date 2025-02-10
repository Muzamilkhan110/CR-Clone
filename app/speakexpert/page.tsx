import React from "react";
import SpeakBanner from "@/pages/Detail-SpeakExpet/SpeakBanner/SpeakBanner";
import MyCalendar from "@/pages/Detail-SpeakExpet/Calender/Calender";
import DateTime from "@/pages/Detail-SpeakExpet/DateTime";
const SpeakExpert = () => {
  return (
    <div className="bg-black">
      <SpeakBanner />
      <DateTime />
      
    </div>
  );
};

export default SpeakExpert;
