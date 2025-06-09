"use client";

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import hero from "./assets/images/hero.png";
import logo from "./assets/images/logo.png";
import home1 from "./assets/images/home1.png";
import home2 from "./assets/images/home2.png";
import home3 from "./assets/images/home3.png";
import homeg1 from "./assets/images/5.png";
import homeg2 from "./assets/images/bluehair.png";
import homeg3 from "./assets/images/red.png";
import homeg4 from "./assets/images/color.png";
import homeg5 from "./assets/images/brush.png";

// Mobile Header Component for mobile view
function MobileHeader() {
  return (
    <section className="block sm:hidden bg-gray-800 text-white py-10 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl font-extrabold tracking-tight mb-3">
          Wow Unisex Salon
        </h1>
        <p className="text-base font-medium text-gray-300 mb-6 max-w-md mx-auto">
          Transform your look with our expert styling and personalized care.
        </p>
        <a
          href="/booking"
          className="inline-block bg-white text-gray-900 px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition transform hover:scale-105"
        >
          Book Your Appointment
        </a>
      </div>
    </section>
  );
}

export default function Home() {
  // Carousel settings for the gallery
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Hidden on mobile with top margin */}
      <section className="hidden sm:block mt-16 relative w-full h-[60vh] sm:h-[70vh] lg:h-[80vh]">
        <Image
          src={hero}
          alt="Salon interior"
          fill
          className="object-cover object-center w-full h-full"
          priority
          sizes="100vw"
        />
      </section>

      {/* Mobile Header - Visible on mobile */}
      <MobileHeader />

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
                  className="hidden sm:block w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20"
                />
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-800">
                  About Us
                </h2>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 text-center lg:text-left">
                Unveil Your Unique Style
              </h3>
              <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed text-center lg:text-left">
                At <span className="font-semibold">Wow Unisex Salon</span>, we
                believe beauty is for everyone. Our welcoming space offers
                tailored services for all genders, from vibrant haircuts to
                stunning beauty treatments. Let our skilled professionals bring
                your vision to life.
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
          <div className="space-y-6 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0">
            {[
              {
                src: home2,
                title: "Hair Styling",
                description:
                  "Transform your look with our expert cuts, colors, and styling.",
              },
              {
                src: home3,
                title: "Facial Treatments",
                description:
                  "Rejuvenate your skin with our customized facial therapies.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 sm:h-64 sm:shadow-lg sm:hover:shadow-xl"
              >
                <div className="relative h-72 sm:h-full rounded-t-xl sm:rounded-xl overflow-hidden">
                  <Image
                    src={service.src}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4 sm:bg-black sm:bg-opacity-40 sm:opacity-0 sm:group-hover:opacity-100 sm:transition-opacity sm:duration-300 sm:items-center sm:justify-center">
                    <p className="text-white text-lg font-semibold sm:text-xl">
                      {service.title}
                    </p>
                  </div>
                </div>
                <div className="p-4 sm:hidden">
                  <p className="text-gray-600 text-sm">{service.description}</p>
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
    <Slider {...carouselSettings}>
      {[
        { src: homeg1, alt: "Gallery Image 1" },
        { src: homeg2, alt: "Gallery Image 2" },
        { src: homeg3, alt: "Gallery Image 3" },
        { src: homeg4, alt: "Gallery Image 4" },
        { src: homeg5, alt: "Gallery Image 5" },
      ].map((image, index) => (
        <div key={index} className="px-3">
          <div className="rounded-xl border-4 border-gray-200 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.03] bg-white">
            <div className="relative aspect-w-4 aspect-h-5 w-full">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-sm font-semibold">
                  {image.alt}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
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
                    <span key={i} className="text-yellow-500 text-lg">
                      ★
                    </span>
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