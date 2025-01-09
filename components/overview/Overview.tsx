import React from "react";
import { Details } from "@/app/data/overviewdetail/page"
const OverView =() =>{
     {
    return (
        <div className="bg-neutral-900 py-10">
            <div className="container mx-auto max-w-screen-lg">
            
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
            {
                Details.map((item, index) => (
                    <div key={index} className={`${index < 3 ? "border-r" : ""} h-28 p-4`}>
                    <h3 className="useclass text-4xl font-bold">{item.title}</h3>
                    <p className="text-white text-lg">{item.text}</p>
                    </div>
                ))
            }
            </div>
           </div>
        </div>
    )
}}
export default OverView
