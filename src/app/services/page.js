// src/app/services/page.js
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


import Image from 'C:\Users\win10\Pictures\WOW-Salon\src\app\assets\images';

export default function Services() {
  return (

    <div className="bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <section className="bg-white py-12 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">Our Services – Unlock Your Best Look</h1>
          <p className="text-lg text-gray-600">
            At Wow Unisex Salon, we offer a wide range of services designed to cater to all your hair, beauty, and grooming needs. Whether you're preparing for a special occasion or simply in need of a refreshing makeover, our expert team ensures you leave feeling your absolute best. From classic haircuts to advanced treatments, our services are tailored for both men and women, giving everyone the chance to experience the wow factor.
          </p>
          <div className="mt-6">
            <Image
              src="/path-to-hero-image.jpg"
              alt="Hair washing service"
              width={600}
              height={400}
              className="rounded-lg mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 px-6">
          {/* Hair Services */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Hair Services</h2>
            <ul className="space-y-4">
              <li className="bg-white p-4 shadow rounded">
                <h3 className="font-semibold">Hair Cutting</h3>
                <p className="text-gray-600">
                  From sleek cuts to bold styles, we'll find the perfect look for you.
                </p>
              </li>
              <li className="bg-white p-4 shadow rounded">
                <h3 className="font-semibold">Relaxing</h3>
                <p className="text-gray-600">
                  Unwind and let your hair take a break with our professional hair relaxing treatments.
                </p>
              </li>
              <li className="bg-white p-4 shadow rounded">
                <h3 className="font-semibold">Rebonding</h3>
                <p className="text-gray-600">
                  Smooth, silky, and sleek – our rebonding services will transform your hair.
                </p>
              </li>
              <li className="bg-white p-4 shadow rounded">
                <h3 className="font-semibold">Hair Coloring</h3>
                <p className="text-gray-600">
                  From vibrant hues to subtle highlights, we use premium colors to bring your vision to life.
                </p>
              </li>
            </ul>
          </div>

          {/* Beauty & Grooming */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Beauty & Grooming</h2>
            <ul className="space-y-4">
              <li className="bg-white p-4 shadow rounded">
                <h3 className="font-semibold">Hair Setting</h3>
                <p className="text-gray-600">
                  Make sure every strand is in place, giving you that polished and perfect look.
                </p>
              </li>
              <li className="bg-white p-4 shadow rounded">
                <h3 className="font-semibold">Facial Treatments</h3>
                <p className="text-gray-600">
                  Rejuvenate your skin with our refreshing and revitalizing facials, tailored to your skin type.
                </p>
              </li>
              <li className="bg-white p-4 shadow rounded">
                <h3 className="font-semibold">Head Massage</h3>
                <p className="text-gray-600">
                  Relax, unwind, and relieve tension with a soothing head massage that calms both body and mind.
                </p>
              </li>
              <li className="bg-white p-4 shadow rounded">
                <h3 className="font-semibold">Oil Treatments</h3>
                <p className="text-gray-600">
                  Deeply nourish and revitalize your hair with our luxurious oil treatments.
                </p>
              </li>
              <li className="bg-white p-4 shadow rounded">
                <h3 className="font-semibold">Groom Setting</h3>
                <p className="text-gray-600">
                  Special occasion coming up? Our professional grooming services will have you looking sharp and refined.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-600 mb-6">
            At Wow Unisex Salon, we go beyond just services—we deliver experiences that leave a lasting impression. Each treatment is performed with precision and care, ensuring that you get more than just a beauty session; you get a wow experience.
          </p>
          <button className="bg-black text-white py-3 px-6 rounded shadow hover:bg-gray-800">
            Book Your Appointment Today
          </button>
        </div>
      </section>

      {/* Footer Info Section */}
      <section className="py-6 bg-gray-800 text-gray-200">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 px-6">
          <div className="text-center">
            <h4 className="text-lg font-semibold">Contact</h4>
            <p>(071) 154 - 4071</p>
            <p>wowsalon@gmail.com</p>
          </div>
          <div className="text-center">
            <h4 className="text-lg font-semibold">Hours</h4>
            <p>Mon to Fri: 8am - 6pm</p>
            <p>Sat: 9am - 7pm</p>
            <p>Sun: 9am - 3pm</p>
          </div>
          <div className="text-center">
            <h4 className="text-lg font-semibold">Location</h4>
            <p>Pambahinna, Belihuloya, Sri Lanka</p>
          </div>
        </div>
      </section>
    </div>

  );
}
