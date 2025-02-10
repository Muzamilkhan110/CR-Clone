'use client'
import ComTimeSlot from "@/components/ComTimeSlot/ComTimeSlot";
import SvgTime from "@/components/SvgtTime/SvgTime";
import React, { useState } from "react";

// Function to generate time slots
const generateTimeSlots = (start: string, end: string, interval: number) => {
  const slots = [];
  let currentTime = new Date(`2024-01-01T${start}:00`);
  const endTime = new Date(`2024-01-01T${end}:00`);

  while (currentTime <= endTime) {
    const hours = currentTime.getHours() % 12 || 12; // Convert to 12-hour format
    const minutes = currentTime.getMinutes().toString().padStart(2, "0"); // Ensure two digits
    const amPm = currentTime.getHours() >= 12 ? "PM" : "AM";
    slots.push({
      text: `${hours}:${minutes} ${amPm}`, // Manually formatted clean output
    });
    currentTime.setMinutes(currentTime.getMinutes() + interval);
  }

  return slots;
};

const timeData = generateTimeSlots("10:00", "17:00", 30);

const TimeSlot = () => {
  // State to track the selected time slot (default is the first slot)
  const [selectedSlot, setSelectedSlot] = useState(timeData[0].text);

  return (
    <div className="lg:w-[440px] xl:w-[600px]">
      <div className="flex flex-col gap-5">
      <div>
        <SvgTime imageSrc={'/clock.svg'} imageAlt='alt' text="Select Slots" />
      </div>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-2 xl:gap-3 md:mt-6">
        {timeData.map((slot, index) => (
          <div
            key={index}
            className={` rounded-sm cursor-pointer transition-all ${
              selectedSlot === slot.text ? "bg-bguseclass" : "bg-neutral-700"
            }`}
            onClick={() => setSelectedSlot(slot.text)} // Change selected time slot on click
          >
            <ComTimeSlot text={slot.text} />
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default TimeSlot;
