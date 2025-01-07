"use client";
import { useState } from "react";

const AppointmentForm = () => {
  // State for form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [responseMessage, setResponseMessage] = useState("");

 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  

  

  // Handle form submission
 const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const res = await fetch("http://localhost:3000/api/appointment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        const data = await res.json();
        if (data.success) {
            setResponseMessage("Appointment booked successfully!");
            setFormData({ name: "", email: "", subject: "", message: "" });
        } else {
            setResponseMessage("Failed to book the appointment. Try again.");
        }
    } catch (err) {
        console.error(err);
        setResponseMessage("Error: Unable to book appointment.");
    }
};

  return (
    <section className="text-white py-10">
      <div className="container mx-auto px-4">
       
        <div className="text-center mb-10 mt-10">
          <h2 className="text-4xl font-bold uppercase text-black">Make an Appointment</h2>
          <p className="text-gray-400 mt-12">
            _____________Get the look you love, with a click_____________
          </p>
        </div>

       
        <div className="bg-gradient-to-r from-black to-transparent text-white grid md:grid-cols-2 gap-7 px-4 py-6 md:px-8 rounded-lg shadow-lg mb-10">
          
          <div>
            <h3 className="text-2xl font-bold mb-6 mt-4 ml-36">Come Visit Us</h3>
            <p className="mb-2 ml-40">
              <strong>Office</strong>
              <br />
              Pambahinna, Balangoda, Sri Lanka
            </p>

            <p className="mb-2 ml-40">
              <strong>Contact</strong>
              <br />
              (071) 154 – 4071
              <br />
              wowSalon@gmail.com
            </p>
            <p className="mb-2 ml-40">
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
                className="p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleInputChange}
                className="p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleInputChange}
              className="p-2 border rounded w-full mt-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <textarea
              name="message"
              placeholder="Your message"
              value={formData.message}
              onChange={handleInputChange}
              className="p-2 border rounded w-full mt-4 h-32 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            ></textarea>
            <button
              type="submit"
              className="bg-yellow text-black font-bold py-2 px-4 rounded mt-4 w-full hover:bg-yellow-600"
            >
              Book Appointment
            </button>
            {responseMessage && (
              <p className="mt-4 text-yellow-500 text-center">{responseMessage}</p>
            )}
          </form>
        </div>
      
      </div>
    </section>
  );
};

export default AppointmentForm;
