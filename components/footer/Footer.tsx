import React from "react";
import Image from "next/image";
import Button from "../button/Button";
import Logo from "../Logo/Logo";
import Link from "next/link";
import Fbottom from "../footerbottom/F-bottom";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-gray-300 ">
      <div className="container m-auto">
      <div className="py-10 flex justify-center items-center h-[100px]">
        <Logo />
      </div>
      {/* Border */}
      <hr className="border-gray-400 mx-10" />
      {/* Content Section */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 py-10 px-4 lg:px-24">
        {/* Links and Contact Us */}
        <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-2">
          {/* Our Links */}
          <div>
            <h3 className="font-bold mb-4 text-white">Our Links</h3>
            <ul className="space-y-2 text-base">
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
                    className="hover:useclass md:text-base text-sm transition duration-200 text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="md:text-base text-sm">
            <h3 className="font-bold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <h1 className="text-base font-semibold">Phone</h1>
                <Link
                  href={"tel:+923167856990"}
                  className="text-white hover:useclass transition duration-200"
                >
                  (+92) 316 7856 990
                </Link>
              </li>
              <li>
                <h1 className="text-base font-semibold">Email</h1>
                <Link
                  href={"mailto:info@conceptrecall.com"}
                  className="text-white hover:useclass transition duration-200"
                >
                  info@conceptrecall.com
                </Link>
              </li>
              <li>
                <h1 className="text-base font-semibold">Address</h1>
                <Link
                  href="https://www.google.com/maps/place/Concept+Recall/@24.9126989,67.1001207,19z/data=!4m6!3m5!1s0x3eb33e9c0fc552eb:0x9d883c6a5bed576a!8m2!3d24.912541!4d67.1004498!16s%2Fg%2F11gdkk5wpn?entry=ttu&g_ep=EgoyMDI1MDExMC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  className="text-white hover:useclass transition duration-200"
                >
                  B-219, Block 10 Gulshan-e-Iqbal, Karachi, Karachi City, Sindh
                  75300
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* News Letter */}
        <div className="lg:col-span-2">
          <h3 className="text-lg md:text-xl font-bold text-white">
            News Letter
          </h3>
          <p className="md:text-lg text-white">
            Stay in tune for the latest news from Concept Recall
          </p>
          <div className="mt-4 flex items-center border rounded-md bg-transparent focus:outline-none focus:ring-0">
            <input
              type="email"
              placeholder="Enter your Email Address"
              className="flex-1 p-4 bg-transparent focus:outline-none text-neutral-600"
            />
            <Button text="Submit" className="sm:m-2" />
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <hr className="text-neutral-600" />
      <div className="">
        <Fbottom />
      </div>
      </div>
    </footer>
  );
};

export default Footer;
