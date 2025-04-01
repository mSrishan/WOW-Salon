import { connectToDatabase } from '../../lib/mongodb';
import Booking from '../../models/Booking';

// Convert a date into a day of the week
const getDayOfWeek = (date) => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const day = new Date(date).getDay();
  return days[day];
};

const workingHours = {
  Mon: { start: 8, end: 18 },
  Tue: { start: 8, end: 18 },
  Wed: { start: 8, end: 18 },
  Thu: { start: 8, end: 18 },
  Fri: { start: 8, end: 18 },
  Sat: { start: 8, end: 19 },
  Sun: { start: 9, end: 15 },
};

// Helper function to generate available times for a specific date
const generateTimeSlots = (day) => {
  const { start, end } = workingHours[day];
  let times = [];
  for (let hour = start; hour < end; hour++) {
    times.push(`${hour}:00`);
    times.push(`${hour}:30`);
  }
  return times;
};

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const { date } = req.query;
      const dayOfWeek = getDayOfWeek(date);

      const availableTimes = generateTimeSlots(dayOfWeek);

      // Check for existing bookings on this date and time
      const bookings = await Booking.find({ date });
      const bookedTimes = bookings.map((booking) => booking.time);
      const availableSlots = availableTimes.filter((time) => !bookedTimes.includes(time));

      res.status(200).json({ availableTimes: availableSlots });
    } catch (error) {
      console.error('Error fetching available times:', error);
      res.status(500).json({ error: 'Unable to fetch available times.' });
    }
  } else if (req.method === 'POST') {
    try {
      const { name, email, service, date, time } = req.body;

      // Check if appointment already exists for this time
      const existingBooking = await Booking.findOne({ date, time });
      if (existingBooking) {
        return res.status(400).json({ error: 'Time slot is already booked. Please choose another time.' });
      }

      const newBooking = new Booking({ name, email, service, date, time });
      await newBooking.save();

      res.status(200).json({ message: 'Appointment booked successfully!' });
    } catch (error) {
      console.error('Error booking appointment:', error);
      res.status(500).json({ error: 'Something went wrong. Please try again.' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} not allowed`);
  }
}
