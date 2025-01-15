import React from "react";

const Fbottom = () => {
    return (
        <footer>
        <div className="flex flex-col md:flex-row justify-between items-center text-white px-56 py-4">
        <p>© Copyrights 2025 All Rights Reserved.</p>
        <div className="flex space-x-4">
          {[
            { name: "Terms & Conditions", href: "/terms" },
            { name: "Privacy & Policy", href: "/privacy" },
            { name: "FAQs", href: "/faqs" },
          ].map((link, index) => (
            <a key={index} href={link.href} className="underline">
              {link.name}
            </a>
          ))}
        </div>
      </div>
        </footer>
    )
}
export default Fbottom