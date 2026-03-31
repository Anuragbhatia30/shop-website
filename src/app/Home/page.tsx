"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
// import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-50 text-slate-900 font-sans">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex flex-col items-center justify-center text-center bg-gradient-to-br from-emerald-900 via-teal-900 to-slate-900 text-white overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0 bg-[url('/images/image 1.jpeg')] bg-cover bg-center"
        />
        <div className="absolute inset-0 bg-black/50" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl px-6 relative z-10"
        >
          {/* <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-emerald-300 uppercase bg-emerald-950/50 backdrop-blur-md border border-emerald-500/30 rounded-full"
          >
            Engineering Excellence Since 1990
          </motion.span> */}
          <h1 className="text-5xl sm:text-7xl font-extrabold mb-8 tracking-tight leading-[1.1]">
            Reliable <span className="text-emerald-400">LT Panels</span> &{" "}
            <br /> Professional Winding
          </h1>
          <p className="text-xl sm:text-2xl mb-10 text-emerald-50/80 font-normal max-w-2xl mx-auto">
            Your trusted partner for industrial electrical solutions — from
            manufacturing bespoke panels to expert motor repairs.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-500 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all duration-300"
            >
              Our Services
            </Link>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300"
            >
              Contact Us
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        {/* <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex"
        >
          <div className="w-6 h-10 border-2 border-emerald-500/30 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-emerald-400 rounded-full" />
          </div>
        </motion.div> */}
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-slate-800 mb-6"
            >
              Our Core <span className="text-emerald-700">Expertise</span>
            </motion.h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Decades of experience in delivering high-performance electrical
              engineering solutions for diverse industrial needs.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                title: "LT Panel Manufacturing",
                desc: "Custom-engineered LT panels designed for heavy industrial power distribution with integrated safety.",
                icon: "⚙️",
                color: "emerald",
              },
              {
                title: "Motor & Generator Winding",
                desc: "Professional rewinding and servicing for all types of AC/DC motors, ensuring maximum longevity.",
                icon: "🔧",
                color: "teal",
              },
              {
                title: "Industrial Maintenance",
                desc: "Comprehensive electrical maintenance solutions for factories, plants, and commercial infrastructure.",
                icon: "🏭",
                color: "cyan",
              },
              {
                title: "Chemical Earthings",
                desc: "Specialized earthing solutions designed to protect industrial equipment and ensure human safety.",
                icon: "🛠️",
                color: "blue",
              },
            ].map((service) => (
              <motion.div
                key={service.title}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 },
                }}
                className="group p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:bg-emerald-50 transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="font-bold text-xl mb-4 text-slate-800 group-hover:text-emerald-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-500 leading-relaxed text-sm">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Counter (Simple version for a start) */}
      <section className="py-20 bg-emerald-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Years Experience", value: "30+" },
              { label: "Panels Built", value: "100+" },
              { label: "Motors Repaired", value: "10K+" },
              { label: "Happy Clients", value: "100+" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-extrabold text-emerald-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-emerald-100/60 font-semibold uppercase tracking-wider text-xs">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-950 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-600/20 blur-[100px] rounded-full" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-teal-600/20 blur-[100px] rounded-full" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-4xl mx-auto px-6"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 tracking-tight">
            Consult with Our Engineers
          </h2>
          <p className="mb-10 text-xl text-slate-400 max-w-2xl mx-auto">
            From complex panel design to urgent equipment maintenance, our team
            is equipped to handle your most demanding electrical challenges.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 bg-emerald-600 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-emerald-500 hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all duration-300 transform hover:-translate-y-1"
          >
            Start Your Project
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
