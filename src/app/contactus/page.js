'use client';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactUs() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (res.ok) {
        toast.success(data.message || 'Message sent successfully!', {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: 'dark',
        });
        setForm({ name: '', email: '', message: '' });
      } else {
        toast.error(data.error || 'Failed to send message. Please try again.', {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: 'dark',
        });
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'dark',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-6">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-lg">
        <h1 className="text-4xl font-bold text-black mb-6 text-center">
          Get in Touch
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-black mb-2">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full p-4 border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100 text-black placeholder-gray-500"
              placeholder="Enter Your Name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-black mb-2">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full p-4 border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100 text-black placeholder-gray-500"
              placeholder="Enter your Email Address"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-black mb-2">
              Your Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full p-4 border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100 text-black placeholder-gray-500"
              rows="5"
              placeholder="Write your message here"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gray-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-600 active:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-300 transform hover:scale-105"
          >
            {loading ? (              
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
              </div>
            ) : (
              'Send Message'
            )}
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}
