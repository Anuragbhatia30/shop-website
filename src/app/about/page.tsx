"use client";

import React from "react";

export default function About() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center py-20 bg-gradient-to-r from-emerald-700 via-teal-700 to-green-700 text-white">
        <div className="absolute top-2 right-6 text-sm sm:text-base font-semibold tracking-wide">
          <span className="text-sm font-medium border rounded-lg px-2 py-1">GST No. : 03AEDPB0688L1Z0</span>
        </div>
        <div className="max-w-3xl px-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            About Our Company
          </h1>
          <p className="text-lg sm:text-xl mb-6 text-gray-100">
            Delivering trusted LT panel manufacturing and professional motor
            winding services — built on precision, performance, and reliability.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 px-6 md:px-12 lg:px-24 text-center">
        <h2 className="text-3xl font-bold mb-6 text-emerald-700">
          Who We Are
        </h2>
        <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
          Founded with a passion for industrial excellence, our company
          specializes in <strong>LT Panel manufacturing</strong> and{" "}
          <strong>motor winding repair</strong> services. With years of
          engineering experience, we’ve established ourselves as a trusted
          partner to industries seeking reliable electrical control solutions.
        </p>
        <p className="max-w-3xl mx-auto text-gray-600 mt-4 leading-relaxed">
          Our workshop is equipped with state-of-the-art tools and a skilled
          technical team committed to quality, safety, and timely delivery.
          Whether it’s designing panels or repairing motors, we ensure every job
          meets the highest standards.
        </p>
      </section>

      {/* Mission and Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 text-center md:text-left">
          <div className="p-6 rounded-2xl shadow bg-gray-50 border-l-4 border-emerald-600">
            <h3 className="text-2xl font-bold mb-3 text-emerald-700">
              Our Mission
            </h3>
            <p className="text-gray-600">
              To deliver high-performance electrical solutions that empower
              industries, improve efficiency, and ensure long-term reliability —
              all while maintaining uncompromised quality and customer trust.
            </p>
          </div>
          <div className="p-6 rounded-2xl shadow bg-gray-50 border-l-4 border-teal-600">
            <h3 className="text-2xl font-bold mb-3 text-emerald-700">
              Our Vision
            </h3>
            <p className="text-gray-600">
              To be recognized as a leading name in the field of LT panels and
              motor winding services — setting benchmarks for innovation,
              sustainability, and customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-center text-emerald-700 mb-10">
          Our Core Values
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          {[
            {
              title: "Quality",
              desc: "We use the best materials, skilled workmanship, and quality checks to ensure durable, safe, and efficient products.",
              icon: "🛠️",
            },
            {
              title: "Integrity",
              desc: "We operate with honesty and transparency, ensuring that every project is delivered with accountability and fairness.",
              icon: "🤝",
            },
            {
              title: "Customer Focus",
              desc: "Our clients’ satisfaction drives our work — we listen, adapt, and deliver solutions that truly meet their needs.",
              icon: "💡",
            },
            {
              title: "Innovation",
              desc: "We continuously improve our techniques and adopt modern technologies to stay ahead in industrial standards.",
              icon: "⚙️",
            },
            {
              title: "Safety",
              desc: "Electrical safety is our top priority — every panel and repair is tested for compliance and reliability.",
              icon: "🧯",
            },
            {
              title: "Teamwork",
              desc: "Our success is built on collaboration — a united team of engineers, technicians, and service experts.",
              icon: "👷‍♂️",
            },
          ].map((value) => (
            <div
              key={value.title}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition text-center border-t-4 border-emerald-600"
            >
              <div className="text-4xl mb-3">{value.icon}</div>
              <h3 className="font-semibold text-xl mb-2 text-emerald-700">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold text-emerald-700 mb-6">
          Why Choose Us?
        </h2>
        <p className="max-w-3xl mx-auto text-gray-600 mb-10">
          We don’t just provide services — we build relationships based on
          reliability, trust, and long-term value.
        </p>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Experienced Team",
              desc: "Our skilled engineers and technicians bring years of field experience to every project.",
              icon: "👨‍🔧",
            },
            {
              title: "Timely Delivery",
              desc: "We understand industry demands and ensure on-time completion without compromising quality.",
              icon: "⏱️",
            },
            {
              title: "Affordable Solutions",
              desc: "High-quality services at fair and transparent pricing — tailored to fit your project needs.",
              icon: "💰",
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition text-center border-t-4 border-teal-600"
            >
              <div className="text-4xl mb-3">{feature.icon}</div>
              <h3 className="font-semibold text-xl mb-2 text-emerald-700">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-emerald-700 via-teal-700 to-green-700 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Let’s Build Something Powerful Together
        </h2>
        <p className="mb-6 text-lg">
          Get in touch for custom LT panels or expert motor rewinding services.
        </p>
        <a
          href="/contact"
          className="bg-white text-emerald-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Contact Us
        </a>
      </section>
    </main>
  );
}
