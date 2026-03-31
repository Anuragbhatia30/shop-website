"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  Send,
  MoveRight,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Thank you! We will get back to you shortly.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <main className="min-h-screen bg-neutral-50 text-slate-900 font-sans">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex flex-col items-center justify-center text-center bg-gradient-to-br from-emerald-900 via-teal-900 to-slate-900 text-white overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0 bg-[url('/images/image 5.jpeg')] bg-cover bg-center"
        />
        <div className="absolute inset-0 bg-black/50" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl px-6 relative z-10"
        >
          {/* <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-emerald-300 uppercase bg-emerald-950/50 backdrop-blur-md border border-emerald-500/30 rounded-full">
            24/7 Support Available
          </span> */}
          <h1 className="text-5xl sm:text-7xl font-extrabold mb-8 tracking-tight leading-[1.1]">
            Contact <span className="text-emerald-400">Our Team</span>
          </h1>
          <p className="text-xl sm:text-2xl mb-10 text-emerald-50/80 font-normal max-w-2xl mx-auto">
            Have questions or need a custom solution? Reach out to our engineers
            for expert advice.
          </p>
        </motion.div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center space-y-12"
          >
            <div>
              <h2 className="text-4xl font-bold text-slate-800 mb-6">
                Get in <span className="text-emerald-700">Touch</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                We are dedicated to assisting you with LT panel manufacturing,
                motor rewinding, and comprehensive industrial electrical
                services.
              </p>
            </div>

            <div className="space-y-8">
              {[
                {
                  icon: <MapPin className="w-6 h-6" />,
                  title: "Our Location",
                  detail:
                    "Shop N. 17, Guru Gobind Singh Nagar, Near SBI Bank, Pillar No. 50, Batala Road, Amritsar",
                },
                {
                  icon: <Phone className="w-6 h-6" />,
                  title: "Phone Numbers",
                  detail: "+91 98149-49530, +91 98556-56405",
                },
                {
                  icon: <ShieldCheck className="w-6 h-6" />,
                  title: "GST Registration",
                  detail: "03AEDPB0688L1Z0",
                },
              ].map((item, i) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  key={i}
                  className="flex items-start gap-6 group"
                >
                  <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-800 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-slate-600">{item.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form
              className="bg-white p-10 rounded-3xl shadow-2xl space-y-6 border border-slate-100"
              onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-slate-700 font-bold mb-2 text-sm uppercase tracking-wider">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-bold mb-2 text-sm uppercase tracking-wider">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-2 text-sm uppercase tracking-wider">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Inquiry about LT Panels"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-2 text-sm uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="How can we help you?"
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-emerald-500 shadow-lg shadow-emerald-500/30 transition-all flex items-center justify-center gap-3"
              >
                Send Message <Send className="w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Workshop Location */}
      <section className="py-24 bg-slate-900 overflow-hidden text-center relative">
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl font-bold text-white mb-6">
            Visit Our <span className="text-emerald-400">Workshop</span>
          </h2>
          <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
            Located in Amritsar&apos;s industrial hub, we welcome you for
            technical consultations and project reviews.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full h-[400px] bg-slate-800 rounded-3xl overflow-hidden relative border border-slate-700"
          >
            {/* Map Placeholder with visual treatment */}
            <div className="absolute inset-0 flex items-center justify-center flex-col text-slate-500">
              {/* <MapPin className="w-16 h-16 mb-4 opacity-20" />
                <p className="font-semibold uppercase tracking-[0.2em]">Interactive Map View</p>
                <p className="text-xs mt-2 opacity-50">Amritsar Industrial Zone</p> */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d357.0157554153487!2d74.90319154821505!3d31.646842197273212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919633961e74f03%3A0x259c255d97dc224c!2s50%2C%20Batala%20Rd%2C%20near%20DARGA%20WALI%20GALI%2C%20near%20SBI%20BRANCH%2C%20Khanna%20Nagar%2C%20Amritsar%2C%20Punjab%20143001!5e0!3m2!1sen!2sin!4v1774872413120!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                pointer-events="auto"
              ></iframe>{" "}
            </div>

            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 flex flex-col md:flex-row items-center justify-between text-white text-left gap-6">
              {/* <div>
                  <h4 className="font-bold text-xl mb-1">Batala Road Facility</h4>
                  <p className="text-slate-300 text-sm">Industrial Hub, Amritsar, Punjab</p>
                </div> */}
              <a
                href="#"
                className="bg-emerald-600 px-6 py-2 rounded-full text-sm font-bold hover:bg-emerald-500 transition-colors"
              >
                Open in Google Maps
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
