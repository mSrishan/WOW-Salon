"use client";
import { useState, useEffect } from "react";

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState("");
  const [availableTimes, setAvailableTimes] = useState([]);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // Fetch existing appointments
    const fetchAppointments = async () => {
      const res = await fetch("http://localhost:3000/api/appointments"); // Assuming you have an endpoint to fetch appointments
      const data = await res.json();
      setAppointments(data);
    };
    fetchAppointments();
  }, []);

  // Define working hours
  const workingHours = {
    Mon: { start: "08:00", end: "18:00" },
    Tue: { start: "08:00", end: "18:00" },
    Wed: { start: "08:00", end: "18:00" },
    Thu: { start: "08:00", end: "18:00" },
    Fri: { start: "08:00", end: "18:00" },
    Sat: { start: "08:00", end: "19:00" },
    Sun: { start: "09:00", end: "15:00" },
  };

  // Generate available time slots for a given day
  const generateTimeSlots = (date) => {
    const day = new Date(date).toLocaleString("en-US", { weekday: "short" }); // Get short weekday name (Mon, Tue, etc.)
    const { start, end } = workingHours[day];

    // Function to convert time to minutes
    const timeToMinutes = (time) => {
      const [hours, minutes] = time.split(":").map(Number);
      return hours * 60 + minutes;
    };

    // Function to convert minutes to time
    const minutesToTime = (minutes) => {
      const hours = Math.floor(minutes / 60);
      const mins = minutes % 60;
      return `${String(hours).padStart(2, "0")}:${String(mins).padStart(2, "0")}`;
    };

    const availableTimes = [];
    const startTime = timeToMinutes(start);
    const endTime = timeToMinutes(end);

    // Generate time slots in 30-minute intervals
    for (let time = startTime; time < endTime; time += 30) {
      availableTimes.push(minutesToTime(time));
    }

    return availableTimes;
  };

  // Update available times when the date changes
  const handleDateChange = (e) => {
    const { value } = e.target;
    setFormData({ ...formData, date: value });
    const availableSlots = generateTimeSlots(value);

    // Filter out times that are already booked
    const bookedTimes = appointments
      .filter((appointment) => appointment.date === value)
      .map((appointment) => appointment.time);

    const filteredAvailableTimes = availableSlots.filter(
      (time) => !bookedTimes.includes(time)
    );
    setAvailableTimes(filteredAvailableTimes);
  };

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
      const res = await fetch("http://localhost:3000/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        setResponseMessage("Appointment booked successfully!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          service: "",
          date: "",
          time: "",
          message: "",
        });
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

          <form onSubmit={handleSubmit} className="bg-lightGray text-black rounded-lg shadow-lg p-6">
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

            {/* New Service Field */}
            <select
              name="service"
              value={formData.service}
              onChange={handleInputChange}
              className="p-2 border rounded w-full mt-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              <option value="">Select Service</option>
              <option value="Haircut">Haircut</option>
              <option value="Facial">Facial</option>
              <option value="Massage">Massage</option>
              <option value="Nail Care">Nail Care</option>
            </select>

            {/* New Date Field */}
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleDateChange}
              className="p-2 border rounded w-full mt-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />

            {/* New Time Field */}
            <select
              name="time"
              value={formData.time}
              onChange={handleInputChange}
              className="p-2 border rounded w-full mt-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              <option value="">Select Time</option>
              {availableTimes.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>

            {/* Message Field */}
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
