"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X,ChevronsLeftRightEllipsis} from "lucide-react"; // install if missing: npm i lucide-react

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Events", href: "/events" },
    { name: "Activities", href: "/activities" },
    { name: "Workshops", href: "/workshops" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <nav className="flex justify-between items-center w-full bg-gradient-to-r from-orange-300 to-orange-700 text-white px-10 py-4 shadow-lg fixed top-0 left-0 z-50">
  
      <Link
        href="/"
        className="text-2xl font-semibold tracking-wide hover:text-yellow-300 transition-colors duration-200 cursor-pointer flex gap-2"
      ><ChevronsLeftRightEllipsis size={30} className="mb-1"/>
      ODC Localhost
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="relative px-3 py-1 text-lg font-medium transition-all duration-200 rounded-md hover:bg-white/20 hover:scale-105 cursor-pointer"
          >
            {item.name}
          </Link>
        ))}
      </div>

      <button
        className="md:hidden text-white hover:text-yellow-300 transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

    
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-gradient-to-r from-orange-300 to-orange-700 flex flex-col items-center gap-4 py-4 md:hidden shadow-lg animate-fadeIn">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)} // close menu after click
              className="w-full text-center py-2 text-lg font-medium hover:bg-white/20 transition-all duration-200"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
