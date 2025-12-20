'use client'

import React from "react";

const products = [
  {
    name: "LT Panel Model A",
    image: "/images/lt-panel-a.jpg", // replace with actual image path
    description: "High-quality LT panel suitable for industrial applications.",
  },
  {
    name: "LT Panel Model B",
    image: "/images/lt-panel-b.jpg",
    description: "Customizable LT panel with advanced protection features.",
  },
  {
    name: "Motor Winding Repair Service",
    image: "/images/motor-rewind.jpg",
    description: "Expert AC motor rewinding and repair services.",
  },
  {
    name: "Industrial Control Panel",
    image: "/images/control-panel.jpg",
    description: "Reliable control panels for industrial automation systems.",
  },
  {
    name: "Distribution Board",
    image: "/images/distribution-board.jpg",
    description: "Durable DB panels designed for safety and efficiency.",
  },
  {
    name: "Customized Electrical Solutions",
    image: "/images/custom-solution.jpg",
    description: "Tailored electrical solutions for unique industrial requirements.",
  },
];

export default function Products() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center py-20 bg-gradient-to-r from-emerald-700 via-teal-700 to-green-700 text-white">
        <div className="absolute top-2 right-6 text-sm sm:text-base font-semibold tracking-wide">
          <span className="text-sm font-medium border rounded-lg px-2 py-1">GST No. : 03AEDPB0688L1Z0</span>
        </div>
        <div className="max-w-3xl px-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Our Product Gallery
          </h1>
          <p className="text-lg sm:text-xl mb-6 text-gray-100">
            Browse our LT panels, industrial electrical solutions, and motor repair services.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-emerald-700 mb-10 text-center">
          Explore Our Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.name}
              className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden border-t-4 border-emerald-600"
            >
              <img  
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-emerald-700 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-emerald-700 via-teal-700 to-green-700 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Need More Details?</h2>
        <p className="mb-6 text-lg">
          Contact us for custom LT panels, motor rewinding, or industrial electrical solutions.
        </p>
        <a
          href="/contact"
          className="bg-white text-emerald-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Get In Touch
        </a>
      </section>
    </main>
  );
}
