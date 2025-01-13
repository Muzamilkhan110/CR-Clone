import React from "react";
import Link from "next/link";

const Details = () => {
    return (
        <div className="container text-white pt-10">
            <span className="flex gap-2 font-bold text-3xl">
            <h1 className="useclass">Speak</h1>
            <h1>to an Expert</h1>
             </span>
         <div className="pt-5">
             <div className="">
               <p>If you have any RFP requirements please share them with us at</p>
             </div>

              {/* Email and Career Info Section */}
             <div className="flex gap-1 ">
                <Link className="useclass" href={"mailto:info@conceptrecall.com"}>info@conceptrecall.com</Link>
                <p>and if you are looking for a career-</p>
            </div>

             {/* Career Section */}
             <div className="flex gap-1">
               <p>related enquiry please check our</p>
               <Link href={"/careers"} className="font-semibold useclass cursor-pointer">Career</Link>
               <p>section.</p>
             </div>
             </div>
            <div className="mt-5 text-stone-500">
                <p>Discover the perfect solution for your business needs with us! Let's join forces and unlock the path to success</p>
            </div>
        </div>

    )
}
export default Details