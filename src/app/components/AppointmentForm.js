"use client";
import { useState } from "react";

const AppointmentForm = () => {
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "", 
    date: "",
    time: ""
  });
  
  const [responseMessage, setResponseMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const res = await fetch("/api/appointment", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        const data = await res.json();
        if (data.success) {
            setResponseMessage("Appointment booked successfully!");
            setFormData({ name: "", email: "", service: "", date: "", time: "" });
        } else {
            setResponseMessage("Failed to book the appointment. Try again.");
        }
    } catch (err) {
        console.error(err);
        setResponseMessage("Error: Unable to book appointment.");
    }
  };

  return (
    <section className="text-white py-10 mt-20">
      <div className="container mx-auto px-4">
       
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold uppercase text-black">Make an Appointment</h2>
          
          {/* Responsive divider line with centered text */}
          <div className="flex items-center justify-center mt-12 space-x-4">
            <div className="h-px bg-gray-400 flex-grow max-w-[80px] md:max-w-[200px]" />
            <p className="text-gray-400 text-sm md:text-base text-center whitespace-nowrap">
              Get the look you love, with a click
            </p>
            <div className="h-px bg-gray-400 flex-grow max-w-[80px] md:max-w-[200px]" />
          </div>
        </div>

        <div className="bg-gradient-to-r from-black to-transparent text-white grid md:grid-cols-2 gap-7 px-4 py-6 md:px-8 rounded-lg shadow-lg mb-10">
          
          <div>
            <h3 className="text-2xl font-bold mb-6 mt-4 text-center md:text-left md:ml-36">Come Visit Us</h3>
            <p className="mb-2 text-center md:text-left md:ml-40">
              <strong>Office</strong>
              <br />
              Pambahinna, Balangoda, Sri Lanka
            </p>

            <p className="mb-2 text-center md:text-left md:ml-40">
              <strong>Contact</strong>
              <br />
              (071) 154 – 4071
              <br />
              wowSalon@gmail.com
            </p>
            <p className="mb-2 text-center md:text-left md:ml-40">
              <strong>Working Hours</strong>
              <br />
              Mon to Fri
              <br />
              8am – 6pm
              <br />
              Sat: 8am – 7pm
              <br />
              Sun: 9am – 3pm
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-lightGray text-black rounded-lg shadow-lg p-6"
          >
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleInputChange}
                className="p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-black"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-black"
                required
              />
            </div>

            <select
              name="service"
              value={formData.service}
              onChange={handleInputChange}
              className="p-2 border rounded w-full mt-4 focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-400"
              required
            >
              <option value="">Select a Service</option>
              <optgroup label="Hair Services">
                <option value="Hair Cutting">Hair Cutting</option>
                <option value="Relaxing">Relaxing</option>
                <option value="Rebonding">Rebonding</option>
                <option value="Hair Coloring">Hair Coloring</option>
              </optgroup>
              <optgroup label="Salon Services">
                <option value="Hair Setting">Hair Setting</option>
                <option value="Facial Treatments">Facial Treatments</option>
                <option value="Head Massage">Head Massage</option>
                <option value="Oil Treatments">Oil Treatments</option>
              </optgroup>
            </select>

            <input
              type="date"
              name="date"
              value={formData.date || ""}
              onChange={handleInputChange}
              className="p-2 border rounded w-full mt-4 focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-400"
              required
            />

            <input
              type="time"
              name="time"
              value={formData.time || ""}
              onChange={handleInputChange}
              className="p-2 border rounded w-full mt-4 focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-400"
              required
            />

            <button
              type="submit"
              className="bg-yellow text-black font-bold py-2 px-4 rounded mt-4 w-full hover:bg-yellow-600 placeholder-gray-400"
            >
              Book Appointment
            </button>

            {responseMessage && (
              <p className="mt-4 text-white text-center">{responseMessage}</p>
            )}
          </form>

        </div>
      
      </div>
    </section>
  );
};

export default AppointmentForm;
