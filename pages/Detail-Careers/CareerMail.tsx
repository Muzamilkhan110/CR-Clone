import React from "react";
import Image from "next/image";
import Button from "@/components/button/Button";
const CareerMail = () => {
  const fields = [
    { id: "firstName", label: "First Name", required: true },
    { id: "lastName", label: "Last Name", required: false },
    { id: "email", label: "Email", required: true },
    { id: "phone", label: "Phone", required: true },
    { id: "currentsalary", label: "Current Salary", required: false },
    { id: "expectedsalary", label: "Expected Salary", required: false },
    { id: "lasteducation", label: "Last Education", required: false },
    { id: "noticeperiod", label: "Notice Period in (Days)", required: false },
    { id: "githublink", label: "Github Profile Link", required: false },
    { id: "linkedlnlink", label: "Linkedln Profile Link", required: false },
    {
      id: "notes",
      label: "Why you want to Join us",
      required: false,
      fullWidth: true,
    },
    {
      id: "resume",
      label: "Upload Resume",
      required: true,
      type: "file",
      fullWidth: true,
    },
  ];

  return (
    <div className="container-custom m-auto py-6">
      <div className="text-white md:py-11 font-bold text-lg md:text-[22px] lg:text-[32px] xl:text-4xl flex flex-wrap justify-center gap-1">
        Can't Find the 
        <h1 className="useclass">Right Role</h1>
        ? Submit Your Resume
      </div>

      <div className="flex flex-col md:flex-row gap-4 md:gap-14">
        <div className="md:grid grid-cols-2 gap-4 md:w-3/5">
          {fields.map(({ id, label, required, fullWidth, type }) => (
            <div
              key={id}
              className={`rounded-md ${fullWidth ? "col-span-2" : ""} ${
                id !== "resume" ? "p-2" : ""
              }  `}
            >
              <label
                htmlFor={id}
                className="block text-sm md:text-base font-medium text-neutral-600"
              >
                {label} {required && <span className="text-red-500">*</span>}
              </label>
              {id === "resume" ? (
                <div className="flex justify-between border rounded-lg items-center p-5 gap-5 my-4">
                  <Image
                    src={"/upload-icon.svg"}
                    alt="Ico"
                    width={50}
                    height={20}
                  />
                  <input
                    type="file"
                    id={id}
                    required={required}
                    className="w-full  mt-1 py-2 border-neutral-600 bg-black text-white focus:outline-none focus:ring-0 caret-white"
                  />
                  <div className="text-neutral-500 text-xs text-center leading-relaxed">
                    <div className="pt-4">
                      Select a file or drag and drop here
                    </div>
                    <div className="py-4">
                      JPG, PNG or PDF, file size no more than 10MB
                    </div>
                  </div>
                </div>
              ) : id !== "notes" ? (
                <input
                  type="text"
                  id={id}
                  required={required}
                  className="w-full mt-1 px-0 py-2 border-b border-neutral-600 bg-black text-white focus:outline-none focus:ring-0 caret-white"
                />
              ) : (
                <textarea
                  id={id}
                  rows={3}
                  required={required}
                  className="w-full space-y-4 border-b border-neutral-600 px-0 text-white bg-black focus:outline-none focus:ring-0 caret-white resize-none overflow-y-auto"
                ></textarea>
              )}
            </div>
          ))}
          <div className="flex py-5  md:hidden">
            <Button className="!text-base !py-3 !px-6" text="Apply Now" />
          </div>
        </div>
        <div className="w-full md:pt-16 md:w-2/5">
          <p className="text-neutral-400 text-sm lg:text-base leading-relaxed">
            If our current openings don't align with your skills, we still want
            to hear from you. Drop your resume, and we’ll explore potential
            matches or contact you when new opportunities arise. We appreciate
            your interest in joining our team and are always looking for
            talented individuals to enhance our workforce.
          </p>
        </div>
      </div>
      <div className="md:flex md:py-6 justify-center hidden ">
      <Button className="!text-base !py-3 !px-10" text="Apply Now" />
      </div>
    </div>
  );
};

export default CareerMail;
