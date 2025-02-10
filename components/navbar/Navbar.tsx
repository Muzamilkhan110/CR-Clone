"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import Logo from "@/components/Logo/Logo";
import Button from "../button/Button";
import SideNav from "@/pages/SideNavbar/SideNav";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "About us", href: "/about" },
    { name: "Industries", href: "/industries" },
    { name: "Services", href: "/services" },
    { name: "Case Study", href: "/casestudy" },
    { name: "Feed", href: "/feed" },
    { name: "Careers", href: "/careers", showButton: true },
  ];
  return (
    <header className="bg-black">
      <nav className="container mx-auto hidden lg:flex  lg:justify-around pl-4  items-center py-4">
        <div className="lg:flex lg:justify-end hidden ">
          <Logo />
        </div>
        <div className=" flex justify-center">
          <ul className="flex  xl:gap-8 items-center text-white text-base font-semibold lg:gap-4 sm:hidden  md:hidden lg:flex">
            {links.map((link) => (
              <li key={link.href} className="flex items-center space-x-5">
                <Link
                  href={link.href}
                  className={` ${
                    pathname === link.href ? "useclass" : "hover:useclass"
                  }`}
                >
                  {link.name}
                </Link>
                {link.showButton && (
                  <Link href="/speakexpert">
                    <Button text="Speak to an Expert" />
                  </Link>
                )}
              </li>
            ))}
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
      <SideNav />
    </header>
  );
};

export default Header;
