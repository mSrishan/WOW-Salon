import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import Image from "next/image";
import logo from "../assets/images/logo.png";

export default function Footer() {
  return (
    <footer className="bg-white text-black py-8 border-t border-gray-200 sm:bg-gradient-to-b sm:from-gray-50 sm:to-gray-100">
      <div className="container mx-auto px-4 text-center">
        {/* Logo Section */}
        <div className="flex justify-center mb-6">
          <Image
            src={logo}
            alt="Salon WOW Logo"
            width={72}
            height={72}
            className="h-16 w-16 sm:h-18 sm:w-18"
          />
        </div>

        {/* Social Media Section */}
        <div className="flex items-center justify-center mb-8 sm:mb-10 relative">
          {/* Left Line - Hidden on mobile */}
          <div className="hidden sm:block absolute left-0 top-1/2 w-1/3 border-t border-black transform -translate-y-1/2"></div>

          {/* Social Icons Container */}
          <div className="flex items-center justify-center space-x-6 sm:space-x-8">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook className="h-8 w-8 sm:h-10 sm:w-10 text-black hover:text-gray-700 transition transform hover:scale-110" />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
            >
              <FaTiktok className="h-8 w-8 sm:h-10 sm:w-10 text-black hover:text-gray-700 transition transform hover:scale-110" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram className="h-8 w-8 sm:h-10 sm:w-10 text-black hover:text-gray-700 transition transform hover:scale-110" />
            </a>
          </div>

          {/* Right Line - Hidden on mobile */}
          <div className="hidden sm:block absolute right-0 top-1/2 w-1/3 border-t border-black transform -translate-y-1/2"></div>
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-6">
          {/* Contact Section */}
          <div>
            <h3 className="font-Cinzel font-semibold text-base sm:text-lg mb-2">
              CONTACT
            </h3>
            <p className="font-Cinzel text-sm sm:text-base">(071) 154 - 4071</p>
            <p className="font-Cinzel text-sm sm:text-base">
              wowsalon@gmail.com
            </p>
          </div>

          {/* Hours Section */}
          <div>
            <h3 className="font-Cinzel font-semibold text-base sm:text-lg mb-2">
              HOURS
            </h3>
            <p className="font-Cinzel text-sm sm:text-base">
              Mon to Fri: 8AM - 6PM
            </p>
            <p className="font-Cinzel text-sm sm:text-base">Sat: 9AM - 7PM</p>
            <p className="font-Cinzel text-sm sm:text-base">Sun: 9AM - 3PM</p>
          </div>

          {/* Location Section */}
          <div>
            <h3 className="font-Cinzel font-semibold text-base sm:text-lg mb-2">
              LOCATION
            </h3>
            <p className="font-Cinzel text-sm sm:text-base">Pambahinna,</p>
            <p className="font-Cinzel text-sm sm:text-base">Belihuloya,</p>
            <p className="font-Cinzel text-sm sm:text-base">Sri Lanka</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-300 pt-4">
          <p className="font-Cinzel text-xs sm:text-sm">
            Copyright © 2024 Wow Unisex Salon. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
