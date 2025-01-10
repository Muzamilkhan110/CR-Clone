import React from "react";


interface LableProps {
  id: string;
  label: string;
  type: string;
  text: string;
}
const Label: React.FC<LableProps> = ({ id, label, type }) => {
  return (
    <form className=" max-w-screen-md min-h-12 flex justify-around">
        <div className="flex px-44">
        <div className=" p-2 rounded-md">
        <label
          htmlFor="field1"
          className="block text-sm font-medium text-gray-600"
        >
          Field Label
        </label>
        <input
          type="text"
          id="field1"
          className="w-full mt-1 px-4 py-2 "
        />
         </div>
         <div className=" p-2 rounded-md">
        <label
          htmlFor="field1"
          className="block text-sm font-medium text-gray-600"
        >
          Field Label
        </label>
        <input
          type="text"
          id="field1"
          className="w-full mt-1 px-4 py-2 "
        />
      </div>
      </div>


      
        <div className="bg-red-400 w-10 h-10 "></div>
    </form>
  );
};
export default Label;
