"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState, useRef } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/image-gallery.css";
import type { ImageGalleryRef } from "react-image-gallery";
import { MoveRight } from "lucide-react";

/**
 * Project Gallery Data
 * Note: Filenames match the existing files in /public/images
 */
const projectGallery = [
  {
    name: "Precision LT Panel Manufacturing",
    image: "/images/image 1.jpeg",
    description:
      "Custom-engineered LT panels designed for heavy industrial power distribution with integrated safety features.",
  },
  {
    name: "Advanced Control Circuitry",
    image: "/images/image 2.jpeg",
    description:
      "Highly organized and efficient control panel wiring for automation, ensuring minimal downtime and easy maintenance.",
  },
  {
    name: "High-Efficiency Motor Rewinding",
    image: "/images/imge 3.jpeg", // Matches the typo in filesystem
    description:
      "Professional motor rewinding service using premium materials to ensure maximum operational life and efficiency.",
  },
  {
    name: "Industrial Earthings & Safety",
    image: "/images/image 4.jpeg",
    description:
      "Comprehensive earthing solutions designed to protect industrial equipment and ensure human safety.",
  },
  {
    name: "Heavy-Duty Generator Servicing",
    image: "/images/image 5.jpeg",
    description:
      "Specialized maintenance and repair services for large-scale industrial generators to maintain power reliability.",
  },
  {
    name: "Distribution Board Assembly",
    image: "/images/image 6.jpeg",
    description:
      "Durable and reliable distribution boards engineered for commercial infrastructure and power management.",
  },
  {
    name: "Industrial Switchgear Panels",
    image: "/images/image 7.jpeg",
    description:
      "Standard-compliant switchgear manufacturing for stable power supply and advanced protection mechanisms.",
  },
  {
    name: "Complex Panel Engineering",
    image: "/images/image  8.jpeg", // Matches the double space in filesystem
    description:
      "Tailored engineering solutions for complex industrial electrical setups, built for performance and durability.",
  },
  {
    name: "Custom Busbar Layouts",
    image: "/images/image  9.jpeg", // Matches the double space in filesystem
    description:
      "Precision-bent copper busbars designed for high-amperage current transmission with minimal power loss.",
  },
  {
    name: "Final Quality Testing",
    image: "/images/image 10.jpeg",
    description:
      "Rigorous quality assurance and load testing of all panels before delivery to ensure zero-fault operation.",
  },
];

// Map project data to the format required by react-image-gallery
const galleryItems = projectGallery.map((project) => ({
  original: project.image,
  thumbnail: project.image,
  description: project.name,
  originalAlt: project.name,
  thumbnailAlt: project.name,
}));

