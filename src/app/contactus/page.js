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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-blue-950 p-6">
      <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 w-full max-w-lg border border-white/20">
        <h1 className="text-4xl font-extrabold text-white mb-8 text-center tracking-tight">
          Connect With Us
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-white/80 mb-2">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full p-4 bg-white/5 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-white/50 transition-all duration-300"
              placeholder="Enter Your Name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white/80 mb-2">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full p-4 bg-white/5 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-white/50 transition-all duration-300"
              placeholder="Enter Your Email Address"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white/80 mb-2">
              Your Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full p-4 bg-white/5 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-white/50 transition-all duration-300"
              rows="5"
              placeholder="Write your message here"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white py-3 px-6 rounded-xl font-semibold hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-white"></div>
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