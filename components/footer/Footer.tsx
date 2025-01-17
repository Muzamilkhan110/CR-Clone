import React from "react";
import Image from "next/image";
import Button from "../button/Button";
import Logo from "../Logo/Logo";
import Link from "next/link";
import Fbottom from "../footerbottom/F-bottom";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-gray-300">
      <div className="py-10 flex justify-center items-center h-[100px]">
        <Logo />
      </div>
      {/* Border */}
      <hr className="border-gray-400 mx-10" />
      {/* Content Section */}
      <div className="grid grid-cols-2 md:grid-cols-5 py-10 px-2 ">
        {/* Our Links */}
        <div className="md:text-xl">
          <h3 className=" font-bold mb-4 text-white">Our Links</h3>
          <ul className="space-y-2">
            {[
              { name: "Home", href: "/" },
              { name: "About Us", href: "/about" },
              { name: "Industries", href: "/industries" },
              { name: "Services", href: "/services" },
              { name: "Case Study", href: "/case-study" },
              { name: "Careers", href: "/careers" },
              { name: "Feed", href: "/feed" },
              { name: "Contact Us", href: "/contact" },
            ].map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className="hover:text-orange-500 transition duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Contact Us */}
        <div className="md:text-xl ">
          <h3 className=" text-white font-bold mb-4">Contact Us</h3>
          <ul className="space-y-3 ">
            {/* Phone */}
            <li className="flex flex-col  cursor-pointer">
              <div className="">
                <h1 className="font-bold">Phone No:</h1>
                <Link
                  href={"tel:+923167856990"}
                  className=" text-white hover:useclass cursor-pointer text-sm md:text-base"
                >
                  (+92) 316 7856 990
                </Link>
              </div>
            </li>
            {/* Email */}
            <li className="flex flex-col  cursor-pointer">
              <div className="">
                <h1 className=" font-bold">Email:</h1>
                <Link
                  href={"mailto:info@conceptrecall.com"}
                  target="_blank"
                  className=" text-white text-sm md:text-base hover:useclass cursor-pointer"
                >
                  info@conceptrecall.com
                </Link>
              </div>
            </li>
            {/* Address */}
            <li className="flex flex-col  cursor-pointer">
              <div className="">
                <h1 className="font-bold">Address:</h1>
                <Link
                  href={
                    "https://www.google.com/maps/place/Concept+Recall/@24.9126989,67.1001207,19z/data=!4m6!3m5!1s0x3eb33e9c0fc552eb:0x9d883c6a5bed576a!8m2!3d24.912541!4d67.1004498!16s%2Fg%2F11gdkk5wpn?entry=ttu&g_ep=EgoyMDI1MDExMC4wIKXMDSoASAFQAw%3D%3D"
                  }
                  target="_blank"
                  className=" text-white hover:useclass cursor-pointer text-sm md:text-base"
                >
                  B-219, Block 10 Gulshan-e-Iqbal, Karachi, Karachi City, Sindh
                  75300
                </Link>
              </div>
            </li>
          </ul>
        </div>
        {/* News Letter */}
        <div className="col-span-2 md:col-span-2 md:col-start-4 pt-6">
          <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">News Letter</h3>
          <p className="my-4 md:text-lg text-white">
            Stay in tune for the latest news from Concept Recall
          </p>
          <div className="">
            <input
              type="email"
              placeholder="Enter your Email Address"
              className="w-full  p-4 rounded-l-md bg-transparent border focus:outline-none focus:ring-0 text-neutral-600 "
            />
            <div className="pt-4">
            <Button text="Submit" />
            </div>
          </div>
        </div>
      </div>
      {/* Footer Bottom */}
      <hr className="text-neutral-600" />
      <div className="">
      <Fbottom />
      </div>
    </footer>
  );
};

export default Footer;
