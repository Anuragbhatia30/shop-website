'use client'

import React from "react";
import Link from "next/link";

export default function Services() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center py-20 bg-gradient-to-r from-emerald-700 via-teal-700 to-green-700 text-white">
        <div className="max-w-3xl px-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Our Services
          </h1>
          <p className="text-lg sm:text-xl mb-6 text-gray-100">
            Delivering top-quality electrical solutions — from LT panel
            manufacturing to professional AC motor rewinding and maintenance.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <h2 className="text-3xl font-bold text-center text-emerald-700 mb-12">
          What We Offer
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
          {[
            {
              title: "LT Panel Manufacturing ⚙️",
              desc: "We design and manufacture reliable, customized LT panels that meet all safety and performance standards. Our panels are built for industrial, commercial, and residential power systems.",
              details: [
                "Power Control Center (PCC)",
                "Motor Control Center (MCC)",
                "AMF & Synchronization Panels",
                "Distribution Boards (DB)",
              ],
            },
            {
              title: "AC Motor Winding Repair 🔧",
              desc: "Our expert technicians provide rewinding, overhauling, and maintenance services for all types of AC motors — ensuring maximum performance and long motor life.",
              details: [
                "Single-phase & Three-phase rewinding",
                "Bearing replacement",
                "Insulation testing & varnishing",
                "Dynamic balancing & load testing",
              ],
            },
            {
              title: "Industrial Electrical Maintenance 🏭",
              desc: "Comprehensive preventive and corrective maintenance for your industrial electrical systems to minimize downtime and ensure safety compliance.",
              details: [
                "Routine inspections",
                "Fault detection & troubleshooting",
                "Panel and wiring maintenance",
                "Energy efficiency optimization",
              ],
            },
            {
              title: "Panel Upgradation & Retrofitting ⚡",
              desc: "We upgrade existing panels with modern components, improving efficiency, reliability, and safety while reducing operational costs.",
              details: [
                "Old system modernization",
                "Smart monitoring integration",
                "Relay and switchgear replacement",
                "Thermal scanning and analysis",
              ],
            },
            {
              title: "On-Site Electrical Support 🧰",
              desc: "We provide on-site diagnosis and repair services for industrial clients to ensure quick resolution and minimal production loss.",
              details: [
                "24/7 support availability",
                "Emergency troubleshooting",
                "On-site motor rewinding & installation",
                "Preventive electrical audits",
              ],
            },
            {
              title: "Custom Electrical Solutions 🛠️",
              desc: "Have a special project? We create tailored solutions for your power and control systems based on specific industrial requirements.",
              details: [
                "Custom LT panel design",
                "Automation integration",
                "Load balancing solutions",
                "Energy-saving consultation",
              ],
            },
          ].map((service) => (
            <div
              key={service.title}
              className="bg-gray-50 border-t-4 border-emerald-600 p-6 rounded-2xl shadow hover:shadow-xl transition"
            >
              <h3 className="font-bold text-xl text-emerald-700 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.desc}</p>
              <ul className="text-gray-700 list-disc list-inside space-y-1 text-sm">
                {service.details.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-emerald-700 via-teal-700 to-green-700 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Looking for Reliable Electrical Solutions?
        </h2>
        <p className="mb-6 text-lg">
          Partner with us for customized LT panels, expert motor winding, and
          industrial maintenance services.
        </p>
        <Link
          href="/contact"
          className="bg-white text-emerald-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Contact Us
        </Link>
      </section>
    </main>
  );
}
