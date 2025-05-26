import mongoose from "mongoose";

const AppointmentSchema = new mongoose.Schema({
  name: String,
  email: String,
  subject: String,
  service: String,
  date: String,
  time: String,
  message: String,
});

const Appointment = mongoose.models.Appointment || mongoose.model("Appointment", AppointmentSchema);

const connectDb = async () => {
  if (mongoose.connections[0].readyState) return;
  await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
};

export default async function handler(req, res) {
  await connectDb();

  if (req.method === "GET") {
    try {
      const appointments = await Appointment.find();
      res.status(200).json(appointments);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch appointments." });
    }
  } else if (req.method === "POST") {
    try {
      const { name, email, subject, service, date, time, message } = req.body;
      const newAppointment = new Appointment({ name, email, subject, service, date, time, message });
      await newAppointment.save();
      res.status(200).json({ success: true, message: "Appointment booked successfully!" });
    } catch (error) {
      res.status(500).json({ error: "Failed to book the appointment." });
    }
  }
}
