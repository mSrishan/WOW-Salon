import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';

import ab2 from '../assets/images/ab2.jpg';
import ab1 from '../assets/images/ab1.png'

export default function About() {
  return (
    <>
      <div className="py-8 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-gray-800 font-cinzel">
            Welcome to Wow Unisex Salon – Where Style Meets Perfection
          </h1>
          <div className="flex flex-col md:flex-row items-center gap-6 mt-6">
            <p className="text-gray-600 text-justify font-cormorant md:w-1/30 md:pr-10">
              At Wow Unisex Salon, we believe in more than just beauty. We believe in unlocking confidence, enhancing individuality, and providing an unforgettable experience that leaves you feeling refreshed and ready to take on the world. Our salon is a modern oasis where trends come to life, and personal style is celebrated.
            </p>
            <div className="flex-shrink-0 md:ml-10">
              <Image
                src={ab1}
                alt=""
                width={256}  // Adjust as needed
                height={256} // Adjust as needed
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="py-8 bg-zinc-300">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-gray-800">Why Choose Us</h1>
          <div className="flex flex-col md:flex-row-reverse items-center gap-6 mt-6">
            <p className="text-gray-600 text-justify md:w-1/30 md:pl-10">
            At Wow Unisex Salon, we redefine beauty by blending expertise with creativity. Our salon is more than just a place for hair and beauty – it’s a destination where confidence is unlocked, and individuality is celebrated. With skilled professionals, premium products, and a luxurious ambiance, we ensure every visit leaves you feeling refreshed, empowered, and ready to shine.
            </p>
            <div className="flex-shrink-0 md:mr-10">
              <Image
                src={ab2}
                alt="Salon interior"
                width={256}  // Adjust as needed
                height={256} // Adjust as needed
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="py-8 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-gray-800">Our Philosophy</h1>
          <p className="mt-4 text-gray-600 text-justify">
            At Wow Unisex Salon, we believe that beauty is for everyone. Our mission is simple: to provide top-notch hair, beauty, and grooming services in an environment that’s welcoming, luxurious, and truly unisex. We believe every client deserves personalized attention and treatments that not only enhance their appearance but also uplift their spirit.
          </p>
        </div>
      </div>
    </>
  );
}
