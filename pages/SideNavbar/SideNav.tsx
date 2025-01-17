import React from 'react'
import { useState, useEffect } from "react";
import Logo from '@/components/Logo/Logo';
import Button from '@/components/button/Button';
import Image from 'next/image';

const SideNav: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentPath, setCurrentPath] = useState("");
  
    useEffect(() => {
      setCurrentPath(window.location.pathname);
    }, []);
  
    useEffect(() => {
      // Disable scrolling when menu is open
      if (isMenuOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    }, [isMenuOpen]);
  
    const links = [
      { name: "Home", href: "/" },
      { name: "About us", href: "/about" },
      { name: "Industries", href: "/industries" },
      { name: "Services", href: "/services" },
      { name: "Case Study", href: "/case-study" },
      { name: "Feed", href: "/feed" },
      { name: "Careers", href: "/careers" },
    ];
  
    const socialLinks = [
      { icon: "fab fa-facebook-f", href: "https://www.facebook.com/conceptrecall" },
      { icon: "fab fa-instagram", href: "https://www.instagram.com/teamconceptrecall/" },
      { icon: "fab fa-linkedin-in", href: "https://www.linkedin.com/company/conceptrecall" },
    ];
  return (
    <div>
        <div className='flex justify-between py-3 px-6'>
        <Logo />
        <button
          className="lg:hidden  rounded focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
         <Image src={'/hamburger.svg'}  alt='image' width={20} height={10}/>
        </button>
        </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-80 h-full bg-black text-white transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-50`}
      >
        <div className="p-4 relative">
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-2xl font-bold"
            onClick={() => setIsMenuOpen(false)}
          >
            ×
          </button>

          {/* Logo in Slide-in Menu */}
          <Logo />
          <ul className="space-y-6">
            {links.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className={`block ${
                    currentPath === link.href
                      ? "useclass underline useclass"
                      : "hover:useclass transition duration-200"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Speak to an Expert Button */}
          <div className="py-2">
            <Button text="Speak to an Expert" />
          </div>

          {/* Social Media Icons */}
          <div className="absolute bottom left-3 flex space-x-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg p-2 rounded-full hover:useclass transition duration-200"
              >
                <i className={social.icon}></i>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Overlay when menu is open */}
      {isMenuOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </div>
  )
}

export default SideNav