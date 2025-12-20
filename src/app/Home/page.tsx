import React from "react";
import Link from "next/link";
// import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center py-20 bg-gradient-to-r from-emerald-700 via-teal-700 to-green-700 text-white mt-">
        <div className="absolute top-2 right-6 text-sm sm:text-base font-semibold tracking-wide">
          <span className="text-sm font-medium border rounded-lg px-2 py-1">GST No. : 03AEDPB0688L1Z0</span>
        </div>
        <div className="max-w-3xl px-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Reliable LT Panels & Motor Winding Repair Services
          </h1>
          <p className="text-lg sm:text-xl mb-6 text-gray-100">
            Your trusted partner for industrial electrical solutions — from
            manufacturing LT panels to expert motor winding repairs.
          </p>
          <div className="space-x-4">
            <Link
              href="/services"
              className="bg-white text-emerald-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Our Services
            </Link>
            <Link
              href="/contact"
              className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-emerald-700 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-white">
        <h2 className="text-3xl font-bold text-center text-emerald-700 mb-10">
          Our Expertise
        </h2>
        <div className="max-w-8xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
          {[
            {
              title: "LT Panel Manufacturing",
              desc: "We build high-quality, customized LT panels for industries and commercial use.",
              icon: "⚙️",
            },
            {
              title: "Motor/Generator Winding Repair",
              desc: "Expert rewinding and servicing for all types of AC/DC motors and Generators, ensuring maximum efficiency.",
              icon: "🔧",
            },
            {
              title: "Industrial Maintenance",
              desc: "Comprehensive electrical maintenance solutions for factories and plants.",
              icon: "🏭",
            },
            {
              title: "Deals in Chemical Earthings",
              desc: "Supplying and installing chemical earthings for enhanced safety and performance.",
              icon: "🛠️",
            }
          ].map((service) => (
            <div
              key={service.title}
              className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition text-center border-t-4 border-emerald-600"
            >
              <div className="text-4xl mb-3">{service.icon}</div>
              <h3 className="font-semibold text-xl mb-2 text-emerald-700">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-emerald-700 via-teal-700 to-green-700 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
        <p className="mb-6 text-lg">
          Contact us for tailored LT panels or professional motor rewinding.
        </p>
        <Link
          href="/contact"
          className="bg-white text-emerald-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Get in Touch
        </Link>
      </section>
    </main>
  );
}
