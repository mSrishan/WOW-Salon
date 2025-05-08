"use client";

import Image from 'next/image';
import hero from './assets/images/hero.png';
import logo from './assets/images/logo.png';
import home1 from './assets/images/home1.png';
import home2 from './assets/images/home2.png';
import home3 from './assets/images/home3.png';
import homeg1 from './assets/images/homeg1.png';
import homeg2 from './assets/images/homeg2.png';
import homeg3 from './assets/images/homeg3.png';
import homeg4 from './assets/images/homeg4.png';
import homeg5 from './assets/images/homeg5.png';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh]">
        <Image
          src={hero}
          alt="Salon interior"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      
      </section>

      {/* About Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-2/3">
              <div className="flex items-center gap-4 mb-6 justify-center lg:justify-start">
                <Image
                  src={logo}
                  alt="WOW Salon"
                  width={80}
                  height={80}
                  className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20"
                />
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-800">
                  About Us
                </h2>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 text-center lg:text-left">
                Unveil Your Unique Style
              </h3>
              <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed text-center lg:text-left">
                At <span className="font-semibold">Wow Unisex Salon</span>, we believe beauty is for
                everyone. Our welcoming space offers tailored services for all genders, from vibrant
                haircuts to stunning beauty treatments. Let our skilled professionals bring your vision
                to life.
              </p>
              <div className="text-center lg:text-left mt-6">
                <a
                  href="/about"
                  className="inline-block bg-gray-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-700 transition transform hover:scale-105"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="lg:w-1/3 flex justify-center">
              <Image
                src={home1}
                alt="Salon atmosphere"
                width={300}
                height={400}
                className="w-64 h-80 sm:w-72 sm:h-96 rounded-xl shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-gray-100 to-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
            Our Services
            <span className="block w-20 h-1 bg-gray-900 mx-auto mt-2"></span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { src: home2, title: "Hair Styling" },
              { src: home3, title: "Facial Treatments" },
            ].map((service, index) => (
              <div
                key={index}
                className="group relative h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Image
                  src={service.src}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white text-lg sm:text-xl font-semibold">{service.title}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="/services"
              className="inline-block bg-gray-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-700 transition transform hover:scale-105"
            >
              Explore Services
            </a>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
            Our Gallery
            <span className="block w-20 h-1 bg-gray-900 mx-auto mt-2"></span>
          </h2>
          {/* Mobile Gallery (Horizontal Scrollable Carousel) */}
          <div className="block sm:hidden overflow-x-auto whitespace-nowrap pb-4 -mx-4 px-4">
            <div className="inline-flex space-x-4">
              {[
                { src: homeg1, alt: "Gallery Image 1" },
                { src: homeg2, alt: "Gallery Image 2" },
                { src: homeg3, alt: "Gallery Image 3" },
                { src: homeg4, alt: "Gallery Image 4" },
                { src: homeg5, alt: "Gallery Image 5" },
              ].map((image, index) => (
                <div
                  key={index}
                  className="inline-block w-64 h-80 relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white text-sm font-semibold">{image.alt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Desktop Gallery (Grid Layout) */}
          <div className="hidden sm:grid sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { src: homeg1, alt: "Gallery Image 1" },
              { src: homeg2, alt: "Gallery Image 2" },
              { src: homeg3, alt: "Gallery Image 3" },
              { src: homeg4, alt: "Gallery Image 4" },
              { src: homeg5, alt: "Gallery Image 5" },
            ].map((image, index) => (
              <div
                key={index}
                className="relative h-48 lg:h-56 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-transform duration-300 hover:scale-105"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="/gallery"
              className="inline-block bg-gray-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-700 transition transform hover:scale-105"
            >
              View Full Gallery
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-gray-200 to-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
            Client Testimonials
            <span className="block w-20 h-1 bg-gray-900 mx-auto mt-2"></span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Sarah J.",
                initials: "SJ",
                text: "Amazing service! The staff were friendly, and I left feeling like a new person.",
              },
              {
                name: "James M.",
                initials: "JM",
                text: "Fantastic experience! The team truly knows how to make clients feel special.",
              },
              {
                name: "Emily R.",
                initials: "ER",
                text: "Absolutely loved my haircut and styling. The atmosphere was top-notch!",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-500 text-lg">★</span>
                  ))}
                </div>
                <p className="text-gray-600 text-sm sm:text-base italic mb-6">
                  {testimonial.text}
                </p>
                <div className="flex items-center">
                  <div className="bg-gray-900 w-10 h-10 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">
                      {testimonial.initials}
                    </span>
                  </div>
                  <p className="ml-3 text-sm font-semibold text-gray-600">
                    - {testimonial.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}