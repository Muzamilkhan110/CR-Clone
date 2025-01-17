import React from "react";

const Fbottom = () => {
    return (
        <footer className="py-4">
        <div className="flex flex-col-reverse gap-5 md:flex-row justify-between items-center text-xs md:text-base text-white md:px-56 ">
        <p>© Copyrights 2025 All Rights Reserved.</p>
        <div className="flex md:flex-row space-x-4 text-xs md:text-base">
          {[
            { name: "Terms & Conditions", href: "/terms" },
            { name: "Privacy & Policy", href: "/privacy" },
            { name: "FAQs", href: "/faqs" },
          ].map((link, index) => (
            <a key={index} href={link.href} className="underline hover:useclass">
              {link.name}
            </a>
          ))}
        </div>
      </div>
        </footer>
    )
}
export default Fbottom