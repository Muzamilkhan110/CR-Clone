"use client";
import SvgTime from "@/components/SvgtTime/SvgTime";
import React, { useState } from "react";

const CustomCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Function to get the first day of the month
  const getFirstDayOfMonth = () => {
    return new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    ).getDay();
  };

  // Function to get total days in a month
  const getDaysInMonth = () => {
    return new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    ).getDate();
  };

  // Move to previous month
  const prevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  // Move to next month
  const nextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="container-custom m-auto">
    <div className="bg-black text-white w-full max-w-md mx-auto">
      <div className="flex flex-col gap-5">
       <div>
       <SvgTime imageSrc={'/clock.svg'} imageAlt='image' text="Date" />
       </div>

      <div className="flex justify-between px-2 items-center mb-3 md:mt-6">
        <h2 className="text-lg font-semibold">
          {currentDate.toLocaleString("default", { month: "long" })}{" "}
          {currentDate.getFullYear()}
        </h2>
        <div className="flex gap-3">
          <button onClick={prevMonth} className="text-xl">
            &lt;
          </button>
          <button onClick={nextMonth} className="text-xl">
            &gt;
          </button>
        </div>
      </div>

      {/* Days of the Week */}
      <div className="grid grid-cols-7 text-center text-white">
        {daysOfWeek.map((day) => (
          <div key={day} className="p-2">
            {day}
          </div>
        ))}
      </div>

      {/* Dates */}
      <div className="grid grid-cols-7 text-center">
        {/* Empty spaces for previous month's dates */}
        {Array(getFirstDayOfMonth())
          .fill(null)
          .map((_, index) => (
            <div key={`empty-${index}`} className="p-2"></div>
          ))}

        {/* Current Month's Dates */}
        {Array(getDaysInMonth())
          .fill(null)
          .map((_, index) => {
            const date = index + 1;
            const isSelected =
              selectedDate.getDate() === date &&
              selectedDate.getMonth() === currentDate.getMonth() &&
              selectedDate.getFullYear() === currentDate.getFullYear();

            return (
              <div
                key={date}
                className={`p-2 cursor-pointer rounded-full ${
                  isSelected ? "bg-bguseclass text-white" : "hover:bg-gray-800"
                }`}
                onClick={() =>
                  setSelectedDate(
                    new Date(
                      currentDate.getFullYear(),
                      currentDate.getMonth(),
                      date
                    )
                  )
                }
              >
                {date}
              </div>
            );
          })}
      </div>
    </div>
    </div>
    </div>
  );
};

export default CustomCalendar;
