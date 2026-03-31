"use client";

import React from "react";
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";

export default function About() {
  return (
    <main className="min-h-screen bg-neutral-50 text-slate-900 font-sans">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex flex-col items-center justify-center text-center bg-gradient-to-br from-emerald-900 via-teal-900 to-slate-900 text-white overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0 bg-[url('/images/image 2.jpeg')] bg-cover bg-center"
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl px-6 relative z-10"
        >
          {/* <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-emerald-300 uppercase bg-emerald-950/50 backdrop-blur-md border border-emerald-500/30 rounded-full">
            Our Journey & Commitment
          </span> */}
          <h1 className="text-5xl sm:text-7xl font-extrabold mb-8 tracking-tight leading-[1.1]">
            About <span className="text-emerald-400">Our Company</span>
          </h1>
          <p className="text-xl sm:text-2xl mb-10 text-emerald-50/80 font-normal max-w-2xl mx-auto">
            Delivering trusted LT panel manufacturing and professional motor winding services built on precision and reliability.
          </p>
        </motion.div>
      </section>

      {/* Company Overview */}
      <section className="py-24 max-w-7xl mx-auto px-6 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-8 leading-tight">
              A Legacy of <span className="text-emerald-700">Industrial Excellence</span>
            </h2>
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                Founded with a passion for industrial engineering, our company specializes in <strong className="text-slate-900 font-semibold">LT Panel manufacturing</strong> and <strong className="text-slate-900 font-semibold">motor winding repair</strong> services. 
              </p>
              <p>
                With decades of field experience, we&apos;ve established ourselves as a trusted partner to industries seeking reliable electrical control solutions. Our workshop is equipped with state-of-the-art diagnostic tools and a skilled technical team committed to quality, safety, and timely delivery.
              </p>
              <p>
                Whether it&apos;s designing complex distribution panels or repairing heavy-duty industrial motors, we ensure every job meets the highest international standards of performance and durability.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl relative z-10">
              <img src="/images/image 6.jpeg" alt="Our Workshop" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-emerald-100 rounded-3xl -z-0" />
            <div className="absolute -top-8 -left-8 w-32 h-32 border-4 border-emerald-500/20 rounded-3xl -z-0" />
          </motion.div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "Our Mission",
                content: "To deliver high-performance electrical solutions that empower industries, improve efficiency, and ensure long-term reliability — all while maintaining uncompromised quality and customer trust.",
                icon: "🎯",
                gradient: "from-emerald-500/20 to-transparent"
              },
              {
                title: "Our Vision",
                content: "To be recognized as a leading name in the field of LT panels and motor winding services — setting global benchmarks for innovation, sustainability, and complete customer satisfaction.",
                icon: "👁️",
                gradient: "from-teal-500/20 to-transparent"
              }
            ].map((box, i) => (
              <motion.div
                key={box.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className={`p-10 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 relative overflow-hidden`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${box.gradient} -z-10`} />
                <div className="text-4xl mb-6">{box.icon}</div>
                <h3 className="text-3xl font-bold mb-4 text-emerald-400">{box.title}</h3>
                <p className="text-slate-400 text-lg leading-relaxed">{box.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">Our <span className="text-emerald-700">Core Values</span></h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">The fundamental principles that guide every project we undertake and every decision we make.</p>
          </div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { title: "Quality", desc: "Premium materials and skilled workmanship for durable, safe products.", icon: "🛠️" },
              { title: "Integrity", desc: "Honesty and transparency in every project we deliver.", icon: "🤝" },
              { title: "Focus", desc: "Customer satisfaction drives our adaptive technical solutions.", icon: "💡" },
              { title: "Innovation", desc: "Adopting modern technologies to stay ahead in industrial standards.", icon: "⚙️" },
              { title: "Safety", desc: "Rigorous testing to ensure absolute electrical safety and compliance.", icon: "🧯" },
              { title: "Teamwork", desc: "A united team of engineers and technicians working for excellence.", icon: "👷‍♂️" },
            ].map((value) => (
              <motion.div
                key={value.title}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="group p-8 rounded-2xl bg-neutral-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:border-transparent transition-all duration-300"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{value.icon}</div>
                <h3 className="font-bold text-xl mb-2 text-slate-800 group-hover:text-emerald-700 transition-colors uppercase tracking-tight">{value.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-950 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-600/20 blur-[100px] rounded-full" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-4xl mx-auto px-6"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 tracking-tight uppercase">
            Let&apos;s Build Success Together
          </h2>
          <p className="mb-10 text-xl text-slate-400 max-w-2xl mx-auto">
            Ready to experience engineering excellence? Consult with our team today for your electrical infrastructure needs.
          </p>
          <a
            href="/contact"
            className="group inline-flex items-center gap-3 bg-emerald-600 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-emerald-500 hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all duration-300 transform hover:-translate-y-1"
          >
            Get in Touch <MoveRight className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </section>
    </main>
  );
}
