"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "../assets/images/logo.png";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-zinc-300 via-gray-200 to-zinc-300 shadow-md fixed top-0 w-full z-50">
      <div className="flex justify-between items-center px-4 py-2 sm:py-4 md:px-12">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <Image
            src={logo}
            alt="WOW Salon"
            className="w-12 h-12 sm:w-16 sm:h-16 md:w-22 md:h-22"
          />
          <span className="text-xl sm:text-2xl md:text-3xl font-Cinzel font-semibold tracking-wide text-gray-700">
            WOW Salon
          </span>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="sm:hidden text-gray-700 text-2xl focus:outline-none"
        >
          {isMobileMenuOpen ? <HiX /> : <HiMenu />}
        </button>

        {/* Navigation Links (Desktop View) */}
        <ul className="hidden sm:flex items-center space-x-8">
          {["Home", "About Us", "Services", "Gallery", "Contact US"].map(
            (item, index) => (
              <li key={index}>
                <Link
                  href={
                    item === "Home"
                      ? "/"
                      : item === "About Us"
                      ? "/about"
                      : `/${item.toLowerCase().replace(/ /g, "")}`
                  }
                  className="relative text-lg font-Cinzel font-medium text-gray-700 hover:text-black transition-colors block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-black after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
                >
                  {item}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* Book Now Button (Desktop View) */}
        <div className="hidden sm:block">
          <Link href="/booking">
            <button className="relative group h-10 sm:h-12 w-36 sm:w-44 md:w-48 overflow-hidden border border-gray-700 text-gray-700 font-Cinzel font-medium rounded-full shadow-md transition-all hover:text-white">
              <span className="absolute inset-0 bg-gray-700 transition-transform scale-x-0 group-hover:scale-x-100 origin-center duration-300"></span>
              <span className="relative z-10">Book Now</span>
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile Menu (Mobile View) */}
      {isMobileMenuOpen && (
        <div className="sm:hidden bg-zinc-300 py-3 shadow-inner">
          <ul className="flex flex-col items-center space-y-3">
            {["Home", "About Us", "Services", "Gallery", "Contact US"].map(
              (item, index) => (
                <li key={index}>
                  <Link
                    href={
                      item === "Home"
                        ? "/"
                        : item === "About Us"
                        ? "/about"
                        : `/${item.toLowerCase().replace(/ /g, "")}`
                    }
                    className="relative text-lg font-Cinzel font-medium text-gray-700 hover:text-black transition-colors block"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </nav>
  );
}