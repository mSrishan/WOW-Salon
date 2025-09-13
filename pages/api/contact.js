// src/pages/api/contact.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} not allowed`);
  }

  try {
    // Ensure JSON input
    if (req.headers['content-type'] !== 'application/json') {
      return res
        .status(400)
        .json({ error: 'Invalid content-type. Please send JSON.' });
    }

    const { name, email, message } = req.body;

    // Simple validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Please fill in all fields.' });
    }

    // ✅ Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false, // ⚠️ dev only, remove in production
      },
    });

    // ✅ Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'raaziyahussain415@gmail.com', // change to your receiving email
      subject: `New Contact Message from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    };

    // ✅ Send email
    await transporter.sendMail(mailOptions);

    return res.status(200).json({ message: 'Message sent successfully.' });
  } catch (error) {
    console.error('Error sending contact message:', error);
    return res
      .status(500)
      .json({ error: 'Something went wrong. Please try again.' });
  }
}
