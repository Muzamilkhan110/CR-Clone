import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Platform from "../socialplatform/Platform";
import Details from "../socialdetails/Details";
import Button from "../button/Button";
const FormWithGrid = () => {
  const fields = [
    { id: "firstName", label: "First Name", required: true },
    { id: "lastName", label: "Last Name", required: false },
    { id: "email", label: "Email", required: true },
    { id: "phone", label: "Phone", required: true },
    { id: "address", label: "Address", required: false },
    { id: "city", label: "City", required: false },
    { id: "notes", label: "Additional Notes", required: true, fullWidth: true },
  ];

  return (
    <div className="container">
    <div className=" flex gap-10 my-10 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 flex-col md:flex-row">
      <div className="grid grid-cols-2 gap-4  p-4 w-3/5">
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
                className="w-full mt-1 px-0 py-2 border-b border-neutral-600 bg-black text-white focus:outline-none focus:ring-0 caret-white"
              />
            ) : (
              <textarea
                id="notes"
                rows={5}
                className="w-full space-y-4 border-b border-neutral-600 px-0 text-white bg-black focus:outline-none focus:ring-0 caret-white resize-none overflow-y-auto"
              ></textarea>
            )}
          </div>
        ))}
      </div>
      <div className="container w-2/5  ">
      <Details />
      <Platform />
      </div>

    </div>
    <div className="flex justify-center">
      <Button  text="Send" />
    </div>
    </div>
  );
};

export default FormWithGrid;
