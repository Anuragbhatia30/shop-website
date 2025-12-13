'use client'

import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Thank you! We will get back to you shortly.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center py-20 bg-gradient-to-r from-emerald-700 via-teal-700 to-green-700 text-white">
        <div className="max-w-3xl px-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Contact Us
          </h1>
          <p className="text-lg sm:text-xl mb-6 text-gray-100">
            Have questions? Need a custom LT panel or motor rewinding solution? Reach out to us!
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-16 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="flex flex-col justify-center space-y-6">
          <h2 className="text-3xl font-bold text-emerald-700">Get in Touch</h2>
          <p className="text-gray-600">
            We are here to assist you with LT panel manufacturing, motor rewinding, or any industrial electrical service.
          </p>
          <div className="space-y-4">
            <p className="flex items-center text-gray-700">
              <span className="mr-3 text-emerald-600 text-xl">📍</span>
              123 Industrial Road, City, State, ZIP
            </p>
            <p className="flex items-center text-gray-700">
              <span className="mr-3 text-emerald-600 text-xl">📞</span>
              +91 98765 43210
            </p>
            <p className="flex items-center text-gray-700">
              <span className="mr-3 text-emerald-600 text-xl">✉️</span>
              info@ltpanels.com
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <form
          className="bg-white p-8 rounded-2xl shadow-lg space-y-4"
          onSubmit={handleSubmit}
        >
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* CTA / Map Placeholder */}
      <section className="py-20 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold text-emerald-700 mb-4">
          Visit Our Workshop
        </h2>
        <p className="text-gray-600 mb-6">
          Located in the industrial hub, we welcome clients for consultations and project discussions.
        </p>
        <div className="max-w-4xl mx-auto h-64 bg-gray-300 rounded-2xl flex items-center justify-center">
          <p className="text-gray-700">Map Placeholder (Embed Google Map here)</p>
        </div>
      </section>
    </main>
  );
}
