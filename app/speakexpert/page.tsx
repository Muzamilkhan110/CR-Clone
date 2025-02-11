import React from "react";
import SpeakBanner from "@/pages/Detail-SpeakExpet/SpeakBanner/SpeakBanner";
import MyCalendar from "@/pages/Detail-SpeakExpet/Calender/Calender";
import DateTime from "@/pages/Detail-SpeakExpet/DateTime";
import DropMail from "@/pages/Detail-SpeakExpet/DropMail/DropMail";
const SpeakExpert = () => {
  return (
    <div className="bg-black">
      <SpeakBanner />
      <DateTime />
      <DropMail />
    </div>
  );
};

export default SpeakExpert;
