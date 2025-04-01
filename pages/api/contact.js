// src/pages/api/contact.js

import { connectToDatabase } from '../../lib/mongodb.js';  // Adjusted the path to your MongoDB connection utility
import Contact from '../../models/Contact.js';  // Assuming you have the Contact model in the correct directory

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Connect to MongoDB
      await connectToDatabase();

      // Ensure the content-type is JSON
      if (req.headers['content-type'] !== 'application/json') {
        return res.status(400).json({ error: 'Invalid content-type. Please send JSON.' });
      }

      // Parse the form data from request body
      const { name, email, message } = req.body;

      // Simple validation
      if (!name || !email || !message) {
        return res.status(400).json({ error: 'Please fill in all fields.' });
      }

      // Create a new Contact document in MongoDB
      const newContact = new Contact({ name, email, message });
      await newContact.save();

      // Send success response
      res.status(200).json({ message: 'Message sent successfully.' });
    } catch (error) {
      console.error('Error saving contact form:', error);
      res.status(500).json({ error: 'Something went wrong. Please try again.' });
    }
  } else {
    // Handle unsupported HTTP methods
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} not allowed`);
  }
}
