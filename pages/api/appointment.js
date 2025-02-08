import connectToDatabase from "../../lib/mongodb";
import Appointment from "../../models/Appointment";
import nodemailer from "nodemailer";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ success: false, error: "Method Not Allowed" });
    }

    try {
        await connectToDatabase();
        const { name, email, subject, message } = req.body;

        if (!name || !email || !subject || !message) {
            return res.status(400).json({ success: false, error: "All fields are required" });
        }

        const newAppointment = new Appointment({ name, email, subject, message });
        await newAppointment.save();

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER, 
                pass: process.env.EMAIL_PASS, 
            },
        });

        
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email, 
            subject: "Appointment Confirmation",
            text: `Hello ${name},\n\nYour appointment has been booked successfully.\n\nSubject: ${subject}\nMessage: ${message}\n\nThank you!\n\nWOW Salon Team`,
        };

        await transporter.sendMail(mailOptions);

        return res.status(201).json({ success: true, message: "Appointment booked and email sent!" });
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({ success: false, error: "Server error" });
    }
}
