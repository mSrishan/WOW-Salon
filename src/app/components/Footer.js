// src/app/components/Footer.js
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';
import Image from 'next/image';
import logo from '../assets/images/logo.png';

export default function Footer() {
  return (

    <footer className="bg-white text-black py-8 border-t border-gray-200">
      <div className="container mx-auto px-4 text-center">
        {/* Logo Section */}
        <div className="flex justify-center mb-6">
          <Image src={logo} alt="Salon WOW Logo" className="h-18 w-18" />
        </div>

        <div className="flex items-center justify-center space-x-12 mb-10 relative mr-11">
          <div className="absolute left-0 right-auto top-1/2 w-1/4 border-t border-black transform -translate-y-1/2"></div>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebook className="h-10 w-10 text-black hover:text-gray-700 transition" />
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            <FaTiktok className="h-10 w-10 text-black hover:text-gray-700 transition" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram className="h-10 w-10 text-black hover:text-gray-700 transition" />
          </a>
          <div className="absolute right-0 left-auto top-1/2 w-1/4 border-t border-black transform -translate-y-1/2"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-6">
          {/* Contact Section */}
          <div>
            <h3 className="font-Cinzel font-semibold text-lg mb-2">CONTACT</h3>
            <p className="font-Cinzel"> (071) 154 - 4071</p>
            <p className="font-Cinzel">wowsalon@gmail.com</p>
          </div>

          {/* Hours Section */}
          <div>
            <h3 className="font-Cinzel font-semibold text-lg mb-2">HOURS</h3>
            <p className="font-Cinzel">Mon to Fri 8AM - 6PM</p>
            <p className="font-Cinzel">Sat 9AM - 7PM</p>
            <p className="font-Cinzel">Sun 9AM - 3PM</p>
          </div>

          {/* Location Section */}
          <div>
            <h3 className="font-Cinzel font-semibold text-lg mb-2">LOCATION</h3>
            <p className="font-Cinzel">Pambahinna,</p>
            <p className="font-Cinzel">Belihuloya,</p>
            <p className="font-Cinzel">Sri Lanka</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t from-zinc-300 via-gray-200 to-zinc-300 border-gray-300 pt-4">
          <p className="font-Cinzel text-sm">Copyright © 2024 Wow Unisex Salon. All Rights Reserved.</p>
        </div>

      </div>
    </footer>
  );
}