export default function Products() {
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const galleryRef = useRef<ImageGalleryRef>(null);

  /**
   * Opens the gallery dialog and slides to the clicked image's index
   */
  const handleImageClick = (index: number) => {
    setSelectedIndex(index);
    setOpen(true);
  };

  return (
    <main className="min-h-screen bg-neutral-50 text-slate-900 font-sans">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex flex-col items-center justify-center text-center bg-gradient-to-br from-emerald-900 via-teal-900 to-slate-900 text-white overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0 bg-[url('/images/image 1.jpeg')] bg-cover bg-center"
        />
        <div className="absolute inset-0 bg-black/40" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl px-6 relative z-10"
        >
          {/* <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-emerald-300 uppercase bg-emerald-950/50 backdrop-blur-md border border-emerald-500/30 rounded-full">
            Showcase of Excellence
          </span> */}
          <h1 className="text-5xl sm:text-7xl font-extrabold mb-8 tracking-tight leading-[1.1]">
            Our Industrial{" "}
            <span className="text-emerald-400">Work Gallery</span>
          </h1>
          <p className="text-xl sm:text-2xl mb-10 text-emerald-50/80 font-normal max-w-2xl mx-auto">
            A visual documentation of our precision engineering, from bespoke
            power panels to heavy-duty motor repairs.
          </p>
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

      {/* Gallery Grid Section */}
      <section className="py-24 max-w-7xl mx-auto px-6 overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 leading-tight">
              Precision Engineering in <br />
              <span className="text-emerald-700 underline decoration-emerald-200 underline-offset-8">
                Every Component
              </span>
            </h2>
            <p className="text-slate-600 text-lg">
              Each project demonstrates our commitment to safety, industrial
              standards, and superior craftsmanship. Click on any image to view
              the full gallery.
            </p>
          </div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projectGallery.map((project, index) => (
            <motion.div
              key={project.name}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              onClick={() => handleImageClick(index)}
              className="group relative bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-100 flex flex-col cursor-pointer"
            >
              <div className="relative h-72 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="text-emerald-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-2 block">Quality Standards</span>
                  <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-emerald-700 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>
                <div className="mt-6 flex items-center text-emerald-700 font-bold text-xs uppercase tracking-widest group-hover:gap-3 transition-all">
                  Focus Details <MoveRight className="ml-2 w-4 h-4" />
                </div> */}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA Section */}
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
          <a
            href="/contact"
            className="group inline-flex items-center gap-3 bg-emerald-600 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-emerald-500 hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all duration-300 transform hover:-translate-y-1"
          >
            Start Your Project{" "}
            <MoveRight className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </section>

      {/* Image Gallery Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-[95vw] lg:max-w-5xl p-0 overflow-hidden bg-slate-950 border-slate-800 rounded-2xl flex items-center justify-center w-[80vw]">
          <div className="relative">
            <DialogHeader className="p-4 bg-slate-900 flex flex-row items-center justify-between space-y-0 border-b border-slate-800">
              <DialogTitle className="text-slate-200 text-lg font-semibold truncate pr-8">
                {/* {projectGallery[selectedIndex]?.name} */}
                Our Industrial Work Gallery
              </DialogTitle>
            </DialogHeader>
            <div className="p-2 sm:p-4 flex items-center justify-center w-full">
              {open && (
                <ImageGallery
                  ref={galleryRef}
                  items={galleryItems}
                  startIndex={selectedIndex}
                  showPlayButton={false}
                  showFullscreenButton={false}
                  showBullets={true}
                  showThumbnails={true}
                  thumbnailPosition="bottom"
                  useBrowserFullscreen={false}
                  additionalClass="custom-image-gallery"
                  onSlide={(index) => setSelectedIndex(index)}
                />
              )}
            </div>
            {/* Project Details in Dialog */}
            {/* <div className="p-6 bg-slate-900/50 border-t border-slate-800">
                <p className="text-slate-400 text-sm leading-relaxed max-w-3xl">
                    <span className="text-emerald-500 font-bold mr-2">Project Description:</span>
                    {projectGallery[selectedIndex]?.description}
                </p>
            </div> */}
          </div>
        </DialogContent>
      </Dialog>

      {/* Custom Styling for Image Gallery */}
      <style jsx global>{`
        .custom-image-gallery {
          background: transparent;
          width: 65vw !important;
        }
        .image-gallery-slide img {
          max-height: 55vh !important;
          object-fit: contain !important;
          border-radius: 8px;
        }
        .image-gallery-thumbnail {
          border-radius: 6px;
          overflow: hidden;
          width: 90px !important;
          border: 2px solid transparent !important;
          transition: all 0.3s ease;
        }
        .image-gallery-thumbnail.active {
          border-color: #10b981 !important;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
        }
        .image-gallery-thumbnail img {
          object-fit: cover;
          height: 50px;
        }
        .image-gallery-description {
          display: none;
        }
        .image-gallery-bullets .image-gallery-bullet {
          bottom: 20px;
          margin: 0 5px;
          padding: 4px;
          border: 1px solid #10b981;
        }
        .image-gallery-bullets .image-gallery-bullet.active {
          background-color: #10b981;
          transform: scale(1.2);
        }
        .image-gallery-left-nav .image-gallery-svg,
        .image-gallery-right-nav .image-gallery-svg {
          height: 60px;
          width: 30px;
        }
        @media (max-width: 640px) {
          .image-gallery-slide img {
            max-height: 50vh !important;
          }
          .image-gallery-thumbnail {
            width: 60px !important;
          }
        }
      `}</style>
    </main>
  );
}
