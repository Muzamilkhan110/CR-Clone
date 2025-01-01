import Link from "next/link";
import React from "react";
import Image from "next/image";

function Header() {
  return (
    <header className="bg-black">
      <nav className="container mx-auto flex justify-around items-center  h-[82px] px-8">
        {/* Logo Section */}
        <div  className="flex items-center">
          <Image 
            src="/logo-light.svg"
            alt="Company Logo"
            width={200}
            height={100}
            priority
          />
        </div> 

        {/* Navigation Links */}
        <div>
          <ul className="flex gap-7 text-white text-[16px] font-semibold">
            <li className="hover:useclass"><Link href="/">Home</Link></li>
            <li className="hover:useclass"><Link href="/">About Us</Link></li>
            <li className="hover:useclass"><Link href="/">Industries</Link></li>
            <li className="hover:useclass"><Link href="/">Services</Link></li>
            <li className="hover:useclass"><Link href="/">Case Study</Link></li>
            <li className="hover:useclass"><Link href="/">Feed</Link></li>
            <li className="hover:useclass"><Link href="/">Careers</Link></li>
          </ul>
        </div>

        {/* CTA Button */}
        <div className="">
          <button className= "bg-useclass text-white px-6 py-3 rounded-xl text-[16px] font-semibold">Speak to an Expert</button>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-2 bg-stone-900 py-1 px-1 rounded-lg">
          <span className="p-2 rounded-lg hover:bg-useclass">
            <Image
              src="/icons8-whatsapp.svg"
              alt="WhatsApp"
              width={24}
              height={24}
            />
          </span>
          <span className="p-2 rounded-lg hover:bg-useclass">
            <Image
              src="/phone-svgrepo-com.svg"
              alt="Phone"
              width={24}
              height={24}
            />
          </span>
        </div>
      </nav>
    </header>
  );
}

export default Header;
