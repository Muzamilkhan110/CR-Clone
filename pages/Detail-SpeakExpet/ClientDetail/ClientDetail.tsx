import Button from "@/components/button/Button";
import SvgTime from "@/components/SvgtTime/SvgTime";
import React from "react";
import Link from "next/link";

const ClientDetail = () => {
  const fields = [
    { id: "firstName", label: "First Name", required: true },
    { id: "lastName", label: "Last Name", required: false },
    { id: "email", label: "Email", required: true },
    { id: "phone", label: "Phone", required: true },
    { id: "address", label: "Address", required: false },
    { id: "city", label: "City", required: false },
    { id: "notes", label: "Message", required: true, fullWidth: true },
  ];
  return (
    <div>
      <div>
        <SvgTime
          imageSrc={"/Big-Data.svg"}
          imageAlt="image"
          text="Add Your Details"
        />
      </div>
      <div className="md:flex gap-8">
      <div className="md:grid grid-cols-2 gap-4 mt-4 md:w-3/5">
        {fields.map(({ id, label, required, fullWidth }) => (
          <div
            key={id}
            className={`p-2 rounded-md ${fullWidth ? "col-span-2" : ""}`}
          >
            <label
              htmlFor={id}
              className="block text-base font-medium text-neutral-600"
            >
              {label} {required && <span className="text-red-500">*</span>}
            </label>
            {id !== "notes" ? (
              <input
                type="text"
                id={id}
                className="w-full mt-1 px-0 py-1 border-b border-neutral-600 bg-black text-white focus:outline-none focus:ring-0 caret-white"
              />
            ) : (
              <textarea
                id="notes"
                rows={3}
                className="w-full space-y-4 border-b border-neutral-600 px-0 text-white bg-black focus:outline-none focus:ring-0 caret-white resize-none overflow-y-auto"
              ></textarea>
            )}
          </div>    
        ))}
        <div className="flex md:col-span-2  justify-end mt-10">
        <Button className="!px-8 !py-4" text="Book a slot" />
      </div>
      </div>
      
      <div className="md:max-w-[240px] lg:max-w-[350px] xl:max-w-[450px]">
      {/* Description Section */}
      <div className="pt-5 text-white text-xs md:text-sm xl:text-base leading-relaxed ">
        If you have any RFP requirements, please share them with us at
        <Link
          className="useclass text-blue-400 underline"
          href={"mailto:info@conceptrecall.com"}
        >
          info@conceptrecall.com
        </Link>
        and if you are looking for a career- related enquiry, please check our
        <Link
          href={"/careers"}
          className="font-semibold useclass cursor-pointer text-blue-400 underline"
        >
          Career
        </Link>
        section
      </div>
      {/* Closing Section */}
      <div className="mt-5 text-stone-500 text-xs md:text-sm xl:text-base leading-relaxed">
        <p className="">
          Discover the perfect solution for your business needs with us! Let's
          join forces and unlock the path to success.
        </p>
      </div>
      </div>
      </div>
    </div>
  );
};

export default ClientDetail;
