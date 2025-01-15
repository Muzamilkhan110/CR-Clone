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
      <nav className="container mx-auto flex justify-around items-center py-4">
        <div className="w-[30%] flex justify-center">
          <Logo />
        </div>
        <div className="w-[60%] lg:z-0 flex justify-center">
          <ul className="flex gap-8 items-center text-white text-base font-semibold">
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
        <div className="w-[10%]">
          <div className="bg-stone-900 flex items-center gap-2 py-1 px-1 rounded-lg w-[63%]">
            <div className="p-2 rounded-lg hover:bg-useclass">
              <Image
                src="/icons8-whatsapp.svg"
                alt="WhatsApp"
                width={24}
                height={24}
              />
            </div>
            <div className="p-2 rounded-lg hover:bg-useclass">
              <Image
                src="/phone-svgrepo-com.svg"
                alt="Phone"
                width={24}
                height={24}
              />
            </div>
          </div>
        </div>
      </nav>

      <div className="lg:hidden flex justify-between items-center p-4 bg-blue-500">
        <Logo />
        <button onClick={togglebar} className="text-white text-3xl">
          ☰
        </button>
      </div>

      <div
        className={`lg:hidden fixed inset-0 bg-black bg-opacity-50 z-50 transition-transform duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="w-3/4 bg-black text-white  h-full p-6">
          <Logo />
          <ul className="text-white text-lg flex flex-col gap-10 ">
            <li className="hover:useclass">
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
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
