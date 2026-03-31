'use client'

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MoveRight, CheckCircle2 } from "lucide-react";

export default function Services() {
  return (
    <main className="min-h-screen bg-neutral-50 text-slate-900 font-sans">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex flex-col items-center justify-center text-center bg-gradient-to-br from-emerald-900 via-teal-900 to-slate-900 text-white overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 12, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0 bg-[url('/images/image 4.jpeg')] bg-cover bg-center"
        />
        <div className="absolute inset-0 bg-black/50" />
        
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="max-w-4xl px-6 relative z-10"
        >
          {/* <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-emerald-300 uppercase bg-emerald-950/50 backdrop-blur-md border border-emerald-500/30 rounded-full">
            Our Professional Expertise
          </span> */}
          <h1 className="text-5xl sm:text-7xl font-extrabold mb-8 tracking-tight leading-[1.1]">
            Comprehensive <span className="text-emerald-400">Electrical Services</span>
          </h1>
          <p className="text-xl sm:text-2xl mb-10 text-emerald-50/80 font-normal max-w-2xl mx-auto">
            From bespoke LT panel manufacturing to precision motor rewinding and industrial maintenance.
          </p>
        </motion.div>
      </section>

      {/* Services Grid Section */}
      <section className="py-24 max-w-7xl mx-auto px-6 overflow-hidden">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">What We <span className="text-emerald-700 underline decoration-emerald-200 underline-offset-8">Deliver</span></h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">We provide end-to-end industrial electrical solutions designed for uptime, safety, and operational efficiency.</p>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {[
            {
              title: "LT Panel Manufacturing",
              desc: "Custom-designed LT panels built for industrial, commercial, and residential power distribution systems.",
              icon: "⚙️",
              details: ["Power Control Center (PCC)", "Automatic Power Factor (APFC)", "AMF & Synchronization Panels", "Distribution Boards (DB)"]
            },
            {
              title: "AC/DC Motor Winding",
              desc: "Expert rewinding and overhauling for all types of industrial motors, ensuring maximum longevity.",
              icon: "🔧",
              details: ["Single & Three-phase rewinding", "Insulation testing", "Dynamic balancing", "Generator services"]
            },
            {
              title: "Industrial Maintenance",
              desc: "Preventive and corrective maintenance for industrial electrical systems to eliminate downtime.",
              icon: "🏭",
              details: ["Routine inspections", "Fault troubleshooting", "Panel maintenance", "Safety compliance audits"]
            },
            {
              title: "Retrofitting & Upgrades",
              desc: "Modernizing existing systems with smart components for better monitoring and lower costs.",
              icon: "⚡",
              details: ["System modernization", "Relay replacement", "Smart monitoring", "Thermal analysis"]
            },
            {
              title: "On-Site Support",
              desc: "24/7 technical assistance and on-site diagnosis for urgent industrial electrical challenges.",
              icon: "🧰",
              details: ["Emergency repairs", "Preventive audits", "On-site installation", "Quick diagnosis"]
            },
            {
              title: "Custom Engineering",
              desc: "Tailored electrical solutions built based on your specific industrial requirements and goals.",
              icon: "🛠️",
              details: ["Control system design", "Automation integration", "Load balancing", "Energy consultation"]
            }
          ].map((service, index) => (
            <motion.div
              key={service.title}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              className="group p-10 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-2xl hover:border-emerald-100 transition-all duration-500 overflow-hidden relative"
            >
              <div className="absolute top-0 right-0 p-8 text-emerald-50 text-8xl font-black group-hover:text-emerald-100/50 transition-colors pointer-events-none -mr-4 -mt-4">
                {index + 1}
              </div>
              
              <div className="text-5xl mb-8 relative z-10">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-slate-800 group-hover:text-emerald-700 transition-colors relative z-10">{service.title}</h3>
              <p className="text-slate-500 mb-8 relative z-10 leading-relaxed">{service.desc}</p>
              
              <ul className="space-y-3 relative z-10">
                {service.details.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-600 text-sm font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-emerald-900 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-600/20 blur-[100px] rounded-full" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-4xl mx-auto px-6"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 tracking-tight">
            Ready for Excellence?
          </h2>
          <p className="mb-10 text-xl text-emerald-100/80 max-w-2xl mx-auto">
            Partner with us for customized LT panels, expert motor winding, and proactive industrial maintenance services.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 bg-white text-emerald-900 px-10 py-5 rounded-full font-bold text-lg hover:bg-emerald-50 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-300 transform hover:-translate-y-1"
          >
            Start Your Consultation <MoveRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
