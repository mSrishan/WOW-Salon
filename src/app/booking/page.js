import Link from 'next/link'; 
import Image from 'next/image';
import logo from '../assets/images/logo.png';

export default function Navbar() {
  return (
    <>
      {/* Header Section */}
      <header className="bg-white text-black text-center py-6">
        <h1 className="text-3xl font-bold">MAKE AN APPOINTMENT</h1>
        <p className="text-gray-600 mt-2">Get the look you love, with a click</p>
      </header>

      {/* Main Section */}
      <main className="bg-black text-white py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-12">

          {/* Contact Info Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Come Visit Us</h2>
            <p>
              <strong>Office</strong>
              <br />
              Pambahinna, Belihuloya, Sri Lanka
            </p>
            <p>
              <strong>Contact</strong>
              <br />
              (071) 154 - 4071
              <br />
              wowsalon@gmail.com
            </p>
            <p>
              <strong>Working Hours</strong>
              <br />
              Mon to Fri 8am - 6pm
              <br />
              Sat 9am - 7pm
              <br />
              Sun 9am - 3pm
            </p>
          </div>

          {/* Appointment Form Section */}
          <div className="bg-gray-800 p-6 rounded-md shadow-md">
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <textarea
                placeholder="Your message"
                rows="4"
                className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-yellow-500 text-black font-bold py-3 rounded-md hover:bg-yellow-600"
              >
                BOOK APPOINTMENT
              </button>
            </form>
          </div>

        </div>
      </main>
    </>
  );
}
