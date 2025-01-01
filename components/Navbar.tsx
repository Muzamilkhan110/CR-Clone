import Link from "next/link";
import React from "react";
import Image from "next/image";
function Navbar() {
  return (
    <div className="">
      <nav className="bg-black h-[82px]">
        <span>
          <Image
            className=" relative top bg-transparent text-white left-44 top-4"
            width={200}
            height={200}
            src={"/logo-light.svg"}
            alt={""}
          ></Image>
        </span>
        <div>
            <ul className="flex gap-8 justify-end text-white bottom-5 relative right-[26.5rem] text-[16px] font-semibold ">
          <li><Link href="/"> Home </Link></li>
          <li><Link href="/">About us</Link></li>
          <li><Link href="/">Industries</Link></li>
          <li><Link href="/">Services</Link></li>
          <li><Link href="/">CaseStudy</Link></li>
          <li><Link href="/">Feed</Link></li>
          <li><Link href="/">Careers</Link></li>
        </ul>
        </div>
      <div className="flex bottom-10">
      <button className="relative left-[75%] bottom-[55px] bg-orange-400 text-white p-4 
         text-[16px] font-semibold px-4 py-[12px] rounded-xl">
          Speak to an Expert
        </button>
        <div className="bg-zinc-900 relative left-[80%] bottom-[55px] h-12 w-24 rounded-md flex justify-between" >
          <span className="hover:border-0 hover:bg-orange-700 rounded-xl flex justify-center w-11  hover:p-6"><Image height={22} width={22} src={'/icons8-whatsapp.svg'} alt={""}></Image></span>
         <span className="hover:border-0 hover:bg-orange-700 rounded-xl flex justify-center w-11 "><Image height={22} width={22} src={'phone-svgrepo-com.svg'} alt={""}></Image></span>
        </div>
      </div>
      </nav>
    </div>
  );
}

export default Navbar;
