// src/app/services/page.js
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Remove the incorrect import
// import Image from 'C:\Users\win10\Pictures\WOW-Salon\src\app\assets\images';

// Correct usage of an image
import Image from "next/image";
import heroser from '../assets/images/serviceImgs/heroser.png';
import ser2 from '../assets/images/serviceImgs/ser2.png';

export default function Services() {
  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Hero Section */}
      {/* Hero Section */}
      
<section className="bg-white py-12">
<h1 className="text-3xl font-bold mb-4 text-center md:text-center">
        Our Services – Unlock Your Best Look
      </h1>
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 px-6">
    {/* Image */}
    
    <div className="flex-shrink-0">
      <Image
        src={heroser} // Use the imported variable here
        alt="Hair washing service"
        className="rounded-lg"
        width={200} // Adjust width
        height={100} // Adjust height
      />
    </div>
    {/* Paragraph */}
    <div>
      
      <p className="text-lg text-gray-600 text-center md:text-center mt-10">
        At Wow Unisex Salon, we offer a wide range of services designed to cater to all your hair, beauty, and grooming needs. Whether you're preparing for a special occasion or simply in need of a refreshing makeover, our expert team ensures you leave feeling your absolute best. From classic haircuts to advanced treatments, our services are tailored for both men and women, giving everyone the chance to experience the wow factor.
      </p>
    </div>
  </div>
</section>


      {/* Services Section */}
      <section className="py-16 bg-gray1">
  <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 px-6 items-center">
    
    {/* Left Column - Hair Services */}
    <div className="flex flex-col space-y-4">
      <h2 className="text-2xl font-bold text-center">Hair Services</h2>
      {[
        { title: "Hair Cutting", desc: "From sleek cuts to bold styles, we’ll find the perfect look for you." },
        { title: "Relaxing", desc: "Unwind and let your hair take a break with our professional hair relaxing treatments." },
        { title: "Rebonding", desc: "Smooth, silky, and sleek – our rebonding services will transform your hair." },
        { title: "Hair Coloring", desc: "Smooth, silky, and sleek – our rebonding services will transform your hair." },
      ].map((service, index) => (
        <div key={index} className="bg-white w-84 p-4 shadow rounded-lg text-center">
          <h3 className="font-semibold">{service.title}</h3>
          <p className="text-gray-600 text-sm">{service.desc}</p>
        </div>
      ))}
    </div>

    {/* Middle Column - Image */}
    <div className="flex justify-center">
      <Image
        src={ser2} // Replace with your actual image
        alt="Salon services"
        className="rounded-lg"
        width={250}
        height={250}
      />
    </div>

    {/* Right Column - Beauty & Grooming */}
    <div className="flex flex-col space-y-4">
      <h2 className="text-2xl font-bold">Beauty & Grooming</h2>
      {[
        { title: "Hair Setting", desc: "Make sure every strand is in place, giving you that polished and perfect look." },
        { title: "Facial Treatments", desc: "Rejuvenate your skin with our refreshing and revitalizing facials, tailored to your skin type." },
        { title: "Head Massage", desc: "Relax, unwind, and relieve tension with a soothing head massage that calms both body and mind." },
        { title: "Oil Treatments", desc: "Deeply nourish and revitalize your hair with our luxurious oil treatments.." },
      ].map((service, index) => (
        <div key={index} className="bg-white w-84 p-4 shadow rounded-lg text-center">
          <h3 className="font-semibold">{service.title}</h3>
          <p className="text-gray-600 text-sm">{service.desc}</p>
        </div>
      ))}
    </div>

  </div>
</section>

    </div>
  );
}
