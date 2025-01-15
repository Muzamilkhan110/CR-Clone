import Link from "next/link";
import React from "react";
import Image from "next/image";
import Logo from "@/components/Logo/Logo";
import Button from "../button/Button";


function Header() {
  return (
    <header className="bg-black">
      <nav className="container mx-auto flex justify-around items-center  h-[82px] px-8"> 
        <Logo/>
        <div className="lg:z-0">
          <ul className="flex gap-7 text-white text-[16px] font-semibold">
            <li className="hover:useclass"><Link href="/">Home</Link></li>
            <li className="hover:useclass"><Link href="/about">About Us</Link></li>
            <li className="hover:useclass"><Link href="/industries">Industries</Link></li>
            <li className="hover:useclass"><Link href="/services">Services</Link></li>
            <li className="hover:useclass"><Link href="/casestudy">Case Study</Link></li>
            <li className="hover:useclass"><Link href="/feed">Feed</Link></li>
            <li className="hover:useclass"><Link href="/careers">Careers</Link></li>
          </ul>
        </div>
        <div className="">
          <Button text="Speak to an Expert"/>
        </div>
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
