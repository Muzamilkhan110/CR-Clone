
"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import Logo from "@/components/Logo/Logo";
import Button from "../button/Button";
import { useState } from "react";

const Header = () => {
  const [isOpen, setisOpen] = useState(false);
  const togglebar = () => {
    setisOpen(!isOpen);
  };
  return (
    <header className="bg-black">
      <nav className="container mx-auto flex lg:justify-around items-center py-4">
        <div className="lg:flex lg:justify-end">
          <Logo />
        </div>
        <div className=" flex justify-center">
          <ul className="flex hidden xl:gap-8 items-center text-white text-base font-semibold lg:gap-4 sm:hidden md:hidden lg:flex">
            <li className="hover:useclass ">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:useclass">
              <Link href="/about">About Us</Link>
            </li>
            <li className="hover:useclass">
              <Link href="/industries">Industries</Link>
            </li>
            <li className="hover:useclass">
              <Link href="/services">Services</Link>
            </li>
            <li className="hover:useclass">
              <Link href="/casestudy">Case Study</Link>
            </li>
            <li className="hover:useclass">
              <Link href="/feed">Feed</Link>
            </li>
            <li className="hover:useclass">
              <Link href="/careers">Careers</Link>
            </li>
            <li>
              <Button text="Speak to an Expert" />
            </li>
          </ul>
        </div>
        <div className="hidden lg:block">
          <div className="bg-stone-900 flex items-center gap-2 py-1 px-1 rounded-lg ">
            <div className="p-2 rounded-lg hover:bg-useclass">
              <Link href={"https://wa.me/923167856990"}>
              <Image
                src="/icons8-whatsapp.svg"
                alt="WhatsApp"
                width={24}
                height={24}
              />
              </Link>
            </div>
            <Link href={"tel:+923167856990"}>
            <div className="p-2 rounded-lg hover:bg-useclass">
              <Image
                src="/phone-svgrepo-com.svg"
                alt="Phone"
                width={24}
                height={24}
              />
            </div>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

